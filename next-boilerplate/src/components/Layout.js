import React from "react";

const Layout = ({ children }) => {
  return (
    <section className='LayoutWrapper'>
      <div className='LayoutMain'>{children}</div>
    </section>
  );
};

export default Layout;
