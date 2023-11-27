import React, { useState } from "react";
import TablePopup from "../TablePopup/TablePopup";
import getTableInfo from "../../../util/helpers/getTableInfo";

function TableStructure({ tableName, tableHead, tableNo }) {
  const [trigger, setTrigger] = useState(false);
  tableHead = Object.values(tableHead);

  const [tableHeadData, setTableHeadData] = useState([]);
  const [tableRowData, setTableRowData] = useState([]);
  const handleTable = () => {
    const { tableHeaders, tableRows } = getTableInfo(tableNo);
    setTableHeadData(tableHeaders);
    setTableRowData(tableRows);
    setTrigger(true);
  };

  return (
    <div className="mx-10">
      <div className="flex items-center cursor-pointer" onClick={handleTable}>
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white fill-current"
        >
          <path
            className="svg-view"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 0C1.34315 0 0 1.34315 0 3V7V15C0 16.6569 1.34314 18 3 18H21C22.6569 18 24 16.6569 24 15V7V3C24 1.34315 22.6569 0 21 0H3ZM22 6V3C22 2.44771 21.5523 2 21 2H3C2.44772 2 2 2.44772 2 3V6H22ZM2 8H7L7 16H3C2.44772 16 2 15.5523 2 15V8ZM9 16V8H15V16H9ZM17 16H21C21.5523 16 22 15.5523 22 15V8H17V16Z"
            fillOpacity="1"
          ></path>
        </svg>
        <p className="ml-3 text-lg font-bold text-yellow-500 hover:text-yellow-600">
          {tableName} [-]
        </p>
      </div>
      {tableHead.map((row, index) => (
        <div className="relative flex items-end ml-3" key={index}>
          <div className="w-6 h-8 border-b-2 border-l-2"></div>
          <p className="absolute text-sm font-semibold text-zinc-300 top-5 left-9">
            {row}{" "}
            <span className="text-zinc-500 hover:text-yellow-500">
              [varchar(40)]
            </span>
          </p>
        </div>
      ))}

      <TablePopup
        trigger={trigger}
        setTrigger={setTrigger}
        headers={tableHeadData}
        rows={tableRowData}
      />
    </div>
  );
}

export default React.memo(TableStructure);
