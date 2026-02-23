import { createContext } from "react";

export interface UserState {
  name: string;
  age: number;
}

export const UserContext = createContext<UserState>({
  name: "Guest",
  age: 0,
});
