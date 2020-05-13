import axios from 'axios';

const baseUrl = 'http://localhost:3000';

const api = axios.create({
  baseURL: baseUrl
});

// ========================================
// ================ AUTH ==================
// ========================================

export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', { auth: loginData });
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
}

export const registerUser = async (registerData) => {
  const resp = await api.post('/users', { user: registerData });
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const resp = await api.get('/auth/verify');
    return resp.data;
  }
  return null;
}

export const removeToken = () => {
  api.defaults.headers.common.authorization = null;
}

// ========================================

export const getAllCategories = async () => {
  const resp = await api.get('/categories');
  return resp.data;
}

export const getOneCategories = async () => {
  const resp = await api.get('/categories/${id}');
  return resp.data;
}
export const getAllRecipes = async () => {
  const resp = await api.get('/recipes');
  return resp.data;
}

export const getDinnerRecipes = async () => {
// debugger  
  const resp = await api.get('/dinners');
  return resp.data;
}
export const getDessertRecipes = async () => {
  const resp = await api.get('/desserts');
  return resp.data;
}

export const getOneRecipe = async () => {
  const resp = await api.get('/recipes/${id}');
  return resp.data;
}

// post = create
export const postRecipe = async (recipeData) => {
  const resp = await api.post('/recipes/create', recipeData);
  return resp.data;
}

// put = update
export const putRecipe = async (id, recipeData) => {
  const resp = await api.put(`/recipes/${id}`, recipeData);
  return resp.data;
}

export const destroyRecipe = async (id) => {
  const resp = await api.delete(`/recipes/${id}`);
  return resp;
}

// ========================================
// ================ flavors ===============
// ========================================


// export const getAllFlavors = async () => {
//   const resp = await api.get('/flavors');
//   return resp.data;
// }

// ========================================
// ================ foods =================
// ========================================

// export const getAllFoods = async () => {
//   const resp = await api.get('/foods');
//   return resp.data;
// }

// export const getOneFood = async (id) => {
//   const resp = await api.get(`/foods/${id}`);
//   return resp.data;
// }

// export const postFood = async (foodData) => {
//   const resp = await api.post('/foods', foodData);
//   return resp.data;
// }

// export const putFood = async (id, foodData) => {
//   const resp = await api.put(`/foods/${id}`, foodData);
//   return resp.data;
// }

// export const destroyFood = async (id) => {
//   const resp = await api.delete(`/foods/${id}`);
//   return resp;
// }

// ========================================
// ========= foods and Flavors ============
// ========================================

// export const addFlavor = async (flavorId, foodId) => {
//   const resp = await api.get(`/flavors/${flavorId}/foods/${foodId}`)
//   return resp.data;
// }
