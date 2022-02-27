/* eslint-disable indent */
import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import BeatLoader from 'react-spinners/BeatLoader';
import { useDispatch, useSelector } from 'react-redux';

import Card from './components/Card/Card';
import SearchBar from './components/SearchBar/SearchBar';
import Text from './features/Text/Text';

import { calenderConfig, formatAuthorName, getTags } from './helpers';
import { BACKGROUND_COLOR, COLORS } from './theme';
import { getImagesListAsync, isFetchingImages, showimages } from './searchSlice';

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
  left: 50%;
  align-items: center;
  top: 40vh;
  position: relative;
`;

const StyledTitles = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 5vh 0
`;

function App() {
    const dispatch = useDispatch();
    const images = useSelector(showimages);
    const isFetching = useSelector(isFetchingImages);

    useEffect(() => {
      dispatch(getImagesListAsync(window.sessionStorage.getItem('searchTag') || 'Himalayas'));
    }, []);

    return (
      <AppStyles>
        <StyledTitles>
          <Text
            size="title"
            height="large"
            content="Flickr public feed"
            color="yellow"
          />
        </StyledTitles>

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
                    link,
                } = item;

                return (
                  <Card
                    imgSrc={media.m}
                    key={media.m}
                    title={formatAuthorName(author)}
                    dateTaken={calenderConfig(dateTaken)}
                    tags={getTags(tags)}
                    externalImageLink={link}
                  />
                );
            })}
            </CardStackStyles>
        ) : (
          <StyledTitles>
            <Text
              size="large"
              height="large"
              content="No images found, please try another tag"
              color="orange"
            />
          </StyledTitles>
          ))}

        {isFetching && <BeatLoader color={COLORS.light} loading css={override} />}

      </AppStyles>
  );
}

export default App;
