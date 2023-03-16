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
