declare module "*.css";
declare module "*.scss";
declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "swiper/css";
declare module "swiper/css/navigation";
declare module "swiper/css/pagination";
declare module "swiper/css/scrollbar";
declare module "swiper/css/effect-fade";
