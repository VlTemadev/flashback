import { Container } from "@/components/container/Container";
import styles from "./styles/RetroGaminConsoleRental.module.scss";
import { useTranslation } from "react-i18next";
import img1 from "@/assets/img/retro-gaming-rental/img1.png";
import img2 from "@/assets/img/retro-gaming-rental/img2.png";
import img3 from "@/assets/img/retro-gaming-rental/img3.png";
import img4 from "@/assets/img/retro-gaming-rental/img4.png";

export default function RetroGaminConsoleRental() {
  const { t } = useTranslation();

  const content = [
    {
      img: img1,
      price: "price1",
      description: "rent_one_arcade_machine",
    },
    {
      img: img2,
      price: "price2",
      description: "retro_game_console_kit_with_tube_tv",
    },
    {
      img: img3,
      price: "price3",
      description: "grand_turismo_academy_racing_simulator",
    },
    {
      img: img4,
      price: "our_sevice",
      description: "we_can_provide_technical_support_for_events",
    },
  ];

  return (
    <Container>
      <section className={styles.retroGaming}>
        <div className={styles.mainText}>
          <h2 className={styles.firstText}>
            {t("retro_game_console_rentals")}
          </h2>
          <h5 className={styles.priceText}>
            {t("delivery_price_within_the_city_from")}
          </h5>
        </div>

        <div className={styles.rentalGaminBlockRoot}>
          {content.map((item, index) => {
            const { img, price, description } = item;
            return (
              <div className={styles.rentalGaminBlock} key={index}>
                <div className={styles.rentalGaminImageBlock}>
                  <img src={img} alt="retroGamingImage" />
                </div>
                <div className={styles.rentalGaminTextBlock}>
                  <h3 className={styles.rentalGaminText}>{t(price)}</h3>
                  <p className={styles.rentalGaminSecondText}>
                    {t(description)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Container>
  );
}
