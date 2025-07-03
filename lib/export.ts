import { toast } from "@/hooks/use-toast";
import { type Table } from "@tanstack/react-table";

export function exportTableToCSV<TData>(
  /**
   * The table to export.
   * @type Table<TData>
   */
  table: Table<TData>,
  opts: {
    /**
     * The filename for the CSV file.
     * @default "table"
     * @example "tasks"
     */
    filename?: string;
    /**
     * The columns to exclude from the CSV file.
     * @default []
     * @example ["select", "actions"]
     */
    excludeColumns?: (keyof TData | "select" | "actions")[];

    /**
     * Whether to export only the selected rows.
     * @default false
     */
    onlySelected?: boolean;
  } = {}
): void {
  const { filename = "table", excludeColumns = [], onlySelected = true } = opts;

  // Retrieve headers (column names)
  const headers = table
    .getAllLeafColumns()
    .map((column) => column.id)
    .filter((id) => !excludeColumns.includes(id));

  // Check if onlySelected is true and there are no selected rows
  const selectedRows = onlySelected
    ? table.getFilteredSelectedRowModel().rows
    : table.getRowModel().rows;

  if (selectedRows.length === 0) {
    toast({
      title: "No rows selected for export. Please select at least one row.",
    });
    // console.error(
    //   "No rows selected for export. Please select at least one row."
    // );
    return; // Exit the function if no rows are selected
  }

  // Check for missing cell values
  for (const row of selectedRows) {
    for (const header of headers) {
      const cellValue = row.getValue(header);
      if (cellValue === null || cellValue === undefined) {
        toast({
          title: `Missing value in row ${row.id} for column "${header}". Export aborted.`,
        });
        console.error(
          `Missing value in row ${row.id} for column "${header}". Export aborted.`
        );
        return; // Exit the function if any cell value is missing
      }
    }
  }

  // Build CSV content
  const csvContent = [
    headers.join(","),
    ...(onlySelected
      ? table.getFilteredSelectedRowModel().rows
      : table.getRowModel().rows
    ).map((row) =>
      headers
        .map((header) => {
          const cellValue = row.getValue(header);
          // Handle values that might contain commas or newlines
          return typeof cellValue === "string"
            ? `"${cellValue.replace(/"/g, '""')}"`
            : cellValue;
        })
        .join(",")
    ),
  ].join("\n");

  // Create a Blob with CSV content
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });

  // Create a link and trigger the download
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", `${filename}.csv`);
  link.style.visibility = "hidden";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
