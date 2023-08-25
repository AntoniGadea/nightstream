import './SearchBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
function SearchBar({func}: any) {
    const navigate = useNavigate()
    const next = () => {
        navigate("/create")
    }

    return (
        <div className={'wrapper'}>
            <div className={'search'}>
                <button>
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#ffffff",}} />
                </button>
                <input onInput={func} placeholder={'Buscar'}/>
            </div>
            <button onClick={next} className={'create'}>
                +
            </button>
        </div>



    )
}

export default SearchBar;