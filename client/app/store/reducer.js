const initialState = {
  article: [],
  detailArticle: [],
  articleCategories: [],
  searchResult:[]
}

const reducer = (state = initialState,action)=>{
  switch (action.type) {
    case "GET_ARTICLE":
      return{...state, article: action.payload.articles};
    case "DETAIL_ARTICLE":
      let newDetailArticle = state.article.filter(obj => {
        return obj.id === Number(action.payload.id)
      });
      return {...state, detailArticle: newDetailArticle};
    case "DETAIL_CATEGORIES":
      let newCategoriesArticle = state.article.filter(obj => {
        return obj.categories === action.payload.categories
      });
      return {...state, articleCategories: newCategoriesArticle};
    case "SEARCH_ARTICLE":
      let newResultArticle = state.article.filter(obj => {
        return obj.title.toLowerCase().match(action.payload.keyword.toLowerCase())
      });
      return {...state, searchResult: newResultArticle};
    case "ADD_ARTICLE":
      let newArticle = state.article.concat(action.payload.addData);
      return {...state, article: newArticle}
    default:
      return state
  }
}

export default reducer