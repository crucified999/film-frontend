import { CardUI } from "../ui/card/card";
import image from '../../assets/images/film.png'

export const Card = () => {
  return (
    <CardUI
      id="1"
      title="Архитекторы общества"
      image={image}
    />
  );
}