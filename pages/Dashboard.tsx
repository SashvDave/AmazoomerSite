import { Urbanist } from "next/font/google";
const urbanist = Urbanist({ subsets: ["latin"] });
import React, { useRef, useState } from "react";
import Head from "next/head";
import DashboardPage from "~/components/sections/Dashboard";

const Dashboard = () => {
  return (
    <>
      <Head>
        <title>Amazoomer</title>
        <meta
          name="description"
          content="Amazoomer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" />
      </Head>
      <main
        className={`${urbanist.className} text-fg-primary w-screen min-h-screen`}
      >
        <div>
          <div className="hidden md:block">
            <DashboardPage />
          </div>
          <p className="md:hidden text-center mt-[10rem]">
            Please open Amazoomer in a laptop browser
          </p>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
