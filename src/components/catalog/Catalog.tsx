import { useTranslation } from "react-i18next";
import { Container } from "../container/Container";
import styles from "./styles/Catalog.module.scss";
import pdf from "@/assets/img/pdf.png";

export default function Catalog() {
  const { t } = useTranslation();
  return (
    <Container>
      <a href="/catalog.pdf" download>
        <section className={styles.catalogBlock}>
          <img className={styles.catalogImg} src={pdf} alt="pdf" />
          <h2 className={styles.catalogText}>{t("catalog")}</h2>
        </section>
      </a>
    </Container>
  );
}
