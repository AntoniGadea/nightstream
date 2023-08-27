import './SideMenu.scss';
import profile from '../../assets/default.png'
function SideMenu() {

    function closeNav() {
        document.getElementById("mySidenav")!.style.width = "0";
        document.getElementById("sidenavBackdrop")!.style.width = "0";

    }

    return (
        <div className={'wrapper'}>
            <div id={'sidenavBackdrop'} onClick={closeNav}></div>
            <div id="mySidenav" className="sidenav">
                <img src={profile}/>
                <a href="/events">Mis eventos</a>
                <a href="#">Configuración</a>
                <a href="#">Estadistícas</a>
                <a href="#">Contacto</a>
            </div>
        </div>




    )
}

export default SideMenu;