import React from "react";

const SectionHeader = (prop:{smallerHeading:string,BiggerHeading:string}) => {
  return (
    <div>
      <h5 className="font-sans text-center mb-0 text-blue-700 uppercase font-medium">
        {prop.smallerHeading}
      </h5>
      <h2 className="font-sora text-center mt-2 text-gray-900 uppercase font-bold text-2xl">
      {prop.BiggerHeading}
      </h2>
    </div>
  );
};

export default SectionHeader;
