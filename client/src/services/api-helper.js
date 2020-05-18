import axios from 'axios';

// const baseUrl = 'http://localhost:3000';
const baseUrl = process.env.NODE_ENV === 'production' ? 'https://therecipebox-api.herokuapp.com/' : 'http://localhost:3000' 

const api = axios.create({
  baseURL: baseUrl,
});

// ========================================
// ================ AUTH ==================
// ========================================

export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', { auth: loginData });
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
};

export const registerUser = async (registerData) => {
  const resp = await api.post('/users', { user: registerData });
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
};

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const resp = await api.get('/auth/verify');

    return resp.data;
    // return {
    //   currentUser: resp.data.user
    // };
  }
  return null;
};

export const removeToken = () => {
  api.defaults.headers.common.authorization = null;
};

// ========================================

export const getAllCategories = async () => {
  const resp = await api.get('/categories');
  return resp.data;
};

// export const getOneCategories = async () => {
//   const resp = await api.get(`/categories/${id}`);
//   return resp.data;
// }
export const getAllRecipes = async () => {
  const resp = await api.get('/recipes');
  return resp.data;
};

export const getDinnerRecipes = async () => {
  // debugger
  const resp = await api.get('/dinners');
  return resp.data;
};
export const getDessertRecipes = async () => {
  const resp = await api.get('/desserts');
  return resp.data;
};

export const getOneRecipe = async (id) => {
  const resp = await api.get(`/recipes/${id}`);
  return resp.data;
};

// post = create
export const postRecipe = async (recipeData) => {
  const resp = await api.post('/recipes/create', recipeData);
  return resp.data;
};

// put = update
export const putRecipe = async (id, recipeData) => {
  const resp = await api.put(`/recipes/${id}`, recipeData);
  return resp.data;
};

export const destroyRecipe = async (id) => {
  const resp = await api.delete(`/recipes/${id}`);
  return resp;
};

