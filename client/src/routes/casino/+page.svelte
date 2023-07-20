<script>
  import { onMount } from "svelte";
  import Select from 'svelte-select';
  import {getCasinoList} from "../../apis/casino/GetCasinoList"
  import { getFilterMenu } from "../../apis/casino/GetFilterMenu"
  import FaqItem from "$lib/components/FaqItem.svelte";
    import filter from "svelte-select/filter";
  // import { tooltip } from 'svooltip';
  // import 'svooltip/styles.css';
  
  export let data
  const type = data.type ? data.type : ""
  let filterMenu = [];
  let vendorList = [];
  onMount(async () => {
    const res = await getFilterMenu();
    vendorList = res.vendor.map((item) => {
      return { value: item.name, label: item.name }
    })
    console.log('@@@@@@@@@@@@@@@@', vendorList)
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
      vendor: [],
      type: type,
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
      vendor: [],
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
</script>

<div class="container">
  <FaqItem>
    <h2 slot="head">  <form action="">
      <div class="input-group main-search-bar">
        <input
          type="search"
          bind:value={searchKey}
          class="form-control text-white"
          placeholder="Search here..."
          aria-label="Username"
          aria-describedby="basic-addon1"
          on:keyup={search}
        >
        <button type="submit" class="input-group-text" id="basic-addon1">
          <img src="/img/Search.svg" />
        </button>
      </div>
    </form>
    </h2>
    <div slot="details" class="faq-answer">
      <div class="input-group main-search-bar">
        <Select items={vendorList} multiple />
      </div>

      <div class="input-group main-search-bar mt-2">
        <Select items={vendorList} vendorList multiple />
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
    {#await load()}
    {:then data} 
      {#each list as item}
      <div class="casino-item col-lg-2 col-sm-3 col-6">
        <div class="item text-white">
          <div class="box">
            <img 
              class="mainimg" 
              src={item.thumbnail} 
              alt={item.title} 
              onerror="event.target.parentNode.parentNode.parentNode.style.display = 'none';"
            >
            <div class="hover">
              <a href="/play/{item.title.toLowerCase().replaceAll(" ", "-")}/{item.idx}">
                <img src="/img/hover.svg" />
              </a>
            </div>
            <div class="content">
              <p>
                <a href="/play/{item.title.toLowerCase().replaceAll(" ", "-")}/{item.idx}">{item.title}</a>
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

  <!-- {#if totalNumber > limit && totalNumber > currentLimit} -->
  <div style="text-align: center">
    <div style="color:white">{currentLimit} / {totalNumber}</div>
    <button class="btn-play" on:click={moreLoad}>Load More</button>
  </div>
  <!-- {/if} -->
</div>