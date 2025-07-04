import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./styles/LangSwitcher.module.scss";

const languages = [
  { code: "kz", label: "kz" },
  { code: "ru", label: "ru" },
];

export default function LangSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div className={styles.langSwitcher}>
      {languages.map(({ code, label }, idx) => (
        <React.Fragment key={code}>
          {idx > 0 && <span className={styles.separator} />}
          <button
            type="button"
            className={styles.button}
            onClick={() => i18n.changeLanguage(code)}
          >
            {label}
          </button>
        </React.Fragment>
      ))}
    </div>
  );
}
