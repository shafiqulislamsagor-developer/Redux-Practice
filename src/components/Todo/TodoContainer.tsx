import { Button } from "../ui/button";
import TodoCard from "./TodoCard";

export default function TodoContainer() {
  return (
    <div>
      <div className="flex justify-between items-center py-6">
        <Button className="bg-primary-gradient">add todo</Button>
        <Button className="bg-primary-gradient">filter</Button>
      </div>
      <div className="bg-primary-gradient w-full  rounded-xl p-1 ">
        <div className="bg-white w-full h-full space-y-3 p-4 rounded-lg ">
          {/* <div className="bg-white text-2xl font-bold p-5 flex justify-center items-center">
          <h1>There is no task pending</h1>
        </div> */}
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </div>
      </div>
    </div>
  );
}
