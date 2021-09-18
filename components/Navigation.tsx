import Link from "next/link";

import {
  LightningBoltIcon,
  QuestionMarkCircleIcon,
  HomeIcon,
} from "@heroicons/react/outline";

import { FC } from "react";

const Navigation: FC = () => {
  return (
    <div className="h-14 bg-white border-b border-gray-300 flex items-center justify-between px-2">
      <div className="block text-indigo-600 p-2">
        <LightningBoltIcon className="w-6 h-6" />
      </div>
      <div className="text-lg flex items-center space-x-2">
        <Link href="/">
          <a className="block bg-white hover:bg-gray-200 active:bg-gray-300 text-black rounded-sm p-2">
            <HomeIcon className="w-6 h-6" />
          </a>
        </Link>
        <Link href="/sobre">
          <a className="block bg-indigo-500 hover:bg-indigo-400 active:bg-indigo-600 text-white rounded-sm p-2">
            <QuestionMarkCircleIcon className="w-6 h-6" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
