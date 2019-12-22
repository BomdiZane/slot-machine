import Header from './header';

describe('Header component:', () => {
	const header = shallow(<Header />).dive();

	it('should match snapshot', () => expect(header).toMatchSnapshot());

	// it('should show menu toggle button', () => expect(header.find('.showSidebarButton').text()).toEqual('menu'));

	// it('should show brand name "Serve"', () => expect(header.find('.brand-logo').text()).toEqual('Serve'));

	// describe('default nav links state:', () => {
	// 	it('should show home nav link', () => {
	// 		const homeLink = header.find('Link[href="/"] a');
	// 		expect(homeLink.exists()).toEqual(true);
	// 		expect(homeLink.parents('li').prop('className')).toEqual('active');
	// 	});

	// 	it('should show findProviders nav link', () => {
	// 		const findProvidersLink = header.find('Link[href="/findProviders"] a');
	// 		expect(findProvidersLink.exists()).toEqual(true);
	// 		expect(findProvidersLink.parents('li').prop('className')).not.toEqual('active');
	// 	});

	// 	it('should show login nav link', () => {
	// 		const loginLink = header.find('Link[href="/login"] a');
	// 		expect(loginLink.exists()).toEqual(true);
	// 		expect(loginLink.parents('li').prop('className')).not.toEqual('active');
	// 	});
	// });
});
