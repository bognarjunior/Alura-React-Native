import green from '../assets/producers/green.png';
import salad from '../assets/producers/salad.png';
import jennyJack from '../assets/producers/jenny-jack.png';
import grow from '../assets/producers/grow.png';
import potager from '../assets/producers/potager.png';

import tomato from '../assets/vegetables/tomato.png';
import broccoli from '../assets/vegetables/broccoli.png';
import potato from '../assets/vegetables/potato.png';
import cucumber from '../assets/vegetables/cucumber.png';
import pumpkin from '../assets/vegetables/pumpkin.png';
import carrot from '../assets/vegetables/carrot.png';
import carrot2 from '../assets/vegetables/carrot2.png';
import asparagus from '../assets/vegetables/asparagus.png';
import vegetables from '../assets/vegetables/vegetables.png';

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
      distance: `${randomNumber(1, 500)}`,
      stars: randomNumber(1, 5),
      baskets: [
        {
          detail: {
            name: 'Brócolis e Pepino',
            description:
              'Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha',
            price: 'R$ 40,00',
            image: cucumber,
          },
          items: [
            {
              name: 'Brócolis',
              image: broccoli,
            },
            {
              name: 'Pepino',
              image: cucumber,
            },
          ],
        },
        {
          detail: {
            name: 'Brócolis',
            description:
              'Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha',
            price: 'R$ 40,00',
            image: broccoli,
          },
          items: [
            {
              name: 'Brócolis',
              image: broccoli,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: 'Salad',
      image: salad,
      distance: `${randomNumber(1, 500)}`,
      stars: randomNumber(1, 5),
      baskets: [
        {
          detail: {
            name: 'Salada completa',
            description:
              'Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha',
            price: 'R$ 40,00',
            image: vegetables,
          },
          itens: [
            {
              name: 'Tomate',
              image: tomato,
            },
            {
              name: 'Brócolis',
              image: broccoli,
            },
            {
              name: 'Pepino',
              image: cucumber,
            },
          ],
        },
        {
          detail: {
            name: 'Tomate e pepino',
            description:
              'Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha',
            price: 'R$ 40,00',
            image: tomato,
          },
          itens: [
            {
              name: 'Tomate',
              image: tomato,
            },
            {
              name: 'Pepino',
              image: cucumber,
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: 'Jenny Jack Farm',
      image: jennyJack,
      distance: `${randomNumber(1, 500)}`,
      stars: randomNumber(1, 5),
      baskets: [
        {
          detail: {
            name: 'Muita Batata',
            description:
              'Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha',
            price: 'R$ 40,00',
            image: potato,
          },
          itens: [
            {
              name: 'Batata',
              image: potato,
            },
          ],
        },
        {
          detail: {
            name: 'Tomate e Brócolis',
            description:
              'Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha',
            price: 'R$ 40,00',
            image: broccoli,
          },
          itens: [
            {
              name: 'Tomate',
              image: tomato,
            },
            {
              name: 'Brócolis',
              image: broccoli,
            },
          ],
        },
      ],
    },
    {
      id: 4,
      name: 'Grow',
      image: grow,
      distance: `${randomNumber(1, 500)}`,
      stars: randomNumber(1, 5),
      baskets: [
        {
          detail: {
            name: 'Abobora e Aspargos',
            description:
              'Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha',
            price: 'R$ 40,00',
            image: asparagus,
          },
          itens: [
            {
              name: 'Abóbora',
              image: pumpkin,
            },
            {
              name: 'Aspargos',
              image: asparagus,
            },
          ],
        },
        {
          detail: {
            name: 'Tomate e Abobora',
            description:
              'Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha',
            price: 'R$ 40,00',
            image: pumpkin,
          },
          itens: [
            {
              name: 'Tomate',
              image: tomato,
            },
            {
              name: 'Abóbora',
              image: pumpkin,
            },
          ],
        },
      ],
    },
    {
      id: 5,
      name: 'Potager',
      image: potager,
      distance: `${randomNumber(1, 500)}`,
      stars: randomNumber(1, 5),
      baskets: [
        {
          detail: {
            name: 'Pepinos',
            description:
              'Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha',
            price: 'R$ 40,00',
            image: cucumber,
          },
          itens: [
            {
              name: 'Pepino',
              image: cucumber,
            },
          ],
        },
        {
          detail: {
            name: 'Brócolis, Aspargos e Cenoura',
            description:
              'Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha',
            price: 'R$ 40,00',
            image: carrot2,
          },
          itens: [
            {
              name: 'Brócolis',
              image: broccoli,
            },
            {
              name: 'Aspargos',
              image: asparagus,
            },
            {
              name: 'Cenoura',
              image: carrot,
            },
          ],
        },
      ],
    },
  ],
};

export default producers;
