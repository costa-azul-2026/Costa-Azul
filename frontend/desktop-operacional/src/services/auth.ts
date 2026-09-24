import api from "./api";

export const TOKEN_KEY = "@costaazul-token";
export const ROLE_KEY = "@costaazul-role";

export async function loginUser(
    credencial: string,
    senha: string
){
    const response = await api.post('/api/auth/login', { 
        credencial, 
        senha 
    });
    return response.data;
}


export const login = (token: string, role: string) => {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(ROLE_KEY, role);
};

export const isAuthenticated = () => {
    return localStorage.getItem(TOKEN_KEY) !== null;
};

export const getToken = () => {
    return localStorage.getItem(TOKEN_KEY);
};

export const getRole = () => {
    return localStorage.getItem(ROLE_KEY);
};


export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(ROLE_KEY);
};