import React from 'react';

// REACT TESTING LIBRARY //
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// COMPONENT //
import { Home } from '../../views/Home';
import { MemoryRouter } from 'react-router-dom';

// MOCK DATA //
let mockData = {
    "data": {
        "metadata":{
            title:"test"
        },
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

describe('Home View', () => {
    it('Mounts', () =>{

		// ARRANGE //
		const { getByTestId } = render(
            <MemoryRouter>
			    <Home data={mockData} />
            </MemoryRouter>
		)

		// ACT //
		const homeView = getByTestId('homeView');

		// ASSERT //
		expect(homeView).toBeDefined();

	});
});