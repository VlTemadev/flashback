import styles from "./styles/PacmanGame.module.scss";

export default function PacmanIframe() {
  return (
    <iframe
      src="https://freepacman.org/"
      title="Pacman"
      className={styles.pacmanIframe}
      allowFullScreen
    />
  );
}
