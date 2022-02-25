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
  const [value, setvalue] = useState('dog');
  const [images, setimages] = useState([]);

  useEffect(() => {
    setimages([]);
    const CORS_URL = 'https://getByCors.herokuapp.com/';
    const BASE_URL = 'https://api.flickr.com/services/feeds/photos_public.gne?';

    axios.get(`${CORS_URL}${BASE_URL}tags=${value}&format=json&nojsoncallback=true`).then((response) => {
      setimages(response.data);
    });
  }, [value]);

    return (
      <AppStyles>
        <SearchBar value={value} setvalue={setvalue} />
        {images && images.items?.length > 0 ? (
          <CardStackStyles>
            { images.items.map((item) => {
            const {
                media,
                // eslint-disable-next-line camelcase
                date_taken,
                author,
                tags,
            } = item;

            return (
              <Card
                imgSrc={media.m}
                title={formatAuthorName(author)}
                // eslint-disable-next-line camelcase
                dateTaken={calenderConfig(date_taken)}
                tags={getTags(tags)}
                setvalue={setvalue}
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
