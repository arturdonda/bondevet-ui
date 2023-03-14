import React from 'react';
import { createRoot } from 'react-dom/client';
import Router from '@main/router';
import { ThemeProvider } from '@main/config';
const root = createRoot(document.getElementById('root'));

root.render(
	<ThemeProvider>
		<Router />
	</ThemeProvider>
);
