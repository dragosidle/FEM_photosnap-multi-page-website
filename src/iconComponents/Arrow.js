import * as React from "react";

function SvgArrow(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={43} height={14} {...props}>
      <path
        d="M0 7h41.864m-6.436-6l6 6-6 6"
        fill="none"
        fillRule="evenodd"
        stroke="#000"
      />
    </svg>
  );
}

export default SvgArrow;
