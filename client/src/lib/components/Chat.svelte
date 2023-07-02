
<script>
        import globalStore from "../../stores/globalStore";
        const openUserModal = () => globalStore.toggleItem('userModalOpen', true);

        function closeChat() {
            window.document.body.classList.add('chat-closed')
            window.document.body.classList.remove('chat-opened')

        }
</script>
<div class="position-relative">
    <div class="right-bar chat">
        <div class="chattable table-black">
            <table class="table table-borderless">
                <thead class="sticky-top">
                    <tr>
                        <th colspan="2" width="35%">Live Chat</th>
                        <th>
                            <div class="text-end icon">
                                <img class="me-2" src="/img/info-circle-1.svg" />
                                <img class="me-2" src="/img/trophy.svg" />
                                <a href="#" id="cancel" on:click={closeChat}>
                                    <img class="darkicon" src="/img/Cancel.svg" />
                                    <img class="whiteicon" src="/img/Cancel-white.svg" />
                                </a>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
										<tr>
                        <th width="15%"><img on:click={openUserModal} src="/img/user1.svg" /></th>
                        <td colspan="2">
                            <p class="mb-2">
                                <span class="name" on:click={openUserModal}>Ellis Schneidera <img src="/img/Group-1581.svg" />
                                    <time class="float-end">12:03</time></span>
                            </p>
                            <p class="chat-message-content">Lorem ipsum dolor sit amet consecte Feugiat accum.</p>     
                        </td>
                    </tr>
                    <tr class="mt-4">
                        <th width="15%"><img src="/img/user2.svg" /></th>
                        <td colspan="2">
                            <p class="mb-2">
                                Norman Bates <img src="/img/Group-1582.svg" />
                                <span class="float-end">12:03</span>
                            </p>
                            <p class="chat-message-content">Lorem ipsum dolor sit amet consecte Feugiat accum.</p>     

                        </td>
                    </tr>
                    <tr class="mt-4">
                        <th width="15%"><img src="/img/user3.svg" /></th>
                        <td colspan="2">
                            <p class="mb-2">
                                Marsha Carson <img src="/img/Group-1581.svg" />
                                <span class="float-end">12:03</span>
                            </p>
                            <p class="chat-message-content">Lorem ipsum dolor sit amet consecte Feugiat accum.</p>     
                        </td>
                    </tr>
                    <tr class="mt-4">
                        <th width="15%"><img src="/img/user4.svg" /></th>
                        <td colspan="2">
                            <p class="mb-2">
                                Lowell Gray <img src="/img/Group-1581.svg" />
                                <span class="float-end">12:03</span>
                            </p>
                            <p class="chat-message-content">Lorem ipsum dolor sit amet consecte Feugiat accum.</p>     

                        </td>
                    </tr>
                    <tr class="mt-4">
                        <th width="15%"><img src="/img/user5.svg" /></th>
                        <td colspan="2">
                            <p class="mb-2">
                                Marsha Carson <img src="/img/Group-1580.svg" />
                                <span class="float-end">12:03</span>
                            </p>
                            <p class="chat-message-content">Lorem ipsum dolor sit amet consecte Feugiat accum.</p>     
                        </td>
                    </tr>
                    <tr class="mt-4">
                        <th width="15%"><img src="/img/user6.svg" /></th>
                        <td colspan="2">
                            <p class="mb-2">
                                Lowell Gray <img src="/img/Group-1583.svg" />
                                <span class="float-end">12:03</span>
                            </p>
                            <p class="chat-message-content">Lorem ipsum dolor sit amet consecte Feugiat accum.</p>     
                        </td>
                    </tr>
                    <tr class="mt-4">
                        <th width="15%"><img src="/img/user7.svg" /></th>
                        <td colspan="2">
                            <p class="mb-2">
                                Marsha Carson <img src="/img/Group-1584.svg" />
                                <span class="float-end">12:03</span>
                            </p>
                            <p class="chat-message-content">Lorem ipsum dolor sit amet consecte Feugiat accum.</p>     
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="message">
            <div class="input-group">
                <input type="text" class="form-control" placeholder="Write a message..." aria-label="Username" aria-describedby="basic-addon1" />
                <span class="input-group-text" id="basic-addon1"><img src="/img/send.svg" /></span>
            </div>
        </div>
    </div>
</div>