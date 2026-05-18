import { useState, type ChangeEvent } from "react";
import Input from "./components/Input";

type Gender = "" | "male" | "female";

export default function App() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [gender, setGender] = useState<Gender>("");

  function handleGenderChange(event: ChangeEvent<HTMLSelectElement>) {
    const { value } = event.target;
    if (value !== "male" && value !== "female" && value !== "")
      return alert("Invalid gender");
    setGender(value);
  }

  return (
    <main>
      <h1>Register</h1>

      <form>
        <Input
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          // onValueChange={setEmail}
        >
          Email
        </Input>

        {/* It need to assert the type, then ts no longer complains. But errors manually are no longer checked */}
        {/* So it need the validation logic */}
        <label htmlFor="gender">Gender</label>
        <select
          name="gender"
          id="gender"
          value={gender}
          onChange={handleGenderChange}
        >
          <option value="" disabled>
            Choose your gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

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
