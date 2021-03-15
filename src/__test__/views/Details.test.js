import React from 'react';

// REACT TESTING LIBRARY //
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// COMPONENT //
import { Details } from '../../views/Details';

// MOCK DATA //
let mockData = {
    "data": {
        "features": [
            {
                "type": "Feature",
                "properties": {
                    "mag": 5.0,
                    "place": "5km ENE of The Geysers, CA",
                    "time": 1623647508250,
                    "status": "automatic",
                    "tsunami": 0,
                    "code": "82999021",
                    "type": "earthquake",
                    "title": "M 5 - 5km ENE of The Geysers, CA"
                }
            }
        ]
    }
}

describe('Details View', () => {
    it('Mounts', () =>{

		// ARRANGE //
		const { getByTestId } = render(
			<Details earthquake={'82999021'} data={mockData} />
		)

		// ACT //
		const detailsView = getByTestId('detailsView');

		// ASSERT //
		expect(detailsView).toBeDefined();

	});
});