
import logo from './../../assets/logo.png'
import tomato from './../../assets/frutas/Tomate.png';
import broccoli from './../../assets/frutas/Brocolis.png';
import potato from './../../assets/frutas/Batata.png';
import cucumber from './../../assets/frutas/Pepino.png';
import pumpkin from './../../assets/frutas/Abobora.png';

const basket = {
  top:  {
    title: "Detalhe da Cesta",
  },
  detail: {
    name: "Cesta de verduras",
    logoFarm: logo,
    nameFarm: "Jenny Jack Farm",
    description: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para a sua cozinha.",
    price: "R$ 40,00",
    buyButton: "Comprar",
  },
  items: {
    title: "Itens da cesta",
    list: [
      {
        name: "Tomate",
        image: tomato,
      },
      {
        name: "Brócolis",
        image: broccoli,
      },
      {
        name: "Batata",
        image: potato,
      },
      {
        name: "Pepino",
        image: cucumber,
      },
      {
        name: "Abóbora",
        image: pumpkin,
      }
    ]
  }
}

export default basket;