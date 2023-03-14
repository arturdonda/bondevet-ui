import { Route } from '@domain/entities';
import { FaleConoscoPage, TrabalheConoscoPage } from '@presentation/pages/homepage';

export const contatoRoute: Route = {
	path: 'contato',
	group: true,
	menu: {
		name: 'Contato',
	},
	subRoutes: [
		{
			path: 'fale-conosco',
			group: false,
			content: FaleConoscoPage,
			menu: {
				name: 'Fale Conosco',
			},
		},
		{
			path: 'trabalhe-conosco',
			group: false,
			content: TrabalheConoscoPage,
			menu: {
				name: 'Trabalhe Conosco',
			},
		},
	],
};
