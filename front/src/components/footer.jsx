import "../styles/components/footer.css";
import LinkedIn from "../../public/static/svg/linkedin.svg?react";
import Instagram from "../../public/static/svg/instagram.svg?react";
import Behance from "../../public/static/svg/behance.svg?react";
import Facebook from "../../public/static/svg/facebook.svg?react";
import Square from "../../public/static/svg/cuadrado.svg?react";
import ItemList from "../../public/static/svg/item-list-works.svg?react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container-footer-flex">
        <div className="footer-1">
          <Square style={{ width: "30px" }} />
          <p className="ato-footer">ĀTO Studio</p>
          <p style={{ margin: "0", marginBottom: "10px" }}>
            Colombia, Mexico, USA
            <br />
            2024
          </p>
          <div className="footer-social-icons">
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
        <div className="footer-2">
          <ul className="list-footer">
            <li className="list-footer-item">
              <ItemList style={{ marginTop: "5px" }} />
              <p>Hiring</p>
            </li>
          </ul>
          <p>
            We are currently looking for a Senior Designer
            <br /> and a Full-Time Social Media Manager
            <br /> Reach out via directordemarketing@atostudio.co
            <br /> with your CV & Portfolio.
          </p>
        </div>
        <div className="footer-3">
          <ul className="list-footer">
            <li className="list-footer-item">
              <ItemList style={{ marginTop: "5px" }} />
              <p>Let’s collaborate</p>
            </li>
          </ul>
          <p>
            We are looking for new ideas and creative
            <br />
            people to collaborate with us. If you think you
            <br /> can work with us please reach out and contact
            <br /> us via DIRECTORDEMARKETING@ATOSTUDIO.CO
          </p>
        </div>
      </div>
      <div className="copyright-footer">
        <p>Privacy Policy</p>
        <p>Terms & Conditions</p>
      </div>
    </div>
  );
};

export default Footer;
