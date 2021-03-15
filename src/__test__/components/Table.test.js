import React from 'react';

// REACT TESTING LIBRARY //
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// COMPONENT //
import { Table } from '../../components/Table';

// MOCK DATA //
const mockRowMapping = [
    {
        label: "First name",
        value: "Austin"
    }
]

let testHistory, testLocation;

describe('HomeTable', () => {
    it('Mounts', () =>{

		// ARRANGE //
		const { getByTestId } = render(
			<Table rowMapping={mockRowMapping} />
		)

		// ACT //
		const tableComponent = getByTestId('table');

		// ASSERT //
		expect(tableComponent).toBeDefined();

	});
});