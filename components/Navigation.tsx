import Link from "next/link";

import {
  LightningBoltIcon,
  QuestionMarkCircleIcon,
  HomeIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/outline";

import { FC } from "react";

const Navigation: FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-14 bg-white dark:bg-gray-800 border-b-2 border-gray-300 flex items-center justify-between px-2">
      <div className="block text-indigo-600 p-2">
        <LightningBoltIcon className="_icon-outline" />
      </div>
      <div className="text-lg flex items-center space-x-2">
        <button
          onClick={() => {
            document.querySelector("html").classList.toggle("dark");
          }}
          className="_button-secondary _button"
        >
          <MoonIcon className="_icon-outline" />
        </button>
        <Link href="/">
          <a className="_button-secondary _button">
            <HomeIcon className="_icon-outline" />
          </a>
        </Link>
        <Link href="/sobre">
          <a className="transition-colors bg-indigo-600 hover:bg-indigo-400 active:bg-indigo-600 text-white rounded-sm p-2">
            <QuestionMarkCircleIcon className="_icon-outline" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
