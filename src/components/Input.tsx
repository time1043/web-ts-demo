import type { ChangeEvent, PropsWithChildren } from "react";

// // https://react.dev/learn/typescript#typing-children
// type InputProps = {
//   name: string;
//   type: string;
//   value: string;
//   onChange: (event: ChangeEvent<HTMLInputElement>) => void;
//   children: ReactNode; // ReactNode | ReactElement
// };

// `&`: https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types
type InputProps = PropsWithChildren & {
  name: string;
  type: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  // onValueChange: (value: string) => void;
};

// https://react.dev/reference/react-dom/components/input
function Input({ name, type, value, onChange, children }: InputProps) {
  return (
    <>
      <label htmlFor={name}>{children}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        // onChange={(e) => onValueChange(e.target.value)}
      />
    </>
  );
}

export default Input;
