import { c as create_ssr_component, v as validate_component } from './handler-6e9bbb03.js';
import { u as useConveyer } from './conveyer.esm-eafb69f8.js';

const HighLightsItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  useConveyer();
  return `<div class="mt-3 bg-table"><div class="row"><div class="col-xl-5 col-lg-5 col-md-5 col-sm-12 align-self-center"><div class="row"><div class="col-2 col-md-3 col-sm-3 match-date-col"><div class="border-right text-center"><h5 class="mb-3">15:31</h5>
											<h6 class="mb-0">27 Feb</h6></div></div>
							<div class="col-10 col-md-9 col-sm-9 pe-0"><h4 class="mb-3"><img class="me-1" src="/img/language1.svg"> ITALY - PREMIER LEAGUE &gt;
									</h4>
									<div class="mb-0 team-details"><span class="team-name"><img class="me-1" src="/img/Sevilla.svg">
													Sevilla
											</span>
											<span class="vs">vs</span>
											<span class="team-name"><img class="me-1" src="/img/Atletico-Madrid.svg">
													Atletico Madrid
											</span></div></div></div></div>

        <div class="col-xl-7 col-lg-7 col-md-7 col-sm-12"><div class="table-drag tabledrag1"><table class="table mb-0"><thead><tr class="text-center"><th class="pb-0">1</th>
                            <th class="pb-0">X</th>
                            <th class="pb-0">2</th>
                            <th class="pb-0" colspan="2">HANDICAP</th>
                            <th class="pb-0" colspan="5">TOTAL</th></tr></thead>
                    <tbody><tr><td><button class="btn tf-button btn-effect"><span class="boder-fade"></span>
                                    <span class="effect">5.5</span></button></td>

                            <td><button class="btn tf-button btn-effect"><span class="boder-fade"></span>
                                    <span class="effect">3.6</span></button></td>

                            <td><button class="btn tf-button btn-effect"><span class="boder-fade"></span>
                                    <span class="effect">1.7</span></button></td>

                            <td><button class="btn tf-button btn-effect"><span class="boder-fade"></span>

                                    <span class="effect"><span class="text-success text">+0.75</span><br>1.9</span></button></td>
                            <td><button class="btn tf-button btn-effect"><span class="boder-fade"></span>
                                    <span class="effect"><span class="text-danger text">-0.75</span><br>1.7</span></button></td>
                            <td><button class="btn btngreen tf-button btn-effect"><span class="boder-fade"></span>

                                    <span class="effect"><span class="text-dark text">2.25</span><br>2.0</span></button></td>
                            <td><button class="btn btnred tf-button btn-effect"><span class="boder-fade"></span>
                                    <span class="effect"><span class="text-dark text">2.25</span><br>1.8</span></button></td>
                            <td><button class="btn tf-button btn-effect"><span class="boder-fade"></span>
                                    <span class="effect"><span class="text-dark text">2.25</span><br>1.8</span></button></td>
                            <td><button class="btn tf-button btn-effect"><span class="boder-fade"></span>
                                    <span class="effect"><span class="text-dark text">2.25</span><br>1.8</span></button></td></tr></tbody></table></div></div></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="container"><div class="mobilenone"><nav aria-label="breadcrumb"><ol class="breadcrumb"><li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">Sports</li></ol></nav></div>

  <div class="sportb desknone favourites"><div class="row mb-3 mt-3"><div class="col-2 pe-0"><button type="button" class="btn btn-search w-100"><img src="/img/Group-48.svg"></button></div>
      <div class="col-10 ps-0"><div class="form-outline"><input type="search" id="form1" class="form-control w-100" placeholder="Search"></div></div></div>
    <div class="boxthird desknone table-drag tabledrag1"><div class="sportb-btn-wrapper"><button class="btn"><img class="me-1" src="/img/soccer-ball.svg"> Sports A-Z
            </button>
            <button class="btn"><img class="me-1" src="/img/esports.svg"> Favorites
            </button>
            <button class="btn"><img class="me-1" src="/img/esports.svg"> Payback
            </button>
            <button class="btn"><img class="me-1" src="/img/esports.svg"> Payback
            </button>
            <button class="btn"><img class="me-1" src="/img/esports.svg"> Payback
            </button></div></div></div>
  <div class="sports"><div class="box"><div class="sports_img"><img class="w-100 main mobilenone" src="/img/Banner_Football.svg">
        <img class="w-100 desknone" src="/img/Banner_Football-1.svg">
        
        <div class="text-content"><h1>Soccer Order</h1>
          <a href="#" class="hightlight me-5">Hightlights</a>
          <a href="#" class="me-5">Live</a>
          <a href="sports/soccer/leagues" class="me-5">Leagues</a></div></div>
      <div class="content pt-1"></div></div>
    <div class="boxthird mt-4 mt-50"><div class="row"><div class="col-md-12"><h2>Hightlights</h2></div></div>


    ${validate_component(HighLightsItem, "HighLightsItem").$$render($$result, {}, {}, {})}

    ${validate_component(HighLightsItem, "HighLightsItem").$$render($$result, {}, {}, {})}
    
    ${validate_component(HighLightsItem, "HighLightsItem").$$render($$result, {}, {}, {})}</div></div>
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-ce479509.js.map
