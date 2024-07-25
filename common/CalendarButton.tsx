import hideOverlay from "@/HOC/hideOverlay";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type type_date = ValuePiece | [ValuePiece, ValuePiece];

const CalendarButton = ({ extrClss = "" }: { extrClss?: string }) => {
  const [showCal, setShowCal] = useState(false);
  const [selectedDate, setSelectedDate] = useState<type_date>(new Date());

  const handleChange = (date: type_date) => {
    setShowCal(!showCal);
    setSelectedDate(date);
  };

  const CalendarComp = hideOverlay(Calendar, setShowCal);

  return (
    <div className="relative">
      <button
        onClick={() => setShowCal(!showCal)}
        className="border px-3 py-2 text-sm rounded dm-sans border-gray-600"
      >
        Select data range
      </button>
      {showCal && (
        <div
          className={`absolute ${extrClss} bg-gray800 p-3 rounded shadow-sm animate__animated animate__fadeIn`}
        >
          <div className="relative">
            <CalendarComp
              selectRange={true}
              defaultActiveStartDate={new Date()}
              maxDate={new Date()}
              onChange={handleChange}
              value={selectedDate}
              allowPartialRange={true}
              className="bg-slate-800 dm-sans border-none border-0 text-sm"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarButton;
