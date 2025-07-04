import styles from "./styles/ShootAnimatedShip.module.scss";
import ship from "@/assets/icons/ship.png";
import nlo from "@/assets/icons/nlo.png";

export default function ShootAnimatedShip() {
  const bulletsCount = 2;
  const bullets = Array.from({ length: bulletsCount }).map((_, i) => (
    <line
      key={i}
      x1="0"
      y1="3"
      x2="1"
      y2="3"
      stroke="#fff"
      strokeWidth="2"
      strokeDasharray="2 4"
      className={styles.shootLineSegment}
      style={{ animationDelay: `${i * 0.6}s` }}
    />
  ));

  return (
    <div className={styles.container}>
      <img src={ship} alt="ship" className={styles.ship} />
      <svg
        viewBox="0 0 100 6"
        preserveAspectRatio="none"
        className={styles.shootLine}
      >
        {bullets}
      </svg>
      <img src={nlo} alt="ship" className={styles.ship} />
    </div>
  );
}
