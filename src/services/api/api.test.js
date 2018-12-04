import fetchMock from 'fetch-mock';
import api from './api';
import { NASA_API_URL } from './constants';
import { NASA_ASSETS_URL} from "./constants";

describe('NASA API Image Search', () => {
    test('search for images', done => {
        const query = 'neptune';
        const type = 'image';
        const dummyFetchResponse = {
            collection: {
                version: '1.0',
                items: [],
                metadata: {},
                href: 'https://images-api.nasa.gov/search?q=neptune&media_type=image'
            }
        };

        const url = `${NASA_API_URL}/search?q=${query}&media_type=${type}`;
        const config = {
            matcher: url,
            response: dummyFetchResponse,
            method: 'GET'
        };

        fetchMock.mock(config);

        api.search(query, type).then(response => {
            expect(response.collection.href).toEqual(
                'https://images-api.nasa.gov/search?q=neptune&media_type=image'
            );
            done();
        });
    });

    test('search for videos', done => {
        const query = 'neptune';
        const type = 'image';
        const dummyFetchResponse = {
            collection: {
                version: '1.0',
                items: [],
                metadata: {},
                href: 'https://images-api.nasa.gov/search?q=neptune&media_type=video'
            }
        };

        const url = `${NASA_API_URL}/search?q=${query}&media_type=${type}`;
        const config = {
            matcher: url,
            response: dummyFetchResponse,
            method: 'GET',
            overwriteRoutes: true
        };

        fetchMock.mock(config);

        api.search(query, type).then(response => {
            expect(response.collection.href).toEqual(
                'https://images-api.nasa.gov/search?q=neptune&media_type=video'
            );
            done();
        });
    });

    test('NASA API view asset', done => {
        const nasa_id = 'PIA01493';
        const dummyFetchResponse = {
            collection: {
                version: '1.0',
                items: [],
                metadata: {},
                href: 'https://images-api.nasa.gov/search?nasa_id=PIA01493'
            }
        };

        const url = `${NASA_API_URL}/search?nasa_id=${nasa_id}`;
        const config = {
            matcher: url,
            response: dummyFetchResponse,
            method: 'GET'
        };

        fetchMock.mock(config);

        api.asset(nasa_id).then(response => {
            expect(response.collection.href).toEqual(
                'https://images-api.nasa.gov/search?nasa_id=PIA01493'
            );
            done();
        });
    });

    test('Get file collection', done => {
        const id = 'NHQ_2017_0915_Cassini Ends Its Historic Exploration of Saturn';
        const type = 'video';
        const dummyFetchResponse = {
            collection: {
                version: '1.0',
                items: [],
                metadata: {},
                href: 'https://images-assets.nasa.gov/video/NHQ_2017_0915_Cassini Ends Its Historic Exploration of Saturn/collection.json'
            }
        };

        const url = `${NASA_ASSETS_URL}${type}/${id}/collection.json`;
        const config = {
            matcher: url,
            response: dummyFetchResponse,
            method: 'GET',
            overwriteRoutes: true
        };

        fetchMock.mock(config);

        api.files(id, type).then(response => {
            expect(response.collection.href).toEqual(
                'https://images-assets.nasa.gov/video/NHQ_2017_0915_Cassini Ends Its Historic Exploration of Saturn/collection.json'
            );
            done();
        });
    });
});
