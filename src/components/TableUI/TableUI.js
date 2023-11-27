import React, { useEffect, useState } from "react";

const rowsPerPage = 10;

function TableUI({ headers, rows }) {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [rows]);

  const lastIndex = currentPage * rowsPerPage;
  const firstIndex = lastIndex - rowsPerPage;
  const currentRows = rows.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(rows.length / rowsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
  const handleNext = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <div className="w-full max-h-full p-2 overflow-y-scroll rounded-xl bg-zinc-900 scrollbar-hide">
      <table className="w-full overflow-hidden text-left whitespace-no-wrap table-auto">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-2 py-2 text-sm font-semibold tracking-wider text-white rounded-tl rounded-bl title-font"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentRows.map((row_value, rowIndex) => (
            <tr key={rowIndex}>
              {row_value.map((cell_value, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-2 py-2 text-sm font-normal border-t-2 border-zinc-800 text-slate-300 overflow-hidden overflow-ellipsis max-w-20"
                >
                  {cell_value.length > 10
                    ? `${cell_value.slice(0, 10)}...`
                    : cell_value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center w-full mt-4 stems-center text-slate-200">
        {currentPage === 1 ? null : (
          <button
            name="prev"
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="mr-2 hover:bg-zinc-700"
          >
            Prev
          </button>
        )}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            name="page"
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`p-1 px-2 mr-2 rounded-lg hover:bg-zinc-700 ${
              currentPage === index + 1
                ? "border border-solid border-zinc-700"
                : ""
            }`}
          >
            {index + 1}
          </button>
        ))}
        {currentPage === totalPages ? null : (
          <button
            onClick={handleNext}
            name="next"
            disabled={currentPage === totalPages}
            className="mr-2 hover:bg-zinc-700"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default React.memo(TableUI);
