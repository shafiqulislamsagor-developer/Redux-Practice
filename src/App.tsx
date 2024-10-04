import { useGetAllCommentsQuery } from "./redux/api/commentApi";
import { useGetAllPostQuery } from "./redux/api/postApi";

function App() {
  const {data,isLoading} = useGetAllPostQuery({})
  const {data:commentData} = useGetAllCommentsQuery({})
  console.log(data ,commentData)

  return (
    <>
    {!isLoading ?  <h1>ists worrking</h1> : <h1>loading............</h1>}
      <h1>hello</h1>

    </>
  );
}

export default App;
