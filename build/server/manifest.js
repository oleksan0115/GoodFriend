const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["css/Acumin-BdItPro.woff","css/Acumin-BdPro.woff","css/Acumin-ItPro.woff","css/Acumin-MPro.otf","css/Acumin-RPro.woff","css/Acumin-SBPro.otf","css/bootstrap.min.css","css/responsive.css","css/style.css","css/_Acumin-RPro.woff","favicon2.png","img/activea.svg","img/add.svg","img/affiliate-bg.png","img/affiliate-white.svg","img/affiliate.svg","img/affiliate_mobile.svg","img/apple.svg","img/Arrow-Down-dark.svg","img/Arrow-Down.svg","img/Arrow-Down2.svg","img/Arrow-Down_menu.svg","img/Arrow-Left.svg","img/Arrow-Right-1.svg","img/Arrow-Right.svg","img/Arrow-Up.svg","img/Atletico-Madrid.svg","img/banner_affiliate.svg","img/Banner_Football-1.svg","img/Banner_Football.svg","img/basketball.svg","img/best-slip-a.svg","img/best-slip-button.svg","img/bet-slip.svg","img/bg_img.svg","img/bigbutton.svg","img/boxfirst.svg","img/broadcast-1.svg","img/broadcast-white.svg","img/btc.svg","img/btn-bg-img.svg","img/btn-bg.svg","img/btn-bg1.svg","img/btn-border-green.svg","img/btn-d.svg","img/btn-mobile.svg","img/btn-red-border.svg","img/c1.png","img/Cancel-1.svg","img/cancel-dark.svg","img/Cancel-white.svg","img/Cancel.svg","img/card-send.svg","img/card.svg","img/casino-category.png","img/Chat-1.svg","img/Chat.svg","img/close.svg","img/closed.svg","img/coin-1.svg","img/comments.svg","img/contact_mobile.svg","img/cricket.svg","img/dice.svg","img/dots.svg","img/e-sports-white.svg","img/e-sports.svg","img/Ellipse-21.svg","img/Ellipse-6.svg","img/Ellipse-7.svg","img/esports.svg","img/eth.svg","img/facebook.svg","img/favorite-light.png","img/favorite-white.svg","img/favourite.svg","img/firstbox-btn.svg","img/footer-bg.png","img/Frame-37252.svg","img/Frame-64.svg","img/Frame-65.svg","img/game1.svg","img/game2.svg","img/google-plus.svg","img/Group-1580.svg","img/Group-1581.svg","img/Group-1582.svg","img/Group-1583.svg","img/Group-1584.svg","img/Group-1585.svg","img/Group-1598.svg","img/Group-30.svg","img/Group-32.svg","img/Group-36987.png","img/Group-37006.svg","img/Group-37007.svg","img/Group-37039.svg","img/Group-37040.svg","img/Group-37103.svg","img/Group-37124.svg","img/Group-37264.svg","img/Group-48.svg","img/hello.png","img/hot.svg","img/hover.svg","img/Icom_bookmark.svg","img/icon-1.svg","img/icon-2.svg","img/icon-3.svg","img/Icon_casino-chips.svg","img/Icon_casino-roulette.svg","img/icon_Casino.svg","img/icon_favorite.svg","img/icon_favorite1.svg","img/icon_gray-scale_football-ball.svg","img/icon_gray-scale_mini-game-white.svg","img/icon_gray-scale_mini-game.svg","img/Icon_gray-scale_sports.svg","img/icon_like.svg","img/icon_like1.svg","img/icon_livtv-sportsve-sports.svg","img/Icon_medal.svg","img/icon_message.svg","img/Icon_nav_american-football-white.svg","img/Icon_nav_american-football.svg","img/Icon_nav_football-white.svg","img/Icon_nav_football.svg","img/icon_play.svg","img/icon_pokericon_poker.svg","img/icon_roulette.svg","img/icon_share.svg","img/Icon_statistics.svg","img/icon_virtue-game-white.svg","img/icon_virtue-game.svg","img/Illustration_Favoritefavorite.svg","img/image-26.svg","img/image-39.svg","img/image-72.svg","img/info-circle-1.svg","img/info-circle.svg","img/language.svg","img/language1.svg","img/league.svg","img/left_button-bg.svg","img/live-sports-category.png","img/live-support-white.svg","img/live-support.svg","img/login-bg-m.svg","img/login.svg","img/logo-dark.svg","img/logo-text-dark.svg","img/logo-text.svg","img/Logo-white.svg","img/logo.svg","img/logout.svg","img/main-btn.svg","img/menu.svg","img/mfooter.png","img/mft.svg","img/minigames-category.png","img/mobile_bg.svg","img/mobile_btn.svg","img/moon.svg","img/nav-top.svg","img/nav_baseball-white.svg","img/nav_baseball.svg","img/nav_basketball-white.svg","img/nav_basketball.svg","img/nav_handball-white.svg","img/nav_handball.svg","img/nav_hockey-white.svg","img/nav_hockey.svg","img/nav_martial-arts-white.svg","img/nav_martial-arts.svg","img/nav_tennis-white.svg","img/nav_tennis.svg","img/nav_volleyball-white.svg","img/nav_volleyball.svg","img/page-up.svg","img/poker-1.svg","img/poker-chips.svg","img/poker-d.svg","img/poker-white.svg","img/poker.svg","img/promotions-white.svg","img/promotions.svg","img/provably-support-white.svg","img/provably-support.svg","img/Rectangle-15.png","img/Rectangle-16.png","img/Rectangle-17.png","img/Rectangle-18.png","img/Rectangle-38.svg","img/Rectangle-39.svg","img/Rectangle-40.svg","img/Rectangle-41.svg","img/Rectangle-42.svg","img/Rectangle-51.png","img/Rectangle-53.svg","img/Rectangle-56.svg","img/rugby-ball.svg","img/Search.svg","img/secondmmenu.svg","img/send.svg","img/setting-2.svg","img/seven.svg","img/Sevilla.svg","img/show-more.svg","img/showmore.svg","img/slipclosed.svg","img/slot-category.png","img/slot.svg","img/sneakers-1.svg","img/sneakers-white.svg","img/soccer-ball.svg","img/spin-now.png","img/spin-now.svg","img/spin.svg","img/sports-category.png","img/sports-mobile.svg","img/star.svg","img/sun.svg","img/symbols.svg","img/table-avatar1.svg","img/tennis-ball.svg","img/topmenuafter.svg","img/topmenubefore.svg","img/trash.svg","img/trophy.svg","img/trx.svg","img/Union-1.svg","img/Union.svg","img/user-img.svg","img/user.svg","img/user1.svg","img/user2.svg","img/user3.svg","img/user4.svg","img/user5.svg","img/user6.svg","img/user7.svg","img/userprofile.png","img/v-game-category.png","img/Vector-36.svg","img/Vector-37.svg","js/bootstrap.bundle.min.js","js/custom.js","js/jquery.min.js","js/owl.carousel.js"]),
	mimeTypes: {".woff":"font/woff",".otf":"font/otf",".css":"text/css",".png":"image/png",".svg":"image/svg+xml",".js":"application/javascript"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.ab8150df.js","imports":["_app/immutable/entry/start.ab8150df.js","_app/immutable/chunks/index.3147e953.js","_app/immutable/chunks/singletons.f7ef9a00.js","_app/immutable/chunks/index.294e7bd3.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.6c75835a.js","imports":["_app/immutable/entry/app.6c75835a.js","_app/immutable/chunks/index.3147e953.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./chunks/0-c821680a.js'),
			() => import('./chunks/1-3268a7c5.js'),
			() => import('./chunks/2-92b66bce.js'),
			() => import('./chunks/3-8471a751.js'),
			() => import('./chunks/4-5187c623.js'),
			() => import('./chunks/5-f88279eb.js'),
			() => import('./chunks/6-d35e5061.js'),
			() => import('./chunks/7-d746f6fd.js'),
			() => import('./chunks/8-9a4bc88e.js'),
			() => import('./chunks/9-dff0c9b8.js'),
			() => import('./chunks/10-cd8a4714.js'),
			() => import('./chunks/11-75d89520.js'),
			() => import('./chunks/12-697bfaac.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/affiliate",
				pattern: /^\/affiliate\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/casino",
				pattern: /^\/casino\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/favourites",
				pattern: /^\/favourites\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/help-center",
				pattern: /^\/help-center\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/minigames",
				pattern: /^\/minigames\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "/play",
				pattern: /^\/play\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			},
			{
				id: "/sports",
				pattern: /^\/sports\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 9 },
				endpoint: null
			},
			{
				id: "/sports/[kind]/leagues",
				pattern: /^\/sports\/([^/]+?)\/leagues\/?$/,
				params: [{"name":"kind","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 11 },
				endpoint: null
			},
			{
				id: "/sports/[kind]/league/versus/event_id",
				pattern: /^\/sports\/([^/]+?)\/league\/versus\/event_id\/?$/,
				params: [{"name":"kind","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 10 },
				endpoint: null
			},
			{
				id: "/sports/[kind]/matchups/highlights",
				pattern: /^\/sports\/([^/]+?)\/matchups\/highlights\/?$/,
				params: [{"name":"kind","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 12 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
