import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { useNavigate } from "react-router-dom";

const itemsArray = [
  {
    problem: "Vocal Communication Gap",
    about: "-removes the need to type or read",
    imageUrl:
      "https://st2.depositphotos.com/1000423/8329/i/450/depositphotos_83290560-stock-photo-communication-concept.jpg",
    externalLink:
      "https://ocasta.com/glossary/internal-comms/what-is-a-communication-gap/",
  },
  {
    problem:"Lack of Personalization",
    about:"-Learns who you are and gives you tailored guidance",
    imageUrl:"https://cloudester.com/wp-content/uploads/2024/02/CustomAISolutions.webp",
    externalLink:"https://www.zendesk.com/in/blog/complete-guide-personalization/",
  },
  {
    problem:"Language Barriers",
    about:"–supports regional languages so anyone can use it confidently",
    imageUrl:"https://static.vecteezy.com/system/resources/previews/003/530/223/non_2x/language-barriers-gradient-icon-for-dark-theme-vector.jpg",
    externalLInk:"https://en.wikipedia.org/wiki/Language_barrier"
  }
];

export function ThreeDCard() {
  const navigate = useNavigate();
  return (
    <div className="flex xl:flex-row flex-col justify-around">
      {itemsArray ? (
        itemsArray.map((items) => {
          return (
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-4 xl:p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {items.problem ?? ""}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {items.about ?? ""}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src={items.imageUrl ?? ""}
                    height="1000"
                    width="1000"
                    className="md:h-52 h-60 xl:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    as="a"
                    href={items.externalLink ?? ""}
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    Learn now →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    onClick={() => {
                      navigate("/live");
                    }}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-neutral-400 text-white text-xs font-bold"
                  >
                    Try Live
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          );
        })
      ) : (
        <h1>null</h1>
      )}
    </div>
  );
}
