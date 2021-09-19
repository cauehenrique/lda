import Image from "next/image";

import { Container, Name } from "./styles";

import { FC } from "react";

interface IPhoto {
  image: StaticImageData;
  name: string;
}

const Photo: FC<IPhoto> = ({ image, name }) => {
  return (
    <Container>
      <Image
        src={image}
        layout="responsive"
        objectFit="cover"
        objectPosition="center"
      />
      <Name>{name}</Name>
    </Container>
  );
};

export default Photo;
