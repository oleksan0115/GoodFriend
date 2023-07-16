<script>
  import {getCasinoList} from "../../apis/casino/GetCasinoList"
  export let data
  
  let list = data.casino.list
  let searchKey = ""

  const search = async () => {   // Removed argument from function signature
    const res = await getCasinoList(0, searchKey)
    console.log(res.list)
    list = res.list   // Assign the new data to the list
  }
  
</script>

<div class="container">
  <form action="">
    <div class="input-group mb-3 main-search-bar">
      <input
      type="search"
      bind:value={searchKey}
      class="form-control"
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

  <div class="boxsecond boxforth">
    <div class="row">
      <div class="col-md-12">
        <h2>Casino</h2>
      </div>
    </div>
    <div class="minigames-btn">
      <button class="btn active me-2">All</button>
      <button class="btn me-2">
        <img class="me-1" src="/img/Union-1.svg" /> GF Originals
      </button>
      <button class="btn me-2">
        <img class="me-1" src="/img/icon_pokericon_poker.svg" />Slots
      </button>
      <button class="btn">
        <img class="me-1" src="/img/icon_livtv-sportsve-sports.svg" /> Live Mini
        Games
      </button>
    </div>
    <div class="owl-minigames">
           
      {#each list as item}
      <div class="casino-item col-lg-2 col-sm-3 col-6">
        <div class="item text-white">
          <div class="box">
            <img 
              class="mainimg" 
              src={item.thumbnail} 
            >
            <div class="hover">
              <a href="#">
                <img src="/img/hover.svg" />
              </a>
            </div>
            <div class="content">
              <p>
                <a href="#">{item.title}</a>
                
              </p>
              <span class="float-end"
                ><img src="/img/info-circle.svg" /></span
              >
            </div>
          </div>
        </div>
      </div>
      {/each}
    </div>
  </div>
</div>