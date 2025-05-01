import { NativeSelect } from "@/components/atoms/NativeSelect";
import { useColorModeValue } from "@/components/molecules/color-mode";
import {
  Box,
  Button,
  HStack,
  Input,
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
import { Fragment, useEffect, useMemo, useState } from "react";
import { ChevronUp, Layers, Trash, Edit } from "react-feather";
import { motion, AnimatePresence } from "framer-motion";
import { ColumnFilter } from "./ColumnFilter";
import { ColumnSorter } from "./ColumnSorter";
import { getActivityLogsData } from "./data";
import { Clearance, FilterElementProps } from "./types";
import { Checkbox } from "@/components/atoms/Checkbox";
import { ActionConfirmation } from "./ActionConfirmation";
import { toast } from "react-toastify";
import { Tooltip } from "@/components/atoms/tooltip";
import { LuCircleHelp } from "react-icons/lu";
// Create motion components for our animations
const MotionBox = motion(Box);
const MotionTableRow = motion(Table.Row);
const MotionHStack = motion(HStack);
const MotionTag = motion(Tag.Root);

export default function ClearanceTable() {
  const [gray200, gray700, gray50, gray600] = useToken("colors", [
    "gray.200",
    "gray.700",
    "gray.50",
    "gray.600",
  ]);
  const clearanceBgColor = useColorModeValue(gray200, gray700);
  const selectedRowBgColor = useColorModeValue(gray50, gray600);
  const clearanceColor = useColorModeValue(gray700, gray200);
  const checkboxColorPalette = "red";
  const [data, setData] = useState<Clearance[]>([]);
  const [loading, setLoading] = useState(true);

  const [expandedClearances, setExpandedClearances] = useState<
    Record<string, boolean>
  >({});
  const [globalFilter, setGlobalFilter] = useState("");

  // Track if all sections are currently expanded or collapsed
  const [allExpanded, setAllExpanded] = useState(true);

  const uniqueSchedules = useMemo(
    () => Array.from(new Set(data.map((item) => item.scheduleName))),
    [data]
  );

  const uniqueElevators = useMemo(
    () =>
      Array.from(
        new Set(
          data.map((item) => item.elevatorName).filter(Boolean) as string[]
        )
      ),
    [data]
  );

  // Get unique clearance names for the expand/collapse all functionality
  const uniqueClearances = useMemo(
    () => Array.from(new Set(data.map((item) => item.clearanceName))),
    [data]
  );

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
        id: "select",
        header: ({ table }) => (
          <Checkbox
          colorPalette={checkboxColorPalette}
            checked={
              table.getIsSomePageRowsSelected()
                ? "indeterminate"
                : table.getIsAllPageRowsSelected()
            }
            onChange={table.getToggleAllPageRowsSelectedHandler()}
          />
        ),
        cell: ({ row }) => (
          <Checkbox
          colorPalette={checkboxColorPalette}
            checked={row.getIsSelected()}
            onChange={row.getToggleSelectedHandler()}
          />
        ),
      },
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
    enableRowSelection: true,
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

  // Count selected rows
  const selectedRowsCount = table.getSelectedRowModel().rows.length;

  // Action handlers
  const handleRevoke = () => {
    console.log(
      "Revoking",
      table.getSelectedRowModel().rows.map((row) => row.original)
    );
    // Implement your revoke logic here
    table.toggleAllRowsSelected(false); // Deselect rows after action
  };

  const handleAssign = () => {
    console.log(
      "Assigning",
      table.getSelectedRowModel().rows.map((row) => row.original)
    );
    // Implement your assign logic here
    table.toggleAllRowsSelected(false); // Deselect rows after action
  };

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const activityLogs = await getActivityLogsData();
        console.log(activityLogs);
        setData(activityLogs);
      } catch (error) {
        toast.error("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

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
            <Tooltip
              showArrow
              content={
                "A clearance is an access permission. Doors are entry points that require the right clearance to open."
              }
            >
              <Box display="inline-flex" ml={1} cursor="help">
                <LuCircleHelp size={16} />
              </Box>
            </Tooltip>
          </Text>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Button
              size="sm"
              variant="outline"
              onClick={toggleAllClearances}
              width={"40"}
            >
              <Layers size={16} />
              {allExpanded ? "Collapse All" : "Expand All"}
            </Button>
          </motion.div>
        </HStack>
      </motion.div>

      {/* Search and Actions Bar */}
      <HStack justifyContent="space-between" mb={4} alignItems="center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Input
            placeholder="Search..."
            value={globalFilter ?? ""}
            onChange={(e) => setGlobalFilter(e.target.value)}
            w="64"
            borderColor={clearanceColor}
          />
        </motion.div>

        {/* Bulk Actions Menu - Only visible when rows are selected */}
        <AnimatePresence>
          {selectedRowsCount > 0 && (
            <MotionHStack
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <Text fontWeight="medium">{selectedRowsCount} selected</Text>
              <ActionConfirmation
                title="Revoke Clearance"
                message="Are you sure you want to revoke the selected clearances from John Doe?"
                onConfirm={handleRevoke}
                button={
                  <Button size="sm" variant="outline">
                    <Trash size={16} />
                    Revoke
                  </Button>
                }
              />
              <ActionConfirmation
                title="Assign Clearance"
                message="Are you sure you want to assign the selected clearances to John Doe?"
                onConfirm={handleAssign}
                button={
                  <Button size="sm">
                    <Edit size={16} />
                    Assign
                  </Button>
                }
              />
            </MotionHStack>
          )}
        </AnimatePresence>
      </HStack>

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
            {table.getRowModel().rows.map((row) => {
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
                  {isNewClearance &&
                    (() => {
                      const clearanceRows = table
                        .getRowModel()
                        .rows.filter(
                          (r) =>
                            (r.original as Clearance).clearanceName ===
                            rowData.clearanceName
                        );
                      const selectedCount = clearanceRows.filter((r) =>
                        r.getIsSelected()
                      ).length;
                      const isAllSelected =
                        selectedCount === clearanceRows.length;
                      const isNoneSelected = selectedCount === 0;
                      const isIndeterminate = !isAllSelected && !isNoneSelected;

                      const toggleClearanceRows = (checked: boolean) => {
                        clearanceRows.forEach((r) => r.toggleSelected(checked));
                      };

                      return (
                        <MotionTableRow
                          bg={clearanceBgColor}
                          color={clearanceColor}
                          _hover={{ cursor: "pointer" }}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Table.Cell
                            colSpan={table.getAllLeafColumns().length}
                          >
                            <HStack justifyContent="space-between">
                              <HStack>
                                <Checkbox
                                  colorPalette={checkboxColorPalette}
                                  checked={
                                    isAllSelected
                                      ? true
                                      : isIndeterminate
                                        ? "indeterminate"
                                        : false
                                  }
                                  onCheckedChange={(e) =>
                                    toggleClearanceRows(e.checked as boolean)
                                  }
                                />
                                <Text
                                  fontWeight="bold"
                                  onClick={() =>
                                    toggleClearance(rowData.clearanceName)
                                  }
                                  display={"flex"}
                                  alignItems={"center"}
                                >
                                  {rowData.clearanceName}
                                  <Tooltip
                                    showArrow
                                    content={rowData.clearanceName}
                                  >
                                    <Box
                                      display="inline-flex"
                                      ml={1}
                                      cursor="help"
                                    >
                                      <LuCircleHelp size={16} />
                                    </Box>
                                  </Tooltip>
                                </Text>
                              </HStack>
                              <Button
                                size="xs"
                                variant="ghost"
                                onClick={() =>
                                  toggleClearance(rowData.clearanceName)
                                }
                              >
                                {isExpanded ? "Collapse" : "Expand"}
                                <ChevronUp
                                  size={16}
                                  style={{
                                    transform: isExpanded
                                      ? "rotate(180deg)"
                                      : undefined,
                                    transition: "transform 0.2s",
                                  }}
                                />
                              </Button>
                            </HStack>
                          </Table.Cell>
                        </MotionTableRow>
                      );
                    })()}

                  <AnimatePresence>
                    {isExpanded && (
                      <MotionTableRow
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        bg={
                          row.getIsSelected() ? selectedRowBgColor : undefined
                        }
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
