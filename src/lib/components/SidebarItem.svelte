<script>
	import { slide } from "svelte/transition";
	export let sidebar_item
	let isOpen = false
	const toggle = () => isOpen = !isOpen

    export let pageSidebar

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<li id="dropmenu" class="drop-dwon dropdown" class:active={pageSidebar === sidebar_item[1]}  on:click={toggle} aria-expanded={isOpen}>

    {#if (sidebar_item[3])}

        <a href="{sidebar_item[1]}" class="dropdown-toggle menu-item-icon " class:active={pageSidebar === sidebar_item[1]} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <div class="icon-bg"><svg ><use href="/img/symbols.svg?lang.svg#{sidebar_item[2]}"/></svg></div>
            <span class="none">{sidebar_item[0]}</span>

        </a>
        <svg class="sidebar-arrow none" style="tran"  width="20" height="20" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M9 5l7 7-7 7"></path>
        </svg>
        {#if isOpen}
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown" transition:slide={{ duration: 300 }}>
                {#each sidebar_item[3] as item}
                <li><a class="dropdown-item menu-item-icon" href="{item[1]}">
                    <div class="icon-bg"><svg ><use href="/img/symbols.svg?lang.svg#{item[2]}"/></svg></div>
                    <span class="none">{item[0]}</span></a>
                </li>
                {/each}     
            </ul>
        {/if}

    {:else}

        <a href="{sidebar_item[1]}" class="menu-item-icon " class:active={pageSidebar === sidebar_item[1]} >
            <div class="icon-bg"><svg ><use href="/img/symbols.svg?lang.svg#{sidebar_item[2]}"/></svg></div>
            <span class="none">{sidebar_item[0]}</span>
        </a>

    {/if}
</li>

<!-- <li>
    <a href="sports.php">
        <img class="me-3 icon1 icon_hide" src="/img/sneakers-1.svg" />
        <img class="me-3 icon1 icon-hover" src="/img/sneakers-white.svg" />
        <span class="none">Sports</span></a>
</li> -->

<style>

	.sidebar-arrow {
        transition: transform 0.2s ease-in;
        cursor:pointer;
	}
	
	[aria-expanded=true] .sidebar-arrow { transform: rotate(0.25turn); }

    li {
        color:#67707B;
    }
</style>
