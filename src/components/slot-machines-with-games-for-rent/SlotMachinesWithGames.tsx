import { useTranslation } from "react-i18next";
import { Container } from "../container/Container";
import styles from "./styles/SlotMachinesWithGames.module.scss";
import mk from "@/assets/img/img-for-carosel/mk.png";
import galaga from "@/assets/img/img-for-carosel/galaga.png";
import midway from "@/assets/img/img-for-carosel/1942.png";
import barrel from "@/assets/img/img-for-carosel/barrel.png";
import bartop from "@/assets/img/img-for-carosel/bartop.png";
import grandtour from "@/assets/img/img-for-carosel/grandtour.png";
import arrow from "@/assets/img/img-for-carosel/arrow-icon.png";
import PixelSlider from "../swiper/RetroSwiper";

export default function SlotMachinesWithGames() {
  const { t } = useTranslation();

  const slidesForMK = [
    {
      id: 1,
      src: mk,
      title: "mortal_kombat",
      text: "mk_text",
    },
  ];

  const slidesForGalaga = [
    {
      id: 1,
      src: galaga,
      title: "MIDWAY-GALAGA",
      text: "galaga_text",
    },
  ];

  const slidesForMidway = [
    {
      id: 1,
      src: midway,
      title: "MIDWAY - 1942",
      text: "midway_text",
    },
  ];

  const slidesForBarrel = [
    {
      id: 1,
      src: barrel,
      title: "БОЧКА",
      text: "barrel_text",
    },
  ];

  const slidesForBartop = [
    {
      id: 1,
      src: bartop,
      title: "BARTOP",
      text: "bartop_text",
    },
  ];

  const slidesForGrandTourismo = [
    {
      id: 1,
      src: grandtour,
      title: "GRAND TOURISMO",
      text: "grand_tourismo_text",
    },
  ];

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
