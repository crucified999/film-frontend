import { TFilm } from "./types";

const BASE_URL = "https://virtserver.swaggerhub.com/FenixDeveloper/yp-afisha-api/1.0.0";

type TTotal = {
  total: number;
}

type TServerResponse<T> = TTotal & T;

type TFilmsResponse = TServerResponse<{
  total: number;
  items: TFilm[];
}>

const checkResponse = <T>(response: Response): Promise<TServerResponse<T>> => {
  return response.ok ? response.json() : response.json().then((err) => Promise.reject(err));
}

export const getFilms = () => {
  return fetch(`${BASE_URL}/films`, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
  }
})
    .then((res) => checkResponse<TFilmsResponse>(res))
    .then((data) => data.items)
    .catch((err) => {
      console.log(err);
    });
}