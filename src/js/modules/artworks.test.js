import { countNumberOfArtworks, setItems } from './__mocks__/artworks.js';

const items = [
  {
    id: 9614,
    title: 'Haunted House',
    image_id: '0330a6dd-774e-eff1-0073-2be5f85b81d0',
  },
  {
    id: 16571,
    title: 'Arrival of the Normandy Train, Gare Saint-Lazare',
    image_id: '0f1cc0e0-e42e-be16-3f71-2022da38cb93',
  },
  {
    id: 16776,
    title: 'After the Hurricane, Bahamas',
    image_id: 'b34de958-1cbe-065f-4941-c34f64d2b366',
  },
  {
    id: 16794,
    title: 'The Gulf Stream',
    image_id: '4a076002-dffe-54e9-5256-0691c3a65c3b',
  },
  {
    id: 18751,
    title: 'Bust of Said Abdullah of the Darfour People',
    image_id: '6a0e3e40-1e36-2109-378f-3fc5d29176b3',
  },
  {
    id: 18747,
    title: 'The Law is too Slow',
    image_id: 'dded1149-36e9-4843-a9d8-cd54a4e641ce',
  },
  {
    id: 18759,
    title: 'Helmet Mask (Kponyungo)',
    image_id: 'a6b0bddb-5593-2970-baed-a677eaaa9a25',
  },
  {
    id: 18754,
    title: 'Bust of a Woman',
    image_id: '725d19ab-4bd4-e640-86f2-a119e0a154e0',
  },
  {
    id: 21727,
    title: 'Thanksgiving',
    image_id: 'd388928f-3222-b48c-1cbb-7afa917de928',
  },
  {
    id: 29669,
    title: 'Weary',
    image_id: '4d010c1b-dc95-2787-e224-bdb9baac1cb0',
  },
  {
    id: 24306,
    title: 'Blue and Green Music',
    image_id: '702580d8-451e-0b0c-bcc1-bac62e5f6631',
  },
  {
    id: 30731,
    title: 'Figure (Mbulu Ngulu)',
    image_id: 'e0e310b6-17a3-60c0-f9b5-2631abe9689c',
  },
];

test('artworks count test', () => {
  setItems(items);
  expect(countNumberOfArtworks()).toBe(12);
});
