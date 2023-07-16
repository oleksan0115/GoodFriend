<script>
  import BetSlip from "$lib/components/BetSlip/BetSlip.svelte";
  import globalStore from "../../../stores/globalStore";
  import { page } from "$app/stores";
  import DarkModeButtons from "../DarkModeButtons.svelte";
  import LoginHeader from "./HeaderLogin.svelte";
  import LoggedinHeader from "./HeaderLoggedin.svelte";
  
  import { signOut } from "../../../apis/account/Signout";

  $: isLoggedIn = $globalStore.userDetail;
  $: path = $page.url.pathname;

  async function handleSignOut(event) {
    const res = await signOut();
    if (res.success) {
      toast.success("Sign out successfully 🎉");
      globalStore.toggleItem("userDetail", null);
      globalStore.toggleItem("profileModalOpen", false);
    } else {
      toast.error(res.data.message);
    }
  }

</script>

<div class="topbar bg-color">

  <div class="row">
    <div class="telegram-login-widget"></div>
    <div class="col-md-5 col-2 align-self-center">
      <div class="main-menu">
        <ul>
          <li
            class="main-menu-item menu-item-casino gf-border-right-active"
            class:active={path === "/casino"}
          >
            <a href="/casino">
              <svg class="active-menu-icon"
                ><use href="/img/symbols.svg?lang.svg#icon_Casino" /></svg
              >

              <svg
                ><use href="/img/symbols.svg?lang.svg#icon_Casino_Dark" /></svg
              >

              <span>Casino</span>
            </a>
          </li>
          <li
            class="main-menu-item menu-item-sports gf-border-right-active"
            class:active={path === "/sports"}
          >
            <a href="/sports">
              <svg class="active-menu-icon"
                ><use href="/img/symbols.svg?lang.svg#icon_Sports" /></svg
              >

              <svg
                ><use href="/img/symbols.svg?lang.svg#icon_Sports_Dark" /></svg
              >

              <span>Sports</span>
            </a>
          </li>
        </ul>
      </div>

      <a href="/"><img class="mlogo" src="/img/Union.svg" /></a>
    </div>

    {#if isLoggedIn}
      <LoggedinHeader />
    {:else}
      <LoginHeader />
    {/if}
  </div>

  {#if $globalStore.userDetail}
  <div class="usershow" class:open={$globalStore.profileModalOpen}>
    <div
      class="overlay"
      on:click={() => globalStore.toggleItem("profileModalOpen", false)}
    />
    <div class="userprofile">
      <div class="row">
        <div class="col-md-3 col-3">
          <img class="user-image" src={$globalStore.userDetail.profile_image} />
        </div>
        <div class="col-md-7 col-7 pe-0 ps-0">
          <h6 class="text-white mb-0">
            {$globalStore.userDetail ? $globalStore.userDetail.nick : ""}
          </h6>
          <p class="mb-0 mt-0">
            <img style="margin-bottom: 4px;" src="/img/Group-1583.svg" /> level {$globalStore.userDetail
              ? $globalStore.userDetail.level
              : "0"}
          </p>
        </div>
        <div class="col-md-2 col-2">
          <div
            class="closed float-end"
            on:click={() => {
              globalStore.toggleItem("profileModalOpen", false);
            }}
          >
            <img class="cancel-light" src="/img/Cancel-1.svg" />
            <img
              class="cancel-dark"
              style="display:none"
              src="/img/cancel-dark.svg"
            />
          </div>
        </div>
      </div>
      <h4 class="mt-4">Theme</h4>
      <div class="theme-button">
        <DarkModeButtons />
      </div>
      <div class="border mt-3 mb-4" />
      <h4>My Account</h4>
      <ul class="menu">
        <li>
          <a id="setting" href="#">
            <svg
              ><use href="/img/symbols.svg?lang.svg#icon_modal_settings" /></svg
            >
            Settings</a
          >
        </li>
        <li>
          <a href="#"
            ><svg
              ><use href="/img/symbols.svg?lang.svg#icon_modal_deposit" /></svg
            > Deposit</a
          >
        </li>
        <li>
          <a href="#"
            ><svg
              ><use href="/img/symbols.svg?lang.svg#icon_modal_withdraw" /></svg
            > Withdraw</a
          >
        </li>
        <li>
          <a href="#"
            ><svg
              ><use href="/img/symbols.svg?lang.svg#icon_modal_deposit" /></svg
            > Transactions</a
          >
        </li>
        <li>
          <a href="#" on:click={() => {
            const userInfo = $globalStore.userDetail;
            userInfo.owner = true;
            userInfo.editState = false;
            globalStore.toggleItem("userInfo", userInfo);
            globalStore.toggleItem("profileModalOpen", false)
          }}
            ><svg
              ><use href="/img/symbols.svg?lang.svg#icon_modal_deposit" /></svg
            > My profile</a
          >
        </li>
      </ul>
      <div class="border mb-3 mt-3" />
      <ul class="menu">
        <li class="logout" on:click={handleSignOut}>
          <a href="#"><img class="me-3" src="/img/logout.svg" /> Logout</a>
        </li>
      </ul>
    </div>
  </div>
  {/if}
</div>

<BetSlip />




