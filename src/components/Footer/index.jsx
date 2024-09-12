import "./style.css";
import { RiFacebookCircleLine } from "react-icons/ri";
import { SiInstagram } from "react-icons/si";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="follow">
          <span className="follow-span">Follow us</span>
          <div className="images">
            <span className="facebook">
              <RiFacebookCircleLine />
            </span>
            <span className="instagram">
              <SiInstagram />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
