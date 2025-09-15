import api from './axios';

/**
 * GET request
 * @param {string} url
 * @param {object} [options] - { params, headers }
 */
export const get = (url: string, options: { params?: object; headers?: object } = {}) => {
  return api.get(url, { params: options.params, headers: options.headers })
    .then(res => res.data)
    .catch(error => {
      console.error("Error fetching data:", error);
      throw error;
    });
}

/**
 * POST request
 * @param {string} url
 * @param {object} body
 * @param {object} [options] - { headers }
 */
export const post = (url: string, body: object, options: { headers?: object } = {}) => {
  return api.post(url, body, { headers: options.headers })
    .then(res => res.data)
    .catch(error => {
      console.error("Error posting data:", error);
      throw error;
    });
}

/**
 * PUT request
 * @param {string} url
 * @param {object} body
 * @param {object} [options] - { headers }
 */
export const put = (url: string, body: object, options: { headers?: object } = {}) => {
  return api.put(url, body, { headers: options.headers })
    .then(res => res.data)
    .catch(error => {
      console.error("Error updating data:", error);
      throw error;
    });
}

/**
 * DELETE request
 * @param {string} url
 * @param {object} [options] - { params, headers }
 */
export const del = (url: string, options: { params?: object; headers?: object } = {}) => {
  return api.delete(url, { params: options.params, headers: options.headers })
    .then(res => res.data)
    .catch(error => {
      console.error("Error deleting data:", error);
      throw error;
    });
}