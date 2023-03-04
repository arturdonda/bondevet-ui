import React = require('react');

type BaseRoute = {
	path: string;
	menu?: {
		icon?: JSX.Element;
		name: string;
	};
};

type EndRoute = BaseRoute & {
	group: false;
	content: React.FC;
	subRoutes?: never;
};

type GroupRoute = BaseRoute & {
	group: true;
	content?: React.FC;
	subRoutes: (EndRoute | GroupRoute)[];
};

export type Route = EndRoute | GroupRoute;
