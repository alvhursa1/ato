import '../styles/pages/contact.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SlideInNotifications from '../components/notification';
import CloseIcon from '../../public/static/svg/closeIcon.svg?react';
import LinkedIn from '../../public/static/svg/linkedin.svg?react';
import Instagram from '../../public/static/svg/instagram.svg?react';
import Behance from '../../public/static/svg/behance.svg?react';
import Facebook from '../../public/static/svg/facebook.svg?react';
import { Helmet } from 'react-helmet';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Input from '@mui/material/Input';
import Chip from '@mui/material/Chip';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Contact = () => {
  const [setRecaptchaToken] = useState('');
  const getRecaptchaToken = async () => {
    try {
      const token = await window.grecaptcha.execute(
        '6LdQXm0pAAAAANR3oxnk9kAwN_PVH6X_Rp-8e8d8',
        { action: 'submit' },
      );
      setRecaptchaToken(token);
    } catch (error) {
      console.error('Error al obtener el token de reCAPTCHA:', error);
    }
  };

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
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
        type === 'success'
          ? 'mail sent successfully'
          : 'there was an error sending the email',
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
      const response = await axios.post('/api/mail', completeFormData);
      addNotification('success'); // Agrega una notificación de éxito si la petición es exitosa
    } catch (error) {
      addNotification('error'); // Agrega una notificación de error si la petición falla
    }
    setIsLoading(false);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: '#000', // Cambia esto al color que quieras
      },
    },
    components: {
      MuiInputBase: {
        styleOverrides: {
          root: {
            '&::before': {
              borderBottom: '.5px solid #000 !important',
            },
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            left: '-10px',
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          select: {
            padding: '0px 0px 3px',
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
    'Marketing',
    'Web and UX/UI',
    'Art Direction',
    'Branding and Brand Strategy',
    'Spatial and Interiorism Design',
    'Business Innovation and Service Design',
    'Social Innovation',
  ];

  const budget = [
    '1500-2000 USD',
    '2000-5000 USD',
    '5000-10000 USD',
    'more than 10000 USD',
  ];

  const [item, setItem] = useState([]);
  const [budgets, setBudgets] = useState([]);

  const handleChangeItem = (event) => {
    const {
      target: { value },
    } = event;
    setItem(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleChangeBudget = (event) => {
    const {
      target: { value },
    } = event;
    setBudgets(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="If you have any questions or concerns and you want to optimize your business in the best way, feel free to reach out."
        />
      </Helmet>

      <div style={{ backgroundColor: '#f9f3ef', paddingTop: '5vh' }}>
        <SlideInNotifications
          notifications={notifications}
          removeNotif={removeNotif}
        />
        <div className="button-container-contact">
          <p>Close</p>
          <button
            className="button-contact-contact"
            onClick={() => navigate(-1)}
          >
            <CloseIcon className="icon-button-contact-contact" />
          </button>
        </div>
        <section className="contact-1">
          <div className="text-contact">
            <h1>Let’s talk</h1>
            <p>
              Would you like to enter a world of innovation that will help you
              grow your business? Here at Ato, we show you the way. Sign up for
              our free demo session where we will give you great ideas for your
              business based on Innovation, Intuitive Marketing, Design Thinking
              and much more.
            </p>
            <span>*Required fields </span>
          </div>
          <div className="image-contact">
            <div>
              <img src="/images/contacto.webp" alt="contact-banner" />
            </div>
          </div>
        </section>
        <hr
          className="hr contact"
          style={{ width: '100%', boxSizing: 'border-box', margin: '0' }}
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
                />
                <span className="span">Phone</span>
              </label>
            </div>
            <div className="item-form-contact select-multiple">
              <ThemeProvider theme={theme}>
                <FormControl fullWidth>
                  <InputLabel
                    sx={{
                      fontSize: '15px',
                      color: '#000',
                      fontFamily: 'Aeonik',
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
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
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
                      fontSize: '15px',
                      color: '#000',
                      fontFamily: 'Aeonik',
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
              {isLoading ? 'Loading...' : 'Send'}
            </button>
            <div className="icons-contact">
              <a
                href="https://www.linkedin.com/company/atostudio/"
                style={{ textDecoration: 'none', color: '#0c0c0c' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn />
              </a>
              <a
                href="https://www.instagram.com/atostudioco/"
                style={{ textDecoration: 'none', color: '#0c0c0c' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </a>
              <a
                href="https://www.behance.net/atostudio"
                style={{ textDecoration: 'none', color: '#0c0c0c' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Behance />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61552925791921&locale=es_LA"
                style={{ textDecoration: 'none', color: '#0c0c0c' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook />
              </a>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
