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
      d="M16.5 4a4.5 4.5 0 0 1 4.495 4.288L21 8.5v7a4.5 4.5 0 0 1-4.288 4.495L16.5 20h-9a4.5 4.5 0 0 1-4.495-4.288L3 15.5v-7a4.5 4.5 0 0 1 4.288-4.495L7.5 4zm0 1.5h-9a3 3 0 0 0-2.995 2.824L4.5 8.5v7a3 3 0 0 0 2.824 2.995l.176.005h9a3 3 0 0 0 2.995-2.824l.005-.176v-7a3 3 0 0 0-2.824-2.995zm-.75 9a.75.75 0 0 1 .102 1.492l-.101.007h-2.252a.75.75 0 0 1-.101-1.492l.101-.007zM8.03 9.599a.75.75 0 0 1 .976-.073l.084.073 2.121 2.12a.75.75 0 0 1 .073.977l-.072.084L9.09 14.9a.75.75 0 0 1-1.133-.976l.073-.084 1.59-1.59-1.59-1.591a.75.75 0 0 1 0-1.06"
      fill="currentcolor"
      fillRule="evenodd"
    />
  </svg>
);
export default SVGComponent;
