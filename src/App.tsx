import { useState, type SubmitEvent } from "react";
import Input from "./components/Input";
import type { SelectOptions } from "./components/Select";
import { genderSchema } from "./schemas/gender";
import Select from "./components/Select";

type Gender = "" | "male" | "female";

export default function App() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [gender, setGender] = useState<Gender>("male");

  const genderOptions: SelectOptions<Gender> = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ];

  // function handleGenderChange(event: ChangeEvent<HTMLSelectElement>) {
  //   const { value } = event.target;

  //   // Type transformation with type validation
  //   const { success, data, error } = GenderSchema.safeDecode(value as Gender);
  //   if (!success) return alert(error);
  //   setGender(data);
  // }

  function handleGenderValueChange(value: Gender) {
    // Type transformation with type validation
    const { success, data, error } = genderSchema.safeDecode(value);
    if (!success) return alert(error);
    setGender(data);
  }

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log({ email, gender, password, confirmPassword });
  }

  return (
    <main>
      <h1>Register</h1>

      <form onSubmit={handleSubmit}>
        <Input
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          // onValueChange={setEmail}
        >
          Email
        </Input>

        <Select
          name="gender"
          options={genderOptions}
          value={gender}
          // onChange={handleGenderChange}
          onValueChange={handleGenderValueChange}
        >
          Gender
        </Select>

        <Input
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        >
          Password
        </Input>

        <Input
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        >
          Confirm Password
        </Input>

        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
