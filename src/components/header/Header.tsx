import LangSwitcher from "../lang_switcher/LangSwitcher";
import logo from "@/assets/img/Flashback_logo.png";
import facebook from "@/assets/icons/Facebook.png";
import youtube from "@/assets/icons/YouTube.png";
import instagram from "@/assets/icons/Instagram.png";
import styles from "./styles/Header.module.scss";

export default function Header() {
  return (
    <>
      <header>
        <nav className={styles.headerNav}>
          <div className={styles.socials}>
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} />
            </a>
            <a
              href="https://youtube.com"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={youtube} />
            </a>
          </div>

          <h1 className={styles.logo}>
            <img src={logo} alt="12" />
          </h1>
          <LangSwitcher />
        </nav>
      </header>
    </>
  );
}
