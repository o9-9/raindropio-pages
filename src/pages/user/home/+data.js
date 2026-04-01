import Api, { FetchError } from '~api'
import { render } from 'vike/abort'

export async function data({ routeParams: { user_name } }) {
	var user, collections
	try {
		var [user, collections] = await Promise.all([
			Api.user.getByName(user_name),
			Api.collections.getByUserName(user_name)
		])
	} catch(e) {
		if (e instanceof FetchError)
			throw render(e.status, e.message)

		throw e
	}

	if (!user || !collections?.length)
		throw render(404)

	return { user, collections }
}
