import React from "react";

const blogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  return <blogContext.Provider value="5">{children}</blogContext.Provider>;
};

export default blogContext;
