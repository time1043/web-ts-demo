import { useState } from "react";

// `type`: customized types
// `|`: can be combined with union types
type Gender = "" | "male" | "female";

export default function App() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [gender, setGender] = useState<Gender>("");

  return (
    <main>
      <h1>Register</h1>

      <form>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* It need to assert the type, then ts no longer complains. But errors manually are no longer checked */}
        <label htmlFor="gender">Gender</label>
        <select
          name="gender"
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value as Gender)}
        >
          <option value="" disabled>
            Choose your gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
