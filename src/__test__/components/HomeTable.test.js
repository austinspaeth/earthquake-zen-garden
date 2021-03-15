import React from 'react';

// REACT TESTING LIBRARY //
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// COMPONENT //
import { HomeTable } from '../../components/HomeTable';
import { MemoryRouter, Route } from 'react-router-dom';

// MOCK DATA //
let mockData = {
    "data": {
        "features": [
            {
                "type": "Feature",
                "properties": {
                    "mag": 1.19,
                    "place": "3km ENE of The Geysers, CA",
                    "time": 1523647508250,
                    "status": "automatic",
                    "tsunami": 0,
                    "code": "72999021",
                    "type": "earthquake",
                    "title": "M 1.2 - 3km ENE of The Geysers, CA"
                }
            },
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

let testHistory, testLocation;

describe('HomeTable', () => {
    it('Mounts', () =>{

		// ARRANGE //
		const { getByTestId } = render(
            <MemoryRouter>
			    <HomeTable data={mockData} />
            </MemoryRouter>
		)

		// ACT //
		const homeTableComponent = getByTestId('homeTable');

		// ASSERT //
		expect(homeTableComponent).toBeDefined();

	});
	it('Clicking on title header sorts column ascending (starts descending)', () => {

		// ARRANGE //
		const { getByText,getByTestId } = render(
            <MemoryRouter>
			    <HomeTable data={mockData} />
            </MemoryRouter>
		)

		// ACT //
		fireEvent.click(getByText('Title'));
		const firstRow = getByTestId('tbody').childNodes[0].childNodes[0].childNodes[0].innerHTML;
        const secondRow = getByTestId('tbody').childNodes[1].childNodes[0].childNodes[0].innerHTML;

		// ASSERT //
		expect(firstRow).toContain('5km ENE of The Geysers, CA');
        expect(secondRow).toContain('3km ENE of The Geysers, CA');

	});
    it('Clicking on table header sorts column descending', () => {

		// ARRANGE //
		const { getByText,getByTestId } = render(
            <MemoryRouter>
			    <HomeTable data={mockData} />
            </MemoryRouter>
		)

		// ACT //
		fireEvent.click(getByText('Title'));
        fireEvent.click(getByText('Title'));
		const firstRow = getByTestId('tbody').childNodes[0].childNodes[0].childNodes[0].innerHTML;
        const secondRow = getByTestId('tbody').childNodes[1].childNodes[0].childNodes[0].innerHTML;

		// ASSERT //
		expect(firstRow).toContain('3km ENE of The Geysers, CA');
        expect(secondRow).toContain('5km ENE of The Geysers, CA');

	});
    it('Clicking on magnitude header sorts column descending', () => {

		// ARRANGE //
		const { getByText, getByTestId } = render(
            <MemoryRouter>
			    <HomeTable data={mockData} />
            </MemoryRouter>
		)

		// ACT //
		fireEvent.click(getByText('Magnitude'));
		const firstRow = getByTestId('tbody').childNodes[0].childNodes[1].childNodes[0].nodeValue;
        const secondRow = getByTestId('tbody').childNodes[1].childNodes[1].childNodes[0].nodeValue;

		// ASSERT //
		expect(firstRow).toContain('1.19');
        expect(secondRow).toContain('5');

	});
    it('Clicking on magnitude header sorts column ascending', () => {

		// ARRANGE //
		const { getByText, getByTestId } = render(
            <MemoryRouter>
			    <HomeTable data={mockData} />
            </MemoryRouter>
		)

		// ACT //
		fireEvent.click(getByText('Magnitude'));
        fireEvent.click(getByText('Magnitude'));
		const firstRow = getByTestId('tbody').childNodes[0].childNodes[1].childNodes[0].nodeValue;
        const secondRow = getByTestId('tbody').childNodes[1].childNodes[1].childNodes[0].nodeValue;

		// ASSERT //
		expect(firstRow).toContain('5');
        expect(secondRow).toContain('1.19');

	});
    it('Clicking on time header sorts column descending', () => {

		// ARRANGE //
		const { getByText, getByTestId } = render(
            <MemoryRouter>
			    <HomeTable data={mockData} />
            </MemoryRouter>
		)

		// ACT //
		fireEvent.click(getByText('Time'));
		const firstRow = getByTestId('tbody').childNodes[0].childNodes[2].childNodes[0].nodeValue;
        const secondRow = getByTestId('tbody').childNodes[1].childNodes[2].childNodes[0].nodeValue;

		// ASSERT //
		expect(firstRow).toContain('Apr 13, 2018, 12:25 PM');
        expect(secondRow).toContain('Jun 13, 2021, 10:11 PM');

	});
    it('Clicking on time header sorts column ascending', () => {

		// ARRANGE //
		const { getByText, getByTestId } = render(
            <MemoryRouter>
			    <HomeTable data={mockData} />
            </MemoryRouter>
		)

		// ACT //
		fireEvent.click(getByText('Time'));
        fireEvent.click(getByText('Time'));
		const firstRow = getByTestId('tbody').childNodes[0].childNodes[2].childNodes[0].nodeValue;
        const secondRow = getByTestId('tbody').childNodes[1].childNodes[2].childNodes[0].nodeValue;

		// ASSERT //
		expect(firstRow).toContain('Jun 13, 2021, 10:11 PM');
        expect(secondRow).toContain('Apr 13, 2018, 12:25 PM');

	});
    it('Clicking an earthquake will route to that page ID', () => {

		// ARRANGE //
		const { getByText, getByTestId } = render(
            <MemoryRouter initialEntries={['/home']}>
			    <HomeTable data={mockData} />
                <Route
                    path="*"
                    render={({ history, location }) => {
                        testHistory = history;
                        testLocation = location;
                    return null;
                    }}
                />
            </MemoryRouter>
		)

		// ACT //
		fireEvent.click(getByText('5km ENE of The Geysers, CA'));

		// ASSERT //
		expect(testLocation.pathname).toBe('/details/82999021');

	});
});