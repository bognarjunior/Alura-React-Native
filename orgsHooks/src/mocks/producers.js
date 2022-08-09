import green from '../assets/producers/green.png';
import salad from '../assets/producers/salad.png';
import jennyJack from '../assets/producers/jenny-jack.png';
import grow from '../assets/producers/grow.png';
import potager from '../assets/producers/potager.png';

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const producers = {
  title: 'Produtores',
  list: [
    {
      id: 1,
      name: 'Green',
      image: green,
      distance: `${randomNumber(1, 500)}m`,
      stars: randomNumber(1, 5),
    },
    {
      id: 2,
      name: 'Salad',
      image: salad,
      distance: `${randomNumber(1, 4)}km`,
      stars: randomNumber(1, 5),
    },
    {
      id: 3,
      name: 'Jenny Jack Farm',
      image: jennyJack,
      distance: `${randomNumber(1, 10)}km`,
      stars: randomNumber(1, 5),
    },
    {
      id: 4,
      name: 'Grow',
      image: grow,
      distance: `${randomNumber(1, 999)}m`,
      stars: randomNumber(1, 5),
    },
    {
      id: 5,
      name: 'Potager',
      image: potager,
      distance: `${randomNumber(1, 3)}km`,
      stars: randomNumber(1, 5),
    },
  ],
};

export default producers;
