import image from './perfil.png';

const projects = [
  {
    name: 'Star Wars Planets',
    image: 'https://resources.stuff.co.nz/content/dam/images/1/6/a/y/z/u/image.related.StuffLandscapeSixteenByNine.1240x700.16ayjm.png/1439342329022.jpg?format=pjpg&optimize=medium',
    description: 'Projeto criado em React, utilizando Context API para gerenciamento do estado global da aplicação. Os estilos foram contruídos utilizando o Tailwind e para trazer a lista de planetas foi consumida a SWAPI. Disponível também para Mobile.',
    techs: ['React', 'ContextAPI', 'Tailwind', 'ReactHook'],
    github: 'https://github.com/icarofgomes/starwars-planets/tree/master',
    link: 'https://icarofgomes.github.io/starwars-planets/',
  },
  {
    name: 'Trybe Wallet',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw0YgSrofKrWB22jJUW51FJ6fafScLVUYyTA&usqp=CAU',
    description: 'Projeto criado em React, utilizando Redux para gerenciamento do estado global da aplicação. Foi consumida a AwesomeApi para trazer as cotações das moedas e os estilos foram construídos com Tailwind. Disponível também para Mobile',
    techs: ['React', 'JavaScript', 'Redux', 'Tailwind'],
    github: 'https://github.com/icarofgomes/trybe-wallet/tree/master',
    link: 'https://icarofgomes.github.io/trybe-wallet/',
  },
  {
    name: 'Movie Cards',
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fall-movies-index-1628968089.jpg',
    description: 'Nesta aplicação do tipo CRUD, é possível criar, ler, atualizar e deletar cartões de filmes. Aplicação construída em React utilizando rotas, foi utilizado Tailwind para os estilos e SwipeJS para trazer o comportamento de arrastar os cards na tela. Disponível também para Mobile.',
    techs: ['React', 'SwipeJS', 'Tailwind', 'Router'],
    github: 'https://github.com/icarofgomes/movie-cards/tree/master',
    link: 'https://icarofgomes.github.io/movie-cards/',
  },
  {
    name: 'Trybe Trivia',
    image: 'https://techcrunch.com/wp-content/uploads/2021/04/GettyImages-1282124793.jpg?w=730&crop=1',
    description: 'Projeto em grupo criado em React, foi utilizado o Bootstrap React para estilizar a página e o React Sound como biblioteca de sons, para gerenciar o estado global foi utilizado o Redux, foi consumida a TriviaAPI e como metodologia Kanban utilizamos o Trello. Disponível também para mobile.',
    techs: ['React', 'Redux', 'Bootstrap', 'ReactSound'],
    github: 'https://github.com/icarofgomes/trybetrivia/tree/master',
    link: 'https://icarofgomes.github.io/trybetrivia/',
  },
  {
    name: 'Recipes App',
    image: 'https://utilplast.vteximg.com.br/arquivos/ids/294560-800-800/ratatouille.jpg?v=637427071124270000',
    description: 'Projeto em grupo criado em React, a proposta foi criar um aplicativo. Utilizamos ContextAPI para gerenciar o estado global e o Bootstrap React para estilização e nos baseamos em um protótipo feito no Figma, nesta aplicação foi consumida tanto a api TheMealDB quanto a api TheCocktailDB para trazer as receitas. Foi utilizado o Trello como tecnologia para aplicar o Kanban. Disponível apenas para Mobile.',
    techs: ['React', 'ContextAPI', 'Bootstrap', 'Hooks'],
    github: 'https://github.com/icarofgomes/recipes-app/tree/master',
    link: 'https://icarofgomes.github.io/recipes-app/',
  },
];

const intro = {
  name: 'Resumo',
  image: image,
  description: 'Olá Visitantes! Criei este espaço para apresentar meus principais projetos como estudande de Desenvolvimento Web na plataforma Trybe. Desejo boas vindas a todos e espero que gostem.',
  techs: ['React', 'JavaScript', 'Redux', 'Tailwind', 'CSS']
};

export { projects, intro };
