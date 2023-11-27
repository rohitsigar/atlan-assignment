import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import PredefinedQuery from "./components/PredefinedQuery/PredefinedQuery";
import SqlEditor from "./components/SqlEditor/SqlEditor";
import Table from "./components/Table/Table";
import HistoryQueries from "./components/HistoryQueries";
import Buttons from "./components/Button";

function App() {
  const [value, setValue] = useState("select * from customers;");
  const [rows, setRows] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [query, setQuery] = useState("");
  const [defaults, setDefaults] = useState(1);
  const [csvData, setCSVData] = useState([]);

  if (value === "") {
    toast.error("Please remove the code and run the query");
    setValue(
      "-- Online SQL Editor to Run SQL Online. \n-- Use the editor to view all tables in SQL operations.\n\n-- Remove the code and Start exploring!\n\n-- Happy Coding!"
    );
  }

  useEffect(() => {
    if (value.toLowerCase() === "select * from customers;") {
      setDefaults(1);
    } else if (value.toLowerCase() === "select * from suppliers;") {
      setDefaults(2);
    } else if (value.toLowerCase() === "select * from products;") {
      setDefaults(3);
    } else if (
      value.toLowerCase() ===
      "select contact_name, address,city,postal_code, country from customers limit 18;"
    ) {
      setDefaults(4);
    } else {
      setDefaults(0);
    }
  }, [value]);

  return (
    <div className="flex flex-wrap items-start justify-center w-full min-h-screen overflow-y-hidden bg-black">
      <div className="w-full min-h-screen p-4 lg:w-12/12">
        <div className="flex flex-wrap items-start justify-center w-full ">
          <div className="w-full lg:w-3/12">
            <PredefinedQuery
              setValue={setValue}
              setDefaults={setDefaults}
              value={value}
            />
          </div>
          <div className="w-full lg:w-6/12">
            <div className="flex justify-between w-full ">
              <div className="py-4 text-2xl font-bold text-center text-white ">
                Input
              </div>
              <Buttons
                setQuery={setQuery}
                setHeaders={setHeaders}
                setRows={setRows}
                setCSVData={setCSVData}
                value={value}
                setValue={setValue}
                setDefaults={setDefaults}
                defaults={defaults}
              />
            </div>
            <SqlEditor value={value} setValue={setValue} />
          </div>
          <div className="w-full lg:w-3/12">
            <HistoryQueries query={query} />
          </div>
        </div>
        {defaults === 0 ? null : (
          <Table
            query={query}
            headers={headers}
            rows={rows}
            csvData={csvData}
          />
        )}
      </div>

      <Toaster
        position="top-right"
        gutter={8}
        toastOptions={{
          duration: 3000,
        }}
      />
    </div>
  );
}

export default App;
