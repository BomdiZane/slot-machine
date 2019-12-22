const defaultState = {
	storageIsAvailable: false,
	scopes: [],
	loadingScopes: false,
	isMessagingSupported: false,
};

const mainReducer = (state = defaultState, action) => {
	switch (action.type) {
		case 'SET_STORAGE_AVAILABILITY':
			state = {
				...state,
				storageIsAvailable: action.payload,
			};
			break;
		case 'SET_SCOPES':
			state = {
				...state,
				scopes: action.payload
			};
			break;
		case 'SET_LOADING_SCOPES':
			state = {
				...state,
				loadingScopes: action.payload
			};
			break;
		case 'SET_MESSAGING_SUPPORTED':
			state = {
				...state,
				isMessagingSupported: action.payload
			};
			break;
	}
	return state;
};

export default mainReducer;
