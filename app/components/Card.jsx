/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import moment from "moment";
import React from "react";

const Team = ({ team, isToday }) => {
  return (
    <div className="flex flex-col w-1/2 items-center  justify-center text-center ">
      <img
        src={`https://api.fifa.com/api/v3/picture/flags-sq-5/${team.country}`}
        className={clsx(
          "w-[90px] h-[60px] border-[3px] border-black shadow-[5px_5px_0_0_#000] rounded-[14px]",
          isToday && "w-[180px] h-[120px]"
        )}
        alt={team.name}
      />
      <p className="font-bold text-lg mt-4 text center leading-[20px]">
        {team.name}
      </p>
      <p className="font-bold text-2xl text center">{team.goal}</p>
    </div>
  );
};

const Versus = ({ date }) => {
  const isFinish = moment(date).isBefore(moment());
  return (
    <div className="grid relative h-full py-3 px-1">
      <span className="absolute font-bold text-2xl place-self-center">VS</span>
      <span className=" font-medium text-xs place-self-end px-3 text-white py-1 bg-black rounded-full">
        {isFinish ? "Selesai" : moment(date).format("HH:mm")}
      </span>
    </div>
  );
};

export default function Card({ match, isToday }) {
  return (
    <div
      className="flex flex-row aspect-video border-[3px] border-black
    shadow-[8px_8px_0_0_#000] hover:shadow-[15px_15px_0_0_#000] rounded-[12px] transition-all px-4"
    >
      <Team team={match.home_team} isToday={isToday} />
      <Versus date={match.datetime} />
      <Team team={match.away_team} isToday={isToday} />
    </div>
  );
}
