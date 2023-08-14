import logo from "../../assets/logo.png";
import {useNavigate} from "react-router-dom";

function Login2() {
    const navigate = useNavigate()
    const next = () => {
        navigate("/events")
    }


    return(
        <main>
            <div className={'logo-header'}>
                <img className={'logo'} src={logo}/>
            </div>
            <div className="min-h-screen flex items-center justify-center">
                <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
                    <h1 className="text-2xl font-semibold text-center text-gray-500 mt-8 mb-6">Iniciar sesión</h1>
                    <form>
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 text-sm text-gray-600">Correo electrónico</label>
                            <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required/>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block mb-2 text-sm text-gray-600">Contraseña</label>
                            <input type="password" id="password" name="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required/>
                                <a href="#" className="block text-right text-xs text-cyan-600 mt-2">¿Olvidaste tu contraseña?</a>
                        </div>
                        <button onClick={next} type="submit" className="w-32 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mt-4 mb-6">Acceso</button>
                    </form>
                    <div className="text-center">
                        <p className="text-sm">¿No tienes una cuenta? <a href="#" className="text-cyan-600">Regístrate ahora</a></p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Login2;