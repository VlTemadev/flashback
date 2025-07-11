import LangSwitcher from "../lang_switcher/LangSwitcher";
import logo from "@/assets/img/Flashback_logo.png";
import facebook from "@/assets/icons/Facebook.png";
import youtube from "@/assets/icons/YouTube.png";
import instagram from "@/assets/icons/Instagram.png";
import styles from "./styles/Header.module.scss";
import { Container } from "../container/Container";

const FACEBOOKLINK = import.meta.env.VITE_FACEBOOKLINK;
const INSTALINK = import.meta.env.VITE_INSTALINK;
const YOUTUBELINK = import.meta.env.VITE_YOUTUBELINK;

export default function Header() {
  return (
    <Container>
      <header>
        <nav className={styles.headerNav}>
          <div className={styles.socials}>
            <a
              href={FACEBOOKLINK as string}
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} />
            </a>
            <a
              href={INSTALINK}
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} />
            </a>
            <a
              href={YOUTUBELINK}
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
    </Container>
  );
}
