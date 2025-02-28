import { Avatar, Square, Float, HStack, Stack, Text } from "@chakra-ui/react";
import { MdOutlineEdit } from "react-icons/md";
import { useColorModeValue } from "../ui/color-mode";

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

export const UserCard = ({ user }: { user: User }) => {
  return (
    <HStack gap="4">
      <Avatar.Root size="2xl" variant="solid" shape="square">
        <Avatar.Fallback name={user.name} />
        <Avatar.Image src={user.avatar} />
        <Float placement="bottom-end" offsetX="1" offsetY="1">
          <Square bg={useColorModeValue("blue.700", "white")} size="20px">
            <MdOutlineEdit
              color={useColorModeValue("white", "#12394d")}
              style={{ padding: "2px" }}
            />
          </Square>
        </Float>
      </Avatar.Root>
      <Stack gap="1">
        <Text fontWeight="medium">{user.name}</Text>
        <Text fontSize="sm" color="fg.muted">
          {user.email}
        </Text>
      </Stack>
    </HStack>
  );
};
