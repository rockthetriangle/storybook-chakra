import { HStack, Input, Button, useBreakpointValue } from "@chakra-ui/react";
import { InputGroup } from "./input-group";
import { Search } from "react-feather";
import { useColorModeValue } from "./color-mode";

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
  const buttonBg = useColorModeValue("red.200", "gray.100");
  const buttonColor = useColorModeValue("white", "black");
  const inputBg = useColorModeValue("gray.100", "blue.700");
  const stackGap = useBreakpointValue({ base: 2, md: 4 });
  const size = useBreakpointValue({ base: "xs", md: "md" }) as
    | "xs"
    | "md";
  const iconSize = useBreakpointValue({ base: 14, md: 18 })

  return (
    <HStack gap={stackGap} width="87%">
      <InputGroup flex="1" startElement={<Search size={iconSize} />} bg={inputBg}>
        <Input placeholder={placeholder} size={size} />
      </InputGroup>

      <Button bg={buttonBg} color={buttonColor} size={size}>
        Search
      </Button>
    </HStack>
  );
};

export default SearchInput;
