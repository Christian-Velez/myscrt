import axios from 'axios';
import { sortComments } from 'helpers/sortComments';
import types from 'types/types';

const API_URL = process.env.REACT_APP_API_URL;


export const startGettingCurrentUserInfo = async (id) => {
   try {
      const URL = `${API_URL}/api/user/${id}`;
      const { data } = await axios.get(URL);
      const { user, posts } = data;



      const formatedPosts = posts.map(post => sortComments({ ...post }));
      const userToStore = {
         ...user,
         posts: formatedPosts
      };

      return userToStore;

      
   } catch(err) {
      throw new Error(err.message);
   }
};

export const setCurrentUserInfo = (userInfo) => {
   return {
      type: types.setCurrentUserInfo,
      payload: userInfo
   };
};



export const startPostingNew = async (userId, post, dispatch) => {
   try {

      const URL = `${API_URL}/api/post`;
      const { data } = await axios.post(URL, {
         userId,
         mainComment: post
      });


      dispatch(addNewPost(data.savedPost));
   } catch(err) {
      console.log(err);
   }
};

export const addNewPost = (data) => {
   return {
      type: types.addNewPost,
      payload: data
   };
};



export const startDeletingPost = async(postId, token, dispatch) => {
   try {
      // Header de autorizacion
      const config = {
         headers: {
            Authorization: `Bearer ${token}`,
         },
      };

      const URL = `${API_URL}/api/post/${postId}`;
      const { data } = await axios.delete(URL, config);


      //dispatch(setCurrentUserInfo(data.updatedUser));




   } catch(err) {
      console.log(err);
   }
};




export const startCommentPost = async (postId, comment, dispatch) => {

   try {

      const URL = `${API_URL}/api/post/comment/${postId}`;
      const { data } = await axios.put(URL, { comment });


      const { updatedPost } = data;


      const newPost = sortComments({ ...updatedPost });
      dispatch(updatePost(newPost));

   } catch(err) {

      console.log(err);
   }
};



export const updatePost = (post) => {
   return {
      type: types.updatePost,
      payload: {
         id: post.id,
         post
      }
   };
};



export const startDeletingComment = async (postId, commentId,token, dispatch) => {

   try {

      // Header de autorizacion
      const config = {
         headers: {
            Authorization: `Bearer ${token}`,
         },
      };


      const URL = `${API_URL}/api/post/${postId}/comment/${commentId}`;
      const result = await axios.delete(URL, config);

      if(result.status === 204) {
         dispatch(deleteComment(postId, commentId));
      }

   }
   catch(err) {
      console.log(err);
   }
};

export const deleteComment = (postId, commentId) => {
   return {
      type: types.deleteComment,
      payload: {
         postId,
         commentId
      }
   };
};





export const deleteUserAccont = async ({ id: userId, token, navigate, dispatch }) => {
   try {
      

      // Header de autorizacion
      const config = {
         headers: {
            Authorization: `Bearer ${token}`,
         },
      };

      const URL = `${API_URL}/api/user/${userId}`;
      const resp = await axios.delete(URL, config);


      if(resp.status === 204) {
         localStorage.removeItem('userAuth');

         dispatch({
            type: types.logout
         });

         navigate('/');
      }
   } catch(err) {
      console.log(err);
   }




};