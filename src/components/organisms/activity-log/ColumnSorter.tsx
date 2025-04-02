import { IconButton } from "@chakra-ui/react";
// import {
//   IconChevronDown,
//   IconSelector,
//   IconChevronUp,
// } from "@tabler/icons-react";

import { ColumnButtonProps } from "./types";
import type { SortDirection } from "@tanstack/react-table";
import { TbChevronDown, TbChevronUp, TbSelector } from "react-icons/tb";

export const ColumnSorter: React.FC<ColumnButtonProps> = ({ column }) => {
  if (!column.getCanSort()) {
    return null;
  }

  const sorted = column.getIsSorted();

  return (
    <IconButton
      aria-label="Sort"
      size="xs"
      onClick={column.getToggleSortingHandler()}
      variant={"ghost"}
    >
      <ColumnSorterIcon sorted={sorted} />
    </IconButton>
  );
};

const ColumnSorterIcon = ({ sorted }: { sorted: false | SortDirection }) => {
  if (sorted === "asc") return <TbChevronDown size={18} />;
  if (sorted === "desc") return <TbChevronUp size={18} />;
  return <TbSelector size={18} />;
};
