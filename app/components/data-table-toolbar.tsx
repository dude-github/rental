"use client";

import { Cross2Icon } from "@radix-ui/react-icons";

import { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import { incomeType, categories } from "./data";

import { DataTableFacetedFilter } from "./data-table-faceted-filter";

// import { DataTableViewOptions } from "@/components/ui/data-table-view-options";

// import { CalendarDatePicker } from "./calendar-date-picker";

// import { useState } from "react";

import { DataTableViewOptions } from "./data-table-view-options";

import { DownloadIcon } from "lucide-react";
import { exportTableToCSV } from "@/lib/export";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  // Date Range Picker Functions
  // const [dateRange, setDateRange] = useState<{ from: Date; to: Date }>({
  //   from: new Date(new Date().getFullYear(), 0, 1),

  //   to: new Date(),
  // });

  // const handleDateSelect = ({ from, to }: { from: Date; to: Date }) => {
  //   setDateRange({ from, to });

  //   // Filter table data based on selected date range

  //   table.getColumn("date")?.setFilterValue([from, to]);
  // };

  return (
    <div className="flex flex-wrap items-center justify-between">
      <div className="flex flex-1 flex-wrap items-center gap-2">
        <Input
          placeholder="Filter labels..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) => {
            table.getColumn("name")?.setFilterValue(event.target.value);
          }}
          className="h-8 w-[150px] lg:w-[250px] bg-transparent"
        />

        {table.getColumn("category") && (
          <DataTableFacetedFilter
            column={table.getColumn("category")}
            title="Category"
            options={categories}
          />
        )}

        {table.getColumn("type") && (
          <DataTableFacetedFilter
            column={table.getColumn("type")}
            title="Type"
            options={incomeType}
          />
        )}

        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}

        {/* Calendar Date Range Picker */}
        {/* <CalendarDatePicker
          date={dateRange}
          onDateSelect={handleDateSelect}
          className="h-9 w-[250px]"
          variant="outline"
        /> */}

        <div className="px-4 ">
          <Button
            variant="outline"
            className="bg-transparent "
            size="sm"
            onClick={() =>
              exportTableToCSV(table, {
                filename: "Event-Equipments",
                excludeColumns: ["select", "actions"],
              })
            }
          >
            <DownloadIcon className="mr-2 size-4" aria-hidden="true" />
            Export
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {/* {table.getFilteredSelectedRowModel().rows.length > 0 ? (
          <Button variant="outline" size="sm" className="bg-transparent">
            <TrashIcon className="mr-2 size-4" aria-hidden="true" />
            Delete ({table.getFilteredSelectedRowModel().rows.length})
          </Button>
        ) : null} */}

        <DataTableViewOptions table={table} />
      </div>
    </div>
  );
}
