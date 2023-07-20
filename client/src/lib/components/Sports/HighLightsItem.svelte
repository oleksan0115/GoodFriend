<script>
  import { useConveyer } from "@egjs/svelte-conveyer";
  const { ref: ref1 } = useConveyer();
</script>

<div class="mt-3 bg-table p-10">
  <div class="row">
    <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12 align-self-center">
      <div class="row">
        <div class="col-2 col-md-3 col-sm-3 match-date-col">
          <div class="border-right text-center">
            <h5 class="mb-3">15:31</h5>
            <h6 class="mb-0">27 Feb</h6>
          </div>
        </div>
        <div class="col-10 col-md-9 col-sm-9 pe-0">
          <h4 class="mb-3">
            <img class="me-1" src="/img/language1.svg" /> ITALY - PREMIER LEAGUE
            >
          </h4>
          <div class="mb-0 team-details">
            <span class="team-name">
              <img class="me-1" src="/img/Sevilla.svg" />
              Sevilla
            </span>
            <span class="vs px-10">vs</span>
            <span class="team-name">
              <img class="me-1" src="/img/Atletico-Madrid.svg" />
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
              <th class="pb-0" colspan="2">HANDICAP</th>
              <th class="pb-0" colspan="5">TOTAL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <button class="btn tf-button btn-effect">
                  <span class="boder-fade" />
                  <span class="effect">5.5</span>
                </button>
              </td>

              <td>
                <button class="btn tf-button btn-effect">
                  <span class="boder-fade" />
                  <span class="effect">3.6</span>
                </button>
              </td>

              <td>
                <button class="btn tf-button btn-effect">
                  <span class="boder-fade" />
                  <span class="effect">1.7</span>
                </button>
              </td>

              <td>
                <button class="btn tf-button btn-effect">
                  <span class="boder-fade" />

                  <span class="effect"
                    ><span class="text-success text">+0.75</span><br />1.9</span
                  >
                </button>
              </td>
              <td>
                <button class="btn tf-button btn-effect">
                  <span class="boder-fade" />
                  <span class="effect"
                    ><span class="text-danger text">-0.75</span><br />1.7</span
                  >
                </button>
              </td>
              <td>
                <button class="btn btngreen tf-button btn-effect">
                  <span class="boder-fade" />

                  <span class="effect"
                    ><span class="text-dark text">2.25</span><br />2.0</span
                  >
                </button>
              </td>
              <td>
                <button class="btn btnred tf-button btn-effect"
                  ><span class="boder-fade" />
                  <span class="effect"
                    ><span class="text-dark text">2.25</span><br />1.8</span
                  >
                </button>
              </td>
              <td>
                <button class="btn tf-button btn-effect"
                  ><span class="boder-fade" />
                  <span class="effect"
                    ><span class="text-dark text">2.25</span><br />1.8</span
                  >
                </button>
              </td>
              <td>
                <button class="btn tf-button btn-effect"
                  ><span class="boder-fade" />
                  <span class="effect"
                    ><span class="text-dark text">2.25</span><br />1.8</span
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
