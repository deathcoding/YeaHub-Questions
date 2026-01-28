import type { CSSProperties } from "react";
import clsx from "clsx";
import styles from "./Skeleton.module.css";

interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  className?: string;
}

export function Skeleton({
  width,
  height,
  borderRadius,
  className,
}: SkeletonProps) {
  const style: CSSProperties = {};
  if (width != null)
    style.width = typeof width === "number" ? `${width}px` : width;
  if (height != null)
    style.height = typeof height === "number" ? `${height}px` : height;
  if (borderRadius != null) {
    style.borderRadius =
      typeof borderRadius === "number" ? `${borderRadius}px` : borderRadius;
  }

  return (
    <div
      className={clsx(styles.skeleton, className)}
      style={style}
      aria-hidden
    />
  );
}
