import { Card, Content } from '@components/Card';
import React from 'react';
import mainProjects from '@api/mainProjects';
import { Container } from './styles';

const MainProjects: React.FC = () => {
	return(
		<Container>
			{Object.entries(mainProjects).map(([title, projects]) => {
				return<>
					{projects.map((project) => {
						console.log(project);
						return<>
							<Card wd={'46.6rem'} hg={'35rem'} flexD={'colunm'} justifyC={'space-between'} borderR={'2rem'}>
								<Content>
									<img src={project.image}/>
									<h2>{project.title}</h2>
									<ul>
										{Object.values(project.iconTecnologics).slice(0, 4).map((tecnologic, i) => <li key={i} ><i style={{ color: tecnologic.color }} className={tecnologic.className}></i></li>)}
									</ul>
								</Content>
							</Card>                        
						</>;

					})}
                
                
				</>;
			})

			}
		</Container>
	);
};

export default MainProjects;