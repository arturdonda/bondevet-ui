import { Route } from '@domain/entities';
import { HomepageLayout } from '@presentation/layout';
import { homeRoute } from './home';
import { testRoute } from './test';

export const homepageLayoutRoute: Route = {
	path: '',
	group: true,
	content: HomepageLayout,
	subRoutes: [homeRoute, testRoute],
};
