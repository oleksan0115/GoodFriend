<script>
  import BetSlip from "$lib/components/BetSlip/BetSlip.svelte";
  import globalStore from "../../../stores/globalStore";
  import { page } from "$app/stores";
  import LoginHeader from "./HeaderLogin.svelte";
  import LoggedinHeader from "./HeaderLoggedin.svelte";
  import AccountModal from "../../modals/AccountModal.svelte";

  $: isLoggedIn = $globalStore.userDetail;
  $: path = $page.url.pathname;
</script>

<div class="topbar py-15 bg-color">
  <div class="row">
    <div class="telegram-login-widget" />
    <div class="col-md-5 col-2 align-self-center">
      <div class="main-menu d-flex">
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
    <LoggedinHeader />
    <!--     {#if isLoggedIn}
      <LoggedinHeader />
    {:else}
      <LoginHeader />
    {/if} -->
  </div>

  {#if $globalStore.userDetail}
    <AccountModal />
  {/if}
</div>

<BetSlip />
