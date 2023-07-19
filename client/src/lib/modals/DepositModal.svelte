<script>
	import { onMount } from "svelte";
	import toast from '../components/Toast';
  import Select from 'svelte-select';
	import globalStore from "../../stores/globalStore";

	onMount(async () => {
    
  });

  let currency = "KRW";

	let items = [
    { value: 'KRW', label: 'KRW', img: "/img/Flag_KO.svg"},
    { value: 'USD', label: 'USD', img: "/img/Bank_Transfer_1.svg"},
    { value: 'AUD', label: 'AUD', img: "/img/Flag_KO.svg"},
  ];

  function handleCurrency(e) {
    document.getElementById("img_current").setAttribute('src', e.detail.img)
  }

  function handleMethod(e) {
    document.getElementById("img_method").setAttribute('src', e.detail.img)
  }

</script>

<div class="user-information" class:open={$globalStore.depositModal}>
  <div
    class="overlay"
    on:click={() => globalStore.toggleItem("depositModal", false)}
  />
  <div class="userinformation">
    <div class="row">
      <div class="col-md-8 col-7 align-self-center">
        <h4 class="mb-0">Deposit Funds</h4> 
      </div>
      <div class="col-md-4 col-5 text-end">
        <img
          id="closeduser"
          class="mobilenone cancel-light"
          src="/img/close.svg"
          on:click={() => {
            globalStore.toggleItem("depositModal", false);
          }}
        />
        <img
          class="cancel-dark"
          style="display:none"
          src="/img/close.svg"
          on:click={() => {
            globalStore.toggleItem("userInfo", false);
          }}
        />
      </div>
    </div>

    <div class="heading mt-3">
      <h5 class="Fiat Currency">Fiat Currency</h5>
    </div>
    <div>
      <Select {items} 
        class="select-container"
        showChevron={true}
        clearable={false}
        value={"KRW"}
        focused={false}
        on:change={(e) => handleCurrency(e)}
      >
        <div slot="prepend"><img src="/img/Flag_KO.svg" class="me-4" id="img_current"/></div>
        <div class="select-item" slot="item" let:item let:index>
          <img src={item.img} class="me-4"/><span>{item.label}</span>
        </div>
      </Select>
    </div>
    <div class="heading mt-4">
      <h5 class="statistic-widget-title">Choose Payment method</h5>
    </div>
    <div>
      <Select {items} 
        class="select-container"
        showChevron={true}
        clearable={false}
        value={"KRW"}
        focused={false}
        on:change={(e) => handleMethod(e)}
      >
        <div slot="prepend"><img src="/img/Flag_KO.svg" class="me-4" id="img_method"/></div>
        <div class="select-item" slot="item" let:item let:index>
          <img src={item.img} class="me-4"/><span>{item.label}</span>
        </div>
      </Select>
    </div>
    <div class="heading mt-4">
      <h5 class="statistic-widget-title">Amount</h5>
    </div>
    <div class="input-group-field">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Amount" aria-label="Amount" aria-describedby="basic-addon2">
        <div class="input-group-append">
          <span class="input-group-text" id="basic-addon2">{currency}</span>
        </div>
      </div>
    </div>

    <div class="boxthird" style="display: flex; justify-content: space-between;">
      <button class="btn active">KRW 100</button>
      <button class="btn">KRW 100</button>
      <button class="btn active">KRW 100</button>
    </div>

    <div class="heading mt-4">
      <h5 class="statistic-widget-title">Account Holder Name</h5>
    </div>
    <div class="input_item">
      <input type="text"/>
    </div>
  </div>
</div>

<style>
  .input-group-text {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px
  }

  body:not(.light-mode) .input-group-field input {
    border-radius: 7px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border: 1px solid rgba(255, 255, 255, 0.16) !important;
    background: rgba(255, 255, 255, 0.03) !important;
    color: white;
    height: 40px;
  }

  body:not(.light-mode) .input-group-field .input-group-append span {
    border: 1px solid rgba(255, 255, 255, 0.16) !important;
    background: rgba(255, 255, 255, 0.03) !important;
    color: white;
    height: 40px;
  }

  body.light-mode .input-group-field input {
    border-radius: 7px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border: 1px solid rgba(0, 0, 0, 0.16) !important;
    background: rgba(0, 0, 0, 0.03) !important;
    color: black;
  }
</style>