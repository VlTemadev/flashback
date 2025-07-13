import { useTranslation } from "react-i18next";
import { Container } from "../container/Container";
import { GAMEPADS, SLIDES } from "./Constants";
import RetroSwiperWithBg from "../swiper-with-background/RetroSwiper";
import styles from "./styles/RentGamingConsoleWithSwipe.module.scss";
import arrow from "@/assets/img/console/arrow.png";

export default function RentGamingConsoleWithSwipe() {
  const { t } = useTranslation();

  return (
    <Container>
      <section className={styles.rentGaminConsoleMainContainer}>
        <div className={styles.mainText}>
          <h2 className={styles.firstText}>
            {t("retro_game_console_rentals")}
          </h2>
          {GAMEPADS.map((item) => {
            const { style, src, alt } = item;
            return (
              <img
                className={`${styles.gamepadeImg} ${styles[style]}`}
                src={src}
                alt={alt}
                key={style}
              />
            );
          })}
          <h2 className={styles.secondText}>
            {t("the_price_does_not_include_delivery")}
          </h2>
        </div>
        <div className={styles.swiperContainer}>
          <RetroSwiperWithBg slides={SLIDES} arrowSrc={arrow} />
        </div>
      </section>
    </Container>
  );
}
