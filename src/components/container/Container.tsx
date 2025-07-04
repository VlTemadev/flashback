import type { PropsWithChildren } from "react";
import styles from "./styles/Container.module.scss";

type ContainerProps = PropsWithChildren<{
  className?: string;
}>;

export function Container({ children, className }: ContainerProps) {
  const cls = [styles.container, className].filter(Boolean).join(" ");
  return <div className={cls}>{children}</div>;
}
