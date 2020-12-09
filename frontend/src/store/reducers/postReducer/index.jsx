
const initialState = {
  posts: [],
  content: [],
};

const postReducer = (state = initialState, action) => {
  if (action.type === 'fetchPosts') {
    console.log("in da reducer", action.payload)
    return {
      ...state,
      posts: action.payload
    }
  }
  if (action.type === 'createPost') {
    return {
      ...state,
      posts: [action.payload, ...state.posts]
    }
  }
  if (action.type === 'likePost') {

    const newPosts = [...state.posts];
    const index = newPosts.findIndex((post) => post.id === action.payload.id);
    newPosts[index] = action.payload;


    return {
      ...state,
      posts: newPosts
    }
  }

  return state;
};

export default postReducer;

