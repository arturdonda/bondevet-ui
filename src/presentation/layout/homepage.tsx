import React, { useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import { HomepageFooter, HomepageHeader } from '@presentation/components';
import { homepageRoute } from '@presentation/routes';

export function HomepageLayout() {
	const headerRef = useRef(null);
	const footerRef = useRef(null);
	const [headerHeight, setHeaderHeight] = useState(0);
	const [footerHeight, setFooterHeight] = useState(0);

	useEffect(() => {
		setHeaderHeight(headerRef.current.clientHeight);
		setFooterHeight(footerRef.current.clientHeight);
	});

	return (
		<Layout>
			<HomepageHeader ref={headerRef} routes={homepageRoute.subRoutes} />
			<Layout.Content
				style={{
					padding: 25,
					minHeight: `calc(100vh - ${headerHeight + footerHeight}px)`,
					overflowY: 'scroll',
				}}
			>
				<Outlet />
			</Layout.Content>
			<HomepageFooter ref={footerRef} />
		</Layout>
	);
}
