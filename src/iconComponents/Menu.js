import * as React from "react";

function SvgMenu(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={6} {...props}>
      <path d="M0 0h20v1H0zm0 5h20v1H0z" fillRule="evenodd" />
    </svg>
  );
}

export default SvgMenu;
