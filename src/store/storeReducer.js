import types from 'types/types';


const initialStore = {
   // My info -> my id in localstorage, jwt, etc
   userInfo: {
      isAuthenticated: false,
      id: null
   },

   // baseurl/:id user info -> posts, comments, etc
   currentUser: {
      id: null,
      posts: []
   }
};

const storeReducer = (state, action) => {

   switch(action.type) {

      case types.setUserInfo: 
         return {
            ...state,
            userInfo: action.payload
         };


      case types.setCurrentUserInfo:
         return {
            ...state,
            currentUser: action.payload
         };


      case types.addNewPost:
         return {
            ...state,
            currentUser: {
               ...state.currentUser,
               posts: [
                  action.payload,
                  ...state.currentUser.posts

               ]
            }
         };



      case types.updatePost:
         return {
            ...state,
            currentUser: {
               ...state.currentUser,
               posts: state.currentUser.posts.map(post => (
                  post.id === action.payload.id
                  ? action.payload.post
                  : post
               ))
               
            }
         };

      
      case types.deleteComment:

         return {
            ...state,
            currentUser: {
               ...state.currentUser,
               posts: state.currentUser.posts.map(post => (
                  post.id === action.payload.postId
                  ? ({
                     ...post,
                     comments: post.comments.filter(comment => comment._id !== action.payload.commentId)
                  })
                  : post
               ))
            }
         };

      default: 
         return state;
   }

};



export { initialStore };
export default storeReducer;