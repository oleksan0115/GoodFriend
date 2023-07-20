<script>
    import Select from 'svelte-select';
    const items = [
      'Provably Fair',
      'Terms Of Service',
      'Terms Of Sports',
      'Deposit Bonus Terms',
      'Coin Accuracy Limit',
      'Support',
      'Fee',
      'Google Authenticator',
      'FAQ',
      'Cryptocurrency',
      'Registration and Login',
      'GFSwap Policy',
      'Gamble Aware',
      'Protecting Minors',
      'Providers',
      'AML',
      'Self-exclusion',
      'Responsible Gambling'
      ];

      $: activeTab = "0";

      function handle(e) {
        activeTab=String(e.detail.index);
      }  

</script>

<div class="container">
    <div class="row">
      <div class="col-md-3 mobilenone">
        <div class="title">
          <h1>Help Center</h1>
        </div>
        <div class="tab mt-4">
          <ul>
            <li class="active" class:active={activeTab === "0"} on:click={() => (activeTab = "0")}><a href="#">Provably Fair</a></li>
            <li class:active={activeTab === "1"} on:click={() => (activeTab = "1")}><a href="#" >Terms Of Service</a></li>
            <li class:active={activeTab === "2"} on:click={() => (activeTab = "2")}><a href="#" >Terms Of Sports</a></li>
            <li class:active={activeTab === "3"} on:click={() => (activeTab = "3")}><a href="#" >Deposit Bonus Terms</a></li>
            <li class:active={activeTab === "4"} on:click={() => (activeTab = "4")}><a href="#" >Coin Accuracy Limit</a></li>
            <li class:active={activeTab === "5"} on:click={() => (activeTab = "5")}><a href="#" >Support</a></li>
            <li class:active={activeTab === "6"} on:click={() => (activeTab = "6")}><a href="#" >Fee</a></li>
            <li class:active={activeTab === "7"} on:click={() => (activeTab = "7")}> <a href="#" >Google Authenticator</a></li>
            <li class:active={activeTab === "8"} on:click={() => (activeTab = "8")}><a href="#">FAQ</a></li>
            <li class:active={activeTab === "9"} on:click={() => (activeTab = "9")}><a href="#" >Cryptocurrency</a></li>
            <li class:active={activeTab === "10"} on:click={() => (activeTab = "10")}><a href="#" >Registration and Login</a></li>
            <li class:active={activeTab === "11"} on:click={() => (activeTab = "11")}><a href="#" >GFSwap Policy</a></li>
            <li class:active={activeTab === "12"} on:click={() => (activeTab = "12")}><a href="#" >Gamble Aware</a></li>
            <li class:active={activeTab === "13"} on:click={() => (activeTab = "13")}><a href="#" >Protecting Minors</a></li>
            <li class:active={activeTab === "14"} on:click={() => (activeTab = "14")}><a href="#" >Providers</a></li>
            <li class:active={activeTab === "15"} on:click={() => (activeTab = "15")}><a href="#" >AML</a></li>
            <li class:active={activeTab === "16"} on:click={() => (activeTab = "16")}><a href="#" >Self-exclusion</a></li>
            <li class:active={activeTab === "17"} on:click={() => (activeTab = "17")}><a href="#">Responsible Gambling</a></li>
          </ul>
        </div>
      </div>
      <div class="col-md-9 col-12">
        <div class="row">
          <div class="col-8 desknone1 align-self-center">
            <h1 class="mobiletitle mb-0">Help Center</h1>
          </div>
          <div class="col-4 col-sm-12">
            <div class="text-end">
              <button class="btn btn-back">
                <img class="me-1" src="img/Arrow-Right-1.svg" /> Back
              </button>
            </div>
          </div>
        </div>
        <div class="bg-1 text-box desknone select-box mt-3 p-0" style="background-color: unset; padding: 20px 0;">
          <div class="language-widget-wrapper language-dt">
            <Select
            {items}
            showChevron={true}
            searchable={true}
            value={'Provably Fair'}
            clearable={false}
            focused={false}
            on:change={handle}
            >
           </Select>
          </div>
        </div>

        {#if activeTab === "0"}
        <div class="bg-1 text-box mt-2">
          <h4>Provably Fair</h4>
          <div class="select mt-3">
            <select id="disabledSelect" class="form-control">
              <option>Crash</option>
            </select>
            <img src="img/Arrow-Down.svg" />
          </div>
          <h4 class="mt-4">Fairness</h4>
          <h5>Is The Game Fair?</h5>
          <p>
            We are a fair and impartial prediction and guessing platform.
            Our goal is to eliminate all unfair factors and make players
            feel comfortable and have fun.
          </p>
          <p>
            We have generated a total of 10 million hashes (the generation
            chain is verifiable), and each hash corresponds to a curve crash
            multiplier.
          </p>
          <p>
            We release these 10 million numbers in reverse order, each
            corresponding to one turn of the game (i.e. we have 10 million
            turns in total).
          </p>
          <p>
            In other words, the crash number of each turn already exists and
            is not calculated after the game starts. Players can therefore
            place their bet without concern.
          </p>
          <h5 class="pt-3">
            Will The Game Be Manipulated By The Platform?
            <a href="#">GitHub Verify</a>
          </h5>
          <p>
            The integrity check value is key to verifying whether there is
            any official manipulation; The test algorithm is provided as
            follows.
          </p>
          <p>Example: 6b5124897c3c48d0e46cc9249f08c7e56079</p>
          <ol>
            <li>
              Take a random value in the 2^52 range, namely 16^13, i.e. a
              13-bit hexadecimal number (because the hash value is
              hexadecimal, 2^52 === 16^13)6b5124897c3c4 (0x6b5124897c3c4
              equals 1887939992208324 in the decimal system).
            </li>
            <li>
              Distribute the random value to 0~1, by dividing it by the
              maximum value of 13 fs, namely
              0x6b5124897c3c4/0x10000000000000. Given the discrete random
              nature of the hash value, we then can think that any hash
              value can be transformed into a random number of 0~1,
              1887939992208324/4503599627370496 = 0.419206889692064.
            </li>
            <li>
              Make the house edge 1%. Further to calculate 99/(1-X), where X
              is the random value calculated at Step 2. When X is 0, the
              result is 99; when X is 1, the result is positive infinite;
              when X is 0.01, the result is 100; when X is less than 0.01,
              the result is less than 100. <br />
              Conclusion: The overall random number distribution is 99 to
              positive infinite; and when the random number distribution is
              0~0.01, the result is less than 100. <br />
              99/(1-0.419206889692064) = 170.45656748150867
            </li>
          </ol>
          <p>
            Conclusion: The hash value used in the game is inverse ordered.
            Therefore, with the SHA256 algorithm, a previous hash used in
            the game can be calculated from its subsequent hash. Since there
            is one-to-one correspondence between the key and the value of
            hash, we can draw the conclusion that if a hash can be used to
            calculate the hash that precedes it, then this hash should have
            been already generated when the preceding prize is announced.
            Similarly, the entire hash chain is generated at the very
            beginning and cannot be changed once generated. Otherwise, it
            cannot pass verification by SHA256, and as far as the payout is
            concerned, this is nothing more than a probability game in which
            crash is a given. The official organizer cannot manipulate any
            game set. Therefore, CRASH is more transparent than other
            gambling methods. This is the cornerstone on which our game is
            built.
          </p>
        </div>
        {:else if activeTab === "1"}
        <div class="bg-1 text-box mt-2">
          <h4>Terms of Service</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
        </div>
        {:else if activeTab === "2"}
        <div class="bg-1 text-box mt-2">
          <h4>Terms Of Sports</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
        </div>        
        {:else if activeTab === "3"}
        <div class="bg-1 text-box mt-2">
          <h4>Deposit Bonus Terms</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
        </div> 
        {:else if activeTab === "4"}
        <div class="bg-1 text-box mt-2">
          <h4>Coin Accuracy Limit</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
        </div>
        {:else if activeTab === "5"}
        <div class="bg-1 text-box mt-2">
          <h4>Support</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
        </div> 
        {:else if activeTab === "6"}
        <div class="bg-1 text-box mt-2">
          <h4>Fee</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
        </div> 
        {:else if activeTab === "7"}
        <div class="bg-1 text-box mt-2">
          <h4>Google Authenticator</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
        </div>  
        
        {:else if activeTab === "8"}
        <div class="bg-1 text-box mt-2">
          <h4>FAQ</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
        </div>  
        {:else if activeTab === "9"}
        <div class="bg-1 text-box mt-2">
          <h4>Cryptocurrency</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
        </div>  
        {:else if activeTab === "10"}
        <div class="bg-1 text-box mt-2">
          <h4>Registration and Login</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
        </div> 
        {:else if activeTab === "11"}
        <div class="bg-1 text-box mt-2">
          <h4>GFSwap Policy</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
        </div> 
        {:else if activeTab === "12"}
        <div class="bg-1 text-box mt-2">
          <h4>Gamble Aware</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
        </div>
        {:else if activeTab === "13"}
        <div class="bg-1 text-box mt-2">
          <h4>Protecting Minors</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
        </div>
        {:else if activeTab === "14"}
        <div class="bg-1 text-box mt-2">
          <h4>Providers</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
        </div> 
        {:else if activeTab === "15"}
        <div class="bg-1 text-box mt-2">
          <h4>AML</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
        </div>
        {:else if activeTab === "16"}
        <div class="bg-1 text-box mt-2">
          <h4>Self-exclusion</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
        </div> 
        {:else if activeTab === "17"}
        <div class="bg-1 text-box mt-2">
          <h4>Responsible Gambling</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Vitae dolor reiciendis, modi quidem fugit qui quisquam magnam voluptate maxime architecto omnis excepturi sapiente ab iste, reprehenderit sed, iure nam est.
          </p>
        </div>                                                                        
        {/if}
      </div>
    </div>
  </div>

  <style>


.language-widget-wrapper {
        --background: transparent;
        --border: none;
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
        color:#7E8BED !important;
        cursor: pointer;
        margin-top: 21px;
        z-index: 99999 !important;
        --list-z-index:9999;
        --list-background:#111320 !important;
        --item-hover-bg:#656E79 !important;
        --item-color:#fff;

    }
   
  </style>