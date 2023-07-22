<script>
  import { onMount } from "svelte";
  import { Navigation, Pagination, Scrollbar, A11y, Grid } from "swiper";
  import { Swiper, SwiperSlide } from "swiper/svelte";

  import globalStore from "../../../../stores/globalStore";
  import { getCasinoList } from "../../../../apis/casino/GetCasinoList.js";
  import { getBestResult } from "../../../../apis/casino/GetBestResult";
  import { LaunchCasino } from '../../../../apis/casino/LaunchCasino';

  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  import "swiper/css/scrollbar";
  import "swiper/css/grid";

  let commentBoxOpen=false;

  export let data
  let link = "";
  // const link = data.link
  const title = data.title
  const type = data.type
  const idx = data.idx
  let relatedList = []
  let bestResult = [];
	let cntBestResult = 5;
  let isPlay = false;
  let nick = $globalStore.userDetail ? $globalStore.userDetail.nick: null;

  $: {
    updateLink();
  }

  onMount(async () => {
    const swiper = document.querySelector(".oc1 .swiper").swiper;
    const buttonPrev = document.querySelector(".categories-prev");
    const buttonNext = document.querySelector(".categories-next");
    buttonPrev.addEventListener("click", () => {
      swiper.slidePrev();
    });
    buttonNext.addEventListener("click", () => {
      swiper.slideNext();
    });

    await updateLink();
    
    const res = await getCasinoList({
      title: "",
      vendor: [],
      type: [],
      page: 0
    });
    relatedList = res.list.slice(0, 6);

    const res1 = await getBestResult();
    bestResult = res1.betHistoryResult.slice(0, cntBestResult);
  });

  const loginAndStart = () => {
    globalStore.toggleItem("loginModalOpen", true);
  }

  async function updateLink() {
    const res_link = await LaunchCasino(idx, nick);
    link = res_link.link;
  }
  
</script>

<div class="container">
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href={`/casino?type=${type}`}>{type}</a></li>
      <li class="breadcrumb-item active" aria-current="page">{title}</li>
    </ol>
  </nav>
</div>
<div class="play">
  <div class="box">
    <div class="container">
      <div class="play_img text-center mobilenone">
        <iframe src="{link}" width="100%" height="650px" frameborder="0">
        </iframe>
        <div class="overlay" style={isPlay ? "display: none;": ""}/>
        {#if $globalStore.userDetail}
        <div class="text-content" style={isPlay ? "display: none;": ""}>
          <button class="btn btn-play me-1" on:click={() => {
              isPlay = true;
          }}>
            <img class="me-1" src="../../img/icon_play.svg" /> Play
          </button>
          <!-- <button class="btn btn-free me-1">Free Play</button> -->
        </div>
        {:else}
        <div class="text-content" style={isPlay ? "display: none;": ""}>
          <button class="btn btn-play me-1" on:click={loginAndStart}>
            <img class="me-1" src="../../img/icon_play.svg" /> Login and Get started
          </button>
        </div>
        {/if}
      </div>
      <div class="content btn-top mobilenone">
        <button class="btn btn-dark me-1">
          <img class="me-1" src="../../img/icon_like.svg" /> 435
        </button>
        <button class="btn btn-dark me-1">
          <img class="me-1" src="../../img/icon_favorite1.svg" /> 435
        </button>
        <button class="btn btn-dark me-1">
          <img class="me-1" src="../../img/icon_share.svg" /> Share
        </button>
      </div>
    </div>
    <div class="play_img text-center desknone">
      <!-- <img class="main desknone" src="../../img/bg_img.svg" /> -->
      <iframe src="{link}" width="100%" height="650px" frameborder="0">
      </iframe>
      <div class="overlay" style={isPlay ? "display: none;": ""}/>
      <div class="text-content" style={isPlay ? "display: none;": ""}>
        <div class="boxsix">
          <!-- <div class="row">
            <div class="col-md-2 col-5 ps-0 col-xs-6">
              <img class="w-100" src="../../img/Rectangle-38.svg" />
            </div>
            <div class="col-md-4 col-7 ps-0 text-start col-xs-6">
              <h1 class="pb-1">Epic Journey</h1>
              <h5 class="mt-2 mb-2"><span>By</span> Tol Es</h5>
              <p class="pt-1 mb-0">
                <span>Release:---</span>
                <a class="ms-3" href="#">Read more</a>
              </p>
              <div class="mt-3 d-inline-block">
                <img class="me-1" src="../../img/icon-1.svg" />
                <img class="me-1" src="../../img/icon-2.svg" />
                <img class="me-1" src="../../img/icon-3.svg" />
              </div>
            </div>
          </div> -->

          <div class="row">
            <div class=" pl-0">
              {#if $globalStore.userDetail}
              <button class="btn btn-play me-1" on:click={() => {
                isPlay = true;
              }}>
                <img class="me-1" src="../../img/icon_play.svg" /> Play
              </button>
              {:else}
              <button class="btn btn-play me-1" on:click={loginAndStart}>
                <img class="me-1" src="../../img/icon_play.svg" /> Login and Get started
              </button>
              {/if}
            </div>
  
            <!-- <div class="col-6 pr-0">
              <button class="btn w-100 btn-free me-1">Free Play</button>
            </div> -->
            <!-- <div class="col-12 mt-3 p-0">
              <button class="btn w-100 btn-moreinfo me-1">More Info</button>
            </div> -->
          </div>          
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <!-- <div class="boxsix mt-4 mobilenone">
      <div class="row">
        <div class="col-md-2 col-4 ps-0">
          <img class="w-100" src="../../img/Rectangle-38.svg" />
        </div>
        <div class="col-md-4 col-8 ps-0">
          <h1 class="pb-2">Epic Journey</h1>
          <h5 class="mt-4 mb-4"><span>By</span> Tol Es</h5>
          <p class="pt-2 mb-0">
            <span>Release:---</span>
            <a class="ms-3" href="#">Read more</a>
          </p>
        </div>
        <div class="col-md-6 text-end">
          <div class="form-check form-switch">
            <label class="form-check-label" for="flexSwitchCheckDefault"
              >Comments</label
            >
            <input on:change={ () => commentBoxOpen=!commentBoxOpen }
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
          </div>
        </div>
      </div>
    </div> -->
    <div class="boxsecond boxforth mobilenone">
      <div class="row">
        <div class="col-md-12 categories-swiper-top swiper-top">
          <h2 class="title">Related Games</h2>

          <div class="swiper-navigation">
            <button class="swiper-prev-btn categories-prev">
              <svg
                style="transform:rotate(180deg)"
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.46967 0.46967C0.762563 0.176777 1.23744 0.176777 1.53033 0.46967L7.53033 6.46967C7.82322 6.76256 7.82322 7.23744 7.53033 7.53033L1.53033 13.5303C1.23744 13.8232 0.762563 13.8232 0.46967 13.5303C0.176777 13.2374 0.176777 12.7626 0.46967 12.4697L5.93934 7L0.46967 1.53033C0.176777 1.23744 0.176777 0.762563 0.46967 0.46967Z"
                  fill="url(#paint0_linear_615_16097)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_615_16097"
                    x1="1.66667"
                    y1="-2.3"
                    x2="8.01308"
                    y2="-1.50789"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#C6A3FF" />
                    <stop offset="1" stop-color="#7E8BED" />
                  </linearGradient>
                </defs>
              </svg>
            </button>
            <button class="swiper-next-btn categories-next">
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.46967 0.46967C0.762563 0.176777 1.23744 0.176777 1.53033 0.46967L7.53033 6.46967C7.82322 6.76256 7.82322 7.23744 7.53033 7.53033L1.53033 13.5303C1.23744 13.8232 0.762563 13.8232 0.46967 13.5303C0.176777 13.2374 0.176777 12.7626 0.46967 12.4697L5.93934 7L0.46967 1.53033C0.176777 1.23744 0.176777 0.762563 0.46967 0.46967Z"
                  fill="url(#paint0_linear_615_16097)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_615_16097"
                    x1="1.66667"
                    y1="-2.3"
                    x2="8.01308"
                    y2="-1.50789"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#C6A3FF" />
                    <stop offset="1" stop-color="#7E8BED" />
                  </linearGradient>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div class="owl-minigames">
        <div class="row oc1">
          <Swiper
            spaceBetween={15}
            slidesPerView={2}
            modules={[Pagination]}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 4,
              },
              1400: {
                slidesPerView: 5,
              },
            }}
          >
          {#each relatedList as item}
            <SwiperSlide>
                <div class="item text-white">
                  <div class="box">
                    <div class="relative">
                      <img class="mainimg" src={item.thumbnail} />
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
                            .replaceAll(' ', '-')}/{item.idx}">{item.title}</a>
                        <span class="float-end"
                          ><img src="../../img/info-circle.svg" /></span
                        >
                      </p>
                    </div>
                  </div>
                </div>
            </SwiperSlide>
          {/each}

            <!-- <SwiperSlide>
                <div class="item text-white">
                  <div class="box">
                    <img class="mainimg" src="../../img/Rectangle-39.svg" />
                    <div class="hover">
                      <img src="../../img/hover.svg" />
                    </div>
                    <div class="content">
                      <p>
                        Tiny Gods
                        <span class="float-end"
                          ><img src="../../img/info-circle.svg" /></span
                        >
                      </p>
                    </div>
                  </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div class="item text-white">
                  <div class="box">
                    <img class="mainimg" src="../../img/Rectangle-40.svg" />
                    <div class="hover">
                      <img src="../../img/hover.svg" />
                    </div>
                    <div class="content">
                      <p>
                        Tiny Gods
                        <span class="float-end"
                          ><img src="../../img/info-circle.svg" /></span
                        >
                      </p>
                    </div>
                  </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div class="item text-white">
                  <div class="box">
                    <img class="mainimg" src="../../img/Rectangle-41.svg" />
                    <div class="hover">
                      <img src="../../img/hover.svg" />
                    </div>
                    <div class="content">
                      <p>
                        Tiny Gods
                        <span class="float-end"
                          ><img src="../../img/info-circle.svg" /></span
                        >
                      </p>
                    </div>
                  </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div class="item text-white">
                  <div class="box">
                    <img class="mainimg" src="../../img/Rectangle-42.svg" />
                    <div class="hover">
                      <img src="../../img/hover.svg" />
                    </div>
                    <div class="content">
                      <p>
                        Tiny Gods
                        <span class="float-end"
                          ><img src="../../img/info-circle.svg" /></span
                        >
                      </p>
                    </div>
                  </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div class="item text-white">
                  <div class="box">
                    <img class="mainimg" src="../../img/game1.svg" />
                    <div class="hover">
                      <img src="../../img/hover.svg" />
                    </div>
                    <div class="content">
                      <p>
                        Tiny Gods
                        <span class="float-end"
                          ><img src="../../img/info-circle.svg" /></span
                        >
                      </p>
                    </div>
                  </div>
                </div>
            </SwiperSlide> -->
          </Swiper>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-7 col-sm-12" style="flex-grow: 1;">
        <div class="boxsecond boxfive mt-0 mt-xxl-40">
          <div class="row">
            <div class="col-md-12">
              <h2 class="mobilenone">Latest Bet & Race</h2>
              <h2 class="desknone">Latest Best & Withdrawals</h2>
            </div>
          </div>
          <div class="tab">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="bets-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#bets"
                  type="button"
                  role="tab"
                  aria-controls="bets"
                  aria-selected="true"
                  fdprocessedid="uvpyug"
                >
                  LATEST BETS
                </button>
              </li>
              <!-- <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="deposits-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#deposits"
                  type="button"
                  role="tab"
                  aria-controls="deposits"
                  aria-selected="false"
                  fdprocessedid="ym4x3b"
                >
                  Recent Deposits
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="withdrawals-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#withdrawals"
                  type="button"
                  role="tab"
                  aria-controls="withdrawals"
                  aria-selected="false"
                  fdprocessedid="iuk21"
                >
                  Recent Withdrawals
                </button>
              </li> -->
            </ul>
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="bets"
                role="tabpanel"
                aria-labelledby="bets-tab"
              >
                <div class="latest-table-wrapper">
                  <table class="table font-size latest-bets-table">
                    <thead class="table-head">
                      <tr>
                        <th width="25%">Game</th>
                        <th width="20%">Player</th>
                        <th width="20%" class="mobilenone">Bet Amount</th>
                        <th width="15%">Multiplier</th>
                        <th width="20%" class="text-end">Profit Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {#each bestResult as item}
                      <tr>
                        <td>
                          <img class="me-1" src="../../img/table-avatar1.svg" />
                          {item.title}
                        </td>
                        <td class="text-white">{item.nick}</td>
                        <td class="text-white mobilenone">
                          {item.betAmount} <img class="ms-1" src="../../img/btc.svg" />
                        </td>
                        <td>0.001x</td>
                        <td class={`text-end ${item.profitAmount >= 0 ? "text-success": "text-danger"}`}>
                          {item.profitAmount} <img class="ms-1" src="../../img/btc.svg" />
                        </td>
                      </tr>
                      {/each}
                      <!-- <tr>
                        <td>
                          <img class="me-1" src="../../img/poker-chips.svg" />
                          Ring of fortune
                        </td>
                        <td class="text-white">unknown</td>
                        <td class="text-white mobilenone">
                          104.54 <img class="ms-1" src="../../img/hot.svg" />
                        </td>
                        <td>0.001x</td>
                        <td class="text-success text-end">
                          + 21.567 <img class="ms-1" src="../../img/hot.svg" />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img class="me-1" src="../../img/seven.svg" /> Ring of fortune
                        </td>
                        <td class="text-white">sharlen12</td>
                        <td class="text-white mobilenone">
                          104.54 <img class="ms-1" src="../../img/mft.svg" />
                        </td>
                        <td>0.001x</td>
                        <td class="text-danger text-end">
                          - 21.567 <img class="ms-1" src="../../img/mft.svg" />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img class="me-1" src="../../img/table-avatar1.svg" /> Ring of
                          fortune
                        </td>
                        <td class="text-white">sharlen12</td>
                        <td class="text-white mobilenone">
                          104.54 <img class="ms-1" src="../../img/eth.svg" />
                        </td>
                        <td>0.001x</td>
                        <td class="text-success text-end">
                          + 21.567 <img class="ms-1" src="../../img/eth.svg" />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img class="me-1" src="../../img/dice.svg" /> Ring of fortune
                        </td>
                        <td class="text-white">BranyW67</td>
                        <td class="text-white mobilenone">
                          104.54 <img class="ms-1" src="../../img/trx.svg" />
                        </td>
                        <td>0.001x</td>
                        <td class="text-danger text-end">
                          - 21.567 <img class="ms-1" src="../../img/trx.svg" />
                        </td>
                      </tr> -->
                    </tbody>
                  </table>
                </div> 
                <div class="text-center desknone">
                  <button class="btn btn-showmore">Show More</button>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="deposits"
                role="tabpanel"
                aria-labelledby="deposits-tab"
              >
                Coming Soon...
              </div>
              <div
                class="tab-pane fade"
                id="withdrawals"
                role="tabpanel"
                aria-labelledby="withdrawals-tab"
              >
                Coming Soon...
              </div>
            </div>
          </div>
        </div>
      </div>

      {#if commentBoxOpen}
      <div class="col-md-5 col-sm-12">
        <div class="boxsecond mt-0 mt-xxl-40">
          <div class="row">
            <div class="col-md-12 col-12">
              <h2 class="mb-0">Comments</h2>
            </div>
          </div>
        </div>
        <div class="commentsbox bg-color1">
          <div class="row">
            <div class="col-md-3 col-3">
              <img class="" src="../../img/Ellipse-21.svg" />
            </div>
            <div class="col-md-9 col-9 ps-0">
              <input
                type="text"
                class="form-control"
                placeholder="Leave Your Comment"
                aria-label="Username"
                fdprocessedid="ks3lwc"
              />
            </div>
          </div>
        </div>
        <div class="comment bg-color1 mt-3">
          <div class="row">
            <div class="col-md-2 col-3">
              <img class="w-100" src="../../img/user1.svg" />
            </div>
            <div class="col-md-10 col-9">
              <h6>
                Ellis Schneider
                <img class="ms-1" src="../../img/Group-1581.svg" />
                <span class="time">12:03</span>
              </h6>
              <p>Lorem ipsum dolor sit amet consecte Feugiat accum.</p>
              <ul>
                <li><img src="../../img/icon_like1.svg" /></li>
                <li><img src="../../img/icon_message.svg" /></li>
                <li><img src="../../img/dots.svg" /></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="comment bg-color1 mt-3">
          <div class="row">
            <div class="col-md-2 col-3">
              <img class="w-100" src="../../img/user2.svg" />
            </div>
            <div class="col-md-10 col-9">
              <h6>
                Ellis Schneider
                <img class="ms-1" src="../../img/Group-1581.svg" />
                <span class="time">12:03</span>
              </h6>
              <p>Lorem ipsum dolor sit amet consecte Feugiat accum.</p>
              <ul>
                <li><img src="../../img/icon_like1.svg" /></li>
                <li><img src="../../img/icon_message.svg" /></li>
                <li><img src="../../img/dots.svg" /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/if}

    </div>
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
</style>