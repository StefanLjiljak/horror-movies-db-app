import fetch from 'isomorphic-unfetch';
import { Box, Flex } from 'reflexbox';
import Router from 'next/dist/next-server/server/router';
import { useRouter } from 'next/router';

const MoviesPage = ({ movies, page, total_pages }) => {
  const router = useRouter();

  return (
    <Box variant="container" pt={27} textAlign="center">
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h3>{movie.original_title}</h3>
          </li>
        ))}
      </ul>
      <Flex mt={27} justifyContent="space-evenly" maxWidth="100%">
        <button
          onClick={() => router.push(`/movies?page=${page - 1}`)}
          disabled={page <= 1}
        >
          Previous
        </button>
        <p>{` <<<  Page: ${page} of ${total_pages}>>>`}</p>
        <button
          onClick={() => router.push(`/movies?page=${page + 1}`)}
          disabled={page === total_pages}
        >
          Next
        </button>
      </Flex>
    </Box>
  );
};

export async function getServerSideProps({ query: { page = 1 } }) {
  const API_URL = 'https://api.themoviedb.org/3';
  const API_KEY = '802b15496c5b3fc4c17fd9247420013c';
  const QUERY = 'horror';

  const start = +page === 1 ? 0 : (+page - 1) * 3;

  const res = await fetch(
    `${API_URL}/search/movie?api_key=${API_KEY}&query=${QUERY}&page=${page}`
  );
  const data = await res.json();

  return {
    props: {
      movies: data.results,
      page: +page,
      total_pages: data.total_pages,
    },
  };
}

export default MoviesPage;
