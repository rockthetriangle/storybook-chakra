import { Avatar, Circle, Float, HStack, Stack, Text } from "@chakra-ui/react";
import { MdOutlineEdit } from "react-icons/md";

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
        <Float placement="bottom-end" offsetX="2" offsetY="2">
          <Circle bg="gray.400" size="20px">
            <MdOutlineEdit style={{ padding: "2px" }} />
          </Circle>
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
