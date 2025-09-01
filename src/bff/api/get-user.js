import { transformUser } from '../transformers';

export const getUser = async (loginToFind) =>
	await fetch(`http://localhost:3001/users?login=${loginToFind}`)
		.then((loadedUsers) => loadedUsers.json())
		.then(([loadedUser]) => loadedUser && transformUser(loadedUser));
