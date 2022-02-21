import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import Button from "../../UI/button";
import CloseButton from "../../UI/close-button";
import styles from "./mobile-nav.module.scss";

const MobileNav = (props) => {
  const router = useRouter();

  useEffect(() => {
    if (props.opened) {
      props.close();
    }
  }, [router]);

  const nodeRef = useRef(null);

  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.opened}
      timeout={200}
      classNames={{
        enter: styles["slide-enter"],
        enterActive: styles["slide-enter-active"],
        exit: styles["slide-exit"],
        exitActive: styles["slide-exit-active"],
      }}
      nodeRef={nodeRef}
    >
      <nav className={`${styles["mobile-nav"]}`} ref={nodeRef}>
        <ul className={`${styles["nav-links"]}`}>
          <li>
            <Link href="/#about">ABOUT</Link>
          </li>
          <li>
            <Link href="/#projects">PROJECTS</Link>
          </li>
          <li>
            <Link href="/#contact">CONTACT</Link>
          </li>
          <li>
            <Button to="/dgc.pdf" newPage>Download CV</Button>
          </li>
        </ul>
        <CloseButton close={props.close} />
      </nav>
    </CSSTransition>
  );
};

export default MobileNav;
