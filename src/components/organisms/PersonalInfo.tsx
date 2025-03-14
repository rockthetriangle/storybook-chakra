import {
  Box,
  Grid,
  GridItem,
  Heading,
  Link,
  Tabs,
  Text,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { LuBriefcase, LuCode, LuFileText, LuUser } from "react-icons/lu";
import { useColorModeValue } from "../molecules/color-mode";
import WorkHistory from "./WorkHistory";

interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
}

interface PersonalDetails {
  birthday: string;
  nationality: string;
  languages: string;
}

interface EmergencyContact {
  name: string;
  relationship: string;
  phone: string;
}

interface WorkSchedule {
  workingHours: string;
  timeZone: string;
  preferredMeetingTimes: string;
}

interface ProfileData {
  contactInfo: ContactInfo;
  personalDetails: PersonalDetails;
  emergencyContact: EmergencyContact;
  workSchedule: WorkSchedule;
}

const InfoField = ({ label, value }: { label: string; value: string }) => (
  <>
    <GridItem>
      <Text color="gray.600" fontSize="md">
        {label}
      </Text>
    </GridItem>
    <GridItem textAlign="right">
      {label === "LinkedIn" ? (
        <Link
          color="blue.500"
          href={`https://linkedin.com/in/${value.replace("@", "")}`}
        >
          {value}
        </Link>
      ) : (
        <Text fontWeight="medium">{value}</Text>
      )}
    </GridItem>
  </>
);

const PersonalInfoComponent: React.FC = () => {
  // Sample data
  const profileData: ProfileData = {
    contactInfo: {
      email: "michael.anderson@example.com",
      phone: "+1 (555) 234-5678",
      linkedin: "@michaelanderson",
    },
    personalDetails: {
      birthday: "March 15, 1988",
      nationality: "American",
      languages: "English, Spanish",
    },
    emergencyContact: {
      name: "Sarah Anderson",
      relationship: "Spouse",
      phone: "+1 (555) 987-6543",
    },
    workSchedule: {
      workingHours: "9:00 AM - 5:00 PM",
      timeZone: "PST (UTC-8)",
      preferredMeetingTimes: "10:00 AM - 4:00 PM",
    },
  };

  // Colors
  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const activeTabColor = useColorModeValue("blue.500", "blue.300");
  const hoverTabColor = useColorModeValue("blue.50", "blue.900");
  const iconBgColor = useColorModeValue("blue.50", "blue.900");
  const iconColor = useColorModeValue("blue.500", "blue.300");

  return (
    <Box
      mx="auto"
      p={4}
      bg={bgColor}
      marginLeft={3}
      marginTop={5}
      w="98%"
      borderRadius="sm"
      boxShadow="sm"
    >
      <Tabs.Root defaultValue="personal-info">
        <Tabs.List borderBottomWidth="1px" borderBottomColor={borderColor}>
          <Tabs.Trigger
            value="personal-info"
            fontWeight="semibold"
            color="gray.600"
            display="flex"
            alignItems="center"
            gap={2}
            px={4}
            py={2}
            _selected={{
              color: activeTabColor,
              borderBottomColor: activeTabColor,
              borderBottomWidth: "2px",
            }}
            _hover={{ bg: hoverTabColor }}
          >
            <LuUser />
            Personal Info
          </Tabs.Trigger>
          <Tabs.Trigger
            value="work-history"
            fontWeight="semibold"
            color="gray.600"
            display="flex"
            alignItems="center"
            gap={2}
            px={4}
            py={2}
            _selected={{
              color: activeTabColor,
              borderBottomColor: activeTabColor,
              borderBottomWidth: "2px",
            }}
            _hover={{ bg: hoverTabColor }}
          >
            <LuBriefcase />
            Work History
          </Tabs.Trigger>
          <Tabs.Trigger
            value="skills"
            fontWeight="semibold"
            color="gray.600"
            display="flex"
            alignItems="center"
            gap={2}
            px={4}
            py={2}
            _selected={{
              color: activeTabColor,
              borderBottomColor: activeTabColor,
              borderBottomWidth: "2px",
            }}
            _hover={{ bg: hoverTabColor }}
          >
            <LuCode />
            Skills
          </Tabs.Trigger>
          <Tabs.Trigger
            value="documents"
            fontWeight="semibold"
            color="gray.600"
            display="flex"
            alignItems="center"
            gap={2}
            px={4}
            py={2}
            _selected={{
              color: activeTabColor,
              borderBottomColor: activeTabColor,
              borderBottomWidth: "2px",
            }}
            _hover={{ bg: hoverTabColor }}
          >
            <LuFileText />
            Documents
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="personal-info" pt={4}>
          <Flex gap={6}>
            {/* User Icon Column that spans both rows */}
            <Flex
              direction="column"
              justify="center"
              align="center"
              height="100%"
            >
              <Box
                bg={iconBgColor}
                color={iconColor}
                p={6}
                borderRadius="full"
                mb={2}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <LuUser size={80} />
              </Box>
              <Text fontWeight="bold" fontSize="xl" mt={2}>
                Michael Anderson
              </Text>
              <Text color="gray.500" fontSize="sm">
                Software Engineer
              </Text>
            </Flex>

            {/* Main Content Grid */}
            <Grid templateColumns="1fr 1fr" gap={8} flex={1}>
              {/* Left Column */}
              <GridItem>
                <Heading size="md" mb={4}>
                  Contact Information
                </Heading>
                <Box
                  p={4}
                  borderWidth="1px"
                  borderRadius="md"
                  borderColor={borderColor}
                  bg={bgColor}
                >
                  <Grid templateColumns="1fr 1fr" rowGap={4} columnGap={2}>
                    <InfoField
                      label="Email"
                      value={profileData.contactInfo.email}
                    />
                    <InfoField
                      label="Phone"
                      value={profileData.contactInfo.phone}
                    />
                    <InfoField
                      label="LinkedIn"
                      value={profileData.contactInfo.linkedin}
                    />
                  </Grid>
                </Box>

                <Heading size="md" mt={6} mb={4}>
                  Emergency Contact
                </Heading>
                <Box
                  p={4}
                  borderWidth="1px"
                  borderRadius="md"
                  borderColor={borderColor}
                  bg={bgColor}
                >
                  <Grid templateColumns="1fr 1fr" rowGap={4} columnGap={2}>
                    <InfoField
                      label="Name"
                      value={profileData.emergencyContact.name}
                    />
                    <InfoField
                      label="Relationship"
                      value={profileData.emergencyContact.relationship}
                    />
                    <InfoField
                      label="Phone"
                      value={profileData.emergencyContact.phone}
                    />
                  </Grid>
                </Box>
              </GridItem>

              {/* Right Column */}
              <GridItem>
                <Heading size="md" mb={4}>
                  Personal Details
                </Heading>
                <Box
                  p={4}
                  borderWidth="1px"
                  borderRadius="md"
                  borderColor={borderColor}
                  bg={bgColor}
                >
                  <Grid templateColumns="1fr 1fr" rowGap={4} columnGap={2}>
                    <InfoField
                      label="Birthday"
                      value={profileData.personalDetails.birthday}
                    />
                    <InfoField
                      label="Nationality"
                      value={profileData.personalDetails.nationality}
                    />
                    <InfoField
                      label="Languages"
                      value={profileData.personalDetails.languages}
                    />
                  </Grid>
                </Box>

                <Heading size="md" mt={6} mb={4}>
                  Work Schedule
                </Heading>
                <Box
                  p={4}
                  borderWidth="1px"
                  borderRadius="md"
                  borderColor={borderColor}
                  bg={bgColor}
                >
                  <Grid templateColumns="1fr 1fr" rowGap={4} columnGap={2}>
                    <InfoField
                      label="Working Hours"
                      value={profileData.workSchedule.workingHours}
                    />
                    <InfoField
                      label="Time Zone"
                      value={profileData.workSchedule.timeZone}
                    />
                    <InfoField
                      label="Preferred Meeting Times"
                      value={profileData.workSchedule.preferredMeetingTimes}
                    />
                  </Grid>
                </Box>
              </GridItem>
            </Grid>
          </Flex>
        </Tabs.Content>

        <Tabs.Content value="work-history">
          <Box p={4} textAlign="center">
            <WorkHistory />
          </Box>
        </Tabs.Content>

        <Tabs.Content value="skills">
          <Box p={4} textAlign="center">
            <Text color="gray.500">Skills content would go here</Text>
          </Box>
        </Tabs.Content>

        <Tabs.Content value="documents">
          <Box p={4} textAlign="center">
            <Text color="gray.500">Documents content would go here</Text>
          </Box>
        </Tabs.Content>
      </Tabs.Root>
    </Box>
  );
};

export default PersonalInfoComponent;
