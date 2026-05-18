import type { PropsWithChildren } from "react";

export type SelectOptions<T extends string> = { label: string; value: T }[];

type SelectProps<T extends string> = PropsWithChildren & {
  name: string;
  options: SelectOptions<T>;
  value: T;
  // onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  onValueChange: (value: T) => void;
};

function Select<T extends string>({
  name,
  options,
  value,
  onValueChange,
  children,
}: SelectProps<T>) {
  return (
    <>
      <label htmlFor={name}>{children}</label>
      <select
        name={name}
        id={name}
        value={value}
        // onChange={onChange}
        onChange={(e) => onValueChange(e.target.value as T)}
      >
        {options.map((opt) => (
          <option value={opt.value} key={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </>
  );
}

export default Select;
