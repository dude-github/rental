import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";

const EditCell = ({ getValue, row, column, table }) => {
  const initialValue = getValue();
  const [value, setValue] = useState(initialValue);

  const onBlur = () => {
    table.options.meta?.updateData(row.index, column.id, value);
  };

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <Input
      value={value}
      onBlur={onBlur}
      onChange={(e) => setValue(e.target.value)}
      placeholder="0"
      className="w-50 cursor-pointer bg-transparent"
    />
  );
};

export default EditCell;
