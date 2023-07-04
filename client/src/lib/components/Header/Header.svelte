<script>
  import BetSlip from "$lib/components/BetSlip/BetSlip.svelte";
  import globalStore from "../../../stores/globalStore";
  import { page } from "$app/stores";
  import DarkModeButtons from "../DarkModeButtons.svelte";
  import LoginHeader from "./HeaderLogin.svelte";
  import LoggedinHeader from "./HeaderLoggedin.svelte";
  import axios from 'axios';
  import Toast from 'svelte-toast'

  const toastOptions = {
    duration: 1500,
    position: 'top-right',
    dismissible: true,
  };
  const toast = new Toast(toastOptions);

  const GF_API_KEY = import.meta.env.VITE_GF_API_KEY;
  const GF_AFFILIATE_CODE = import.meta.env.VITE_GF_AFFILIATE_CODE;
  const SEVER_URL = import.meta.env.VITE_SEVER_URL;
  const SEVER_PORT = import.meta.env.VITE_SEVER_PORT;

  let isLoggedIn = true;
  $: path = $page.url.pathname;
  let signUpUserData = {
    'email': '',
    'authCode': '',
    'promoCode': '',
    'password': '',
  }

  $: {
    if($globalStore.registerModalOpen == 0)
      signUpUserData = {
        'email': '',
        'authCode': '',
        'promoCode': '',
        'password': '',
      };
  }

  if($globalStore.registerModalOpen == 0) {
    signUpUserData = {
      'email': '',
      'authCode': '',
      'promoCode': '',
      'password': '',
    };
  }

  function handleSignUp(event) {
    event.preventDefault();
    if($globalStore.registerModalOpen == 1) {
      axios.post(SEVER_URL + ':' + SEVER_PORT + '/api/account/sign-up/email', {
        email: signUpUserData.email
      }, {
        headers: {
          'GF-API-KEY': GF_API_KEY,
          'GF-AFFILIATE-CODE': GF_AFFILIATE_CODE,
          'Content-Type': 'application/json'
        }
      }).then(res => {
        if(res.data.code == 1001) 
          globalStore.toggleItem("registerModalOpen", 2);
        else toast.error(res.data.message)
      }).catch(err => toast.error('Bad Network Connection'))
    }
    else if($globalStore.registerModalOpen == 2) {
      axios.post(SEVER_URL + ':' + SEVER_PORT + '/api/account/sign-up', {
        email: signUpUserData.email,
        authCode: signUpUserData.authCode,
        promoCode: signUpUserData.promoCode,
        password: signUpUserData.password
      }, {
        headers: {
          'GF-API-KEY': GF_API_KEY,
          'GF-AFFILIATE-CODE': GF_AFFILIATE_CODE,
          'Content-Type': 'application/json'
        }
      }).then(res => {
        if(res.data.code == 1000) 
          globalStore.toggleItem("registerModalOpen", 3)
        else
          toast.error(res.data.message)
      }).catch(err => toast.error('Bad Network Connection'))
    }
    else {
      globalStore.toggleItem("registerModalOpen", 0)
    }
  }

</script>

<div class="topbar bg-color">
  <div class="row">
    <div class="col-md-5 col-2 align-self-center">
      <div class="main-menu">
        <ul>
          <li
            class="main-menu-item menu-item-casino gf-border-right-active"
            class:active={path === "/casino"}
          >
            <a href="/casino">
                <svg class="active-menu-icon"><use href="/img/symbols.svg?lang.svg#icon_Casino" /></svg>

                <svg><use href="/img/symbols.svg?lang.svg#icon_Casino_Dark"/></svg>

              <span>Casino</span>
            </a>
          </li>
          <li
            class="main-menu-item menu-item-sports gf-border-right-active"
            class:active={path === "/sports"}
          >
            <a href="/sports">

                <svg class="active-menu-icon"><use href="/img/symbols.svg?lang.svg#icon_Sports" /></svg>

                <svg><use href="/img/symbols.svg?lang.svg#icon_Sports_Dark"/></svg>

              <span>Sports</span>
            </a>
          </li>
        </ul>
      </div>

      <a href="/"><img class="mlogo" src="/img/Union.svg" /></a>
    </div>

    {#if isLoggedIn}
      <LoggedinHeader/>
    {:else}
      <LoginHeader/>
    {/if}
  </div>
  <div class="usershow" class:open={$globalStore.profileModalOpen}>
    <div class="overlay" on:click={ () => globalStore.toggleItem("profileModalOpen", false) }></div>
    <div class="userprofile">
      <div class="row">
        <div class="col-md-3 col-3">
          <img class="user-image" src="/img/user.svg" />
        </div>
        <div class="col-md-7 col-7 pe-0 ps-0">
          <h6 class="text-white mb-0">Stacey Miller</h6>
          <p class="mb-0 mt-0">
            <img style="margin-bottom: 4px;"  src="/img/Group-1583.svg" /> level 31
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
        <li class="active">
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
      </ul>
      <div class="border mb-3 mt-3" />
      <ul class="menu">
        <li class="logout">
          <a href="#"><img class="me-3" src="/img/logout.svg" /> Logout</a>
        </li>
      </ul>
    </div>
  </div>
</div>

<BetSlip />

<div class="user-information" class:open={$globalStore.userModalOpen}>
  <div class="overlay" on:click={ () => globalStore.toggleItem("userModalOpen", false) } ></div>
  <div class="userinformation">
    <div class="row">
      <div class="col-md-8 col-7 align-self-center">
        <h4 class="mb-0">User Information</h4>
      </div>
      <div class="col-md-4 col-5 text-end">
        <img
          id="closeduser"
          class="mobilenone cancel-light"
          src="/img/close.svg"
          on:click={() => {
            globalStore.toggleItem("userModalOpen", false);
          }}
        />
        <img
          class="cancel-dark"
          style="display:none"
          src="/img/close.svg"
          on:click={() => {
            globalStore.toggleItem("userModalOpen", false);
          }}
        />

        <button id="mcloseduser" class="btn btn-back desknone float-end">
          <img class="me-1" src="/img/Arrow-Right-1.svg" /> Back
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 text-center">
        <div class="position-relative">
          <div class="userback">
            <img class="userimg" src="/img/user-img.svg" />
          </div>
          <img class="icon1" src="/img/Group-1585.svg" />
        </div>
        <h6 class="text-white mb-2 mt-3">Stacey Miller</h6>
        <p class="mt-0">User Id: @toles9388944</p>
      </div>
    </div>
    <div class="heading mt-3">
      <h5 class="statistic-widget-title">
        <svg><use href="/img/symbols.svg?lang.svg#icon_statistics" /></svg> Statistics
      </h5>
    </div>
    <div class="row">
      <div class="col-md-4 col-4 paddinglr0">
        <div class="wins text-center bg2 box-style">
          <img class="mb-2" src="/img/Icon_medal.svg" />
          <p class="mb-2">Total wins</p>
          <h6>23432</h6>
        </div>
      </div>
      <div class="col-md-4 col-4 paddinglr0">
        <div class="wins text-center bg2 box-style">
          <img class="mb-2" src="/img/Icon_casino-roulette.svg" />
          <p class="mb-2">Total Bets</p>
          <h6>15</h6>
        </div>
      </div>
      <div class="col-md-4 col-4 paddinglr0">
        <div class="wins text-center bg2 box-style">
          <img class="mb-2" src="/img/Icon_casino-chips.svg" />
          <p class="mb-2">Total Wagered</p>
          <h6>$ 2,750</h6>
        </div>
      </div>
    </div>
    <div class="heading mt-4">
      <h5 class="statistic-widget-title">
        <svg><use href="/img/symbols.svg?lang.svg#icon_favorite" /></svg> Top 3 Favorite
        Games
      </h5>
    </div>
    <div class="row">
      <div class="col-md-4 col-4 paddinglr0">
        <img class="w-100" src="/img/Rectangle-41.svg" />
      </div>
      <div class="col-md-4 col-4 paddinglr0">
        <img class="w-100" src="/img/Rectangle-40.svg" />
      </div>
      <div class="col-md-4 col-4 paddinglr0">
        <img class="w-100" src="/img/Rectangle-38.svg" />
      </div>
    </div>
  </div>
</div>


<div class="login-box" class:open={$globalStore.loginModalOpen}>
  <div class="overlay" on:click={ () => globalStore.toggleItem("loginModalOpen", false) }></div>
  <div class="login">
    <div class="login-banner">
      <img src="/img/Logo-white.svg" />
      <div class="p-4 mt-4">
        <h2>Made for professional Gamblers</h2>
        <p class="mb-1">
          Lorem ipsum dolor sit amet consectetur. eget tortor egestas.
        </p>
        <img src="/img/Frame-37252.svg" />
      </div>
    </div>
    <div class="login_box">
      <div class="row border-bottom_m pb-40">
        <div class="col-10">
          <img class="desknone" src="/img/logo.svg" />
        </div>
        <div class="col-2">
          <img
            id="closed"
            src="/img/close.svg"
            on:click={() => {
              globalStore.toggleItem("loginModalOpen", false);
            }}
          />
        </div>
      </div>

      <h2 class="mt_30">Log in</h2>
      <p class="mb-4">Welcome back. Please enter your details</p>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label"
            >Email address</label
          >
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <p class="forgot text-end"><a href="#" on:click={() => {
          globalStore.toggleItem(
            "forgotModalOpen",
            1
          );

          globalStore.toggleItem(
            "loginModalOpen",
            false
          );
        }}>Forgot password?</a></p>
        <button type="submit" class="btn btn-primary w-100 mt30">
          Submit
        </button>
      </form>
      <div class="text-center">
        <h6 class="signup_1">
          Don’t have an account? <a href="#" on:click={() => {
            globalStore.toggleItem(
              "registerModalOpen",
              1
            );

            globalStore.toggleItem(
              "loginModalOpen",
              false
            );
          }}>Sign up</a>
        </h6>
      </div>
      <div class="position-relative mt-40">
        <div class="border" />
        <h5 class="text-center">Or continue with</h5>
      </div>
      <div class="text-center">
        <ul class="login-socials">
          <li><img src="/img/google-plus.svg" /></li>
          <li><img src="/img/apple.svg" /></li>
          <li><img src="/img/facebook.svg" /></li>
        </ul>
      </div>
    </div>
  </div>
</div>
<div class="sign-box"  class:open={$globalStore.registerModalOpen}>
  <div class="overlay" on:click={ () => globalStore.toggleItem("registerModalOpen", 0) }></div>
  <div class="signup">
    <div class="signup-banner">
      <img src="/img/Logo-white.svg" />
      <div class="p-4 mt-4">
        <h2>Made for professional Gamblers</h2>
        <p class="mb-1">
          Lorem ipsum dolor sit amet consectetur. eget tortor egestas.
        </p>
        <img src="/img/Frame-37252.svg" />
      </div>
    </div>
    <div class="signup-box">
      <div class="row border-bottom_m pb-40">
        <div class="col-10">
          <img class="desknone" src="/img/logo.svg" />
        </div>
        <div class="col-2"><img id="closeds" src="/img/close.svg" on:click={() => {
          globalStore.toggleItem("registerModalOpen", 0);
        }} /></div>
      </div>
      <h2 class="mt_30">Hey, hello 👋</h2>
      <form on:submit="{handleSignUp}">
        {#if $globalStore.registerModalOpen == 1}
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label"
            >Email address</label
          >
          <input
            type="email"
            class="form-control"
            aria-describedby="emailHelp"
            name="email"
            bind:value="{signUpUserData.email}"
            required
          />
        </div>
        {:else if $globalStore.registerModalOpen == 2}
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label"
            >Auth code</label
          >
          <input
            type="text"
            class="form-control"
            aria-describedby="emailHelp"
            maxlength="5"
            bind:value="{signUpUserData.authCode}"
            required
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            bind:value="{signUpUserData.password}"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label"
            >Promotion code (optional)</label
          >
          <input
            type="text"
            class="form-control"
            aria-describedby="emailHelp"
            bind:value="{signUpUserData.promoCode}"
          />
        </div>
        {:else}
        <p class="signin">Successfully Changed! <a href="#" on:click={() => {
          globalStore.toggleItem(
            "registerModalOpen",
            0
          );

          globalStore.toggleItem(
            "loginModalOpen",
            true
          );
        }}>Sign in</a></p>
        
        {/if}
        <button type="submit" class="btn btn-primary w-100 mt30">
          {$globalStore.registerModalOpen == 1 ? 'Send' : $globalStore.registerModalOpen == 2 ? 'Verify': 'Submit'}
        </button>
      </form>
      <div class="text-center">
        {#if $globalStore.registerModalOpen == 1}
        <h6 class="signup_1">
          Already have an account? <a href="#" on:click={() => {
            globalStore.toggleItem(
              "registerModalOpen",
              0
            );

            globalStore.toggleItem(
              "loginModalOpen",
              true
            );
          }}>Sign in</a>
        </h6>
        {/if}
      </div>
      <div class="position-relative mt-40">
        <div class="border" />
        <h5 class="text-center">Or continue with</h5>
      </div>
      <div class="text-center">
        <ul>
          <li><img src="/img/google-plus.svg" /></li>
          <li><img src="/img/apple.svg" /></li>
          <li><img src="/img/facebook.svg" /></li>
        </ul>
      </div>
    </div>
  </div>
</div>
<div class="forgot-box" class:open={$globalStore.forgotModalOpen}>
  <div class="overlay" on:click={ () => globalStore.toggleItem("forgotModalOpen", 0) }></div>
  <div class="forgot">
    <div class="forgot-banner">
      <img src="/img/Logo-white.svg" />
      <div class="p-4 mt-4">
        <h2>Made for professional Gamblers</h2>
        <p class="mb-1">
          Lorem ipsum dolor sit amet consectetur. eget tortor egestas.
        </p>
        <img src="/img/Frame-37252.svg" />
      </div>
    </div>
    <div class="forgot_box">
      <div class="row border-bottom_m pb-40">
        <div class="col-10">
          <img class="desknone" src="/img/logo.svg" />
        </div>
        <div class="col-2">
          <img
            id="closed"
            src="/img/close.svg"
            on:click={() => {
              globalStore.toggleItem("forgotModalOpen", 0);
            }}
          />
        </div>
      </div>

      <h2 class="mt_30">Forgot password</h2>
      <p class="mb-4">Enter your email address to reset your password</p>
      <form>

        {#if $globalStore.forgotModalOpen == 1}
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label"
            >Email address</label
          >
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        {:else if $globalStore.forgotModalOpen == 2}
        <div class="mb-3">
          <label for="exampleInputCode1" class="form-label">5 Verification Code</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputCode1"
            minlength="5"
            maxlength="5"
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>

        {:else}

        <p class="signin">Successfully Changed! <a href="#" on:click={() => {
          globalStore.toggleItem(
            "forgotModalOpen",
            0
          );

          globalStore.toggleItem(
            "loginModalOpen",
            true
          );
        }}>Sign in</a></p>

        {/if}
        <button type="submit" class="btn btn-primary w-100 mt30" on:click={() => {
          let val = $globalStore.forgotModalOpen;
          globalStore.toggleItem("forgotModalOpen", val+=1);
        }}>
          {$globalStore.forgotModalOpen == 1 ? 'Send' : $globalStore.forgotModalOpen == 2 ? 'Verify': 'Submit'}
        </button>
      </form>
      
    </div>
  </div>
</div>