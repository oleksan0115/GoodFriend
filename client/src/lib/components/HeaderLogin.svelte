<script>
  import globalStore from "../../stores/globalStore";

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
      class="btn signin active me-4"
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
      on:click={() => {
        globalStore.toggleItem(
          "registerModalOpen",
          !$globalStore.registerModalOpen
        );
      }}>Sign Up</button
    >
    <button id="deskchat" class="btn btn-color me-5 mobilenone"  on:click={toggleChat} on:click={() => {
      globalStore.toggleItem("chatOpen", !$globalStore.chatOpen);
    }}>
      <img src="/img/Chat.svg" />
    </button>
  </div>
</div>