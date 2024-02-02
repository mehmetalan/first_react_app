import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../app/store";
import { fetchPosts } from "../features/posts/postsSlice";
import {
  ListContainer,
  ListItemsHeader,
} from "../components/List/listElements";
import PostsList from "../components/List/PostsList";
import React from "react";

const Posts: FC = () => {
  const postsState = useSelector((state: RootState) => state.posts);
  const { posts } = postsState;

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const getPosts = async () => {
      console.log("posts");
      if (!posts) {
        dispatch(fetchPosts());
      }
    };

    getPosts();
  }, [posts, dispatch]);

  return (
    <ListContainer>
      <ListItemsHeader>
        <h2>Posts ({posts?.length})</h2>
      </ListItemsHeader>

      {posts && <PostsList posts={posts} />}
    </ListContainer>
  );
};

export default Posts;
