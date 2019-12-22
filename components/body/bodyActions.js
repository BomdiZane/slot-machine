export function updateCurrentPage(currentPage) {
	return {
		type: 'UPDATE_CURRENT_PAGE',
		payload: currentPage
	};
}

export function toggleTheme() {
	return { type: 'TOGGLE_THEME' };
}

export function toggleProcessing() {
	return { type: 'TOGGLE_PROCESSING' };
}

export function setProcessing(state) {
	return {
		type: 'SET_PROCESSING',
		payload: state
	};
}
