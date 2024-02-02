export interface UsersListProps {
  users: userType[];
}

export interface userType {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  phone: string;
  website: string;
}

export interface PostListProps {
  posts: postType[];
}

export interface postType {
  id: number;
  title: string;
  body: string;
}
