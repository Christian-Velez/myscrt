import axios from 'axios';
import { sortComments } from 'helpers/sortComments';
import types from 'types/types';

const API_URL = process.env.REACT_APP_API_URL;


// GET
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


// POST "POST"
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


// DELETE
export const startDeletingPost = async(postId, token, dispatch) => {
   try {
      // Header de autorizacion
      const config = {
         headers: {
            Authorization: `Bearer ${token}`,
         },
      };

      const URL = `${API_URL}/api/post/${postId}`;
      await axios.delete(URL, config);

      dispatch(deletePost(postId));

   } catch(err) {
      console.log(err);
   }
};

export const deletePost = (postId) => {
   return {
      type: types.deletePost,
      payload: postId
   };
};


// POST COMMENT
export const startCommentPost = async (postId, comment) => {

   try {

      const URL = `${API_URL}/api/post/comment/${postId}`;
      const { data } = await axios.put(URL, { comment });


      const { updatedPost } = data;


      const newPost = sortComments({ ...updatedPost });

      return newPost;
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



export const startDeletingComment = async (postId, commentId,token) => {
   try {

      // Header de autorizacion
      const config = {
         headers: {
            Authorization: `Bearer ${token}`,
         },
      };


      const URL = `${API_URL}/api/post/${postId}/comment/${commentId}`;
      const result = await axios.delete(URL, config);
      return result.status;

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





