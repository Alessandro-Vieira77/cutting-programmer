import { createContext } from "react";

interface contextProps {
  hm: number;
}

export const TimeContext = createContext({} as contextProps);

function TimeProvider({ children }: any) {
  // hours and minutes
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  const hm = Number(`${hours}.${minutes}`);

  return <TimeContext.Provider value={{ hm }}>{children}</TimeContext.Provider>;
}

export default TimeProvider;
