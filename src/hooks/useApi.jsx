import { useEffect, useMemo, useState } from "react"


const useApi = (url, token = '', params = {}, delayed = false) => {
	const [loading, setLoading] = useState(!delayed)
	const [execute, setExecute] = useState(!delayed)
	const [error, setError] = useState(null)
	const [fetchParams, setFetchParams] = useState(params)
	const [data, setData] = useState(null)

	const config = useMemo(() => {
		let fetchParameters = {
			...fetchParams
		}

		if (!fetchParameters.headers) {
			fetchParameters['headers'] = {}
		}
		fetchParameters['api-token'] = token

		return fetchParameters
	}, [token, fetchParams])

	useEffect(() => {
		if (execute) {
			setLoading(true)

			fetch(process.env.REACT_APP_API_HOST + url, config)
				.then((response) => response.json())
				.then((json) => setData(json))
				.catch((err) => setError(err))
				.finally(() => setLoading(false))

		}
	}, [url, config, execute])

	const setParams = (newParams) => {
		setFetchParams(newParams)
	}
	const run = () => {
		setExecute(true)
	}

	return {
		loading, error, data, setParams, run
	}
}

export default useApi
