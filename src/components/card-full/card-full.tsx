import { CardFullUI } from "../ui/card-full";
import { TCardFullUIProps } from "../ui/card-full/types";
import image from '../../assets/images/film.png'

export const CardFull = () => {
  const o: TCardFullUIProps = {
    rating: 2.9,
    author: "Итан Райт",
    genre: "Документальный",
    title: "Архитекторы общества",
    description: "Документальный фильм Итана Райта исследует влияние технологий на современное общество, уделяя особое внимание роли искусственного интеллекта в формировании нашего будущего. Фильм исследует этические, философские и социальные последствия гонки технологий ИИ и поднимает вопрос: какой мир мы создаём для будущих поколений.",
    image: image
  }

  return (
    <CardFullUI {...o}/>
  )
}