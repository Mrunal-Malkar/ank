import { Button } from "@/components/ui/stateful-button";

export function StatefulButton() {
  // dummy API call
  const handleClick = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 4000);
    });
  };
  return (
    <div className="flex w-full items-center justify-start">
      <Button onClick={handleClick}>Save Changes</Button>
    </div>
  );
}
