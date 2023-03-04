import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import { getRoutes } from '@main/router/routes';

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>{getRoutes()}</Routes>
		</BrowserRouter>
	);
}
