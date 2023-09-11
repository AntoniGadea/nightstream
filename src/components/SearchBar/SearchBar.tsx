import search from './SearchBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/navigation";
import {useSelector} from "react-redux";


function SearchBar({func}: any) {
    const role = useSelector( (state: any) => state.auth.role);
    const router = useRouter();
    const next = () => {
        router.push('/event');
    }

    return (
        <div className={search.wrapper}>
            <div className={search.search}>
                <button>
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#ffffff",}} />
                </button>
                <input onInput={func} placeholder={'Buscar'}/>
            </div>
            { role === 'business' ?
                (<button onClick={next} className={search.create}>
                    +
                </button>)
                : ''
            }

        </div>



    )
}

export default SearchBar;