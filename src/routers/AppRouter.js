import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { DcScreen } from '../components/dc/DcScreen';
import { LoginScreen } from '../components/login/LoginScreen';
import { Marvel } from '../components/marvel/MarvelScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { Navbar } from '../components/ui/Navbar';

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Marvel />} />
				<Route path="/dc" element={<DcScreen />} />
				<Route path="/marvel" element={<Marvel />} />
				<Route path="/search" element={<SearchScreen />} />
				<Route path="/login" element={<LoginScreen />} />
				<Route path="/*" element={<Marvel />} />
			</Routes>
		</BrowserRouter>
	);
};
