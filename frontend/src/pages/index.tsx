import type { NextPage } from "next";
import { useQuery } from "@apollo/client";

import { GetTodosDocument } from "../../graphql/dist/client";
import { GetTodosQuery } from "../../graphql/dist/client";

const Home: NextPage = () => {
  const { data } = useQuery<GetTodosQuery>(GetTodosDocument);
  return (
    <div style={{ margin: "0 auto", width: "1000px" }}>
      {data?.getTodos?.map((todo:any) => (
        <div key={todo.id}>
          <h1>{todo.text}</h1>
          <p>id:{todo.id}</p>
          <p>text:{todo.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;