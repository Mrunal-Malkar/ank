import { Button } from "../components/ui/stateful-button";

export function StatefulButton({ language, age, firstName, profession }:{language:string,age:string,firstName:string,profession:string}) {
  // dummy API call

  async function setItems() {
    localStorage.setItem("name", firstName??"Unknown");
    localStorage.setItem("language", language??"English");
    localStorage.setItem("profession", profession??"Student");
    localStorage.setItem("age", age??"Young");
  }

  const handleClick = () => {
    return new Promise((resolve) => {
      setItems();
      setTimeout(resolve, 4000);
    });
  };

  return (
    <div className="flex w-full items-center justify-start">
      <Button onClick={handleClick}>Save Changes</Button>
    </div>
  );
}
