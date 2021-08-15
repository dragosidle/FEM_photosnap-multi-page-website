import * as React from "react";

function SvgCheck(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={15} {...props}>
      <path
        fill="none"
        stroke="#000"
        strokeWidth={2}
        d="M1 8.124L5.623 13 17 1"
      />
    </svg>
  );
}

export default SvgCheck;
