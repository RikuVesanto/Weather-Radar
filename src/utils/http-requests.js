import axios from 'axios'

/**
 * Execute http request promise and then proceed with the callback functions.
 * @param {*} request Request promise
 * @param {*} callbacks Callbacks object with functions onSuccess and onError
 */
async function executeRequestCallbacks(request, callbacks) {
	return request
		.then((response) => {
			try {
				callbacks.onSuccess(response)
			} catch (callbackError) {}
		})
		.catch((error) => {
			try {
				callbacks.onError(error.response)
			} catch (callbackError) {}
		})
}

/**
 * Get data and execute the given callback based on the result.
 * @param {*} requestUrl The specific route that the request is made to.
 * @param {*} callbacks Object with optional callback functions named onSuccess, onError and onCompletion.
 */
async function getData(requestUrl, callbacks) {
	await executeRequestCallbacks(axios.get(requestUrl), callbacks)
}
