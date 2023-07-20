<script>
  import globalStore from "../../../stores/globalStore";
  import BetSlipItem from "./BetSlipItem.svelte";

  let activeParentTabValue = false;
  let activeSubTabValue = false;
</script>

<div class="bet-slip" class:open={$globalStore.betSlipOpen}>
  <div class="bet-slip-wrapper">
    <div class="bet-slip-header">
      <div class="bet-slip-tabs">
        <div
          class="tab-item active"
          class:active={!activeParentTabValue}
          on:click={() => (activeParentTabValue = false)}
        >
          Bet Slip
        </div>
        <div
          class="tab-item"
          class:active={activeParentTabValue}
          on:click={() => (activeParentTabValue = true)}
        >
          My Bets
        </div>
      </div>
      <span
        class="close-bet-slip"
        on:click={() => {
          globalStore.toggleItem("betSlipOpen", false);
        }}
      >
        <svg><use href="/img/symbols.svg?lang.svg#icon_modal_close" /></svg>
      </span>
    </div>
    {#if !activeParentTabValue}
      <div class="bet-slip-content">
        <div class="odds-tabs">
          <div
            class="odds-tab-item active"
            class:active={!activeSubTabValue}
            on:click={() => (activeSubTabValue = false)}
          >
            Single1
          </div>
          <div
            class="odds-tab-item"
            class:active={activeSubTabValue}
            on:click={() => (activeSubTabValue = true)}
          >
            Multiples1
          </div>
        </div>

        {#if !activeParentTabValue && !activeSubTabValue}
          <div class="odds-tab-content">
            <!--slip-item-->
            <BetSlipItem />
            <!--end-slip-item-->

            <!--slip-item-->
            <BetSlipItem />
            <!--end-slip-item-->

            <!--slip-item-->
            <BetSlipItem />
            <!--end-slip-item-->
          </div>
          <div class="slip-total-info">
            <div class="total-bet d-flex justify-content-between">
              <span>Total Bet</span>
              <span>0.0001 Ƀ</span>
            </div>
            <div class="possible-win d-flex justify-content-between">
              <span>Possible Win</span>
              <span>0.0024 Ƀ</span>
            </div>
            <button class="place-bet">PLACE BET</button>
            <div class="slip-remove-all">
              <svg
                ><use
                  href="/img/symbols.svg?lang.svg#icon_slip_remove_all"
                /></svg
              >
              <span>Remove All</span>
            </div>
          </div>
        {:else if !activeParentTabValue && activeSubTabValue}
          <div class="odds-tab-content">
            <BetSlipItem />
          </div>
          <div class="slip-total-info">
            <div class="total-bet d-flex justify-content-between">
              <span>Total Bet</span>
              <span>0.0001 Ƀ</span>
            </div>
            <div class="possible-win d-flex justify-content-between">
              <span>Possible Win</span>
              <span>0.0024 Ƀ</span>
            </div>
            <button class="place-bet">PLACE BET</button>
            <div class="slip-remove-all">
              <svg
                ><use
                  href="/img/symbols.svg?lang.svg#icon_slip_remove_all"
                /></svg
              >
              <span>Remove All</span>
            </div>
          </div>
        {/if}
      </div>
    {:else if activeParentTabValue}
      <div class="bet-slip-content">
        <div class="odds-tabs">
          <div
            class="odds-tab-item active"
            class:active={!activeSubTabValue}
            on:click={() => (activeSubTabValue = false)}
          >
            Single2
          </div>
          <div
            class="odds-tab-item"
            class:active={activeSubTabValue}
            on:click={() => (activeSubTabValue = true)}
          >
            Multiples2
          </div>
        </div>

        {#if activeParentTabValue && !activeSubTabValue}
          <div class="odds-tab-content">
            <BetSlipItem />
          </div>
          <div class="slip-total-info">
            <div class="total-bet d-flex justify-content-between">
              <span>Total Bet</span>
              <span>0.0001 Ƀ</span>
            </div>
            <div class="possible-win d-flex justify-content-between">
              <span>Possible Win</span>
              <span>0.0024 Ƀ</span>
            </div>
            <button class="place-bet">PLACE BET</button>
            <div class="slip-remove-all">
              <svg
                ><use
                  href="/img/symbols.svg?lang.svg#icon_slip_remove_all"
                /></svg
              >
              <span>Remove All</span>
            </div>
          </div>
        {:else if activeParentTabValue && activeSubTabValue}
          <div class="odds-tab-content">
            <BetSlipItem />
          </div>
          <div class="slip-total-info">
            <div class="total-bet d-flex justify-content-between">
              <span>Total Bet</span>
              <span>0.0001 Ƀ</span>
            </div>
            <div class="possible-win d-flex justify-content-between">
              <span>Possible Win</span>
              <span>0.0024 Ƀ</span>
            </div>
            <button class="place-bet">PLACE BET</button>
            <div class="slip-remove-all">
              <svg
                ><use
                  href="/img/symbols.svg?lang.svg#icon_slip_remove_all"
                /></svg
              >
              <span>Remove All</span>
            </div>
          </div>
        {/if}
      </div>
    {/if}
  </div>
</div>
