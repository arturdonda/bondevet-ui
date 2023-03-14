import { Route } from '@domain/entities';
import { ServicosPage } from '@presentation/pages/homepage';

export const servicosRoute: Route = {
	path: 'servicos',
	group: false,
	content: ServicosPage,
	menu: {
		name: 'Serviços',
	},
};
