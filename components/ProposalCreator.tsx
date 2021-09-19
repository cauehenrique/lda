import { HandIcon } from "@heroicons/react/outline";
import { FC } from "react";

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
      <button
        type="submit"
        className="transition-colors duration-75 bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 w-full text-white flex justify-center p-2"
      >
        <HandIcon className="_icon-outline" />
      </button>
    </form>
  );
};

export default ProposalCreator;
