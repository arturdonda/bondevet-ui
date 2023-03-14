import React from 'react';
import { Col, Layout, Row, theme, Typography } from 'antd';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import Media from 'react-media';
import logo from '@main/public/assets/images/logo2.png';
import { EnvironmentOutlined, LinkedinOutlined, InstagramOutlined, WhatsAppOutlined } from '@ant-design/icons';

const { useToken } = theme;

export const HomepageFooter = React.forwardRef<HTMLDivElement, {}>((_props, ref) => {
	const navigate = useNavigate();
	const { token } = useToken();
	const footerLogo = (
		<>
			<a onClick={() => navigate('/')}>
				<img src={logo} alt="bondevet-logo" style={{ width: '175px' }} />
			</a>
			<div style={{ display: 'flex', justifyContent: 'space-evenly', width: '175px', marginTop: '1rem' }}>
				<a href="https://www.linkedin.com" target="_blank">
					<LinkedinOutlined style={{ color: token.colorPrimary, fontSize: '1.5rem' }} />
				</a>
				<a href="https://www.instagram.com" target="_blank">
					<InstagramOutlined style={{ color: token.colorPrimary, fontSize: '1.5rem' }} />
				</a>
				<a href="https://www.whatsapp.com" target="_blank">
					<WhatsAppOutlined style={{ color: token.colorPrimary, fontSize: '1.5rem' }} />
				</a>
				<a href="https://goo.gl/maps/jLcjqoBL5q24pTA97" target="_blank">
					<EnvironmentOutlined style={{ color: token.colorPrimary, fontSize: '1.5rem' }} />
				</a>
			</div>
		</>
	);

	return (
		<div ref={ref}>
			<Media // Mobile View
				query="(max-width: 799px)"
				render={() => <MobileFooter logo={footerLogo} />}
			/>
			<Media // Desktop view
				query="(min-width: 800px)"
				render={() => <DesktopFooter navigate={navigate} logo={footerLogo} />}
			/>
			<Layout.Footer
				style={{
					backgroundColor: token.colorPrimary,
					color: 'white',
					textAlign: 'center',
					height: '2rem',
					padding: '0.5rem 0rem 0rem 0rem',
				}}
			>
				© 2023 BondeVet Hostpital Veterinário
			</Layout.Footer>
		</div>
	);
});

const MobileFooter: React.FC<{ logo: JSX.Element }> = ({ logo }) => {
	return (
		<Layout.Footer style={{ backgroundColor: '#eeeeee' }}>
			<Row style={{ justifyContent: 'center' }}>
				<Col>{logo}</Col>
			</Row>
		</Layout.Footer>
	);
};

const DesktopFooter: React.FC<FooterProps> = ({ navigate, logo }) => {
	return (
		<Layout.Footer style={{ backgroundColor: '#eeeeee' }}>
			<Row>
				<Col span={16}>
					<Row>
						<Col span={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
							<Typography.Title level={5}>O HOSPITAL</Typography.Title>
							<ul>
								<li>
									<Typography.Link style={{ color: '#666666' }} onClick={() => navigate('/')}>
										In iaculis
									</Typography.Link>
								</li>
								<li>
									<Typography.Link style={{ color: '#666666' }} onClick={() => navigate('/')}>
										Donec a odio
									</Typography.Link>
								</li>
								<li>
									<Typography.Link style={{ color: '#666666' }} onClick={() => navigate('/')}>
										Suspendisse
									</Typography.Link>
								</li>
							</ul>
						</Col>
						<Col span={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
							<Typography.Title level={5}>SERVIÇOS</Typography.Title>
							<ul>
								<li>
									<Typography.Link style={{ color: '#666666' }} onClick={() => navigate('/')}>
										Ut vitae
									</Typography.Link>
								</li>
								<li>
									<Typography.Link style={{ color: '#666666' }} onClick={() => navigate('/')}>
										Pretium
									</Typography.Link>
								</li>
								<li>
									<Typography.Link style={{ color: '#666666' }} onClick={() => navigate('/')}>
										Fusce feugiat libero
									</Typography.Link>
								</li>
							</ul>
						</Col>
						<Col span={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
							<Typography.Title level={5}>LOCALIZAÇÃO</Typography.Title>
							<ul>
								<li>
									<Typography.Link style={{ color: '#666666' }} onClick={() => navigate('/')}>
										Aenean sodales
									</Typography.Link>
								</li>
								<li>
									<Typography.Link style={{ color: '#666666' }} onClick={() => navigate('/')}>
										Maecenas sit
									</Typography.Link>
								</li>
								<li>
									<Typography.Link style={{ color: '#666666' }} onClick={() => navigate('/')}>
										Sed efficitur
									</Typography.Link>
								</li>
							</ul>
						</Col>
						<Col span={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
							<Typography.Title level={5}>CONTATO</Typography.Title>
							<ul>
								<li>
									<Typography.Link style={{ color: '#666666' }} onClick={() => navigate('/contato/fale-conosco')}>
										Fale Conosco
									</Typography.Link>
								</li>
								<li>
									<Typography.Link style={{ color: '#666666' }} onClick={() => navigate('/contato/trabalhe-conosco')}>
										Trabalhe Conosco
									</Typography.Link>
								</li>
							</ul>
						</Col>
					</Row>
				</Col>
				<Col span={8} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
					{logo}
				</Col>
			</Row>
		</Layout.Footer>
	);
};

type FooterProps = {
	navigate: NavigateFunction;
	logo: JSX.Element;
};
