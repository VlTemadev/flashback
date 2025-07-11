import { Container } from "../container/Container";
import styles from "./styles/DashedDivider.module.scss";

export default function DashedDivider() {
  return (
    <Container>
      <hr className={styles.dashedDivider} />
    </Container>
  );
}
