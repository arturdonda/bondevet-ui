import { Route } from '@domain/entities';
import { HomepageLayout } from '@presentation/layout';
import { contatoRoute } from './contato';
import { homeRoute } from './home';
import { hospitalRoute } from './hospital';
import { localizacaoRoute } from './localizacao';
import { servicosRoute } from './servicos';

export const homepageRoute: Route = {
	path: '',
	group: true,
	content: HomepageLayout,
	subRoutes: [homeRoute, hospitalRoute, servicosRoute, localizacaoRoute, contatoRoute],
};
