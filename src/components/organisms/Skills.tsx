import { Table } from "@chakra-ui/react";

// Sample skills data
const skills = [
  { id: 1, name: "React", category: "Frontend", proficiency: "Expert" },
  { id: 2, name: "TypeScript", category: "Languages", proficiency: "Expert" },
  { id: 3, name: "Node.js", category: "Backend", proficiency: "Advanced" },
  { id: 4, name: "GraphQL", category: "APIs", proficiency: "Intermediate" },
  { id: 5, name: "Docker", category: "DevOps", proficiency: "Advanced" },
];

const Skills = () => {
  return (
    <Table.Root size="md" striped>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>Skill</Table.ColumnHeader>
          <Table.ColumnHeader>Category</Table.ColumnHeader>
          <Table.ColumnHeader textAlign="end">Proficiency</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {skills.map((skill) => (
          <Table.Row key={skill.id}>
            <Table.Cell>{skill.name}</Table.Cell>
            <Table.Cell>{skill.category}</Table.Cell>
            <Table.Cell textAlign="end">{skill.proficiency}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default Skills;
