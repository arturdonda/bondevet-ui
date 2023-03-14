import { Route } from '@domain/entities';
import { HomePage } from '@presentation/pages/homepage';

export const homeRoute: Route = {
	path: '',
	group: false,
	content: HomePage,
	menu: {
		name: 'Página Principal',
	},
};
