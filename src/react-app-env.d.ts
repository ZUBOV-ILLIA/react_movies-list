/// <reference types="react-scripts" />

export interface Movie {
  title: string;
  description: string;
  imgUrl: string;
  imdbUrl: string;
  imdbId: string;
}

export type Props = {
  movies: Movie[];
};
