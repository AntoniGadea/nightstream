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
                <a href="#">Perfil</a>
                <a href="#">Configuracion</a>
                <a href="#">Perticipaciones</a>
                <a href="#">Contact</a>
            </div>
        </div>




    )
}

export default SideMenu;