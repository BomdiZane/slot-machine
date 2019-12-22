import Backend from '../../pages/backend';

describe('Backend component:', () => {
	const backend = shallow(<Backend />);

	it('should match snapshot', () => expect(backend).toMatchSnapshot());
});
