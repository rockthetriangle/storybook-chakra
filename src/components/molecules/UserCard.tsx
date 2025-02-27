import {
    Avatar,
    HStack,
    Stack,
    Text
} from "@chakra-ui/react";

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

export const UserCard = ({ user }: { user: User }) => {
  return (
    <HStack gap="4">
      <Avatar.Root size="md" variant="solid">
        <Avatar.Fallback name={user.name} />
        <Avatar.Image src={user.avatar} />
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
