import { Trans, useTranslation } from "react-i18next";
import { Container } from "../container/Container";
import ShitShoot from "../header/ShootAnimatedShip";
import btn from "@/assets/img/button.png";
import styles from "./styles/Start.module.scss";

export default function Start() {
  const { i18n } = useTranslation();
  return (
    <section className={styles.bgImageBlock}>
      <div className={styles.bgImageBlock__content}>
        <Container>
          <ShitShoot />
        </Container>
        <div className={styles.mainTextBlock}>
          <h1 className={styles.mainText}>
            <Trans
              key={i18n.language}
              i18nKey="immerse_yourself_in_the_magic"
            />
          </h1>
          <p className={styles.mainSecondText}>
            <Trans
              key={i18n.language}
              i18nKey="looking_for_a_way_to_entertain_guests"
            />
          </p>
        </div>
      </div>
    </section>
  );
}
