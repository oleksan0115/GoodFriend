import { c as create_ssr_component, v as validate_component } from './index2-3ef52108.js';

const FaqItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open = false } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  return `
  
  <div class="${["faq-item show", open ? "show" : ""].join(" ").trim()}"><div class="faq-question">${slots.head ? slots.head({}) : ``}
        
        <span class="faq-toggle"><svg><use href="/img/symbols.svg?lang.svg#icon_arrow_down"></use></svg></span></div>
    ${open ? `<div>${slots.details ? slots.details({}) : `
        `}</div>` : ``}



</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="boxfirst desknone pt_0"><div class="row"><div class="col-12"><div class="rightimg"><img src="/img/affiliate_mobile.svg"></div></div>
      <div class="col-12 mobile_center"><div class="container"><div class="head1"><h6 class="pb-2">LEARN MORE ABOUT</h6>
            <h1>AFFILIATE PROGRAM</h1></div>

          <button class="btn-contact mb-5">Contact us</button></div></div></div></div>

  <div class="container"><div class="boxfirst mobilenone"><div class="row"><div class="col-md-7 mobile_center"><div class="pd3060"><h6 class="mb-3">LEARN MORE ABOUT</h6>
            <h1 class="mb-1">AFFILIATE PROGRAM</h1>
            <p class="mt-0">We have special conditions for you to customize your referral
              program!
            </p>
            <button class="btn btn-color3">Contact us</button></div></div>
        <div class="col-md-5 text-end"></div></div></div>
    <div class="mt-4"><div class="title"><div class="row"><div class="col-md-12"><h2>Frequently Asked Questions</h2></div></div></div>

      <div class="faq-wrapper mt-2">${validate_component(FaqItem, "FaqItem").$$render($$result, {}, {}, {
    details: () => {
      return `<div slot="details" class="faq-answer"><p>Lorem ipsum dolor sit amet consectetur. Quis rhoncus cursus magna nunc nam aliquet pretium varius et. Pellentesque vel ipsum purus lectus at enim.</p></div>`;
    },
    head: () => {
      return `<h2 slot="head">How much can i earn from my referral?</h2>`;
    }
  })}

        ${validate_component(FaqItem, "FaqItem").$$render($$result, {}, {}, {
    details: () => {
      return `<div slot="details" class="faq-answer"><p>Lorem ipsum dolor sit amet consectetur. Quis rhoncus cursus magna nunc nam aliquet pretium varius et. Pellentesque vel ipsum purus lectus at enim.</p></div>`;
    },
    head: () => {
      return `<h2 slot="head">How does the referral system work?</h2>`;
    }
  })}
        ${validate_component(FaqItem, "FaqItem").$$render($$result, {}, {}, {
    details: () => {
      return `<div slot="details" class="faq-answer"><p>Lorem ipsum dolor sit amet consectetur. Quis rhoncus cursus magna nunc nam aliquet pretium varius et. Pellentesque vel ipsum purus lectus at enim.</p></div>`;
    },
    head: () => {
      return `<h2 slot="head">What is USD reward and how does it work?</h2>`;
    }
  })}

        ${validate_component(FaqItem, "FaqItem").$$render($$result, {}, {}, {
    details: () => {
      return `<div slot="details" class="faq-answer"><p>Lorem ipsum dolor sit amet consectetur. Quis rhoncus cursus magna nunc nam aliquet pretium varius et. Pellentesque vel ipsum purus lectus at enim.</p></div>`;
    },
    head: () => {
      return `<h2 slot="head">What is USD reward and how does it work?</h2>`;
    }
  })}

        ${validate_component(FaqItem, "FaqItem").$$render($$result, {}, {}, {
    details: () => {
      return `<div slot="details" class="faq-answer"><p>Lorem ipsum dolor sit amet consectetur. Quis rhoncus cursus magna nunc nam aliquet pretium varius et. Pellentesque vel ipsum purus lectus at enim.</p></div>`;
    },
    head: () => {
      return `<h2 slot="head">Are there any banners I can use to advertise?</h2>`;
    }
  })}

        ${validate_component(FaqItem, "FaqItem").$$render($$result, {}, {}, {
    details: () => {
      return `<div slot="details" class="faq-answer"><p>Lorem ipsum dolor sit amet consectetur. Quis rhoncus cursus magna nunc nam aliquet pretium varius et. Pellentesque vel ipsum purus lectus at enim.</p></div>`;
    },
    head: () => {
      return `<h2 slot="head">I have big audience how I can get special deals?</h2>`;
    }
  })}

        ${validate_component(FaqItem, "FaqItem").$$render($$result, {}, {}, {
    details: () => {
      return `<div slot="details" class="faq-answer"><p>Lorem ipsum dolor sit amet consectetur. Quis rhoncus cursus magna nunc nam aliquet pretium varius et. Pellentesque vel ipsum purus lectus at enim.</p></div>`;
    },
    head: () => {
      return `<h2 slot="head">How many affiliate links can i create if I have differrent websites/accounts?</h2>`;
    }
  })}

        ${validate_component(FaqItem, "FaqItem").$$render($$result, {}, {}, {
    details: () => {
      return `<div slot="details" class="faq-answer"><p>Lorem ipsum dolor sit amet consectetur. Quis rhoncus cursus magna nunc nam aliquet pretium varius et. Pellentesque vel ipsum purus lectus at enim.</p></div>`;
    },
    head: () => {
      return `<h2 slot="head">Can I see the dara of my referral?</h2>`;
    }
  })}</div></div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-b51a85ad.js.map
