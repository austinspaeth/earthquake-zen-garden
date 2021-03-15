import React from 'react';

// REACT TESTING LIBRARY //
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// COMPONENT //
import { Header } from '../../components/Header';
import { MemoryRouter, Route } from 'react-router-dom';

// MOCK DATA //
const mockData = {
    "site": {
        "title": "Earthquake Zen Garden",
        "logoImage": "https://www.realtor.com/realtor-com.png"
    },
    "profile": {
        "firstName": "Sally",
        "lastName": "Wang",
        "avatarImage": "https://upload.wikimedia.org/wikipedia/commons/5/59/That_Poppy_profile_picture.jpg",
        "phone": "01-343-989-2345",
        "email": "sw@nowhere.ic.kp",
        "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
    },
    "data": {
        "features": [
            {
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
            }
        ]
    }
}

let testHistory, testLocation;

describe('Header', () => {
	it('Mounts', () =>{

		// ARRANGE //
		const { getByTestId } = render(
            <MemoryRouter initialEntries={['/home']}>
			    <Header data={mockData} />
            </MemoryRouter>
		)

		// ACT //
		const headerComponent = getByTestId('header');

		// ASSERT //
		expect(headerComponent).toBeDefined();

	});
	it('Goes to the profile when welcome message clicked', () =>{

		// ARRANGE //
		const { getByTestId } = render(
			<MemoryRouter initialEntries={['/home']}>
			    <Header data={mockData} />
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
		fireEvent.click(getByTestId('profileLink'));

		// ASSERT //
		expect(testLocation.pathname).toBe('/profile');
        
	});
    it('Goes home when logo is clicked', () =>{

		// ARRANGE //
		const { getByTestId } = render(
			<MemoryRouter initialEntries={['/home']}>
			    <Header data={mockData} />
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
		fireEvent.click(getByTestId('homeLink'));

		// ASSERT //
		expect(testLocation.pathname).toBe('/home');

	});
});