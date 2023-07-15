<script>
  import { onMount } from "svelte";
  import { getCasinoList } from '../../apis/casino/GetCasinoList';
  let casinoList = [];

  onMount(async () => {
    const res =  await getCasinoList({});
    casinoList = res.data.list;
  });
  let searchKey = "";

  async function searchCasino() {
    const res =  await getCasinoList({search: searchKey});
    casinoList = res.data.list;
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
      />
      <button type="submit" class="input-group-text" id="basic-addon1" on:click={searchCasino}
        ><img src="/img/Search.svg" /></button
      >
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

      <!-- <div class="casino-item col-lg-2 col-sm-3 col-6">
        <div class="item text-white">
          <div class="box">
            <img class="mainimg" src="/img/Rectangle-38.svg" />
            <div class="hover">
              <a href="#"><img src="/img/hover.svg" /></a>
            </div>
            <div class="content">
              <p>
                <a href="#">Tiny Gods</a>
                <span class="float-end"
                  ><img src="/img/info-circle.svg" /></span
                >
              </p>
            </div>
          </div>
        </div>
      </div> -->
      
      {#each casinoList as casinoItem}
      <div class="casino-item col-lg-2 col-sm-3 col-6">
        <div class="item text-white">
          <div class="box">
            <img class="mainimg" src={casinoItem.thumbnail} />
            <div class="hover">
              <a href="#">
                <img src="/img/hover.svg" />
              </a>
            </div>
            <div class="content">
              <p>
                <a href="#">{casinoItem.title}</a>
                
              </p>
              <span class="float-end"
                ><img src="/img/info-circle.svg" /></span
              >
            </div>
          </div>
        </div>
      </div>
      {/each}

      <!-- <div class="row">     
        <div class="casino-item col-lg-2 col-sm-3 col-6">
          <div class="item text-white">
            <div class="box">
              <img class="mainimg" src="/img/Rectangle-38.svg" />
              <div class="hover">
                <a href="#"><img src="/img/hover.svg" /></a>
              </div>
              <div class="content">
                <p>
                  <a href="#">Tiny Gods</a>
                  <span class="float-end"
                    ><img src="/img/info-circle.svg" /></span
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="casino-item col-lg-2 col-sm-3 col-6">
          <div class="item text-white">
            <div class="box">
              <img class="mainimg" src="/img/game1.svg" />
              <div class="hover">
                <a href="#"><img src="/img/hover.svg" /></a>
              </div>
              <div class="content">
                <p>
                  <a href="#">Tiny Gods</a>
                  <span class="float-end"
                    ><img src="/img/info-circle.svg" /></span
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="casino-item col-lg-2 col-sm-3 col-6">
          <div class="item text-white">
            <div class="box">
              <img class="mainimg" src="/img/Rectangle-40.svg" />
              <div class="hover">
                <a href="#"><img src="/img/hover.svg" /></a>
              </div>
              <div class="content">
                <p>
                  <a href="#">Tiny Gods</a>
                  <span class="float-end"
                    ><img src="/img/info-circle.svg" /></span
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="casino-item col-lg-2 col-sm-3 col-6">
          <div class="item text-white">
            <div class="box">
              <img class="mainimg" src="/img/Rectangle-42.svg" />
              <div class="hover">
                <a href="#"><img src="/img/hover.svg" /></a>
              </div>
              <div class="content">
                <p>
                  <a href="#">Tiny Gods</a>
                  <span class="float-end"
                    ><img src="/img/info-circle.svg" /></span
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="casino-item col-lg-2 col-sm-3 col-6">
          <div class="item">
            <div class="box">
              <img class="mainimg" src="/img/game2.svg" />
              <div class="hover">
                <a href="#"><img src="/img/hover.svg" /></a>
              </div>
              <div class="content">
                <p>
                  <a href="#">Tiny Gods</a>
                  <span class="float-end"
                    ><img src="/img/info-circle.svg" /></span
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> -->
      <!-- <div class="row mt-4">
        <div class="casino-item col-lg-2 col-sm-3 col-6">
          <div class="item text-white">
            <div class="box">
              <img class="mainimg" src="/img/Rectangle-38.svg" />
              <div class="hover">
                <a href="#"><img src="/img/hover.svg" /></a>
              </div>
              <div class="content">
                <p>
                  <a href="#">Tiny Gods</a>
                  <span class="float-end"
                    ><img src="/img/info-circle.svg" /></span
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="casino-item col-lg-2 col-sm-3 col-6">
          <div class="item text-white">
            <div class="box">
              <img class="mainimg" src="/img/Rectangle-39.svg" />
              <div class="hover">
                <a href="#"><img src="/img/hover.svg" /></a>
              </div>
              <div class="content">
                <p>
                  <a href="#">Tiny Gods</a>
                  <span class="float-end"
                    ><img src="/img/info-circle.svg" /></span
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="casino-item col-lg-2 col-sm-3 col-6">
          <div class="item text-white">
            <div class="box">
              <img class="mainimg" src="/img/Rectangle-40.svg" />
              <div class="hover">
                <a href="#"><img src="/img/hover.svg" /></a>
              </div>
              <div class="content">
                <p>
                  <a href="#">Tiny Gods</a>
                  <span class="float-end"
                    ><img src="/img/info-circle.svg" /></span
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="casino-item col-lg-2 col-sm-3 col-6">
          <div class="item text-white">
            <div class="box">
              <img class="mainimg" src="/img/Rectangle-41.svg" />
              <div class="hover">
                <a href="#"><img src="/img/hover.svg" /></a>
              </div>
              <div class="content">
                <p>
                  <a href="#">Tiny Gods</a>
                  <span class="float-end"
                    ><img src="/img/info-circle.svg" /></span
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="casino-item col-lg-2 col-sm-3 col-6">
          <div class="item text-white">
            <div class="box">
              <img class="mainimg" src="/img/Rectangle-42.svg" />
              <div class="hover">
                <a href="#"><img src="/img/hover.svg" /></a>
              </div>
              <div class="content">
                <p>
                  <a href="#">Tiny Gods</a>
                  <span class="float-end"
                    ><img src="/img/info-circle.svg" /></span
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="casino-item col-lg-2 col-sm-3 col-6">
          <div class="item">
            <div class="box">
              <img class="mainimg" src="/img/game1.svg" />
              <div class="hover">
                <a href="#"><img src="/img/hover.svg" /></a>
              </div>
              <div class="content">
                <p>
                  <a href="#">Tiny Gods</a>
                  <span class="float-end"
                    ><img src="/img/info-circle.svg" /></span
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> -->
      <!-- <div class="row mt-4">
        <div class="col-lg-2 col-sm-3 col-6">
          <div class="item text-white">
            <div class="box">
              <img class="mainimg" src="/img/Rectangle-39.svg" />
              <div class="hover">
                <a href="#"><img src="/img/hover.svg" /></a>
              </div>
              <div class="content">
                <p>
                  <a href="#">Tiny Gods</a>
                  <span class="float-end"
                    ><img src="/img/info-circle.svg" /></span
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-sm-3 col-6">
          <div class="item text-white">
            <div class="box">
              <img class="mainimg" src="/img/Rectangle-41.svg" />
              <div class="hover">
                <a href="#"><img src="/img/hover.svg" /></a>
              </div>
              <div class="content">
                <p>
                  <a href="#">Tiny Gods</a>
                  <span class="float-end"
                    ><img src="/img/info-circle.svg" /></span
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-sm-3 col-6">
          <div class="item text-white">
            <div class="box">
              <img class="mainimg" src="/img/Rectangle-38.svg" />
              <div class="hover">
                <a href="#"><img src="/img/hover.svg" /></a>
              </div>
              <div class="content">
                <p>
                  <a href="#">Tiny Gods</a>
                  <span class="float-end"
                    ><img src="/img/info-circle.svg" /></span
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-sm-3 col-6">
          <div class="item text-white">
            <div class="box">
              <img class="mainimg" src="/img/Rectangle-42.svg" />
              <div class="hover">
                <a href="#"><img src="/img/hover.svg" /></a>
              </div>
              <div class="content">
                <p>
                  <a href="#">Tiny Gods</a>
                  <span class="float-end"
                    ><img src="/img/info-circle.svg" /></span
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-sm-3 col-6">
          <div class="item text-white">
            <div class="box">
              <img class="mainimg" src="/img/Rectangle-40.svg" />
              <div class="hover">
                <a href="#"><img src="/img/hover.svg" /></a>
              </div>
              <div class="content">
                <p>
                  <a href="#">Tiny Gods</a>
                  <span class="float-end"
                    ><img src="/img/info-circle.svg" /></span
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-sm-3 col-6">
          <div class="item">
            <div class="box">
              <img class="mainimg" src="/img/game2.svg" />
              <div class="hover">
                <a href="#"><img src="/img/hover.svg" /></a>
              </div>
              <div class="content">
                <p>
                  <a href="#">Tiny Gods</a>
                  <span class="float-end"
                    ><img src="/img/info-circle.svg" /></span
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</div>
