import React, { useState } from "react";
import styled from "styled-components";

const Placeholder = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100%;
`;

const Image = styled.img<{ loaded: boolean }>`
  visibility: ${(props) => (props.loaded ? "visible" : "hidden")};
  height: 0;
  opacity: ${(props) => (props.loaded ? 1 : 0)};
  max-width: 100%;
  max-height: 100%;
  transition: opacity ease-out 0.1s;
`;

const ImagePlaceholder = (props: { src: string; className?: any }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const renderImage = () => {
    setImageLoaded(true);
  };

  return (
    <>
      {!imageLoaded && <Placeholder className={props.className} />}
      <Image
        className={imageLoaded && props.className}
        src={props.src}
        loaded={imageLoaded}
        onLoad={() => renderImage()}
      />
    </>
  );
};

export default ImagePlaceholder;
