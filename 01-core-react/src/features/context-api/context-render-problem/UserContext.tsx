import { createContext } from "react";

export interface UserContextType {
  name: string;
  age: number;
}

export const UserContext = createContext<UserContextType>({
  name: "Guest",
  age: 0,
});
