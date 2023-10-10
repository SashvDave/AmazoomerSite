import React from "react";

const DownwardFadingBlock: React.FC = () => {
  const handleButtonClick = () => {
    const link = document.createElement("a");
    link.href = "https://www.youtube.com/shorts/Ohva7RapLS4";
    link.target = "_blank";
    link.click();
  };
  return (
    <div className="relative h-[32rem] w-screen">
      <div className="absolute inset-0 bg-gradient-to-b from-[#86BEE7] to-[#86BEE720] to to-[#ffffff]"></div>
      <button onClick={handleButtonClick}>
        <div className="absolute inset-0 flex">
          <div
            //@ts-ignore
            className="bg-white p-6 ml-[5rem] shadow-md w-[20rem] mr-[1rem] mt-[1rem] mb-[1rem]"
            style={{ flexBasis: "calc(33.33% - 1rem)" }}
          >
            <p className="text-[1.5rem] mb-[1rem] font-bold">
              {/* @ts-ignore */}
              Pick up where you left off
            </p>
            <div className="flex flex-row">
              <div className="h-[10rem] w-[17rem]">
                <img
                  src="/1.png"
                  draggable="false"
                  className="h-[10rem] ml-[0.5rem] mt-[0.5rem] mb-[0.5rem]"
                  alt="Amazon Logo"
                />
                <p className="ml-[0.5rem] text-xs">
                  "Actually I went to school in Boston..."
                </p>
              </div>
              <div className="h-[10rem] w-[17rem]">
                <img
                  src="/2.png"
                  draggable="false"
                  className="h-[10rem] ml-[2rem] mt-[0.5rem] mb-[0.5rem]"
                  alt="Amazon Logo"
                />
                <p className="ml-[2rem] text-xs">"Harvard Twerk Team" Pillow</p>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="h-[10rem] w-[17rem]">
                <img
                  src="/3.png"
                  draggable="false"
                  className="h-[10rem] ml-[0.5rem] mt-[3em] mb-[0.5rem]"
                  alt="Amazon Logo"
                />
                <p className="ml-[0.5rem] text-xs">
                  "Hahvid Wicked Smart" t-shirt
                </p>
              </div>
              <div className="h-[10rem] w-[17rem]">
                <img
                  src="/4.png"
                  draggable="false"
                  className="h-[10rem] ml-[2rem] mt-[3rem] mb-[0.5rem]"
                  alt="Amazon Logo"
                />
                <p className="ml-[2rem] text-xs">"Harvard Community Coll...</p>
              </div>
            </div>
          </div>
          <div
            //@ts-ignore
            className="bg-white p-6 ml-[0.2rem] shadow-md w-[20rem] mt-[1rem] mr-[1rem] mb-[1rem]"
            style={{ flexBasis: "calc(33.33% - 1rem)" }}
          >
            <p className="text-[1.5rem] mb-[1rem] font-bold">
              {/* @ts-ignore */}
              Buy Again
            </p>
            <div className="flex flex-row">
              <div className="h-[10rem] w-[17rem]">
                <img
                  src="/me.jpg"
                  draggable="false"
                  className="h-[15rem] ml-[0.5rem] mt-[0.5rem] mb-[0.5rem]"
                  alt="Amazon Logo"
                />
                <p className="ml-[0.5rem] text-xs">A Freshman</p>
              </div>
              <div className="h-[10rem] w-[17rem]">
                <img
                  src="/chains.jpg"
                  draggable="false"
                  className="h-[10rem] ml-[2rem] mt-[0.5rem] mb-[0.5rem]"
                  alt="Amazon Logo"
                />
                <p className="ml-[2rem] text-xs">Shackles</p>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="h-[10rem] w-[17rem]">
                <img
                  src="/3.png"
                  draggable="false"
                  className="h-[0rem] ml-[0.5rem] mt-[3em] mb-[0.5rem]"
                  alt="Amazon Logo"
                />
                {/* <p className="ml-[0.5rem] text-xs">
                "Hahvid Wicked Smart" t-shirt
              </p> */}
              </div>
              <div className="h-[10rem] w-[17rem]">
                <img
                  src="/axe.jpeg"
                  draggable="false"
                  className="h-[8rem] w-[10rem] ml-[2rem] mt-[3rem] mb-[0.5rem]"
                  alt="Amazon Logo"
                />
                <p className="ml-[2rem] text-xs">An Axe</p>
              </div>
            </div>
          </div>
          <div
            //@ts-ignore
            className="bg-white p-6 ml-[0.2rem] shadow-md w-[20rem] mt-[1rem] mr-[1rem] mb-[1rem]"
            style={{ flexBasis: "calc(33.33% - 1rem)" }}
          >
            <p className="text-[1.5rem] mb-[1rem] font-bold">
              {/* @ts-ignore */}
              Things you might like
            </p>
            <div className="flex flex-row">
              <div className="h-[10rem] w-[20rem]">
                <img
                  src="/ratgun.jpeg"
                  draggable="false"
                  className="h-[10rem] ml-[0.5rem] mt-[0.5rem] mb-[0.5rem]"
                  alt="Amazon Logo"
                />
                <p className="ml-[0.5rem] text-xs">Rat Gunner</p>
              </div>
              <div className="h-[10rem] w-[20rem]">
                <img
                  src="/mousetrap.jpg"
                  draggable="false"
                  className="h-[10rem] ml-[2rem] mt-[0.5rem] mb-[0.5rem]"
                  alt="Amazon Logo"
                />
                <p className="ml-[2rem] text-xs">Mouse Trap</p>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="h-[10rem] w-[20rem]">
                <img
                  src="/animalControl.jpeg"
                  draggable="false"
                  className="h-[10rem] ml-[0.5rem] mt-[3em] mb-[0.5rem]"
                  alt="Amazon Logo"
                />
                <p className="ml-[0.5rem] text-xs">Animal Control (Premium)</p>
              </div>
              <div className="h-[10rem] w-[20rem]">
                <img
                  src="/rope.jpg"
                  draggable="false"
                  className="h-[10rem] ml-[2rem] mt-[3rem] mb-[0.5rem]"
                  alt="Amazon Logo"
                />
                <p className="ml-[2rem] text-xs">Rope</p>
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default DownwardFadingBlock;
