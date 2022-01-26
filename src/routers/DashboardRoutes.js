import { Route, Routes } from 'react-router-dom';
import { DcScreen } from '../components/dc/DcScreen';
import { HeroScreen } from '../components/heros/HeroScreen';
import { Marvel } from '../components/marvel/MarvelScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { Navbar } from '../components/ui/Navbar';

export const DashboardRoutes = () => {
	return (
		<>
			<Navbar />
			<div className="container mt-5">
				<Routes>
					<Route path="/" element={<Marvel />} />
					<Route path="dc" element={<DcScreen />} />
					<Route path="marvel" element={<Marvel />} />
					<Route path="hero/:heroId" element={<HeroScreen />} />
					<Route path="search" element={<SearchScreen />} />
				</Routes>
			</div>
		</>
	);
};
