<script>
  import HighLightsItem from "../../lib/components/Sports/HighLightsItem.svelte";
</script>

<div class="container">
  <div class="mobilenone">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">Sports</li>
      </ol>
    </nav>
  </div>

  <div class="sportb desknone favourites">
    <div class="row mb-3 mt-3">
      <div class="col-2 pe-0">
        <button type="button" class="btn btn-search px-15 w-100">
          <img src="/img/Group-48.svg" />
        </button>
      </div>
      <div class="col-10 ps-0">
        <div class="form-outline">
          <input
            type="search"
            id="form1"
            class="form-control w-100"
            placeholder="Search"
          />
        </div>
      </div>
    </div>
    <div class="boxthird desknone table-drag tabledrag1">
      <div class="sportb-btn-wrapper">
        <button class="btn">
          <img class="me-1" src="/img/soccer-ball.svg" /> Sports A-Z
        </button>
        <button class="btn">
          <img class="me-1" src="/img/esports.svg" /> Favorites
        </button>
        <button class="btn">
          <img class="me-1" src="/img/esports.svg" /> Payback
        </button>
        <button class="btn">
          <img class="me-1" src="/img/esports.svg" /> Payback
        </button>
        <button class="btn">
          <img class="me-1" src="/img/esports.svg" /> Payback
        </button>
      </div>
    </div>
  </div>
  <div class="sports">
    <div class="box">
      <div class="sports_img position-relative">
        <img class="w-100 main mobilenone" src="/img/Banner_Football.svg" />
        <img class="w-100 desknone" src="/img/Banner_Football-1.svg" />
        <!-- <div class="overlay"></div> -->
        <div class="text-content">
          <h1 class="gradient-text gradient-text-grad2">Soccer Order</h1>
          <a href="#" class="hightlight me-5 gradient-text gradient-text-grad3"
            >Hightlights</a
          >
          <a href="#" class="me-5">Live</a>
          <a href="sports/soccer/leagues" class="me-5">Leagues</a>
        </div>
      </div>
      <div class="content pt-1" />
    </div>
    <div class="boxthird mt-4 mt-50">
      <div class="row">
        <div class="col-md-12">
          <h2 class="gradient-text gradient-text-light">Hightlights</h2>
        </div>
      </div>

      <HighLightsItem />

      <HighLightsItem />

      <HighLightsItem />
    </div>
  </div>
</div>

<style>
  .examples .items {
    height: 400px;
    overflow: scroll;
    overscroll-behavior: none;
    position: relative;
    user-select: none;
    white-space: nowrap;
    width: 100%;
  }
  .examples .items.horizontal,
  .textarea[rows] {
    height: auto;
  }
  .examples .item {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 3px;
    font-size: 40px;
    font-weight: 700;
    height: 180px;
    line-height: 180px;
    overflow: hidden;
    text-align: center;
    width: 180px;
  }

  .examples .items.horizontal .item {
    display: inline-block;
    margin: 5px;
  }
</style>
