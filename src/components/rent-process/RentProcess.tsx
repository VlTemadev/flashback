import styles from "./styles/RentProcess.module.scss";
import { Trans, useTranslation } from "react-i18next";
import { Container } from "../container/Container";
import { STEPS } from "./Constants";

export default function RentProcess() {
  const { i18n } = useTranslation();

  const bulletsCount = 2;
  const bullets = Array.from({ length: bulletsCount }).map((_, i) => (
    <line
      key={i}
      x1="0"
      y1="3"
      x2="1"
      y2="3"
      stroke="#fff"
      strokeWidth="2"
      strokeDasharray="2 4"
      className={styles.shootLineSegment}
      style={{ animationDelay: `${i * 0.6}s` }}
    />
  ));

  return (
    <Container>
      <section className={styles.stepsSection}>
        <div className={styles.stepsList}>
          {STEPS.map((item) => {
            const { number, style, text, img, className, img2, imgClass } =
              item;
            return (
              <div className={styles.step}>
                <div className={`${styles.stepNumber} ${styles[style]}`}>
                  {number}
                  <img className={styles[imgClass]} src={img2} alt={img2} />
                </div>
                <div className={styles.stepText}>
                  {+number === 1 && (
                    <svg
                      viewBox="0 0 100 6"
                      preserveAspectRatio="none"
                      className={styles.shootLine}
                    >
                      {bullets}
                    </svg>
                  )}
                  <Trans key={i18n.language} i18nKey={text} />
                  <img
                    className={styles[className]}
                    src={img}
                    alt={className}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Container>
  );
}
