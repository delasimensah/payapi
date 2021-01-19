import React from "react";
import Head from "next/head";

//components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="relative overflow-hidden">
      <Head>
        <title>payapi</title>
        <meta name="description" content="Website for payapi" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <Navbar />

      <main className="min-h-screen">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
