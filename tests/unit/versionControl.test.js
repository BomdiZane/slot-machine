import VersionControl from '../../pages/versionControl';

describe('VersionControl component:', () => {
	const versionControl = shallow(<VersionControl />);

	it('should match snapshot', () => expect(versionControl).toMatchSnapshot());
});
