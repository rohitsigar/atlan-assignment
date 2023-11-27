import React from "react";
import TableUI from "../TableUI/TableUI";

function TablePopup({ trigger, setTrigger, rows, headers }) {
  return (
    trigger && (
      <div
        className="fixed top-0 left-0 z-40 flex items-center justify-center w-full h-full bg-opacity-90 bg-zinc-900"
        onClick={() => setTrigger(false)}
      >
        <div
          className="relative w-10/12 p-6 mx-auto border-2 bg-zinc-900 h-[500px] rounded-2xl border-zinc-800 "
          onClick={(e) => e.stopPropagation()}
        >
          <button
            name="close"
            onClick={() => setTrigger(false)}
            className="absolute top-0 px-4 py-2 font-extrabold text-white transition-all rounded-full bg--none hover:text-yellow-500 right-2 "
          >
            X
          </button>
          <TableUI headers={headers} rows={rows} />
        </div>
      </div>
    )
  );
}

export default React.memo(TablePopup);
