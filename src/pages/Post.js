import { useParams } from "react-router-dom";
import axios from "axios";
import React from "react";
import Button from "react-bootstrap/Button";
import "../index.css";
import { Link, Route, Routes } from "react-router-dom";

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
      <div className="row">
        <div className="col-6 text-center d-flex justify-content-start">
          <span
            className="square bg-primary rounded-pill d-flex align-items-center justify-content-center"
            style={{ width: "150px", height: "50px", display: "inline-flex" }}
          >
            <Link to={"/postlist"}>
              <Button>Back</Button>
            </Link>
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center d-flex align-items-center justify-content-center">
          <span
            className="square bg-primary rounded-pill d-flex align-items-center justify-content-center"
            style={{ width: "200px", height: "50px" }}
          >
            <h1>Post {id}</h1>
          </span>
        </div>
      </div>
      <br></br>
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
