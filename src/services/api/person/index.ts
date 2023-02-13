interface Iperson {
    messageHome: string
    socialMidias: {link: string, className: string, color: string}[]
}

const person: Iperson = {
	messageHome: '',
	socialMidias: [
		{
			link: 'https://github.com/EduardoMG12',
			className: 'fa-brands fa-github',
			color: ''
		},
		{
			link: 'https://www.linkedin.com/in/eduardomg12/',
			className: 'fa-brands fa-linkedin',
			color: ''
		},
		{
			link: 'https://www.instagram.com/charlesmellog/',
			className: 'fa-brands fa-instagram',
			color: ''
		},
		{
			link: 'https://discord.gg/herhmH8bM8',
			className: 'fa-brands fa-discord',
			color: ''
		},

	]
};

export default person;