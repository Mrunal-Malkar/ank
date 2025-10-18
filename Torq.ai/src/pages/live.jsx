import CircularOrbit from "@/components/circularOrbit";
import NeonOrb from "@/components/torqCircle";
import { useEffect, useState } from "react";
import { Settings } from "lucide-react";
import DropdownHelperRadio from "../components/dropdownRadio";
import RadioGroup from "../components/radioGroup";
import { StatefulButton } from "../components/statefulButton";
import {returnPrompt} from "../lib/askingLlm"

const Live = () => {
  const [active, setActive] = useState(false);
  const [language, setLanguage] = useState();
  const [age, setAge] = useState();
  const [firstName, setFirstName] = useState();
  const [profession, setProfession] = useState();
  const [userQuestion, setUserQuestion] = useState(null);
  const [heardHotword, setHeardHotword] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [listening, setListening] = useState(false);

  const hotWords = [
    "hey torq",
    "torq",
    "hello torq",
    "hi torq",
    "hey talk",
    "talk",
    "hello talk",
    "hi talk",
    "hey talk",
  ];

  function speakFunc(text, voiceIndex = 0, pitch = 1, rate = 1) {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      const voices = window.speechSynthesis.getVoices();

      if (voices.length > voiceIndex) {
        utterance.voice = voices[voiceIndex];
      }
      utterance.pitch = pitch;
      utterance.rate = rate;

      window.speechSynthesis.speak(utterance);
    } else {
      console.warn("Speech Synthesis API not supported.");
    }
  }

  async function askAi() {
    // const question=
  }

  function Listen() {
    if (
      !("speechRecognition" in window || "webkitSpeechRecognition" in window)
    ) {
      console.error("This browser does not support speech recognition api");
      return;
    }

    const speechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new speechRecognition();
    recognition.interimResults = false;
    recognition.continuous = true;
    recognition.lang = "en-Us";
    if (speaking) return;
    recognition.start();
    console.log("started recognition...");

    recognition.onresult = (event) => {
      const transcript = event.results[event.results.length - 1][0].transcript
        .trim()
        .toLowerCase();
      console.log("Heard:", transcript);
      if (!heardHotword) {
        for (let n = 0; n < hotWords.length + 1; n++) {
          if (heardHotword) return;
          if (transcript == hotWords[n]) {
            console.log("🔥 Hotword detected!", transcript);
            setHeardHotword(true);
            break;
          }
        }
      } else {
        setUserQuestion(transcript);
        console.log("your question is :", transcript);
      }
    };

    recognition.onerror = (e) => console.warn("Speech error:", e);

    recognition.onend = () => {
      if (!heardHotword) console.log("Recognition ended. Restarting...");
      recognition.start(); // restart loop
    };

    // recognitionRef.current = recognition;
  }

  useEffect(() => {
    const age = localStorage.getItem("age");
    const firstName = localStorage.getItem("name");
    const profession = localStorage.getItem("profession");
    const language = localStorage.getItem("language");

    setLanguage(language);
    setFirstName(firstName);
    setAge(age);
    setProfession(profession);
  }, []);

  useEffect(() => {
    if (userQuestion) {
      askAi();
    }
  }, [userQuestion]);

  async function askAi() {
    if (!userQuestion) return;
    const details = {
      name: firstName,
      age: age,
      profession: profession,
      language_Preferance: language,
    };
    const res = await fetch("localhost:3000/res", {
      method: "POST",
      data: { prompt: returnPrompt(details, userQuestion) },
    });
    if(res){
      speakFunc(res,1,1,1.2);
    }
  };

  askAi();
  return (
    <div className="h-[100dvh] w-screen flex justify-between">
      <div className="w-[15%] bg-yellow-300 h-full"></div>
      <div className="w-[60%] h-full flex flex-col bg-black justify-center items-center">
        <NeonOrb active={active} />
        <button
          className="font-semibold px-6 py-2 text-white/90 ms-12"
          onClick={Listen}
        >
          Ask
        </button>
      </div>
      <div className="w-[25%] flex items-end">
        <div className="h-[90dvh] bg-black w-full">
          <div className="flex flex-col gap-0.5">
            <div className="text-gray-300 flex items-center justify-start gap-x-0.">
              <h1 className="text-xl font-bold">Torq Settings</h1>{" "}
              <Settings className="size-10 self-center mt-2.5" />
            </div>
            <p className="text-lg font-semibold text-gray-400">
              Adjust the specifications according to you and don't forget to
              click "Save" when done.
            </p>
          </div>
          {/* main body */}
          <div className="w-full h-max flex flex-col bg-gray pt-4 gap-y-10">
            {/*Name*/}
            <div className="flex flex-col w-full">
              <h3 className="font-semibold text-lg text-neutral-400">
                First name
              </h3>
              <input
                type="text"
                placeholder={localStorage.getItem("name") ?? "Unknown"}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full text-sm p-2 rounded-xl border-t-2 border-r-2 border-gray-500 text-gray-400 outline-none focus:border-blue-600 hover:border-blue-600"
              />
            </div>
            {/*Who are you?*/}
            <div className="w-full flex flex-col">
              <h3 className="font-semibold text-lg text-neutral-400">
                Who are you?
              </h3>
              <DropdownHelperRadio
                onChange={(val) => {
                  setProfession(val);
                }}
              />
            </div>
            <div className="w-full flex flex-col">
              <h3 className="font-semibold text-lg text-neutral-400">
                Language preference:
              </h3>
              <div className="flex justify-start gap-x-4">
                <RadioGroup
                  values={["Hindi", "English"]}
                  setDefault={language}
                  onChange={(val) => {
                    setLanguage(val);
                  }}
                />
              </div>
            </div>
            <div className="w-full flex flex-col">
              <h3 className="font-semibold text-lg text-neutral-400">
                How old are you?
              </h3>
              <div className="flex justify-start gap-x-4">
                <RadioGroup
                  values={["Teen", "Young", "Old"]}
                  setDefault={age}
                  onChange={(val) => {
                    setAge(val);
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col justify-start gap-y-1 items-start">
              <StatefulButton
                age={age}
                profession={profession}
                firstName={firstName}
                language={language}
              />
              <h3 className="text-sm text-gray-400">
                don't forget to save changes, when done!
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Live;
