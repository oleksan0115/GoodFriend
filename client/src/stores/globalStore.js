import { writable } from "svelte/store";

const globalStore = writable({
  sidebar: true,
  sidebarWide: false,
  chatOpen: true,
  profileModalOpen: false,
  betSlipOpen: false,
  withDrawModal: false,
  depositModal: false,
  loginModalOpen: false,
  registerModalOpen: 0,
  forgotModalOpen: 0,
  mobileMenuOpen: false,
  cart: false,
  alert: false,
  alertText: "default alert",
  alertDanger: false,
  telegramUserData: null,
  userDetail: null,
  userInfo: null,
  // userDetail: {
  //   "member_idx": 3,
  //   "email": "g_115965063647480354431",
  //   "nick": "user6474563937",
  //   "level": 1,
  //   "game_money": 0,
  //   "profile_image": "/img/user.svg",
  //   "login_type": "google",
  //   "affiliate_code": "abcde"
  // },
  // userInfo: {
  //   "member_idx": 3,
  //   "email": "g_115965063647480354431",
  //   "nick": "user6474563937",
  //   "level": 1,
  //   "game_money": 0,
  //   "profile_image": "/img/user.svg",
  //   "login_type": "google",
  //   "affiliate_code": "abcde",
  //   "owner": false,
  //   "editState": false
  // }
});

const store = {
  subscribe: globalStore.subscribe,
  toggleItem: (item, value, alertText = "default", alertDanger = false) => {
    if (item === "alert") {
      globalStore.update(storeValues => {
        return { ...storeValues, [item]: value, alertText, alertDanger };
      });
    } else {
      globalStore.update(storeValues => {
        return { ...storeValues, [item]: value };
      });
    }
  }
};

export default store;
