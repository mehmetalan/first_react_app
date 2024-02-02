import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../app/store";
import { fetchUsers } from "../features/users/usersSlice";
import {
  ListContainer,
  ListItemsHeader,
} from "../components/List/listElements";
import UsersList from "../components/List/UsersList";
import React from "react";

const Users: FC = () => {
  const usersState = useSelector((state: RootState) => state.users);
  const { users } = usersState;

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const getUsers = async () => {
      if (!users) {
        dispatch(fetchUsers());
      }
    };

    getUsers();
  }, [users, dispatch]);

  return (
    <ListContainer>
      <ListItemsHeader>
        <h2>Users ({users?.length})</h2>
      </ListItemsHeader>

      {users && <UsersList users={users} />}
    </ListContainer>
  );
};

export default Users;
