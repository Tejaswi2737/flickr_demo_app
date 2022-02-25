/* eslint-disable indent */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Text from '../features/Text';
import Card from './Card';
import { calenderConfig, formatAuthorName, getTags } from '../helpers';

const CardStackStyles = styled.div(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '20px',
}));

function CardsList() {
  const [value, setvalue] = useState('himalayas');
  const [searchImages, setsearchImages] = useState(true);
  const [images, setimages] = useState([]);
  const CORS_URL = 'https://getByCors.herokuCardsList.com/';
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
                setvalue={setvalue}
                setsearchImages={setsearchImages}
              />
            );
})}
          </CardStackStyles>
        ) : <Text content="No search results found" />
    );
}

export default CardsList;
