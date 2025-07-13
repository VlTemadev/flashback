import { Container } from "@/components/container/Container";
import styles from "./styles/RetroGaminConsoleRental.module.scss";
import { useTranslation } from "react-i18next";
import { CONTENT } from "./Constants";

export default function RetroGaminConsoleRental() {
  const { t } = useTranslation();

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
          {CONTENT.map((item, index) => {
            const { img, price, description } = item;
            return (
              <div className={styles.rentalGaminBlock} key={index}>
                <div className={styles.rentalGaminImageBlock}>
                  <img src={img} alt="retroGamingImage" />
                </div>
                <div className={styles.rentalGaminTextBlock}>
                  <h3 className={styles.rentalGaminText}>{t(price ?? "")}</h3>
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
