const formatDefault = (x) => x.toString();

const cmpNoop = () => 0;

// Added sortable variable to prevent sorting balance field
const columns = [
  {
    key: "date",
    cmp: cmpNoop,
    format: formatDefault,
    classNames: [],
    label: "Date",
    sortable: true,
  },
  {
    key: "check_no",
    cmp: cmpNoop,
    format: formatDefault,
    classNames: [],
    label: "No.",
    sortable: true,
  },
  {
    key: "debit",
    cmp: cmpNoop,
    format: formatDefault,
    classNames: ["currency"],
    label: "Debit",
    sortable: true,
  },
  {
    key: "credit",
    cmp: cmpNoop,
    format: formatDefault,
    classNames: ["currency"],
    label: "Credit",
    sortable: true,
  },
  {
    key: "balance",
    cmp: cmpNoop,
    format: formatDefault,
    classNames: ["currency", "balance"],
    label: "Balance",
    sortable: false,
  },
  {
    key: "description",
    cmp: cmpNoop,
    format: formatDefault,
    classNames: [],
    label: "Description",
    sortable: true,
  },
  {
    key: "canceled",
    cmp: cmpNoop,
    format: formatDefault,
    classNames: ["canceledColumn"],
    label: "Canceled?",
    sortable: true,
  },
];

export const HeaderRow = ({ toggleSort, sortedField }) => {
  return (
    <tr>
      {columns.map((col) => (
        <th
          key={col.key}
          className={col.key}
          onClick={() => toggleSort(col.key, col.sortable)}>
          <div className={"middleAlign"}>
            {col.label}
            <i
              className="material-icons"
              style={{
                visibility: sortedField.key === col.key ? "visible" : "hidden",
                transform:
                  sortedField.sortBy === "asc"
                    ? "rotate(0deg)"
                    : "rotate(180deg)",
              }}>
              arrow_drop_down
            </i>
          </div>
        </th>
      ))}
    </tr>
  );
};
