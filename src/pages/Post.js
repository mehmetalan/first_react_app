import { useParams } from "react-router-dom";
import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts/";

export function Post() {
  const { id } = useParams();

  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL + id).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return <></>;

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-6 text-center">
          <span
            className="square bg-primary rounded-pill"
            style={{ width: "250px", display: "inline-block" }}
          >
            <h1>Post {id}</h1>
          </span>
        </div>
      </div>
      <div className="row">
        <span className="square border border-dark">
          <div className="col-12">
            <p>Post Title: {post.title}</p>
            <p>Post Body: {post.body}</p>
          </div>
        </span>
      </div>
    </div>
  );
}
