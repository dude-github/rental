"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Expense } from "./schema";

import { DataTableColumnHeader } from "./data-table-column-header";

// import { DataTableRowActions } from "./data-table-row-actions";

import { TrendingUp, TrendingDown } from "lucide-react";

// import { cn } from "@/lib/utils";

import { Checkbox } from "@/components/ui/checkbox";
import EditCell from "@/components/EditCell";
// import EditableCell from "@/components/EditableCell";

export const columns: ColumnDef<Expense>[] = [
  // ! Select
  {
    id: "select",

    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-0.5"
      />
    ),

    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-0.5"
      />
    ),

    enableSorting: false,

    enableHiding: false,
  },

  // ! Label
  {
    accessorKey: "label",

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Label" />
    ),

    cell: ({ row }) => (
      <div className="w-[150px] capitalize">{row.getValue("label")}</div>
    ),

    enableSorting: false,

    enableHiding: false,
  },

  // ! Name
  {
    accessorKey: "name",

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),

    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium capitalize">
            {row.getValue("name")}
          </span>
        </div>
      );
    },
  },

  // ! Category
  {
    accessorKey: "category",

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Category" />
    ),

    cell: ({ row }) => {
      return (
        <div className="flex w-[100px] items-center">
          <span className="capitalize"> {row.getValue("category")}</span>
        </div>
      );
    },

    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },

  // !Type
  {
    accessorKey: "type",

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Type" />
    ),

    cell: ({ row }) => {
      const type = row.getValue("type");

      return (
        <div className="flex w-[100px] items-center">
          {type === "income" ? (
            <TrendingUp
              // size={20}
              className="mr-2 text-green-500"
              height={1}
              width={1}
            />
          ) : (
            <TrendingDown
              // size={20}
              className="mr-2 text-red-500"
              height={1}
              width={1}
            />
          )}

          <span className="capitalize"> {row.getValue("type")}</span>
        </div>
      );
    },

    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },

  // ! Amount
  {
    accessorKey: "amount",

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Quantity" />
    ),

    cell: EditCell,

    // ! Amount Old Code Fetching amount from static Data
    // ({ row }) => {
    //   const type = row.getValue("type");

    //   return (
    //     <div className="flex w-[100px] items-center">
    //       <span
    //         className={cn(
    //           "capitalize",

    //           type === "income" ? "text-green-500" : "text-red-500"
    //         )}
    //       >
    //         {" "}
    //         {row.getValue("amount")}
    //       </span>
    //     </div>
    //   );
    // },
    // ! Amount Filtering Function
    // filterFn: (row, id, value) => {
    //   return value.includes(row.getValue(id));
    // },
  },

  // ! Date Range Picker

  // {
  //   accessorKey: "date",

  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Date" />
  //   ),

  //   cell: ({ row }) => {
  //     const date = new Date(row.getValue("date"));

  //     const formattedDate = date.toLocaleDateString("en-US", {
  //       day: "2-digit",

  //       month: "short",

  //       year: "numeric",
  //     });

  //     return (
  //       <div className="flex w-[100px] items-center">
  //         <span className="capitalize">{formattedDate}</span>
  //       </div>
  //     );
  //   },

  //   filterFn: (row, id, value) => {
  //     const rowDate = new Date(row.getValue(id));

  //     const [startDate, endDate] = value;

  //     return rowDate >= startDate && rowDate <= endDate;
  //   },
  // },

  // ! Date Picker
  // {
  //   accessorKey: "date",

  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Date" />
  //   ),

  //   cell: ({ row }) => {
  //     const date = new Date(row.getValue("date"));

  //     const formattedDate = date.toLocaleDateString("en-US", {
  //       day: "2-digit",

  //       month: "short",

  //       year: "numeric",
  //     });

  //     return (
  //       <div className="flex w-[100px] items-center">
  //         <span className="capitalize">{formattedDate}</span>
  //       </div>
  //     );
  //   },

  //   filterFn: (row, id, value) => {
  //     const rowDate = new Date(row.getValue(id));

  //     const [startDate, endDate] = value;

  //     return rowDate >= startDate && rowDate <= endDate;
  //   },
  // },

  // ! Actions
  // {
  //   id: "actions",

  //   cell: ({ row }) => <DataTableRowActions row={row} />,
  // },
];
