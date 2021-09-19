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
import { FC, useEffect, useState } from "react";

const Navigation: FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const wasDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(wasDarkMode);
  }, []);

  useEffect(() => {
    document.querySelector("html").classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  return (
    <Container>
      <BrandContainer>
        <LightningBoltIcon className="_icon-outline" />
      </BrandContainer>
      <NavigationButtons>
        <Button
          onClick={() => {
            setDarkMode(!darkMode);
          }}
        >
          {darkMode ? (
            <SunIcon className="w-6 h-6" />
          ) : (
            <MoonIcon className="w-6 h-6" />
          )}
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
