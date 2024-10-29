import { Metadata } from "next";
import fs from "fs";
import path from "path";
import { DataTable } from "@/app/components/data-table";
import { columns } from "@/app/components/columns";

export const metadata: Metadata = {
  title: "Expenses",
  description: "A Expense tracker build using Tanstack Table.",
};

async function getData() {
  const filePath = path.join(process.cwd(), "app/components", "data.json");
  const data = fs.readFileSync(filePath, "utf8");
  return JSON.parse(data);
}

const Table = async () => {
  const data = await getData();
  console.log("data", data);

  return (
    <section className="flex size-full flex-col gap-10 ">
      <h1 className="text-3xl font-bold">Lights</h1>
      <div className="h-full flex-1 flex-col space-y-2 p-8 md:flex  ">
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground">
            Here&apos;s a list of your expenses for this month!
          </p>
        </div>
        <DataTable data={data} columns={columns} />
      </div>
    </section>
  );
};
export default Table;
