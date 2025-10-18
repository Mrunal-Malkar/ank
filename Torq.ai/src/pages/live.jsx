import CircularOrbit from "@/components/circularOrbit";
import NeonOrb from "@/components/torqCircle";
import { useState } from "react";
import { Settings } from "lucide-react";
import DropdownHelperRadio from "../components/dropdownRadio";
import RadioGroup from "../components/radioGroup";
import { StatefulButton } from "../components/statefullButton";

const Live = () => {
  const [active, setActive] = useState(false);
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

  async function askAi() {}

  return (
    <div className="h-[100dvh] w-screen bg-green-200 flex justify-between">
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
                placeholder="enter your first name"
                className="w-full text-sm p-2 rounded-xl border-t-2 border-r-2 border-gray-500 text-gray-400 outline-none focus:border-blue-600 hover:border-blue-600"
              />
            </div>
            {/*Who are you?*/}
            <div className="w-full flex flex-col">
              <h3 className="font-semibold text-lg text-neutral-400">
                Who are you?
              </h3>
              <DropdownHelperRadio />
            </div>
            <div className="w-full flex flex-col">
              <h3 className="font-semibold text-lg text-neutral-400">
                Language preference:
              </h3>
              <div className="flex justify-start gap-x-4">
                <RadioGroup
                  values={["Hindi", "English"]}
                  setDefault="English"
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
                  setDefault="Young"
                  onChange={(val) => {
                    setLanguage(val);
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col justify-start gap-y-1 items-start">
              <StatefulButton />
              <h3 className="text-sm text-gray-400">don't forget to save changes, when done!</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Live;
