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
      d="M12 4.5c3.828 0 6.74 2.287 8.62 6.592l.139.326L21 12l-.241.582C18.885 17.097 15.924 19.5 12 19.5c-3.828 0-6.74-2.287-8.62-6.592l-.139-.326L3 12l.241-.582C5.115 6.903 8.076 4.5 12 4.5M12 6q-4.906 0-7.395 6 2.49 6 7.395 6 4.906 0 7.395-6Q16.905 6 12 6m0 1.75a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5m0 1.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5"
      fill="currentcolor"
      fillRule="evenodd"
    />
  </svg>
);
export default SVGComponent;
