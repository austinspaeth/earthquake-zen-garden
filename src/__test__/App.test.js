import React from 'react';

// REACT TESTING LIBRARY //
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// COMPONENT //
import { App } from '../App';
import { MemoryRouter, Route } from 'react-router-dom';

describe('App', () => {
	it('Displays home view when route matches', () =>{

		// ARRANGE //
		const { getByTestId, getByText } = render(
            <MemoryRouter initialEntries={['/home']}>
			    <App view={'home'} />
            </MemoryRouter>
		)

		// ACT //
		const homeContainer = getByTestId('homeContainer');
        const homeHeadline = getByText('USGS All Earthquakes, Past Hour');

		// ASSERT //
		expect(homeContainer).toBeDefined();
        expect(homeHeadline).toBeInTheDocument();
        

	});
    it('Displays profile view when route matches', () =>{

		// ARRANGE //
		const { getByTestId, getByText } = render(
            <MemoryRouter initialEntries={['/profile']}>
			    <App view={'profile'} />
            </MemoryRouter>
		)

		// ACT //
		const profileContainer = getByTestId('profileContainer');
        const profileHeadline = getByText('Profile');

		// ASSERT //
		expect(profileContainer).toBeDefined();
        expect(profileHeadline).toBeInTheDocument();

	});
    it('Displays details view when route matches', () =>{

		// ARRANGE //
		const { getByTestId, getAllByText } = render(
            <MemoryRouter initialEntries={['/details/72999021']}>
			    <App view={'details'} earthquake={'72999021'} />
            </MemoryRouter>
		)

		// ACT //
		const detailsContainer = getByTestId('detailsContainer');
        const detailsHeadline = getAllByText('M 1.2 - 3km ENE of The Geysers, CA')[0];

		// ASSERT //
		expect(detailsContainer).toBeDefined();
        expect(detailsHeadline).toBeInTheDocument();

	});
});