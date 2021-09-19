import { HandIcon } from "@heroicons/react/outline";
import { FC } from "react";

import tw from "tailwind-styled-components";

const SubmitButton = tw.button`
p-2
w-full
flex justify-center
transition-colors duration-75
bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600
dark:bg-white dark:hover:bg-gray-200
text-white
dark:text-black
`;

const ProposalCreator: FC = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="overflow-hidden border-2 transition-colors duration-75 focus-within:border-indigo-500 rounded-sm mb-4 flex flex-col"
    >
      <textarea
        placeholder="Qual a sua ideia?"
        className="w-full h-24 p-4 outline-none resize-none"
      ></textarea>
      <SubmitButton type="submit">
        <HandIcon className="_icon-outline" />
      </SubmitButton>
    </form>
  );
};

export default ProposalCreator;
