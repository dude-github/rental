import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";

interface EditableCellProps {
  row: string;
  column: string;
  table: string;
  getValue: () => string;
}

const EditableCell = ({ getValue, row, column, table }: EditableCellProps) => {
  const initialValue = getValue();
  const [value, setValue] = useState(initialValue);

  // const onBlur = () => {
  //   table.options.meta?.updateData(row.index, column.id, value);
  // };

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="0"
      className="w-50 cursor-pointer bg-transparent"
    />
  );
};

export default EditableCell;
