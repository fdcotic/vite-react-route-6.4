import { useLoaderData } from "react-router-dom";

const Post = () =>{

    const {posts} = useLoaderData();

    return (
      <>
        <h1>
          {posts.id} -{posts.title}
        </h1>
        <p>{posts.body}</p>
      </>
    );
}

export default Post;

export const loaderPost = async ({params}) =>{
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const posts = await res.json();
  return { posts };
}