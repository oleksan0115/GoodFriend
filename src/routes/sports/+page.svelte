<script>
  import { useConveyer } from "@egjs/svelte-conveyer";

  const { ref: ref1 } = useConveyer();
  const { ref: ref2 } = useConveyer();
  const { ref: ref3 } = useConveyer();

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
        <button type="button" class="btn btn-search w-100">
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
      <div class="sports_img">
        <img class="w-100 main mobilenone" src="/img/Banner_Football.svg" />
        <img class="w-100 desknone" src="/img/Banner_Football-1.svg" />
        <!-- <div class="overlay"></div> -->
        <div class="text-content">
          <h1>Soccer Order</h1>
          <a href="#" class="hightlight me-5">Hightlights</a>
          <a href="#" class="me-5">Live</a>
          <a href="sports/soccer/leagues" class="me-5">Leagues</a>
        </div>
      </div>
      <div class="content pt-1" />
    </div>
    <div class="boxthird mt-4 mt-50">
      <div class="row">
        <div class="col-md-12">
          <h2>Hightlights</h2>
        </div>
      </div>


      <div class="mt-3 bg-table">
        <div class="row">
            <div
                class="col-xl-5 col-lg-5 col-md-5 col-sm-12 align-self-center"
            >
                <div class="row">
                    <div class="col-2 col-md-3 col-sm-3 match-date-col">
                        <div class="border-right text-center">
                            <h5 class="mb-3">15:31</h5>
                            <h6 class="mb-0">27 Feb</h6>
                        </div>
                    </div>
                    <div class="col-10 col-md-9 col-sm-9 pe-0">
                        <h4 class="mb-3">
                            <img
                                class="me-1"
                                src="/img/language1.svg"
                            /> ITALY - PREMIER LEAGUE >
                        </h4>
                        <div class="mb-0 team-details">
                            <span class="team-name">
                                <img class="me-1" src="/img/Sevilla.svg" />
                                Sevilla
                            </span>
                            <span class="vs">vs</span>
                            <span  class="team-name">
                                <img
                                    class="me-1"
                                    src="/img/Atletico-Madrid.svg"
                                />
                                Atletico Madrid
                            </span>
                        </div>  
                    </div>
                </div>
            </div>
            <div class="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                <div class="table-drag tabledrag1" use:ref1>
                    <table class="table mb-0">
                        <thead>
                            <tr class="text-center">
                                <th class="pb-0">1</th>
                                <th class="pb-0">X</th>
                                <th class="pb-0">2</th>
                                <th class="pb-0" colspan="2"
                                    >HANDICAP</th
                                >
                                <th class="pb-0" colspan="5">TOTAL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <button
                                        class="btn tf-button btn-effect"
                                    >
                                        <span class="boder-fade" />
                                        <span class="effect">5.5</span>
                                    </button>
                                </td>

                                <td>
                                    <button
                                        class="btn tf-button btn-effect"
                                    >
                                        <span class="boder-fade" />
                                        <span class="effect">3.6</span>
                                    </button>
                                </td>

                                <td>
                                    <button
                                        class="btn tf-button btn-effect"
                                    >
                                        <span class="boder-fade" />
                                        <span class="effect">1.7</span>
                                    </button>
                                </td>

                                <td>
                                    <button
                                        class="btn tf-button btn-effect"
                                    >
                                        <span class="boder-fade" />

                                        <span class="effect"
                                            ><span
                                                class="text-success text"
                                                >+0.75</span
                                            ><br />1.9</span
                                        >
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn tf-button btn-effect"
                                    >
                                        <span class="boder-fade" />
                                        <span class="effect"
                                            ><span
                                                class="text-danger text"
                                                >-0.75</span
                                            ><br />1.7</span
                                        >
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn btngreen tf-button btn-effect"
                                    >
                                        <span class="boder-fade" />

                                        <span class="effect"
                                            ><span
                                                class="text-dark text"
                                                >2.25</span
                                            ><br />2.0</span
                                        >
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn btnred tf-button btn-effect"
                                        ><span class="boder-fade" />
                                        <span class="effect"
                                            ><span
                                                class="text-dark text"
                                                >2.25</span
                                            ><br />1.8</span
                                        >
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn tf-button btn-effect"
                                        ><span class="boder-fade" />
                                        <span class="effect"
                                            ><span
                                                class="text-dark text"
                                                >2.25</span
                                            ><br />1.8</span
                                        >
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn tf-button btn-effect"
                                        ><span class="boder-fade" />
                                        <span class="effect"
                                            ><span
                                                class="text-dark text"
                                                >2.25</span
                                            ><br />1.8</span
                                        >
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <div class="mt-3 bg-table">
        <div class="row">
            <div
                class="col-xl-5 col-lg-5 col-md-5 col-sm-12 align-self-center"
            >
                <div class="row">
                    <div class="col-2 col-md-3 col-sm-3 match-date-col">
                        <div class="border-right text-center">
                            <h5 class="mb-3">15:31</h5>
                            <h6 class="mb-0">27 Feb</h6>
                        </div>
                    </div>
                    <div class="col-10 col-md-9 col-sm-9 pe-0">
                        <h4 class="mb-3">
                            <img
                                class="me-1"
                                src="/img/language1.svg"
                            /> ITALY - PREMIER LEAGUE >
                        </h4>
                        <div class="mb-0 team-details">
                            <span class="team-name">
                                <img class="me-1" src="/img/Sevilla.svg" />
                                Sevilla
                            </span>
                            <span class="vs">vs</span>
                            <span  class="team-name">
                                <img
                                    class="me-1"
                                    src="/img/Atletico-Madrid.svg"
                                />
                                Atletico Madrid
                            </span>
                        </div>  
                    </div>
                </div>
            </div>
            <div class="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                <div class="table-drag tabledrag1" use:ref2>
                    <table class="table mb-0">
                        <thead>
                            <tr class="text-center">
                                <th class="pb-0">1</th>
                                <th class="pb-0">X</th>
                                <th class="pb-0">2</th>
                                <th class="pb-0" colspan="2"
                                    >HANDICAP</th
                                >
                                <th class="pb-0" colspan="5">TOTAL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <button
                                        class="btn tf-button btn-effect"
                                    >
                                        <span class="boder-fade" />
                                        <span class="effect">5.5</span>
                                    </button>
                                </td>

                                <td>
                                    <button
                                        class="btn tf-button btn-effect"
                                    >
                                        <span class="boder-fade" />
                                        <span class="effect">3.6</span>
                                    </button>
                                </td>

                                <td>
                                    <button
                                        class="btn tf-button btn-effect"
                                    >
                                        <span class="boder-fade" />
                                        <span class="effect">1.7</span>
                                    </button>
                                </td>

                                <td>
                                    <button
                                        class="btn tf-button btn-effect"
                                    >
                                        <span class="boder-fade" />

                                        <span class="effect"
                                            ><span
                                                class="text-success text"
                                                >+0.75</span
                                            ><br />1.9</span
                                        >
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn tf-button btn-effect"
                                    >
                                        <span class="boder-fade" />
                                        <span class="effect"
                                            ><span
                                                class="text-danger text"
                                                >-0.75</span
                                            ><br />1.7</span
                                        >
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn btngreen tf-button btn-effect"
                                    >
                                        <span class="boder-fade" />

                                        <span class="effect"
                                            ><span
                                                class="text-dark text"
                                                >2.25</span
                                            ><br />2.0</span
                                        >
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn btnred tf-button btn-effect"
                                        ><span class="boder-fade" />
                                        <span class="effect"
                                            ><span
                                                class="text-dark text"
                                                >2.25</span
                                            ><br />1.8</span
                                        >
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn tf-button btn-effect"
                                        ><span class="boder-fade" />
                                        <span class="effect"
                                            ><span
                                                class="text-dark text"
                                                >2.25</span
                                            ><br />1.8</span
                                        >
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn tf-button btn-effect"
                                        ><span class="boder-fade" />
                                        <span class="effect"
                                            ><span
                                                class="text-dark text"
                                                >2.25</span
                                            ><br />1.8</span
                                        >
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    
    <div class="mt-3 bg-table">
        <div class="row">
            <div
                class="col-xl-5 col-lg-5 col-md-5 col-sm-12 align-self-center"
            >
                <div class="row">
                    <div class="col-2 col-md-3 col-sm-3 match-date-col">
                        <div class="border-right text-center">
                            <h5 class="mb-3">15:31</h5>
                            <h6 class="mb-0">27 Feb</h6>
                        </div>
                    </div>
                    <div class="col-10 col-md-9 col-sm-9 pe-0">
                        <h4 class="mb-3">
                            <img
                                class="me-1"
                                src="/img/language1.svg"
                            /> ITALY - PREMIER LEAGUE >
                        </h4>
                        <div class="mb-0 team-details">
                            <span class="team-name">
                                <img class="me-1" src="/img/Sevilla.svg" />
                                Sevilla
                            </span>
                            <span class="vs">vs</span>
                            <span  class="team-name">
                                <img
                                    class="me-1"
                                    src="/img/Atletico-Madrid.svg"
                                />
                                Atletico Madrid
                            </span>
                        </div>  
                    </div>
                </div>
            </div>
            <div class="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                <div class="table-drag tabledrag1" use:ref3>
                    <table class="table mb-0">
                        <thead>
                            <tr class="text-center">
                                <th class="pb-0">1</th>
                                <th class="pb-0">X</th>
                                <th class="pb-0">2</th>
                                <th class="pb-0" colspan="2"
                                    >HANDICAP</th
                                >
                                <th class="pb-0" colspan="5">TOTAL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <button
                                        class="btn tf-button btn-effect"
                                    >
                                        <span class="boder-fade" />
                                        <span class="effect">5.5</span>
                                    </button>
                                </td>

                                <td>
                                    <button
                                        class="btn tf-button btn-effect"
                                    >
                                        <span class="boder-fade" />
                                        <span class="effect">3.6</span>
                                    </button>
                                </td>

                                <td>
                                    <button
                                        class="btn tf-button btn-effect"
                                    >
                                        <span class="boder-fade" />
                                        <span class="effect">1.7</span>
                                    </button>
                                </td>

                                <td>
                                    <button
                                        class="btn tf-button btn-effect"
                                    >
                                        <span class="boder-fade" />

                                        <span class="effect"
                                            ><span
                                                class="text-success text"
                                                >+0.75</span
                                            ><br />1.9</span
                                        >
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn tf-button btn-effect"
                                    >
                                        <span class="boder-fade" />
                                        <span class="effect"
                                            ><span
                                                class="text-danger text"
                                                >-0.75</span
                                            ><br />1.7</span
                                        >
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn btngreen tf-button btn-effect"
                                    >
                                        <span class="boder-fade" />

                                        <span class="effect"
                                            ><span
                                                class="text-dark text"
                                                >2.25</span
                                            ><br />2.0</span
                                        >
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn btnred tf-button btn-effect"
                                        ><span class="boder-fade" />
                                        <span class="effect"
                                            ><span
                                                class="text-dark text"
                                                >2.25</span
                                            ><br />1.8</span
                                        >
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn tf-button btn-effect"
                                        ><span class="boder-fade" />
                                        <span class="effect"
                                            ><span
                                                class="text-dark text"
                                                >2.25</span
                                            ><br />1.8</span
                                        >
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn tf-button btn-effect"
                                        ><span class="boder-fade" />
                                        <span class="effect"
                                            ><span
                                                class="text-dark text"
                                                >2.25</span
                                            ><br />1.8</span
                                        >
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
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
