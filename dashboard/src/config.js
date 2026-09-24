export const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3002";

export const money = (value) =>
  Number(value).toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

export const short = (value) => `${(Number(value) / 1000).toFixed(2)}k`;