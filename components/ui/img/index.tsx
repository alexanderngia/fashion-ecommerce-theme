import React from "react";
import Image, { ImageProps } from "next/legacy/image";

interface Props extends ImageProps {
  alt: string;
}
const Img: React.FC<Props> = ({ src, alt, ...rest }) => {
  return <Image layout="fill" src={src} alt={alt} {...rest} />;
};

export default Img;
