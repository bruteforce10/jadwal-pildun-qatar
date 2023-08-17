import { groupBy } from "lodash";
import moment from "moment/moment";
import React from "react";
import SectionRow from "./sectionRow";

export const getMatch = async () => {
  const res = await fetch("https://worldcupjson.net/matches");
  return res.json();
};

export default async function SectionList() {
  const match = await getMatch();
  const getMatchDate = (item) => moment(item.datetime).format("YYYY-MM-DD");
  const matchByDate = groupBy(match, getMatchDate);
  return (
    <div>
      {Object.keys(matchByDate).map((date, index) => (
        <div key={index}>
          <SectionRow matches={matchByDate[date]} date={date} />
        </div>
      ))}
    </div>
  );
}
