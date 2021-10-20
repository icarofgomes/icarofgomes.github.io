import image from './teste.png';

const projects = [
  {
    name: 'Star Wars Planets',
    image: 'https://resources.stuff.co.nz/content/dam/images/1/6/a/y/z/u/image.related.StuffLandscapeSixteenByNine.1240x700.16ayjm.png/1439342329022.jpg?format=pjpg&optimize=medium',
    description: 'Nesta aplicação é possível realizar busca de alguns planetas predefinidos do universo de starwars, é possível realizar a busca por nome, aplicar filtros e reordenar a lista. Disponível para Mobile.',
    techs: ['React', 'ContextAPI', 'Tailwind', 'ReactHook'],
    github: 'https://github.com/icarofgomes/starwars-planets/tree/master',
    link: 'https://icarofgomes.github.io/starwars-planets/',
  },
  {
    name: 'Trybe Wallet',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw0YgSrofKrWB22jJUW51FJ6fafScLVUYyTA&usqp=CAU',
    description: 'Na Trybe Wallet é possível lançar suas despesas em diversas moedas, assim como seus detalhes, o valor é automaticamente convertido para o Real e apresentado o valor total das despesas. Disponível para Mobile',
    techs: ['React', 'JavaScript', 'Redux', 'Tailwind'],
    github: 'https://github.com/icarofgomes/trybe-wallet/tree/master',
    link: 'https://icarofgomes.github.io/trybe-wallet/',
  },
  {
    name: 'Movie Cards',
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fall-movies-index-1628968089.jpg',
    description: 'Nesta aplicação do tipo CRUD, é possível criar, ler, atualizar e deletar cartões de filmes. É possível colocar foto, descrição e classificar filmes. Disponível para Mobile.',
    techs: ['React', 'SwipeJS', 'Tailwind', 'Router'],
    github: 'https://github.com/icarofgomes/movie-cards/tree/master',
    link: 'https://icarofgomes.github.io/movie-cards/',
  },
  {
    name: 'Trybe Trivia',
    image: 'https://techcrunch.com/wp-content/uploads/2021/04/GettyImages-1282124793.jpg?w=730&crop=1',
    description: 'Projeto em grupo, nesse jogo do tipo Trivia a pessoa pode testar seus conhecimentos e ainda controlar seu desempenho com um ranking final, ainda com um áudio no fundo para motivar. Disponível para mobile.',
    techs: ['React', 'Redux', 'Bootstrap', 'ReactSound'],
    github: 'https://github.com/icarofgomes/trybetrivia/tree/master',
    link: 'https://icarofgomes.github.io/trybetrivia/',
  },
  {
    name: 'Recipes App',
    image: 'https://utilplast.vteximg.com.br/arquivos/ids/294560-800-800/ratatouille.jpg?v=637427071124270000',
    description: 'Projeto em grupo, nessa aplicação Mobile busque por receitas de comidas e bebidas, explore receitas por ingredientes e regiões, controle suas receitas feitas e favoritas, além de controlar o progresso da sua receita. Disponível apenas para Mobile.',
    techs: ['React', 'ContextAPI', 'Bootstrap', 'Hooks'],
    github: 'https://github.com/icarofgomes/recipes-app/tree/master',
    link: 'https://icarofgomes.github.io/recipes-app/',
  },
];

const intro = {
  name: 'Resumo',
  image: image,
  description: 'Olá, meu nome é Icaro e moro em São Paulo, boas vindas aos meu portfólio. Criei essa página para mostrar alguns dos meus projetos como estudande de Desenvolvimento Web na Trybe. Espero que gostem.',
  techs: ['React', 'JavaScript', 'Redux', 'Tailwind', 'CSS']
};

export { projects, intro };
