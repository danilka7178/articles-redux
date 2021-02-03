import { createStore } from 'redux'

const initialState = {
   articles: [],
   modalView: {
      addArticle: false,
   }
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case 'PUSH_ARTICLES':
         return {
            ...state,
            articles: [...state.articles, ...action.payload]
         }
      case 'FILTER_ARTICLES':
         return {
            ...state,
            articles: [...action.payload]
         }
      case 'OPENMODAL_ADDARTICLE':
         return {
            ...state,
            modalView: {
               addArticle: true,
            }
         }
      default: return state;
   }
};

const store = createStore(reducer);

export default store;