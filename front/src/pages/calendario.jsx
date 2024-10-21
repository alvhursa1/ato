import "../styles/pages/calendario.css";
import Square from "../../public/static/svg/cuadrado.svg?react";
import { FaRegClock } from "react-icons/fa";
import { FaVideo } from "react-icons/fa6";
import { GrMapLocation } from "react-icons/gr";
import { useState, useEffect } from "react";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Input from "@mui/material/Input";
import Chip from "@mui/material/Chip";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Logo from "../../public/static/svg/Logo.svg?react";

const Calendario = () => {
  const Navigate = useNavigate();
  const [date, setDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(getFirstAvailableDay());
  const month = date.getMonth();
  const year = date.getFullYear();
  const [events, setEvents] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const theme = createTheme({
    palette: {
      primary: {
        main: "#000", // Cambia esto al color que quieras
      },
    },
    components: {
      MuiInputBase: {
        styleOverrides: {
          root: {
            "&::before": {
              borderBottom: ".5px solid #000 !important",
            },
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            left: "-10px",
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          select: {
            padding: "0px 0px 3px",
          },
        },
      },
    },
  });

  const ITEM_HEIGHT = 48;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 5.5,
      },
    },
  };

  const items = [
    "Marketing",
    "Web and UX/UI",
    "Art Direction",
    "Branding and Brand Strategy",
    "Spatial and Interiorism Design",
    "Business Innovation and Service Design",
    "Social Innovation",
  ];

  const budget = [
    "1500-2000 USD",
    "2000-5000 USD",
    "5000-10000 USD",
    "more than 10000 USD",
  ];

  const [item, setItem] = useState([]);
  const [budgets, setBudgets] = useState([]);

  const handleChangeItem = (event) => {
    const {
      target: { value },
    } = event;
    setItem(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChangeBudget = (event) => {
    const {
      target: { value },
    } = event;
    setBudgets(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/events");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        const events = data.map((event) => {
          const start = new Date(event.start.dateTime);
          const end = new Date(event.end.dateTime);

          return {
            start,
            end,
          };
        });
        setEvents(events);

        console.log("Events:", events);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  function getFirstAvailableDay() {
    let futureDate = new Date();
    let daysAdded = 0;
    while (daysAdded < 5) {
      futureDate.setDate(futureDate.getDate() + 1);
      if (futureDate.getDay() !== 0 && futureDate.getDay() !== 6) {
        daysAdded++;
      }
    }
    return {
      day: futureDate.getDate(),
      month: futureDate.getMonth(),
      year: futureDate.getFullYear(),
    };
  }

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startDay = new Date(year, month, 1).getDay();

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const days = [];
  for (let i = 0; i < startDay; i++) {
    days.push(<td key={`start-${i}`}></td>);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    const dayDate = new Date(year, month, i);
    const isToday = dayDate.toDateString() === new Date().toDateString();

    let futureDate = new Date();
    let daysAdded = 0;
    while (daysAdded < 5) {
      futureDate.setDate(futureDate.getDate() + 1);
      if (futureDate.getDay() !== 0 && futureDate.getDay() !== 6) {
        daysAdded++;
      }
    }

    const isPast =
      dayDate < new Date(new Date().setHours(0, 0, 0, 0)) ||
      dayDate <= futureDate;
    const isWeekend = dayDate.getDay() === 0 || dayDate.getDay() === 6;
    days.push(
      <td key={i}>
        <button
          className={`button-calendar ${selectedDay && selectedDay.day === i && selectedDay.month === month && selectedDay.year === year ? "selected" : ""}`}
          onClick={() => !(isPast || isWeekend) && handleDayClick(i)}
          disabled={isPast || isWeekend}
        >
          {i}
          {isToday && <span className="today-indicator"></span>}
        </button>
      </td>
    );
  }

  let rows = [];
  for (let i = 0; i < days.length; i += 7) {
    rows.push(<tr key={i}>{days.slice(i, i + 7)}</tr>);
  }
  const weeksInMonth = Math.ceil((daysInMonth + startDay) / 7);
  for (let i = weeksInMonth; i < 6; i++) {
    rows.push(<tr key={`empty-${i}`}>{Array(7).fill(<td></td>)}</tr>);
  }

  function handleDayClick(day) {
    setSelectedDay({ day, month, year });
  }

  function getAvailableHours() {
    const hours = [];
    for (let i = 8; i <= 18; i++) {
      hours.push(`${i}:00`);
      hours.push(`${i}:30`);
    }

    const selectedDate = selectedDay
      ? new Date(selectedDay.year, selectedDay.month, selectedDay.day)
      : new Date();

    const eventsOnSelectedDay = events.filter((event) => {
      const startDate = new Date(event.start);
      return startDate.toDateString() === selectedDate.toDateString();
    });

    eventsOnSelectedDay.forEach((event) => {
      const start = new Date(event.start);
      const startHour = start.getHours();
      const startMinutes = start.getMinutes();

      if (startMinutes < 30) {
        const index = hours.indexOf(`${startHour}:00`);
        if (index > -1) {
          hours.splice(index, 1);
        }
      } else {
        const index = hours.indexOf(`${startHour}:30`);
        if (index > -1) {
          hours.splice(index, 1);
        }
      }
    });

    return hours;
  }

  function handleTimeClick(time) {
    const date = selectedDay
      ? new Date(selectedDay.year, selectedDay.month, selectedDay.day)
      : new Date();
    const [hour, minute] = time.split(":");
    date.setHours(hour, minute);
    setSelectedTime(date);
  }

  useEffect(() => {
    console.log("Selected time:", selectedTime);
  }, [selectedTime]);

  function handleBackClick() {
    setSelectedTime(null);
    setBudgets([]);
    setItem([]);
  }

  const [submit, setSubmit] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const company = formData.get("company");
    const phone = formData.get("phone");
    // Crear un objeto con los datos del formulario y el día y la hora seleccionados
    const data = {
      name,
      email,
      company,
      phone,
      item,
      budgets,
      day: selectedDay,
      time: selectedTime,
    };

    console.log("Form data:", data);

    axios
      .post("/api/send-calendar", data)
      .then((response) => {
        // Handle success
        console.log("Response:", response.data);
        setSubmit(true);
      })
      .catch((error) => {
        // Handle error
        console.error("Error:", error);
      });
  }

  return (
    <div className="calendario">
      <Link to={"/"} className="logo-calendar">
        <Logo className="logo-calendar-logo" />
      </Link>
      <div className="flex-calendario">
        <div className="item-1-calendario">
          <Square style={{ width: "30px" }} />
          {submit ? (
            <>
              <p>Demo meeting scheduled.</p>
              <p>We’ve sent you and email with all the details.</p>
            </>
          ) : (
            <h2>ĀTO Studio</h2>
          )}

          <div className="item-icon-calendario">
            <FaRegClock />
            <p>30 mins</p>
          </div>
          <div className="item-icon-calendario">
            <FaVideo />
            <p>Google Meet</p>
          </div>
          <div className="item-icon-calendario">
            <GrMapLocation />
            <p>Bogota GMT -5</p>
          </div>
          {selectedTime && (
            <div>
              <p>
                <span
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  {selectedTime.toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <br />
                {`${selectedTime.toLocaleTimeString("en-US", {
                  hour: "numeric",
                  minute: "numeric",
                })} - ${new Date(
                  selectedTime.getTime() + 30 * 60000
                ).toLocaleTimeString("en-US", {
                  hour: "numeric",
                  minute: "numeric",
                })}`}
              </p>
            </div>
          )}
          {submit && (
            <div className="details-end">
              <button onClick={() => Navigate("/")} className="back-to-home">
                Back to home
              </button>
            </div>
          )}
        </div>
        <div
          className={`item-2-calendario ${selectedTime ? "item-2-calendario-closing" : ""}`}
        >
          <div className="title-calendar">
            <h2>{`${monthNames[month]} ${year}`}</h2>
            <div className="flex-title-calendar">
              <button
                onClick={() => setDate(new Date(year, month - 1, 1))}
                className="button-calendar-extras"
              >
                <MdNavigateBefore
                  style={{
                    fontSize: "20px",
                  }}
                />
              </button>
              <button
                onClick={() => setDate(new Date(year, month + 1, 1))}
                className="button-calendar-extras"
              >
                <MdNavigateNext
                  style={{
                    fontSize: "20px",
                  }}
                />
              </button>
            </div>
          </div>
          <table className="calendario-container">
            <thead>
              <tr>
                {daysOfWeek.map((day, index) => (
                  <th key={index}>{day}</th>
                ))}
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </table>
        </div>
        <div className={`item-3-calendario ${submit ? "closing" : ""}`}>
          {selectedTime ? (
            <div className="selected-time">
              <form onSubmit={handleSubmit} className="form">
                <label className="label">
                  <input
                    type="text"
                    placeholder=" "
                    className="input"
                    name="name"
                    required
                  />
                  <span className="span">Your name*</span>
                </label>
                <label className="label">
                  <input
                    type="email"
                    placeholder=" "
                    className="input"
                    name="email"
                    required
                  />
                  <span className="span">Email Address*</span>
                </label>
                <label className="label">
                  <input
                    type="text"
                    placeholder=" "
                    className="input"
                    name="company"
                  />
                  <span className="span">company Name</span>
                </label>
                <label className="label">
                  <input
                    type="tel"
                    placeholder=" "
                    className="input"
                    name="phone"
                    required
                  />
                  <span className="span">Phone*</span>
                </label>
                <ThemeProvider theme={theme}>
                  <FormControl fullWidth>
                    <InputLabel
                      sx={{
                        fontSize: "15px",
                        color: "#000",
                        fontFamily: "Aeonik",
                      }}
                    >
                      What services are you interested in? *
                    </InputLabel>
                    <Select
                      multiple
                      value={item}
                      onChange={handleChangeItem}
                      input={<Input />}
                      renderValue={(selected) => (
                        <Box
                          sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}
                        >
                          {selected.map((value) => (
                            <Chip key={value} label={value} />
                          ))}
                        </Box>
                      )}
                      MenuProps={MenuProps}
                    >
                      {items.map((name) => (
                        <MenuItem key={name} value={name}>
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </ThemeProvider>
                <ThemeProvider theme={theme}>
                  <FormControl fullWidth>
                    <InputLabel
                      sx={{
                        fontSize: "15px",
                        color: "#000",
                        fontFamily: "Aeonik",
                      }}
                    >
                      How much is your budget? (Monthly) *
                    </InputLabel>
                    <Select
                      value={budgets}
                      onChange={handleChangeBudget}
                      input={<Input />}
                      MenuProps={MenuProps}
                    >
                      {budget.map((name) => (
                        <MenuItem key={name} value={name}>
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </ThemeProvider>
                <div className="buttons-send">
                  <button
                    onClick={handleBackClick}
                    type="button"
                    className="button"
                  >
                    Back
                  </button>
                  <button type="submit" className="button">
                    Confirm
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <>
              <h2>
                {selectedDay
                  ? new Date(
                      selectedDay.year,
                      selectedDay.month,
                      selectedDay.day
                    ).toLocaleDateString("en-US", {
                      weekday: "short",
                    }) +
                    ", " +
                    selectedDay.day
                  : new Date().toLocaleDateString("en-US", {
                      weekday: "short",
                    }) +
                    ", " +
                    new Date().getDate()}
              </h2>
              <div className="buttons-hours-container">
                {(selectedDay || !selectedDay) &&
                  getAvailableHours().map((time) => (
                    <button
                      className="buttons-hours"
                      key={time}
                      onClick={() => handleTimeClick(time)}
                    >
                      {time}
                    </button>
                  ))}
              </div>
            </>
          )}
        </div>
      </div>
      <div>
        <p className="footer-calendar">
          <p>ĀTO Studio</p>
          <p>Colombia</p>
          <p>2024</p>
        </p>
      </div>
    </div>
  );
};

export default Calendario;
