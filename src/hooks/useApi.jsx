import { useEffect, useMemo, useState } from "react"


const useApi = (url, params = {}, delayed = false) => {
	const [loading, setLoading] = useState(!delayed)
	const [execute, setExecute] = useState(!delayed)
	const [error, setError] = useState(null)
	const [fetchParams, setFetchParams] = useState(initialParams)
	const [data, setData] = useState(null)

	const config = useMemo(() => {
		let auxConfig = {
			method: 'GET',
			...fetchParams
		}
		if (!auxConfig.headers) {
			auxConfig['headers'] = {}
		}
		console.debug('auxConfig', auxConfig)
		return auxConfig
	}, [fetchParams])

	useEffect(() => {
		if (execute) {
			setLoading(true)
			console.debug(`fetch url=${url} method=${config.method}`)
			console.debug(`fetch body=${config.body}`)
			fetch(SERVER_URL + url, config)
				.then((response) => response.json())
				.then((json) => setData(json))
				.catch((err) => setError(err))
				.finally(() => setLoading(false))
		}
		// eslint-disable-next-line
	}, [url, config, execute])

	const setParams = (newParams) => {
		setFetchParams({
			...fetchParams,
			...newParams
		})
	}
	const run = () => {
		setExecute(true)
	}

	return {
		loading, error, data, setParams, run
	}
}

export default useApi
