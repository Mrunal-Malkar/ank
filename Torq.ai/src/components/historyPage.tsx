import { AnimatedModal } from "./Modal";

type QandAinterface =[
  {question:string,answer:string}
]

interface propInterface{
  className:string,
  qAnda:QandAinterface
}

const HistoryPage = ({ className,qAnda }:propInterface) => {

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
          {qAnda.length>0?qAnda.map((array,index) => {
            return (
              <AnimatedModal
              key={index}
                title={
                  (array.question).slice(0, 30) + ((array.question).length > 30 ? "..." : "")
                }
                subHeading={array.question}
                content={array.answer}
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
