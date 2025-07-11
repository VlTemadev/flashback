import { Trans, useTranslation } from "react-i18next";
import { Container } from "../container/Container";
import ShitShoot from "../header/ShootAnimatedShip";
import styles from "./styles/Start.module.scss";
import ModalContactForm from "../form-modal/ModalContactForm";
import { useState } from "react";

export default function Start() {
  const [modalOpen, setModalOpen] = useState(false);
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
        <div className={styles.bottomTextBlock}>
          <button
            className={styles.okButton}
            type="submit"
            onClick={() => {
              setModalOpen(true);
            }}
          >
            START
          </button>
          <p className={styles.bottomText}>
            <Trans key={i18n.language} i18nKey="rent_our_arcade_machine" />
          </p>
        </div>
        <ModalContactForm
          open={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      </div>
    </section>
  );
}
