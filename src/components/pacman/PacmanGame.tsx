export default function PacmanIframe() {
  return (
    <iframe
      src="https://freepacman.org/"
      title="Pacman"
      width="100%"
      height="100%"
      style={{
        width: "100vw",
        height: "100vh",
        border: "none",
        display: "block",
      }}
      allowFullScreen
    />
  );
}
