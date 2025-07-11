import { useTranslation } from "react-i18next";
import { Container } from "../container/Container";
import styles from "./styles/RentGamingConsoleWithSwipe.module.scss";
import img1 from "@/assets/img/gamepade/img1.png";
import img2 from "@/assets/img/gamepade/img2.png";
import img3 from "@/assets/img/gamepade/img3.png";
import arrow from "@/assets/img/console/arrow.png";
import RetroSwiperWithBg from "../swiper-with-background/RetroSwiper";
import sega from "@/assets/img/console/sega.png";
import nintendo from "@/assets/img/console/nintendo.png";

export default function RentGamingConsoleWithSwipe() {
  const { t } = useTranslation();

  const mySlides = [
    {
      id: 1,
      src: sega,
      title: "price4",
      text: "we_offer_rental_of_legendary_consoles_with_real_tube",
    },
    {
      id: 2,
      src: nintendo,
      title: "price4",
      text: "we_offer_rental_of_legendary_consoles_with_real_tube",
    },
  ];

  return (
    <Container>
      <section className={styles.rentGaminConsoleMainContainer}>
        <div className={styles.mainText}>
          <h2 className={styles.firstText}>
            {t("retro_game_console_rentals")}
          </h2>
          <img
            className={`${styles.gamepadeImg} ${styles.gamepade1}`}
            src={img1}
            alt="gamepade1"
          />
          <img
            className={`${styles.gamepadeImg} ${styles.gamepade2}`}
            src={img2}
            alt="gamepade2"
          />
          <img
            className={`${styles.gamepadeImg} ${styles.gamepade3}`}
            src={img3}
            alt="gamepade3"
          />
          <h2 className={styles.secondText}>
            {t("the_price_does_not_include_delivery")}
          </h2>
        </div>
        <div className={styles.swiperContainer}>
          <RetroSwiperWithBg slides={mySlides} arrowSrc={arrow} />
        </div>
      </section>
    </Container>
  );
}
