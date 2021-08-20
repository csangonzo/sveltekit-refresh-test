
/** @type {import('@sveltejs/kit').GetSession} */
export function getSession(request) {
    
    return {
		user: request.locals.user
	};
}


/** @type {import('@sveltejs/kit').Handle} */
export async function handle({request, resolve}) {

    request.locals.user = 'handle-test';

	const response = await resolve(request);
    
    
	return {
		...response,
	};
}