import { Route } from '@domain/entities';
import { Test } from '@presentation/pages/homepage';

export const testRoute: Route = {
	path: 'test',
	group: false,
	content: Test,
};
