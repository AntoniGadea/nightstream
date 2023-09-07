// Define la función de registro
import {SignupData} from "../_models/SignupData";

export async function signup(formData: SignupData) {
    try {
        // Configura la URL del endpoint de registro
        const apiUrl = 'http://localhost:8080/signup';

        // Realiza una solicitud POST al endpoint de registro en el servidor
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        // Verifica si la solicitud fue exitosa
        if (!response.ok) {
            throw new Error('Error en el registro. Inténtalo de nuevo.');
        }

        // Parsea la respuesta JSON del servidor
        const data = await response.json();

        // Devuelve los datos de la respuesta del servidor
        return data;
    } catch (error: any) {
        // Si hay un error en la solicitud, devuelve un objeto de error
        return { error: error.message || 'Error en el registro. Inténtalo de nuevo.' };
    }
}
