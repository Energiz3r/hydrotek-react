//returns timestamp (milliseconds)
export const getNowTimestamp = () => {
  return Date.now();
};

//returns friendly date string from a timestamp eg. '2018-06-24 10:37:21'
export const getFriendlyFromTimestamp = (
  timestamp: number,
  dateOnly = false
) => {
  const a = new Date(timestamp);
  const year = a.getFullYear();
  const month =
    a.getMonth() + 1 < 10 ? "0" + (a.getMonth() + 1) : a.getMonth() + 1;
  const date = a.getDate() < 10 ? "0" + a.getDate() : a.getDate();
  const hour = a.getHours();
  const min = a.getMinutes() < 10 ? "0" + a.getMinutes() : a.getMinutes();
  const sec = a.getSeconds() < 10 ? "0" + a.getSeconds() : a.getSeconds();
  if (dateOnly) {
    return year + "-" + month + "-" + date;
  } else {
    return year + "-" + month + "-" + date + " " + hour + ":" + min + ":" + sec;
  }
};

//return the difference in months
export const monthDiff = (
  timestamp1: number | string,
  timestamp2: number | string
) => {
  let d1;
  let d2;
  if (timestamp1 === "now") {
    d2 = new Date();
    d1 = new Date(timestamp2);
  } else {
    let timestamp3;
    if (timestamp2 < timestamp1) {
      timestamp3 = timestamp2;
      timestamp2 = timestamp1;
      timestamp1 = timestamp3;
    }
    d1 = new Date(timestamp1);
    d2 = new Date(timestamp2);
  }
  let months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
};
