const addAuthorizationToken = (url: string, options: any) => {
    const token = localStorage.getItem('token'); // Obtén el token de localStorage u otra fuente

    if (token) {
        if (!options.headers) {
            options.headers = {};
        }
        options.headers['Authorization'] = `Bearer ${token}`;
    }

    return fetch(url, options);
};

// Reemplaza el método fetch con uno que agrega automáticamente el token de autorización
const fetchWithAuthorization = (url: string, options: any) => {
    return addAuthorizationToken(url, options);
};

// Puedes exportar fetchWithAuthorization para usarlo en tu aplicación
export default fetchWithAuthorization;
