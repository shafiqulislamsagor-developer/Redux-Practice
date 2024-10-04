import Delete from "@/svg/Delete";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import Edit from "@/svg/Edit";

export default function TodoCard() {
  return (
    <div className="bg-white rounded-md flex justify-between items-center p-3 border">
      <Checkbox />

      <p className="font-semibold">Todo tile</p>
      <p>Time</p>
      <p>description</p>
      <div className="space-x-4">
        <Button className="bg-red-500">
          <Delete />
        </Button>
        <Button className="bg-purple-700">
          <Edit />
        </Button>
      </div>
    </div>
  );
}
