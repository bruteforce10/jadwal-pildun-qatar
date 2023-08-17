import moment from "moment";
import React from "react";
import Card from "../components/Card";
import clsx from "clsx";

const DateTitle = ({ date }) => {
  const day = moment(date).format("dddd");
  const _date = moment(date).format("Do MMM YYYY");
  const isToday = moment(date).isSame(moment("2022-11-22"), "day");

  return (
    <div>
      {isToday ? (
        <span className="font-bold text-2xl">Hari Ini</span>
      ) : (
        <span className="font-bold">{day}</span>
      )}
      <span>, {_date}</span>
    </div>
  );
};

function SectionRow({ matches, date }) {
  const isToday = moment(date).isSame(moment("2022-11-22"), "day");
  return (
    <div className="mt-[40px] ">
      <DateTitle date={date} />
      <div
        className={clsx(
          "grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3 mt-[10px]",
          isToday && "md:grid-cols-1 lg:grid-cols-2"
        )}
      >
        {matches.map((match, index) => (
          <Card key={index} match={match} isToday={isToday} />
        ))}
      </div>
    </div>
  );
}

export default SectionRow;
