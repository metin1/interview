import React from "react";
import { sourceData } from "./data";

export const CheckContext = React.createContext();

// Add useCheck to shorten code and use consumer
export function useCheck() {
  return React.useContext(CheckContext);
}

export function CheckProvider(props) {
  const [entries, setEntries] = React.useState(() =>
    sourceData.map((item, rid) => ({
      ...item,
      rid,
      date: new Date(Date.parse(item.date)),
      canceled: !!item.canceled,
    }))
  );

  const contextValue = React.useMemo(() => {
    const setCancel = async (tid, value) => {
      setEntries((currentEntries) =>
        currentEntries.map((item) => ({
          ...item,
          canceled: item.tid === tid ? value : item.canceled,
        }))
      );
    };

    let sum = 0;

    return {
      entries: entries.map((item, index) => {
        if (!item.canceled) {
          item.debit !== undefined ? (sum -= item.debit) : (sum += item.credit);
        }
        return {
          ...item,
          balance: parseFloat(sum).toFixed(2),
        };
      }),
      setEntries,
      setCancel,
    };
  }, [entries]);

  return (
    <CheckContext.Provider value={contextValue}>
      {props.children}
    </CheckContext.Provider>
  );
}
