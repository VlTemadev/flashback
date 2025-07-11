import { useTranslation } from "react-i18next";

type ValidationType = "name" | "phone";

export function useValidation(type: ValidationType) {
  const { t } = useTranslation();

  const patterns = {
    name: {
      value: /^[а-яА-Яa-zA-Z\s-]+$/,
      message: t("validation.namePattern"),
    },
    phone: {
      value: /^\+?\d{10,15}$/,
      message: t("validation.phonePattern"),
    },
  };

  const required = {
    name: t("validation.nameRequired"),
    phone: t("validation.phonePattern"),
  };

  return {
    required: required[type],
    pattern: patterns[type],
  };
}
