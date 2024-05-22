export async function getAccount(token) {
    const rawResult = await fetch(`http://localhost:8080/user/${token}`);
    const result = await rawResult.json();
    return result;
}

export async function login(username, password) {
    const rawResult = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username,
            password
        })
    });
    const result = await rawResult.json();
    return result;
}

export async function signup(username, email, password) {
    const rawResult = await fetch("http://localhost:8080/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username,
            email,
            password
        })
    });
    const result = await rawResult.json();
    return result;
}
