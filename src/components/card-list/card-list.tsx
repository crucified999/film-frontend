import { CardListUI } from "../ui/card-list/card-list";
import image from '../../assets/images/film.png'

const cards = [
  {
    id: '1',
    title: 'Архитекторы общества',
    image: image
  }
]

export const CardList = () => {
  return (
    <CardListUI cards={cards} />
  );
}