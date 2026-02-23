import { useContext, useMemo } from "react";
import { UserContext, type UserState } from "./UserContext";

/**
 * Custom Selector Hook
 *
 * Allows consumer to select only needed slice.
 *
 * Note:
 * This does NOT create true subscription like Redux.
 * It relies on memoization + React.memo.
 */
export function useUserSelector<T>(selector: (state: UserState) => T): T {
  const state = useContext(UserContext);

  return useMemo(() => selector(state), [state, selector]);
}
