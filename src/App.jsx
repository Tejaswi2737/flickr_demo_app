/* eslint-disable indent */
import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import BeatLoader from 'react-spinners/BeatLoader';

import { useDispatch, useSelector } from 'react-redux';
import Card from './components/Card';
import SearchBar from './features/SearchBar';
import { calenderConfig, formatAuthorName, getTags } from './helpers';
import { BACKGROUND_COLOR, COLORS } from './theme';
import { getImagesListAsync, isFetchingImages, showimages } from './searchSlice';
import Text from './features/Text';

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
    const dispatch = useDispatch();
    const images = useSelector(showimages);
    const isFetching = useSelector(isFetchingImages);

    useEffect(() => {
      dispatch(getImagesListAsync('Himalayas'));
    }, []);

    return (
      <AppStyles>
        <SearchBar />
        {!isFetching && (
          images && images.items?.length > 0 ? (
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
                  />
                );
            })}
            </CardStackStyles>
        ) : <Text content="No images found, please try another tag" />)}

        {isFetching && <BeatLoader color={COLORS.light} loading css={override} />}

      </AppStyles>
  );
}

export default App;
