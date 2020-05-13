import React from "react";
import PropTypes from "prop-types";
import OperatingSystem from "./OperatingSystem";

const UbuntuOS = ({ size, viewBox, enableBackground }) => {
  return (
    <OperatingSystem
      size={size}
      viewBox={viewBox}
      enableBackground={enableBackground}
    >
      <g>
        <path d="M7.565 24.556c3.092 0 5.565 2.573 5.565 5.59 0 3.104-2.562 5.588-5.565 5.588C4.473 35.734 2 33.16 2 30.145c0-3.105 2.562-5.589 5.565-5.589zm25.44-16.5c1.325 0 2.738.09 3.975.355v.71c0 4.258 3.445 7.718 7.685 7.718 1.59 0 3.268-.533 4.505-1.42 3.003 3.371 4.77 7.275 5.212 11.976l-8.834.266c-.706-6.387-6.183-10.911-12.72-10.911-1.855 0-3.621.355-5.123 1.065l-4.328-7.54a21.94 21.94 0 019.628-2.219z"></path>
        <path d="M45.548 46.468c3.092 0 5.565 2.572 5.565 5.588 0 3.105-2.561 5.59-5.565 5.59-3.091 0-5.565-2.573-5.565-5.59 0-3.104 2.562-5.588 5.565-5.588zm-24.821.976c-3.71-2.662-6.625-6.388-8.127-10.823 2.12-1.33 3.357-3.726 3.357-6.476S14.543 25 12.335 23.581a21.327 21.327 0 018.127-11.444l4.593 7.452a12.85 12.85 0 00-4.858 10.113c0 4.08 1.943 7.629 4.77 10.024l-4.24 7.718z"></path>
        <path d="M54.47 31.21c-.353 5.145-2.562 9.846-5.918 13.395-1.06-.532-2.297-.887-3.534-.887-4.063 0-7.42 3.193-7.685 7.185-1.325.266-2.826.444-4.24.444-3.356 0-6.536-.799-9.451-2.218L27.97 41.5c1.502.621 3.268.976 5.035.976 6.625 0 12.013-4.968 12.72-11.444l8.745.178zM45.107 3c3.091 0 5.565 2.573 5.565 5.589 0 3.105-2.562 5.588-5.565 5.588-3.092 0-5.565-2.572-5.565-5.588S42.015 3 45.107 3z"></path>
      </g>
    </OperatingSystem>
  );
};

UbuntuOS.propTypes = {
  size: PropTypes.number,
  viewBox: PropTypes.string,
  enableBackground: PropTypes.string,
};

export default UbuntuOS;
