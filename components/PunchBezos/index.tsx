import React, { useState } from "react";

const PunchJeffBezos: React.FC = () => {
  const [punched, setPunched] = useState(false);

  const handlePunch = () => {
    setPunched(true);

    // After a delay, reset the punched state to revert the animation
    setTimeout(() => {
      setPunched(false);
    }, 1000); // Adjust the delay as needed
  };

  return (
    <div className="relative h-[500px]">
      <div
        className={`absolute transition-transform ${punched ? 'translate-x-[700px]' : ''}`}
        style={{ zIndex: punched ? 2 : 1 }}
      >
        <img
          onClick={handlePunch}
          src={punched ? "punchedFist.png" : "fist.png"}
          alt={punched ? "Punched Fist" : "Fist"}
          className="h-auto cursor-pointer"
        />
      </div>
      <div className="absolute ml-[40rem]">
        {punched ? (
          <img
            src="jeffPunched.jpg"
            alt="Punched Jeff Bezos"
            className="h-auto"
          />
        ) : (
          <img
            src="jeff.png"
            alt="Jeff Bezos"
            className="h-auto opacity-100 transition-opacity"
          />
        )}
      </div>
    </div>
  );
};

export default PunchJeffBezos;
