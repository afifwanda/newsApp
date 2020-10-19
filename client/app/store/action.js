import AsyncStorage from '@react-native-community/async-storage';
const baseUrl = "https://secure-coast-32465.herokuapp.com/";

export const getArticle = () => {
  return async dispatch => {
    const result = await fetch(baseUrl+"article")
    const articleResult = await result.json()
    dispatch({
      type:"GET_ARTICLE",
      payload:{
        articles: articleResult
      }
    })
  }
}

export const getDetailArticle = (id) => ({
  type: "DETAIL_ARTICLE",
  payload: {
    id,
  }
})

export const getArticleByCategories = (categories) => ({
  type: "DETAIL_CATEGORIES",
  payload: {
    categories,
  }
})

export const searchArticle = (keyword) => ({
  type: "SEARCH_ARTICLE",
  payload: {
    keyword
  }
})

export const addArticle = (title,categories,thumbnail,article) => {
  const object = {
    title : title,
    categories : categories,
    thumbnail : thumbnail,
    article : article
  }

  return async dispatch => {
    const result = await fetch(baseUrl+"article",{
      method: "post",
      headers: {
        Accept: 'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify(object)
    })
    const addResult = await result.json()
    dispatch({
      type: "ADD_ARTICLE",
      payload:{
        addData: addResult,
      }
    })
  }
}

export const login = (username,password) => {
  const tokenId = 'ekekekeke'
  if(username === "admin" && password === "Admin"){
    return async token => {
      await AsyncStorage.setItem('loginToken', tokenId)
      token()
    }
  }
}