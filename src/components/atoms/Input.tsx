import { Input as ChakraInput } from "@chakra-ui/react";

interface InputProps {
  placeholder?: string;
}

const Input = ({ placeholder = "Search..." }: InputProps) => {
  return (
    <ChakraInput
      placeholder={placeholder}
      className="flex-1 px-3 py-2 text-black dark:text-white bg-transparent border-none focus:outline-none"
    />
  );
};

export default Input;
