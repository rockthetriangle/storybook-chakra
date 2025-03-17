import { Badge, Box, Flex, Table, Text, VStack } from "@chakra-ui/react";
import { LuCalendar, LuMapPin } from "react-icons/lu";
import { useColorModeValue } from "../molecules/color-mode";

interface WorkExperience {
  id: number;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  responsibilities: string[];
  skills: string[];
}

const workHistory: WorkExperience[] = [
  {
    id: 1,
    company: "TechCorp Solutions",
    position: "Senior Software Engineer",
    location: "San Francisco, CA",
    startDate: "Jan 2021",
    endDate: "",
    isCurrent: true,
    responsibilities: [
      "Lead development of cloud-based enterprise solutions",
      "Manage team of 5 junior developers",
      "Implement CI/CD pipelines for automated testing",
      "Collaborate with product managers",
    ],
    skills: [
      "React",
      "TypeScript",
      "Node.js",
      "AWS",
      "CI/CD",
      "Team Leadership",
    ],
  },
  {
    id: 2,
    company: "InnovateSoft Inc.",
    position: "Software Developer",
    location: "Portland, OR",
    startDate: "Mar 2018",
    endDate: "Dec 2020",
    isCurrent: false,
    responsibilities: [
      "Developed front-end components using React",
      "Built RESTful APIs with Node.js",
      "Improved application performance by 40%",
      "Participated in Agile development",
    ],
    skills: ["React", "Redux", "JavaScript", "Node.js", "Express", "MongoDB"],
  },
  {
    id: 3,
    company: "StartupTech",
    position: "Junior Developer",
    location: "Seattle, WA",
    startDate: "Jun 2016",
    endDate: "Feb 2018",
    isCurrent: false,
    responsibilities: [
      "Built responsive web applications",
      "Fixed bugs and implemented new features",
      "Created automated tests using Jest",
      "Participated in code reviews",
    ],
    skills: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "Jest"],
  },
];

const WorkHistory = () => {
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      borderColor={borderColor}
      overflow="hidden"
    >
      <Table.Root size="md" striped>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Position & Company</Table.ColumnHeader>
            <Table.ColumnHeader>Duration</Table.ColumnHeader>
            <Table.ColumnHeader>Location</Table.ColumnHeader>
            <Table.ColumnHeader>Key Responsibilities</Table.ColumnHeader>
            <Table.ColumnHeader>Skills</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {workHistory.map((job) => (
            <Table.Row
              key={job.id}
              bg="white"
              color="gray.700"
              _dark={{
                bg: "gray.800",
                color: "gray.50",
              }}
            >
              <Table.Cell>
                <VStack align="start" gap={1}>
                  <Text fontWeight="medium">{job.position}</Text>
                  <Text color="blue.500" _dark={{color:"blue.300"}} fontSize="sm">
                    {job.company}
                  </Text>
                  {job.isCurrent && (
                    <Badge
                      bg="green.100"
                      color="green.800"
                      _dark={{ bg: "green.900", color: "green.200" }}
                      fontSize="xs"
                      px={2}
                      py={0.5}
                      borderRadius="full"
                    >
                      Current
                    </Badge>
                  )}
                </VStack>
              </Table.Cell>
              <Table.Cell>
                <Flex align="center">
                  <LuCalendar size={14} style={{ marginRight: "6px" }} />
                  <Text fontSize="sm">
                    {job.startDate} - {job.isCurrent ? "Present" : job.endDate}
                  </Text>
                </Flex>
              </Table.Cell>
              <Table.Cell>
                <Flex align="center">
                  <LuMapPin size={14} style={{ marginRight: "6px" }} />
                  <Text fontSize="sm">{job.location}</Text>
                </Flex>
              </Table.Cell>
              <Table.Cell>
                <VStack align="start" gap={1}>
                  {job.responsibilities.map((resp, idx) => (
                    <Text key={idx} fontSize="sm">
                      • {resp}
                    </Text>
                  ))}
                </VStack>
              </Table.Cell>
              <Table.Cell>
                <Flex flexWrap="wrap" gap={1}>
                  {job.skills.map((skill, idx) => (
                    <Badge
                      key={idx}
                      bg="blue.50"
                      color="blue.600"
                      _dark={{ bg: "blue.900", color: "blue.300" }}
                      fontSize="xs" 
                      px={2}
                      py={0.5}
                      borderRadius="md"
                    >
                      {skill}
                    </Badge>
                  ))}
                </Flex>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
};

export default WorkHistory;
