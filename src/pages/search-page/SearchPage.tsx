import "./SearchPage.scss";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {getUser} from "../../services/apiSullygnome";


function SearchPage() {
    const navigate = useNavigate();
    const [name, setName] = useState('Ibai');
    const [search, setSearch] = useState([]);
    let timer: any;

    function goToDash() {
        navigate('/dashboard', {
            state: {
                name: name,
            }
        });
    }


    return(
        <div className={'container'}>
            <div className={'banner'}></div>
            <div className={'subBanner'}></div>
            <div className={'container-searchbox'}>
                    <input onChange={(event) => {
                        if (timer) clearTimeout(timer)
                            timer = setTimeout(() => {
                                let channelName = event.target.value;

                                getUser(channelName).then((data) => {
                                    setSearch(data);
                                })
                            }, 500)
                    }} className={'container-searchbox_search'} />
                    <div className="search-box">
                        {search.length > 0 &&
                            search.map((channel: any) => (
                                <div onClick={() => {
                                    navigate('/dashboard', {
                                        state: {
                                            name: channel.displaytext,
                                            id: channel.value,
                                            photo: channel.boxart
                                        }
                                    });
                                }}>
                                    <img src={channel.boxart}/>
                                    {channel.displaytext}
                                </div>
                            ))
                        }
                    </div>

            </div>
        </div>
    );
}

export default SearchPage;