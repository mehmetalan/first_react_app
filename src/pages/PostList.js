import axios from "axios";
import React from "react";
import { Table }  from 'react-bootstrap'; 
import Button from 'react-bootstrap/Button';
import { Link, Route, Routes } from 'react-router-dom';
import '../index.css';

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export function PostList() {
    let listItems
    const [posts, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
        setPost(response.data);
        listItems = response.data.map(record => (
            <tr>
              <td>{record.title}</td>
              <td>{record.body}</td>
            </tr>
          ))
        });
    }, []);

    if (!posts) return <></>;

    return (
        <div className="allPosts">
          <h2 className="tableheader">All Posts</h2>
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
                    <Link to={'post/' + post.id}>
                      <Button bsStyle="primary">Detay</Button>
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