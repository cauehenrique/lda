import { FC, useState } from "react";
import { ArrowCircleUpIcon, ArrowCircleDownIcon } from "@heroicons/react/solid";

import { increaseScore, decreaseScore } from "~/services/voteController";

import { Container, SideBar, Score, VoteButtons } from "./styles";

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
    <Container>
      <SideBar>
        <VoteButtons>
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
        </VoteButtons>
        <Score $isGood={currentScore > 0}>{currentScore}</Score>
      </SideBar>
      <div className="p-4 w-full">
        <span className="block font-bold">{title}</span>
        <span>{content}</span>
      </div>
    </Container>
  );
};

export default Proposal;
