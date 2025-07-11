import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import styles from "./styles/ModalContactForm.module.scss";
import emailjs from "emailjs-com";
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

import { useTranslation } from "react-i18next";
import { useValidation } from "./utils/useValidation";

type FormData = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

type ModalContactFormProps = {
  open: boolean;
  onClose: () => void;
  onSend?: (data: FormData) => void;
};

const ModalContactForm: React.FC<ModalContactFormProps> = ({
  open,
  onClose,
  onSend,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<FormData>();

  useEffect(() => {
    if (!open) {
      reset();
    }
  }, [open, reset]);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (onSend) onSend(data);
    emailjs.send(
      EMAILJS_SERVICE_ID, // Service ID (например "gmail")
      EMAILJS_TEMPLATE_ID, // Email template ID
      data, // Данные формы (имена полей должны совпадать с шаблоном)
      EMAILJS_PUBLIC_KEY // Public Key (User ID)
    );
    reset();
  };

  const { t } = useTranslation();

  const phoneValidation = useValidation("phone");
  const nameValidation = useValidation("name");

  const formFields = [
    {
      name: "name",
      type: "text",
      placeholder: "Name",
      validation: nameValidation,
    },
    {
      name: "phone",
      type: "text",
      placeholder: "Phone",
      validation: phoneValidation,
    },
  ] as const;

  if (!open) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <div className={styles.titleContainer}>
            <span className={styles.title}>Enter</span>
          </div>
          <button className={styles.modalClose} onClick={onClose}>
            ×
          </button>
        </div>
        {isSubmitSuccessful ? (
          <div className={styles.modalSuccess}>{t("thank_you_message")}</div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.inputContainer}>
              {formFields.map(({ name, type, placeholder, validation }) => (
                <React.Fragment key={name}>
                  <input
                    type={type}
                    placeholder={t(placeholder)}
                    {...register(name, validation)}
                    className={`${styles.pixelInput} ${
                      errors[name] ? styles.error : ""
                    }`}
                    autoComplete="off"
                  />
                  {errors[name] && (
                    <div className={styles.formError}>
                      {errors[name]?.message}
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            <button className={styles.okButton} type="submit">
              OK
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ModalContactForm;
