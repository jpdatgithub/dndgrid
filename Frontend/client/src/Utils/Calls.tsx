interface ICredentials {
    username: string,
    password: string
}

interface IAccessToken {
    token: string
}
  
export async function loginUser(credentials: ICredentials): Promise<Response> {
    const response = await fetch('http://localhost:5191/powerfantasy/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    });
    return response;
}

export async function registerUser(credentials: ICredentials): Promise<Response> {
    const response = await fetch('http://localhost:5191/powerfantasy/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    });
    return response;
}

export async function validateToken(token: IAccessToken): Promise<Response> {
    return fetch('http://localhost:5191/powerfantasy/validatetoken', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(token)
    });
}