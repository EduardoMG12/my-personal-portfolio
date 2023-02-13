export type ProjectsType = {
    [project: string]: IProjects[]
}

export interface IProjects {
    id: string,
    title: string,
    image: string,
    descriptionShort: string,
    descriptionLong: string,
    descriptionInteger?: string,
    iconTecnologics: IconTecnologyType[],
    codeAndDeploy: CodeDeployType
}

export type IconTecnologyType = {
    accessibility: string,
    className: string,
    color: string
}

export type CodeDeployType = {
    code: string
    deploy: string
}



const projects: ProjectsType =
{
	'Projetos': [{
		'id': '1',
		'title': 'Projeto Orange Juice',
		'image': 'https://docs.google.com/uc?id=1I3kIAWfqOamABw3xyWOtK_jHpG6Do-Wn',
		'descriptionShort': 'Um hackthon desenvolvido para uma entrevista de emprego...',
		'descriptionLong': 'Hackthon para empresa FCâmara após duas etapas para filtrar competidores(uma prova e uma entrevista) veio o projeto que teve como objetivo que nós fizessemos um site para OrangeJuice(empresa da Fcamara) seguindo certas regras assim testando nosso conhecimento e tendo o mesmo como portifolio, aonde eu, dois Desenvolvedores e uma UX Design, passamos quinze dias desenvolvendo um site que tinha como objetivo ter login de úsuarios e admins, 3 trilhas principais, entrando nas mesmas teriam vários cursos. O objetivo principal era entregar um crud, 3 páginas prontas responsivas. Sou muito grato por esse projeto, mesmo o mesmo não sendo concluido por falta de tempo e organização pois a maioria nunca tinha feito um projeto em equipe, senti ter ganho muito conhecimento e aprendizado nesses dias pois foi muito puxado nunca tinha me dedicado tanto a um projeto em tão pouco tempo, acho que ocorreu um grande desenvolvimento desde trabalho em grupo, sistema de branchs, react, insomnina...',
		'descriptionInteger': 'Este é o projeto resultante da participação em um hackathon realizado pela empresa FCamara. Durante 15 dias, nosso grupo de 5 pessoas contanto eu desenvolvemos um projeto completo utilizando Figma e tecnologias como React. A equipe se manteve organizada e atualizada por meio de dailys e o uso de ferramentas como o Kambam. O projeto foi dividido em duas partes, sendo o front-end desenvolvido em um repositório separado do back-end. A participação no projeto foi uma grande oportunidade de aprendizado para mim, pois ainda não possuiá familiaridade com React e trabalho em equipe. O desafio de aprender e aplicar uma nova tecnologia em um curto período de tempo ampliou minhas perspectiva e habilidades.',
		'iconTecnologics': [
			{

				'accessibility': 'JavaScript icon',
				'className': 'fa-brands fa-js',
				'color': '#EAD41C'
			},
			{
				'accessibility': 'TypeScript icon',
				'className': 'devicon-typescript-plain',
				'color': '#2C9FD8'
			},
			{
				'accessibility': 'NextJs icon',
				'className': 'devicon-nextjs-original',
				'color': 'black'
			},
			{
				'accessibility': 'React icon',
				'className': 'fa-brands fa-react',
				'color': '#2C9FD8'
			},
			{
				'accessibility': 'Node.js icon',
				'className': 'fa-brands fa-node-js',
				'color': 'orange'
			},
			{
				'accessibility': 'MongoDb icon',
				'className': 'devicon-mongodb-plain',
				'color': 'green'
			}
		],
		'codeAndDeploy': {
			'code': 'https://github.com/orgs/orange-squad28/repositories',
			'deploy': ''
		}
	},
	{
		'id': '2',
		'title': 'PokeDex',
		'image': 'https://docs.google.com/uc?id=1JOVfsdbyfyie0dGhIhiv7Ncdu4JvLWHd',
		'descriptionShort': 'Pokedex feita consumindo api.',
		'descriptionLong': 'Uma Pokedex feita com consumo de api usando axios para fazer as requisições para pokeapi fiz a mesma usando components da bibilhoteca Material-UI a mesma é totalmente responsiva e muito bem estrutura',
		'iconTecnologics': [
			{
				'accessibility': 'TypeScript icon',
				'className': 'devicon-typescript-plain',
				'color': '#2C9FD8'
			},
			{
				'accessibility': 'React icon',
				'className': 'fa-brands fa-react',
				'color': '#2C9FD8'
			},
			{
				'accessibility': 'Materialui',
				'className': 'devicon-materialui-plain',
				'color': '#2C9FD8'
			},
		],
		'codeAndDeploy': {
			'code': 'https://github.com/EduardoMG12/Pokedex',
			'deploy': 'https://pokedex-ngst37m8t-eduardomg12.vercel.app'
		}
	},
	{
		'id': 'a78d78128',
		'title': 'Landing Page',
		'image': 'https://docs.google.com/uc?id=1HmGJzFwioWkvRb9BMG_D51GD5kSGz4Tq',
		'descriptionShort': 'landing page com uma breve historia sobre eu e aprensetaçao',
		'descriptionLong': 'Um projeto que fiz com o objetivo de treinar/testar meus conhecimentos de html css e js, um projeto simples porem funcional, que tem como premissa ser uma página contando um pouco da minha hístoria e me apresentando, mostrando minhas midias profissionais.',
		'descriptionInteger': 'as vezes falão que menos é mais, esta landing page tem como objetivo fazer uma breve apresentação de quem sou com um layout simple e objetivo, a época que eu a fiz foi com objetivo de testar meus conhecimentos de javascript html e css, a mesma é totalmente responsiva.',
		'iconTecnologics': [
			{
				'accessibility': 'JavaScript',
				'className': 'fa-brands fa-js',
				'color': '#EAD41C'
			},
			{
				'accessibility': 'HTML',
				'className': 'fa-brands fa-html5',
				'color': '#E56027'
			},
			{
				'accessibility': 'CSS',
				'className': 'fa-brands fa-css3-alt',
				'color': '#2C9FD8'
			},
		],
		'codeAndDeploy': {
			'code': 'https://github.com/EduardoMG12/landing-page-basic-all-black',
			'deploy': 'https://landing-page-basic-all-black-3beceh95r-eduardomg12.vercel.app'
		}
	},
	],
	'JavaScript': [{

		'id': '347892738yazwe4',
		'title': 'Busca de perfis do github por api',
		'image': 'https://docs.google.com/uc?id=1NMotoboMaqvqDAy2bTlg1EdF5ZVq_nKy',
		'descriptionShort': 'Página que puxa o github de usúarios pela a api ',
		'descriptionLong': 'Uma página completamente responsiva com um input para puxar nick-names de usuários do github, este projeto foi feito vizando a organização e a separação de arquivos interface telas entre outras coisas para o código ficar mais limpo. ',
		'descriptionInteger': 'Um projeto feito apartir do curso dev-quest, o mesmo tem como o objetivo fazer o consumo de uma api, fiz umas customizações para deixa-lo mais atrativo, no mesmo uso axios para fazer as requisições e ele é totalmente responsivo.',
		'iconTecnologics': [
			{
				'accessibility': 'JavaScript',
				'className': 'fa-brands fa-js',
				'color': '#EAD41C'
			},
			{
				'accessibility': 'HTML',
				'className': 'fa-brands fa-html5',
				'color': '#E56027'
			},
			{
				'accessibility': 'CSS',
				'className': 'fa-brands fa-css3-alt',
				'color': '#2C9FD8'
			},

		],
		'codeAndDeploy': {
			'code': 'https://github.com/EduardoMG12/getProfileGithub',
			'deploy': 'https://get-profile-github.vercel.app'
		}

	},
	{
		'id': '347892738y4',
		'title': 'Timer',
		'image': 'https://docs.google.com/uc?id=1B2XkhxV8YLOUek_BzHv-cPiR84r_zmLT',
		'descriptionShort': 'Cronômetro funcional',
		'descriptionLong': 'Um projeto simples porem funcional de um timer com três botões, reset para zerar o timer, pause para parar e init para começar a contar ou continuar, o projeto sendo funcional e responsivo.',
		'descriptionInteger': 'Um projeto simples porem funcional de um timer com três botões, reset para zerar o timer, pause para parar e init para começar a contar ou continuar, o projeto sendo funcional e responsivo.',
		'iconTecnologics': [
			{
				'accessibility': 'JavaScript',
				'className': 'fa-brands fa-js',
				'color': '#EAD41C'
			},
			{
				'accessibility': 'HTML',
				'className': 'fa-brands fa-html5',
				'color': '#E56027'
			},
			{
				'accessibility': 'CSS',
				'className': 'fa-brands fa-css3-alt',
				'color': '#2C9FD8'
			},

		],
		'codeAndDeploy': {
			'code': '',
			'deploy': ''
		}

	},
	{
		'id': '12378916045',
		'title': 'To-do List',
		'image': 'https://docs.google.com/uc?id=1i40foVeV2xbF7CuVXqwmSUZ2ltoDLtZY',
		'descriptionShort': 'Uma lista de a fazeres que guarda dados em LocalStorage',
		'descriptionLong': 'O projeto ajuda a organizar as ideias o objetivo é ser uma lista de a fazeres aonde você mesmo consegue colocar e deletar itens, a mesma tem a função de deletar os a fazeres apertando no botão e de adicionar apertando no botão ou apertando enter. A página é completamente responsivel.',
		'descriptionInteger': 'Este é o projeto resultante da participação em um hackathon realizado pela empresa FCamara. Durante 15 dias, nosso grupo de 5 pessoas contanto eu desenvolvemos um projeto completo utilizando Figma e tecnologias como React. A equipe se manteve organizada e atualizada por meio de dailys e o uso de ferramentas como o Kambam. O projeto foi dividido em duas partes, sendo o front-end desenvolvido em um repositório separado do back-end. A participação no projeto foi uma grande oportunidade de aprendizado para mim, pois ainda não possuiá familiaridade com React e trabalho em equipe. O desafio de aprender e aplicar uma nova tecnologia em um curto período de tempo ampliou minhas perspectiva e habilidades.',
		'iconTecnologics': [
			{
				'accessibility': 'JavaScript',
				'className': 'fa-brands fa-js',
				'color': '#EAD41C'
			},
			{
				'accessibility': 'HTML',
				'className': 'fa-brands fa-html5',
				'color': '#E56027'
			},
			{
				'accessibility': 'CSS',
				'className': 'fa-brands fa-css3-alt',
				'color': '#2C9FD8'
			},
		],
		'codeAndDeploy': {
			'code': 'https://github.com/EduardoMG12/to-do-list',
			'deploy': 'https://to-do-list-q2mht4ni7-eduardomg12.vercel.app'
		}
	},
	{
		'id': '12874781745',
		'title': 'Calculadora',
		'image': 'https://docs.google.com/uc?id=1kfBW42SX_vlPYP4BYmUDjEexi3ZIoJ6l',
		'descriptionShort': 'Calculadora feita em js com factory function',
		'descriptionLong': 'Um exercicio de um curso que fiz, que é um projeto feito em factory function, fiz quando estava pegando a base do js o mesmo foi feito primeiramente em constructor function e depois refatorado para factory function, fiz uns updates da calculadora que não estava no projeto final, que foi a responsividade, o led em cima da calculadora o som que a calculadora faz e o aviso de erro.',
		'descriptionInteger': 'Exercicio do curso do luiz otávio, fiz o mesmo utilizando factory function, fiz quando estava pegando a base do js o mesmo foi feito primeiramente em constructor function e depois refatorado para factory function, fiz uns updates da calculadora que não estava no projeto final para deixalo mais completo eatraente, que foi a responsividade, o led em cima da calculadora o som que a calculadora faz e o aviso de erro.',
		'iconTecnologics': [
			{
				'accessibility': 'JavaScript',
				'className': 'fa-brands fa-js',
				'color': '#EAD41C'
			},
			{
				'accessibility': 'HTML',
				'className': 'fa-brands fa-html5',
				'color': '#E56027'
			},
			{

				'accessibility': 'CSS',
				'className': 'fa-brands fa-css3-alt',
				'color': '#2C9FD8'
			},
		],
		'codeAndDeploy': {
			'code': 'https://github.com/EduardoMG12/calculator-constructor-function',
			'deploy': 'https://calculator-constructor-function-charles-eduardo-97rkm37x4.vercel.app'
		}
	},
	]
};

export default projects;