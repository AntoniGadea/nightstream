import React, {useEffect, useState} from "react";
import "../App.scss";
import ChartLine from "./ChartLine";
import {useLocation} from "react-router-dom";
import {followersData, viewersData, viewersCategory, categoryTime} from "../mockData";
import {geCategoryTime, getChannelViewers, getFollowersEvolution, getViewersCategory} from "../services/apiSullygnome";
import PieChart from "./PieChart";

function Main() {
    const [time,  setTime] = useState(new Date().toUTCString());
    const location = useLocation();
    const [followers, setFollowers] = useState(followersData);
    const [viewersCate, setViewersCate] = useState(viewersCategory);
    const [viewers, setViewers] = useState(viewersData);
    const [cateTime, setCateTime] = useState(categoryTime);
    const [totalFollowers, setTotalFollowes] = useState("");

    let streamerName = location.state.name;
    let streamerId = location.state.id;

    useEffect(() => {
        // Solo realizar la llamada a la API si la propiedad 'datasets' está vacía
        if (true) {
            getFollowersEvolution(streamerId, streamerName, '7').then(
                (json) => {
                    if(json) {
                        json.data.datasets.forEach( (data: any) => {
                            data.yAxisID = '1';
                        });
                        json.options.scales.xAxes.forEach( (axes: any) => {
                            axes.id = '1'
                        });
                        json.options.scales.yAxes.forEach( (axes: any) => {
                            axes.id = '1'
                        });
                        console.log(json.data.datasets.forEach( (d: any)=> {
                            if (d.label = "Followers") {
                                let followers = d.data.pop();
                                if(followers !== null) {
                                    setTotalFollowes(Number(followers).toLocaleString());
                                }

                            }
                        }))
                        setFollowers(json);
                    }


                }
            );

            getChannelViewers(streamerId, streamerName, '7').then(
                (json) => {
                    if(json){
                        json.data.datasets.forEach( (data: any) => {
                            data.yAxisID = '2';
                        });
                        json.options.scales.xAxes.forEach( (axes: any) => {
                            axes.id = '2'
                        });
                        json.options.scales.yAxes.forEach( (axes: any) => {
                            axes.id = '2'
                        });
                        setViewers(json);
                    }
                });

           getViewersCategory(streamerId, streamerName, '7').then(
                (json) => {
                    if(json) {
                        json.data.datasets.forEach( (data: any) => {
                            data.yAxisID = '3';
                        });
                        console.log(json)
                        setViewersCate(json);
                    }

                });

            geCategoryTime(streamerId, streamerName, '7').then(
                (json) => {
                    if(json) {
                        json.data.datasets.forEach( (data: any) => {
                            data.yAxisID = '4';
                        });
                        setCateTime(json);
                    }

                });
        }
    }, [streamerId, streamerName, followers.data.datasets.length]);
    return (
        <main>
            <div className="header">
                <div className="header-menu">
                    <span className="header-menu_date">
                        {time}
                    </span>
                    <input className="header-menu_search" placeholder="Search" type="text"/>
                    <span>
                        <i className="fa-regular fa-bell" style={{ color: '#ffffff' }}></i>
                    </span>
                    <div className="header-menu_user">
                            <span></span>
                            <span></span>
                        <div className={'streamer'}>
                            <span>
                                {streamerName}
                            </span>
                            <span>
                                Streamer
                            </span>
                        </div>

                        </div>
                </div>
            </div>
            <div className="dashboard">
                <div className="dashboard-col1">
                    <div className="user-overview">
                        <div className="user-overview_head">
                            <div className="title">
                                <span>Profile</span>
                            </div>
                            <div className="button-wrapper">
                                <div className="button1">
                                    <span>More</span>
                                </div>
                                <div className="button2">
                                    <span></span>
                                </div>
                            </div>
                        </div>
                        <div className="user-overview_info">
                            <div className="data-pill">
                                <span className="title">Followers</span>
                                <span className="percentage">12%</span>
                                <i className="fa-solid fa-caret-up" style={{ color: '#3fe363' }}></i>
                                <div className="data-pill_number">
                                    <span>{totalFollowers}</span>
                                </div>
                            </div>
                            <div className="data-pill">
                                <span className="title">Followers</span>
                                <span className="percentage">12%</span>
                                <i className="fa-solid fa-caret-up" style={{ color: '#3fe363' }}></i>
                                <div className="data-pill_number">
                                    <span>180k</span>
                                </div>
                            </div>
                            <div className="data-pill">
                                <span className="title">Followers</span>
                                <span className="percentage">12%</span>
                                <i className="fa-solid fa-caret-up" style={{ color: '#3fe363' }}></i>
                                <div className="data-pill_number">
                                    <span>180k</span>
                                </div>
                            </div>
                            <div className="data-pill">
                                <span className="title">Followers</span>
                                <span className="percentage">12%</span>
                                <i className="fa-solid fa-caret-up" style={{ color: '#3fe363' }}></i>
                                <div className="data-pill_number">
                                    <span>180k</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="user-graph">
                        <ChartLine data={followers.data} options={followers.options} />
                        <ChartLine data={viewers.data} options={viewers.options} />

                    </div>
                </div>
                <div className="dashboard-col2">
                    <div className="graph1">
                        <PieChart data={viewersCate.data} options={viewersCate.options} />
                    </div>
                    <div className="graph2">
                        <PieChart data={cateTime.data} options={cateTime.options} />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;