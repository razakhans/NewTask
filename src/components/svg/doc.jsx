import * as React from "react";
const SVGComponent = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5 pointer-events-none"
    {...props}
  >
    <path
      d="M13 3l6.5 6.5V17a4 4 0 01-4 4h-7a4 4 0 01-4-4V7a4 4 0 014-4H13zm0 1.5H8.5a2.5 2.5 0 00-2.495 2.336L6 7v10a2.5 2.5 0 002.336 2.495l.164.005h7a2.5 2.5 0 002.495-2.336L18 17V9.5h-3a2 2 0 01-2-2v-3zM15.25 16a.75.75 0 01.102 1.492l-.101.007H8.749a.75.75 0 01-.101-1.492L8.749 16h6.502zm0-3a.75.75 0 01.102 1.492l-.101.007H8.749a.75.75 0 01-.101-1.492L8.749 13h6.502zm-3.5-3a.75.75 0 01.102 1.492l-.101.007H8.749a.75.75 0 01-.101-1.492L8.749 10h3.002z"
      fill="currentcolor"
      fillRule="evenodd"
    />
  </svg>
);
export default SVGComponent;
