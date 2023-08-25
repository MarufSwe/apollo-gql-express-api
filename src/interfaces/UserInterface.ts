interface GetUserQuery {
  id: string;
}

interface CreateUserMutation {
  user: {
    username: string;
    email: string;
    password: string;
  };
}

interface UpdateUserMutation {
  id: string;
  user: {
    username?: string;
    email?: string;
    password?: string;
  };
}

interface DeleteUserMutation {
  id: string;
}

export {
  GetUserQuery,
  CreateUserMutation,
  UpdateUserMutation,
  DeleteUserMutation,
};
