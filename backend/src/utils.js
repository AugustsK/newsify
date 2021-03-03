/**
 * Allow only lsm or delfi
 * @param feedUrl
 * @returns {boolean}
 */
function isValidFeedUrl(feedUrl) {
  return /^https:\/\/(www.delfi.lv|www.lsm.lv)/.test(feedUrl);
}

module.exports = {
  isValidFeedUrl,
};
