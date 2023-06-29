<script>
    import { onMount } from "svelte";

    onMount(() => {
        /*Best casino carousel*/
        const swiper_oc1 = document.querySelector(".oc1 .swiper").swiper;
        const buttonPrev_oc1 = document.querySelector(".categories_oc1-prev");
        const buttonNext_oc1 = document.querySelector(".categories_oc1-next");
        buttonPrev_oc1.addEventListener("click", () => {
            swiper_oc1.slidePrev();
        });
        buttonNext_oc1.addEventListener("click", () => {
            swiper_oc1.slideNext();
        });

        /*Best slots carousel*/

        const swiper_oc2 = document.querySelector(".oc2 .swiper").swiper;
        const buttonPrev_oc2 = document.querySelector(".categories_oc2-prev");
        const buttonNext_oc2 = document.querySelector(".categories_oc2-next");
        buttonPrev_oc2.addEventListener("click", () => {
            swiper_oc2.slidePrev();
        });
        buttonNext_oc2.addEventListener("click", () => {
            swiper_oc2.slideNext();
        });
    });

    import { Navigation, Pagination } from "swiper";

    import { Swiper, SwiperSlide } from "swiper/svelte";
    import "swiper/css";
    import "swiper/css/navigation";
    import "swiper/css/pagination";

    import { useConveyer } from "@egjs/svelte-conveyer";

    const { ref: ref1 } = useConveyer();
    const { ref: ref2 } = useConveyer();
    const { ref: ref3 } = useConveyer();
    const { ref: ref4 } = useConveyer();

    let activeLiveSportsTab = "soccer";

    let activeMainSportsTab = "soccer";
    let activeRecentTab = "bets";
</script>

<div class="boxfirst hero-mb mb-4">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 text-end" />
            <div class="col-12">
                <div class="pd3060 mobile_center">
                    <h6 class="mb-3">SIGN UP & GET DEPOSIT BONUS</h6>
                    <h1 class="mb-0"><span>+300 REWARDS</span></h1>
                    <div class="row mt-3">
                        <div class="col-6 ps-0 pe-1">
                            <button class="btn w-100 btn-m"
                                >Deposit & Play</button
                            >
                        </div>
                        <div class="col-6 pe-0 ps-1">
                            <button class="btn w-100 btn-d">Buy Crypto</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="container">
    <div class="boxfirst hero-dt">
        <div class="row">
            <div class="col-md-12 align-self-center">
                <div class="pd3060 mobile_center">
                    <h6 class="mb-3">SIGN UP & GET DEPOSIT BONUS</h6>
                    <h1 class="mb-0">UP TO <span>300%</span></h1>
                    <p class="mt-0">
                        Lorem ipsum dolor sit amet consectetur. Tristique in
                        cursus mass
                    </p>
                    <button class="btn btn-color3">Get Started</button>
                </div>
            </div>
            <div class="col-md-6 text-end" />
        </div>
    </div>
    <div class="boxsecond boxforth navnone">
        <div class="fourcolumn">
            <div class="row">
                <div class="col-md-12">
                    <h2>All Categories</h2>
                </div>
            </div>

            <div class="row">
                <div class="item">
                    <div class="box1 sbox text-center">
                        <img src="/img/casino-category.png" />
                        <div class="title-wrapper">
                            <h2 class="category-title">Casino</h2>
                        </div>
                    </div>
                </div>

                <div class="item">
                    <div class="box2 sbox text-center">
                        <img src="/img/slot-category.png" />
                        <div class="title-wrapper">
                            <h2 class="category-title">Slot</h2>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="box3 sbox text-center">
                        <img src="/img/sports-category.png" />
                        <div class="title-wrapper">
                            <h2 class="category-title">Sports</h2>
                        </div>
                    </div>
                </div>

                <div class="item">
                    <div class="box4 sbox text-center">
                        <img src="/img/v-game-category.png" />
                        <div class="title-wrapper">
                            <h2 class="category-title">V-Game</h2>
                        </div>
                    </div>
                </div>

                <div class="item">
                    <div class="box5 sbox text-center">
                        <img src="/img/minigames-category.png" />
                        <div class="title-wrapper">
                            <h2 class="category-title">Mini Games</h2>
                        </div>
                    </div>
                </div>

                <div class="item">
                    <div class="box6 sbox text-center">
                        <img src="/img/live-sports-category.png" />
                        <div class="title-wrapper">
                            <h2 class="category-title">Live Sports</h2>
                        </div>
                    </div>
                </div>                
                
            </div>
        </div>
    </div>
    <div class="boxthird">
        <div class="row">
            <div class="col-md-12">
                <h2>Live Sports</h2>
            </div>
        </div>
        <div>
            <button
                class="btn"
                class:active={activeLiveSportsTab === "soccer"}
                on:click={() => (activeLiveSportsTab = "soccer")}
            >
                <img class="me-2" src="/img/soccer-ball.svg" /> SOCCER
            </button>
            <button
                class="btn"
                class:active={activeLiveSportsTab === "esports"}
                on:click={() => (activeLiveSportsTab = "esports")}
            >
                <img class="me-2" src="/img/esports.svg" /> ESPORTS
            </button>
            <button
                class="btn mobilenone"
                class:active={activeLiveSportsTab === "tennis"}
                on:click={() => (activeLiveSportsTab = "tennis")}
            >
                <img class="me-2" src="/img/tennis-ball.svg" /> TENNIS
            </button>
            <button
                class="btn mobilenone"
                class:active={activeLiveSportsTab === "basketball"}
                on:click={() => (activeLiveSportsTab = "basketball")}
            >
                <img class="me-2" src="/img/basketball.svg" /> BASKETBALL
            </button>
            <button
                class="btn mobilenone"
                class:active={activeLiveSportsTab === "rugby"}
                on:click={() => (activeLiveSportsTab = "rugby")}
            >
                <img class="me-2" src="/img/rugby-ball.svg" /> RUGBY
            </button>
            <button
                class="btn mobilenone"
                class:active={activeLiveSportsTab === "cricket"}
                on:click={() => (activeLiveSportsTab = "cricket")}
            >
                <img class="me-2" src="/img/cricket.svg" /> CRICKET
            </button>
            <a href="#" class="seeall float-end desknone">See All</a>
        </div>

        {#if activeLiveSportsTab === "soccer"}
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
                                        <img
                                            class="me-1"
                                            src="/img/Sevilla.svg"
                                        />
                                        Sevilla
                                    </span>
                                    <span class="vs">vs</span>
                                    <span class="team-name">
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
                                        <img
                                            class="me-1"
                                            src="/img/Sevilla.svg"
                                        />
                                        Sevilla
                                    </span>
                                    <span class="vs">vs</span>
                                    <span class="team-name">
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
        {:else if activeLiveSportsTab === "esports"}
            <div style="color:#fff">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis dicta aut suscipit amet porro distinctio pariatur
                exercitationem iste nostrum sed fuga error ullam obcaecati nemo
                eum, officia. Dolores, architecto, totam.
            </div>
        {:else if activeLiveSportsTab === "tennis"}
            <div style="color:#fff">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis dicta aut suscipit amet porro distinctio pariatur
                exercitationem iste nostrum sed fuga error ullam obcaecati nemo
                eum, officia. Dolores, architecto, totam.
            </div>
        {:else if activeLiveSportsTab === "basketball"}
            <div style="color:#fff">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis dicta aut suscipit amet porro distinctio pariatur
                exercitationem iste nostrum sed fuga error ullam obcaecati nemo
                eum, officia. Dolores, architecto, totam.
            </div>
        {:else if activeLiveSportsTab === "rugby"}
            <div style="color:#fff">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis dicta aut suscipit amet porro distinctio pariatur
                exercitationem iste nostrum sed fuga error ullam obcaecati nemo
                eum, officia. Dolores, architecto, totam.
            </div>
        {:else if activeLiveSportsTab === "cricket"}
            <div style="color:#fff">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis dicta aut suscipit amet porro distinctio pariatur
                exercitationem iste nostrum sed fuga error ullam obcaecati nemo
                eum, officia. Dolores, architecto, totam.
            </div>
        {/if}

        <div class="boxthird mt-4">
            <div class="row">
                <div class="col-md-12">
                    <h2>Main Sports</h2>
                </div>
            </div>

            <div class="mt-2">
                <button
                    class="btn"
                    class:active={activeMainSportsTab === "soccer"}
                    on:click={() => (activeMainSportsTab = "soccer")}
                >
                    <img class="me-2" src="/img/soccer-ball.svg" /> SOCCER
                </button>
                <button
                    class="btn"
                    class:active={activeMainSportsTab === "esports"}
                    on:click={() => (activeMainSportsTab = "esports")}
                >
                    <img class="me-2" src="/img/esports.svg" /> ESPORTS
                </button>
                <button
                    class="btn mobilenone"
                    class:active={activeMainSportsTab === "tennis"}
                    on:click={() => (activeMainSportsTab = "tennis")}
                >
                    <img class="me-2" src="/img/tennis-ball.svg" /> TENNIS
                </button>
                <button
                    class="btn mobilenone"
                    class:active={activeMainSportsTab === "basketball"}
                    on:click={() => (activeMainSportsTab = "basketball")}
                >
                    <img class="me-2" src="/img/basketball.svg" /> BASKETBALL
                </button>
                <button
                    class="btn mobilenone"
                    class:active={activeMainSportsTab === "rugby"}
                    on:click={() => (activeMainSportsTab = "rugby")}
                >
                    <img class="me-2" src="/img/rugby-ball.svg" /> RUGBY
                </button>
                <button
                    class="btn mobilenone"
                    class:active={activeMainSportsTab === "cricket"}
                    on:click={() => (activeMainSportsTab = "cricket")}
                >
                    <img class="me-2" src="/img/cricket.svg" /> CRICKET
                </button>
                <a class="seeall float-end desknone">See All</a>
            </div>

            {#if activeMainSportsTab === "soccer"}
                <div class="mt-3 bg-table">
                    <div class="row">
                        <div
                            class="col-xl-5 col-lg-5 col-md-5 col-sm-12 align-self-center"
                        >
                            <div class="row">
                                <div
                                    class="col-2 col-md-3 col-sm-3 match-date-col"
                                >
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
                                            <img
                                                class="me-1"
                                                src="/img/Sevilla.svg"
                                            />
                                            Sevilla
                                        </span>
                                        <span class="vs">vs</span>
                                        <span class="team-name">
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
                                            <th class="pb-0" colspan="5"
                                                >TOTAL</th
                                            >
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <button
                                                    class="btn tf-button btn-effect"
                                                >
                                                    <span class="boder-fade" />
                                                    <span class="effect"
                                                        >5.5</span
                                                    >
                                                </button>
                                            </td>

                                            <td>
                                                <button
                                                    class="btn tf-button btn-effect"
                                                >
                                                    <span class="boder-fade" />
                                                    <span class="effect"
                                                        >3.6</span
                                                    >
                                                </button>
                                            </td>

                                            <td>
                                                <button
                                                    class="btn tf-button btn-effect"
                                                >
                                                    <span class="boder-fade" />
                                                    <span class="effect"
                                                        >1.7</span
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
                                <div
                                    class="col-2 col-md-3 col-sm-3 match-date-col"
                                >
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
                                            <img
                                                class="me-1"
                                                src="/img/Sevilla.svg"
                                            />
                                            Sevilla
                                        </span>
                                        <span class="vs">vs</span>
                                        <span class="team-name">
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
                            <div class="table-drag tabledrag1" use:ref4>
                                <table class="table mb-0">
                                    <thead>
                                        <tr class="text-center">
                                            <th class="pb-0">1</th>
                                            <th class="pb-0">X</th>
                                            <th class="pb-0">2</th>
                                            <th class="pb-0" colspan="2"
                                                >HANDICAP</th
                                            >
                                            <th class="pb-0" colspan="5"
                                                >TOTAL</th
                                            >
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <button
                                                    class="btn tf-button btn-effect"
                                                >
                                                    <span class="boder-fade" />
                                                    <span class="effect"
                                                        >5.5</span
                                                    >
                                                </button>
                                            </td>

                                            <td>
                                                <button
                                                    class="btn tf-button btn-effect"
                                                >
                                                    <span class="boder-fade" />
                                                    <span class="effect"
                                                        >3.6</span
                                                    >
                                                </button>
                                            </td>

                                            <td>
                                                <button
                                                    class="btn tf-button btn-effect"
                                                >
                                                    <span class="boder-fade" />
                                                    <span class="effect"
                                                        >1.7</span
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
            {:else if activeMainSportsTab === "esports"}
                <div style="color:#fff">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis dicta aut suscipit amet porro distinctio
                    pariatur exercitationem iste nostrum sed fuga error ullam
                    obcaecati nemo eum, officia. Dolores, architecto, totam.
                </div>
            {:else if activeMainSportsTab === "tennis"}
                <div style="color:#fff">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis dicta aut suscipit amet porro distinctio
                    pariatur exercitationem iste nostrum sed fuga error ullam
                    obcaecati nemo eum, officia. Dolores, architecto, totam.
                </div>
            {:else if activeMainSportsTab === "basketball"}
                <div style="color:#fff">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis dicta aut suscipit amet porro distinctio
                    pariatur exercitationem iste nostrum sed fuga error ullam
                    obcaecati nemo eum, officia. Dolores, architecto, totam.
                </div>
            {:else if activeMainSportsTab === "rugby"}
                <div style="color:#fff">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis dicta aut suscipit amet porro distinctio
                    pariatur exercitationem iste nostrum sed fuga error ullam
                    obcaecati nemo eum, officia. Dolores, architecto, totam.
                </div>
            {:else if activeMainSportsTab === "cricket"}
                <div style="color:#fff">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis dicta aut suscipit amet porro distinctio
                    pariatur exercitationem iste nostrum sed fuga error ullam
                    obcaecati nemo eum, officia. Dolores, architecto, totam.
                </div>
            {/if}
        </div>

        <div class="boxsecond boxforth">
            <div class="row">
                <div class="col-md-12 categories-swiper-top swiper-top">
                    <h2 class="title">Best Slot</h2>
                    <div class="swiper-navigation">
                        <button class="swiper-prev-btn categories_oc1-prev">
                            <svg
                                style="transform:rotate(180deg)"
                                width="8"
                                height="14"
                                viewBox="0 0 8 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                ><path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M0.46967 0.46967C0.762563 0.176777 1.23744 0.176777 1.53033 0.46967L7.53033 6.46967C7.82322 6.76256 7.82322 7.23744 7.53033 7.53033L1.53033 13.5303C1.23744 13.8232 0.762563 13.8232 0.46967 13.5303C0.176777 13.2374 0.176777 12.7626 0.46967 12.4697L5.93934 7L0.46967 1.53033C0.176777 1.23744 0.176777 0.762563 0.46967 0.46967Z"
                                    fill="url(#paint0_linear_615_16097)"
                                /><defs
                                    ><linearGradient
                                        id="paint0_linear_615_16097"
                                        x1="1.66667"
                                        y1="-2.3"
                                        x2="8.01308"
                                        y2="-1.50789"
                                        gradientUnits="userSpaceOnUse"
                                        ><stop stop-color="#C6A3FF" /><stop
                                            offset="1"
                                            stop-color="#7E8BED"
                                        /></linearGradient
                                    ></defs
                                ></svg
                            >
                        </button>
                        <button class="swiper-next-btn categories_oc1-next">
                            <svg
                                width="8"
                                height="14"
                                viewBox="0 0 8 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                ><path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M0.46967 0.46967C0.762563 0.176777 1.23744 0.176777 1.53033 0.46967L7.53033 6.46967C7.82322 6.76256 7.82322 7.23744 7.53033 7.53033L1.53033 13.5303C1.23744 13.8232 0.762563 13.8232 0.46967 13.5303C0.176777 13.2374 0.176777 12.7626 0.46967 12.4697L5.93934 7L0.46967 1.53033C0.176777 1.23744 0.176777 0.762563 0.46967 0.46967Z"
                                    fill="url(#paint0_linear_615_16097)"
                                /><defs
                                    ><linearGradient
                                        id="paint0_linear_615_16097"
                                        x1="1.66667"
                                        y1="-2.3"
                                        x2="8.01308"
                                        y2="-1.50789"
                                        gradientUnits="userSpaceOnUse"
                                        ><stop stop-color="#C6A3FF" /><stop
                                            offset="1"
                                            stop-color="#7E8BED"
                                        /></linearGradient
                                    ></defs
                                ></svg
                            >
                        </button>
                    </div>
                </div>
            </div>
            <div class="oc1">
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
                            slidesPerView: 6,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div class="item">
                            <div class="box">
                                <img
                                    class="mainimg"
                                    src="/img/Rectangle-38.svg"
                                />
                                <div class="hover">
                                    <a href="#"><img src="/img/hover.svg" /></a>
                                </div>
                                <div class="content">
                                    <p>
                                        <a href="#">Tiny Gods</a>
                                        <span class="float-end"
                                            ><img
                                                src="/img/info-circle.svg"
                                            /></span
                                        >
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div class="item">
                            <div class="box">
                                <img
                                    class="mainimg"
                                    src="/img/Rectangle-39.svg"
                                />
                                <div class="hover">
                                    <a href="#"><img src="/img/hover.svg" /></a>
                                </div>
                                <div class="content">
                                    <p>
                                        <a href="#">Tiny Gods</a>
                                        <span class="float-end"
                                            ><img
                                                src="/img/info-circle.svg"
                                            /></span
                                        >
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div class="item">
                            <div class="box">
                                <img
                                    class="mainimg"
                                    src="/img/Rectangle-40.svg"
                                />
                                <div class="hover">
                                    <a href="#"><img src="/img/hover.svg" /></a>
                                </div>
                                <div class="content">
                                    <p>
                                        <a href="#">Tiny Gods</a>
                                        <span class="float-end"
                                            ><img
                                                src="/img/info-circle.svg"
                                            /></span
                                        >
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div class="item">
                            <div class="box">
                                <img
                                    class="mainimg"
                                    src="/img/Rectangle-41.svg"
                                />
                                <div class="hover">
                                    <a href="#"><img src="/img/hover.svg" /></a>
                                </div>
                                <div class="content">
                                    <p>
                                        <a href="#">Tiny Gods</a>
                                        <span class="float-end"
                                            ><img
                                                src="/img/info-circle.svg"
                                            /></span
                                        >
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div class="item">
                            <div class="box">
                                <img
                                    class="mainimg"
                                    src="/img/Rectangle-42.svg"
                                />
                                <div class="hover">
                                    <a href="#"><img src="/img/hover.svg" /></a>
                                </div>
                                <div class="content">
                                    <p>
                                        <a href="#">Tiny Gods</a>
                                        <span class="float-end"
                                            ><img
                                                src="/img/info-circle.svg"
                                            /></span
                                        >
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div class="item">
                            <div class="box">
                                <img
                                    class="mainimg"
                                    src="/img/Rectangle-38.svg"
                                />
                                <div class="hover">
                                    <a href="#"><img src="/img/hover.svg" /></a>
                                </div>
                                <div class="content">
                                    <p>
                                        <a href="#">Tiny Gods</a>
                                        <span class="float-end"
                                            ><img
                                                src="/img/info-circle.svg"
                                            /></span
                                        >
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="item">
                            <div class="box">
                                <img
                                    class="mainimg"
                                    src="/img/Rectangle-38.svg"
                                />
                                <div class="hover">
                                    <a href="#"><img src="/img/hover.svg" /></a>
                                </div>
                                <div class="content">
                                    <p>
                                        <a href="#">Tiny Gods</a>
                                        <span class="float-end"
                                            ><img
                                                src="/img/info-circle.svg"
                                            /></span
                                        >
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>

        <div class="boxsecond boxforth">
            <div class="row">
                <div class="col-md-12 categories-swiper-top swiper-top">
                    <h2 class="title">Best Slot</h2>
                    <div class="swiper-navigation">
                        <button class="swiper-prev-btn categories_oc2-prev">
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
                        <button class="swiper-next-btn categories_oc2-next">
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
            <div class="oc2">
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
                            slidesPerView: 6,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div class="item">
                            <div class="box">
                                <img
                                    class="mainimg"
                                    src="/img/Rectangle-38.svg"
                                />
                                <div class="hover">
                                    <a href="#"><img src="/img/hover.svg" /></a>
                                </div>
                                <div class="content">
                                    <p>
                                        <a href="#">Tiny Gods</a>
                                        <span class="float-end"
                                            ><img
                                                src="/img/info-circle.svg"
                                            /></span
                                        >
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div class="item">
                            <div class="box">
                                <img
                                    class="mainimg"
                                    src="/img/Rectangle-39.svg"
                                />
                                <div class="hover">
                                    <a href="#"><img src="/img/hover.svg" /></a>
                                </div>
                                <div class="content">
                                    <p>
                                        <a href="#">Tiny Gods</a>
                                        <span class="float-end"
                                            ><img
                                                src="/img/info-circle.svg"
                                            /></span
                                        >
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div class="item">
                            <div class="box">
                                <img
                                    class="mainimg"
                                    src="/img/Rectangle-40.svg"
                                />
                                <div class="hover">
                                    <a href="#"><img src="/img/hover.svg" /></a>
                                </div>
                                <div class="content">
                                    <p>
                                        <a href="#">Tiny Gods</a>
                                        <span class="float-end"
                                            ><img
                                                src="/img/info-circle.svg"
                                            /></span
                                        >
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div class="item">
                            <div class="box">
                                <img
                                    class="mainimg"
                                    src="/img/Rectangle-41.svg"
                                />
                                <div class="hover">
                                    <a href="#"><img src="/img/hover.svg" /></a>
                                </div>
                                <div class="content">
                                    <p>
                                        <a href="#">Tiny Gods</a>
                                        <span class="float-end"
                                            ><img
                                                src="/img/info-circle.svg"
                                            /></span
                                        >
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div class="item">
                            <div class="box">
                                <img
                                    class="mainimg"
                                    src="/img/Rectangle-42.svg"
                                />
                                <div class="hover">
                                    <a href="#"><img src="/img/hover.svg" /></a>
                                </div>
                                <div class="content">
                                    <p>
                                        <a href="#">Tiny Gods</a>
                                        <span class="float-end"
                                            ><img
                                                src="/img/info-circle.svg"
                                            /></span
                                        >
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div class="item">
                            <div class="box">
                                <img
                                    class="mainimg"
                                    src="/img/Rectangle-38.svg"
                                />
                                <div class="hover">
                                    <a href="#"><img src="/img/hover.svg" /></a>
                                </div>
                                <div class="content">
                                    <p>
                                        <a href="#">Tiny Gods</a>
                                        <span class="float-end"
                                            ><img
                                                src="/img/info-circle.svg"
                                            /></span
                                        >
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
        <div class="boxsecond boxfive">
            <div class="row">
                <div class="col-md-12">
                    <h2 class="mobilenone">
                        Recent Bet Deposits & Withdrawal History
                    </h2>
                    <h2 class="desknone">Latest Bets & Withdrawals</h2>
                </div>
            </div>
            <div class="tab">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button
                            class="nav-link active"
                            class:active={activeRecentTab === "bets"}
                            on:click={() => (activeRecentTab = "bets")}
                            >LATEST BETS</button
                        >
                    </li>
                    <li class="nav-item" role="presentation">
                        <button
                            class="nav-link"
                            class:active={activeRecentTab === "deposits"}
                            on:click={() => (activeRecentTab = "deposits")}
                            >Recent Deposits</button
                        >
                    </li>
                    <li class="nav-item" role="presentation">
                        <button
                            class="nav-link"
                            class:active={activeRecentTab === "withdrawals1"}
                            on:click={() => (activeRecentTab = "withdrawals")}
                            >Recent Withdrawals</button
                        >
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    {#if activeRecentTab === "bets"}
                        <div class="tab-pane fade show active">
                            <div class="latest-table-wrapper">
                                <table class="table latest-bets-table">
                                    <thead class="table-head">
                                        <tr>
                                            <th width="25%">Game</th>
                                            <th width="25%">Player</th>
                                            <th class="mobilenone" width="20%"
                                                >Bet Amount</th
                                            >
                                            <th width="15%">Multiplier</th>
                                            <th width="15%" class="text-end"
                                                >Profit Amount</th
                                            >
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <img
                                                    class="me-1"
                                                    src="/img/table-avatar1.svg"
                                                /> Ring of fortune
                                            </td>
                                            <td class="text-white"
                                                >bountyhunter31</td
                                            >
                                            <td class="text-white mobilenone">
                                                104.54 <img
                                                    class="ms-1"
                                                    src="/img/btc.svg"
                                                />
                                            </td>
                                            <td>0.001x</td>
                                            <td class="text-danger text-end">
                                                - 21.567 <img
                                                    class="ms-1"
                                                    src="/img/btc.svg"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img
                                                    class="me-1"
                                                    src="/img/poker-chips.svg"
                                                /> Ring of fortune
                                            </td>
                                            <td class="text-white">unknown</td>
                                            <td class="text-white mobilenone">
                                                104.54 <img
                                                    class="ms-1"
                                                    src="/img/hot.svg"
                                                />
                                            </td>
                                            <td>0.001x</td>
                                            <td class="text-success text-end">
                                                + 21.567 <img
                                                    class="ms-1"
                                                    src="/img/hot.svg"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img
                                                    class="me-1"
                                                    src="/img/seven.svg"
                                                /> Ring of fortune
                                            </td>
                                            <td class="text-white">wdwdw21</td>
                                            <td class="text-white mobilenone">
                                                104.54 <img
                                                    class="ms-1"
                                                    src="/img/mft.svg"
                                                />
                                            </td>
                                            <td>0.001x</td>
                                            <td class="text-danger text-end">
                                                - 21.567 <img
                                                    class="ms-1"
                                                    src="/img/mft.svg"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img
                                                    class="me-1"
                                                    src="/img/table-avatar1.svg"
                                                /> Ring of fortune
                                            </td>
                                            <td class="text-white">sharlen12</td>
                                            <td class="text-white mobilenone">
                                                104.54 <img
                                                    class="ms-1"
                                                    src="/img/eth.svg"
                                                />
                                            </td>
                                            <td>0.001x</td>
                                            <td class="text-success text-end">
                                                + 21.567 <img
                                                    class="ms-1"
                                                    src="/img/eth.svg"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img
                                                    class="me-1"
                                                    src="/img/dice.svg"
                                                />
                                                Ring of fortune
                                            </td>
                                            <td class="text-white">BranyW67</td>
                                            <td class="text-white mobilenone">
                                                104.54 <img
                                                    class="ms-1"
                                                    src="/img/trx.svg"
                                                />
                                            </td>
                                            <td>0.001x</td>
                                            <td class="text-danger text-end">
                                                - 21.567 <img
                                                    class="ms-1"
                                                    src="/img/trx.svg"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img
                                                    class="me-1"
                                                    src="/img/poker-chips.svg"
                                                /> Ring of fortune
                                            </td>
                                            <td class="text-white">unknown</td>
                                            <td class="text-white mobilenone">
                                                104.54 <img
                                                    class="ms-1"
                                                    src="/img/hot.svg"
                                                />
                                            </td>
                                            <td>0.001x</td>
                                            <td class="text-danger text-end">
                                                - 21.567 <img
                                                    class="ms-1"
                                                    src="/img/hot.svg"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img
                                                    class="me-1"
                                                    src="/img/seven.svg"
                                                /> Ring of fortune
                                            </td>
                                            <td class="text-white">wdwdw21</td>
                                            <td class="text-white mobilenone">
                                                104.54 <img
                                                    class="ms-1"
                                                    src="/img/mft.svg"
                                                />
                                            </td>
                                            <td>0.001x</td>
                                            <td class="text-success text-end">
                                                - 21.567 <img
                                                    class="ms-1"
                                                    src="/img/mft.svg"
                                                />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>        

                            <div class="text-center">
                                <button class="btn btn-showmore"
                                    ><span>Show more</span>
                                    <img
                                        class="mobilenone"
                                        src="/img/Arrow-Down_menu.svg"
                                    />
                                </button>
                            </div>
                        </div>
                    {:else if activeRecentTab === "deposits"}
                        <div class="tab-pane fade show active">
                            <table class="table latest-bets-table">
                                <thead class="table-head">
                                    <tr>
                                        <th width="25%">Game2</th>
                                        <th width="25%">Player</th>
                                        <th class="mobilenone" width="20%"
                                            >Bet Amount</th
                                        >
                                        <th width="15%">Multiplier</th>
                                        <th width="15%" class="text-end"
                                            >Profit Amount</th
                                        >
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img
                                                class="me-1"
                                                src="/img/table-avatar1.svg"
                                            /> Ring of fortune
                                        </td>
                                        <td class="text-white"
                                            >bountyhunter31</td
                                        >
                                        <td class="text-white mobilenone">
                                            104.54 <img
                                                class="ms-1"
                                                src="/img/btc.svg"
                                            />
                                        </td>
                                        <td>0.001x</td>
                                        <td class="text-danger text-end">
                                            - 21.567 <img
                                                class="ms-1"
                                                src="/img/btc.svg"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img
                                                class="me-1"
                                                src="/img/poker-chips.svg"
                                            /> Ring of fortune
                                        </td>
                                        <td class="text-white">unknown</td>
                                        <td class="text-white mobilenone">
                                            104.54 <img
                                                class="ms-1"
                                                src="/img/hot.svg"
                                            />
                                        </td>
                                        <td>0.001x</td>
                                        <td class="text-success text-end">
                                            + 21.567 <img
                                                class="ms-1"
                                                src="/img/hot.svg"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img
                                                class="me-1"
                                                src="/img/seven.svg"
                                            /> Ring of fortune
                                        </td>
                                        <td class="text-white">wdwdw21</td>
                                        <td class="text-white mobilenone">
                                            104.54 <img
                                                class="ms-1"
                                                src="/img/mft.svg"
                                            />
                                        </td>
                                        <td>0.001x</td>
                                        <td class="text-danger text-end">
                                            - 21.567 <img
                                                class="ms-1"
                                                src="/img/mft.svg"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img
                                                class="me-1"
                                                src="/img/table-avatar1.svg"
                                            /> Ring of fortune
                                        </td>
                                        <td class="text-white">sharlen12</td>
                                        <td class="text-white mobilenone">
                                            104.54 <img
                                                class="ms-1"
                                                src="/img/eth.svg"
                                            />
                                        </td>
                                        <td>0.001x</td>
                                        <td class="text-success text-end">
                                            + 21.567 <img
                                                class="ms-1"
                                                src="/img/eth.svg"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img
                                                class="me-1"
                                                src="/img/dice.svg"
                                            />
                                            Ring of fortune
                                        </td>
                                        <td class="text-white">BranyW67</td>
                                        <td class="text-white mobilenone">
                                            104.54 <img
                                                class="ms-1"
                                                src="/img/trx.svg"
                                            />
                                        </td>
                                        <td>0.001x</td>
                                        <td class="text-danger text-end">
                                            - 21.567 <img
                                                class="ms-1"
                                                src="/img/trx.svg"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img
                                                class="me-1"
                                                src="/img/poker-chips.svg"
                                            /> Ring of fortune
                                        </td>
                                        <td class="text-white">unknown</td>
                                        <td class="text-white mobilenone">
                                            104.54 <img
                                                class="ms-1"
                                                src="/img/hot.svg"
                                            />
                                        </td>
                                        <td>0.001x</td>
                                        <td class="text-danger text-end">
                                            - 21.567 <img
                                                class="ms-1"
                                                src="/img/hot.svg"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img
                                                class="me-1"
                                                src="/img/seven.svg"
                                            /> Ring of fortune
                                        </td>
                                        <td class="text-white">wdwdw21</td>
                                        <td class="text-white mobilenone">
                                            104.54 <img
                                                class="ms-1"
                                                src="/img/mft.svg"
                                            />
                                        </td>
                                        <td>0.001x</td>
                                        <td class="text-success text-end">
                                            - 21.567 <img
                                                class="ms-1"
                                                src="/img/mft.svg"
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <div class="text-center">
                                <button class="btn btn-showmore"
                                    ><span>Show more</span>
                                    <img
                                        class="mobilenone"
                                        src="/img/Arrow-Down_menu.svg"
                                    />
                                </button>
                            </div>
                        </div>
                    {:else if activeRecentTab === "withdrawals"}
                        <div class="tab-pane fade show active">
                            <table class="table latest-bets-table">
                                <thead class="table-head">
                                    <tr>
                                        <th width="25%">Game3</th>
                                        <th width="25%">Player</th>
                                        <th class="mobilenone" width="20%"
                                            >Bet Amount</th
                                        >
                                        <th width="15%">Multiplier</th>
                                        <th width="15%" class="text-end"
                                            >Profit Amount</th
                                        >
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img
                                                class="me-1"
                                                src="/img/table-avatar1.svg"
                                            /> Ring of fortune
                                        </td>
                                        <td class="text-white"
                                            >bountyhunter31</td
                                        >
                                        <td class="text-white mobilenone">
                                            104.54 <img
                                                class="ms-1"
                                                src="/img/btc.svg"
                                            />
                                        </td>
                                        <td>0.001x</td>
                                        <td class="text-danger text-end">
                                            - 21.567 <img
                                                class="ms-1"
                                                src="/img/btc.svg"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img
                                                class="me-1"
                                                src="/img/poker-chips.svg"
                                            /> Ring of fortune
                                        </td>
                                        <td class="text-white">unknown</td>
                                        <td class="text-white mobilenone">
                                            104.54 <img
                                                class="ms-1"
                                                src="/img/hot.svg"
                                            />
                                        </td>
                                        <td>0.001x</td>
                                        <td class="text-success text-end">
                                            + 21.567 <img
                                                class="ms-1"
                                                src="/img/hot.svg"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img
                                                class="me-1"
                                                src="/img/seven.svg"
                                            /> Ring of fortune
                                        </td>
                                        <td class="text-white">wdwdw21</td>
                                        <td class="text-white mobilenone">
                                            104.54 <img
                                                class="ms-1"
                                                src="/img/mft.svg"
                                            />
                                        </td>
                                        <td>0.001x</td>
                                        <td class="text-danger text-end">
                                            - 21.567 <img
                                                class="ms-1"
                                                src="/img/mft.svg"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img
                                                class="me-1"
                                                src="/img/table-avatar1.svg"
                                            /> Ring of fortune
                                        </td>
                                        <td class="text-white">sharlen12</td>
                                        <td class="text-white mobilenone">
                                            104.54 <img
                                                class="ms-1"
                                                src="/img/eth.svg"
                                            />
                                        </td>
                                        <td>0.001x</td>
                                        <td class="text-success text-end">
                                            + 21.567 <img
                                                class="ms-1"
                                                src="/img/eth.svg"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img
                                                class="me-1"
                                                src="/img/dice.svg"
                                            />
                                            Ring of fortune
                                        </td>
                                        <td class="text-white">BranyW67</td>
                                        <td class="text-white mobilenone">
                                            104.54 <img
                                                class="ms-1"
                                                src="/img/trx.svg"
                                            />
                                        </td>
                                        <td>0.001x</td>
                                        <td class="text-danger text-end">
                                            - 21.567 <img
                                                class="ms-1"
                                                src="/img/trx.svg"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img
                                                class="me-1"
                                                src="/img/poker-chips.svg"
                                            /> Ring of fortune
                                        </td>
                                        <td class="text-white">unknown</td>
                                        <td class="text-white mobilenone">
                                            104.54 <img
                                                class="ms-1"
                                                src="/img/hot.svg"
                                            />
                                        </td>
                                        <td>0.001x</td>
                                        <td class="text-danger text-end">
                                            - 21.567 <img
                                                class="ms-1"
                                                src="/img/hot.svg"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img
                                                class="me-1"
                                                src="/img/seven.svg"
                                            /> Ring of fortune
                                        </td>
                                        <td class="text-white">wdwdw21</td>
                                        <td class="text-white mobilenone">
                                            104.54 <img
                                                class="ms-1"
                                                src="/img/mft.svg"
                                            />
                                        </td>
                                        <td>0.001x</td>
                                        <td class="text-success text-end">
                                            - 21.567 <img
                                                class="ms-1"
                                                src="/img/mft.svg"
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <div class="text-center">
                                <button class="btn btn-showmore"
                                    ><span>Show more</span>
                                    <img
                                        class="mobilenone"
                                        src="/img/Arrow-Down_menu.svg"
                                    />
                                </button>
                            </div>
                        </div>
                    {/if}
                </div>
            </div>
            <div class="box mobilenone">
                <div class="row">
                    <div class="col-md-5">
                        <h5>SIGN UP & GET DEPOSIT BONUS</h5>
                        <h1>UP TO <span>300%</span></h1>
                        <p class="mb-0">
                            Lorem ipsum dolor sit amet consectetur. Tristique in
                            cursus mass
                        </p>
                    </div>
                    <div class="col-md-7">
                        <img class="img" src="/img/Group-36987.png" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
