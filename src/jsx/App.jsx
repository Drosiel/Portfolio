import React from 'react';

import Header from './components/Header';
import Works from './components/works/Works';
import Sidebar from './components/Sidebar';

const App = () => {
	return (
		<div>
			<Header />

			<main className='board container'>
				<div className='board__inner'>
					<div className='board__content'>
						<div className='board__box'>
							<Sidebar />
							<Works />
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default App;
