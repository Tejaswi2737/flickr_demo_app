import axios from 'axios';
import store from './store';
import {
    getImagesListAsync, clearImages, setSearchWord, CORS_URL, BASE_URL, setLoading,
} from './searchSlice';

jest.mock('axios');

test('sets search word', () => {
    store.dispatch(setSearchWord('Testing'));

    const { searchValue } = store.getState().search;
    expect(searchValue).toBe('Testing');
});

test('sets search word and gets images list', async () => {
    const imagesResponse = {
        data: {
            items: [
                {
                    author: 'nobody@flickr.com ("Lopamudra !")',
                    author_id: '10860497@N07',
                    date_taken: '2022-02-26T18:21:16-08:00',
                    media: { m: 'https://live.staticflickr.com/65535/51905346049_75609ebf41_m.jpg' },
                    published: '2022-02-26T12:54:30Z',
                    tags: 'lopamudra lopamudrabarman lopa building structure palace himalaya himalayas himachal hp himachalpradesh india rampur bushahr royal beauty beautiful architecture padampalace',
                    title: 'Padam Palace of Bushahr !!',
                },
                {
                    author: 'nobody@flickr.com ("Lopamudra !")',
                    author_id: '10860497@N07',
                    date_taken: '2022-02-26T18:21:16-08:00',
                    media: { m: 'https://live.staticflickr.com/65535/51905346049_75609ebf41_m.jpg' },
                    published: '2022-02-26T12:54:30Z',
                    tags: 'lopamudra lopamudrabarman lopa building structure palace himalaya himalayas himachal hp himachalpradesh india rampur bushahr royal beauty beautiful architecture padampalace',
                    title: 'Padam Palace of Bushahr !!',
                },
                {
                    author: 'nobody@flickr.com ("Lopamudra !")',
                    author_id: '10860497@N07',
                    date_taken: '2022-02-26T18:21:16-08:00',
                    media: { m: 'https://live.staticflickr.com/65535/51905346049_75609ebf41_m.jpg' },
                    published: '2022-02-26T12:54:30Z',
                    tags: 'lopamudra lopamudrabarman lopa building structure palace himalaya himalayas himachal hp himachalpradesh india rampur bushahr royal beauty beautiful architecture padampalace',
                    title: 'Padam Palace of Bushahr !!',
                },
            ],
        },
    };
    axios.get.mockResolvedValueOnce(imagesResponse);

    await store.dispatch(getImagesListAsync('Testing'));

    expect(axios.get).toHaveBeenCalledWith(`${CORS_URL + BASE_URL}&tags=${'Testing'}`);
    const { searchValue, images, searchError } = store.getState().search;
    expect(searchError).toBe('');
    expect(searchValue).toBe('Testing');
    expect(images).toBe(imagesResponse.data);
});

test('clears images list', () => {
    store.dispatch(clearImages());
    const { images } = store.getState().search;
    expect(images).toStrictEqual([]);
});

test('show searchError', async () => {
    const errorResponse = {
        message: 'No images found, please try another tag',
    };
    axios.get.mockRejectedValueOnce(errorResponse.message);
    await store.dispatch(getImagesListAsync('Tesergegting'));
    expect(axios.get).toHaveBeenCalledWith(`${CORS_URL + BASE_URL}&tags=${'Testing'}`);
    const { searchValue, images, searchError } = store.getState().search;
    expect(searchValue).toBe('Tesergegting');
    expect(images).toStrictEqual([]);
    expect(searchError).toBe('Something went wrong while fetching images, please try again');
});

test('set isLoading', () => {
    store.dispatch(setLoading(true));
    const { isFetchingImages } = store.getState().search;
    expect(isFetchingImages).toStrictEqual(true);
});
