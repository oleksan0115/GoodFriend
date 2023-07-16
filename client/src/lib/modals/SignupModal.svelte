<script>
	import toast from '../components/Toast';
	import { OAuthProvider } from "firebase/auth";
	import globalStore from "../../stores/globalStore";
	import { signUpEmail } from "../../apis/account/SignupEmail";
	import { signIn } from "../../apis/account/Signin";
	import { signUp } from "../../apis/account/Signup";
	import firebase from '../../apis/account/FirebaseConfig';
	import { signupSocial } from "../../apis/account/SignupSocial";
	import { getAccessToken } from "../../apis/account/GetAccessToken";
  import { getRefreshToken } from "../../apis/account/GetRefreshToken";

	let signUpUserData = {
    email: "",
    authCode: "",
    promoCode: "",
    password: "",
  };

	$: {
		if ($globalStore.registerModalOpen == 0)
      signUpUserData = {
        email: "",
        authCode: "",
        promoCode: "",
        password: "",
      };
	}

	async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    await provider.addScope("email");
    const data = await firebase.auth().signInWithPopup(provider);
    const userInfo = data.additionalUserInfo.profile;
    const res = await signupSocial({
      email: 'g_' + userInfo.id,
      password: userInfo.id,
      loginType: 'google'
    })
    try {
      const res1 = await signIn({
        email: 'g_' + userInfo.id,
        password: userInfo.id,
      });

      if (res1.success) {
        toast.success(res1.data.message);
        globalStore.toggleItem("registerModalOpen", 0);
        handleTokens();
      } else {
        toast.error(res1.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  }

	async function signInWithFacebook() {
    const provider = new firebase.auth.FacebookAuthProvider();
    await provider.addScope("email");
    const data = await firebase.auth().signInWithPopup(provider);
    const userInfo = data.additionalUserInfo.profile;
    const res = await signupSocial({
      email: 'f_' + userInfo.id,
      password: userInfo.id,
      loginType: 'facebook'
    })
    try {
      const res1 = await signIn({
        email: 'f_' + userInfo.id,
        password: userInfo.id,
      });

      if (res1.success) {
        toast.success(res1.data.message);
        globalStore.toggleItem("registerModalOpen", 0);
        handleTokens();
      } else {
        toast.error(res1.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function signInWithApple() {
    const provider = new OAuthProvider('apple.com');
    try {
      const data = await firebase.auth().signInWithPopup(provider);
      // console.log(data.additionalUserInfo.profile);
      // User signed in successfully
    } catch (error) {
      console.error(error);
    }
  }

	async function signInWithTelegram(userInfo) {
    const res = await signupSocial({
      email: 't_' + userInfo.id,
      password: userInfo.id,
      loginType: 'telegram'
    })
    try {
      const res1 = await signIn({
        email: 't_' + userInfo.id,
        password: userInfo.id,
      });

      if (res1.success) {
        toast.success(res1.data.message);
        globalStore.toggleItem("registerModalOpen", 0);
        handleTokens();
      } else {
        toast.error(res1.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  }

	async function handleSignUp(event) {
    event.preventDefault();
    if ($globalStore.registerModalOpen == 1) {
      document.getElementById('submit_signup').disabled = true
      const res = await signUpEmail({
        email: signUpUserData.email,
      });
      document.getElementById('submit_signup').disabled = false
      if (res.success) {
        toast.success("Sent a verification code to your email.");
        globalStore.toggleItem("registerModalOpen", 2);
      } else toast.error(res.data.message);
    } else if ($globalStore.registerModalOpen == 2) {
      const res = await signUp({
        email: signUpUserData.email,
        authCode: signUpUserData.authCode,
        promoCode: signUpUserData.promoCode,
        password: signUpUserData.password,
      });
      if (res.success) {
        toast.success("Sign up successfully 🎉");
        globalStore.toggleItem("registerModalOpen", 3);
      } else toast.error(res.data.message);
    } else {
      globalStore.toggleItem("registerModalOpen", 0);
    }
  }

  export async function handleTokens() {
    const res = await getAccessToken();
    if (res.success) {
      globalStore.toggleItem("userDetail", res.data);
    } else if (4001) {
      const res1 = await getRefreshToken();
      if (res1.success) {
        const res2 = await getAccessToken();
        if (res2.success) globalStore.toggleItem("userDetail", res2.data);
      } else {
        globalStore.toggleItem("userDetail", null);
      }
    } else {
      globalStore.toggleItem("userDetail", null);
      toast.error("Bad Network Connection");
    }
  }
</script>

<div class="sign-box" class:open={$globalStore.registerModalOpen}>
	<div
		class="overlay"
		on:click={() => globalStore.toggleItem("registerModalOpen", 0)}
	/>
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
				<div class="col-2">
					<img
						id="closeds"
						src="/img/close.svg"
						on:click={() => {
							globalStore.toggleItem("registerModalOpen", 0);
						}}
					/>
				</div>
			</div>
			<h2 class="mt_30">Hey, hello 👋</h2>
			<form on:submit={handleSignUp}>
				{#if $globalStore.registerModalOpen == 1}
					<div class="mb-3">
						<label class="form-label"
							>Email address</label
						>
						<input
							type="email"
							class="form-control"
							aria-describedby="emailHelp"
							name="email"
							bind:value={signUpUserData.email}
							required
						/>
					</div>
				{:else if $globalStore.registerModalOpen == 2}
					<div class="mb-3">
						<label class="form-label">Auth code</label>
						<input
							type="text"
							class="form-control"
							aria-describedby="emailHelp"
							maxlength="5"
							bind:value={signUpUserData.authCode}
							required
						/>
					</div>
					<div class="mb-3">
						<label class="form-label"
							>Password</label
						>
						<input
							type="password"
							class="form-control"
							bind:value={signUpUserData.password}
							required
						/>
					</div>
					<div class="mb-3">
						<label class="form-label"
							>Promotion code (optional)</label
						>
						<input
							type="text"
							class="form-control"
							aria-describedby="emailHelp"
							bind:value={signUpUserData.promoCode}
						/>
					</div>
				{:else}
					<p class="signin">
						Successfully Changed! <a
							href="#"
							on:click={() => {
								globalStore.toggleItem("registerModalOpen", 0);

								globalStore.toggleItem("loginModalOpen", true);
							}}>Sign in</a
						>
					</p>
				{/if}
				<button type="submit" class="btn btn-primary w-100 mt30" id="submit_signup">
					{$globalStore.registerModalOpen == 1
						? "Send"
						: $globalStore.registerModalOpen == 2
						? "Verify"
						: "Submit"}
				</button>
			</form>
			<div class="text-center">
				{#if $globalStore.registerModalOpen == 1}
					<h6 class="signup_1">
						Already have an account? <a
							href="#"
							on:click={() => {
								globalStore.toggleItem("registerModalOpen", 0);

								globalStore.toggleItem("loginModalOpen", true);
							}}>Sign in</a
						>
					</h6>
				{/if}
			</div>
			<div class="position-relative mt-40">
				<div class="border" />
				<h5 class="text-center">Or continue with</h5>
			</div>
			<div class="text-center">
				<ul class="login-socials">
					<li>
						<img src="/img/google-plus.svg" on:click="{signInWithGoogle}" style="cursor: pointer"/>
					</li>
					<li><img src="/img/apple.svg" style="cursor: pointer"/></li>
					<li>
						<img src="/img/facebook.svg" on:click="{signInWithFacebook}" style="cursor: pointer"/>
					</li>

					<li class="cursor-pointer" style="position: relative;">
						<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect width="42" height="42" rx="21" fill="#242531"/>
							<g clip-path="url(#clip0_417_38742)">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M26.6186 14.967C26.8122 14.8855 27.0242 14.8574 27.2324 14.8856C27.4406 14.9139 27.6374 14.9974 27.8024 15.1274C27.9674 15.2575 28.0945 15.4295 28.1704 15.6254C28.2464 15.8212 28.2685 16.0339 28.2344 16.2412L26.4571 27.0216C26.2847 28.0615 25.1438 28.6578 24.1901 28.1399C23.3924 27.7065 22.2075 27.0389 21.1418 26.3422C20.6089 25.9935 18.9766 24.8768 19.1772 24.0822C19.3496 23.4028 22.0923 20.8498 23.6596 19.3319C24.2747 18.7355 23.9942 18.3915 23.2678 18.9401C21.4631 20.302 18.5676 22.3731 17.61 22.9562C16.7652 23.4702 16.3248 23.558 15.7982 23.4702C14.8375 23.3104 13.9465 23.0627 13.2193 22.761C12.2366 22.3535 12.2844 21.0026 13.2185 20.6092L26.6186 14.967Z" fill="white"/>
							</g>
							<defs>
							<clipPath id="clip0_417_38742">
							<rect width="24" height="24" fill="white" transform="translate(8 9)"/>
							</clipPath>
							</defs>
						</svg>
						<div id="telegram-login" style="width: 40px; position: absolute; top: 0px; z-index: 1; opacity: 0;"></div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>