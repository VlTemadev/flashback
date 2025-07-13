import { useTranslation } from "react-i18next";
import { Container } from "../container/Container";
import styles from "./styles/SlotMachinesWithGames.module.scss";
import {
  slidesForGalaga,
  slidesForMK,
  slidesForMidway,
  slidesForBarrel,
  slidesForBartop,
  slidesForGrandTourismo,
} from "./Constants";

import arrow from "@/assets/img/img-for-carosel/arrow-icon.webp";
import PixelSlider from "../swiper/RetroSwiper";

export default function SlotMachinesWithGames() {
  const { t } = useTranslation();

  return (
    <Container>
      <section className={styles.slotMachines}>
        <div className={styles.mainText}>
          <h2 className={styles.firstText}>
            {t("slot_machines_with_games_for_rent")}
          </h2>
        </div>
        <div className={styles.sliderContainer}>
          <PixelSlider slides={slidesForMK} arrowSrc={arrow} />
          <PixelSlider slides={slidesForGalaga} arrowSrc={arrow} />
          <PixelSlider slides={slidesForMidway} arrowSrc={arrow} />
          <PixelSlider slides={slidesForBarrel} arrowSrc={arrow} />
          <PixelSlider slides={slidesForBartop} arrowSrc={arrow} />
          <PixelSlider slides={slidesForGrandTourismo} arrowSrc={arrow} />
        </div>
      </section>
    </Container>
  );
}
