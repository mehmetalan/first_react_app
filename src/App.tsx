import { FC } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import styled from "styled-components";
import Users from "./pages/Users";
import Posts from "./pages/Posts";

const Container = styled.div`
  width: min(1200px, 95vw);
  margin: 0 auto;
  position: relative;
  min-height: 100vh;
  padding-top: 9rem;
`;

const App: FC = () => {
  return (
    <>
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/users" element={<Users />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="*" element={<Navigate to="/users" />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
};

export default App;
