import { createContext } from "react";

/**
 * User Context Type Definition
 */
export interface UserContextType {
  name: string;
}

/**
 * Creating Context
 *
 * Default value is only used if no provider exists.
 */
export const UserContext = createContext<UserContextType>({
  name: "Guest",
});
