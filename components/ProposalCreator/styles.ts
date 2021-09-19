import tw from "tailwind-styled-components";

export const Container = tw.form`
flex flex-col
mb-4
overflow-hidden
border-2
border-gray-300 dark:border-gray-600
focus-within:border-indigo-600 dark:focus-within:border-indigo-600
text-black dark:text-white
rounded-sm
`;

export const Area = tw.textarea`
w-full h-24
p-4
outline-none
resize-none
bg-white
dark:bg-gray-800
`;

export const SubmitContainer = tw.div`
flex
`;

export const SubmitButton = tw.button`
p-2
w-full
flex justify-center items-center
transition-colors duration-75
bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600
text-white dark:text-white
`;
