import React from 'react';

import data from '../data/books';
import Card from '../components/Card';

function Books({ match }) {
	const books = data.filter(b => b.topic === match.params.topic);
	return (
		<main id="books">
			<div className="mdc-layout-grid">
				<div className="mdc-layout-grid__inner">
					{books.map((book, index) => (
						<div key={index} className="mdc-layout-grid__cell mdc-layout-grid__cell--span-6">
							<Card book={book} />
						</div>
					))}
				</div>
			</div>
		</main>
	);
}

export default Books;
