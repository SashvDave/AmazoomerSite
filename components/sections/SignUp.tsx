import { auth } from "../../firebaseConfig";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import { useRouter } from "next/router";

export default function SignUp() {
  const [user, setUser] = useState(null);
  const [log, setLog] = useState("Logs...");
  const provider = new GoogleAuthProvider();
  const router = useRouter();

  //@ts-ignore
  const addLog = (log) => {
    setLog((prev) => prev + "\n" + JSON.stringify(log));
  };

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        //@ts-ignore
        setUser(result.user);
        router.push({
          pathname: "/Dashboard",
          query: { user: JSON.stringify(result.user) },
        });
      })
      .catch((error) => {
        addLog(error.message);
      });
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center bg-white">
        <img
          src="/amazonSignup.png"
          draggable="false"
          className="h-[3rem] ml-[0.5rem] mt-[0.5rem] mb-[0.5rem]"
          alt="Amazon Logo"
        />
        <h2 className="text-2xl text-center font-bold mb-4">
          Welcome to Amazoomer
        </h2>
        <p className="text-lg mb-4 mt-[2rem]">Get Started By:</p>
        <button
          className="flex items-center justify-center bg-white border border-gray-300 px-4 py-2 rounded-md text-sm text-gray-700"
          onClick={() => signInWithGoogle()}
        >
          <img
            src="/icons/googleLogo.png"
            alt="Google Logo"
            className="w-4 h-4 mr-4"
          />
          Signing in with Google
        </button>
      </div>
    </div>
  );
}
