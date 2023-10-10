import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getFirestore,
  addDoc,
} from "firebase/firestore";
import { app } from "../firebaseConfig";

const db = getFirestore(app);
const API_KEY = "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";

const FormPage = () => {
  const router = useRouter();
  const inputRef = useRef(null);
  const { formId } = router.query;
  const [formData, setFormData] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const [followUpCounter, setFollowUpCounter] = useState(0);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [currentUserName, setCurrentUserName] = useState(null);

  useEffect(() => {
    const auth = getAuth(); // Get the Firebase Auth instance

    // Listen for changes in the user's authentication state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // If user is signed in, retrieve the user's ID and name
        setCurrentUser(user);
        const { uid, displayName } = user;
        setCurrentUserId(uid);
        setCurrentUserName(displayName);
      } else {
        // User is signed out, clear the user's ID and name
        setCurrentUser(null);
        setCurrentUserId(null);
        setCurrentUserName(null);
        router.push("/Authenticate");
      }
    });

    return () => {
      // Clean up the event listener when the component unmounts
      unsubscribe();
    };
  }, []);

  // Fetch form data based on the form ID
  useEffect(() => {
    const fetchFormData = async () => {
      if (formId) {
        try {
          const formDocRef = doc(db, "created_forms", formId);
          const formDocSnap = await getDoc(formDocRef);
  
          if (formDocSnap.exists()) {
            setFormData(formDocSnap.data());
            setMessages([
              {
                message: formDocSnap.data().questionOneText,
                sender: "ChatGPT",
              },
            ]);
          } else {
            // Handle form not found error
          }
        } catch (error) {
          console.error("Error fetching form data:", error);
          // Handle error
        }
      }
    };
  
    fetchFormData();
  }, [formId]);
  

  const [messages, setMessages] = useState([
    {
      message: formData ? formData.questionOneText : "Loading form...",
      sender: "ChatGPT",
    },
  ]);  

  async function saveConversationToFirebase() {
    try {
      // Create a new document in the "conversations" collection
      const conversationRef = await addDoc(collection(db, "completed_forms"), {
        formId,
        formCreatorId: formData.creatorId,
        formTitle: formData.title,
        formObjective: formData.objective,
        formQuestions: formData.questionOneText,
        userId: currentUserId, // Replace with the actual user ID
        userName: currentUserName, // Replace with the actual user name
        conversation: messages,
      });

      console.log(
        "Conversation saved to Firebase with ID:",
        conversationRef.id
      );

      router.push("/dashboard");

    } catch (error) {
      console.error("Error saving conversation to Firebase:", error);
      // Handle error
    }
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const userResponse = inputRef.current.value;
    inputRef.current.value = "";

    const newMessage = {
      message: userResponse,
      sender: "user",
      direction: "outgoing",
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);
    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
    setIsTyping(false);

    if (followUpCounter === 3) {
      await saveConversationToFirebase();
      router.push({
        pathname: "/Dashboard",
        query: { user: JSON.stringify(currentUser) },
      });
    }
  };

  async function processMessageToChatGPT(chatMessages) {
    const apiMessages = chatMessages.map((messageObject) => ({
      role: messageObject.sender === "ChatGPT" ? "assistant" : "user",
      content: messageObject.message,
    }));

    const systemMessage = {
      role: "system",
      content: `You are being integrated into a forms application. The form application allows people to add an objective of their form as well as a few questions they want to ask. Your job is to ask follow-up questions to the user that relate to the objective of the form. It should be like you are a person having a conversation with me. Don't say anything except questions. Ask a max of 3 follow-ups. The objective of the form is ${formData.objective}. The first question I want to ask is ${formData.questionOneText}.`,
    };

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessages],
    };

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    });

    const data = await response.json();

    const generatedMessage = data.choices[0].message.content;

    const newMessage = {
      message: generatedMessage,
      sender: "ChatGPT",
    };

    const updatedMessages = [...chatMessages, newMessage];

    setMessages(updatedMessages);
    setIsTyping(false);
    setFollowUpCounter((prevCounter) => prevCounter + 1);
  }

  return (
    <div>
      <div className="hidden md:block">
      {formData ? (
        <div className="w-full flex flex-col items-center relative bg-[#fafafa]">
          <div className="flex flex-row items-center justify-center bg-[#fafafa]">
            <p className="text-[0.8rem] mt-[0.5rem] mb-[0.5rem]">
              Design Inspiration From
            </p>
            <img
              src="/airtable.png"
              className="h-[0.9rem] ml-[0.5rem] mt-[0.5rem] mb-[0.5rem]"
            />
          </div>
          <div className="flex w-full bg-white h-[7rem] items-center justify-center">
            <p className="text-black text-[1.5rem] font-semibold">
              {formData.title}
            </p>
          </div>
          <div className="flex flex-col items-start justify-center py-10 mr-[20rem]">
            {messages.map((message, index) => (
              <div key={index} className="flex mb-2 ml-[17rem]">
                {message.sender === "user" ? (
                  <p className="border border-gray-300 p-2 text-[0.8rem] rounded-md overflow-wrap break-word w-[25rem]">
                    {message.message}
                  </p>
                ) : index !== 0 ? (
                  <p className="text-black text-[0.8rem] mt-[2rem] overflow-wrap break-word">
                    {message.message}
                  </p>
                ) : (
                  <p className="text-black text-[0.8rem] overflow-wrap break-word">
                    {message.message}
                  </p>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="flex mb-2 ml-[17rem] mt-[2rem]">
                <p className="text-[0.8rem]">Loading...</p>
              </div>
            )}
            {followUpCounter < 3 ? (
              <form
                onSubmit={handleFormSubmit}
                className="flex items-center ml-[17rem]"
              >
                <textarea
                  ref={inputRef}
                  className="border border-gray-300 p-2 rounded-md text-[0.8rem] w-[20rem]"
                  placeholder="Enter your response"
                ></textarea>
                <button type="submit" className="border-none ml-4">
                  <img src="/sendIcon.png" className="h-[1.1rem]" />
                </button>
              </form>
            ) : (
              <form
                onSubmit={handleFormSubmit}
                className="flex items-center ml-[17rem]"
              >
                <textarea
                  ref={inputRef}
                  className="border border-gray-300 p-2 rounded-md text-[0.8rem] w-[20rem]"
                  placeholder="Enter your response"
                ></textarea>
                <button type="submit" className="border-none ml-4">
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      ) : (
        <p>Loading form...</p>
      )}
        </div>
        <div className="md:hidden text-center mt-[10rem]">
          <p>Please open Amazoomer in a laptop browser</p>
        </div>
    </div>
  );
};

export default FormPage;
