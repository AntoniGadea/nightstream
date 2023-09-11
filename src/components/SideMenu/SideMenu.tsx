import './SideMenu.css';
import profile from '../../../public/default.png';
import Image from "next/image";

function SideMenu() {

    function closeNav() {
        document.getElementById("mySidenav")!.style.width = "0";
        document.getElementById("sidenavBackdrop")!.style.width = "0";

    }

    return (
        <div className={'wrapper'}>
            <div id={'sidenavBackdrop'} onClick={closeNav}></div>
            <div id="mySidenav" className="sidenav">
               <Image src={profile}
                      alt={'profile'}
                      style={{
                          width: '120px',
                          height: 'auto',
                      }}/>
                <a href="/">Eventos</a>
                <a href="#">Mi perfil</a>
                <a href="#">Contacto</a>
            </div>
        </div>




    )
}

export default SideMenu;