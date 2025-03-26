import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
} from "@tanstack/react-table";
import { Fragment, useMemo, useState } from "react";
import { Activity, FilterElementProps } from "./types";
import {
  HStack,
  Button,
  IconButton,
  Box,
  Table,
  Textarea,
} from "@chakra-ui/react";
import { ChevronDown, ChevronRight } from "react-feather";
import { Checkbox } from "@/components/atoms/Checkbox";
import { ACTIVITIES_DATA } from "./data";
import { ColumnFilter } from "./ColumnFilter";
import { ColumnSorter } from "./ColumnSorter";
import { NativeSelect } from "@/components/atoms/NativeSelect";

const uniqueLocations = [
  ...new Set(ACTIVITIES_DATA.map((item) => item.location)),
];

const uniqueCategories = [
  ...new Set(ACTIVITIES_DATA.map((item) => item.category)),
];

const ActivityLog = () => {
  const [data, setData] = useState(ACTIVITIES_DATA);

  const deleteSelectedItems = (ids: string[]) => {
    setData((prevData) => prevData.filter((item) => !ids.includes(item.id)));
  };

  const columns = useMemo<ColumnDef<Activity>[]>(
    () => [
      {
        id: "selection",
        accessorKey: "id",
        enableSorting: false,
        enableColumnFilter: false,
        header: function render({ table }) {
          return (
            <HStack>
              <Checkbox
                checked={
                  !table.getIsAllRowsSelected() && table.getIsSomeRowsSelected()
                    ? "indeterminate"
                    : table.getIsAllRowsSelected()
                }
                onChange={table.getToggleAllRowsSelectedHandler()}
              />

              {(table.getIsSomeRowsSelected() === true ||
                table.getIsAllRowsSelected() === true) && (
                <Button
                  size="xs"
                  color="red"
                  variant="outline"
                  onClick={() =>
                    deleteSelectedItems(
                      table
                        .getSelectedRowModel()
                        .flatRows.map(({ original }) => original.id)
                    )
                  }
                >
                  Delete
                </Button>
              )}
            </HStack>
          );
        },
        cell: function render({ row }) {
          return (
            <HStack gap="3">
              <Checkbox
                checked={
                  row.getIsSomeSelected()
                    ? "indeterminate"
                    : row.getIsSelected()
                }
                onChange={row.getToggleSelectedHandler()}
                cursor="pointer"
                // onClick={(e) => {console.log(row.getIsSelected())}}
                // onClick={row.getToggleSelectedHandler()}
              />
              <IconButton
                aria-label="Collapse/Expand"
                size="xs"
                onClick={() => row.toggleExpanded()}
                variant="plain"
              >
                {row.getIsExpanded() ? (
                  <ChevronDown size={14} />
                ) : (
                  <ChevronRight size={14} />
                )}
              </IconButton>
            </HStack>
          );
        },
      },
      // {
      //   id: "id",
      //   header: "ID",
      //   accessorKey: "id",
      //   enableColumnFilter: false,
      // },
      {
        id: "date",
        header: "Date",
        accessorKey: "date",
        cell: function render({ getValue }) {
          return new Date(getValue() as string).toLocaleString();
        },
        enableColumnFilter: false,
      },
      {
        id: "activity",
        header: "Activity",
        accessorKey: "activity",
        meta: {
          filterOperator: "contains",
        },
      },
      {
        id: "location",
        header: "Location",
        accessorKey: "location",
        meta: {
          filterOperator: "eq",
          filterElement: function render(props: FilterElementProps) {
            return (
              <NativeSelect
                placeholder="All Locations"
                items={uniqueLocations.map((loc) => ({
                  label: loc,
                  value: loc,
                }))}
                {...props}
              ></NativeSelect>
            );
          },
        },
      },
      {
        id: "duration",
        header: "Duration (hours)",
        accessorKey: "duration",
        enableColumnFilter: false,
      },
      {
        id: "category",
        header: "Category",
        accessorKey: "category",
        meta: {
          filterOperator: "eq",
          filterElement: function render(props: FilterElementProps) {
            return (
              <NativeSelect
                placeholder="All Categories"
                items={uniqueCategories.map((loc) => ({
                  label: loc,
                  value: loc,
                }))}
                {...props}
              ></NativeSelect>
            );
          },
        },
      },
      {
        id: "details",
        header: "Details",
        accessorKey: "details",
        meta: {
          filterOperator: "contains",
        },
      },
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    initialState: {
      sorting: [
        {
          id: "id",
          desc: false,
        },
      ],
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getRowId: (row) => row.id,
    enableRowSelection: true,
  });

  return (
    <Box overflowX="auto">
      <Table.Root>
        <Table.Header>
          {table.getHeaderGroups().map((headerGroup) => (
            <Table.Row key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Table.ColumnHeader key={header.id}>
                  {!header.isPlaceholder && (
                    <HStack gap="2">
                      <Box>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </Box>
                      <HStack gap="2">
                        <ColumnSorter column={header.column} />
                        <ColumnFilter column={header.column} />
                      </HStack>
                    </HStack>
                  )}
                </Table.ColumnHeader>
              ))}
            </Table.Row>
          ))}
        </Table.Header>
        <Table.Body>
          {table.getRowModel().rows.map((row) => {
            return (
              <Fragment key={row.id}>
                <Table.Row>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <Table.Cell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </Table.Cell>
                    );
                  })}
                </Table.Row>

                {row.getIsExpanded() && (
                  <Table.Row>
                    <Table.Cell colSpan={row.getVisibleCells().length}>
                      <Textarea readOnly value={row.original.notes} />
                    </Table.Cell>
                  </Table.Row>
                )}
              </Fragment>
            );
          })}
        </Table.Body>
      </Table.Root>
    </Box>
  );
};

export default ActivityLog;
