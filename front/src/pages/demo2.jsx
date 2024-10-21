import { useState } from "react";
import "../styles/pages/demo.css";
import Square from "../../public/static/svg/cuadrado.svg?react";
import DirectionButtons from "../../public/static/svg/lista.svg?react";
import Mail from "../../public/static/svg/correo.svg?react";
import Phone from "../../public/static/svg/telefono.svg?react";
import Calendar from "../../public/static/svg/calendario.svg?react";
import Carousel from "../components/carousel";
import axios from "axios";
import SlideInNotifications from "../components/notification";
import LinkedIn from "../../public/static/svg/linkedin.svg?react";
import Instagram from "../../public/static/svg/instagram.svg?react";
import Behance from "../../public/static/svg/behance.svg?react";
import Facebook from "../../public/static/svg/facebook.svg?react";
import Logo from "../../public/static/svg/Logo.svg?react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Input from "@mui/material/Input";
import Chip from "@mui/material/Chip";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Demo2 = () => {
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

  const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  };
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animation, setAnimation] = useState("slideIn");
  const itemsCarousel = [
    {
      title: "CREATIVE AGENCY",
      image: "/images/sill.webp",
    },
    {
      title: "UX/UI",
      image: "/images/menuNew1.webp",
    },
    {
      title: "ART DIRECTION",
      image: "/images/menuNew2.webp",
    },
    {
      title: "MARKETING",
      image: "/images/menuNew3.webp",
    },
    {
      title: "BRANDING",
      image: "/images/menuNew4.webp",
    },
    {
      title: "SERVICE DESIGN",
      image: "/images/menuNew5.webp",
    },
  ];

  const [setRecaptchaToken] = useState("");
  const getRecaptchaToken = async () => {
    try {
      const token = await window.grecaptcha.execute(
        "6LdQXm0pAAAAANR3oxnk9kAwN_PVH6X_Rp-8e8d8",
        { action: "submit" }
      );
      setRecaptchaToken(token);
    } catch (error) {
      console.error("Error al obtener el token de reCAPTCHA:", error);
    }
  };

  const handleNext = () => {
    if (currentIndex < itemsCarousel.length - 1) {
      setAnimation("slideOut");
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
        setAnimation("slideIn");
      }, 1100);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setAnimation("slideOut");
      setTimeout(() => {
        setCurrentIndex(currentIndex - 1);
        setAnimation("slideIn");
      }, 1100);
    }
  };

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const [notifications, setNotifications] = useState([]);

  const addNotification = (type) => {
    const newNotification = {
      id: Date.now().toString(), // Convertir a string
      type,
      text:
        type === "success"
          ? "mail sent successfully"
          : "there was an error sending the email",
    };
    setNotifications((prev) => [newNotification, ...prev]);
  };

  const removeNotif = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await getRecaptchaToken();
    setIsLoading(true);
    try {
      // Agrega los datos de los campos de selección múltiple y del presupuesto al objeto formData
      const completeFormData = {
        ...formData,
        services: item,
        budget: budgets,
      };
      // eslint-disable-next-line no-unused-vars
      const response = await axios.post("/api/mail", completeFormData);
      addNotification("success"); // Agrega una notificación de éxito si la petición es exitosa
    } catch (error) {
      addNotification("error"); // Agrega una notificación de error si la petición falla
    }
    setIsLoading(false);
  };

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Would you like to enter a world of innovation that will help your business to grow? Schedule a demo session with us"
        />
      </Helmet>

      <div style={{ backgroundColor: "#f9f3ef" }}>
        <header className="header-demo">
          <Link to={"/"}>
            <Square className="square-demo" />
          </Link>
          <Link className="link-home-demo" to={"/"}>
            VISIT ATOSTUDIO.CO
          </Link>
          <div className="button-header-demo">
            <DirectionButtons className="direction-button-demo" />
            <Link to={"/calendar"}>Schedule a demo</Link>
          </div>
        </header>
        <section className="section-1-demo">
          <h1>
            We are a design and a {isMobile && <br />} creative agency that
            <br /> integrates Intuitive Marketing
            {isMobile && <br />} and Design Thinking.
          </h1>
          <Link to={"/calendar"}>SCHEDULE A DEMO</Link>
          <Link className="link-home-demo mobile" to={"/"}>
            VISIT ATOSTUDIO.CO
          </Link>
          <div className="image-section-1-container">
            <img src="/images/pageNew1.webp" alt="umbrella" />
          </div>
        </section>
        <section className="sectionMainContact">
          <div className="title-main-contact">
            <h2>
              Would you like to enter a world of creativity and innovation that
              will help your business to grow?
            </h2>
          </div>
          <div className="section-contact-demo">
            <div className="item-1">
              <Calendar className="icon" />
              <div>
                <p>Schedule online</p>
                <p>Schedule with our calendar</p>
              </div>
            </div>
            <div className="item-2">
              <Phone className="icon" />
              <div>
                <p>Give us a call</p>
                <p>+57 (315) 255-9644</p>
              </div>
            </div>
            <div className="item-3">
              <Mail className="icon" />
              <div>
                <p>Send Us a Message</p>
                <p>directordemarketing@atostudio.co</p>
              </div>
            </div>
          </div>
        </section>
        <hr className="hr" />
        <section className="section-2-demo">
          <h2>
            At Ato, we innovate and build value in organizations by generating
            solutions and product, service and brand experiences through our
            creativity.
          </h2>
          <div>
            {isMobile() ? (
              <video autoPlay loop muted controls={true}>
                <source src="/VideoVertical.mp4" type="video/mp4" />
              </video>
            ) : (
              <video autoPlay loop muted controls={true}>
                <source src="/videoHorizontal.mp4" type="video/mp4" />
              </video>
            )}
          </div>
          <Link to={"/calendar"}>SCHEDULE A DEMO</Link>
        </section>
        <hr className="hr" />
        <section className="interested-demo">
          {currentIndex === 0 ? (
            <h2>Are you interested in working with a?</h2>
          ) : (
            <h2>Are you interested in?</h2>
          )}
          <div className="container-carousel">
            <div className="container-prevbutton mobile">
              <p>Back</p>
              <button className="prevbutton-carousel" onClick={handlePrev}>
                <DirectionButtons />
              </button>
            </div>
            <div className="title-carousel-demo">
              <h3 className={`text-carousel-demo ${animation}`}>
                {itemsCarousel[currentIndex].title}
              </h3>
            </div>
            <div className="container-image-carousel-demo">
              <div className={`image-carousel-demo ${animation}`}>
                <img
                  src={itemsCarousel[currentIndex].image}
                  alt={itemsCarousel[currentIndex].title}
                />
              </div>
            </div>
            <p className="idk-demo">Let’s have a co-creation session.</p>
            <div className="container-nextbutton mobile">
              <button className="nextbutton-carousel" onClick={handleNext}>
                <DirectionButtons />
              </button>
              <p>Next</p>
            </div>
          </div>
          <Link className="button-carousel-demo" to={"/calendar"}>
            SCHEDULE A DEMO
          </Link>
        </section>
        <hr className="hr" />
        <section className="section-3-demo">
          <h2>What can you expect of your demo session?</h2>
          <div className="item-section-3-1">
            <div className="item-3-1-flex">
              <div>
                <img src="/images/pageNew4.webp" alt="4" />
              </div>
              <div>
                <span>01</span>
                <h3>Identify what needs your brand has.</h3>
                <p>
                  We will pinpoint the intervention points and what the real
                  needs of your users are.
                </p>
              </div>
            </div>
          </div>
          <div className="item-section-3-2">
            <div className="item-3-2-flex">
              <div>
                <img src="/images/pageNew5.webp" alt="4" />
              </div>
              <div>
                <span>02</span>
                <h3>
                  We will create a strategic plan and a specialized proposal for
                  you.
                </h3>
                <p>
                  With the discovery session, we will send you a work proposal
                  that includes the most significant findings we believe are
                  relevant to elevate your creative needs.
                </p>
              </div>
            </div>
          </div>
          <div className="item-section-3-3">
            <div className="item-3-3-flex">
              <div>
                <img src="/images/pageNew6.webp" alt="4" />
              </div>
              <div>
                <span>03</span>
                <h3>We will provide growth and conversion strategies.</h3>
                <p>
                  We will make you understand how, from the creative field, we
                  can grow your business.
                </p>
              </div>
            </div>
          </div>
          <div className="item-section-3-4">
            <div className="item-3-4-flex">
              <div>
                <img src="/images/pageNew7.webp" alt="4" />
              </div>
              <div>
                <span>04</span>
                <h3>
                  No obligation, the discovery session is completely free.
                </h3>
                <p>
                  This discovery session is an opportunity for us to connect and
                  assess how we can help you, without any pressure or
                  obligation.
                </p>
              </div>
            </div>
          </div>
        </section>
        <hr className="hr" />
        <section className="carousel-demo">
          <Carousel useAlternateImages={false} onImageClick={null} />
        </section>
        <hr className="hr" />
        <section className="form-demo">
          <SlideInNotifications
            notifications={notifications}
            removeNotif={removeNotif}
          />
          <section className="contact-1">
            <div className="text-contact">
              <h1>Let’s talk</h1>
              <p>
                If you have any questions or concerns and you want to optimize
                your business in the best way, feel free to reach out. We will
                schedule a meeting to understand your business needs and start
                working together to collaborate effectively!
              </p>
              <span>*Required fields </span>
            </div>
          </section>
          <hr
            className="hr contact"
            style={{ width: "100%", boxSizing: "border-box", margin: "0" }}
          />
          <form onSubmit={handleSubmit}>
            <div className="form-contact">
              <div className="item-form-contact">
                <label className="label">
                  <input
                    type="text"
                    placeholder=" "
                    className="input"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                  <span className="span">First name*</span>
                </label>
                <label className="label">
                  <input
                    type="text"
                    placeholder=" "
                    className="input"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                  <span className="span">Last name*</span>
                </label>
              </div>
              <div className="item-form-contact">
                <label className="label">
                  <input
                    type="email"
                    placeholder=" "
                    className="input"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <span className="span">Email*</span>
                </label>
                <label className="label">
                  <input
                    type="tel"
                    placeholder=" "
                    className="input"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  <span className="span">Phone*</span>
                </label>
              </div>
              <div className="item-form-contact select-multiple">
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
              </div>
              <div className="item-form-contact select-multiple">
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
              </div>
            </div>
            <div className="button-container">
              <button
                type="submit"
                className="button-contact"
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Send"}
              </button>
              <div className="icons-contact">
                <a
                  href="https://www.linkedin.com/company/atostudio/"
                  style={{ textDecoration: "none", color: "#0c0c0c" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedIn />
                </a>
                <a
                  href="https://www.instagram.com/atostudioco/"
                  style={{ textDecoration: "none", color: "#0c0c0c" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram />
                </a>
                <a
                  href="https://www.behance.net/atostudio"
                  style={{ textDecoration: "none", color: "#0c0c0c" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Behance />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61552925791921&locale=es_LA"
                  style={{ textDecoration: "none", color: "#0c0c0c" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook />
                </a>
              </div>
            </div>
            <div className="logo-footer-demo">
              <Logo />
              <p>Ato Studio 2024</p>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default Demo2;
