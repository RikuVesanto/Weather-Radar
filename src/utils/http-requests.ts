import axios from 'axios'

/**
 * Execute http request promise and then proceed with the callback functions.
 * @param {*} request Request promise
 * @param {*} callbacks Callbacks object with functions onSuccess and onError
 */
async function executeRequestCallbacks(request: any, callbacks: any) {
	return request
		.then((response: any) => {
			try {
				return callbacks.onSuccess(response)
			} catch (callbackError) {}
		})
		.catch((error: any) => {
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
async function getData(requestUrl: string, callbacks: any) {
	return await executeRequestCallbacks(axios.get(requestUrl), callbacks)
}

export { getData }
