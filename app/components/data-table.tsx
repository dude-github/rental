// "use client";

// import * as React from "react";

// // export feature

// import {
//   ColumnDef,
//   ColumnFiltersState,
//   SortingState,
//   VisibilityState,
//   flexRender,
//   getCoreRowModel,
//   getFacetedRowModel,
//   getFacetedUniqueValues,
//   getFilteredRowModel,
//   getPaginationRowModel,
//   getSortedRowModel,
//   useReactTable,
// } from "@tanstack/react-table";

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";

// import { DataTablePagination } from "./data-table-pagination";

// import { DataTableToolbar } from "./data-table-toolbar";

// interface DataTableProps<TData, TValue> {
//   columns: ColumnDef<TData, TValue>[];

//   data: TData[];
// }

// export function DataTable<TData, TValue>({
//   columns,

//   data,
// }: DataTableProps<TData, TValue>) {
//   // const [info, setInfo] = React.useState();
//   const [rowSelection, setRowSelection] = React.useState({});

//   const [columnVisibility, setColumnVisibility] =
//     React.useState<VisibilityState>({});

//   const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
//     []
//   );

//   const [sorting, setSorting] = React.useState<SortingState>([]);

//   const [dataL, setDataL] = React.useState(data);

//   const table = useReactTable({
//     data,

//     columns,
//     meta: {
//       updateData: (rowIndex, columnId, value) =>
//         setDataL((prev) =>
//           prev.map((row, index) =>
//             index === rowIndex
//               ? {
//                   ...prev[rowIndex],
//                   [columnId]: value,
//                 }
//               : row
//           )
//         ),
//     },

//     state: {
//       sorting,

//       columnVisibility,

//       rowSelection,

//       columnFilters,
//     },

//     enableRowSelection: true,

//     onRowSelectionChange: setRowSelection,

//     onSortingChange: setSorting,

//     onColumnFiltersChange: setColumnFilters,

//     onColumnVisibilityChange: setColumnVisibility,

//     getCoreRowModel: getCoreRowModel(),

//     getFilteredRowModel: getFilteredRowModel(),

//     getPaginationRowModel: getPaginationRowModel(),

//     getSortedRowModel: getSortedRowModel(),

//     getFacetedRowModel: getFacetedRowModel(),

//     getFacetedUniqueValues: getFacetedUniqueValues(),
//   });

//   console.log(dataL);

//   return (
//     <div className="space-y-4">
//       <DataTableToolbar table={table} />

//       <div className="overflow-y-auto rounded-md border">
//         <Table>
//           <TableHeader>
//             {table.getHeaderGroups().map((headerGroup) => (
//               <TableRow key={headerGroup.id}>
//                 {headerGroup.headers.map((header) => (
//                   <TableHead
//                     className="px-4 py-2"
//                     key={header.id}
//                     colSpan={header.colSpan}
//                   >
//                     {header.isPlaceholder
//                       ? null
//                       : flexRender(
//                           header.column.columnDef.header,

//                           header.getContext()
//                         )}
//                   </TableHead>
//                 ))}
//               </TableRow>
//             ))}
//           </TableHeader>

//           <TableBody>
//             {table.getRowModel().rows?.length ? (
//               table.getRowModel().rows.map((row) => (
//                 <TableRow
//                   key={row.id}
//                   data-state={row.getIsSelected() && "selected"}
//                 >
//                   {row.getVisibleCells().map((cell) => (
//                     <TableCell className="px-4 py-2" key={cell.id}>
//                       {flexRender(
//                         cell.column.columnDef.cell,

//                         cell.getContext()
//                       )}
//                     </TableCell>
//                   ))}
//                 </TableRow>
//               ))
//             ) : (
//               <TableRow>
//                 <TableCell
//                   colSpan={columns.length}
//                   className="h-24 text-center"
//                 >
//                   No results.
//                 </TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </div>

//       <DataTablePagination table={table} />
//     </div>
//   );
// }

// ! Chat GPT Code

// "use client";

// import * as React from "react";

// import {
//   ColumnDef,
//   ColumnFiltersState,
//   SortingState,
//   VisibilityState,
//   flexRender,
//   getCoreRowModel,
//   getFacetedRowModel,
//   getFacetedUniqueValues,
//   getFilteredRowModel,
//   getPaginationRowModel,
//   getSortedRowModel,
//   useReactTable,
// } from "@tanstack/react-table";

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";

// import { DataTablePagination } from "./data-table-pagination";
// import { DataTableToolbar } from "./data-table-toolbar";

// interface DataTableProps<TData, TValue> {
//   columns: ColumnDef<TData, TValue>[];
//   data: TData[];
// }

// export function DataTable<TData, TValue>({
//   columns,
//   data,
// }: DataTableProps<TData, TValue>) {
//   const [rowSelection, setRowSelection] = React.useState({});
//   const [columnVisibility, setColumnVisibility] =
//     React.useState<VisibilityState>({});
//   const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
//     []
//   );
//   const [sorting, setSorting] = React.useState<SortingState>([]);

//   // 🟢 Here's the state holding the latest edited data
//   const [dataL, setDataL] = React.useState<TData[]>(data);

//   // 🟢 Keep dataL in sync with prop changes
//   React.useEffect(() => {
//     setDataL(data);
//   }, [data]);

//   // 🟢 Setup the table instance
//   const table = useReactTable({
//     data: dataL,
//     columns,
//     meta: {
//       updateData: (rowIndex: number, columnId: string, value: unknown) =>
//         setDataL((old) =>
//           old.map((row, index) =>
//             index === rowIndex
//               ? {
//                   ...old[rowIndex],
//                   [columnId]: value,
//                 }
//               : row
//           )
//         ),
//     },
//     state: {
//       sorting,
//       columnVisibility,
//       rowSelection,
//       columnFilters,
//     },
//     enableRowSelection: true,
//     onRowSelectionChange: setRowSelection,
//     onSortingChange: setSorting,
//     onColumnFiltersChange: setColumnFilters,
//     onColumnVisibilityChange: setColumnVisibility,
//     getCoreRowModel: getCoreRowModel(),
//     getFilteredRowModel: getFilteredRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     getSortedRowModel: getSortedRowModel(),
//     getFacetedRowModel: getFacetedRowModel(),
//     getFacetedUniqueValues: getFacetedUniqueValues(),
//   });

//   return (
//     <div className="space-y-4">
//       <DataTableToolbar table={table} />

//       <div className="overflow-y-auto rounded-md border">
//         <Table>
//           <TableHeader>
//             {table.getHeaderGroups().map((headerGroup) => (
//               <TableRow key={headerGroup.id}>
//                 {headerGroup.headers.map((header) => (
//                   <TableHead
//                     className="px-4 py-2"
//                     key={header.id}
//                     colSpan={header.colSpan}
//                   >
//                     {header.isPlaceholder
//                       ? null
//                       : flexRender(
//                           header.column.columnDef.header,
//                           header.getContext()
//                         )}
//                   </TableHead>
//                 ))}
//               </TableRow>
//             ))}
//           </TableHeader>

//           <TableBody>
//             {table.getRowModel().rows.length ? (
//               table.getRowModel().rows.map((row) => (
//                 <TableRow
//                   key={row.id}
//                   data-state={row.getIsSelected() && "selected"}
//                 >
//                   {row.getVisibleCells().map((cell) => (
//                     <TableCell className="px-4 py-2" key={cell.id}>
//                       {flexRender(
//                         cell.column.columnDef.cell,
//                         cell.getContext()
//                       )}
//                     </TableCell>
//                   ))}
//                 </TableRow>
//               ))
//             ) : (
//               <TableRow>
//                 <TableCell
//                   colSpan={columns.length}
//                   className="h-24 text-center"
//                 >
//                   No results.
//                 </TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </div>

//       <DataTablePagination table={table} />
//     </div>
//   );
// }

/// ! Chat Gpt Latest

"use client";

import * as React from "react";

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { DataTablePagination } from "./data-table-pagination";
import { DataTableToolbar } from "./data-table-toolbar";

// 👇 You can move this out to a utils file if you want
const LOCAL_STORAGE_KEY = "dataTable_saved_data";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData extends object, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const [dataL, setDataL] = React.useState<TData[]>(data);

  // ✅ On mount, try to load from localStorage
  React.useEffect(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        setDataL(JSON.parse(saved));
      } else {
        setDataL(data);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
      }
    } catch (err) {
      console.error("Failed to load saved data:", err);
      setDataL(data);
    }
  }, [data]);

  // ✅ Whenever dataL changes, save to localStorage
  React.useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dataL));
    } catch (err) {
      console.error("Failed to save data:", err);
    }
  }, [dataL]);

  // ✅ Setup table
  const table = useReactTable({
    data: dataL,
    columns,
    meta: {
      updateData: (rowIndex: number, columnId: string, value: unknown) =>
        setDataL((old) =>
          old.map((row, index) =>
            index === rowIndex
              ? {
                  ...old[rowIndex],
                  [columnId]: value,
                }
              : row
          )
        ),
    },
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  return (
    <div className="space-y-4">
      <DataTableToolbar table={table} />

      <div className="overflow-y-auto rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead
                    className="px-4 py-2"
                    key={header.id}
                    colSpan={header.colSpan}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell className="px-4 py-2" key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <DataTablePagination table={table} />
    </div>
  );
}
