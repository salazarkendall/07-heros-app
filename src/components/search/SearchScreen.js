import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useNavigate, useLocation } from 'react-router-dom';
import { getHerosByName } from '../../helpers/getHerosByName';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heros/HeroCard';

export const SearchScreen = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { q = '' } = queryString.parse(location.search);

	const [{ searchInput }, handleInputChange] = useForm({
		searchInput: q,
	});

	const filteredHeros = useMemo(() => {
		// console.log('rerender');
		return getHerosByName(q);
	}, [q]);

	const handleSearch = (e) => {
		e.preventDefault();
		navigate(`?q=${searchInput}`);
	};

	return (
		<div>
			<h1>Search</h1>
			<hr />

			<div className="row">
				<div className="col-5">
					<form onSubmit={handleSearch}>
						<input
							type="text"
							placeholder="Search a hero"
							name="searchInput"
							value={searchInput}
							autoComplete="off"
							className="form-control"
							onChange={handleInputChange}
						/>
						<button
							type="submit"
							className="btn btn-outline-primary mt-2 btn-block"
						>
							Search
						</button>
					</form>
				</div>
				<div className="col-7">
					<h4>Results</h4>
					<hr />

					{q === '' ? (
						<div className="alert alert-info">Search a hero</div>
					) : (
						filteredHeros.length === 0 && (
							<div className="alert alert-danger">
								No results: {q}
							</div>
						)
					)}

					{filteredHeros.map((hero) => (
						<HeroCard key={hero.id} {...hero} />
					))}
				</div>
			</div>
		</div>
	);
};
