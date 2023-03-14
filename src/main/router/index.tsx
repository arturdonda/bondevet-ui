import React from 'react';
import { BrowserRouter, Routes, Route as RouteComponent } from 'react-router-dom';
import { Route } from '@domain/entities';
import { homepageRoute } from '@presentation/routes';

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>{makeRoute(homepageRoute)}</Routes>
		</BrowserRouter>
	);
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
