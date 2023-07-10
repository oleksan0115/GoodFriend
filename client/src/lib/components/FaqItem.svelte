<script>
    export let open = false;
      import { slide } from 'svelte/transition';
      const handleClick = () => open = !open
  </script>
  
  <div class="faq-item show" class:show="{open}">
    <div class="faq-question">
        <slot name="head"></slot>
        
        <span class="faq-toggle" on:click={handleClick}>
            <svg><use href="/img/symbols.svg?lang.svg#icon_arrow_down"/></svg>
        </span>

    </div>
    {#if open}
    <div transition:slide>
        <slot name="details">
        </slot>
    </div>
    {/if}



</div>








  <style>
      div.accordion {
          margin: 1rem 0;
      }
      
      div.header {
          display:flex;
          width:100%;
      }
      
      div.header .text {
          flex: 1;
          margin-right: 5px;
      }
      
      div.details {
          background-color: #cecece;
          padding:1rem;
      }
  </style>
  