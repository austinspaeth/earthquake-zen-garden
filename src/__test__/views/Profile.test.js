import React from 'react';

// REACT TESTING LIBRARY //
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// COMPONENT //
import { Profile } from '../../views/Profile';

// MOCK DATA //
let mockData = {
    "profile": {
        "firstName": "Sally",
        "lastName": "Wang",
        "avatarImage": "https://upload.wikimedia.org/wikipedia/commons/5/59/That_Poppy_profile_picture.jpg",
        "phone": "01-343-989-2345",
        "email": "sw@nowhere.ic.kp",
        "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
    }
}

describe('Profile View', () => {
    it('Mounts', () =>{

		// ARRANGE //
		const { getByTestId } = render(
			<Profile data={mockData} />
		)

		// ACT //
		const profileView = getByTestId('profileView');

		// ASSERT //
		expect(profileView).toBeDefined();

	});
});