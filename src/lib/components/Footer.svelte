
<script>

import globalStore from "../../stores/globalStore";

function toggleChat() {
    
    if(window.document.body.classList.contains('chat-closed')) {

        window.document.body.classList.remove('chat-closed');
        window.document.body.classList.add('chat-opened');

    } else {

        window.document.body.classList.add('chat-closed');
        window.document.body.classList.remove('chat-opened');

    }

  }

function toggleSidebar() {
    if(!window.document.body.classList.contains('sidebar-tight')) {
        window.document.body.classList.add('sidebar-tight')
        window.document.body.classList.remove('sidebar-wide')

    } else {
        window.document.body.classList.remove('sidebar-tight');
        window.document.body.classList.add('sidebar-wide')

    }
}

</script>
<div class="container">
    <div class="footer text-center">
        <h6>
            GoodFriends – A constructive and inclusive social network for
            Professional Casino. With you every step of your journey.
        </h6>
        <p>
            Built on react — the open source software that powers CASINO and
            other inclusive communities. Made with love and Ruby on Rails.
            GoodFriends © 2023
        </p>
        <img src="/img/Union.svg" />
    </div>
</div>
<div class="mobile_footer_fix">
    <div class="mobile-footer desknone">
        <div class="container">
            <div class="row">

                <div class="col-3 text-center">
                    <a id="menu" on:click={toggleSidebar}>
                        <img src="/img/menu.svg" />
                        <p>Menu</p>
                    </a>
                </div>

                <div class="col-3 text-center">
                    <a href="/casino">
                        <img src="/img/icon_Casino.svg" />
                        <p>Casino</p>
                    </a>
                </div>
                <div class="col-3 text-center">
                    <a href="/sports">
                        <img src="/img/Icon_gray-scale_sports.svg" />
                        <p>Sports</p>
                    </a>
                </div>
                <div class="col-3 text-center">
                    <a id="chat" on:click={toggleChat}>
                        <img src="/img/Chat-1.svg" />
                        <p>Chat</p>
                    </a>
                </div>

                <div class="col-3 text-center">
                    <a id="bet-slip" on:click={() => {
                        globalStore.toggleItem("betSlipOpen", !$globalStore.betSlipOpen);
                      }}>
                        <img src="/img/bet-slip.svg" />
                        <p>Bet Slip</p>
                    </a>
                </div>                
            </div>
        </div>
    </div>
</div>

<style>

    .mobile-footer #menu {
        position: relative;
    }

    .mobile-footer #menu::before {
        content:"";
        position: absolute;
        width: 30px;
        height: 30px;
        left: -5px;
        top: -15px;
        background: rgba(126, 44, 255, 0.53);
        filter: blur(12.5px);
        transform: rotate(90deg);        
    }
    .mobile-footer #menu::after {
        content:"";
        position: absolute;
        width: 4px;
        height: 38px;
        left: 8px;
        top: -33px;

        background: radial-gradient(50% 50% at 50% 50%, #834DD8 0%, rgba(131, 77, 216, 0) 100%);
        transform: rotate(90deg);        
    }
    
    


    .mobile-footer #bet-slip {
        position: relative;
    }

    .mobile-footer #bet-slip::before {
        content:"";
        position: absolute;
        width: 30px;
        height: 30px;
        left: -5px;
        top: -15px;
        background: rgb(255 255 255 / 70%);
        filter: blur(12.5px);
        transform: rotate(90deg);        
    }
    .mobile-footer #bet-slip::after {
        content:"";
        position: absolute;
        width: 4px;
        height: 38px;
        left: 8px;
        top: -33px;

        background: radial-gradient(50% 50% at 50% 50%, rgb(255 255 255 / 70%) 0%, rgba(131, 77, 216, 0) 100%);
        transform: rotate(90deg);        
    }     
</style>