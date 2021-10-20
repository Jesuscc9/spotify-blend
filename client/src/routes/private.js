import Blend from "../pages/blend";
import App from "../pages/app";

export const privateRoutes = [
	{
		name: 'App',
		path: '/',
		to: '/',
		component: App,
	}, {
		name: 'Blend',
		path: '/blend/:room',
		to: '/blend/:room',
		component: Blend
	}
]