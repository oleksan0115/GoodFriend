<script>

    import globalStore from "../../stores/globalStore";
    
    let activeParentTabValue = '1';
    let activeSubTabValue = '1';
    
    </script>
    
    <div class="bet-slip" class:open="{$globalStore.betSlipOpen}">
        <div class="bet-slip-wrapper">
            <div class="bet-slip-header">
                <div class="bet-slip-tabs">
                    <div class="tab-item active" class:active={activeParentTabValue === '1'} on:click={()=>activeParentTabValue='1'}>Bet Slip</div>
                    <div class="tab-item" class:active={activeParentTabValue === '2'} on:click={()=>activeParentTabValue='2'}>My Bets</div>
                </div>
                <span class="close-bet-slip" on:click={() => {
                    globalStore.toggleItem('betSlipOpen', false);
                  }}>
                    <svg><use href="/img/symbols.svg?lang.svg#icon_modal_close"/></svg>
                </span>
            </div>
            {#if activeParentTabValue === '1'}
            <div class="bet-slip-content">
                <div class="odds-tabs">
                    <div class="odds-tab-item active" class:active={activeSubTabValue === '1'} on:click={()=>activeSubTabValue='1'}>
                        Single1
                    </div>
                    <div class="odds-tab-item" class:active={activeSubTabValue === '2'} on:click={()=>activeSubTabValue='2'}>
                        Multiples1
                    </div>                            
                </div>
    
                {#if activeParentTabValue === '1' && activeSubTabValue === '1'}
    
                <div class="odds-tab-content">
                    <!--slip-item-->    
                    <div class="slip-item">
                        <div class="slip-item-inner">
                            <div class="slip-remove">
                                <svg><use href="/img/symbols.svg?lang.svg#icon_modal_close"/></svg>
                            </div>
                            <div class="team-info">
                                <img src="/img/basketball.svg" alt="">
                                <span class="team1">Memphis1</span><span> - </span>
                                <span class="team2">Houston</span>
                            </div>
                            <div class="odd-type"><span>Handicap - Game - NCAA</span></div>
                            <div class="odd-detail">
                                <span class="selected-odd">Memphis +12.0</span>
                                <span class="slip-item-rate">1.425</span>
                            </div>
                            <div class="slip-item-input-wrapper">
                                <div class="input-item">
                                    <input type="text">
                                    <span>Bet</span>
                                </div>
                                <div class="input-item">
                                    <input type="text">
                                    <span>Win</span>
                                </div>                                        
                            </div>
                        </div>
                    </div>
                    <!--end-slip-item-->    
                    
                    <!--slip-item-->    
                    <div class="slip-item">
                        <div class="slip-item-inner">
                            <div class="slip-remove">
                                <svg><use href="/img/symbols.svg?lang.svg#icon_modal_close"/></svg>
                            </div>
                            <div class="team-info">
                                <img src="/img/basketball.svg" alt="">
                                <span class="team1">Memphis1</span><span> - </span>
                                <span class="team2">Houston</span>
                            </div>
                            <div class="odd-type"><span>Handicap - Game - NCAA</span></div>
                            <div class="odd-detail">
                                <span class="selected-odd">Memphis +12.0</span>
                                <span class="slip-item-rate">1.425</span>
                            </div>
                            <div class="slip-item-input-wrapper">
                                <div class="input-item">
                                    <input type="text">
                                    <span>Bet</span>
                                </div>
                                <div class="input-item">
                                    <input type="text">
                                    <span>Win</span>
                                </div>                                        
                            </div>
                        </div>
                    </div>
                    <!--end-slip-item-->  
                    
                    <!--slip-item-->    
                    <div class="slip-item">
                        <div class="slip-item-inner">
                            <div class="slip-remove">
                                <svg><use href="/img/symbols.svg?lang.svg#icon_modal_close"/></svg>
                            </div>
                            <div class="team-info">
                                <img src="/img/basketball.svg" alt="">
                                <span class="team1">Memphis1</span><span> - </span>
                                <span class="team2">Houston</span>
                            </div>
                            <div class="odd-type"><span>Handicap - Game - NCAA</span></div>
                            <div class="odd-detail">
                                <span class="selected-odd">Memphis +12.0</span>
                                <span class="slip-item-rate">1.425</span>
                            </div>
                            <div class="slip-item-input-wrapper">
                                <div class="input-item">
                                    <input type="text">
                                    <span>Bet</span>
                                </div>
                                <div class="input-item">
                                    <input type="text">
                                    <span>Win</span>
                                </div>                                        
                            </div>
                        </div>
                    </div>
                    <!--end-slip-item-->                        

                </div>
                <div class="slip-total-info">
                    <div class="total-bet">
                        <span>Total Bet</span>
                        <span>0.0001 Ƀ</span>
                    </div>
                    <div class="possible-win">
                        <span>Possible Win</span>
                        <span>0.0024 Ƀ</span>
                    </div>
                    <button class="place-bet">PLACE BET</button>                            
                    <div class="slip-remove-all">
                        <svg><use href="/img/symbols.svg?lang.svg#icon_slip_remove_all"/></svg>
                        <span>Remove All</span>
                    </div>
                </div>
                {:else if activeParentTabValue === '1' &&  activeSubTabValue === '2'}
    
                <div class="odds-tab-content">
                    <div class="slip-item">
                        <div class="slip-item-inner">
                            <div class="slip-remove">
                                <svg><use href="/img/symbols.svg?lang.svg#icon_modal_close"/></svg>
                            </div>
                            <div class="team-info">
                                <img src="/img/basketball.svg" alt="">
                                <span class="team1">Memphis2</span><span> - </span>
                                <span class="team2">Houston</span>
                            </div>
                            <div class="odd-type"><span>Handicap - Game - NCAA</span></div>
                            <div class="odd-detail">
                                <span class="selected-odd">Memphis +12.0</span>
                                <span class="slip-item-rate">1.425</span>
                            </div>
                            <div class="slip-item-input-wrapper">
                                <div class="input-item">
                                    <input type="text">
                                    <span>Bet</span>
                                </div>
                                <div class="input-item">
                                    <input type="text">
                                    <span>Win</span>
                                </div>                                        
                            </div>
                        </div>
                    </div>
                </div>
                <div class="slip-total-info">
                    <div class="total-bet">
                        <span>Total Bet</span>
                        <span>0.0001 Ƀ</span>
                    </div>
                    <div class="possible-win">
                        <span>Possible Win</span>
                        <span>0.0024 Ƀ</span>
                    </div>
                    <button class="place-bet">PLACE BET</button>                            
                    <div class="slip-remove-all">
                        <svg><use href="/img/symbols.svg?lang.svg#icon_slip_remove_all"/></svg>
                        <span>Remove All</span>
                    </div>
                </div>
    
                {/if}
    
            </div>
            {:else if activeParentTabValue === '2'}
            <div class="bet-slip-content">
                <div class="odds-tabs">
                    <div class="odds-tab-item active" class:active={activeSubTabValue === '1'} on:click={()=>activeSubTabValue='1'}>
                        Single2
                    </div>
                    <div class="odds-tab-item" class:active={activeSubTabValue === '2'} on:click={()=>activeSubTabValue='2'}>
                        Multiples2
                    </div>                            
                </div>
    
                {#if  activeParentTabValue === '2' &&  activeSubTabValue === '1'}
    
                <div class="odds-tab-content">
                    <div class="slip-item">
                        <div class="slip-item-inner">
                            <div class="slip-remove">
                                <svg><use href="/img/symbols.svg?lang.svg#icon_modal_close"/></svg>
                            </div>
                            <div class="team-info">
                                <img src="/img/basketball.svg" alt="">
                                <span class="team1">Memphis3</span><span> - </span>
                                <span class="team2">Houston</span>
                            </div>
                            <div class="odd-type"><span>Handicap - Game - NCAA</span></div>
                            <div class="odd-detail">
                                <span class="selected-odd">Memphis +12.0</span>
                                <span class="slip-item-rate">1.425</span>
                            </div>
                            <div class="slip-item-input-wrapper">
                                <div class="input-item">
                                    <input type="text">
                                    <span>Bet</span>
                                </div>
                                <div class="input-item">
                                    <input type="text">
                                    <span>Win</span>
                                </div>                                        
                            </div>
                        </div>
                    </div>
                </div>
                <div class="slip-total-info">
                    <div class="total-bet">
                        <span>Total Bet</span>
                        <span>0.0001 Ƀ</span>
                    </div>
                    <div class="possible-win">
                        <span>Possible Win</span>
                        <span>0.0024 Ƀ</span>
                    </div>
                    <button class="place-bet">PLACE BET</button>                            
                    <div class="slip-remove-all">
                        <svg><use href="/img/symbols.svg?lang.svg#icon_slip_remove_all"/></svg>
                        <span>Remove All</span>
                    </div>
                </div>            
                {:else if  activeParentTabValue === '2' && activeSubTabValue === '2'}
                
    
                <div class="odds-tab-content">
                    <div class="slip-item">
                        <div class="slip-item-inner">
                            <div class="slip-remove">
                                <svg><use href="/img/symbols.svg?lang.svg#icon_modal_close"/></svg>
                            </div>
                            <div class="team-info">
                                <img src="/img/basketball.svg" alt="">
                                <span class="team1">Memphis4</span><span> - </span>
                                <span class="team2">Houston</span>
                            </div>
                            <div class="odd-type"><span>Handicap - Game - NCAA</span></div>
                            <div class="odd-detail">
                                <span class="selected-odd">Memphis +12.0</span>
                                <span class="slip-item-rate">1.425</span>
                            </div>
                            <div class="slip-item-input-wrapper">
                                <div class="input-item">
                                    <input type="text">
                                    <span>Bet</span>
                                </div>
                                <div class="input-item">
                                    <input type="text">
                                    <span>Win</span>
                                </div>                                        
                            </div>
                        </div>
                    </div>
                </div>
                <div class="slip-total-info">
                    <div class="total-bet">
                        <span>Total Bet</span>
                        <span>0.0001 Ƀ</span>
                    </div>
                    <div class="possible-win">
                        <span>Possible Win</span>
                        <span>0.0024 Ƀ</span>
                    </div>
                    <button class="place-bet">PLACE BET</button>                            
                    <div class="slip-remove-all">
                        <svg><use href="/img/symbols.svg?lang.svg#icon_slip_remove_all"/></svg>
                        <span>Remove All</span>
                    </div>
                </div>   
                {/if}
    
            </div>
            {/if}
        </div>
    </div>