import {
  HStack,
  Input,
  Button,
  useBreakpointValue,
  useToken,
  createListCollection,
  PopoverRoot,
  PopoverAnchor,
  PopoverContent,
  SelectRoot,
  SelectContent,
  SelectItem,
  VStack,
  Box,
  Text,
} from "@chakra-ui/react";
import { InputGroup } from "./input-group";
import { Search } from "react-feather";
import { useColorModeValue } from "./color-mode";
import { useMemo, useRef, useState } from "react";
import { useCombobox } from "downshift";
import { Avatar } from "../atoms/Avatar";

interface SearchInputProps {
  placeholder?: string;
}

interface UserEntry {
  name: string;
  id: number;
  avatar: string;
}

type ListCollectionActions<T> = typeof createListCollection<T> extends (
  opt: infer T
) => any
  ? Partial<T>
  : never;

const users = [
  {
    id: 1,
    name: "Alice Johnson",
    avatar: "https://avatar.iran.liara.run/public/boy?username=Alice",
  },
  {
    id: 2,
    name: "Bob Smith",
    avatar: "https://avatar.iran.liara.run/public/boy?username=Bob",
  },
  {
    id: 3,
    name: "Charlie Brown",
    avatar: "https://avatar.iran.liara.run/public/boy?username=Charlie",
  },
  {
    id: 4,
    name: "David Wilson",
    avatar: "https://avatar.iran.liara.run/public/boy?username=David",
  },
  {
    id: 5,
    name: "Eva Martinez",
    avatar: "https://avatar.iran.liara.run/public/girl?username=Eva",
  },
  {
    id: 6,
    name: "Frank Miller",
    avatar: "https://avatar.iran.liara.run/public/boy?username=Frank",
  },
  {
    id: 7,
    name: "Grace Lee",
    avatar: "https://avatar.iran.liara.run/public/girl?username=Grace",
  },
  {
    id: 8,
    name: "Henry Davis",
    avatar: "https://avatar.iran.liara.run/public/boy?username=Henry",
  },
  {
    id: 9,
    name: "Ivy Clark",
    avatar: "https://avatar.iran.liara.run/public/girl?username=Ivy",
  },
  {
    id: 10,
    name: "Jack White",
    avatar: "https://avatar.iran.liara.run/public/boy?username=Jack",
  },
];

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "Search...",
}) => {
  const [red100, red200, gray100, gray200, gray700, gray800, blue700, blue800] =
    useToken("colors", [
      "red.100",
      "red.200",
      "gray.100",
      "gray.200",
      "gray.700",
      "gray.800",
      "blue.700",
      "blue.800",
    ]);

  const buttonBg = useColorModeValue(
    `linear-gradient(to bottom, ${red100}, ${red200})`,
    gray100
  );
  const buttonColor = useColorModeValue("white", gray800);
  const inputBg = useColorModeValue("white", blue700);
  const inputColor = useColorModeValue(gray800, gray100);
  const inputPlaceHolderColor = useColorModeValue("#999", gray100);
  const iconColor = useToken("colors", inputPlaceHolderColor)[0];
  const selectContentBg = useColorModeValue(gray100, blue800);
  const selectContentTextColor = useColorModeValue(gray800, gray100);
  const highlightedItemBg = useColorModeValue(gray200, gray700);

  const buttonWidth = useBreakpointValue({ base: "auto", md: 160 });
  const inputGroupWidth = useBreakpointValue({ base: "auto", lg: 469 });
  const hStackGap = useBreakpointValue({ base: 2, md: 4 });
  const size = useBreakpointValue<"xs" | "md">({ base: "xs", md: "md" });
  const iconSize = useBreakpointValue({ base: 14, md: 18 });

  const inputGroupRef = useRef<HTMLInputElement>(null);

  const actions = {
    itemToString: (x) => x.name,
    itemToValue: (x) => x.id.toString(),
  } satisfies ListCollectionActions<UserEntry>;

  const makeCollFilter = <T extends UserEntry>(input: string) => {
    return function filter(item: T) {
      if (input === "") return false;
      return item.name.toLowerCase().includes(input.toLowerCase());
    };
  };

  const coll = createListCollection({
    items: users,
    ...actions,
  });

  const [filteredUsers, setFilteredUsers] = useState<UserEntry[]>([]);
  const filterUsers = useMemo(
    () => createListCollection({ items: filteredUsers }),
    [filteredUsers]
  );

  const {
    isOpen,
    getMenuProps,
    getInputProps,
    highlightedIndex,
    getItemProps,
    selectedItem,
  } = useCombobox({
    items: filterUsers.items,
    itemToString: (x) => (x != null ? actions.itemToString(x) : ""),
    onInputValueChange({ inputValue }) {
      setFilteredUsers(coll.items.filter(makeCollFilter(inputValue)));
    },
  });

  return (
    <HStack gap={hStackGap} align="center" justify="center">
      <VStack>
        <PopoverRoot
          positioning={{ sameWidth: true }}
          open={isOpen}
          autoFocus={false}
        >
          <PopoverAnchor>
            <InputGroup
              flex="1"
              startElement={<Search size={iconSize} color={iconColor} />}
              bg={inputBg}
              width={inputGroupWidth}
              maxWidth={469}
              height={35}
              ref={inputGroupRef}
            >
              <Input
                placeholder={placeholder}
                size={size}
                height={35}
                color={inputColor}
                _placeholder={{ color: inputPlaceHolderColor }}
                border="none"
                focusRing="none"
                onFocus={(evt) => {
                  evt.currentTarget.select();
                }}
                {...getInputProps()}
                autoComplete="off"
              />
            </InputGroup>
          </PopoverAnchor>
          <PopoverContent width="auto" display="contents">
            <SelectRoot
              open
              hidden={filterUsers.size === 0}
              collection={filterUsers}
              value={
                selectedItem
                  ? [filterUsers.getItemValue(selectedItem)!]
                  : undefined
              }
              position="absolute"
              w={inputGroupRef.current?.getClientRects()[0]?.width}
              top={14}
              {...getMenuProps()}
            >
              <SelectContent
                bg={selectContentBg}
                color={selectContentTextColor}
              >
                {filterUsers.items.map((user, index) => (
                  <SelectItem
                    key={user.id}
                    item={user}
                    style={{
                      backgroundColor:
                        highlightedIndex === index
                          ? highlightedItemBg
                          : "transparent",
                    }}
                    {...getItemProps({ item: user, index })}
                  >
                    <HStack>
                      <Avatar size="sm" src={user.avatar} name={user.name} />
                      <Box>
                        <Text fontSize="sm" fontWeight="medium">
                          {user.name}
                        </Text>
                      </Box>
                    </HStack>
                  </SelectItem>
                ))}
              </SelectContent>
            </SelectRoot>
          </PopoverContent>
        </PopoverRoot>
      </VStack>

      <Button
        bg={buttonBg}
        color={buttonColor}
        size={size}
        height={35}
        width={buttonWidth}
        fontWeight="bold"
        textTransform="uppercase"
      >
        Search
      </Button>
    </HStack>
  );
};

export default SearchInput;
