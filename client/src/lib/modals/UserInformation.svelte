<svelte:head>
	<link  href="https://fengyuanchen.github.io/cropperjs/css/cropper.css" rel="stylesheet">
	<script src="https://fengyuanchen.github.io/cropperjs/js/cropper.js"></script>
</svelte:head>

<script>
	import Cropper from 'cropperjs';
	import toast from '../components/Toast';
	import globalStore from "../../stores/globalStore";
	import { changeNickname } from '../../apis/account/ChangeNickname';
  import { changeProfileImage } from "../../apis/account/ChangeProfileImage";
	import { saveTempImage } from '../../apis/Image/SaveTempImage';
  import { saveImageWebp } from "../../apis/Image/SaveImageWebp";
	import { getAccessToken } from "../../apis/account/GetAccessToken";
  import { getRefreshToken } from "../../apis/account/GetRefreshToken";

	let input;
  let container;
  let image;
  let placeholder;
	let showImage = false;
  let cropper;

	let myProfileData = {
    photo: "",
    nick: "",
  }

	$: {
		if (!$globalStore.userInfo && $globalStore.userDetail) {
			myProfileData.nick = $globalStore.userDetail.nick;
			showImage = false;
		}
	}

	function dataURItoBlob(dataURI) {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  }

	function onChange() {
    const file = input.files[0];
		
    if (file) {
			showImage = true;

      const reader = new FileReader();
      reader.addEventListener("load", function () {
        image.setAttribute("src", reader.result);

        cropper = new Cropper(image, {
          aspectRatio: 1,
          viewMode: 1,
          crop(event) {
            
          },
        });

      });
      reader.readAsDataURL(file);
			
			return;
    } 
		showImage = false; 
  }

	function getRoundedCanvas(sourceCanvas) {
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    var width = sourceCanvas.width;
    var height = sourceCanvas.height;

    canvas.width = width;
    canvas.height = height;
    context.imageSmoothingEnabled = true;
    context.drawImage(sourceCanvas, 0, 0, width, height);
    context.globalCompositeOperation = 'destination-in';
    context.beginPath();
    context.arc(width / 2, height / 2, Math.min(width, height) / 2, 0, 2 * Math.PI, true);
    context.fill();
    return canvas;
  }

	async function handleMyProfile(event) {
		const canvas = cropper.getCroppedCanvas();
		const roundedCanvas = getRoundedCanvas(canvas);
		const imageData = roundedCanvas.toDataURL('image/png');
  
		const formData = new FormData();
		const blob = dataURItoBlob(imageData);
		formData.append('image', blob, 'image.png');

		const tempFile = await saveTempImage({formData});
		const permanentFile = await saveImageWebp({filename: tempFile.data.filename, ext: "webp"});

		const res = await changeProfileImage({
			memberIdx: $globalStore.userInfo.member_idx,
			profileImage: permanentFile.data.path,
		})

		if (res.success) {
			// toast.success(res.data.message);
		} else {
			toast.error(res.data.message);
		}

		const res1 = await changeNickname({
			memberIdx: $globalStore.userInfo.member_idx,
			nick: myProfileData.nick,
		})

		if (res1.success) {
			toast.success(res1.data.message);
			handleTokens();
		} else {
			toast.error(res1.data.message);
		}
	}

	async function handleTokens() {
    const res = await getAccessToken();
    if (res.success) {
      globalStore.toggleItem("userDetail", res.data);
    } else if (4001) {
      const res1 = await getRefreshToken();
      if (res1.success) {
        const res2 = await getAccessToken();
        if (res2.success) globalStore.toggleItem("userDetail", res2.data);
      } else {
        globalStore.toggleItem("userDetail", null);
      }
    } else {
      globalStore.toggleItem("userDetail", null);
      toast.error("Bad Network Connection");
    }
  }
</script>

{#if $globalStore.userInfo}
<div class="user-information" class:open={$globalStore.userInfo}>
  <div
    class="overlay"
    on:click={() => globalStore.toggleItem("userInfo", null)}
  />
  <div class="userinformation">
    <div class="row">
      <div class="col-md-8 col-7 align-self-center">
        {#if $globalStore.userInfo.owner}
          {#if !$globalStore.userInfo.editState}
            <h4 class="mb-0">My Profile</h4>
          {:else}
            <div class="profile_title">
              <svg class="profile_back cursor-pointer" on:click={() => {
                const userInfo = $globalStore.userInfo;
                userInfo.editState = false;
                showImage = false;
                globalStore.toggleItem("userInfo", userInfo);
              }}><use href="/img/symbols.svg?lang.svg#icon_arrow_left"/></svg>
              <h4 class="mb-0">Edit Profile</h4>
            </div>
          {/if}
        {:else}
        <h4 class="mb-0">User Information</h4>
        {/if}        
      </div>
      <div class="col-md-4 col-5 text-end">
        <img
          id="closeduser"
          class="mobilenone cancel-light"
          src="/img/close.svg"
          on:click={() => {
            globalStore.toggleItem("userInfo", false);
          }}
        />
        <img
          class="cancel-dark"
          style="display:none"
          src="/img/close.svg"
          on:click={() => {
            globalStore.toggleItem("userInfo", false);
          }}
        />

        <!-- <button id="mcloseduser" class="btn btn-back desknone float-end">
          <img class="me-1" src="/img/Arrow-Right-1.svg" /> Back
        </button> -->
      </div>
    </div>

    {#if !$globalStore.userInfo.editState}
      <div class="row">
        <div class="col-md-12 text-center">
          <div class="position-relative">
            <div class="userback">
              <img class="userimg" src={$globalStore.userInfo.profile_image} />
            </div>
            <img class="icon1" src="/img/Group-1585.svg" />
          </div>
          
            <div class="position-relative">
              <h6 class="text-white mb-2 mt-3">{$globalStore.userInfo.nick}</h6>
              <p class="mt-0">User Id: {$globalStore.userInfo.email}</p>
              
              {#if $globalStore.userInfo.owner}
                <div class="icon_edit" on:click={() => {
                  const userInfo = $globalStore.userInfo;
                  userInfo.editState = true;
                  globalStore.toggleItem("userInfo", userInfo);
                }}>
                  <img class="ic_edit" src="/img/Edit.svg"/>
                </div>
              {/if}
            </div>
        </div>
      </div>

      <div class="heading mt-3">
        <h5 class="statistic-widget-title">
          <svg><use href="/img/symbols.svg?lang.svg#icon_statistics" /></svg> Statistics
        </h5>
      </div>
      <div class="row">
        <div class="col-md-4 col-4 paddinglr0">
          <div class="wins text-center bg2 box-style">
            <img class="mb-2" src="/img/Icon_medal.svg" />
            <p class="mb-2">Total wins</p>
            <h6>23432</h6>
          </div>
        </div>
        <div class="col-md-4 col-4 paddinglr0">
          <div class="wins text-center bg2 box-style">
            <img class="mb-2" src="/img/Icon_casino-roulette.svg" />
            <p class="mb-2">Total Bets</p>
            <h6>15</h6>
          </div>
        </div>
        <div class="col-md-4 col-4 paddinglr0">
          <div class="wins text-center bg2 box-style">
            <img class="mb-2" src="/img/Icon_casino-chips.svg" />
            <p class="mb-2">Total Wagered</p>
            <h6>$ 2,750</h6>
          </div>
        </div>
      </div>
      <div class="heading mt-4">
        <h5 class="statistic-widget-title">
          <svg><use href="/img/symbols.svg?lang.svg#icon_favorite" /></svg> Top 3 Favorite
          Games
        </h5>
      </div>
      <div class="row">
        <div class="col-md-4 col-4 paddinglr0">
          <img class="w-100" src="/img/Rectangle-41.svg" />
        </div>
        <div class="col-md-4 col-4 paddinglr0">
          <img class="w-100" src="/img/Rectangle-40.svg" />
        </div>
        <div class="col-md-4 col-4 paddinglr0">
          <img class="w-100" src="/img/Rectangle-38.svg" />
        </div>
      </div>
      {:else}

        <form on:submit={handleMyProfile}>
          <div class="preview">
            <input
              bind:this={input}
              on:change={onChange}
              type="file"
              style="display: none;"
              id="fileinput"
            />

            <div bind:this={container} style="height: 200px !important;">
              {#if showImage}
                <img bind:this={image} src="" alt="Preview" id="image"/>
              {:else}
                <span class="cursor-pointer" bind:this={placeholder} on:click={() => {
                  document.getElementById("fileinput").click();
                }}>Image Preview</span>
              {/if}
            </div>
          </div>

          <div id="result"></div>

          <div class="heading mt-4">
            <h5 class="statistic-widget-title">
              Default Images
            </h5>
          </div>
          <div class="row">
            <div class="col-md-3 col-3 paddinglr0">
              <img class="cursor-pointer" src="/img/default_user1.svg" />
            </div>
            <div class="col-md-3 col-3 paddinglr0">
              <img class="cursor-pointer" src="/img/default_user2.svg" />
            </div>
            <div class="col-md-3 col-3 paddinglr0">
              <img class="cursor-pointer" src="/img/default_user3.svg" />
            </div>
            <div class="col-md-3 col-3 paddinglr0">
              <img class="cursor-pointer" src="/img/default_user4.svg" />
            </div>
          </div>

          <div class="heading mt-4">
            <h5 class="statistic-widget-title">
              Edit Nickname
            </h5>
          </div>
          <div class="row">
            <div class="input-item input_item">
              <input type="text" name="nick" required bind:value={myProfileData.nick}>
            </div>
          </div>

          <button class="text-white profile_save">Save</button>
        </form>
      {/if}
  </div>
</div>
{/if}
