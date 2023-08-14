const rootUrl: string = 'https://sullygnome.com/api/';
const proxyUrl: string = 'http://localhost:8080/?url=';
export const getUser = async (channelName: string) => {
    const url = proxyUrl + rootUrl + 'standardsearch/' + channelName;
    const res = await fetch(url, {
        method: 'GET'
    });
    const data = await res.json();
    return JSON.parse(data.Raw);
}

export const getFollowersEvolution = async (idChannel: string, channelName: string, days: string) => {
    const url = proxyUrl + rootUrl + 'charts/linecharts/getconfig/ChannelFollowers/' + days + '/0/' + idChannel + '/' + channelName + '/%20/%20/0/0/%20/0/';
    const res = await fetch(url, {
        method: 'GET'
    });
    const data = await res.json();
    return JSON.parse(data.Raw);
};

export const getChannelViewers = async (idChannel: string, channelName: string, days: string) => {

    const url = proxyUrl + rootUrl + 'charts/linecharts/getconfig/ChannelViewers/' + days + '/0/' + idChannel + '/' + channelName + '/%20/%20/0/0/%20/0/';
    const res = await fetch(url, {
        method: 'GET'
    });
    const data = await res.json();
    return JSON.parse(data.Raw);
};

export const getViewersCategory = async (idChannel: string, channelName: string, days: string) => {

    const url = proxyUrl + rootUrl + 'charts/piecharts/getconfig/channelgameavgviewers/' + days + '/' + idChannel + '/' + channelName + '/%20/%20/0/0/%20/0/';
    const res = await fetch(url, {
        method: 'GET'
    });
    const data = await res.json();
    return JSON.parse(data.Raw);
};

export const geCategoryTime= async (idChannel: string, channelName: string, days: string) => {
    const url = proxyUrl + rootUrl + 'charts/piecharts/getconfig/channelgamestreamedtime/' + days + '/' + idChannel + '/' + channelName + '/%20/%20/0/0/%20/0/';
    const res = await fetch(url, {
        method: 'GET'
    });
    const data = await res.json();
    return JSON.parse(data.Raw);
};



