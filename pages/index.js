import fetch from 'isomorphic-unfetch';
import Card from '../components/Card';
import { Flex, Box } from 'reflexbox';
import SearchMovie from '../components/SearchMovie';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home({ movies, page, total_pages }) {
  let search;
  const router = useRouter();
  const [QUERY, setQUERY] = useState('the');
  const searchMovie = (e) => {
    search = e.target.value;
    return search;
  };
  const returnMovie = (e) => {
    setQUERY(search);
  };

  return movies.length > 0 ? (
    <Box className="content" variant="container">
      <Box my={40} as="h2">
        Search Movies
      </Box>
      <SearchMovie searchMovie={searchMovie} returnMovie={returnMovie} />
      <Flex
        justifyContent="space-evenly"
        flexDirection={{ _: 'column', md: 'row' }}
        display="flex"
        flexWrap="wrap"
        height="100%"
        mb={100}
      >
        {movies
          .filter((movie) => movie.poster_path && movie.overview)
          .map((movie) => (
            <Box
              key={movie.id}
              maxHeight="33rem"
              min-height="32.999rem"
              width={{ _: '100%', md: '30%' }}
              marginTop="2rem"
            >
              <Card movie={movie} />
            </Box>
          ))}
      </Flex>
      <Flex
        id="paginationNav"
        mt={27}
        justifyContent="space-evenly"
        maxWidth="100%"
      >
        <button
          onClick={() => router.push(`/?page=${page - 1}`)}
          disabled={page <= 1}
        >
          Previous
        </button>
        <p className="pages">{`Page: ${page} of ${total_pages}`}</p>
        <button
          onClick={() => router.push(`/?page=${page + 1}`)}
          disabled={page === total_pages}
        >
          Next
        </button>
      </Flex>
    </Box>
  ) : (
    <Box variant="container">
      <Box variant="container" mt={30}>
        <h3>Movie not found.</h3>
      </Box>
      <Box my={40} as="h2">
        Search Movies
      </Box>
      <SearchMovie searchMovie={searchMovie} returnMovie={returnMovie} />
    </Box>
  );
}

export async function getServerSideProps({ query: { page = 1, search } }) {
  let film = search;
  let QUERY = film || 'horror';
  const API_URL = 'https://api.themoviedb.org/3';
  const API_KEY = '802b15496c5b3fc4c17fd9247420013c';
  let URL = `${API_URL}/search/movie?api_key=${API_KEY}&query=${QUERY}&page=${page}`;

  const res = await fetch(URL);
  const data = await res.json();

  return {
    props: {
      movies: data.results,
      page: +page,
      total_pages: data.total_pages,
    },
  };
}
