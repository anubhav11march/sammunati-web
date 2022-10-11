export const formatSeconds = (seconds) => {
  // HH:MM:SS if time is greater than equal to hour
  // MM:SS if time is less than equal to hour
  return +seconds>= 3600
    ? new Date(+seconds * 1000).toISOString().slice(11, 19)
    : new Date(+seconds * 1000).toISOString().slice(14, 19);
};


export const formatSecondsOtherFormat = (seconds) => {
  const modifiedSeconds=formatSeconds(seconds);
  const splitIntoHoursMinutesSeconds=modifiedSeconds.split(":");
  return +seconds>= 3600
  ?`${splitIntoHoursMinutesSeconds[0]} Hrs ${splitIntoHoursMinutesSeconds[1]} Mins`
  :`${splitIntoHoursMinutesSeconds[0]} Mins ${splitIntoHoursMinutesSeconds[1]} Secs`
};
