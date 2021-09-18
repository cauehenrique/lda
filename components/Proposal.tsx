import { FC, useState } from "react";
import { ArrowCircleUpIcon, ArrowCircleDownIcon } from "@heroicons/react/solid";

import { increaseScore, decreaseScore } from "~/services/voteController";

interface Proposal {
  id: number;
  title: string;
  content: string;
  score: number;
}

const Proposal: FC<Proposal> = ({ id, title, content, score }) => {
  const [voteDisabled, setVoteDisabled] = useState(false);
  const [currentScore, setCurrentScore] = useState(score);

  function handleIncrease() {
    setVoteDisabled(true);
    setCurrentScore((prev) => prev + 1);
    increaseScore(id);
  }

  function handleDecrease() {
    setVoteDisabled(true);
    setCurrentScore((prev) => prev - 1);
    decreaseScore(id);
  }

  return (
    <div className="w-full overflow-hidden border border-gray-300 bg-white flex rounded-sm">
      <div className="bg-gray-100 w-14 border-r border-gray-300 flex flex-col flex-shrink-0 space-y-4 p-3">
        <div className="flex flex-col justify-center items-center space-y-1">
          <button
            className="disabled:opacity-80"
            disabled={voteDisabled}
            onClick={(e) => {
              e.currentTarget.classList.add("text-indigo-500");
              handleIncrease();
            }}
          >
            <ArrowCircleUpIcon className="_icon-filled" />
          </button>
          <button
            className="disabled:opacity-80"
            disabled={voteDisabled}
            onClick={(e) => {
              e.currentTarget.classList.add("text-red-500");
              handleDecrease();
            }}
          >
            <ArrowCircleDownIcon className="_icon-filled" />
          </button>
        </div>
        <span
          className={`w-full font-semibold text-center rounded-sm ${
            currentScore > 0 ? "bg-indigo-300" : "bg-red-300"
          } p-0.5`}
        >
          {currentScore}
        </span>
      </div>
      <div className="p-4">
        <span className="block font-bold">{title}</span>
        {content}
      </div>
    </div>
  );
};

export default Proposal;
