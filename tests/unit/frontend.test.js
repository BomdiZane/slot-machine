import Frontend from '../../pages/frontend';

describe('Frontend component:', () => {
	const frontend = shallow(<Frontend />);

	it('should match snapshot', () => expect(frontend).toMatchSnapshot());
});
