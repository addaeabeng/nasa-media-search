import fetchJson from  '../../utils/fetchJson';
import {NASA_API_URL, NASA_ASSETS_URL} from './constants';

const api = {
    search: (query, type) => {
        return fetchJson( `${NASA_API_URL}/search?q=${query}&media_type=${type}` );
    },
    asset: id => fetchJson( `${NASA_API_URL}/search?nasa_id=${id}` ),
    files: (id, type) => fetchJson( `${NASA_ASSETS_URL}${type}/${id}/collection.json` )
};

export default api;