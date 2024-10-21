const express = require("express");
const router = express.Router();
const { transporter } = require("../databases/mailer");
const { google } = require("googleapis");
const { eliminarEspacios } = require("../databases/commands");
const key = require("../../calendario.json");
const dotenv = require("dotenv");
const { v4: uuidv4 } = require("uuid");
const ical = require("ical-generator").default;
const moment = require("moment");
const ejs = require("ejs");
const path = require("path");
dotenv.config();

// Crear un cliente JWT para la autenticación
const jwtClient = new google.auth.JWT(
  key.client_email,
  null,
  key.private_key,
  ["https://www.googleapis.com/auth/calendar"],
  // "directorcreativo@atostudio.co",
  "directordemarketing@atostudio.co",
  null
);

// Ruta para obtener los eventos del calendario
router.get("/events", async (req, res) => {
  try {
    jwtClient.authorize();
    const calendar = google.calendar({ version: "v3", auth: jwtClient });
    const response = await calendar.events.list({
      // calendarId:
      //   "c_3efed8098d711410ff97f723f2222a2a737045d4c0912c8eb238a40af05fcf75@group.calendar.google.com",
      calendarId:
        "c_7a287176a3184a6b83d31aae454ffca4dd63b8e891cee58b5a7883e1eed7c3cb@group.calendar.google.com",
      timeMin: new Date().toISOString(),
      singleEvents: true,
      orderBy: "startTime",
    });

    res.json(response.data.items);
  } catch (error) {
    res.status(500).send("Error al obtener los eventos del calendario");
  }
});

// Ruta para enviar un formulario de solicitud de cita
router.post("/api/send-calendar", async (req, res) => {
  const name = req.body.name;
  const emailWithEspaces = req.body.email;
  const company = req.body.company;
  const phone = req.body.phone;
  const item = req.body.item;
  const budgets = req.body.budgets;
  const time = req.body.time;
  const day = req.body.day;

  const email = eliminarEspacios(emailWithEspaces);
  const date = new Date(day.year, day.month, day.day); // Months are 0-based in JavaScript
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = date.toLocaleDateString("en-US", options);
  const formattedTime = new Date(time).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  try {
    ejs.renderFile(
      path.join(__dirname, "../views/owner.ejs"),
      {
        name,
        email,
        company,
        phone,
        item,
        budgets,
        formattedDate,
        formattedTime,
        time,
      },
      async function (err, emailOwner) {
        if (err) {
          console.log(err);
        } else {
          await transporter.sendMail({
            from: process.env.EMAIL,
            // to: "directorcreativo@atostudio.co",
            to: "directordemarketing@atostudio.co",
            subject: `Formulario Solicitud de cita Ato de ${email}`,
            html: emailOwner,
          });
        }
      }
    );

    ejs.renderFile(
      path.join(__dirname, "../views/client1.ejs"),
      { name, email, company, item, budgets, formattedDate, formattedTime },
      async function (err, emailClient) {
        if (err) {
          console.log(err);
        } else {
          await transporter.sendMail({
            from: process.env.EMAIL,
            to: email,
            subject: `Peticion de cita Atostudio`,
            html: emailClient,
          });
        }
      }
    );

    res.status(200).send("Datos recibidos correctamente");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error al procesar la solicitud");
  }
});

// Ruta para confirmar una cita
router.get("/api/confirm-appointment", async (req, res) => {
  try {
    const email = req.query.email;
    const name = req.query.name;
    const company = req.query.company;
    const item = req.query.item;
    const budgets = req.query.budgets;
    // const formattedDate = req.query.formattedDate;
    const day = req.query.day;
    const time = req.query.time;
    const formattedTime = new Date(time).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

    // Utilizar la API de Google Calendar para agregar el evento al calendario del propietario
    await jwtClient.authorize();
    const calendar = google.calendar({ version: "v3", auth: jwtClient });
    const event = {
      summary: "Cita confirmada",
      start: {
        dateTime: time,
        timeZone: "America/Bogota",
      },
      end: {
        dateTime: new Date(new Date(time).getTime() + 30 * 60000).toISOString(),
        timeZone: "America/Bogota",
      },
      conferenceData: {
        createRequest: {
          requestId: uuidv4(), // Must be unique for each request
          conferenceSolutionKey: {
            type: "hangoutsMeet",
          },
        },
      },
    };
    const response = await calendar.events.insert({
      auth: jwtClient,
      // calendarId:
      //   "c_3efed8098d711410ff97f723f2222a2a737045d4c0912c8eb238a40af05fcf75@group.calendar.google.com",
      calendarId:
        "c_7a287176a3184a6b83d31aae454ffca4dd63b8e891cee58b5a7883e1eed7c3cb@group.calendar.google.com",
      resource: event,
      conferenceDataVersion: 1,
    });
    let meetLink = "";
    if (response.data.conferenceData) {
      meetLink = response.data.conferenceData.entryPoints[0].uri;
      console.log("Enlace de Google Meet:", meetLink);
    } else {
      console.log("No conference data available");
    }

    const cal = ical({
      domain: "https://atostudio.co",
      name: "Mi calendario",
    });
    cal.method("request");

    cal.createEvent({
      start: moment(time),
      end: moment(time).add(30, "minutes"),
      summary: "Cita confirmada",
      description: "Aquí está el enlace de Google Meet: " + meetLink,
      location: meetLink,
      url: meetLink,
      status: "confirmed",
      organizer: {
        name: "Sebastián Pulido de Ato Studio",
        // email: "directorcreativo@atostudio.co",
        email: "directordemarketing@atostudio.co",
      },
      attendees: [
        {
          email: email,
          status: "accepted",
          role: "req-participant",
          rsvp: true,
        },
      ],
    });

    // Convertir el calendario a una cadena
    const icsEvent = cal.toString();

    ejs.renderFile(
      path.join(__dirname, "../views/confirmationEmail.ejs"),
      {
        name,
        email,
        company,
        item,
        day,
        budgets,
        // formattedDate,
        formattedTime,
        meetLink,
      },
      function (err, confirmationEmail) {
        if (err) {
          console.log(err);
        } else {
          const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: "Confirmación de cita",
            html: confirmationEmail,
            attachments: [
              {
                filename: "event.ics",
                content: Buffer.from(icsEvent),
                contentType: "text/calendar",
              },
            ],
          };

          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.log(error);
            } else {
              console.log("Email sent: ");
            }
          });
        }
      }
    );

    res.status(200).send("Cita confirmada");
  } catch (error) {
    if (error.response) {
      response
        .status(500)
        .send("Error de respuesta HTTP: " + error.response.status);
      response.status(500).send("Detalles del error: " + error.response.data);
    } else if (error.request) {
      response.status(500).send("Error de solicitud HTTP: " + error.request);
    } else {
      response.status(500).send("Error: " + error.message);
    }
  }
});

module.exports = router;
