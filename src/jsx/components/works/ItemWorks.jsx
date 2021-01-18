import React from 'react';

const ItemWorks = (props) => {
	const { item, setMoreInfo, toggleClass } = props;
	return (
		<>
			<li
				className={`works__item ${
					item.id === toggleClass ? 'activ' : ''
				}`}
			>
				<div className='works__num' onClick={() => setMoreInfo(item)}>
					{item?.name}
				</div>

				<div className='works__elem'>
					<div className='border'></div>
					<div className='works__description'>{item.description}</div>
					<div className='works__link'>
						<a href={item.link}>перейти</a>
					</div>
				</div>
			</li>
		</>
	);
};

export default ItemWorks;
