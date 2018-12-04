import normalize from './normalize';

describe('normalize', () => {
    test('search', () => {
        const response = {
            collection: {
                version: '1.0',
                items: [
                    {
                        "links": [
                            {
                                "rel": "preview",
                                "render": "image",
                                "href": "https://images-assets.nasa.gov/image/PIA01493/PIA01493~thumb.jpg"
                            }
                        ],
                        "data": [
                            {
                                "nasa_id": "PIA01493",
                                "date_created": "1998-10-30T15:11:01Z",
                                "description_508": "In Neptune outermost ring, 39,000 miles out, material mysteriously clumps into three arcs. Voyager 2 acquired this image as it encountered Neptune in August of 1989.",
                                "keywords": [
                                    "Neptune",
                                    "Voyager"
                                ],
                                "title": "Neptune Rings",
                                "secondary_creator": "NASA/JPL",
                                "media_type": "image",
                                "description": "In Neptune outermost ring, 39,000 miles out, material mysteriously clumps into three arcs. Voyager 2 acquired this image as it encountered Neptune in August of 1989.",
                                "center": "JPL"
                            }
                        ],
                        "href": "https://images-assets.nasa.gov/image/PIA01493/collection.json"
                    },
                    {
                        "links": [
                            {
                                "rel": "preview",
                                "render": "image",
                                "href": "https://images-assets.nasa.gov/image/PIA02210/PIA02210~thumb.jpg"
                            }
                        ],
                        "data": [
                            {
                                "nasa_id": "PIA02210",
                                "date_created": "1999-08-19T14:15:01Z",
                                "description_508": "This contrast enhanced color picture of Neptune was acquired by NASA Voyager 2 on Aug. 14, 1989. As Voyager 2 approached Neptune, rapidly increasing image resolution is revealed striking new details. Bright, wispy clouds are seen overlying the Great Dar",
                                "keywords": [
                                    "Neptune",
                                    "Voyager"
                                ],
                                "title": "Neptune",
                                "secondary_creator": "NASA/JPL",
                                "media_type": "image",
                                "description": "This contrast enhanced color picture of Neptune was acquired by NASA Voyager 2 on Aug. 14, 1989. As Voyager 2 approached Neptune, rapidly increasing image resolution is revealed striking new details. Bright, wispy clouds are seen overlying the Great Dar",
                                "center": "JPL"
                            }
                        ],
                        "href": "https://images-assets.nasa.gov/image/PIA02210/collection.json"
                    }
                ],
                metadata: { total_hits: 1 },
                href: 'https://images-api.nasa.gov/search?nasa_id=PIA11217'
            }
        };

        const expectedResponse = [
            {
                dateCreated: '1998-10-30T15:11:01Z',
                title: 'Neptune Rings',
                description:
                    'In Neptune outermost ring, 39,000 miles out, material mysteriously clumps into three arcs. Voyager 2 acquired this image as it encountered Neptune in August of 1989.',
                nasaId: 'PIA01493',
                secondaryCreator:
                    'NASA/JPL',
                mediaType: 'image',
                image:
                    'https://images-assets.nasa.gov/image/PIA01493/PIA01493~thumb.jpg'
            },
            {
                dateCreated: '1999-08-19T14:15:01Z',
                title: 'Neptune',
                description:
                    'This contrast enhanced color picture of Neptune was acquired by NASA Voyager 2 on Aug. 14, 1989. As Voyager 2 approached Neptune, rapidly increasing image resolution is revealed striking new details. Bright, wispy clouds are seen overlying the Great Dar',
                nasaId: 'PIA02210',
                secondaryCreator:
                    'NASA/JPL',
                mediaType: 'image',
                image:
                    'https://images-assets.nasa.gov/image/PIA02210/PIA02210~thumb.jpg'
            }
        ];

        expect(normalize.search(response)).toEqual(expectedResponse);
    });

    test('asset', () => {
        const response = {
            collection: {
                version: '1.0',
                items: [
                    {
                        "href": "https://images-assets.nasa.gov/image/PIA01493/collection.json",
                        "links": [
                            {
                                "href": "https://images-assets.nasa.gov/image/PIA01493/PIA01493~thumb.jpg",
                                "render": "image",
                                "rel": "preview"
                            }
                        ],
                        "data": [
                            {
                                "description_508": "In Neptune outermost ring, 39,000 miles out, material mysteriously clumps into three arcs. Voyager 2 acquired this image as it encountered Neptune in August of 1989.",
                                "center": "JPL",
                                "keywords": [
                                    "Neptune",
                                    "Voyager"
                                ],
                                "description": "In Neptune outermost ring, 39,000 miles out, material mysteriously clumps into three arcs. Voyager 2 acquired this image as it encountered Neptune in August of 1989.",
                                "nasa_id": "PIA01493",
                                "media_type": "image",
                                "secondary_creator": "NASA/JPL",
                                "date_created": "1998-10-30T15:11:01Z",
                                "title": "Neptune Rings"
                            }
                        ]
                    }
                ],
                metadata: { total_hits: 1 },
                href: 'https://images-api.nasa.gov/search?nasa_id=PIA01493'
            }
        };

        const expectedResponse = {
            dateCreated: '1998-10-30T15:11:01Z',
            title: 'Neptune Rings',
            description:
                'In Neptune outermost ring, 39,000 miles out, material mysteriously clumps into three arcs. Voyager 2 acquired this image as it encountered Neptune in August of 1989.',
            mediaType: 'image',
            nasaId: 'PIA01493',
            secondaryCreator:
                'NASA/JPL',
            image: 'https://images-assets.nasa.gov/image/PIA01493/PIA01493~thumb.jpg'
        };

        expect(normalize.asset(response)).toEqual(expectedResponse);
    });
});
