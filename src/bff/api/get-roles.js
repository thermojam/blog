export const getRoles = async () =>
	fetch('http://localhost:3001/roles').then((loadedRoles) => loadedRoles.json());
