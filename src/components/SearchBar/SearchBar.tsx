import './SearchBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
function SearchBar({func}: any) {

    return (
        <div className={'wrapper'}>
            <div className={'search'}>
                <button>
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#ffffff",}} />
                </button>
                <input onInput={func} placeholder={'Buscar'}/>
            </div>
            <button className={'create'}>
                +
            </button>
        </div>



    )
}

export default SearchBar;