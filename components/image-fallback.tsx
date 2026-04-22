"use client";

import Image, { ImageProps } from "next/image";
import fallbackImage from "@/public/default-fallback-image.png";
import { useEffect, useState } from "react";

interface ImageWithFallbackProps extends ImageProps {
  fallback?: ImageProps["src"];
}

const ImageFallback = ({
  fallback = fallbackImage,
  alt,
  src,
  ...props
}: ImageWithFallbackProps) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHasError(false);
  }, [src]);

  return (
    <Image
      {...props}
      alt={alt}
      src={hasError ? fallback : src}
      onError={() => setHasError(true)}
    />
  );
};

export default ImageFallback;
