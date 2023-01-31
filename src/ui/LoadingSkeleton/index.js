import React from "react";
import ContentLoader from "react-content-loader";

const LoadingSkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={"100%"}
    height={"100%"}
    viewBox="0 0 500 47"
    backgroundColor="#7d7878"
    foregroundColor="#c9c5c5"
    {...props}
  >
    <circle cx="28" cy="25" r="15" />
    <rect x="56" y="14" rx="5" ry="5" width="435" height="22" />
    {/* <rect x="470" y="12" rx="5" ry="5" width="22" height="25" />  */}
  </ContentLoader>
);

export { LoadingSkeleton };
