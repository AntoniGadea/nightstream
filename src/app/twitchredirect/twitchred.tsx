// pages/twitchredirect.tsx
"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
function TwitchRedirect() {
  const router = useRouter();
  const [message, setMessage] = useState('Procesando autenticación con Twitch...');

  const params = useSearchParams();
  

  useEffect(() => {
    // Comprobar si router es null antes de intentar acceder a sus propiedades
    if (router) {
      // Extraer el código de autorización de la URL
      const code = params.get('code');

      // Si el código está presente, hacer una solicitud al backend
      if (code) {
          fetch(`http://localhost:8080/auth/twitch/callback?code=${code}`, {
              method: 'GET',
              credentials: 'include',
              headers: {
                'Content-Type': 'application/json',
              },
            })
        .then(response => {
          if (response.ok) {
            setMessage('logueadisimo crack');
          } else {
            setMessage('Hubo un problema al autenticarse.');
          }
          return response.json();
        })
        .catch(error => {
          console.error('Error al comunicarse con el backend:', error);
          setMessage('Error al comunicarse con el backend.');
        });
      }
    }
  }, [router]);

  return (
    <div>
      {message}
    </div>
  );
}

export default TwitchRedirect;
