const store = {};
const expiry = 30 * 1000;

function get(url) {
  if (url in store && store[url].timestamp + expiry > Date.now()) {
    return store[url].data;
  }

  return null;
}

function set(url, data) {
  if (url in store) {
    delete store[url];
  }

  store[url] = {
    timestamp: Date.now(),
    data,
  };
}

module.exports = {
  get,
  set,
};
