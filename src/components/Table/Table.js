import React from "react";
import { CSVLink } from "react-csv";
import TableUI from "../TableUI/TableUI";
import { EMPTY_QUERY, EXPORT_CSV, OUTPUT } from "../../util/constants";

function Table({ query, headers, rows, csvData }) {
  return (
    <div>
      {query ? (
        <section className="h-full pl-4 mt-4 text-gray-600 ">
          <div className="flex justify-between w-full mt-6 lg:mt-0">
            <div className="py-4 text-2xl font-bold text-white rounded-tr-lg b rounded-tl-md">
              {OUTPUT}
            </div>
            <CSVLink
              data={csvData}
              filename={new Date().getTime().toString() + ".csv"}
              className="p-2"
            >
              <button
                name="csv"
                className="flex items-center justify-center px-4 py-2 mx-auto mb-3 text-lg text-white hover:bg-yellow-500 border-0 rounded-lg h-11 focus:outline-none transition duration-300 ease-in-out"
              >
                <span className="pl-2 font-semibold">{EXPORT_CSV}</span>
              </button>
            </CSVLink>
          </div>
          <TableUI headers={headers} rows={rows} />
        </section>
      ) : (
        <div className="flex items-center justify-center w-full px-6 font-mono text-2xl font-bold text-center text-slate-200 h-80">
          {EMPTY_QUERY}
        </div>
      )}
    </div>
  );
}

export default React.memo(Table);
