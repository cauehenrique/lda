import Link from "next/link";

import {
  LightningBoltIcon,
  QuestionMarkCircleIcon,
  HomeIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/outline";

import {
  Container,
  Button,
  BrandContainer,
  NavigationButtons,
  AboutButton,
} from "./styles";
import { FC } from "react";

const Navigation: FC = () => {
  return (
    <Container>
      <BrandContainer>
        <LightningBoltIcon className="_icon-outline" />
      </BrandContainer>
      <NavigationButtons>
        <Button
          onClick={() => {
            document.querySelector("html").classList.toggle("dark");
          }}
        >
          <MoonIcon className="w-6 h-6" />
        </Button>
        <Link href="/">
          <Button>
            <HomeIcon className="w-6 h-6" />
          </Button>
        </Link>
        <Link href="/sobre">
          <AboutButton>
            <QuestionMarkCircleIcon className="w-6 h-6" />
          </AboutButton>
        </Link>
      </NavigationButtons>
    </Container>
  );
};

export default Navigation;
