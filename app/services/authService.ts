export async function login(username: string, password: string) {
    const response = await fetch('http://localhost:3000/api/users/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    if (response.ok) {
        const data = await response.json(); // { token, user: { id, username, role } }
        return data;
    } else {
        throw new Error('Invalid credentials');
    }
}

export async function fetchUser(token: string) {
    const response = await fetch('https://example.com/api/user', {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${token}` },
    });

    if (response.ok) {
        const data = await response.json(); // { id, username, role }
        return data;
    } else {
        throw new Error('Failed to fetch user');
    }
}