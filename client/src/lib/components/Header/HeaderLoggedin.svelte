<script>
  import globalStore from "../../../stores/globalStore";

  const toggleChat = () => {
    if (window.document.body.classList.contains("chat-closed")) {
      window.document.body.classList.remove("chat-closed");
      window.document.body.classList.add("chat-opened");
    } else {
      window.document.body.classList.add("chat-closed");
      window.document.body.classList.remove("chat-opened");
    }
  };
</script>

<div class="col-md-7 col-10 float_right">
  <div class="display-flex">
    <button
      id="slip"
      class="btn btn-color color-text me-3 pb-2 mobilenone"
      on:click={() => {
        globalStore.toggleItem("betSlipOpen", !$globalStore.betSlipOpen);
      }}
    >
      Bet Slip
    </button>
    <div class="nav-balance" style="align-self:center;">
      <img src="/img/coin-1.svg" alt="" />
      <span class="nav-balance-amount"
        >$ {$globalStore.userDetail.game_money}</span
      >
      <span
        class="nav-balance-plus d-flex justify-content-center align-items-center position-absolute"
        ><img src="/img/add.svg" alt="" /></span
      >
    </div>
    <button
      id="mslip"
      class="btn btn-color color-text me-1 desknone"
      on:click={() => {
        globalStore.toggleItem("betSlipOpen", !$globalStore.betSlipOpen);
      }}
    >
      BS
    </button>

    <button
      id="deskchat"
      class="btn btn-color"
      on:click={toggleChat}
      on:click={() => {
        globalStore.toggleItem("chatOpen", !$globalStore.chatOpen);
      }}
    >
      <img src="/img/Chat.svg" />
    </button>

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      class="row user position-relative cursor-pointer"
      on:click={() => {
        globalStore.toggleItem("profileModalOpen", true);
      }}
    >
      <div class="col-md-4">
        <div class="mobileuser">
          <img
            width="40px"
            height="40px"
            src={$globalStore.userDetail.profile_image}
          />
          <img class="desknone icon_" src="/img/Group-1583.svg" />
        </div>
      </div>
      <div class="col-md-8 mobilenone">
        <span class="gradient-text gradient-text-light text-white mb-0"
          >{$globalStore.userDetail.nick}</span
        >
        <p class="mb-0 mt-0 gf-text-color-1">
          <img style="margin-bottom: 6px;" src="/img/Group-1583.svg" /> level {$globalStore
            .userDetail.level}
        </p>
      </div>
    </div>
  </div>
</div>

<style>
  .user::before {
    content: "";
    background-image: url(../img/Arrow-Down.svg);
    position: absolute;
    width: 24px;
    height: 24px;
    color: #fff;
    right: -12px;
    top: 14px;
    z-index: -1;
  }
</style>
