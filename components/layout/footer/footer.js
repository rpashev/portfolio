import Image from "next/image";
import Socials from "../../intro/socials";
import Navigation from "../navigation";
import arrowUp from "../../../public/images/icons/arrow-141-64.png";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.socials}>
          <Socials />
        </div>
        <div className={styles.links}>
          <h4>Quick Links</h4>
          <Navigation fromFooter />
        </div>
      </div>
      <p>ROSEN PASHEV ©2022 </p>
      <a className={styles.arrow} href="#top" title="Go to top">
        <Image src={arrowUp} width={55} height={70} />
      </a>
    </footer>
  );
};

export default Footer;
