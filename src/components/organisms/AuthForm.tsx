import { Button } from "@/components/atoms/button";
import { Box, Heading, Input, Link, Stack, Text } from "@chakra-ui/react";
import { FaApple, FaChevronRight, FaGoogle, FaMicrosoft } from "react-icons/fa";

const AuthForm = () => {
  const accentColor = "red.200";

  return (
    <Box>
      <Heading as="h1" fontSize="3xl" fontWeight="bold" mb={3}>
        Sign in your account
      </Heading>
      <Text color="gray.600" mb={8}>
        New to our platform?{" "}
        <Link color={accentColor} href="#" textDecoration="none">
          Create an account
        </Link>
        .
      </Text>

      <Stack gap={4}>
        <Button
          variant="outline"
          colorScheme="teal"
          leftIcon={FaGoogle}
          justifyContent="flex-start"
          rightIcon={FaChevronRight}
          py={6}
        >
          <Text flex="1" textAlign="center">
            Continue with Google
          </Text>
        </Button>

        <Button
          variant="outline"
          leftIcon={FaMicrosoft}
          justifyContent="flex-start"
          rightIcon={FaChevronRight}
          py={6}
        >
          <Text flex="1" textAlign="center">
            Continue with Microsoft
          </Text>
        </Button>

        <Button
          variant="outline"
          leftIcon={FaApple}
          justifyContent="flex-start"
          rightIcon={FaChevronRight}
          py={6}
        >
          <Text flex="1" textAlign="center">
            Continue with Apple
          </Text>
        </Button>
      </Stack>

      <Text mt={6} mb={4} textAlign="center" color="gray.600">
        Or continue with email
      </Text>

      <Stack gap={4}>
        <Input placeholder="me@example.com" size="lg" />
        <Button
          bg={accentColor}
          color="white"
          _hover={{ bg: "teal.600" }}
          size="lg"
          w="full"
        >
          Continue
        </Button>
      </Stack>
    </Box>
  );
};

export default AuthForm;
