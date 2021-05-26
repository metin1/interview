import React from "react";

import "../index.css";

import { useCheck } from "./CheckProvider";
import { HeaderRow } from "./header";
import { RenderRows } from "./tableBody";

export function CheckBook() {
  const { entries, setEntries } = useCheck();

  const [sortedField, setSortedField] = React.useState({
    sortBy: "",
  });
  const toggleSort = (key, sortable) => {
    if (!sortable) {
      return;
    }

    const isAsc = sortedField.key === key && sortedField.sortBy === "asc";
    setSortedField({ key, sortBy: isAsc ? "desc" : "asc" });

    setEntries(
      entries.sort((a, b) =>
        a[key] === undefined || a[key] === null || a[key] === ""
          ? 1
          : b[key] === undefined || b[key] === null || b[key] === ""
          ? -1
          : a[key] === b[key]
          ? 0
          : isAsc
          ? a[key] > b[key]
            ? 1
            : -1
          : a[key] < b[key]
          ? 1
          : -1
      )
    );
  };

  return (
    <div className={"tableWrapper"}>
      <table>
        <thead>
          <tr>
            <th colspan="7">Interview Question</th>
          </tr>
          <HeaderRow sortedField={sortedField} toggleSort={toggleSort} />
        </thead>
        <tbody>
          <RenderRows />
        </tbody>
      </table>
    </div>
  );
}
