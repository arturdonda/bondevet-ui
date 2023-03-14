import { Route } from '@domain/entities';
import { HospitalPage } from '@presentation/pages/homepage';

export const hospitalRoute: Route = {
	path: 'hospital',
	group: false,
	content: HospitalPage,
	menu: {
		name: 'O Hospital',
	},
};
