import React, { Dispatch, useState } from 'react';
import { Button, Drawer, Layout, Menu, MenuProps } from 'antd';
import { useNavigate, NavigateFunction } from 'react-router-dom';
import Media from 'react-media';
import { MenuOutlined } from '@ant-design/icons';
import logo from '@main/public/assets/images/logo1.png';
import { Route } from '@domain/entities';

export const HomepageHeader = React.forwardRef<HTMLDivElement, { routes: Route[] }>(({ routes }, ref) => {
	const navigate = useNavigate();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const onClickAction = (path: string) => {
		setIsMenuOpen(false);
		navigate(path);
	};

	return (
		<>
			<Media // Mobile View
				query="(max-width: 799px)"
				render={() => (
					<MobileHeader
						ref={ref}
						menuItems={adaptRoutes(routes, onClickAction)}
						isMenuOpen={isMenuOpen}
						setIsMenuOpen={setIsMenuOpen}
						navigate={navigate}
					/>
				)}
			/>
			<Media // Desktop view
				query="(min-width: 800px)"
				render={() => (
					<DesktopHeader
						ref={ref}
						menuItems={adaptRoutes(routes, onClickAction)}
						isMenuOpen={isMenuOpen}
						setIsMenuOpen={setIsMenuOpen}
						navigate={navigate}
					/>
				)}
			/>
		</>
	);
});

const adaptRoutes = (routes: Route[], onClick: (path: string) => void): MenuProps['items'] =>
	routes
		.filter(route => route.menu)
		.map(route => ({
			key: route.path,
			label: route.subRoutes ? route.menu.name : <a onClick={() => onClick(route.path)}>{route.menu.name}</a>,
			children: route.subRoutes
				? adaptRoutes(
						route.subRoutes.map(subRoute => ({ ...subRoute, path: `${route.path}/${subRoute.path}` })),
						onClick
				  )
				: undefined,
		}));

const MobileHeader = React.forwardRef<HTMLDivElement, HeaderProps>(
	({ menuItems, isMenuOpen, setIsMenuOpen, navigate }, ref) => {
		return (
			<Layout.Header
				ref={ref}
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					position: 'sticky',
					top: 0,
					zIndex: 1,
					boxShadow: '0px 0px 10px #d1d1d1',
					padding: '0px',
				}}
			>
				<MenuOutlined onClick={() => setIsMenuOpen(true)} style={{ marginLeft: '1rem' }} />
				<a onClick={() => navigate('/')} style={{ marginLeft: '-3rem' }}>
					<img src={logo} alt="bondevet-logo" style={{ height: '64px', paddingTop: '8px', paddingBottom: '8px' }} />
				</a>
				<div></div>
				<Drawer
					placement="left"
					open={isMenuOpen}
					onClose={() => setIsMenuOpen(false)}
					footer={
						<Button
							block
							type="primary"
							shape="round"
							style={{ marginLeft: '2.5%', marginTop: '3rem', width: '95%' }}
							onClick={() => {
								setIsMenuOpen(false);
								navigate('#');
							}}
						>
							Login
						</Button>
					}
				>
					<Menu
						mode="inline"
						items={menuItems}
						selectedKeys={[window.location.pathname.slice(1)]}
						style={{ marginLeft: 'auto', border: 'none' }}
					/>
				</Drawer>
			</Layout.Header>
		);
	}
);

const DesktopHeader = React.forwardRef<HTMLDivElement, HeaderProps>(({ menuItems, navigate }, ref) => {
	return (
		<Layout.Header
			ref={ref}
			style={{
				display: 'flex',
				position: 'sticky',
				top: 0,
				zIndex: 1,
				boxShadow: '0px 0px 10px #d1d1d1',
			}}
		>
			<a onClick={() => navigate('/')}>
				<img src={logo} alt="bondevet-logo" style={{ height: '64px', paddingTop: '8px', paddingBottom: '8px' }} />
			</a>
			<Menu
				mode="horizontal"
				items={menuItems}
				selectedKeys={[window.location.pathname.slice(1)]}
				style={{ marginLeft: 'auto' }}
			/>
			<Button
				type="primary"
				shape="round"
				style={{ alignSelf: 'center', marginLeft: '35px' }}
				onClick={() => navigate('#')}
			>
				Login
			</Button>
		</Layout.Header>
	);
});

type HeaderProps = {
	menuItems: MenuProps['items'];
	isMenuOpen: boolean;
	setIsMenuOpen: Dispatch<React.SetStateAction<boolean>>;
	navigate: NavigateFunction;
};
