import { WolfIcon } from "@/components/atoms/icon/Icons";
import AuthForm from "@/components/organisms/AuthForm";
import {
    Box,
    Container,
    Flex,
    Icon,
    Link,
    Text
} from "@chakra-ui/react";

const AuthPage = () => {
  const accentColor = "red.200";

  return (
    <Flex minH="100vh" w="full">
      {/* Left side with login form */}
      <Box
        flex={1}
        py={6}
        px={6}
        position="relative"
        display="flex"
        flexDirection="column"
      >
        {/* Top navigation bar with logo and help link */}
        <Flex justifyContent="space-between" alignItems="center" w="full">
          <Flex align="center">
            <WolfIcon boxSize="29px" color={accentColor} />
            <Text fontSize="xl" fontWeight="bold" ml={2} color="gray.700">
              Logo
            </Text>
          </Flex>

          <Text color="gray.600">
            Not working?{" "}
            <Link color={accentColor} href="#">
              Get help
            </Link>
          </Text>
        </Flex>

        {/* Main content container - vertically centered */}
        <Flex flex="1" alignItems="center" justifyContent="center">
          <Container maxW="md" py={6} px={0} mx="auto">
            {/* <Box>
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
            </Box> */}
            <AuthForm />
          </Container>
        </Flex>
      </Box>

      {/* Right side with teal background and placeholder image */}
      <Box
        flex={1}
        bg={accentColor}
        display={{ base: "none", md: "flex" }}
        justifyContent="center"
        alignItems="center"
      >
        <Box
          width="150px"
          height="150px"
          bg="rgba(255,255,255,0.2)"
          borderRadius="md"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Icon viewBox="0 0 24 24" boxSize={10} color="white">
            <path
              fill="currentColor"
              d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"
            />
          </Icon>
        </Box>
      </Box>
    </Flex>
  );
};

export default AuthPage;
