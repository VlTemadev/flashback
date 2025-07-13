import { useCallback, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./styles/RetroSwiperWithBg.module.scss";
import { useTranslation } from "react-i18next";

interface Slide {
  id: string | number;
  src: string;
  title?: string;
  text: string;
}

interface RetroSwiperProps {
  slides: Slide[];
  arrowSrc: string;
}

export default function RetroSwiperWithBg({
  slides,
  arrowSrc,
}: RetroSwiperProps) {
  const { t } = useTranslation();
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  // Для текста под слайдером — активный индекс
  const [activeIdx, setActiveIdx] = useState(0);

  const prevRef = useCallback(
    (node: HTMLElement | null) => setPrevEl(node),
    []
  );
  const nextRef = useCallback(
    (node: HTMLElement | null) => setNextEl(node),
    []
  );

  return (
    <div className={styles.sliderRow}>
      <div ref={prevRef} className={styles.arrow}>
        <img src={arrowSrc} alt="Prev" className={styles.arrowImg} />
      </div>
      <div className={styles.sliderWrapper}>
        {prevEl && nextEl && (
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            loop
            pagination={{
              clickable: true,
            }}
            navigation={{
              prevEl,
              nextEl,
            }}
            className={styles.swiper}
            onSlideChange={(swiper) => {
              setActiveIdx(swiper.realIndex);
            }}
          >
            {slides.map(({ id, src }) => (
              <SwiperSlide key={id}>
                <img
                  src={src}
                  alt={`Slide ${id}`}
                  className={styles.slideImage}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        <div className={styles.swiperPagination} />
        <div className={styles.slideCaption}>
          <p className={styles.slideCaptionTitle}>
            {t(slides[activeIdx]?.title ?? "")}
          </p>
          <p className={styles.slideCaptionText}>
            {t(slides[activeIdx]?.text ?? "")}
          </p>
        </div>
      </div>
      <div ref={nextRef} className={`${styles.arrow} ${styles.flip}`}>
        <img src={arrowSrc} alt="Next" className={styles.arrowImg} />
      </div>
    </div>
  );
}
