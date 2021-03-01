import React from "react";
import PropTypes from "prop-types";
import OperatingSystem from "./OperatingSystem";

const DebianOS = ({ size, viewBox, enableBackground }) => {
  return (
    <OperatingSystem
      size={size}
      viewBox={viewBox}
      enableBackground={enableBackground}
    >
      <path d="M33.508 59.115c-9.049-3.246-14.36-7.18-20.262-16.131-1.476-2.46-4.131-7.87-4.033-15.05-.197-7.082 3.344-15.245 10.033-19.672 6.492-4.623 14.852-4.721 19.77-2.852 6 2.36 10.033 7.377 11.312 12.688 1.475 5.115 0 13.574-7.082 17.017-3.246 1.77-7.476 2.065-10.721.787-3.345-1.377-5.705-4.23-6.492-7.279-1.77-6.787 3.344-10.426 5.606-10.82 9.148-3.049 13.87 11.312 3.05 12.492 4.918 1.672 9.934-3.344 8.95-8.459 0-5.016-6.196-10.131-13.082-8.066-1.77.492-4.524 1.771-6.59 4.525-2.164 2.754-3.147 7.18-2.065 11.41 1.082 4.328 4.426 8.36 9.049 10.23 4.721 1.77 9.934 1.278 14.262-.984 9.246-4.525 11.115-15.64 9.246-21.836-1.574-6.59-5.213-9.541-5.016-9.64-.099.197-2.656-3.737-8.951-6.098C34.295-.885 24.557-.689 16.885 4.721 9.016 9.934 4.69 19.87 4.984 27.934c-.099 8.164 2.95 14.46 4.623 17.214 6.688 10.229 14.36 13.475 23.901 13.967"></path>
    </OperatingSystem>
  );
};

DebianOS.propTypes = {
  size: PropTypes.number,
  viewBox: PropTypes.string,
  enableBackground: PropTypes.string,
};

export default DebianOS;