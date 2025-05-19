import { WolfIcon } from "@/components/atoms/icon/Icons";
import AuthForm from "@/components/organisms/AuthForm";
import { Box, Container, Flex, Link, Text } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../styles/carousel.css";
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
        <Carousel
          showArrows={false}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          infiniteLoop
          autoPlay
          animationHandler="fade"
          className="fade-carousel"
        >
          {[1, 2, 3, 4, 5].map((index) => (
            <img
              src={`/carousel/${index}.jpeg`}
              alt={`Image ${index}`}
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
          ))}
        </Carousel>
      </Box>
    </Flex>
  );
};

export default AuthPage;
