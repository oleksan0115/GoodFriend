<script>

function toggleSidebar() {
    if(!window.document.body.classList.contains('sidebar-tight')) {
        window.document.body.classList.add('sidebar-tight')
        window.document.body.classList.remove('sidebar-wide')

    } else {
        window.document.body.classList.remove('sidebar-tight');
        window.document.body.classList.add('sidebar-wide')
    }
}

import Select from 'svelte-select';
const languages = ['English', 'Korean'];

import globalStore from "../../../stores/globalStore";

export let pageSidebar;

$: isSportsPage = pageSidebar.includes("/sports", 0);

import SidebarItem from './SidebarItem.svelte'

const sidebar_data = [
    ['Casino', '/casino', 'icon_side_casino',
        [
            ['Dropdown 1', '/sports', 'icon_side_casino'], 
            ['Dropdown 2', '/casino', 'icon_side_casino'], 
            ['Dropdown 3', '/sports', 'icon_side_casino'], 
            ['Dropdown 4', '/casino', 'icon_side_casino'], 
            ['Dropdown 5', '/casino', 'icon_side_casino'], 
        ]
    ],
    ['Slots', '/slot', 'icon_side_slot',
        [
            ['Dropdown 1', '/sports', 'icon_side_casino'], 
            ['Dropdown 2', '/casino', 'icon_side_casino'], 
            ['Dropdown 3', '/sports', 'icon_side_casino'], 
            ['Dropdown 4', '/casino', 'icon_side_casino'], 
            ['Dropdown 5', '/casino', 'icon_side_casino'], 
        ]
    ],    
    ['Sports','/sports', 'icon_side_sports'],
    ['Live Sports','/live-sports', 'icon_side_live_sports'],
    ['E-Sports','/esports', 'icon_side_e_sports'],
    ['Virtual Games','/virtual-games', 'icon_side_virtual_games'],
    ['Affiliate','/affiliate', 'icon_side_affiliate'],
    ['Promotions','/promotions', 'icon_side_promotions'],
    ['Provably Fair','/help-center', 'icon_side_provably_fair'],
    ['Live Support','/live-support', 'icon_side_live_support'],
]

let mobileOptions=false;

</script>
<!--Sidebar Large-->

<div class="sidebar-lg left-side-bar bg-color {pageSidebar}">
    <button id="lefbutton" class="btn btn-color text-white toggle-sidebar-btn" on:click={toggleSidebar}>
        <svg id="smoll_menu"><use href="/img/symbols.svg?lang.svg#icon_arrow_left"/>
        </svg>
        <img id="closed_menu" src="/img/close.svg" />
    </button>
    <div class="pe-4 pt-3 ps-4">
        <div class="logo">
            <a href="/">
                <img width="40" src="/img/Union.svg"/>
                <img class="logo-light" src="/img/logo-text.svg"/>
                <img class="logo-dark" src="/img/logo-text-dark.svg"/>

            </a>
        </div>
        <div class="border"></div>
    </div>
    <div class="scroll">
        {#if (!isSportsPage)}

        <div class="padding perk-full">
            <p><span class="my-perks">MY VIP PERKS</span><span class="all-perks">VIEW ALL</span></p>
        </div>
        
        <div class="padding pt-0 spin-wrapper">
            <button class="btn lebtn w-100">
              <img src="img/spin-now.png" /> SPIN NOW <span>Unlocked</span>
            </button>
        </div>

        <div class="border"></div>
        <ul class="menu menu1">
            <li class:active={pageSidebar === '/favourites'}>
                <a href="/favourites" class="menu-item-icon " class:active={pageSidebar === '/favourites'} >
                    <div class="icon-bg"><svg><use href="/img/symbols.svg?lang.svg#icon_side_favorite"/></svg></div>
                    <span class="none">Favorite</span></a>
            </li>
        </ul>

        {:else} 

        <div class="padding padding10">
            <ul class="first none">
              <li>FAVORITES</li>
            </ul>
          </div>
          <ul class="menu menu1">
            <li>
              <a href="favourites.php"><img class="me-3 icon1 icon_hide" src="/img/Icon_nav_football.svg" />
                <img class="me-3 icon1 icon-hover" src="/img/Icon_nav_football-white.svg" />
                <span class="none">FC Copenbadly</span></a>
            </li>
            <li>
              <a href="#"><img class="me-3 icon1 icon_hide" src="/img/Icon_nav_american-football.svg" />
                <img class="me-3 icon1 icon-hover" src="/img/Icon_nav_american-football-white.svg" />
                <span class="none">Chicago Bears</span></a>
            </li>
          </ul>
        
          <div class="border"></div>
          <div class="sportb mobilenone mt-3 favourites">
            <div class="input-group mb-3">
              <button type="button" class="btn btn-search">
                <img src="/img/Group-48.svg">
              </button>
              <div class="form-outline none">
                <input type="search" id="form1" class="form-control" placeholder="Search here...">
              </div>
            </div>
          </div>        
        {/if}

        <div class="border mb-3"></div>

        <ul class="menu menu1">

            {#each sidebar_data as sidebar_item}
            <SidebarItem {sidebar_item} {pageSidebar} />
            {/each}

        </ul>
        <div class="border"></div>
        <div class="pb-3">

            <div class="language">
                <div class="language-widget-wrapper language-dt">
        
                       <Select
                       items={languages}
                       showChevron={true}
                       searchable={false}
                       value={'English'}
                       clearable={false}
                       focused={false}
                       >
                        <div slot="prepend">
                            <svg><use href="/img/symbols.svg?lang.svg#icon_side_language"/></svg>
                        </div>
                      </Select>
                </div>
           </div> 



        </div>
    </div>
</div>

<!--Sidebar Minified-->

<div class="sidebar-sm left-side-bar bg-color {pageSidebar}">
    <button id="lefbutton" class="toggle-sidebar-btn btn btn-color text-white" on:click={toggleSidebar} style="transform: rotate(180deg);">
        <svg id="smoll_menu" class="mobilenone"><use href="/img/symbols.svg?lang.svg#icon_arrow_left"/>
        </svg>
        <img id="closed_menu" src="/img/close.svg"/>
    </button>
    <div class="pe-4 pt-3 ps-4">
        <div class="logo">
            <a href="/">
                <img width="40" src="/img/Union.svg"/>
            </a>
        </div>
        <div class="border"></div>
    </div>
    <div class="scroll">
        {#if (!isSportsPage)}

        <div class="spin-wrapper py-30">

            <button class="btn lebtn w-100">
              <img src="img/spin-now.png" />
            </button>
        </div>

        <div class="border"></div>
        <ul class="menu py-30">
            <li class:active={pageSidebar === '/favourites'}>
                <a href="/favourites" class="menu-item-icon " class:active={pageSidebar === '/favourites'} >
                    <div class="icon-bg"><svg><use href="/img/symbols.svg?lang.svg#icon_side_favorite"/></svg></div>
                    <span class="none">Favorite</span></a>
            </li>
        </ul>

        {:else} 

        <div class="padding padding10">
            <ul class="first none">
              <li>FAVORITES</li>
            </ul>
          </div>
          <ul class="menu menu1">
            <li>
              <a href="favourites.php"><img class="me-3 icon1 icon_hide" src="/img/Icon_nav_football.svg" />
                <img class="me-3 icon1 icon-hover" src="/img/Icon_nav_football-white.svg" />
                <span class="none">FC Copenbadly</span></a>
            </li>
            <li>
              <a href="#"><img class="me-3 icon1 icon_hide" src="/img/Icon_nav_american-football.svg" />
                <img class="me-3 icon1 icon-hover" src="/img/Icon_nav_american-football-white.svg" />
                <span class="none">Chicago Bears</span></a>
            </li>
          </ul>
        
          <div class="border"></div>
          <div class="sportb mobilenone mt-3 favourites">
            <div class="input-group mb-3">
              <button type="button" class="btn btn-search">
                <img src="/img/Group-48.svg">
              </button>
              <div class="form-outline none">
                <input type="search" id="form1" class="form-control" placeholder="Search here...">
              </div>
            </div>
          </div>        
        {/if}

        <div class="border mb-3"></div>
        <ul class="menu menu1">

            {#each sidebar_data as sidebar_item}
            <SidebarItem {sidebar_item} {pageSidebar} />
            {/each}
        </ul>
        <div class="border"></div>
        <div class="pb-3">
            <div class="language">
                <div class="language-mb">
                    <div class="mb-active-lang" on:click={ () => mobileOptions=!mobileOptions} >
                        <span>EN</span>
                    </div>
                    {#if mobileOptions}
                    <div class="mb-lang-select">
                        <ul>
                            <li>KR</li>
                            <li>EN</li>                    
                        </ul>
                    </div>
                    {/if}
                </div> 
           </div> 
        </div>
    </div>
</div>

<style>
    .sidebar-sm .language {
        width: 64px;

    }
    .mb-active-lang {
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(4.5px);
        border-radius: 7px;
        width: 64px;
        height: 54px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 35px;
        cursor: pointer;
        margin-left: -9px;
    } 
    .language-mb {
        position: relative;
    }   
    .mb-lang-select {
        position: absolute;
        top: -83px;
        left: 2px;
        padding: 10px;
        border-radius: 7px;
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(4.5px);
    }

 
    .mb-lang-select ul {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .swiper-button-next { color: red; }
    
    .mb-lang-select ul li {
        background: linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 222.09%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
    }
    .mb-lang-select ul li:not(:last-child) {
        margin-bottom: 10px;
        position: relative;
    }
    
    .mb-lang-select ul li:not(:last-child)::after {
        content: "";
        position: absolute;
        top: 27px;
        right: -1px;
        height: 1px;
        width:  22px;
        background-color: #5c5c5c;
    }
    
    .mb-active-lang span {
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        background: linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 222.09%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
    }
    
    .language-widget-wrapper {
        --background: transparent;
        --border: none;
        --list-background:rgba(255, 255, 255, 0.05) !important;
        --item-hover-bg:rgba(255, 255, 255, 0.05) !important;
        --border-hover:none !important;
        --border-focused:none !important;
        --padding:0 !important;
        --selected-item-padding: 0 0 0 16px;
        --height:24px;
        --chevron-height:24px;
        --chevron-color:#fff;
        --item-height:44px;
        --item-padding: 10px 0 10px 40px;
        --font-size:16px;
        color:#fff !important;
        cursor: pointer;
        margin-top: 21px;
    }


    .language-widget-wrapper :global(svg) {
        display: flex !important;
    
    }
    sidebar:not(.wide) .language-widget-wrapper  {
        display: none !important;
    } 
    
    sidebar.wide .language-widget-wrapper  {
        display: block !important;
    } 
    
    sidebar:not(.wide) .language-mb {
        display: block;
    } 
    sidebar.wide .language-mb {
        display: none;
    }
    </style>