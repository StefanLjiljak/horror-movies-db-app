import { Box } from 'reflexbox';
import styled from '@emotion/styled';

const SearchMovie = ({ searchMovie, returnMovie }) => {
  return (
    <SearchMovieStyled>
      <form>
        <input
          type="text"
          placeholder="Movie Name..."
          name="search"
          onChange={searchMovie}
          id="textInput"
          required
        />
        <input
          type="submit"
          value="Submit"
          onSubmit={returnMovie}
          id="submitInput"
        />
      </form>
    </SearchMovieStyled>
  );
};

const SearchMovieStyled = styled.div`
  width: 100%;

  form {
    width: 100%;
  }

  #textInput {
    border: 0.1px solid #4c9ee3;
    border-radius: 5px;
    width: 80%;
  }

  #textInput:hover {
    border: 1.5px solid #4c9ee3;
  }

  #submitInput {
    margin-top: 1rem;
    padding: 0.2rem;
    border: 0.01px solid #4c9ee3;
    border-radius: 5px;
    width: 22%;
    cursor: pointer;
  }
`;

export default SearchMovie;
