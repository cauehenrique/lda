import tw from "tailwind-styled-components";

export const Container = tw.div`
mt-6
text-center
`;

export const Title = tw.h1`
mb-5
text-3xl
font-semibold
text-black dark:text-white
`;

export const Subtitle = tw.h2`
text-xl
text-black dark:text-white
`;

export const UsersContainer = tw.div`
mt-10
flex
flex-row
flex-wrap
justify-center
`;

export const Anchor = tw.a`
text-indigo-600 dark:text-indigo-500
font-semibold
cursor-pointer
`;
