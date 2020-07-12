import React from 'react';
import { Box, Flex } from 'reflexbox';
import fetch from 'isomorphic-unfetch';
import { NextSeo } from 'next-seo';

const Movie = ({ movie }) => {
  const SEO = {
    title: `MovieDB | ${movie.original_title}`,
    description: movie.overview,
    openGraph: {
      title: `MovieDB | ${movie.original_title}`,
      description: movie.overview,
    },
  };

  return (
    <>
      <NextSeo {...SEO} />
      <Flex flexWrap="wrap" flexDirection="row" height="100%" width="100%">
        <Box variant="container" width={{ _: '100%', md: '60%' }}>
          <Box as="h2" my={40}>
            {movie.original_title}
          </Box>
          <Box maxWidth={600}>
            <p dangerouslySetInnerHTML={{ __html: movie.overview }}></p>
          </Box>
        </Box>
        <Box
          width={{ _: '100%', md: '40%' }}
          height="100%"
          padding={{ md: 'auto', _: '1rem 3.6rem' }}
          margin={{ _: '1rem 1rem', md: '2rem auto 0' }}
        >
          <img
            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
            alt="Movie Poster"
            width={{ _: '100%', md: '50%' }}
            height={{ _: '100%', md: '50%' }}
            margin="auto"
            padding="auto"
          />
        </Box>
      </Flex>
    </>
  );
};

export async function getServerSideProps(context) {
  const API_URL = 'https://api.themoviedb.org/3';
  const API_KEY = '802b15496c5b3fc4c17fd9247420013c';

  const { id } = context.query;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=802b15496c5b3fc4c17fd9247420013c`
  );
  const data = await res.json();

  return {
    props: {
      movie: data,
    },
  };
}

export default Movie;
