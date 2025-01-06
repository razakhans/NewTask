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
      d="M15.874 3H8.126a3.357 3.357 0 0 0-3.35 3.152l-.772 12.77c-.028.459.106.915.38 1.286l.101.125c.666.764 1.818.9 2.647.287L12 17.023l4.868 3.597a1.964 1.964 0 0 0 3.128-1.7l-.771-12.767A3.36 3.36 0 0 0 15.874 3m0 1.5c.981 0 1.794.764 1.854 1.744l.771 12.768a.464.464 0 0 1-.74.402l-5.207-3.848a.93.93 0 0 0-1.104 0L6.24 19.414a.464.464 0 0 1-.74-.402l.773-12.768c.06-.98.872-1.744 1.853-1.744z"
      fill="currentcolor"
      fillRule="evenodd"
    />
  </svg>
);
export default SVGComponent;
