import { useEffect, useMemo, useState } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  SortingState,
  getFilteredRowModel,
  FilterFn,
  ColumnFiltersState,
} from "@tanstack/react-table";
import {
  Box,
  Button,
  Flex,
  Input,
  NativeSelect,
  Stack,
  Table,
  Text,
} from "@chakra-ui/react";
import { ChevronDown, ChevronUp } from "react-feather";

// Types
interface Document {
  id: number;
  title: string;
  type: string;
  dateCreated: string;
  size: number;
  author: string;
  status: string;
  department: string;
  priority: string;
}

type FilterKey = "type" | "status" | "department" | "priority";

// Sample data
const documents: Document[] = [
  {
    id: 1,
    title: "Project Proposal",
    type: "PDF",
    dateCreated: "2025-01-15",
    size: 2.4,
    author: "Sarah Johnson",
    status: "Approved",
    department: "Marketing",
    priority: "High",
  },
  {
    id: 2,
    title: "Financial Report Q1",
    type: "Excel",
    dateCreated: "2025-02-10",
    size: 4.7,
    author: "Michael Chen",
    status: "In Review",
    department: "Finance",
    priority: "Critical",
  },
  {
    id: 3,
    title: "User Research Findings",
    type: "Word",
    dateCreated: "2025-01-28",
    size: 3.2,
    author: "Jessica Kim",
    status: "Draft",
    department: "Product",
    priority: "Medium",
  },
  {
    id: 4,
    title: "System Architecture",
    type: "Visio",
    dateCreated: "2025-03-05",
    size: 5.1,
    author: "David Williams",
    status: "Approved",
    department: "Engineering",
    priority: "High",
  },
  {
    id: 5,
    title: "Employee Handbook",
    type: "PDF",
    dateCreated: "2024-11-20",
    size: 8.3,
    author: "Emily Rodriguez",
    status: "Published",
    department: "HR",
    priority: "Low",
  },
  {
    id: 6,
    title: "Sales Forecast 2025",
    type: "Excel",
    dateCreated: "2025-02-27",
    size: 1.8,
    author: "Robert Thompson",
    status: "In Review",
    department: "Sales",
    priority: "Medium",
  },
  {
    id: 7,
    title: "Brand Guidelines",
    type: "PDF",
    dateCreated: "2025-01-05",
    size: 6.4,
    author: "Sarah Johnson",
    status: "Published",
    department: "Marketing",
    priority: "Medium",
  },
  {
    id: 8,
    title: "Security Audit Report",
    type: "Word",
    dateCreated: "2025-03-12",
    size: 2.9,
    author: "James Wilson",
    status: "Confidential",
    department: "IT",
    priority: "Critical",
  },
];

// Utility Functions
const getUniqueValues = <K extends keyof Document>(
  data: Document[],
  key: K
): Document[K][] => {
  return Array.from(new Set(data.map((item) => item[key])));
};

const globalFilterFn: FilterFn<Document> = (row, _, value) => {
  const searchValue = String(value).toLowerCase();
  const title = String(row.getValue("title")).toLowerCase();
  const author = String(row.getValue("author")).toLowerCase();
  return title.includes(searchValue) || author.includes(searchValue);
};

// Component
const Documents = () => {
  // Filter states
  const [sorting, setSorting] = useState<SortingState>([
    { id: "dateCreated", desc: true },
  ]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [filterValues, setFilterValues] = useState<Record<FilterKey, string>>({
    type: "",
    status: "",
    department: "",
    priority: "",
  });

  // Cached unique values for filter dropdowns
  const filterOptions = useMemo(
    () => ({
      type: getUniqueValues(documents, "type"),
      status: getUniqueValues(documents, "status"),
      department: getUniqueValues(documents, "department"),
      priority: getUniqueValues(documents, "priority"),
    }),
    []
  );

  // Column definitions
  const columnHelper = createColumnHelper<Document>();
  const columns = useMemo(
    () => [
      columnHelper.accessor("title", {
        header: "Title",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("type", {
        header: "Type",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("dateCreated", {
        header: "Date Created",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("size", {
        header: "Size (MB)",
        cell: (info) => info.getValue().toFixed(1),
      }),
      columnHelper.accessor("author", {
        header: "Author",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("status", {
        header: "Status",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("department", {
        header: "Department",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("priority", {
        header: "Priority",
        cell: (info) => info.getValue(),
      }),
    ],
    [columnHelper]
  );

  // Update column filters when individual filters change
  useEffect(() => {
    const newColumnFilters = Object.entries(filterValues)
      .filter(([_, value]) => value !== "")
      .map(([key, value]) => ({
        id: key,
        value,
      }));

    setColumnFilters(newColumnFilters);
  }, [filterValues]);

  // Handle filter changes
  const handleFilterChange = (key: FilterKey, value: string) => {
    setFilterValues((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // Clear all filters
  const clearFilters = () => {
    setGlobalFilter("");
    setFilterValues({
      type: "",
      status: "",
      department: "",
      priority: "",
    });
    setSorting([{ id: "dateCreated", desc: true }]);
  };

  // Table instance
  const table = useReactTable({
    data: documents,
    columns,
    state: {
      sorting,
      globalFilter,
      columnFilters,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    onColumnFiltersChange: setColumnFilters,
    globalFilterFn,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    enableGlobalFilter: true,
  });

  const FilterDropdown = ({
    label,
    filterKey,
    options,
  }: {
    label: string;
    filterKey: FilterKey;
    options: string[];
  }) => (
    <NativeSelect.Root>
      <NativeSelect.Field
        placeholder={`Filter by ${label}`}
        value={filterValues[filterKey]}
        onChange={(e) => handleFilterChange(filterKey, e.currentTarget.value)}
      >
        <option value="">{`All ${label}s`}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </NativeSelect.Field>
      <NativeSelect.Indicator />
    </NativeSelect.Root>
  );

  return (
    <Box>
      <Stack gap={4} mb={4}>
        {/* Search and first row of filters */}
        <Flex direction={{ base: "column", md: "row" }} gap={4}>
          <Input
            placeholder="Search by title or author"
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
            width={{ base: "100%", md: "500px" }}
          />
          <FilterDropdown
            label="Type"
            filterKey="type"
            options={filterOptions.type}
          />
          <FilterDropdown
            label="Status"
            filterKey="status"
            options={filterOptions.status}
          />
        </Flex>

        {/* Second row of filters */}
        <Flex direction={{ base: "column", md: "row" }} gap={4}>
          <FilterDropdown
            label="Department"
            filterKey="department"
            options={filterOptions.department}
          />
          <FilterDropdown
            label="Priority"
            filterKey="priority"
            options={filterOptions.priority}
          />
          <Button onClick={clearFilters}>Clear Filters</Button>
        </Flex>
      </Stack>

      {/* Results count */}
      <Text mb={2}>
        Showing {table.getFilteredRowModel().rows.length} of {documents.length}{" "}
        documents
      </Text>

      {/* Table */}
      <Table.Root>
        <Table.Header>
          {table.getHeaderGroups().map((headerGroup) => (
            <Table.Row key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Table.ColumnHeader
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  cursor="pointer"
                >
                  <Flex alignItems="center">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {header.column.getIsSorted() && (
                      <Box ml={1}>
                        {header.column.getIsSorted() === "asc" ? (
                          <ChevronUp size={16} />
                        ) : (
                          <ChevronDown size={16} />
                        )}
                      </Box>
                    )}
                  </Flex>
                </Table.ColumnHeader>
              ))}
            </Table.Row>
          ))}
        </Table.Header>
        <Table.Body>
          {table.getRowModel().rows.length > 0 ? (
            table.getRowModel().rows.map((row) => (
              <Table.Row key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <Table.Cell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Table.Cell>
                ))}
              </Table.Row>
            ))
          ) : (
            <Table.Row>
              <Table.Cell colSpan={columns.length} textAlign="center" py={4}>
                No documents found matching your filters
              </Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table.Root>
    </Box>
  );
};

export default Documents;
