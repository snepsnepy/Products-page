const ID_TOKEN_KEY = 'loginToken';

export function getIdToken() {
    return localStorage.getItem(ID_TOKEN_KEY);
}

export function isLoggedIn() {
    const idToken = getIdToken();
    return !!idToken;
}  