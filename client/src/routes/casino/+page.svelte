<script>
  import { onMount } from "svelte";
  import { getCasinoList } from '../../apis/casino/GetCasinoList';
//   let casinoList = [
//     {
//         "idx": 1,
//         "game_id": "onokyd4wn7uekbjx",
//         "title": "Korean Speed Baccarat B",
//         "provider": "QX",
//         "thumbnail": "https://ap-south-1.linodeobjects.com/cdn.honorlink.org/evolution/Korean_Speed_Baccarat_B.png",
//         "vendor": "evolution",
//         "type": "baccarat",
//         "is_open": "1",
//         "reg_date": "2023-07-14T13:55:56.000Z"
//     },
//     {
//         "idx": 2,
//         "game_id": "oytmvb9m1zysmc44",
//         "title": "Baccarat A",
//         "provider": "QX",
//         "thumbnail": "https://ap-south-1.linodeobjects.com/cdn.honorlink.org/evolution/Baccarat_A.png",
//         "vendor": "evolution",
//         "type": "baccarat",
//         "is_open": "1",
//         "reg_date": "2023-07-14T13:55:57.000Z"
//     },
//     {
//         "idx": 3,
//         "game_id": "60i0lcfx5wkkv3sy",
//         "title": "Baccarat B",
//         "provider": "QX",
//         "thumbnail": "https://ap-south-1.linodeobjects.com/cdn.honorlink.org/evolution/Baccarat_B.png",
//         "vendor": "evolution",
//         "type": "baccarat",
//         "is_open": "1",
//         "reg_date": "2023-07-14T13:55:57.000Z"
//     },
//     {
//         "idx": 4,
//         "game_id": "ndgvs3tqhfuaadyg",
//         "title": "Baccarat C",
//         "provider": "QX",
//         "thumbnail": "https://ap-south-1.linodeobjects.com/cdn.honorlink.org/evolution/Baccarat_C.png",
//         "vendor": "evolution",
//         "type": "baccarat",
//         "is_open": "1",
//         "reg_date": "2023-07-14T13:55:57.000Z"
//     },
//     {
//         "idx": 5,
//         "game_id": "k2oswnib7jjaaznw",
//         "title": "Baccarat Control Squeeze",
//         "provider": "QX",
//         "thumbnail": "https://ap-south-1.linodeobjects.com/cdn.honorlink.org/evolution/Baccarat_Control_Squeeze.png",
//         "vendor": "evolution",
//         "type": "baccarat",
//         "is_open": "1",
//         "reg_date": "2023-07-14T13:55:57.000Z"
//     },
//     {
//         "idx": 6,
//         "game_id": "zixzea8nrf1675oh",
//         "title": "Baccarat Squeeze",
//         "provider": "QX",
//         "thumbnail": "https://ap-south-1.linodeobjects.com/cdn.honorlink.org/evolution/Baccarat_Squeeze.png",
//         "vendor": "evolution",
//         "type": "baccarat",
//         "is_open": "1",
//         "reg_date": "2023-07-14T13:55:57.000Z"
//     },
//     {
//         "idx": 7,
//         "game_id": "LightningBac0001",
//         "title": "Lightning Baccarat",
//         "provider": "QX",
//         "thumbnail": "https://ap-south-1.linodeobjects.com/cdn.honorlink.org/evolution/Lightning_Baccarat.png",
//         "vendor": "evolution",
//         "type": "baccarat",
//         "is_open": "1",
//         "reg_date": "2023-07-14T13:55:57.000Z"
//     },
//     {
//         "idx": 8,
//         "game_id": "NoCommBac0000001",
//         "title": "No Commission Baccarat",
//         "provider": "QX",
//         "thumbnail": "https://ap-south-1.linodeobjects.com/cdn.honorlink.org/evolution/No_Commission_Baccarat.png",
//         "vendor": "evolution",
//         "type": "baccarat",
//         "is_open": "1",
//         "reg_date": "2023-07-14T13:55:57.000Z"
//     },
//     {
//         "idx": 9,
//         "game_id": "ndgv76kehfuaaeec",
//         "title": "No Commission Speed Baccarat A",
//         "provider": "QX",
//         "thumbnail": "https://ap-south-1.linodeobjects.com/cdn.honorlink.org/evolution/No_Commission_Speed_Baccarat_A.png",
//         "vendor": "evolution",
//         "type": "baccarat",
//         "is_open": "1",
//         "reg_date": "2023-07-14T13:55:57.000Z"
//     },
//     {
//         "idx": 10,
//         "game_id": "ocye5hmxbsoyrcii",
//         "title": "No Commission Speed Baccarat B",
//         "provider": "QX",
//         "thumbnail": "https://ap-south-1.linodeobjects.com/cdn.honorlink.org/evolution/No_Commission_Speed_Baccarat_B.png",
//         "vendor": "evolution",
//         "type": "baccarat",
//         "is_open": "1",
//         "reg_date": "2023-07-14T13:55:57.000Z"
//     },
//     {
//         "idx": 11,
//         "game_id": "ovu5h6b3ujb4y53w",
//         "title": "No Commission Speed Baccarat C",
//         "provider": "QX",
//         "thumbnail": "https://ap-south-1.linodeobjects.com/cdn.honorlink.org/evolution/No_Commission_Speed_Baccarat_C.png",
//         "vendor": "evolution",
//         "type": "baccarat",
//         "is_open": "1",
//         "reg_date": "2023-07-14T13:55:57.000Z"
//     },
//     {
//         "idx": 12,
//         "game_id": "SalPrivBac000001",
//         "title": "Salon Privé Baccarat A",
//         "provider": "QX",
//         "thumbnail": "https://ap-south-1.linodeobjects.com/cdn.honorlink.org/evolution/Salon_Privé_Baccarat_A.png",
//         "vendor": "evolution",
//         "type": "baccarat",
//         "is_open": "1",
//         "reg_date": "2023-07-14T13:55:57.000Z"
//     },
//     {
//         "idx": 13,
//         "game_id": "n7ltqx5j25sr7xbe",
//         "title": "Salon Privé Baccarat B",
//         "provider": "QX",
//         "thumbnail": "https://ap-south-1.linodeobjects.com/cdn.honorlink.org/evolution/Salon_Privé_Baccarat_B.png",
//         "vendor": "evolution",
//         "type": "baccarat",
//         "is_open": "1",
//         "reg_date": "2023-07-14T13:55:57.000Z"
//     },
//     {
//         "idx": 14,
//         "game_id": "ok37hvy3g7bofp4l",
//         "title": "Salon Privé Baccarat C",
//         "provider": "QX",
//         "thumbnail": "https://ap-south-1.linodeobjects.com/cdn.honorlink.org/evolution/Salon_Privé_Baccarat_C.png",
//         "vendor": "evolution",
//         "type": "baccarat",
//         "is_open": "1",
//         "reg_date": "2023-07-14T13:55:57.000Z"
//     },
//     {
//         "idx": 15,
//         "game_id": "SalPrivBac000004",
//         "title": "Salon Privé Baccarat D",
//         "provider": "QX",
//         "thumbnail": "https://ap-south-1.linodeobjects.com/cdn.honorlink.org/evolution/Salon_Privé_Baccarat_D.png",
//         "vendor": "evolution",
//         "type": "baccarat",
//         "is_open": "1",
//         "reg_date": "2023-07-14T13:55:57.000Z"
//     },
//     {
//         "idx": 16,
//         "game_id": "pctte34dt6bqbtps",
//         "title": "Salon Privé Baccarat E",
//         "provider": "QX",
//         "thumbnail": "https://ap-south-1.linodeobjects.com/cdn.honorlink.org/evolution/Salon_Privé_Baccarat_E.png",
//         "vendor": "evolution",
//         "type": "baccarat",
//         "is_open": "1",
//         "reg_date": "2023-07-14T13:55:57.000Z"
//     },
//     {
//         "idx": 17,
//         "game_id": "leqhceumaq6qfoug",
//         "title": "Speed Baccarat A",
//         "provider": "QX",
//         "thumbnail": "https://ap-south-1.linodeobjects.com/cdn.honorlink.org/evolution/Speed_Baccarat_A.png",
//         "vendor": "evolution",
//         "type": "baccarat",
//         "is_open": "1",
//         "reg_date": "2023-07-14T13:55:57.000Z"
//     },
//     {
//         "idx": 18,
//         "game_id": "lv2kzclunt2qnxo5",
//         "title": "Speed Baccarat B",
//         "provider": "QX",
//         "thumbnail": "https://ap-south-1.linodeobjects.com/cdn.honorlink.org/evolution/Speed_Baccarat_B.png",
//         "vendor": "evolution",
//         "type": "baccarat",
//         "is_open": "1",
//         "reg_date": "2023-07-14T13:55:57.000Z"
//     },
//     {
//         "idx": 19,
//         "game_id": "ndgvwvgthfuaad3q",
//         "title": "Speed Baccarat C",
//         "provider": "QX",
//         "thumbnail": "https://ap-south-1.linodeobjects.com/cdn.honorlink.org/evolution/Speed_Baccarat_C.png",
//         "vendor": "evolution",
//         "type": "baccarat",
//         "is_open": "1",
//         "reg_date": "2023-07-14T13:55:57.000Z"
//     },
//     {
//         "idx": 20,
//         "game_id": "ndgvz5mlhfuaad6e",
//         "title": "Speed Baccarat D",
//         "provider": "QX",
//         "thumbnail": "https://ap-south-1.linodeobjects.com/cdn.honorlink.org/evolution/Speed_Baccarat_D.png",
//         "vendor": "evolution",
//         "type": "baccarat",
//         "is_open": "1",
//         "reg_date": "2023-07-14T13:55:57.000Z"
//     },
//     {
//         "idx": 21,
//         "game_id": "ndgv45bghfuaaebf",
//         "title": "Speed Baccarat E",
//         "provider": "QX",
//         "thumbnail": "https://ap-south-1.linodeobjects.com/cdn.honorlink.org/evolution/Speed_Baccarat_E.png",
//         "vendor": "evolution",
//         "type": "baccarat",
//         "is_open": "1",
//         "reg_date": "2023-07-14T13:55:57.000Z"
//     },
//     {
//         "idx": 22,
//         "game_id": "nmwde3fd7hvqhq43",
//         "title": "Speed Baccarat F",
//         "provider": "QX",
//         "thumbnail": "https://ap-south-1.linodeobjects.com/cdn.honorlink.org/evolution/Speed_Baccarat_F.png",
//         "vendor": "evolution",
//         "type": "baccarat",
//         "is_open": "1",
//         "reg_date": "2023-07-14T13:55:57.000Z"
//     },
//     {
//         "idx": 23,
//         "game_id": "nmwdzhbg7hvqh6a7",
//         "title": "Speed Baccarat G",
//         "provider": "QX",
//         "thumbnail": "https://ap-south-1.linodeobjects.com/cdn.honorlink.org/evolution/Speed_Baccarat_G.png",
//         "vendor": "evolution",
//         "type": "baccarat",
//         "is_open": "1",
//         "reg_date": "2023-07-14T13:55:57.000Z"
//     },
//     {
//         "idx": 24,
//         "game_id": "nxpj4wumgclak2lx",
//         "title": "Speed Baccarat H",
//         "provider": "QX",
//         "thumbnail": "https://ap-south-1.linodeobjects.com/cdn.honorlink.org/evolution/Speed_Baccarat_H.png",
//         "vendor": "evolution",
//         "type": "baccarat",
//         "is_open": "1",
//         "reg_date": "2023-07-14T13:55:57.000Z"
//     },
//     {
//         "idx": 25,
//         "game_id": "nxpkul2hgclallno",
//         "title": "Speed Baccarat I",
//         "provider": "QX",
//         "thumbnail": "https://ap-south-1.linodeobjects.com/cdn.honorlink.org/evolution/Speed_Baccarat_I.png",
//         "vendor": "evolution",
//         "type": "baccarat",
//         "is_open": "1",
//         "reg_date": "2023-07-14T13:55:57.000Z"
//     },
//     {
//         "idx": 26,
//         "game_id": "obj64qcnqfunjelj",
//         "title": "Speed Baccarat J",
//         "provider": "QX",
//         "thumbnail": "https://ap-south-1.linodeobjects.com/cdn.honorlink.org/evolution/Speed_Baccarat_J.png",
//         "vendor": "evolution",
//         "type": "baccarat",
//         "is_open": "1",
//         "reg_date": "2023-07-14T13:55:57.000Z"
//     },
//     {
//         "idx": 27,
//         "game_id": "ocye2ju2bsoyq6vv",
//         "title": "Speed Baccarat K",
//         "provider": "QX",
//         "thumbnail": "https://ap-south-1.linodeobjects.com/cdn.honorlink.org/evolution/Speed_Baccarat_K.png",
//         "vendor": "evolution",
//         "type": "baccarat",
//         "is_open": "1",
//         "reg_date": "2023-07-14T13:55:57.000Z"
//     },
//     {
//         "idx": 28,
//         "game_id": "ovu5cwp54ccmymck",
//         "title": "Speed Baccarat L",
//         "provider": "QX",
//         "thumbnail": "https://ap-south-1.linodeobjects.com/cdn.honorlink.org/evolution/Speed_Baccarat_L.png",
//         "vendor": "evolution",
//         "type": "baccarat",
//         "is_open": "1",
//         "reg_date": "2023-07-14T13:55:57.000Z"
//     },
//     {
//         "idx": 29,
//         "game_id": "ovu5dsly4ccmynil",
//         "title": "Speed Baccarat M",
//         "provider": "QX",
//         "thumbnail": "https://ap-south-1.linodeobjects.com/cdn.honorlink.org/evolution/Speed_Baccarat_M.png",
//         "vendor": "evolution",
//         "type": "baccarat",
//         "is_open": "1",
//         "reg_date": "2023-07-14T13:55:57.000Z"
//     },
//     {
//         "idx": 30,
//         "game_id": "ovu5eja74ccmyoiq",
//         "title": "Speed Baccarat N",
//         "provider": "QX",
//         "thumbnail": "https://ap-south-1.linodeobjects.com/cdn.honorlink.org/evolution/Speed_Baccarat_N.png",
//         "vendor": "evolution",
//         "type": "baccarat",
//         "is_open": "1",
//         "reg_date": "2023-07-14T13:55:57.000Z"
//     }
// ];
  let casinoList = [];
  async function getList() {
    const res =  await getCasinoList({});
    casinoList = res.data.list;
  }

  onMount(async () => {
    await getList();
  });
</script>

<div class="container">
  <form action="">
    <div class="input-group mb-3 main-search-bar">
      <input
        type="search"
        class="form-control"
        placeholder="Search here..."
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
      <button type="submit" class="input-group-text" id="basic-addon1"
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
                <span class="float-end"
                  ><img src="/img/info-circle.svg" /></span
                >
              </p>
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
