
import { AnimatedTooltip } from "./ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Meet mhatre",
    designation: "UI designer",
    image:
      "meet.jpg",
  },
  {
    id: 2,
    name: "Mrunal malkar",
    designation: "Developer",
    image:
      "mrunal.png",
  },
  {
    id: 3,
    name: "Chaitanya chikale",
    designation: "Product & Design",
    image:
      "chaitanya.jpg",
  },
  {
    id: 4,
    name: "Shubham patra",
    designation: "Manage & Support",
    image:
      "shubham.jpg",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className={`flex h-full mt-7 w-full`}>
      <AnimatedTooltip items={people} />
    </div>
  );
}
