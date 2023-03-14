import { Route } from '@domain/entities';
import { LocalizacaoPage } from '@presentation/pages/homepage';

export const localizacaoRoute: Route = {
	path: 'localizacao',
	group: false,
	content: LocalizacaoPage,
	menu: {
		name: 'Localização',
	},
};
