import { useState, useEffect } from "react";

interface RadioGroupProps {
  values: string[];
  setDefault: string;
  onChange?: (value: string) => void;
}

const RadioGroup = ({ values, setDefault, onChange }: RadioGroupProps) => {
  const [selected, setSelected] = useState(setDefault);

  const n=`${setDefault}-group`
  useEffect(() => {
    setSelected(setDefault);
  }, [setDefault]);

  return (
    <div className="flex gap-x-4 text-gray-400">
      {values.map((value) => (
        <label
          key={value}
          htmlFor={value}
          className="flex items-center gap-x-2 cursor-pointer"
        >
          <input
            type="radio"
            id={value}
            name={n}
            value={value}
            checked={selected === value}
            onChange={() => {
              setSelected(value);
              onChange?.(value);
            }}
            className="accent-blue-500 cursor-pointer"
          />
          <span className={selected === value ? "text-white" : ""}>
            {value}
          </span>
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;

