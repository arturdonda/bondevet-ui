import React from 'react';
import { ConfigProvider } from 'antd';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const colorPrimary = '#206DAD';

	return (
		<ConfigProvider
			theme={{
				token: {
					colorPrimary,
				},
				components: {
					Layout: {
						colorBgHeader: 'white',
						colorBgBody: 'white',
					},
					Typography: {
						colorTextHeading: colorPrimary,
						colorLink: colorPrimary,
					},
				},
			}}
		>
			{children}
		</ConfigProvider>
	);
};
