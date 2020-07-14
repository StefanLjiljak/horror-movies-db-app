import styled from '@emotion/styled';
import Link from 'next/link';

function Card({ movie }) {
  return (
    <CardStyled>
      <div className="poster">
        <img
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
          alt="Movie image"
        />
      </div>
      <div className="body">
        <h3>{truncate(movie.original_title, 24)}</h3>
        <p dangerouslySetInnerHTML={{ __html: truncate(movie.overview, 60) }} />
        <Link href="/movies/movie/[id]" as={`/movies/movie/${movie.id}`}>
          <a>More about this movie</a>
        </Link>
      </div>
    </CardStyled>
  );
}

function truncate(str, len) {
  if (str.length > len && str.length > 0) {
    let new_str = str + ' ';
    new_str = str.substr(0, len);
    new_str = str.substr(0, new_str.lastIndexOf(' '));
    new_str = new_str.length > 0 ? new_str : str.substr(0, len);
    return new_str + '...';
  }
  return str;
}

const CardStyled = styled.div`
  max-height: 33rem;
  min-height: 32.999rem;
  width: 100%;
  border: 1px solid #cccccc;
  margin-top: 50px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  position: relative;

  .poster {
    max-height: 300px;
    max-width: 300px;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 1rem auto;
    img {
      max-height: 278px;
      max-width: 185px;
    }
  }

  .body {
    padding: 20px;

    h3 {
      margin-bottom: 20px;
    }

    p {
      color: #666666;
      line-height: 1.5;
    }

    a {
      display: inline-block;
      position: absolute;
      bottom: 0.6rem;
      right: 2rem;
    }
  }
`;

export default Card;
