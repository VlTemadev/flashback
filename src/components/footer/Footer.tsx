import { Container } from "../container/Container";
import styles from "./styles/Footer.module.scss";
import inst1 from "@/assets/img/footer/inst1.png";
import inst2 from "@/assets/img/footer/inst2.png";
import flashbackargade from "@/assets/img/footer/flshbackarcade.png";
import flashbackgaming from "@/assets/img/footer/flashbackgaming.png";
import whatsapp from "@/assets/img/footer/whatsapp.png";

export default function Footer() {
  return (
    <section className={styles.FooterBlock}>
      <Container>
        <div className={styles.FooterImgBlock}>
          <div className={styles.FooterImg}>
            <img className={styles.mainImg} src={inst2} alt="inst1" />
            <img
              className={styles.secondImg}
              src={flashbackargade}
              alt="flashbackargade"
            />
            <img className={styles.mainImg} src={inst1} alt="inst1" />
            <img
              className={styles.secondImg}
              src={flashbackgaming}
              alt="flashbackargade"
            />
            <img className={styles.mainImg} src={whatsapp} alt="whatsapp" />
            <div className={styles.footerContactInfo}>
              <h3 className={styles.phone}>+7 705 206 03 76</h3>
              <p className={styles.email}>flash@back.kz</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
