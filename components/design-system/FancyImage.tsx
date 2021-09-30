import { useState } from "react";
import Image, { ImageProps } from "next/image";
import classnames from "classnames";

interface IFancyImage extends ImageProps {
  fallbackSrc?: string;
}

export default function FancyImage({
  src,
  fallbackSrc,
  onError,
  onLoadingComplete,
  ...rest
}: IFancyImage): JSX.Element {
  const [hasError, setHasError] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const imageClasses = classnames(
    "transition duration-500 ease-in-out opacity-0",
    {
      "opacity-100": hasLoaded,
    }
  );

  return (
    <Image
      className={imageClasses}
      src={hasError && fallbackSrc ? fallbackSrc : src}
      onError={(e) => {
        setHasError(true);
        onError?.(e);
      }}
      onLoadingComplete={(result) => {
        setHasLoaded(true);
        onLoadingComplete?.(result);
      }}
      {...rest}
    />
  );
}
