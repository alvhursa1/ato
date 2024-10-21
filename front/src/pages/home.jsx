import { useState } from "react";
import Menu from "../components/menu";
import Slider from "../components/slider";
import "../styles/pages/home.css";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";
import Carousel from "../components/carousel";
import ItemListWork from "../../public/static/svg/item-list-works.svg?react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Marquee from "react-fast-marquee";
import { Helmet } from "react-helmet";

function Home() {
  const Navigate = useNavigate();
  const buttons = [
    {
      id: 1,
      text: "This process includes defining the research objectives, reviewing the literature, selecting methods such as interviews or surveys, designing the data collection tools, determining the sampling, collecting and analyzing the data, interpreting the results and communicating the conclusions. Based on preliminary results or new insights, we make adjustments.",
      showText: false,
      title: "Research",
    },
    {
      id: 2,
      text: "Starting with the establishment of objectives and key performance indicators (KPIs), we identify relevant data sources, analyze the data using techniques such as segmentation and trend analysis, and use the information to inform design and marketing decisions. We include plans for data collection, processing, visualization and continuous iteration to optimize strategies over time.",
      showText: false,
      title: "Data Analytics",
    },
    {
      id: 3,
      text: "We gather and analyze data on market trends, consumer behavior, and competitors to inform strategic decisions and creative campaigns. By defining objectives, selecting research methods, and analyzing findings, we gain insights to align our creative efforts with market needs and preferences",
      showText: false,
      title: "Market Research",
    },
    {
      id: 4,
      text: "We provide strategic advice and solutions to clients to help them achieve their business objectives. We assess the client's current situation, identify areas for improvement and develop tailored strategies to address challenges or take advantage of opportunities. Bringing expertise in areas such as market analysis and branding, consultants aim to improve business performance and drive growth.",
      showText: false,
      title: "Business Consulting",
    },
    {
      id: 5,
      text: "We creatively generating and refining innovative ideas to meet client needs or seize market opportunities. Through brainstorming sessions and iterative refinement,  we visually appealing designs, messaging strategies, or campaign themes are developed to align with client objectives and brand identity. These concepts are then presented to clients for feedback, aiming to produce compelling ideas that resonate with target audiences and drive marketing success.",
      showText: false,
      title: "Concept Making",
    },
    {
      id: 6,
      text: "As a studio, we empathize with users to understand their needs, defining problems, devising solutions, prototyping and testing. Through constant improvement, we innovate with solutions developed to effectively meet the needs of users and bring value to customers.",
      showText: false,
      title: "Design Thinking Methodologies",
    },
    {
      id: 7,
      text: "We identify emerging trends and cultural shifts by analyzing consumer behavior and tracking trends. As coolhunters, by anticipating trends, we provide valuable insights to guide the development of products, brands and marketing campaigns that resonate with target audiences.",
      showText: false,
      title: "Coolhunting",
    },
  ];

  const buttons2 = [
    {
      id: 1,
      text: "We start by creating a distinctive identity and message that resonates with the target audience. This includes defining brand values, creating visual elements such as logos, and establishing positioning and communication channels to build awareness and loyalty, ultimately driving business growth.",
      showText: false,
      title: "Branding and Brand Strategy",
    },
    {
      id: 2,
      text: "For us this process involves guiding the visual aspects of creative projects to ensure they align with the brand's aesthetic and objectives. This includes conceptualizing visual concepts, selecting photography and graphic elements, and collaborating with creatives to bring ideas to life and effectively communicate the intended message to the target audience.",
      showText: false,
      title: "Art Direction",
    },
    {
      id: 3,
      text: "We use online channels and technologies to reach and engage target audiences, promote brands, and drive business growth. Through customized campaigns and engaging content, our goal as a studio is to improve brand visibility, attract customers and achieve measurable results online.",
      showText: false,
      title: "Digital Marketing",
    },
    {
      id: 4,
      text: "Our primary focus is to identify client challenges, analyze market trends and collaborate to implement creative solutions that drive growth and competitive advantage. Leveraging our expertise in design thinking and strategic planning, we help clients achieve their business objectives to stay ahead of the curve.",
      showText: false,
      title: "Business and Consulting Innovation",
    },
    {
      id: 5,
      text: "From these methods, we create visually appealing and easy-to-use digital experiences. This includes understanding user needs, creating schematics, prototyping and iterative testing to optimize the user experience across all devices. Our goal is to deliver websites and apps that effectively communicate brand messages, improve user satisfaction and drive conversions.",
      showText: false,
      title: "Web and UX/UI",
    },
    {
      id: 6,
      text: "We design and create functional and aesthetically pleasing interior spaces that reflect the brand identity. This includes understanding the client's needs, developing creative concepts and selecting furnishings to optimize functionality and promote brand recognition.",
      showText: false,
      title: "Interiorism and Spatial Design",
    },
    {
      id: 7,
      text: "We create seamless and memorable interactions between companies and their customers at all touch points. For us, this means understanding customer needs and preferences, mapping the customer journey, and designing service processes and interactions that exceed customer expectations. By focusing on improving customer satisfaction and loyalty, as a studio we aim to create positive brand experiences that drive repeat business and loyalty.",
      showText: false,
      title: "Service and Customer Experience Design",
    },
  ];

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [expanded2, setExpanded2] = useState(false);

  const handleChange2 = (panel) => (event, isExpanded) => {
    setExpanded2(isExpanded ? panel : false);
  };

  const handleAbout = () => {
    Navigate("/about");
  };
  const handleWork = () => {
    Navigate("/work");
  };

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="We are an innovation and design studio that integrates Intuitive Marketing and Design Thinking."
        />
      </Helmet>
      <Menu />
      <Slider />
      <section className="section-works">
        <div className="works-1">
          <div
            className="container-image-works-1"
            onClick={() => Navigate("/work/kiefer")}
          >
            <img
              className="image-works-1"
              src="/images/seccion1-1.webp"
              alt="1"
            />
            <ul className="list-image">
              <li className="item-list-image">
                <ItemListWork />

                <h4 className="item-text-image">Kiefer</h4>
              </li>
              <p className="item-text-image2">
                Art Direction, Branding and Brand Strategy
              </p>
            </ul>
          </div>
        </div>
        <div className="works-2">
          <div
            className="container-image-works-2"
            onClick={() => Navigate("/work/coyo")}
          >
            <img
              className="image-works-1"
              src="/images/seccion1-2.webp"
              alt="1"
            />
            <ul className="list-image">
              <li className="item-list-image">
                <ItemListWork />
                <h4 className="item-text-image">Coyo</h4>
              </li>
              <p className="item-text-image2">
                Branding, Interiorism and Spatial Design, Art Direction
              </p>
            </ul>
          </div>
        </div>
        <div className="works-3">
          <div
            className="container-image-works-3"
            onClick={() => Navigate("/work/fiona")}
          >
            <img
              className="image-works-1"
              src="/images/seccion1-3.webp"
              alt="1"
            />
            <ul className="list-image">
              <li className="item-list-image">
                <ItemListWork />
                <h4 className="item-text-image">Fiona</h4>
              </li>
              <p className="item-text-image2">
                Art Direction, Branding and Brand Strategy
              </p>
            </ul>
          </div>
        </div>
        <button className="our-work-content-text-button" onClick={handleWork}>
          See all work
        </button>
      </section>
      <hr className="hr" />
      <section className="section-strategy">
        <h2 className="title-strategy">
          Discover the power of design thinking and innovative solutions with
          our unrivaled design and marketing services.
        </h2>
        <div className="content-strategy">
          <div className="img-strategy">
            <img
              className="img-strategy-img"
              src="/images/Seccion2.webp"
              alt="strategy-image"
            />
          </div>
          <div className="text-strategy">
            <div className="list-our-strategy">
              <ul className="our-strategy-list">
                <li className="item-list-our-strategy">
                  <ItemListWork />
                  <h4 className="item-text-our-strategy">Our strategy</h4>
                </li>
              </ul>
              <div className="container-button-our-strategy">
                {buttons.map((button) => (
                  <Accordion
                    key={button.id}
                    expanded={expanded === button.id}
                    onChange={handleChange(button.id)}
                    className="my-accordion"
                  >
                    <AccordionSummary
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      className="my-accordion-summary"
                    >
                      <Typography className="my-accordion-title">
                        {button.title}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails className="my-accordion-details">
                      <Typography className="my-typography">
                        {button.text}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </div>
            </div>
            <div className="list-our-strategy">
              <ul className="our-strategy-list">
                <li className="item-list-our-strategy">
                  <ItemListWork />

                  <h4 className="item-text-our-strategy">Our creation</h4>
                </li>
              </ul>
              <div className="container-button-our-strategy">
                {buttons2.map((button) => (
                  <Accordion
                    onChange={handleChange2(button.id)}
                    expanded={expanded2 === button.id}
                    key={button.id}
                    className="my-accordion"
                  >
                    <AccordionSummary
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      className="my-accordion-summary"
                    >
                      <Typography className="my-accordion-title">
                        {button.title}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails className="my-accordion-details">
                      <Typography className="my-typography">
                        {button.text}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="hr hidden" />
      <section className="section-clients">
        <div className="container-titles-clients">
          <p className="our-clients">Our clients</p>
          <h2 className="title-clients">
            Cantina la 15 / Navilandia / <br />
            Fiona / Kiefer / Fenalco
          </h2>
          <h2 className="title-clients mobile">
            <Marquee>
              / Cantina la 15 / Navilandia / Fiona / Kiefer / Fenalco
            </Marquee>
          </h2>
        </div>
      </section>
      <hr className="hr" />
      <section className="section-slider">
        <Carousel useAlternateImages={false} onImageClick={null} />
      </section>
      <hr className="hr" />
      <section className="section-clients">
        <div className="clients-content">
          <div className="clients-content-text">
            <h3 className="clients-content-text-title">Get to know us</h3>
            <p className="clients-content-text-description">
              At Ato Studio, our team consists of talented professionals, each
              bringing their unique skills and expertise to deliver exceptional
              design, creation, and marketing solutions. We understand that the
              success of your project relies on creativity and innovation.
            </p>
            <button
              className="clients-content-text-button"
              onClick={handleAbout}
            >
              About us
            </button>
          </div>
          <div className="clients-content-image">
            <img
              className="clients-content-image-img"
              src="/images/Seccion3.webp"
              alt="clients-image"
            />
          </div>
        </div>
        <div className="clients-content-some-data">
          <p className="slogan-clients">
            Feel free to reach out if you <br /> want to have a chat
          </p>
          <p className="contact-clients">DIRECTORDEMARKETING@ATOSTUDIO.CO</p>
          <Marquee>
            <p className="contact-clients mobile">
              DIRECTORDEMARKETING@ATOSTUDIO.CO
            </p>
          </Marquee>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
