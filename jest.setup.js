import "@testing-library/jest-dom/extend-expect";
import { setLogger } from "react-query";
import fetchMock from "jest-fetch-mock";

// mock all fetch requests
fetchMock.enableMocks();

setLogger({
  log: console.log,
  warn: console.warn,
  // prevent network error noise in the console
  error: () => {},
});
