import { Card, Content } from '@components/Card';
import React from 'react';
import person from '@api/person';
import imageDark from 'public/myImageRedShirt.jpg';
import imageDark2 from 'public/myImageSocial.jpg';
import imageWhite from 'public/myImageWithBear.jpeg';
import imageWhite2 from 'public/myImageYellow.jpg';
import bgdDark from 'public/bgdRed.png';
import bgdWhite from 'public/bgdBlue.jpg';
import { useTheme } from 'styled-components';
import { Ballon, Image } from './styles';
import { Icon } from './Icon';

const CardHome: React.FC = () => {
	const theme = useTheme();
    
	const loadingMyImage = () => {
		const imagesDark = [imageDark, imageDark2];
		const imagesLight = [imageWhite, imageWhite2];
		const random = Math.round(Math.random());
		
		return theme.title === 'dark' ? imagesDark[random] : imagesLight[random];
	};

	const loadingBgd = () => theme.title === 'dark' ? bgdDark: bgdWhite;

	return(
		<Card wd='100rem' hg='56rem' borderR='2rem' bgdImage={loadingBgd()}>
			<Image bgdImage={loadingMyImage()}/>
			<Content>
				<Ballon>
					<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut sit ad blanditiis itaque a, atque necessitatibus natus reiciendis vel beatae rem magni error aspernatur dolor omnis expedita maxime minus ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, vitae consequatur ipsam eos reprehenderit, velit architecto itaque deleniti, suscipit nesciunt culpa minima perferendis. Reiciendis amet nihil veniam, dolores natus cumque.</p>
				</Ballon>
				<ul>
					{person.socialMidias.map(socialMidia => <Icon link={socialMidia.link} key={socialMidia.className} className={socialMidia.className}/>)}
				</ul>
			</Content>
		</Card>
	);
};
export default CardHome;
        
