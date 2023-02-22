import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Todo from '../views/Todo.vue';

const ROUTES = {
	HomeRoute: {
		path: '/home',
		name: 'Home',
		component: Home,
	},
	TodoRoute: {
		path: '/todos',
		name: 'Todos',
		component: Todo,
	},
};
const router = createRouter({
	history: createWebHistory(),
	routes: [
		// feel free to add more routes here (yeah, and your root '/' route too :) )
		{
			path: ROUTES.HomeRoute.path,
			name: ROUTES.HomeRoute.name,
			component: ROUTES.HomeRoute.component,
		},
		{
			path: ROUTES.TodoRoute.path,
			name: ROUTES.TodoRoute.name,
			component: ROUTES.TodoRoute.component,
		},
	],
});

export default router;
