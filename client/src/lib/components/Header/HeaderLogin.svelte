<script>
  import globalStore from "../../../stores/globalStore";

  const toggleChat = () => {
    if(window.document.body.classList.contains('chat-closed')) {
        window.document.body.classList.remove('chat-closed');
        window.document.body.classList.add('chat-opened');
    } else {
        window.document.body.classList.add('chat-closed');
        window.document.body.classList.remove('chat-opened');
    }
  }

</script>

<div class="col-md-7 col-10 float-end">
  <div class="display-flex">
    <button
      id="signin"
      class="btn signin me-4"
      class:active={$globalStore.loginModalOpen}
      on:click={() => {
        globalStore.toggleItem(
          "loginModalOpen",
          !$globalStore.loginModalOpen
        );
      }}
    >
      Sign in
    </button>
    <button
      id="signup"
      class="btn signin me-4 mr-0"
      class:active={$globalStore.registerModalOpen}
      on:click={() => {
        globalStore.toggleItem(
          "registerModalOpen",
          1
        );
      }}>Sign Up</button
    >
  </div>
</div>