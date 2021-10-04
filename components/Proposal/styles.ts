import tw from "tailwind-styled-components";

export const Container = tw.div`
flex
w-full
overflow-hidden
border-2
rounded-md
border-gray-300 dark:border-gray-600
bg-white dark:bg-gray-800
text-black dark:text-white
`;

export const SideBar = tw.div`
p-3
w-14
flex flex-col flex-shrink-0
bg-gray-200 dark:bg-gray-700
border-r-2
border-gray-300 dark:border-gray-600
space-y-4
`;

export const VoteButtons = tw.div`
flex flex-col
justify-center items-center
space-y-1
`;

type Score = {
  $isGood: boolean;
};

export const Score = tw.span<Score>`
w-full
font-semibold
text-center
rounded-md
${(p) => (p.$isGood ? "bg-indigo-500" : "bg-red-500")}
text-white
`;
