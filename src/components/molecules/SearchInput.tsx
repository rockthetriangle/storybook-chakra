import { HStack, Input, Button } from "@chakra-ui/react";
import { InputGroup } from "../ui/input-group";
import { Search } from "react-feather";

interface SearchInputProps {
  placeholder?: string;
  inputBg?: string;
  inputColor?: string;
  buttonBg?: string;
  buttonColor?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "Search...",
  inputBg = "white",
  inputColor = "black",
  buttonBg = "#cc0000",
  buttonColor = "white",
}) => {
  console.log("🛠️ SearchInput Props: ", { inputBg, inputColor, buttonBg, buttonColor });

  return (
    <HStack gap="4" width="full">
      <InputGroup flex="1" startElement={<Search size={18} />}>
        <Input 
          placeholder={placeholder} 
          bg={inputBg} 
          color={inputColor} 
        />
      </InputGroup>

      <Button 
        bg={buttonBg} 
        color={buttonColor} 
        radius={3}
        _hover={{ bg: buttonBg === "#cc0000" ? "#a00000" : "#d9d9d9" }}
      >
        Search
      </Button>
    </HStack>
  );
};

export default SearchInput;
