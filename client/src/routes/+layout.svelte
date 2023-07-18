<script>
  import { onMount, beforeUpdate } from "svelte";
  import { navigating } from '$app/stores';

  import Header from "$lib/components/Header/Header.svelte";
  import Sidebar from "$lib/components/Sidebar/Sidebar.svelte";
  import Chat from "$lib/components/Chat.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import globalStore from "../stores/globalStore";

  import LoginModal from "../lib/modals/LoginModal.svelte";
  import SignupModal from "../lib/modals/SignupModal.svelte";
  import ForgotModal from "../lib/modals/ForgotModal.svelte";
  import UserInformation from "../lib/modals/UserInformation.svelte";

  import { page } from '$app/stores'

  $: path = $page.url.pathname;

  export let showOnPx = 150;

  let hidden = true;

  function goTop() {
    document.body.scrollIntoView();
  }

  function scrollContainer() {
    return document.documentElement || document.body;
  }

  function handleOnScroll() {
    if (!scrollContainer()) {
      return;
    }

    if (scrollContainer().scrollTop > showOnPx) {
      hidden = false;
    } else {
      hidden = true;
    }
  }
  
  

  onMount(() => {
    /*
    if(screenSize > 1600) {
      window.document.body.classList.add('chat-open')
    }*/

    /*
    if(screenSize > 1299 )   {
      window.document.body.classList.add('sidebar-wide')
    }*/

    if(screenSize > 649 && screenSize < 1300)   {
      window.document.body.classList.add('sidebar-tight')
    } else if(screenSize >= 1300) {
      window.document.body.classList.add('sidebar-wide')
    } else if(screenSize < 650) {
      window.document.body.classList.add('sidebar-tight')
    }

    if(screenSize < 1601 ) {
      window.document.body.classList.add('chat-closed')
    } else {
      window.document.body.classList.add('chat-opened')
    }



  });

	beforeUpdate(() => {
    /*
    if(screenSize > 1600) {
      window.document.body.classList.add('chat-open')
    }*/


  });


	let screenSize;
	let device_width;

  $: {

    if(screenSize < 650) {
      device_width='dw1';

    } else {
      device_width='dw2';
    }
  }


  $: if($navigating) { 
    if(device_width=='dw1') {
      myFunction();

    }

  }  

  function myFunction() {
    window.document.body.classList.remove('sidebar-wide')
    window.document.body.classList.add('sidebar-tight')

  }

</script>
<svelte:window on:scroll={handleOnScroll}  bind:innerWidth={screenSize}/>
<div class="{device_width}" class:right-chat="{!$globalStore.chatOpen}">
  <Header/>
  <Sidebar pageSidebar={path} />
  <Chat/>
  <LoginModal/>
  <SignupModal/>
  <ForgotModal/>
  <UserInformation/>

  <div class="body-part {path}" class:affiliate={path === '/affiliate'} class:provably-fair={path.includes("/help-center", 0)}>

    <slot></slot>

    <Footer/>

    <div  class="back-to-top" on:click={goTop} class:hidden>
        <img src="/img/page-up.svg" />                
    </div>    
  </div>
</div>
        

<style>
    .back-to-top {
      opacity: 1;
      transition: opacity 0.5s, visibility 0.5s;
      position: fixed;
      z-index: 99999;
      right: 300px;
      user-select: none;
      bottom: 75px;
      cursor:pointer;

    }
  
    .back-to-top.hidden {
      opacity: 0;
      visibility: hidden;
    }

    .back-to-top img {
      max-width: 50px;

    }  
    @media only screen and (max-width:649px) {
      .back-to-top {
        bottom: 75px;
      } 
    }
</style>