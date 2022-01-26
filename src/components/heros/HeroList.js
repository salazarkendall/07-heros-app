import { useMemo } from 'react';
import { getHerosByPublisher } from '../../helpers/getHerosByPublisher';
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {
	const heros = useMemo(() => getHerosByPublisher(publisher), [publisher]);

	return (
		<div className="card-columns animate__animated animate__fadeIn">
			<ul>
				{heros.map((hero) => (
					<HeroCard key={hero.id} {...hero} />
				))}
			</ul>
		</div>
	);
};
