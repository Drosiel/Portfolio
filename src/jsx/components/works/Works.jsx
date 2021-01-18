import React, { useState } from 'react';
import works from '../../../generals/works';

import ItemWorks from '../../components/works/ItemWorks';

const Works = () => {
	const [toggleClass, setToggleClass] = useState(0);

	const setMoreInfo = (item) => {
		setToggleClass(item.id);
	};

	return (
		<div className='board__wrapper'>
			<h2 className='board__item-title'>работы</h2>

			<div className='board__item works'>
				<div className='board__item-content'>
					<ul className='works__list'>
						{works.map((item, index) => (
							<ItemWorks
								key={index}
								item={item}
								setMoreInfo={setMoreInfo}
								toggleClass={toggleClass}
							/>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Works;
