import React from 'react';
import { Outlet } from 'react-router-dom';

export function HomepageLayout() {
	return (
		<div>
			<div id="header" style={{ display: 'flex', backgroundColor: 'red', width: '100%', height: '5rem' }}></div>
			<div
				id="content"
				style={{ display: 'flex', backgroundColor: 'blue', width: '100%', height: 'calc(100vh - 10rem)' }}
			>
				<Outlet />
			</div>
			<div id="footer" style={{ display: 'flex', backgroundColor: 'red', width: '100%', height: '5rem' }}></div>
		</div>
	);
}
