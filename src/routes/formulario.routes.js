const express = require("express");
const router = express.Router();
const { transporter } = require("../databases/mailer");
const { eliminarEspacios } = require("../databases/commands");
const ejs = require("ejs");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

router.post("/api/mail", async function (req, res) {
  const Fname = req.body.firstName;
  const Lname = req.body.lastName;
  const emailEspacios = req.body.email;
  const phoneEspacios = req.body.phone;
  // Convierte los arrays en strings
  const services = req.body.services.join(", ");
  const budget = req.body.budget.join(", ");

  console.log("Datos del formulario: ", req.body);

  const phone = eliminarEspacios(phoneEspacios);
  const email = eliminarEspacios(emailEspacios);

  // Enviar el correo electrónico con el cuerpo modificado
  try {
    console.log("Enviando correos...");
    ejs.renderFile(
      path.join(__dirname, "../views/contactEmailOwner.ejs"),
      {
        Fname,
        Lname,
        email,
        phone,
        services,
        budget,
      },
      async function (err, contactEmailOwner) {
        if (err) {
          console.log(err);
        } else {
          await transporter.sendMail({
            from: process.env.EMAIL,
            to: process.env.EMAIL,
            subject: "Formulario Atostudio de " + email,
            html: contactEmailOwner,
          });
        }
      }
    );
    ejs.renderFile(
      path.join(__dirname, "../views/contactEmailClient.ejs"),
      {
        Fname,
        Lname,
      },
      async function (err, contactEmailClient) {
        if (err) {
          console.log(err);
        } else {
          await transporter.sendMail({
            from: process.env.EMAIL,
            to: email,
            subject: "Formulario Recibido",
            html: contactEmailClient,
          });
        }
      }
    );
    res.status(200).json({ ok: true, message: "Correos enviados con éxito" });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: "Error al enviar el correo del formulario",
      error: error.message,
    });
  }
});

module.exports = router;
