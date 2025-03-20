import {
  Box,
  Grid,
  Heading,
  Text,
  Flex,
  Image,
  SimpleGrid,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { LuUser } from "react-icons/lu";
import { useColorModeValue } from "../molecules/color-mode";

interface ProfileProps {
  name: string;
  campusId: string;
  department: string;
  email: string;
  jobTitle: string;
  cardCreated: string;
  otherIdentifiers: {
    unityId: string;
    proxId: string;
    patronId: string;
  };
  badgeAccess: {
    rejects: number;
    admits: number;
    lastCardUpdate: string;
  };
  profileImage?: string;
}

const ProfileInfo: React.FC<ProfileProps> = ({
  name,
  campusId,
  department,
  email,
  jobTitle,
  cardCreated,
  otherIdentifiers,
  badgeAccess,
  profileImage,
}) => {
  // Use responsive values based on breakpoints
  const flexDirection = useBreakpointValue({ base: "column", md: "row" }) as
    | "column"
    | "row";
  const imageSize = useBreakpointValue({ base: "150px", md: "200px" });
  const profileWidth = useBreakpointValue({ base: "100%", md: "200px" });
  const detailColumns = useBreakpointValue({ base: 1, lg: 2 });
  const badgeColumns = useBreakpointValue({ base: 1, sm: 3 });
  const spacing = useBreakpointValue({ base: 4, md: 6 });

  // Color mode values
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");
  const subtleTextColor = useColorModeValue("gray.500", "gray.400");
  const placeholderBg = useColorModeValue("gray.200", "gray.700");
  const cardBg = useColorModeValue("gray.50", "gray.700");
  const cardTextColor = useColorModeValue("gray.600", "gray.300");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Box width="100%" bg={bgColor} color={textColor} p={4} borderRadius="lg">
      <Flex
        direction={flexDirection}
        gap={spacing}
        alignItems={{ base: "center", md: "flex-start" }}
      >
        {/* Profile Image */}
        <Box width={profileWidth} flexShrink={0} mb={{ base: 4, md: 0 }}>
          {profileImage ? (
            <Image
              src={profileImage}
              alt={name}
              borderRadius="full"
              boxSize={imageSize}
              objectFit="cover"
              mx={{ base: "auto", md: 0 }}
              border="2px solid"
              borderColor={borderColor}
            />
          ) : (
            <Box
              bg={placeholderBg}
              borderRadius="full"
              boxSize={imageSize}
              display="flex"
              alignItems="center"
              justifyContent="center"
              mx={{ base: "auto", md: 0 }}
              border="2px solid"
              borderColor={borderColor}
            >
              <LuUser
                size={useBreakpointValue({ base: 60, md: 80 })}
                color={useColorModeValue("gray.500", "gray.300")}
              />
            </Box>
          )}
        </Box>

        {/* Profile Details */}
        <Box flex={1} width="100%">
          <Heading
            size="lg"
            mb={1}
            textAlign={{ base: "center", md: "left" }}
            color={textColor}
          >
            {name}
          </Heading>
          <Box
            mb={4}
            color={subtleTextColor}
            fontWeight="medium"
            textAlign={{ base: "center", md: "left" }}
          >
            <Text>Campus ID: {campusId}</Text>
            <Text>Department: {department}</Text>
          </Box>

          <Grid templateColumns={`repeat(${detailColumns}, 1fr)`} gap={spacing}>
            {/* Left Column */}
            <Box>
              {[
                { label: "Email Address", value: email },
                { label: "Job Title", value: jobTitle },
                { label: "Card Created", value: cardCreated },
              ].map(({ label, value }) => (
                <Box key={label} mb={6}>
                  <Text
                    color={subtleTextColor}
                    fontSize="sm"
                    fontWeight="semibold"
                  >
                    {label}
                  </Text>
                  <Text color={textColor}>{value}</Text>
                </Box>
              ))}
            </Box>

            {/* Right Column */}
            <Box>
              <Box mb={6}>
                <Text
                  color={subtleTextColor}
                  fontSize="sm"
                  fontWeight="semibold"
                  mb={2}
                >
                  Other Identifiers
                </Text>
                <Stack gap={1}>
                  {Object.entries(otherIdentifiers).map(([key, value]) => (
                    <Text key={key} color={textColor}>
                      {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
                    </Text>
                  ))}
                </Stack>
              </Box>
            </Box>
          </Grid>

          {/* Badge Access Section */}
          <Box mt={6}>
            <Heading size="md" mb={4} color={textColor}>
              Badge Access
            </Heading>
            <SimpleGrid columns={badgeColumns} gap={4}>
              {[
                { label: "Rejects", value: badgeAccess.rejects },
                { label: "Admits", value: badgeAccess.admits },
                {
                  label: "Last Card Update",
                  value: badgeAccess.lastCardUpdate,
                },
              ].map(({ label, value }) => (
                <Box
                  key={label}
                  bg={cardBg}
                  padding={3}
                  borderRadius="xl"
                  boxShadow="sm"
                  border="1px solid"
                  borderColor={borderColor}
                >
                  <Text color={cardTextColor}>{label}</Text>
                  <Text
                    fontSize={{ base: "xl", md: "2xl" }}
                    fontWeight="bold"
                    color={textColor}
                  >
                    {value}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default ProfileInfo;
