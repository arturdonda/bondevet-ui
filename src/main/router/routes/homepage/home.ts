import { Route } from '@domain/entities';
import { Home } from '@presentation/pages/homepage';

export const homeRoute: Route = {
	path: '',
	group: false,
	content: Home,
};
