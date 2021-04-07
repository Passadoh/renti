import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  // const [showNotice, setShowNotice] = useCookie("showNotice", 1);
  return (
    <>
      {/*{showNotice ? <CookieNotice set={setShowNotice} /> : ""}*/}
      <Header />
      <main css={{ minHeight: "80vh" }}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
