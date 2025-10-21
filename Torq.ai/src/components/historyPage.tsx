import { AnimatedModal } from "./Modal";

type QandAinterface = string[];

const HistoryPage = ({ className }: { className: string }) => {
  const questions: QandAinterface = [];
  const answers: QandAinterface = [];

  for (let i = 1; i < 8; i++) {
    const question = localStorage.getItem(`question${i}`);
    const answer = localStorage.getItem(`answer${i}`);
    if (question && answer) {
      questions.push(question);
      answers.push(answer);
    }
  }

  return (
    <div
      className={`w-[15%] bg-black h-full flex items-end ${
        className ? className : ""
      }`}
    >
      <div className="h-[90dvh] w-full flex flex-col justify-start items-start gap-y-3">
        <h1 className="text-xl text-neutral-100 w-full text-center">
          Chat-History
        </h1>
        <div className="w-full h-max flex flex-col items-start justify-start">
          {questions.length>0?questions.map((question, index) => {
            return (
              <AnimatedModal
                title={
                  question.slice(0, 30) + (question.length > 30 ? "..." : "")
                }
                subHeading={question}
                content={answers[index]}
              />
            );
          }):
          <div className="w-full text-center bg-gray-500 rounded-2xl text-neutral-300">
            Get-started by asking questions!
          </div>
          }
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
