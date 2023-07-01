<script>
    
		import { onMount } from "svelte";
		import Cookies from 'js-cookie';

    onMount(() => {
			if(Cookies.get('Mode') == undefined) {
				window.document.body.classList.remove('light-mode')
			}
			else if(Cookies.get('Mode') == 'Light') {
				window.document.body.classList.add('light-mode')
			}
			else if(Cookies.get('Mode') == 'Dark') {
				window.document.body.classList.remove('light-mode')
			}
    });


    function enableLightMode() {
			Cookies.set('Mode', 'Light');
	    window.document.body.classList.add('light-mode')
    }
    function disableLightMode() {
			Cookies.set('Mode', 'Dark');
	    window.document.body.classList.remove('light-mode')
    }      
		
    let lightMode = Cookies.get('Mode') == undefined ? 'Dark' : Cookies.get('Mode');

</script>
<div class="row">
    <div class="col-md-6 col-6 pe-1">
        <button class="btn color-chnage w-100" class:active={lightMode==='Light'} on:click={() => {lightMode = 'Light'}} on:click={enableLightMode}>
            <p class="mt-0 mb-0"><img src="/img/sun.svg" /> Light</p>
        </button>
    </div>
    <div class="col-md-6 col-6 ps-1">
        <button class="btn color-chnage w-100 active" class:active={lightMode==='Dark'} on:click={() => {lightMode = 'Dark'}} on:click={disableLightMode}>
            <p class="mt-0 mb-0"><img src="/img/moon.svg" /> Dark</p>
        </button>
    </div>
</div>

