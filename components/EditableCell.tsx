import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";

// interface EditableCellProps {
//   getValue: () => void;
// }

const EditableCell = () =>
  // { getValue }: EditableCellProps
  {
    const initialValue = "DD-MM-YYYY";
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
      setValue(initialValue);
    }, [initialValue]);

    return (
      <Input
        type="date"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-50 cursor-pointer"
      />
    );
  };

export default EditableCell;
