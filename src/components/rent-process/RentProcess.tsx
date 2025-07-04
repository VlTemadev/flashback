import styles from "./styles/RentProcess.module.scss";
import player from "@/assets/img/player.png";
import alien from "@/assets/img/alien.png";
import life from "@/assets/img/life.png";
import ufo from "@/assets/img/ufo.png";
import ship from "@/assets/img/ship.png";

export default function RentProcess() {
  return (
    <section className={styles.stepsSection}>
      <div className={styles.stepsList}>
        <div className={styles.step}>
          <div className={styles.stepIconRow}>
            <img className={styles.stepShip} src={ship} alt="" />
            <span className={styles.stepDash} />
            <img className={styles.stepEnemy} src="/img/enemy.png" alt="" />
          </div>
          <div className={`${styles.stepNumber} ${styles.stepBlue}`}>01</div>
          <div className={styles.stepText}>
            Вы арендуете игровые автоматы
            <br />
            или приставки
          </div>
        </div>

        <div className={styles.step}>
          <div className={styles.stepIconRow}>
            <img src={life} alt="" />
            <img src={ufo} alt="ufo" />
          </div>
          <div className={`${styles.stepNumber} ${styles.stepPink}`}>02</div>
          <div className={styles.stepText}>
            Мы доставляем
            <br />
            на мероприятие
          </div>
        </div>

        <div className={styles.step}>
          <div className={styles.stepIconRow}>
            <img src={player} alt="player" />
            <img src={alien} alt="alien" />
          </div>
          <div className={`${styles.stepNumber} ${styles.stepOrange}`}>03</div>
          <div className={styles.stepText}>Вы играете!</div>
        </div>
      </div>
    </section>
  );
}
