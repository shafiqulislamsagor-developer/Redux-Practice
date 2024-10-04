import TodoContainer from "@/components/Todo/TodoContainer";
import Container from "@/components/ui/Container";

export default function Todo() {
  return (
    <Container>
      <h1 className="text-center text-3xl my-10 font-semibold">My Todo</h1>
      <TodoContainer />
    </Container>
  );
}
