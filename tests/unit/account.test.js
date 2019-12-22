import Account from '../../pages/account';

describe('Account component:', () => {
	const account = shallow(<Account />);

	it('should match snapshot', () => expect(account).toMatchSnapshot());
});
