import { IProjectsType } from '@api/projects';

/* eslint-disable no-mixed-spaces-and-tabs */
const mainProjects: IProjectsType =
    {
    	'MainProjects':[{
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
    	]
    };

export default mainProjects;