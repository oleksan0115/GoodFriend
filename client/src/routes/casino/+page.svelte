<script>
  import { onMount } from "svelte";
  import Select from 'svelte-select';
  import {getCasinoList} from "../../apis/casino/GetCasinoList"
  import { getFilterMenu } from "../../apis/casino/GetFilterMenu"
  import FaqItem from "$lib/components/FaqItem.svelte";
  // import filter from "svelte-select/filter";
  import { tooltip } from 'svooltip';
  // import 'svooltip/styles.css';
  
  export let data
  const type = data.type ? [data.type] : ""
  let vendorList = [], typeList = [];
  let vendorSelectedList = [], typeSelectedList = [];
  onMount(async () => {
    const res = await getFilterMenu();
    vendorList = res.vendor;
    typeList = res.type;
  })

  let list = []
  let totalNumber = 0
  let currentLimit = 0
  let page = 0
  let searchKey = "";

  const search = async () => {
    page = 0;
    currentLimit = 0;
    const res = await getCasinoList({
      title: searchKey,
      vendor: vendorSelectedList,
      type: typeSelectedList,
      page: page
    })
    totalNumber = res.totalNumber
    list = res.list
    currentLimit = list.length
  }
  
  const moreLoad = async () => {
    page++
    const res = await getCasinoList({
      title: searchKey,
      vendor: vendorSelectedList,
      type: type,
      page: page
    })
    currentLimit += res.list.length
    list = [...list, ...res.list]
  }

  const load = async () => {
    const data = await getCasinoList({
      title: "",
      vendor: [],
      type: type,
      page: 0
    })
    totalNumber = data.totalNumber
    list = data.list
    currentLimit = list.length
    return data
  }

  const selectVendor = (e, item) => {
    vendorSelectedList = e.target.checked ? [...vendorSelectedList, item.name] : vendorSelectedList.filter(it => it !== item.name);
    search();
  }

  const selectType = (e, item) => {
    typeSelectedList = e.target.checked ? [...typeSelectedList, item.name] : typeSelectedList.filter(it => it !== item.name);
    search();
  }
</script>

<div class="container">
  <FaqItem>
    <h2 slot="head">  <form action="">
      <div class="input-group main-search-bar">
        <input
          type="search"
          bind:value={searchKey}
          class="form-control"
          placeholder="Search here..."
          aria-label="Username"
          aria-describedby="basic-addon1"
          on:input={search}
        >
        <button type="submit" class="input-group-text" id="basic-addon1" on:click={search}>
          <img src="/img/Search.svg" />
        </button>
      </div>
    </form>
    </h2>
    <div slot="details" class="faq-answer">

      <p class="label">VendorList</p>

      <div class="btn-group mt-2" style="display: flex; flex-wrap: wrap;">
        {#each vendorList as item}
        <div class="select">
            <input type="checkbox" id={item.name} on:click={(e) => selectVendor(e, item)} checked={vendorSelectedList.includes(item.name)}>
            <label class="btn btn-warning button_select" for={item.name}>{item.name}</label>
        </div>
        {/each}
      </div>

      <p class="label">Type</p>

      <div class="btn-group mt-2" style="display: flex; flex-wrap: wrap;">
        {#each typeList as item}
        <div class="select">
            <input type="checkbox" id={item.name} on:click={(e) => selectType(e, item)} checked={typeSelectedList.includes(item.name)}>
            <label class="btn btn-warning button_select" for={item.name}>{item.name}</label>
        </div>
        {/each}
      </div>
  
    </div>
  </FaqItem>


  <div class="boxsecond boxforth">
    <div class="minigames-btn">
      <button class={`btn me-2 ${type == "" ? "active": ""}`}>All</button>
      <button class="btn me-2">
        Hot
      </button>
      <button class="btn me-2" on:click={() => {}}>
        <img class="me-1" src="/img/icon_pokericon_poker.svg" /> Best Casino
      </button>
      <button class={`btn ${type == "slot" ? "active": ""}`}>
        <img class="me-1" src="/img/icon_livtv-sportsve-sports.svg" /> Slot
      </button>
      <button class="btn">
        <img class="me-1" src="/img/icon_livtv-sportsve-sports.svg" /> Blackjack
      </button>
      <button class="btn">
        <img class="me-1" src="/img/icon_livtv-sportsve-sports.svg" /> Baccarat
      </button>
      <button class="btn">
        <img class="me-1" src="/img/icon_livtv-sportsve-sports.svg" /> Roulette
      </button>
    </div>

    <div class="owl-minigames row" style="row-gap: 20px;">
      {#await load() then data}
        {#each list as item}
          <div class="casino-item col-lg-2 col-sm-3 col-6">
            <div class="item text-white">
              <div class="box">
                <div class="relative">
                  <img
                    class="mainimg"
                    src={item.thumbnail}
                    alt={item.title}
                    onerror="event.target.parentNode.parentNode.parentNode.style.display = 'none';"
                  />
                  <div class="hover overlay">
                    <a
                      href="/play/{item.title
                        .toLowerCase()
                        .replaceAll(' ', '-')}/{item.idx}"
                    >
                      <div class="flex flex-col gap-6">
                        <img src="/img/play.svg" />
                      </div>
                    </a>
                  </div>
                </div>
                <div class="content">
                  <p>
                    <a
                      href="/play/{item.title
                        .toLowerCase()
                        .replaceAll(' ', '-')}/{item.idx}">{item.title}</a
                    >
                    <!-- <span class="float-end"><img src="/img/info-circle.svg"
                  use:tooltip={{
                    content: `<strong>${item.vendor}</strong> : <strong>${item.title}</strong>`,
                    html: true
                  }}
                /></span> -->
                  </p>
                </div>
              </div>
            </div>
          </div>
        {/each}
      {/await}
    </div>
  </div> 

  <div style="text-align: center">
    <div style="color:white">{currentLimit} / {totalNumber}</div>
    <button class="btn-play" on:click={moreLoad}>Load More</button>
  </div>
</div>

<style>

  .hover.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #0c0e1ba6;
    display: flex !important;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all 0.3s ease;
  }

  .relative {
    position: relative;
  }

  .box:hover .hover.overlay {
    opacity: 1;
    transition: all 0.3s ease;
  }

  .flex{
    display: flex;
  } .flex-col {
    flex-direction: column;
  } .gap-6 {
    gap: 6px;
  }

  
  .btn-group .select {
    position: relative;
  }

  .btn-group .select input:checked + label {
    background: radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.184245) 6.25%, rgba(0, 0, 0, 0) 79.34%), linear-gradient(112.14deg, #7e2cff 35.54%, #596bf7 90.78%);
    color: #ffffff;
  }

  .btn-group .select input:checked + label:hover,
  .btn-group .select input:checked + label:focus,
  .btn-group .select input:checked + label:active {
    background: radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.184245) 6.25%, rgba(0, 0, 0, 0) 79.34%), linear-gradient(112.14deg, #7e2cff 35.54%, #596bf7 90.78%);
    color: #ffffff;
    /* background-color: #ffc107; */
  }

  .btn-group input {
    opacity: 0;
    position: absolute;
  }

  .btn-group .button_select {
    margin: 0 10px 10px 0;
    display: flex;
    background-color: transparent;

    border-radius: 7px;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #656e79;
    padding: 12px 12px 10px 12px;
    position: relative;
    /* background: rgba(255, 255, 255, 0.04); */
    backdrop-filter: blur(1.89394px);

    
  }

  body.light-mode .btn-group .button_select {
    background: #ECECF1;
    color: #656E79;
    border: solid 1px #dcdcdc;
  }


  body:not(.light-mode) .btn-group .button_select {
    background: linear-gradient(152.93deg, rgba(255, 255, 255, 0.11) 16.71%, rgba(255, 255, 255, 0) 78.65%);
  }

  .btn-group .button_select:hover,
  .btn-group .button_select:focus,
  .btn-group .button_select:active {
    background: radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.184245) 6.25%, rgba(0, 0, 0, 0) 79.34%), linear-gradient(112.14deg, #7e2cff 35.54%, #596bf7 90.78%) !important;
    color: #ffffff !important;
  }

  .option {
    position: relative;
  }

  .option input {
    opacity: 0;
    position: absolute;
  }

  .option input:checked + span {
    /* background-color: #ffc107; */
    background: radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.184245) 6.25%, rgba(0, 0, 0, 0) 79.34%), linear-gradient(112.14deg, #7e2cff 35.54%, #596bf7 90.78%);
  }

  .option input:checked + span:hover,
  .option input:checked + span:focus,
  .option input:checked + span:active {
    /* background-color: #ffc107; */
    background: radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.184245) 6.25%, rgba(0, 0, 0, 0) 79.34%), linear-gradient(112.14deg, #7e2cff 35.54%, #596bf7 90.78%);
  }

  .option .btn-option {
    margin: 0 10px 10px 0;
    display: flex;
    background-color: transparent;

    border-radius: 7px;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #656e79;
    padding: 12px 12px 10px 12px;
    position: relative;
    /* background: rgba(255, 255, 255, 0.04); */
    backdrop-filter: blur(1.89394px);
  }

  .option .btn-option:hover,
  .option .btn-option:focus,
  .option .btn-option:active {
    background-color: transparent;
  }
</style>