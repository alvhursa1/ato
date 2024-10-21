import '../styles/pages/about.css';
import Menu from '../components/menu';
import Marquee from 'react-fast-marquee';
import Footer from '../components/footer';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../public/static/svg/Logo.svg?react';
import { Helmet } from 'react-helmet';

const About = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/contact');
  };

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="We develop our own methodologies and establish a workflow tailored to your business"
        />
      </Helmet>

      <div
        style={{
          backgroundColor: '#f9f3ef',
        }}
      >
        <Menu
          containerStyle={{
            top: '5%',
            right: '2%',
          }}
        />
        <section className="about">
          <Link to={'/'} className="icon-about" style={{ color: '#0c0c0c' }}>
            <Logo className="logo-home" />
          </Link>
          <h1 className="title-about">ABOUT</h1>
          <div className="banner-image-about">
            <img
              className="img-about"
              src="/images/about1.webp"
              alt="banner-about"
            />
          </div>
          <p>Scroll to discover</p>
        </section>
        <div className="flex-container-about">
          <section className="loop-about" id="loop-about">
            <Marquee>
              <p className="text-about-loop">
                Meet our team, we’re design, marketing & innovation experts.
              </p>
            </Marquee>
            <div className="container-image-loop">
              <img
                className="image-loop"
                src="/images/about2.webp"
                alt="loop image"
              />
            </div>
          </section>
          <hr className="hr" id="hr-1-about" />
          <section className="about-2" id="about-2">
            <h2 className="title-about-2">
              Ato, is an Innovation and Design Studio that integrates Intuitive
              Marketing and Design Thinking.
              <br />
              <br />
              We innovate and build value in organizations by generating
              solutions and brand experiences with a human approach.
            </h2>
          </section>
          <hr className="hr" style={{ marginBottom: '0' }} id="hr-2-about" />
          <section className="about-3" id="about-3">
            <div className="container-about-3">
              <div className="about-left">
                <h2 className="title-about-3">Our Process</h2>
              </div>
              <div className="about-right">
                <h2 className="title-about-3">
                  We develop our own methodologies and establish a workflow
                  focused on the user that allows us to understand the needs of
                  the consumer.
                </h2>
                <div className="grid-container">
                  <div className="grid-item">
                    <span>1. Define and Research</span>
                    <p>Research and Data Collection</p>
                  </div>
                  <div className="grid-item">
                    <span>2. Analysis and Evaluation</span>
                    <p>Data Analysis and Insight</p>
                  </div>
                  <div className="grid-item">
                    <span>3. Marketing Analysis</span>
                    <p>Storytelling and Marketing Proposal</p>
                  </div>
                  <div className="grid-item">
                    <span>4. Design and Innovation</span>
                    <p>Craft and Creation</p>
                  </div>
                  <div className="grid-item">
                    <span>5. Testing </span>
                    <p>Prototyping</p>
                  </div>
                  <div className="grid-item">
                    <span>6. Implementation</span>
                    <p>Application and Performance</p>
                  </div>
                </div>
                <div className="image-about-our-process">
                  <img src="/images/about11.webp" alt="" />
                </div>
              </div>
            </div>
          </section>
          <hr className="hr" style={{ marginTop: '0' }} id="hr-3-about" />
          <section className="about-4" id="about-4">
            <h2 className="title-about-4">Our Team</h2>
            <div className="img-1-about">
              <div className="div-img-group">
                <img
                  className="team-image"
                  src="/images/about3.webp"
                  alt="team-image"
                />
              </div>
              <h4 className="team-name">Camila Uribe</h4>
              <p className="workstation">CEO</p>
            </div>
            <div className="img-2-about">
              <div>
                <div className="div-img-group">
                  <img
                    className="team-image"
                    src="/images/about4.webp"
                    alt="team-image"
                  />
                </div>
                <h4 className="team-name">Sofía Vásquez</h4>
                <p className="workstation">
                  Head of Investigation and Innovation
                </p>
              </div>
              <div>
                <div className="div-img-group">
                  <img
                    className="team-image"
                    src="/images/about5.webp"
                    alt="team-image"
                  />
                </div>
                <h4 className="team-name">Marco Meza</h4>
                <p className="workstation">Marketing Director</p>
              </div>
            </div>
            <div className="img-3-about">
              <div className="div-img-group">
                <img
                  className="team-image"
                  src="/images/about6.webp"
                  alt="team-image"
                />
              </div>
              <h4 className="team-name">Miguel Bueno</h4>
              <p className="workstation">Art and Coolhunting Director</p>
            </div>
            <div className="img-4-about">
              <div>
                <div className="div-img-group">
                  <img
                    className="team-image"
                    src="/images/about7.webp"
                    alt="team-image"
                  />
                </div>
                <h4 className="team-name">Sebastián Pulido</h4>
                <p className="workstation">Creative Director</p>
              </div>
            </div>
            <div className="img-5-about">
              <div>
                <div className="div-img-group">
                  <img
                    className="team-image"
                    src="/images/about8.webp"
                    alt="team-image"
                  />
                </div>
                <h4 className="team-name">Paula Salazar</h4>
                <p className="workstation">
                  Community and Storytelling Manager
                </p>
              </div>
              <div>
                <div className="div-img-group">
                  <img
                    className="team-image"
                    src="/images/about9.webp"
                    alt="team-image"
                  />
                </div>
                <h4 className="team-name">Andrés Palacio</h4>
                <p className="workstation">Paid Media </p>
              </div>
            </div>
          </section>
          <section className="about-5" id="about-5">
            <h2 className="title-about-5">
              ATO is a place where creativity and innovation converge to
              transform the narrative of the digital present.
            </h2>
            <div className="content-about-5">
              <div className="left-about-5">
                <h3>Let’s talk</h3>
                <p>
                  If you want to optimize your business in the best way, do not
                  hesitate to contact us.
                </p>
                <button onClick={handleNavigate}>Contact us</button>
              </div>
              <div className="right-about-5">
                <div>
                  <img src="/images/about10.webp" alt="about10" />
                </div>
              </div>
            </div>
          </section>
        </div>
        <hr className="hr" style={{ marginTop: '7vh' }} />
        <Footer />
      </div>
    </>
  );
};

export default About;
