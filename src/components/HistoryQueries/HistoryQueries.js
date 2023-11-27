import React, { useEffect, useState } from "react";
import { HISTORY } from "../../util/constants";

function HistoryQueries({ query }) {
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    if (query !== "") {
      setQueries((prev) => [query, ...prev]);
    }
  }, [query]);

  return (
    <div>
      <div className="p-4 mt-1">
        <div className="flex items-center justify-center">
          <p className="text-xl font-bold text-yellow-500">{HISTORY}</p>
        </div>

        <div className="max-h-64 overflow-y-auto mb-6 lg:mb-0">
          {queries.reverse().map((item, index) => (
            <p
              key={index}
              className="p-2 my-4 font-mono text-sm text-center rounded-sm cursor-pointer hover:bg-gray-400 hover:text-white bg-gray-300"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default React.memo(HistoryQueries);
