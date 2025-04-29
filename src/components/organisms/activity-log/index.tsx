import { NativeSelect } from "@/components/atoms/NativeSelect";
import { useColorModeValue } from "@/components/molecules/color-mode";
import {
  Box,
  Button,
  Separator as Divider,
  HStack,
  Input,
  Menu,
  Portal,
  Table,
  Tag,
  Text,
  useToken,
} from "@chakra-ui/react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Fragment, useMemo, useState } from "react";
import { ChevronUp, MoreVertical, Layers } from "react-feather";
import { motion, AnimatePresence } from "framer-motion";
import { ColumnFilter } from "./ColumnFilter";
import { ColumnSorter } from "./ColumnSorter";
import { CLEARANCE_DATA } from "./data";
import { Clearance, FilterElementProps } from "./types";

// Create motion components for our animations
const MotionBox = motion(Box);
const MotionTableRow = motion(Table.Row);
const MotionDivider = motion(Divider);
const MotionHStack = motion(HStack);
const MotionTag = motion(Tag.Root);

const uniqueSchedules = [
  ...new Set(CLEARANCE_DATA.map((item) => item.scheduleName)),
];

const uniqueElevators = [
  ...new Set(
    CLEARANCE_DATA.map((item) => item.elevatorName).filter(Boolean) as string[]
  ),
];

// Get unique clearance names for the expand/collapse all functionality
const uniqueClearances = [
  ...new Set(CLEARANCE_DATA.map((item) => item.clearanceName)),
];

export default function ClearanceTable() {
  const [gray200, gray700] = useToken("colors", ["gray.200", "gray.700"]);
  const clearanceBgColor = useColorModeValue(gray200, gray700);
  const clearanceColor = useColorModeValue(gray700, gray200);

  const data = useMemo(() => CLEARANCE_DATA, []);

  const [expandedClearances, setExpandedClearances] = useState<
    Record<string, boolean>
  >({});
  const [globalFilter, setGlobalFilter] = useState("");

  // Track if all sections are currently expanded or collapsed
  const [allExpanded, setAllExpanded] = useState(true);

  const toggleClearance = (clearanceName: string) => {
    setExpandedClearances((prev) => ({
      ...prev,
      [clearanceName]: !prev[clearanceName],
    }));
  };

  // Function to toggle all clearances at once
  const toggleAllClearances = () => {
    const newExpandedState = !allExpanded;
    const updatedExpandedClearances: Record<string, boolean> = {};

    uniqueClearances.forEach((clearanceName) => {
      updatedExpandedClearances[clearanceName] = newExpandedState;
    });

    setExpandedClearances(updatedExpandedClearances);
    setAllExpanded(newExpandedState);
  };

  const columns = useMemo<ColumnDef<Clearance>[]>(
    () => [
      {
        accessorKey: "doorName",
        header: ({ column }) => (
          <HStack>
            <span>Door Name</span>
            <ColumnFilter column={column} />
          </HStack>
        ),
        meta: {
          filterOperator: "contains",
        },
      },
      {
        accessorKey: "elevatorName",
        meta: {
          filterOperator: "eq",
          filterElement: function render(props: FilterElementProps) {
            return (
              <NativeSelect
                placeholder="All Elevators"
                items={uniqueElevators.map((elevator) => ({
                  label: elevator,
                  value: elevator,
                }))}
                {...props}
              ></NativeSelect>
            );
          },
        },
        header: ({ column }) => (
          <HStack>
            <span>Elevator Name</span>
            <ColumnSorter column={column} />
            <ColumnFilter column={column} />
          </HStack>
        ),
      },
      {
        accessorKey: "scheduleName",
        meta: {
          filterOperator: "eq",
          filterElement: function render(props: FilterElementProps) {
            return (
              <NativeSelect
                placeholder="All Schedules"
                items={uniqueSchedules.map((sch) => ({
                  label: sch,
                  value: sch,
                }))}
                {...props}
              ></NativeSelect>
            );
          },
        },
        header: ({ column }) => (
          <HStack>
            <span>Schedule Name</span>
            <ColumnSorter column={column} />
            <ColumnFilter column={column} />
          </HStack>
        ),
      },
      {
        header: "Actions",
        cell: () => {
          return (
            <Menu.Root>
              <Menu.Trigger asChild>
                <Button variant="outline" size="sm">
                  <MoreVertical size={16} />
                </Button>
              </Menu.Trigger>
              <Portal>
                <Menu.Positioner>
                  <Menu.Content>
                    <Menu.Item value="revoke">Revoke</Menu.Item>
                    <Menu.Item value="assign">Assign</Menu.Item>
                  </Menu.Content>
                </Menu.Positioner>
              </Portal>
            </Menu.Root>
          );
        },
      },
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  let lastClearanceName = "";

  // Extract applied filters
  const appliedFilters = table.getState().columnFilters;

  // Function to remove a specific filter
  const removeFilter = (filterId: string) => {
    table.setColumnFilters((prev) => prev.filter((f) => f.id !== filterId));
  };

  // Function to clear all filters
  const clearFilters = () => {
    table.setColumnFilters([]);
  };

  return (
    <MotionBox
      overflowX="auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HStack justifyContent="space-between" mb={4}>
          <Text fontSize="2xl" fontWeight="bold">
            Doors by Clearance
          </Text>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Button size="sm" variant="outline" onClick={toggleAllClearances} width={"40"}>
              <Layers size={16} />
              {allExpanded ? "Collapse All" : "Expand All"}
            </Button>
          </motion.div>
        </HStack>
      </motion.div>

      {/* Global Filter */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Input
          placeholder="Search..."
          value={globalFilter ?? ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
          mb={4}
          maxW="300px"
          borderColor={clearanceColor}
        />
      </motion.div>

      {appliedFilters.length > 0 && (
        <MotionHStack
          gap={2}
          mb={4}
          flexWrap="wrap"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Text fontWeight="bold">Applied Filters:</Text>
          <AnimatePresence>
            {appliedFilters.map(({ id, value }, index) => (
              <MotionTag
                key={id}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
              >
                <Tag.Label>
                  {id}: {value as string}
                </Tag.Label>
                <Tag.EndElement>
                  <Tag.CloseTrigger onClick={() => removeFilter(id)} />
                </Tag.EndElement>
              </MotionTag>
            ))}
          </AnimatePresence>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="xs"
              variant="outline"
              colorScheme="red"
              onClick={clearFilters}
            >
              Clear All
            </Button>
          </motion.div>
        </MotionHStack>
      )}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Table.Root variant="line">
          <Table.Header>
            <Table.Row>
              {table.getHeaderGroups()[0].headers.map((header) => (
                <Table.ColumnHeader key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </Table.ColumnHeader>
              ))}
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {table.getRowModel().rows.map((row, rowIndex) => {
              const rowData = row.original as Clearance;
              const isNewClearance =
                rowData.clearanceName !== lastClearanceName;
              lastClearanceName = rowData.clearanceName;

              // Check if this clearance has a specific expanded state, otherwise use the default (all expanded)
              const isExpanded =
                expandedClearances[rowData.clearanceName] !== undefined
                  ? expandedClearances[rowData.clearanceName]
                  : allExpanded;

              return (
                <Fragment key={row.id}>
                  {isNewClearance && (
                    <>
                      <MotionTableRow
                        bg={clearanceBgColor}
                        color={clearanceColor}
                        _hover={{ cursor: "pointer" }}
                        onClick={() => toggleClearance(rowData.clearanceName)}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: rowIndex * 0.03 }}
                        whileHover={{
                          backgroundColor: useColorModeValue(
                            "gray.300",
                            "gray.600"
                          ),
                        }}
                      >
                        <Table.Cell colSpan={4} p={4}>
                          <Text
                            fontSize="lg"
                            fontWeight="bold"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "8px",
                            }}
                          >
                            {rowData.clearanceName}{" "}
                            <motion.div
                              animate={{ rotate: isExpanded ? 0 : 180 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChevronUp />
                            </motion.div>
                          </Text>
                        </Table.Cell>
                      </MotionTableRow>
                      <MotionDivider
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </>
                  )}
                  <AnimatePresence>
                    {isExpanded && (
                      <MotionTableRow
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {row.getVisibleCells().map((cell) => (
                          <Table.Cell key={cell.id}>
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </Table.Cell>
                        ))}
                      </MotionTableRow>
                    )}
                  </AnimatePresence>
                </Fragment>
              );
            })}
          </Table.Body>
        </Table.Root>
      </motion.div>
    </MotionBox>
  );
}
