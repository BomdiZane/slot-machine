import Database from '../../pages/database';

describe('Database component:', () => {
	const database = shallow(<Database />);

	it('should match snapshot', () => expect(database).toMatchSnapshot());
});
