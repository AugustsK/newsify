import { createStore } from 'redux';
import { CHANGE_VIEW, CHANGE_LINK, CHANGE_PROVIDER } from './actionTypes';

const initialState = {
  view: 'grid',
  provider: 0,
  link: '/rss/?lang=lv&catid=14',
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_VIEW: {
      const { viewType } = action.payload;

      return {
        ...state,
        viewType,
      };
    }
    case CHANGE_PROVIDER: {
      const { provider } = action.payload;

      return {
        ...state,
        provider,
      };
    }
    case CHANGE_LINK: {
      const { link } = action.payload;

      return {
        ...state,
        link,
      };
    }
    default: {
      return state;
    }
  }
}

export default createStore(reducer);
