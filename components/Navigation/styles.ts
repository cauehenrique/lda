import tw from "tailwind-styled-components";

export const Container = tw.div`
fixed
top-0 left-0
w-full h-14
px-2
flex items-center justify-between
bg-white dark:bg-gray-800
border-gray-300 dark:border-gray-700
border-b-2
`;

export const BrandContainer = tw.div`
p-2
text-indigo-600 dark:text-white
`;

export const NavigationButtons = tw.div`
flex items-center
space-x-2
text-lg
`;

export const Button = tw.button`
  p-2
  bg-white hover:bg-gray-200 active:bg-white
  dark:bg-gray-800 dark:hover:bg-gray-700 dark:active:bg-gray-800
  text-black dark:text-white
  rounded-sm
`;

export const AboutButton = tw.a`
p-2
bg-indigo-600 hover:bg-indigo-400 active:bg-indigo-600
text-white
rounded-sm
cursor-pointer
`;
