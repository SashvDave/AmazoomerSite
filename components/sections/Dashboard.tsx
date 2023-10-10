import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { getFirestore, addDoc, updateDoc, doc } from "firebase/firestore";
import AmazonSearchBar from "../SearchBar";
import DownwardFadingBlock from "../FadingBlock";
import PunchJeffBezos from "../PunchBezos";

const db = getFirestore(app);

const DashboardPage = () => {
  // const [user, setUser] = useState(null);
  // const [uidFetched, setUidFetched] = useState(false);
  const [adBreak, setAdBreak] = useState(false);
  const router = useRouter();

  // useEffect(() => {
  //   const { user: userParam } = router.query;
  //   if (userParam) {
  //     {
  //       /* @ts-ignore */
  //     }
  //     setUser(JSON.parse(Array.isArray(userParam) ? userParam[0] : userParam));
  //   } else {
  //   }
  // }, [router.query]);

  // useEffect(() => {
  //   {
  //     /* @ts-ignore */
  //   }
  //   if (user && user.uid) {
  //     setUidFetched(true);
  //   }
  // }, [user]);

  const handleLogout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      router.push("/Authenticate");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="w-full flex flex-col relative bg-[#fafafa]">
        <>
          <div className="flex flex-row items-center h-[4rem] bg-[#131921]">
            <img
              src="/amazon.png"
              draggable="false"
              className="h-[3rem] ml-[0.5rem] mt-[0.5rem] mb-[0.5rem]"
              alt="Amazon Logo"
            />
            <div>
              <p className="text-[0.8rem] ml-5 text-white">
                <span style={{ fontWeight: "400" }}>
                  Deliver to Sashv
                </span>
                <div>
                  <span style={{ fontWeight: "bold" }}>
                    14 Plympton (The Crimson)
                  </span>
                </div>
              </p>
            </div>
            <div className="w-[40rem] ml-[3rem] mt-[2rem] mb-[2rem]">
              <AmazonSearchBar />
            </div>
            <img
              src="/language.png"
              draggable="false"
              className="h-[3rem] ml-[1rem] mb-[0.5rem]"
            />
            <div>
              <p className="text-[0.8rem] ml-5 text-white">
                <span style={{ fontWeight: "400" }}>
                  Hello, Sashv
                </span>
                <div>
                  <span style={{ fontWeight: "bold" }}>Accounts & Lists</span>
                </div>
              </p>
            </div>
            <div>
              <p className="text-[0.8rem] ml-5 text-white">
                <span style={{ fontWeight: "400" }}>Returns</span>
                <div>
                  <span style={{ fontWeight: "bold" }}>& Orders</span>
                </div>
              </p>
            </div>
            <img
              src="/cart.png"
              draggable="false"
              className="mt-[0.5rem] h-[3rem] ml-[1rem] mb-[0.5rem]"
            />
          </div>
          {/* <button onClick={handleLogout}>
            <p className="text-[0.8rem] mb-2">Logout</p>
          </button> */}
        </>
        <>
          <div className="flex flex-row items-center h-[2.5rem] bg-[#222f3e]">
            <div>
              <div>
                <img
                  src="/menuIcon.png"
                  draggable="false"
                  className="h-[1.5rem] ml-[1rem] mt-[0.5rem] mb-[0.5rem]"
                />
              </div>
            </div>
            <p className="text-[1rem] ml-2 text-white">
              <span style={{ fontWeight: "bold" }}>All</span>
            </p>
            <p className="text-[0.8rem] ml-[2rem] text-white">
              <span style={{ fontWeight: "400" }}>
                Personal Satisfaction Products
              </span>
            </p>
            <p className="text-[0.8rem] ml-[2rem] text-white">
              <span style={{ fontWeight: "400" }}>Revenge Products</span>
            </p>
            <p className="text-[0.8rem] ml-[2rem] text-white">
              <span style={{ fontWeight: "400" }}>Privates</span>
            </p>
            <p className="text-[0.8rem] ml-[2rem] text-white">
              <span style={{ fontWeight: "400" }}>Comedic</span>
            </p>
            <p className="text-[0.8rem] ml-[2rem] text-white">
              <span style={{ fontWeight: "400" }}>Useful</span>
            </p>
            <p className="text-[0.8rem] ml-[2rem] text-white">
              <span style={{ fontWeight: "400" }}>Useless</span>
            </p>
            <p className="text-[0.8rem] ml-[2rem] text-white">
              <span style={{ fontWeight: "400" }}>Piss off the wife</span>
            </p>
            <p className="text-[0.8rem] ml-[2rem] text-white">
              <span style={{ fontWeight: "400" }}>Mess with a friend</span>
            </p>
            <p className="text-[0.8rem] ml-[2rem] text-white">
              <span style={{ fontWeight: "400" }}>Cover up a prank</span>
            </p>
            <p className="text-[0.8rem] ml-[2rem] text-white">
              <span style={{ fontWeight: "400" }}>Super secret</span>
            </p>
          </div>
        </>
        <>
          <div className="bg-white">
            <img
              src="/bookImage.png"
              draggable="false"
              className="mt-[-1rem] w-full mb-[0.5rem]"
            />
            <div className="mt-[-1.5rem]">
              <DownwardFadingBlock />
            </div>
            {!adBreak && (
              <button onClick={() => setAdBreak(true)}>
              <div className="bg-white flex flex-row">
                
                <p className="text-[5rem] ml-[5rem] mt-[10rem]">Ad Break!!</p>
                <img
                  src="/adImg.png"
                  draggable="false"
                  className="mt-[-1rem] ml-[10rem] mb-[0.5rem]"
                />
                
              </div>
              </button>
            )}
            {adBreak && (
              <>
                <div className="flex w-full bg-white items-center justify-center mb-[2rem]">
                  <p className="text-black text-[1.5rem] font-semibold mt-[2rem]">
                    {/* @ts-ignore */}
                    {user.displayName.split(" ")[0]}, let's let off some steam
                    and beat the boss.
                  </p>
                </div>
                <PunchJeffBezos />
                <div className="flex w-full bg-white items-center justify-center mt-[5rem] mb-[2rem]">
                  <p className="text-black text-[1.5rem] font-semibold mt-[2rem] mb-[2rem]">
                    {/* @ts-ignore */}
                    Let's get back to it. Here are some audio books you may like:
                  </p>
                </div>
                <div className="flex flex-row justify-center mb-[5rem] mt-[2rem]">
                  <div className="flex flex-col items-center">
                    <img
                      src="/podcast1.png"
                      draggable="false"
                      className="mt-[-1rem] mb-[0.5rem] h-[20rem] w-[17rem]"
                    />
                    <p className="text-[1.5rem]">Pigolomania</p>
                  </div>
                  <div className="ml-[2rem] flex flex-col items-center">
                    <img
                      src="/podcast2.png"
                      draggable="false"
                      className="mt-[-1rem] mb-[0.5rem] h-[20rem] w-[17rem]"
                    />
                    <p className="text-[1.5rem]">SMS</p>
                  </div>
                  <div className="ml-[2rem] flex flex-col items-center">
                    <img
                      src="/podcast3.png"
                      draggable="false"
                      className="mt-[-1rem] mb-[0.5rem] h-[20rem] w-[17rem]"
                    />
                    <p className="text-[1.5rem] w-[10rem] text-center">Never will I ever be a gov major ('*concentrator') (stfu)</p>
                  </div>
                  <div className="ml-[2rem] flex flex-col items-center">
                    <img
                      src="/podcast4.png"
                      draggable="false"
                      className="mt-[-1rem] mb-[0.5rem] h-[20rem] w-[17rem]"
                    />
                    <p className="text-[1.5rem] w-[10rem] text-center">True Love b/w Dog & Donkey</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </>
        <>
          <div className="flex flex-col py-[2rem] items-center bg-[#131921]">
            <div className="flex flex-row">
              <div className="flex flex-col">
                <p className="text-[0.9rem] text-white">
                  <span style={{ fontWeight: "bold" }}>Get to Know Us</span>
                  <div className="flex flex-col">
                    <span style={{ fontWeight: "400" }}>Careers</span>
                    <span style={{ fontWeight: "400" }}>Amazon Newsletter</span>
                    <span style={{ fontWeight: "400" }}>About Amazon</span>
                    <span style={{ fontWeight: "400" }}>Accesibility</span>
                    <span style={{ fontWeight: "400" }}>Sustainability</span>
                    <span style={{ fontWeight: "400" }}>Press Center</span>
                    <span style={{ fontWeight: "400" }}>
                      Investor Relations
                    </span>
                    <span style={{ fontWeight: "400" }}>Amazon Devices</span>
                    <span style={{ fontWeight: "400" }}>Amazon Science</span>
                  </div>
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-[0.9rem] ml-[3.5rem] text-white">
                  <span style={{ fontWeight: "bold" }}>Make Money With Us</span>
                  <div className="flex flex-col">
                    <span style={{ fontWeight: "400" }}>Start Selling</span>
                    <span style={{ fontWeight: "400" }}>Sell Apps</span>
                    <span style={{ fontWeight: "400" }}>Supply to Amazon</span>
                    <span style={{ fontWeight: "400" }}>
                      Protect & Build Your Brand
                    </span>
                    <span style={{ fontWeight: "400" }}>
                      Become an affiliate
                    </span>
                    <span style={{ fontWeight: "400" }}>
                      Become a Dilvery Driver
                    </span>
                    <span style={{ fontWeight: "400" }}>
                      Start Package Delivery
                    </span>
                    <span style={{ fontWeight: "400" }}>
                      Advertise Your Products
                    </span>
                    <span style={{ fontWeight: "400" }}>Self-Publish</span>
                    <span style={{ fontWeight: "400" }}>
                      Host an Amazon Hub
                    </span>
                    <span style={{ fontWeight: "400" }}>See More</span>
                  </div>
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-[0.9rem] ml-[3.5rem] text-white">
                  <span style={{ fontWeight: "bold" }}>
                    Amazon Payment Products
                  </span>
                  <div className="flex flex-col">
                    <span style={{ fontWeight: "400" }}>Amazon Visa</span>
                    <span style={{ fontWeight: "400" }}>Amazon Store Card</span>
                    <span style={{ fontWeight: "400" }}>
                      Amazon Secured Card
                    </span>
                    <span style={{ fontWeight: "400" }}>
                      Amazon Business Card
                    </span>
                    <span style={{ fontWeight: "400" }}>Shop with Points</span>
                    <span style={{ fontWeight: "400" }}>
                      Credit Card Marketplace
                    </span>
                    <span style={{ fontWeight: "400" }}>
                      Reload Your Balance
                    </span>
                    <span style={{ fontWeight: "400" }}>Gift Cards</span>
                    <span style={{ fontWeight: "400" }}>
                      Amazon Currency Converter
                    </span>
                  </div>
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-[0.9rem] ml-[3.5rem] text-white">
                  <span style={{ fontWeight: "bold" }}>Let Us Help You</span>
                  <div className="flex flex-col">
                    <span style={{ fontWeight: "400" }}>Your Account</span>
                    <span style={{ fontWeight: "400" }}>Your Orders</span>
                    <span style={{ fontWeight: "400" }}>
                      Shipping Rates & Policies
                    </span>
                    <span style={{ fontWeight: "400" }}>Amazon Prime</span>
                    <span style={{ fontWeight: "400" }}>
                      Returns & Replacements
                    </span>
                    <span style={{ fontWeight: "400" }}>
                      Manage Your Content
                    </span>
                    <span style={{ fontWeight: "400" }}>Your Recalls</span>
                    <span style={{ fontWeight: "400" }}>Help</span>
                  </div>
                </p>
              </div>
            </div>
            <img
              src="/amazon.png"
              draggable="false"
              className="h-[3rem] w-[7rem] ml-[0.5rem] mt-[2rem] mb-[0.5rem]"
              alt="Amazon Logo"
            />
          </div>
          {/* <button onClick={handleLogout}>
            <p className="text-[0.8rem] mb-2">Logout</p>
          </button> */}
        </>
    </div>
  );
};

export default DashboardPage;
