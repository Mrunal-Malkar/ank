import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "./ui/animated-modal";

export function AnimatedModal({
  title,
  subHeading,
  content,
}: {
  title: string;
  subHeading: string;
  content: string;
}) {
  return (
    <div className="py-2 flex w-full h-min items-center justify-center">
      <Modal>
        {/* Trigger Button */}
        <ModalTrigger className="bg-white text-neutral-800 light:bg-white light:text-black flex justify-center items-center group/modal-btn px-4 py-2 rounded-lg transition-all duration-300 border border-neutral-800 light:border-neutral-200">
          <span className="text-neutral-200 group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            {title}
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white light:text-black z-20">
            ✈️
          </div>
        </ModalTrigger>

        {/* Modal Body */}
        <ModalBody>
          <ModalContent className="bg-black text-white light:bg-white light:text-black border border-neutral-800 light:border-neutral-200 rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-300">
            <h4 className="text-lg md:text-2xl font-bold text-center mb-8">
              {subHeading}{" "}
              <span className="px-1 py-0.5 rounded-md bg-neutral-900 light:bg-gray-100 border border-neutral-700 light:border-gray-200">
                Answer:
              </span>{" "}
              📃
            </h4>
            <h3 className="text-md md:text-xl font-semibold text-center mb-2">
              {content}
            </h3>
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
}
