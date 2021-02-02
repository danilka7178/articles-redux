import { createStore } from 'redux'

const initialState = {
   articles: []
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case 'PUSH_ARTICLES':
         return {
            ...state,
            articles: [action.payload]
         }
      default: return state;
   }
};

const store = createStore(reducer);

export default store;