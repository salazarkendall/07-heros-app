import React, { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHerosById } from '../../helpers/getHeroById';
import { heroImages } from '../../helpers/heroImages';

export const HeroScreen = () => {
	const { heroId } = useParams();
	const hero = useMemo(() => getHerosById(heroId), [heroId]);
	const navigate = useNavigate();

	if (!hero) {
		return <Navigate to="/" />;
	}

	const {
		id,
		superhero,
		publisher,
		alter_ego,
		first_appearance,
		characters,
	} = hero;

	const handleReturn = () => navigate(-1);

	return (
		<div className="row mt-5">
			<div className="col-4">
				<img
					src={heroImages(`./${id}.jpg`)}
					alt={superhero}
					className="img-thumbnail animate__animated animate__fadeInLeft"
				/>
			</div>
			<div className="col-8">
				<h3>{superhero}</h3>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<b>Alter ego:</b> {alter_ego}
					</li>
					<li className="list-group-item">
						<b>Publisher</b> {publisher}
					</li>
					<li className="list-group-item">
						<b>First apperance:</b> {first_appearance}
					</li>
				</ul>
				<hr />
				<h5>Characters</h5>
				<p>{characters}</p>

				<button className="btn btn-outline-info" onClick={handleReturn}>
					Back
				</button>
			</div>
		</div>
	);
};
