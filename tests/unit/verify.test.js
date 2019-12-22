import Verify from '../../pages/verify';

describe('Verify component:', () => {
	const verify = shallow(<Verify />);

	it('should match snapshot', () => expect(verify).toMatchSnapshot());
});
