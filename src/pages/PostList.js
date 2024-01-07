import axios from "axios";
import React from "react";
import { Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link, Route, Routes } from "react-router-dom";
import "../index.css";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export function PostList() {
  const [posts, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!posts) return <></>;

  return (
    <div className="allPosts">
      <div className="row" style={{ display: "flex" }}>
        <div
          className="col-6"
          style={{ display: "flex", alignItems: "center" }}
        >
          <h2 className="tableheader">All Posts</h2>
        </div>
        <div
          className="col-6"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Link to={"/addpost"}>
            <Button style={{ marginRight: "1em" }}>New Post</Button>
          </Link>
        </div>
      </div>

      <Table striped bordered hover className="custom-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Text</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => {
            return (
              <>
                <tr>
                  <th>{post.title}</th>
                  <th>{post.body}</th>
                  <Link to={"/post/" + post.id}>
                    <Button bsStyle="primary">Detail</Button>
                  </Link>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
      <Button>AA</Button>
    </div>
  );
}
