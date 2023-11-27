import React from "react";
import { QUERIES } from "../../util/constants";


function PredefinedQuery({ setDefaults, setValue, value }) {
  const qurtyValue = [
    {
      query: "select * from customers;",
      default: 1,
    },
    {
      query:
        "select contact_name, address,city,postal_code, country from customers limit 18;",
      default: 4,
    },
    {
      query: "select * from products;",
      default: 2,
    },
    {
      query: "select * from suppliers;",
      default: 3,
    },
  ];
  return (
    <div>
      <div className="p-4 mt-1">
        <div className="flex items-center justify-center">
          <p className="text-xl font-bold text-yellow-500">{QUERIES}</p>
        </div>

        <div className="mb-6 scrollbar-hide lg:mb-0">
          {qurtyValue.map((item, index) => (
            <p
              key={index}
              className={`p-2 my-4 font-mono text-sm text-center rounded-sm cursor-pointer hover:bg-gray-400 hover:text-white ${
                value === item.query
                  ? "bg-gray-300 border border-solid border-yellow-500 border-4"
                  : "bg-gray-300"
              }`}
              onClick={() => {
                setDefaults(`${item.default}`);
                setValue(`${item.query}`);
              }}
            >
              {item.query}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default React.memo(PredefinedQuery);
