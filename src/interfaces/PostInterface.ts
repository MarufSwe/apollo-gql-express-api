interface GetPostQuery {
  id: string;
}

interface CreatePostMutation {
  post: {
    title: string;
    description?: string;
  };
}

interface UpdatePostMutation {
  id: string;
  post: {
    title?: string;
    description?: string;
  };
}

interface DeletePostMutation {
  id: string;
}

export {
  GetPostQuery,
  CreatePostMutation,
  UpdatePostMutation,
  DeletePostMutation,
};
