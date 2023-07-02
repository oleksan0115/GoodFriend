import { c as create_ssr_component, s as subscribe, a as escape, v as validate_component, w as writable, n as null_to_empty, b as add_attribute, d as each } from './handler-6e9bbb03.js';
import { n as navigating, p as page } from './stores-39caa6fd.js';
import Cookies from 'js-cookie';
import Toast from 'svelte-toast';
import { S as Select } from './Select-21dfb414.js';

const globalStore = writable({
  sidebar: true,
  sidebarWide: false,
  chatOpen: true,
  profileModalOpen: false,
  userModalOpen: false,
  betSlipOpen: false,
  loginModalOpen: false,
  registerModalOpen: 0,
  forgotModalOpen: 0,
  mobileMenuOpen: false,
  cart: false,
  alert: false,
  alertText: "default alert",
  alertDanger: false
});
const store = {
  subscribe: globalStore.subscribe,
  toggleItem: (item, value, alertText = "default", alertDanger = false) => {
    if (item === "alert") {
      globalStore.update((storeValues) => {
        return { ...storeValues, [item]: value, alertText, alertDanger };
      });
    } else {
      globalStore.update((storeValues) => {
        return { ...storeValues, [item]: value };
      });
    }
  }
};
const BetSlipItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="slip-item"><div class="slip-item-inner"><div class="slip-remove"><svg><use href="/img/symbols.svg?lang.svg#icon_modal_close"></use></svg></div>
				<div class="team-info"><img src="/img/basketball.svg" alt="">
						<span class="team1">Memphis1</span><span>- </span>
						<span class="team2">Houston</span></div>
				<div class="odd-type"><span>Handicap - Game - NCAA</span></div>
				<div class="odd-detail"><span class="selected-odd">Memphis +12.0</span>
						<span class="slip-item-rate">1.425</span></div>
				<div class="slip-item-input-wrapper"><div class="input-item"><input type="text">
								<span>Bet</span></div>
						<div class="input-item"><input type="text">
								<span>Win</span></div></div></div></div>`;
});
const BetSlip = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $globalStore, $$unsubscribe_globalStore;
  $$unsubscribe_globalStore = subscribe(store, (value) => $globalStore = value);
  $$unsubscribe_globalStore();
  return `<div class="${["bet-slip", $globalStore.betSlipOpen ? "open" : ""].join(" ").trim()}"><div class="bet-slip-wrapper"><div class="bet-slip-header"><div class="bet-slip-tabs"><div class="${["tab-item active", "active"].join(" ").trim()}">Bet Slip</div>
									<div class="${["tab-item", ""].join(" ").trim()}">My Bets</div></div>
							<span class="close-bet-slip"><svg><use href="/img/symbols.svg?lang.svg#icon_modal_close"></use></svg></span></div>
					${`<div class="bet-slip-content"><div class="odds-tabs"><div class="${["odds-tab-item active", "active"].join(" ").trim()}">Single1
									</div>
									<div class="${["odds-tab-item", ""].join(" ").trim()}">Multiples1
									</div></div>
	
							${`<div class="odds-tab-content">    
									${validate_component(BetSlipItem, "BetSlipItem").$$render($$result, {}, {}, {})}
									    
									
									    
									${validate_component(BetSlipItem, "BetSlipItem").$$render($$result, {}, {}, {})}
									  
									
									    
									${validate_component(BetSlipItem, "BetSlipItem").$$render($$result, {}, {}, {})}
									</div>
							<div class="slip-total-info"><div class="total-bet"><span>Total Bet</span>
											<span>0.0001 Ƀ</span></div>
									<div class="possible-win"><span>Possible Win</span>
											<span>0.0024 Ƀ</span></div>
									<button class="place-bet">PLACE BET</button>                            
									<div class="slip-remove-all"><svg><use href="/img/symbols.svg?lang.svg#icon_slip_remove_all"></use></svg>
											<span>Remove All</span></div></div>`}</div>`}</div></div>`;
});
const DarkModeButtons = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let lightMode = Cookies.get("Mode") == void 0 ? "Dark" : Cookies.get("Mode");
  return `<div class="row"><div class="col-md-6 col-6 pe-1"><button class="${["btn color-chnage w-100", lightMode === "Light" ? "active" : ""].join(" ").trim()}"><p class="mt-0 mb-0"><img src="/img/sun.svg"> Light</p></button></div>
    <div class="col-md-6 col-6 ps-1"><button class="${["btn color-chnage w-100 active", lightMode === "Dark" ? "active" : ""].join(" ").trim()}"><p class="mt-0 mb-0"><img src="/img/moon.svg"> Dark</p></button></div></div>`;
});
const HeaderLoggedin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_globalStore;
  $$unsubscribe_globalStore = subscribe(store, (value) => value);
  $$unsubscribe_globalStore();
  return `<div class="col-md-7 col-10 float_right"><div class="display-flex"><button id="slip" class="btn btn-color color-text me-3 pb-2 mobilenone">Bet Slip
    </button>
    <div class="nav-balance" style="align-self:center;"><img src="/img/coin-1.svg" alt="">
        <span class="nav-balance-amount">$ 750</span>
        <span class="nav-balance-plus"><img src="/img/add.svg" alt=""></span></div>
    <button id="mslip" class="btn btn-color color-text me-1 desknone">BS
    </button>

    <button id="deskchat" class="btn btn-color mobilenone"><img src="/img/Chat.svg"></button>

    
    <div class="row user"><div class="col-md-4"><div class="mobileuser"><img width="40px" height="40px" src="/img/user.svg">
          <img class="desknone icon_" src="/img/Group-1583.svg"></div></div>
      <div class="col-md-8 mobilenone"><h6 class="text-white mb-0">Stacey Miller</h6>
        <p class="mb-0 mt-0"><img style="margin-bottom: 6px;" src="/img/Group-1583.svg"> level 31
        </p></div></div></div></div>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let path;
  let $globalStore, $$unsubscribe_globalStore;
  let $page, $$unsubscribe_page;
  $$unsubscribe_globalStore = subscribe(store, (value) => $globalStore = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const toastOptions = {
    duration: 1500,
    position: "top-right",
    dismissible: true
  };
  new Toast(toastOptions);
  let signUpUserData = {
    "email": "",
    "authCode": "",
    "promoCode": "",
    "password": ""
  };
  if ($globalStore.registerModalOpen == 0) {
    signUpUserData = {
      "email": "",
      "authCode": "",
      "promoCode": "",
      "password": ""
    };
  }
  path = $page.url.pathname;
  {
    {
      if ($globalStore.registerModalOpen == 0)
        signUpUserData = {
          "email": "",
          "authCode": "",
          "promoCode": "",
          "password": ""
        };
    }
  }
  $$unsubscribe_globalStore();
  $$unsubscribe_page();
  return `<div class="topbar bg-color"><div class="row"><div class="col-md-5 col-2 align-self-center"><div class="main-menu"><ul><li class="${[
    "main-menu-item menu-item-casino gf-border-right-active",
    path === "/casino" ? "active" : ""
  ].join(" ").trim()}"><a href="/casino"><svg class="active-menu-icon"><use href="/img/symbols.svg?lang.svg#icon_Casino"></use></svg>

                <svg><use href="/img/symbols.svg?lang.svg#icon_Casino_Dark"></use></svg>

              <span>Casino</span></a></li>
          <li class="${[
    "main-menu-item menu-item-sports gf-border-right-active",
    path === "/sports" ? "active" : ""
  ].join(" ").trim()}"><a href="/sports"><svg class="active-menu-icon"><use href="/img/symbols.svg?lang.svg#icon_Sports"></use></svg>

                <svg><use href="/img/symbols.svg?lang.svg#icon_Sports_Dark"></use></svg>

              <span>Sports</span></a></li></ul></div>

      <a href="/"><img class="mlogo" src="/img/Union.svg"></a></div>

    ${`${validate_component(HeaderLoggedin, "LoggedinHeader").$$render($$result, {}, {}, {})}`}</div>
  <div class="${["usershow", $globalStore.profileModalOpen ? "open" : ""].join(" ").trim()}"><div class="overlay"></div>
    <div class="userprofile"><div class="row"><div class="col-md-3 col-3"><img class="user-image" src="/img/user.svg"></div>
        <div class="col-md-7 col-7 pe-0 ps-0"><h6 class="text-white mb-0">Stacey Miller</h6>
          <p class="mb-0 mt-0"><img style="margin-bottom: 4px;" src="/img/Group-1583.svg"> level 31
          </p></div>
        <div class="col-md-2 col-2"><div class="closed float-end"><img class="cancel-light" src="/img/Cancel-1.svg">
            <img class="cancel-dark" style="display:none" src="/img/cancel-dark.svg"></div></div></div>
      <h4 class="mt-4">Theme</h4>
      <div class="theme-button">${validate_component(DarkModeButtons, "DarkModeButtons").$$render($$result, {}, {}, {})}</div>
      <div class="border mt-3 mb-4"></div>
      <h4>My Account</h4>
      <ul class="menu"><li class="active"><a id="setting" href="#"><svg><use href="/img/symbols.svg?lang.svg#icon_modal_settings"></use></svg>
            Settings</a></li>
        <li><a href="#"><svg><use href="/img/symbols.svg?lang.svg#icon_modal_deposit"></use></svg> Deposit</a></li>
        <li><a href="#"><svg><use href="/img/symbols.svg?lang.svg#icon_modal_withdraw"></use></svg> Withdraw</a></li></ul>
      <div class="border mb-3 mt-3"></div>
      <ul class="menu"><li class="logout"><a href="#"><img class="me-3" src="/img/logout.svg"> Logout</a></li></ul></div></div></div>

${validate_component(BetSlip, "BetSlip").$$render($$result, {}, {}, {})}

<div class="${["user-information", $globalStore.userModalOpen ? "open" : ""].join(" ").trim()}"><div class="overlay"></div>
  <div class="userinformation"><div class="row"><div class="col-md-8 col-7 align-self-center"><h4 class="mb-0">User Information</h4></div>
      <div class="col-md-4 col-5 text-end"><img id="closeduser" class="mobilenone cancel-light" src="/img/close.svg">
        <img class="cancel-dark" style="display:none" src="/img/close.svg">

        <button id="mcloseduser" class="btn btn-back desknone float-end"><img class="me-1" src="/img/Arrow-Right-1.svg"> Back
        </button></div></div>
    <div class="row"><div class="col-md-12 text-center"><div class="position-relative"><div class="userback"><img class="userimg" src="/img/user-img.svg"></div>
          <img class="icon1" src="/img/Group-1585.svg"></div>
        <h6 class="text-white mb-2 mt-3">Stacey Miller</h6>
        <p class="mt-0">User Id: @toles9388944</p></div></div>
    <div class="heading mt-3"><h5 class="statistic-widget-title"><svg><use href="/img/symbols.svg?lang.svg#icon_statistics"></use></svg> Statistics
      </h5></div>
    <div class="row"><div class="col-md-4 col-4 paddinglr0"><div class="wins text-center bg2 box-style"><img class="mb-2" src="/img/Icon_medal.svg">
          <p class="mb-2">Total wins</p>
          <h6>23432</h6></div></div>
      <div class="col-md-4 col-4 paddinglr0"><div class="wins text-center bg2 box-style"><img class="mb-2" src="/img/Icon_casino-roulette.svg">
          <p class="mb-2">Total Bets</p>
          <h6>15</h6></div></div>
      <div class="col-md-4 col-4 paddinglr0"><div class="wins text-center bg2 box-style"><img class="mb-2" src="/img/Icon_casino-chips.svg">
          <p class="mb-2">Total Wagered</p>
          <h6>$ 2,750</h6></div></div></div>
    <div class="heading mt-4"><h5 class="statistic-widget-title"><svg><use href="/img/symbols.svg?lang.svg#icon_favorite"></use></svg> Top 3 Favorite
        Games
      </h5></div>
    <div class="row"><div class="col-md-4 col-4 paddinglr0"><img class="w-100" src="/img/Rectangle-41.svg"></div>
      <div class="col-md-4 col-4 paddinglr0"><img class="w-100" src="/img/Rectangle-40.svg"></div>
      <div class="col-md-4 col-4 paddinglr0"><img class="w-100" src="/img/Rectangle-38.svg"></div></div></div></div>


<div class="${["login-box", $globalStore.loginModalOpen ? "open" : ""].join(" ").trim()}"><div class="overlay"></div>
  <div class="login"><div class="login-banner"><img src="/img/Logo-white.svg">
      <div class="p-4 mt-4"><h2>Made for professional Gamblers</h2>
        <p class="mb-1">Lorem ipsum dolor sit amet consectetur. eget tortor egestas.
        </p>
        <img src="/img/Frame-37252.svg"></div></div>
    <div class="login_box"><div class="row border-bottom_m pb-40"><div class="col-10"><img class="desknone" src="/img/logo.svg"></div>
        <div class="col-2"><img id="closed" src="/img/close.svg"></div></div>

      <h2 class="mt_30">Log in</h2>
      <p class="mb-4">Welcome back. Please enter your details</p>
      <form><div class="mb-3"><label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></div>
        <div class="mb-3"><label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1"></div>
        <p class="forgot text-end"><a href="#">Forgot password?</a></p>
        <button type="submit" class="btn btn-primary w-100 mt30">Submit
        </button></form>
      <div class="text-center"><h6 class="signup_1">Don’t have an account? <a href="#">Sign up</a></h6></div>
      <div class="position-relative mt-40"><div class="border"></div>
        <h5 class="text-center">Or continue with</h5></div>
      <div class="text-center"><ul class="login-socials"><li><img src="/img/google-plus.svg"></li>
          <li><img src="/img/apple.svg"></li>
          <li><img src="/img/facebook.svg"></li></ul></div></div></div></div>
<div class="${["sign-box", $globalStore.registerModalOpen ? "open" : ""].join(" ").trim()}"><div class="overlay"></div>
  <div class="signup"><div class="signup-banner"><img src="/img/Logo-white.svg">
      <div class="p-4 mt-4"><h2>Made for professional Gamblers</h2>
        <p class="mb-1">Lorem ipsum dolor sit amet consectetur. eget tortor egestas.
        </p>
        <img src="/img/Frame-37252.svg"></div></div>
    <div class="signup-box"><div class="row border-bottom_m pb-40"><div class="col-10"><img class="desknone" src="/img/logo.svg"></div>
        <div class="col-2"><img id="closeds" src="/img/close.svg"></div></div>
      <h2 class="mt_30">Hey, hello 👋</h2>
      <form>${$globalStore.registerModalOpen == 1 ? `<div class="mb-3"><label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" aria-describedby="emailHelp" name="email" required${add_attribute("value", signUpUserData.email, 0)}></div>` : `${$globalStore.registerModalOpen == 2 ? `<div class="mb-3"><label for="exampleInputEmail1" class="form-label">Auth code</label>
          <input type="text" class="form-control" aria-describedby="emailHelp" maxlength="5" required${add_attribute("value", signUpUserData.authCode, 0)}></div>
        <div class="mb-3"><label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control"${add_attribute("value", signUpUserData.password, 0)}></div>
        <div class="mb-3"><label for="exampleInputEmail1" class="form-label">Promotion code (optional)</label>
          <input type="text" class="form-control" aria-describedby="emailHelp"${add_attribute("value", signUpUserData.promoCode, 0)}></div>` : `<p class="signin">Successfully Changed! <a href="#">Sign in</a></p>`}`}
        <button type="submit" class="btn btn-primary w-100 mt30">${escape($globalStore.registerModalOpen == 1 ? "Send" : $globalStore.registerModalOpen == 2 ? "Verify" : "Submit")}</button></form>
      <div class="text-center">${$globalStore.registerModalOpen == 1 ? `<h6 class="signup_1">Already have an account? <a href="#">Sign in</a></h6>` : ``}</div>
      <div class="position-relative mt-40"><div class="border"></div>
        <h5 class="text-center">Or continue with</h5></div>
      <div class="text-center"><ul><li><img src="/img/google-plus.svg"></li>
          <li><img src="/img/apple.svg"></li>
          <li><img src="/img/facebook.svg"></li></ul></div></div></div></div>
<div class="${["forgot-box", $globalStore.forgotModalOpen ? "open" : ""].join(" ").trim()}"><div class="overlay"></div>
  <div class="forgot"><div class="forgot-banner"><img src="/img/Logo-white.svg">
      <div class="p-4 mt-4"><h2>Made for professional Gamblers</h2>
        <p class="mb-1">Lorem ipsum dolor sit amet consectetur. eget tortor egestas.
        </p>
        <img src="/img/Frame-37252.svg"></div></div>
    <div class="forgot_box"><div class="row border-bottom_m pb-40"><div class="col-10"><img class="desknone" src="/img/logo.svg"></div>
        <div class="col-2"><img id="closed" src="/img/close.svg"></div></div>

      <h2 class="mt_30">Forgot password</h2>
      <p class="mb-4">Enter your email address to reset your password</p>
      <form>${$globalStore.forgotModalOpen == 1 ? `<div class="mb-3"><label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></div>` : `${$globalStore.forgotModalOpen == 2 ? `<div class="mb-3"><label for="exampleInputCode1" class="form-label">5 Verification Code</label>
          <input type="text" class="form-control" id="exampleInputCode1" minlength="5" maxlength="5"></div>

        <div class="mb-3"><label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1"></div>` : `<p class="signin">Successfully Changed! <a href="#">Sign in</a></p>`}`}
        <button type="submit" class="btn btn-primary w-100 mt30">${escape($globalStore.forgotModalOpen == 1 ? "Send" : $globalStore.forgotModalOpen == 2 ? "Verify" : "Submit")}</button></form></div></div></div>`;
});
const css$3 = {
  code: ".sidebar-arrow.svelte-1w1yjcg.svelte-1w1yjcg{transition:transform 0.2s ease-in;cursor:pointer}[aria-expanded=true].svelte-1w1yjcg .sidebar-arrow.svelte-1w1yjcg{transform:rotate(0.25turn)}li.svelte-1w1yjcg.svelte-1w1yjcg{color:#67707B}",
  map: null
};
const SidebarItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { sidebar_item } = $$props;
  let isOpen = false;
  let { pageSidebar } = $$props;
  if ($$props.sidebar_item === void 0 && $$bindings.sidebar_item && sidebar_item !== void 0)
    $$bindings.sidebar_item(sidebar_item);
  if ($$props.pageSidebar === void 0 && $$bindings.pageSidebar && pageSidebar !== void 0)
    $$bindings.pageSidebar(pageSidebar);
  $$result.css.add(css$3);
  return `
<li id="dropmenu" class="${[
    "drop-dwon dropdown svelte-1w1yjcg",
    pageSidebar === sidebar_item[1] ? "active" : ""
  ].join(" ").trim()}"${add_attribute("aria-expanded", isOpen, 0)}>${sidebar_item[3] ? `<a${add_attribute("href", sidebar_item[1], 0)} class="${[
    "dropdown-toggle menu-item-icon ",
    pageSidebar === sidebar_item[1] ? "active" : ""
  ].join(" ").trim()}" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><div class="icon-bg"><svg><use href="${"/img/symbols.svg?lang.svg#" + escape(sidebar_item[2], true)}"></use></svg></div>
            <span class="none">${escape(sidebar_item[0])}</span></a>
        <svg class="sidebar-arrow none svelte-1w1yjcg" style="tran" width="20" height="20" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 5l7 7-7 7"></path></svg>
        ${``}` : `<a${add_attribute("href", sidebar_item[1], 0)} class="${["menu-item-icon ", pageSidebar === sidebar_item[1] ? "active" : ""].join(" ").trim()}"><div class="icon-bg"><svg><use href="${"/img/symbols.svg?lang.svg#" + escape(sidebar_item[2], true)}"></use></svg></div>
            <span class="none">${escape(sidebar_item[0])}</span></a>`}</li>

`;
});
const css$2 = {
  code: '.sidebar-sm.svelte-18n25qm .language.svelte-18n25qm{width:64px}.mb-active-lang.svelte-18n25qm.svelte-18n25qm{background:rgba(255, 255, 255, 0.05);backdrop-filter:blur(4.5px);border-radius:7px;width:64px;height:54px;display:flex;align-items:center;justify-content:center;margin-top:35px;cursor:pointer;margin-left:-9px}.language-mb.svelte-18n25qm.svelte-18n25qm{position:relative}.mb-lang-select.svelte-18n25qm.svelte-18n25qm{position:absolute;top:-83px;left:2px;padding:10px;border-radius:7px;background:rgba(255, 255, 255, 0.05);backdrop-filter:blur(4.5px)}.mb-lang-select.svelte-18n25qm ul.svelte-18n25qm{display:flex;flex-direction:column;align-items:center}.swiper-button-next.svelte-18n25qm.svelte-18n25qm{color:red}.mb-lang-select.svelte-18n25qm ul li.svelte-18n25qm{background:linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 222.09%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;text-fill-color:transparent}.mb-lang-select.svelte-18n25qm ul li.svelte-18n25qm:not(:last-child){margin-bottom:10px;position:relative}.mb-lang-select.svelte-18n25qm ul li.svelte-18n25qm:not(:last-child)::after{content:"";position:absolute;top:27px;right:-1px;height:1px;width:22px;background-color:#5c5c5c}.mb-active-lang.svelte-18n25qm span.svelte-18n25qm{font-weight:400;font-size:16px;line-height:19px;background:linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 222.09%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;text-fill-color:transparent}.language-widget-wrapper.svelte-18n25qm.svelte-18n25qm{--background:transparent;--border:none;--list-background:rgba(255, 255, 255, 0.05) !important;--item-hover-bg:rgba(255, 255, 255, 0.05) !important;--border-hover:none !important;--border-focused:none !important;--padding:0 !important;--selected-item-padding:0 0 0 16px;--height:24px;--chevron-height:24px;--chevron-color:#fff;--item-height:44px;--item-padding:10px 0 10px 40px;--font-size:16px;color:#fff !important;cursor:pointer;margin-top:21px}.language-widget-wrapper.svelte-18n25qm svg{display:flex !important}',
  map: null
};
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isSportsPage;
  let $globalStore, $$unsubscribe_globalStore;
  $$unsubscribe_globalStore = subscribe(store, (value) => $globalStore = value);
  const languages = ["English", "Korean"];
  let { pageSidebar } = $$props;
  const sidebar_data = [
    [
      "Casino",
      "/casino",
      "icon_side_casino",
      [
        ["Dropdown 1", "/sports", "icon_side_casino"],
        ["Dropdown 2", "/casino", "icon_side_casino"],
        ["Dropdown 3", "/sports", "icon_side_casino"],
        ["Dropdown 4", "/casino", "icon_side_casino"],
        ["Dropdown 5", "/casino", "icon_side_casino"]
      ]
    ],
    [
      "Slots",
      "/slot",
      "icon_side_slot",
      [
        ["Dropdown 1", "/sports", "icon_side_casino"],
        ["Dropdown 2", "/casino", "icon_side_casino"],
        ["Dropdown 3", "/sports", "icon_side_casino"],
        ["Dropdown 4", "/casino", "icon_side_casino"],
        ["Dropdown 5", "/casino", "icon_side_casino"]
      ]
    ],
    ["Sports", "/sports", "icon_side_sports"],
    ["Live Sports", "/live-sports", "icon_side_live_sports"],
    ["E-Sports", "/esports", "icon_side_e_sports"],
    ["Virtual Games", "/virtual-games", "icon_side_virtual_games"],
    ["Affiliate", "/affiliate", "icon_side_affiliate"],
    ["Promotions", "/promotions", "icon_side_promotions"],
    ["Provably Fair", "/help-center", "icon_side_provably_fair"],
    ["Live Support", "/live-support", "icon_side_live_support"]
  ];
  if ($$props.pageSidebar === void 0 && $$bindings.pageSidebar && pageSidebar !== void 0)
    $$bindings.pageSidebar(pageSidebar);
  $$result.css.add(css$2);
  isSportsPage = pageSidebar.includes("/sports", 0);
  $$unsubscribe_globalStore();
  return `

<div class="${[
    "sidebar-lg left-side-bar bg-color " + escape(pageSidebar, true) + " svelte-18n25qm",
    $globalStore.mobileMenuOpen ? "open" : ""
  ].join(" ").trim()}"><button id="lefbutton" class="btn btn-color text-white toggle-sidebar-btn"><svg id="smoll_menu"><use href="/img/symbols.svg?lang.svg#icon_arrow_left"></use></svg>
        <img id="closed_menu" src="/img/close.svg"></button>
    <div class="pe-4 pt-3 ps-4"><div class="logo"><a href="/"><img width="40" src="/img/Union.svg">
                <img class="logo-light" src="/img/logo-text.svg">
                <img class="logo-dark" src="/img/logo-text-dark.svg"></a></div>
        <div class="border"></div></div>
    <div class="scroll">${!isSportsPage ? `<div class="padding perk-full"><p><span class="my-perks svelte-18n25qm">MY VIP PERKS</span><span class="all-perks svelte-18n25qm">VIEW ALL</span></p></div>
        
        <div class="padding pt-0 spin-wrapper"><button class="btn lebtn w-100"><img src="img/spin-now.png"> SPIN NOW <span class="svelte-18n25qm">Unlocked</span></button></div>

        <div class="border"></div>
        <ul class="menu menu1 svelte-18n25qm"><li class="${["svelte-18n25qm", pageSidebar === "/favourites" ? "active" : ""].join(" ").trim()}"><a href="/favourites" class="${["menu-item-icon ", pageSidebar === "/favourites" ? "active" : ""].join(" ").trim()}"><div class="icon-bg"><svg><use href="/img/symbols.svg?lang.svg#icon_side_favorite"></use></svg></div>
                    <span class="none svelte-18n25qm">Favorite</span></a></li></ul>` : `<div class="padding padding10"><ul class="first none svelte-18n25qm"><li class="svelte-18n25qm">FAVORITES</li></ul></div>
          <ul class="menu menu1 svelte-18n25qm"><li class="svelte-18n25qm"><a href="favourites.php"><img class="me-3 icon1 icon_hide" src="/img/Icon_nav_football.svg">
                <img class="me-3 icon1 icon-hover" src="/img/Icon_nav_football-white.svg">
                <span class="none svelte-18n25qm">FC Copenbadly</span></a></li>
            <li class="svelte-18n25qm"><a href="#"><img class="me-3 icon1 icon_hide" src="/img/Icon_nav_american-football.svg">
                <img class="me-3 icon1 icon-hover" src="/img/Icon_nav_american-football-white.svg">
                <span class="none svelte-18n25qm">Chicago Bears</span></a></li></ul>
        
          <div class="border"></div>
          <div class="sportb mobilenone mt-3 favourites"><div class="input-group mb-3"><button type="button" class="btn btn-search"><img src="/img/Group-48.svg"></button>
              <div class="form-outline none"><input type="search" id="form1" class="form-control" placeholder="Search here..."></div></div></div>`}

        <div class="border mb-3"></div>

        <ul class="menu menu1 svelte-18n25qm">${each(sidebar_data, (sidebar_item) => {
    return `${validate_component(SidebarItem, "SidebarItem").$$render($$result, { sidebar_item, pageSidebar }, {}, {})}`;
  })}</ul>
        <div class="border"></div>
        <div class="pb-3"><div class="language svelte-18n25qm"><div class="language-widget-wrapper language-dt svelte-18n25qm">${validate_component(Select, "Select").$$render(
    $$result,
    {
      items: languages,
      showChevron: true,
      searchable: false,
      value: "English",
      clearable: false,
      focused: false
    },
    {},
    {
      prepend: () => {
        return `<div slot="prepend"><svg><use href="/img/symbols.svg?lang.svg#icon_side_language"></use></svg></div>`;
      }
    }
  )}</div></div></div></div></div>



<div class="${"sidebar-sm left-side-bar bg-color " + escape(pageSidebar, true) + " svelte-18n25qm"}"><button id="lefbutton" class="toggle-sidebar-btn btn btn-color text-white"><svg id="smoll_menu" class="mobilenone"><use href="/img/symbols.svg?lang.svg#icon_arrow_left"></use></svg>
        <img id="closed_menu" src="/img/close.svg"></button>
    <div class="pe-4 pt-3 ps-4"><div class="logo"><a href="/"><img width="40" src="/img/Union.svg"></a></div>
        <div class="border"></div></div>
    <div class="scroll">${!isSportsPage ? `<div class="spin-wrapper py-30"><button class="btn lebtn w-100"><img src="img/spin-now.png"></button></div>

        <div class="border"></div>
        <ul class="menu py-30 svelte-18n25qm"><li class="${["svelte-18n25qm", pageSidebar === "/favourites" ? "active" : ""].join(" ").trim()}"><a href="/favourites" class="${["menu-item-icon ", pageSidebar === "/favourites" ? "active" : ""].join(" ").trim()}"><div class="icon-bg"><svg><use href="/img/symbols.svg?lang.svg#icon_side_favorite"></use></svg></div>
                    <span class="none svelte-18n25qm">Favorite</span></a></li></ul>` : `<div class="padding padding10"><ul class="first none svelte-18n25qm"><li class="svelte-18n25qm">FAVORITES</li></ul></div>
          <ul class="menu menu1 svelte-18n25qm"><li class="svelte-18n25qm"><a href="favourites.php"><img class="me-3 icon1 icon_hide" src="/img/Icon_nav_football.svg">
                <img class="me-3 icon1 icon-hover" src="/img/Icon_nav_football-white.svg">
                <span class="none svelte-18n25qm">FC Copenbadly</span></a></li>
            <li class="svelte-18n25qm"><a href="#"><img class="me-3 icon1 icon_hide" src="/img/Icon_nav_american-football.svg">
                <img class="me-3 icon1 icon-hover" src="/img/Icon_nav_american-football-white.svg">
                <span class="none svelte-18n25qm">Chicago Bears</span></a></li></ul>
        
          <div class="border"></div>
          <div class="sportb mobilenone mt-3 favourites"><div class="input-group mb-3"><button type="button" class="btn btn-search"><img src="/img/Group-48.svg"></button>
              <div class="form-outline none"><input type="search" id="form1" class="form-control" placeholder="Search here..."></div></div></div>`}

        <div class="border mb-3"></div>
        <ul class="menu menu1 svelte-18n25qm">${each(sidebar_data, (sidebar_item) => {
    return `${validate_component(SidebarItem, "SidebarItem").$$render($$result, { sidebar_item, pageSidebar }, {}, {})}`;
  })}</ul>
        <div class="border"></div>
        <div class="pb-3"><div class="language svelte-18n25qm"><div class="language-mb svelte-18n25qm"><div class="mb-active-lang svelte-18n25qm"><span class="svelte-18n25qm">EN</span></div>
                    ${``}</div></div></div></div>
</div>`;
});
const Chat = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="position-relative"><div class="right-bar chat"><div class="chattable table-black"><table class="table table-borderless"><thead class="sticky-top"><tr><th colspan="2" width="35%">Live Chat</th>
                        <th><div class="text-end icon"><img class="me-2" src="/img/info-circle-1.svg">
                                <img class="me-2" src="/img/trophy.svg">
                                <a href="#" id="cancel"><img class="darkicon" src="/img/Cancel.svg">
                                    <img class="whiteicon" src="/img/Cancel-white.svg"></a></div></th></tr></thead>
                <tbody><tr><th width="15%"><img src="/img/user1.svg"></th>
                        <td colspan="2"><p class="mb-2"><span class="name">Ellis Schneidera <img src="/img/Group-1581.svg">
                                    <time class="float-end">12:03</time></span></p>
                            <p class="chat-message-content">Lorem ipsum dolor sit amet consecte Feugiat accum.</p></td></tr>
                    <tr class="mt-4"><th width="15%"><img src="/img/user2.svg"></th>
                        <td colspan="2"><p class="mb-2">Norman Bates <img src="/img/Group-1582.svg">
                                <span class="float-end">12:03</span></p>
                            <p class="chat-message-content">Lorem ipsum dolor sit amet consecte Feugiat accum.</p></td></tr>
                    <tr class="mt-4"><th width="15%"><img src="/img/user3.svg"></th>
                        <td colspan="2"><p class="mb-2">Marsha Carson <img src="/img/Group-1581.svg">
                                <span class="float-end">12:03</span></p>
                            <p class="chat-message-content">Lorem ipsum dolor sit amet consecte Feugiat accum.</p></td></tr>
                    <tr class="mt-4"><th width="15%"><img src="/img/user4.svg"></th>
                        <td colspan="2"><p class="mb-2">Lowell Gray <img src="/img/Group-1581.svg">
                                <span class="float-end">12:03</span></p>
                            <p class="chat-message-content">Lorem ipsum dolor sit amet consecte Feugiat accum.</p></td></tr>
                    <tr class="mt-4"><th width="15%"><img src="/img/user5.svg"></th>
                        <td colspan="2"><p class="mb-2">Marsha Carson <img src="/img/Group-1580.svg">
                                <span class="float-end">12:03</span></p>
                            <p class="chat-message-content">Lorem ipsum dolor sit amet consecte Feugiat accum.</p></td></tr>
                    <tr class="mt-4"><th width="15%"><img src="/img/user6.svg"></th>
                        <td colspan="2"><p class="mb-2">Lowell Gray <img src="/img/Group-1583.svg">
                                <span class="float-end">12:03</span></p>
                            <p class="chat-message-content">Lorem ipsum dolor sit amet consecte Feugiat accum.</p></td></tr>
                    <tr class="mt-4"><th width="15%"><img src="/img/user7.svg"></th>
                        <td colspan="2"><p class="mb-2">Marsha Carson <img src="/img/Group-1584.svg">
                                <span class="float-end">12:03</span></p>
                            <p class="chat-message-content">Lorem ipsum dolor sit amet consecte Feugiat accum.</p></td></tr></tbody></table></div>
        <div class="message"><div class="input-group"><input type="text" class="form-control" placeholder="Write a message..." aria-label="Username" aria-describedby="basic-addon1">
                <span class="input-group-text" id="basic-addon1"><img src="/img/send.svg"></span></div></div></div></div>`;
});
const css$1 = {
  code: '.mobile-footer.svelte-f3lhl0 #menu.svelte-f3lhl0{position:relative}.mobile-footer.svelte-f3lhl0 #menu.svelte-f3lhl0::before{content:"";position:absolute;width:30px;height:30px;left:-5px;top:-15px;background:rgba(126, 44, 255, 0.53);filter:blur(12.5px);transform:rotate(90deg)}.mobile-footer.svelte-f3lhl0 #menu.svelte-f3lhl0::after{content:"";position:absolute;width:4px;height:38px;left:8px;top:-33px;background:radial-gradient(50% 50% at 50% 50%, #834DD8 0%, rgba(131, 77, 216, 0) 100%);transform:rotate(90deg)}.mobile-footer.svelte-f3lhl0 #bet-slip.svelte-f3lhl0{position:relative}.mobile-footer.svelte-f3lhl0 #bet-slip.svelte-f3lhl0::before{content:"";position:absolute;width:30px;height:30px;left:-5px;top:-15px;background:rgb(255 255 255 / 70%);filter:blur(12.5px);transform:rotate(90deg)}.mobile-footer.svelte-f3lhl0 #bet-slip.svelte-f3lhl0::after{content:"";position:absolute;width:4px;height:38px;left:8px;top:-33px;background:radial-gradient(50% 50% at 50% 50%, rgb(255 255 255 / 70%) 0%, rgba(131, 77, 216, 0) 100%);transform:rotate(90deg)}',
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_globalStore;
  $$unsubscribe_globalStore = subscribe(store, (value) => value);
  $$result.css.add(css$1);
  $$unsubscribe_globalStore();
  return `<div class="container"><div class="footer text-center"><h6>GoodFriends – A constructive and inclusive social network for
            Professional Casino. With you every step of your journey.
        </h6>
        <p>Built on react — the open source software that powers CASINO and
            other inclusive communities. Made with love and Ruby on Rails.
            GoodFriends © 2023
        </p>
        <img src="/img/Union.svg"></div></div>
<div class="mobile_footer_fix"><div class="mobile-footer desknone svelte-f3lhl0"><div class="container"><div class="row"><div class="col-3 text-center"><a id="menu" class="svelte-f3lhl0"><img src="/img/menu.svg">
                        <p>Menu</p></a></div>

                <div class="col-3 text-center"><a href="/casino"><img src="/img/icon_Casino.svg">
                        <p>Casino</p></a></div>
                <div class="col-3 text-center"><a href="/sports"><img src="/img/Icon_gray-scale_sports.svg">
                        <p>Sports</p></a></div>
                <div class="col-3 text-center"><a id="chat"><img src="/img/Chat-1.svg">
                        <p>Chat</p></a></div>

                <div class="col-3 text-center"><a id="bet-slip" class="svelte-f3lhl0"><img src="/img/bet-slip.svg">
                        <p>Bet Slip</p></a></div></div></div></div>
</div>`;
});
const css = {
  code: ".back-to-top.svelte-bpw71y.svelte-bpw71y{opacity:1;transition:opacity 0.5s, visibility 0.5s;position:fixed;z-index:99999;right:300px;user-select:none;bottom:75px;cursor:pointer}.back-to-top.hidden.svelte-bpw71y.svelte-bpw71y{opacity:0;visibility:hidden}.back-to-top.svelte-bpw71y img.svelte-bpw71y{max-width:50px}@media only screen and (max-width:649px){.back-to-top.svelte-bpw71y.svelte-bpw71y{bottom:75px}}",
  map: null
};
function myFunction() {
  window.document.body.classList.remove("sidebar-wide");
  window.document.body.classList.add("sidebar-tight");
}
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let path;
  let $navigating, $$unsubscribe_navigating;
  let $page, $$unsubscribe_page;
  let $globalStore, $$unsubscribe_globalStore;
  $$unsubscribe_navigating = subscribe(navigating, (value) => $navigating = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_globalStore = subscribe(store, (value) => $globalStore = value);
  let { showOnPx = 150 } = $$props;
  let device_width;
  if ($$props.showOnPx === void 0 && $$bindings.showOnPx && showOnPx !== void 0)
    $$bindings.showOnPx(showOnPx);
  $$result.css.add(css);
  path = $page.url.pathname;
  {
    {
      {
        device_width = "dw2";
      }
    }
  }
  {
    if ($navigating) {
      if (device_width == "dw1") {
        myFunction();
      }
    }
  }
  $$unsubscribe_navigating();
  $$unsubscribe_page();
  $$unsubscribe_globalStore();
  return `
<div class="${[
    escape(null_to_empty(device_width), true) + " svelte-bpw71y",
    !$globalStore.chatOpen ? "right-chat" : ""
  ].join(" ").trim()}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
  ${validate_component(Sidebar, "Sidebar").$$render($$result, { pageSidebar: path }, {}, {})}
  ${validate_component(Chat, "Chat").$$render($$result, {}, {}, {})}

  <div class="${[
    "body-part " + escape(path, true) + " svelte-bpw71y",
    (path === "/affiliate" ? "affiliate" : "") + " " + (path.includes("/help-center", 0) ? "provably-fair" : "")
  ].join(" ").trim()}">${slots.default ? slots.default({}) : ``}

    ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}

    <div class="${["back-to-top svelte-bpw71y", "hidden"].join(" ").trim()}"><img src="/img/page-up.svg" class="svelte-bpw71y"></div></div>
</div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-584ee121.js.map
