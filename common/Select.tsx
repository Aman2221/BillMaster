import React from "react";

const Select = ({ heading, data }: { heading: string; data: any }) => {
  return (
    <div className="p-4 flex items-center justify-between w-full">
      <span className="text-2xl">{heading}</span>
      <select
        name="overview"
        id="overview"
        className="brder px-3 py-2 bg-transparent capitalize outline-none border border-gray-600"
      >
        {data.map((item: string) => (
          <option
            className="capitalize bg-black py-2 px-4 border-none outline-none pr-3"
            key={item}
            value={item}
          >
            {item.replace("_", " ")}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
