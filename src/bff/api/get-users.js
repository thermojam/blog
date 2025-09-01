import { transformUser } from '../transformers';

export const getUsers = async () =>
	await fetch(`http://localhost:3001/users`)
		.then((loadedUsers) => loadedUsers.json())
		.then((loadedUsers) => loadedUsers.map(transformUser));
