import styles from "./styles/RentProcess.module.scss";
import alien from "@/assets/img/alien.png";
import ufo from "@/assets/img/ufo.png";
import ufo1 from "@/assets/img/ufo1.png";
import { Trans, useTranslation } from "react-i18next";
import { Container } from "../container/Container";

export default function RentProcess() {
  const { i18n } = useTranslation();

  return (
    <Container>
      <section className={styles.stepsSection}>
        <div className={styles.stepsList}>
          <div className={styles.step}>
            <div className={styles.stepTextBlock}>
              <div className={`${styles.stepNumber} ${styles.stepBlue}`}>
                01
              </div>
              <div className={styles.stepText}>
                <Trans
                  key={i18n.language}
                  i18nKey="you_rent_slot_machines_or_consoles"
                />
                <img className={styles.ufo1} src={ufo1} alt="ufo" />
              </div>
            </div>
          </div>

          <div className={styles.step}>
            <div className={styles.stepTextBlock}>
              <div className={`${styles.stepNumber} ${styles.stepPink}`}>
                02
              </div>
              <div className={styles.stepText}>
                <Trans key={i18n.language} i18nKey="we_deliver_to_the_event" />
                <img className={styles.ufo} src={ufo} alt="ufo" />
              </div>
            </div>
          </div>

          <div className={styles.step}>
            <div className={styles.stepTextBlock}>
              <div className={`${styles.stepNumber} ${styles.stepOrange}`}>
                03
              </div>
              <div className={styles.stepText}>
                <Trans key={i18n.language} i18nKey="you_are_playing" />
                <img className={styles.alien} src={alien} alt="alien" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
