import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { Urbanist } from "next/font/google";
import SignUp from "~/components/sections/SignUp";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../firebaseConfig";

const urbanist = Urbanist({ subsets: ["latin"] });

const Authenticate = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //@ts-ignore
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

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
        {/* <GPT /> */}
        <div>
          <div className="hidden md:block">
            <SignUp />
          </div>
          <p className="md:hidden text-center mt-[10rem]">
            Please open Amazoomer in a laptop browser
          </p>
        </div>
      </main>
    </>
  );
};

export default Authenticate;
