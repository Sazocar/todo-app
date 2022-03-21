import React from 'react';
import ContentLoader from "react-content-loader"


const LoadingSkeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={'100%'}
    height={'100%'}
    viewBox="0 0 500 45"
    backgroundColor="#7d7878"
    foregroundColor="#c9c5c5"
    {...props}
  >
    <circle cx="26" cy="25" r="14" />
    <rect x="60" y="14" rx="5" ry="5" width="381" height="22" /> 
    <rect x="467" y="12" rx="5" ry="5" width="22" height="25" /> 
  </ContentLoader>
)

export { LoadingSkeleton };