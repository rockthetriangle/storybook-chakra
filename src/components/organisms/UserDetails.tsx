import { Box, Tabs, Text, useBreakpointValue } from "@chakra-ui/react";
import React, { useState } from "react";
import {
  LuBriefcase,
  LuCode,
  LuFileText,
  LuUser,
  LuCircleHelp,
} from "react-icons/lu";
import { useColorMode, useColorModeValue } from "../molecules/color-mode";
import WorkHistory from "./WorkHistory";
import PersonalInfo from "./PersonalInfo";
import { Tooltip } from "@/components/atoms/tooltip";
import Skills from "./Skills";
import Documents from "./Documents";
import ActivityLog from "./activity-log";
import { MdOutlineMonitorHeart } from "react-icons/md";

type TabsTriggerProps = {
  value: string;
  icon: React.ElementType;
  label: string;
  tooltip: string;
  isActive: boolean;
};

const TabsTrigger: React.FC<TabsTriggerProps> = ({
  value,
  icon: Icon,
  label,
  tooltip,
  isActive,
}) => {
  const activeTabColor = useColorModeValue("blue.500", "blue.300");
  const hoverTabColor = useColorModeValue("gray.50", "gray.700");
  const showHelp = useBreakpointValue({ base: false, md: true });
  const showLabels = useBreakpointValue({
    base: "activeLabelOnly",
    md: "allLabels",
  });

  return (
    <Tabs.Trigger
      value={value}
      fontWeight="semibold"
      color="gray.600"
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap={2}
      px={useBreakpointValue({ base: 2, md: 4 })}
      py={2}
      _selected={{
        color: activeTabColor,
        borderBottomColor: activeTabColor,
        borderBottomWidth: "2px",
      }}
      _hover={{ bg: hoverTabColor }}
    >
      <Icon />
      {(showLabels === "allLabels" ||
        (showLabels === "activeLabelOnly" && isActive)) && <Text>{label}</Text>}
      {showHelp && (
        <Tooltip showArrow content={tooltip}>
          <Box display="inline-flex" ml={1} cursor="help">
            <LuCircleHelp size={16} />
          </Box>
        </Tooltip>
      )}
    </Tabs.Trigger>
  );
};

const UserDetails: React.FC = () => {
  // Colors
  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const { colorMode } = useColorMode();
  const tabSize = useBreakpointValue({ base: "sm", md: "md" }) as "sm" | "md";
  const [activeTab, setActiveTab] = useState("personal-info");

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
      <Tabs.Root
        defaultValue="personal-info"
        size={tabSize}
        onValueChange={({ value }) => setActiveTab(value)}
      >
        <Tabs.List
          borderBottomWidth="1px"
          borderBottomColor={borderColor}
          width="100%"
          display="flex"
          justifyContent={useBreakpointValue({
            base: "space-between",
            md: "flex-start",
          })}
        >
          <TabsTrigger
            value="personal-info"
            icon={LuUser}
            label="Personal Info"
            tooltip="View basic user information"
            isActive={activeTab === "personal-info"}
          />
          <TabsTrigger
            value="work-history"
            icon={LuBriefcase}
            label="Work History"
            tooltip="Employment records and job history"
            isActive={activeTab === "work-history"}
          />
          <TabsTrigger
            value="skills"
            icon={LuCode}
            label="Skills"
            tooltip="Technical competencies and proficiency levels"
            isActive={activeTab === "skills"}
          />
          <TabsTrigger
            value="documents"
            icon={LuFileText}
            label="Documents"
            tooltip="Access user documents and files"
            isActive={activeTab === "documents"}
          />
          <TabsTrigger
            value="activity-log"
            icon={MdOutlineMonitorHeart}
            label="Activity Log"
            tooltip="View user activities and achievements"
            isActive={activeTab === "activity-log"}
          />
        </Tabs.List>

        <Tabs.Content value="personal-info">
          <PersonalInfo
            name="John Anderson"
            campusId="123456789"
            department="Computer Science"
            email="john.anderson@university.edu"
            jobTitle="IT Systems Programmer"
            cardCreated="March 15, 1998"
            otherIdentifiers={{
              unityId: "324234",
              proxId: "",
              patronId: "",
            }}
            badgeAccess={{
              rejects: 3,
              admits: 86,
              lastCardUpdate: "May 2022",
            }}
            profileImage="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </Tabs.Content>

        <Tabs.Content value="work-history">
          <Box p={4} textAlign="center" className={colorMode}>
            <WorkHistory />
          </Box>
        </Tabs.Content>

        <Tabs.Content value="skills">
          <Box
            borderWidth="1px"
            borderRadius="md"
            borderColor={borderColor}
            className={colorMode}
          >
            <Skills />
          </Box>
        </Tabs.Content>

        <Tabs.Content value="documents">
          <Box p={4} textAlign="center">
            <Box
              p={1}
              borderWidth="1px"
              borderRadius="md"
              borderColor={borderColor}
              className={colorMode}
            >
              <Documents />
            </Box>
          </Box>
        </Tabs.Content>

        <Tabs.Content value="activity-log">
          <Box
            p={4}
            textAlign="center"
            borderColor={borderColor}
            className={colorMode}
          >
            <ActivityLog />
          </Box>
        </Tabs.Content>
      </Tabs.Root>
    </Box>
  );
};

export default UserDetails;
