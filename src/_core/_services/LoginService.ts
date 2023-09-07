// LoginService.ts

interface LoginForm {
    email: string;
    password: string;
    type: string;
}

interface LoginResponse {
    data?: any; // Puedes especificar el tipo de datos del usuario aquí
    error?: string; // Mensaje de error
}

export async function login(formData: LoginForm): Promise<LoginResponse> {
    try {
        // Lógica de inicio de sesión, envía la solicitud a la API, etc.
        // Retorna un objeto con datos de usuario si la solicitud es exitosa
        // o un mensaje de error si ocurre un error.

        // Ejemplo de solicitud ficticia:
        const response = await fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            return { error: errorData.error };
        }

        const userData = await response.json();
        return { data: userData };
    } catch (error: any) { // Especifica 'any' para el tipo de 'error'
        return { error: error.message as string }; // Convierte 'error.message' a cadena
    }
}
