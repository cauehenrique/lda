import tw from "tailwind-styled-components";

export const Container = tw.div`
flex flex-col
mb-4
overflow-hidden
text-black dark:text-white
rounded-sm
`;

export const Area = tw.textarea`
w-full h-24
p-4
outline-none
resize-none
border-2
border-b-0
border-gray-300 dark:border-gray-600
focus:border-indigo-600 dark:focus:border-indigo-600
bg-white dark:bg-gray-800
`;

export const SubmitButton = tw.button`
p-2
w-full
flex justify-center items-center
transition-colors duration-75
bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600
text-white dark:text-white
`;

type ModalContainer = {
  $isVisible: boolean;
};

export const ModalContainer = tw.div<ModalContainer>`
w-full min-h-screen
fixed
top-0 left-0
bg-black
bg-opacity-60

flex
items-center
justify-center

z-20

${({ $isVisible }) => !$isVisible && "hidden"}
`;

export const ModalContent = tw.main`
p-8
max-w-xl
bg-white dark:bg-gray-800
rounded-sm
`;

export const RMInput = tw.input`
p-2
w-full
block
outline-none
border-2
border-b-0
border-gray-300 focus:border-indigo-600
dark:border-gray-700 dark:focus:border-indigo-600
bg-white dark:bg-gray-800
rounded-sm
rounded-b-none
`;

export const ModalButton = tw.button`
p-2
flex
items-center
justify-center
rounded-sm
rounded-t-none
bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600
text-white
`;
