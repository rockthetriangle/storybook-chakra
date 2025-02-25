import { HStack, Input, Button, useToken } from "@chakra-ui/react";
import { InputGroup } from "../ui/input-group";
import { Search } from "react-feather";
import { useColorModeValue } from "../ui/color-mode";

interface SearchInputProps {
  placeholder?: string;
  inputBg?: string;
  inputColor?: string;
  buttonBg?: string;
  buttonColor?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "Search...",
}) => {
  const [primaryLight, primaryDark] = useToken("colors", [
    "primary.default",
    "background.default",
  ]);
  const buttonBg = useColorModeValue(primaryLight, primaryDark);
  const buttonColor = useColorModeValue("white", "black");

  return (
    <HStack gap="4" width="full">
      <InputGroup flex="1" startElement={<Search size={18} />}>
        <Input placeholder={placeholder} />
      </InputGroup>

      <Button bg={buttonBg} color={buttonColor}>
        Search
      </Button>
    </HStack>
  );
};

export default SearchInput;
