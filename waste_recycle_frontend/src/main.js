import {
	createSSRApp
} from "vue";
import App from "./App.vue";
import store from "./pages/store";
import {router,RouterMount} from './pages/router/router'
import './pages/router/index'

import FleaMarket from './pages/homepage/components/market/FleaMarket'
import SiteSearch from './pages/homepage/components/siteSearch/SiteSearch'
import TodayNews from "./pages/homepage/components/todayNews/TodayNews";
import Platform from "./pages/homepage/components/platform/Platform";
import homepage from "./pages/homepage/homepage"
import My from "./pages/My/My"
import Trade from "./pages/trade/Trade";
import OrderList from "./pages/orderList/OrderList";
import Manage from "./pages/manage/Manage";
import NoSailed from "./pages/manage/components/NoSailed";
import Sailed from "./pages/manage/components/Sailed";

export function createApp() {
	const app = createSSRApp(App);
	app.component('flea-market', FleaMarket)
	app.component('site-search', SiteSearch)
	app.component('today-news', TodayNews)
	app.component('plat-form', Platform)
	app.component('home-page', homepage)
	app.component('my', My)
	app.component('trade', Trade)
	app.component('order-list', OrderList)
	app.component('manage', Manage)
	app.component('noSailed', NoSailed)
	app.component('sailed', Sailed)

	app.use(store)
	RouterMount(app,router,'#app');
	return {
		app,
		router
	};
}
