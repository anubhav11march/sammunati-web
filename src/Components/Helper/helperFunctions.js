export const formatSeconds = (seconds) => {
  return +seconds>= 3600
    ? new Date(+seconds * 1000).toISOString().slice(11, 19)
    : new Date(+seconds * 1000).toISOString().slice(14, 19);
};
