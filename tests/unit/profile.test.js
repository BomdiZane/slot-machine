import Profile from '../../pages/profile';

describe('Profile component:', () => {
	const profile = shallow(<Profile />);

	it('should match snapshot', () => expect(profile).toMatchSnapshot());
});
