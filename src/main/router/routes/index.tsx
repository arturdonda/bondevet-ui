import React from 'react';
import { Route as RouteComponent } from 'react-router-dom';
import { Route } from '@domain/entities';
import { homepageRoutes } from '@main/router/routes/homepage';

export function getRoutes() {
	return [...homepageRoutes].map(makeRoute);
}

function makeRoute(route: Route) {
	return (
		<RouteComponent
			key={route.path}
			path={route.path}
			element={route.content ? <route.content /> : undefined}
			children={route.subRoutes?.map(subRoute => makeRoute({ ...subRoute, path: `${route.path}/${subRoute.path}` }))}
		/>
	);
}
