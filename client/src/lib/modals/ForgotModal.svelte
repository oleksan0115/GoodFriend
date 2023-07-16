<script>
	import toast from '../components/Toast';
	import globalStore from "../../stores/globalStore";
	import { forgotPasswordEmail } from "../../apis/account/ForgotPasswordEmail";
  import { forgotPasswordChange } from "../../apis/account/ForgotPasswordChange";

	let forgotUserData = {
    email: "",
    authCode: "",
    password: "",
  };

	$: {
		if ($globalStore.forgotModalOpen == 0)
			forgotUserData = {
				email: "",
				authCode: "",
				password: "",
			};
	}

	async function handleForgotPassword(event) {
    event.preventDefault();
    if ($globalStore.forgotModalOpen == 1) {
      document.getElementById('submit_forgot').disabled = true
      const res = await forgotPasswordEmail({
        email: forgotUserData.email,
      });
      document.getElementById('submit_forgot').disabled = false
      if (res.success) {
        toast.success("Sent a verification code to your email.");
        globalStore.toggleItem("forgotModalOpen", 2);
      } else {
        toast.error(res.data.message);
      }
    } else if ($globalStore.forgotModalOpen == 2) {
      const res = await forgotPasswordChange({
        email: forgotUserData.email,
        authCode: forgotUserData.authCode,
        password: forgotUserData.password,
      });
      if (res.success) {
        toast.success("Password change successfully");
        globalStore.toggleItem("forgotModalOpen", 3);
      } else toast.error(res.data.message);
    } else {
      globalStore.toggleItem("forgotModalOpen", 0);
    }
  }
</script>

<div class="forgot-box" class:open={$globalStore.forgotModalOpen}>
	<div
		class="overlay"
		on:click={() => globalStore.toggleItem("forgotModalOpen", 0)}
	/>
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
			<form on:submit={handleForgotPassword}>
				{#if $globalStore.forgotModalOpen == 1}
					<div class="mb-3">
						<label class="form-label"
							>Email address</label
						>
						<input
							type="email"
							class="form-control"
							aria-describedby="emailHelp"
							bind:value={forgotUserData.email}
							required
						/>
					</div>
				{:else if $globalStore.forgotModalOpen == 2}
					<div class="mb-3">
						<label for="exampleInputCode1" class="form-label"
							>5 Verification Code</label
						>
						<input
							type="text"
							class="form-control"
							minlength="5"
							maxlength="5"
							bind:value={forgotUserData.authCode}
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
							bind:value={forgotUserData.password}
							required
						/>
					</div>
				{:else}
					<p class="signin">
						Successfully Changed! <a
							href="#"
							on:click={() => {
								globalStore.toggleItem("forgotModalOpen", 0);

								globalStore.toggleItem("loginModalOpen", true);
							}}>Sign in</a
						>
					</p>
				{/if}
				<button type="submit" class="btn btn-primary w-100 mt30" id="submit_forgot">
					{$globalStore.forgotModalOpen == 1
						? "Send"
						: $globalStore.forgotModalOpen == 2
						? "Verify"
						: "Submit"}
				</button>
			</form>
		</div>
	</div>
</div>