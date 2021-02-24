import { CHANGE_PROVIDER, CHANGE_LINK, CHANGE_VIEW } from './actionTypes';
// eslint-disable-next-line no-unused-vars
import { VIEW_TYPE_GRID, VIEW_TYPE_LIST } from '../repository/viewTypes';

/**
 * @param {VIEW_TYPE_LIST|VIEW_TYPE_GRID} viewType
 * @returns {{payload: {viewType}, type: string}}
 */
export const changeView = (viewType) => ({
  type: CHANGE_VIEW,
  payload: { viewType },
});

/**
 * @param {Number} provider
 * @returns {{payload: {provider}, type: string}}
 */
export const changeProvider = (provider) => ({
  type: CHANGE_PROVIDER,
  payload: { provider },
});

/**
 * @param {String} link
 * @returns {{payload: {link}, type: string}}
 */
export const changeLink = (link) => ({
  type: CHANGE_LINK,
  payload: { link },
});
