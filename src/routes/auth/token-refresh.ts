
export async function post(request) {


    return {
        headers: {
            'set-cookie': `refresh_token=test; Path=/; HttpOnly; SameSite=Strict`
        },
        body: {
            user: 'test'
        }
    };

}
