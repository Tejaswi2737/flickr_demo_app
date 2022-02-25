/* eslint-disable indent */
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import BeatLoader from 'react-spinners/BeatLoader';

import Card from './components/Card';
import SearchBar from './features/SearchBar';
import { calenderConfig, formatAuthorName, getTags } from './helpers';
import { BACKGROUND_COLOR, COLORS } from './theme';

const CardStackStyles = styled.div(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '20px',
}));

const AppStyles = styled.div(() => ({
  backgroundColor: BACKGROUND_COLOR.dark,
  padding: '20px',
  minHeight: '100vh',
  height: 'fit-content',
  maxWidth: '100vw',
  overflowX: 'hidden',
}));

const override = css`
  display: block;
  border-color: red;
  justify-content: center;
  width: 100%;
  margin: auto;
  left: 45%;
  align-items: center;
  top: 40vh;
  position: relative;
`;

function App() {
  const [value, setvalue] = useState('himalayas');
  const [searchImages, setsearchImages] = useState(true);
  const [images, setimages] = useState([]);
  const CORS_URL = 'https://getByCors.herokuapp.com/';
  const BASE_URL = 'https://api.flickr.com/services/feeds/photos_public.gne?';

  useEffect(() => {
    setimages([]);
    if (searchImages) {
      axios.get(`${CORS_URL}${BASE_URL}tags=${value}&format=json&nojsoncallback=true`).then((response) => {
        setimages(response.data);
      });
    }
    setsearchImages(false);
  }, [searchImages]);

    return (
      <AppStyles>
        <SearchBar
          value={value}
          setvalue={setvalue}
          setsearchImages={setsearchImages}
        />
        {images && images.items?.length > 0 ? (
          <CardStackStyles>
            { images.items.map((item) => {
                const {
                    media,
                    date_taken: dateTaken,
                    author,
                    tags,
                } = item;

                return (
                  <Card
                    imgSrc={media.m}
                    key={media.m}
                    title={formatAuthorName(author)}
                    dateTaken={calenderConfig(dateTaken)}
                    tags={getTags(tags)}
                    setvalue={setvalue}
                    setsearchImages={setsearchImages}
                  />
                );
            })}
          </CardStackStyles>
        ) : (
          <BeatLoader color={COLORS.light} loading css={override} />
        )}
      </AppStyles>
  );
}

export default App;
