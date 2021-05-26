import { useCheck } from "./CheckProvider";

const Checkbox = (props) => <input type="checkbox" {...props} />;

export const RenderRows = ({ state }) => {
  const { entries, setCancel } = useCheck();

  const handleCheckboxChange = (tid, status) => {
    setCancel(tid, status);
  };

  return (
    <>
      {entries &&
        entries.length > 0 &&
        entries.map((entry, index) => (
          <tr key={entry.tid}>
            <th>
              <div className={"middleAlign"}>
                {new Date(entry.date).toLocaleDateString("en-US")} <br />
                {new Date(entry.date).toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
            </th>
            <th>
              <div className="middleAlign">
                {entry.check_no?.toString() || ""}
              </div>
            </th>
            <th>
              <div className=" currency middleAlign">
                {entry.debit?.toString() || ""}
              </div>
            </th>
            <th>
              <div className="currency middleAlign">
                {entry.credit?.toString() || ""}
              </div>
            </th>
            <th>
              <div className="currency middleAlign">
                {entry.balance?.toString() || ""}
              </div>
            </th>
            <th>
              <div className="middleAlign">
                {entry.description?.toString() || ""}
              </div>
            </th>
            <th>
              <div className="middleAlign">
                <Checkbox
                  checked={entry?.canceled}
                  onChange={() =>
                    handleCheckboxChange(entry.tid, !entry.canceled)
                  }
                />
              </div>
            </th>
          </tr>
        ))}
    </>
  );
};
