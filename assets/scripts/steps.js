const steps = {
  get "step-0" () {
    return `
    <main class="content">
      <section class="section container">
        <form class="form" data-js-form novalidate>
          <div class="steps" data-js-form-steps>
            <ul class="steps__list">
              <li class="steps__list-item">
                <div class="steps__label steps__label--active" data-js-form-step>
                  <span class="steps__label-step">1</span>
                </div>
                <div class="steps__info hidden-mobile">
                  <div class="steps__info-title">Step 1</div>
                  <div class="steps__info-description">Your info</div>
                </div>
              </li>
              <li class="steps__list-item">
                <div class="steps__label" data-js-form-step>
                  <span class="steps__label-step">2</span>
                </div>
                <div class="steps__info hidden-mobile">
                  <div class="steps__info-title">Step 2</div>
                  <div class="steps__info-description">Select Plan</div>
                </div>
              </li>
              <li class="steps__list-item">
                <div class="steps__label" data-js-form-step>
                  <span class="steps__label-step">3</span>
                </div>
                <div class="steps__info hidden-mobile">
                  <div class="steps__info-title">Step 3</div>
                  <div class="steps__info-description">Add-Ons</div>
                </div>
              </li>
              <li class="steps__list-item">
                <div class="steps__label" data-js-form-step>
                  <span class="steps__label-step">4</span>
                </div>
                <div class="steps__info hidden-mobile">
                  <div class="steps__info-title">Step 4</div>
                  <div class="steps__info-description">Summary</div>
                </div>
              </li>
            </ul>
          </div>
          <div class="form__body">
            <div class="personal-info">
              <div class="form__header">
                <h1 class="form__title">Personal info</h1>
                <p class="form__description">
                  Please provide your name, email address, and phone number
                </p>
              </div>
              <div class="form__inner">
                <div class="personal-info__body">
                  <div class="form__cell field" data-js-form-field>
                    <label class="field__label" for="name">Name</label>
                    <input
                      class="field__control"
                      id="name"
                      title="e.g. Stephen King"
                      placeholder="e.g. Stephen King"
                      required
                      data-js-form-field-control
                    />
                  </div>
                  <div class="form__cell field" data-js-form-field>
                    <label class="field__label" for="email"
                      >Email Address</label
                    >
                    <input
                      class="field__control"
                      id="email"
                      title="e.g stephen@lorem.com"
                      placeholder="e.g. stephenking@lorem.com"
                      required
                      data-js-form-field-control
                      data-js-form-field-control-email
                    />
                  </div>
                  <div class="form__cell field" data-js-form-field>
                    <label class="field__label" for="phone"
                      >Phone Number</label
                    >
                    <input
                      class="field__control"
                      id="phone" 
                      title="e.g +1234567890"
                      placeholder="e.g. +1 234 567 890"
                      required
                      data-js-form-field-control
                      data-js-form-field-control-phone
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="form__actions hidden-mobile" data-js-form-actions>
            <button type="button" class="form__button form__button--next" data-js-form-actions-next>
              <span>Next Step</span>
              <svg
                class="form__button-icon form__button-icon--next"
                viewBox="0 -6.5 36 36"
                version="1.1"
                height="24px"
                width="24px"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g
                    id="icons"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="ui-gambling-website-lined-icnos-casinoshunter"
                      transform="translate(-212.000000, -159.000000)"
                      fill="#252528"
                      fill-rule="nonzero"
                    >
                      <g
                        id="square-filled"
                        transform="translate(50.000000, 120.000000)"
                      >
                        <path
                          d="M187.108012,39.2902857 L197.649804,49.7417043 L197.708994,49.7959169 C197.889141,49.9745543 197.986143,50.2044182 198,50.4382227 L198,50.5617773 C197.986143,50.7955818 197.889141,51.0254457 197.708994,51.2040831 L197.6571,51.2479803 L187.108012,61.7097143 C186.717694,62.0967619 186.084865,62.0967619 185.694547,61.7097143 C185.30423,61.3226668 185.30423,60.6951387 185.694547,60.3080911 L194.702666,51.3738496 L162.99947,51.3746291 C162.447478,51.3746291 162,50.9308997 162,50.3835318 C162,49.8361639 162.447478,49.3924345 162.99947,49.3924345 L194.46779,49.3916551 L185.694547,40.6919089 C185.30423,40.3048613 185.30423,39.6773332 185.694547,39.2902857 C186.084865,38.9032381 186.717694,38.9032381 187.108012,39.2902857 Z M197.115357,50.382693 L186.401279,61.0089027 L197.002151,50.5002046 L197.002252,50.4963719 L196.943142,50.442585 L196.882737,50.382693 L197.115357,50.382693 Z"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </button>
          </div>
        </form>
      </section>

    </main>
    <div class="form__actions visible-mobile" data-js-form-actions>
      <button type="button" class="form__button form__button--next" data-js-form-actions-next>
        <span>Next Step</span>
        <svg
          class="form__button-icon form__button-icon--next"
          viewBox="0 -6.5 36 36"
          version="1.1"
          height="24px"
          width="24px"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g
              id="icons"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g
                id="ui-gambling-website-lined-icnos-casinoshunter"
                transform="translate(-212.000000, -159.000000)"
                fill="#252528"
                fill-rule="nonzero"
              >
                <g
                  id="square-filled"
                  transform="translate(50.000000, 120.000000)"
                >
                  <path
                    d="M187.108012,39.2902857 L197.649804,49.7417043 L197.708994,49.7959169 C197.889141,49.9745543 197.986143,50.2044182 198,50.4382227 L198,50.5617773 C197.986143,50.7955818 197.889141,51.0254457 197.708994,51.2040831 L197.6571,51.2479803 L187.108012,61.7097143 C186.717694,62.0967619 186.084865,62.0967619 185.694547,61.7097143 C185.30423,61.3226668 185.30423,60.6951387 185.694547,60.3080911 L194.702666,51.3738496 L162.99947,51.3746291 C162.447478,51.3746291 162,50.9308997 162,50.3835318 C162,49.8361639 162.447478,49.3924345 162.99947,49.3924345 L194.46779,49.3916551 L185.694547,40.6919089 C185.30423,40.3048613 185.30423,39.6773332 185.694547,39.2902857 C186.084865,38.9032381 186.717694,38.9032381 187.108012,39.2902857 Z M197.115357,50.382693 L186.401279,61.0089027 L197.002151,50.5002046 L197.002252,50.4963719 L196.943142,50.442585 L196.882737,50.382693 L197.115357,50.382693 Z"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </button>
    </div>
    `
  },
  get "step-1" () {
    return `
    <main class="content">
      <section class="section container">
        <form class="form" data-js-form novalidate>
          <div class="steps" data-js-form-steps>
            <ul class="steps__list">
              <li class="steps__list-item">
                <div class="steps__label" data-js-form-step>
                  <span class="steps__label-step">1</span>
                </div>
                <div class="steps__info hidden-mobile">
                  <div class="steps__info-title">Step 1</div>
                  <div class="steps__info-description">Your info</div>
                </div>
              </li>
              <li class="steps__list-item">
                <div class="steps__label" data-js-form-step>
                  <span class="steps__label-step">2</span>
                </div>
                <div class="steps__info hidden-mobile">
                  <div class="steps__info-title">Step 2</div>
                  <div class="steps__info-description">Select Plan</div>
                </div>
              </li>
              <li class="steps__list-item">
                <div class="steps__label" data-js-form-step>
                  <span class="steps__label-step">3</span>
                </div>
                <div class="steps__info hidden-mobile">
                  <div class="steps__info-title">Step 3</div>
                  <div class="steps__info-description">Add-Ons</div>
                </div>
              </li>
              <li class="steps__list-item">
                <div class="steps__label" data-js-form-step>
                  <span class="steps__label-step">4</span>
                </div>
                <div class="steps__info hidden-mobile">
                  <div class="steps__info-title">Step 4</div>
                  <div class="steps__info-description">Summary</div>
                </div>
              </li>
            </ul>
          </div>
          <div class="form__body">
            <div class="plans">
              <div class="form__header">
                <h1 class="form__title">Select your plan</h1>
                <p class="form__description">
                  You have the option of monthly or yearly billing.
                </p>
              </div>

              <ul class="plans__list">
                <li class="plans__item">
                  <div class="plans__card is-selected" tabindex="0" data-plan-name="arcade" data-js-form-plans-card>
                    <img
                      src="./assets/images/icon-arcade.svg"
                      class="plans__card-icon"
                      alt=""
                      width="50"
                      height="50"
                    />
                    <div class="plans__card-info" data-js-plans-card-info>
                      <span class="plans__card-info-key">Arcade</span>
                      <span class="plans__card-info-value" data-js-plan-price>$12/mo</span>
                    </div>
                  </div>
                </li>
                <li class="plans__item">
                  <div class="plans__card" tabindex="0" data-plan-name="advanced" data-js-form-plans-card>
                    <img
                      src="./assets/images/icon-pro.svg"
                      class="plans__card-icon"
                      alt=""
                      width="50"
                      height="50"
                    />
                    <div class="plans__card-info" data-js-plans-card-info>
                      <span class="plans__card-info-key">Advanced</span>
                      <span class="plans__card-info-value" data-js-plan-price>$15/mo</span>
                    </div>
                  </div>
                </li>
                <li class="plans__item">
                  <div class="plans__card" tabindex="0" data-plan-name="pro" data-js-form-plans-card>
                    <img
                      src="./assets/images/icon-advanced.svg"
                      class="plans__card-icon"
                      alt=""
                      width="50"
                      height="50"
                    />
                    <div class="plans__card-info" data-js-plans-card-info>
                      <span class="plans__card-info-key">Pro</span>
                      <span class="plans__card-info-value" data-js-plan-price>$18/mo</span>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="switcher" data-js-switcher>
                <div class="switcher__inner">
                  <span
                    class="switcher__variant switcher__variant--active"
                    data-js-switcher-variant-1
                    >Monthly</span
                  >
                  <label class="switcher__toggle" tabindex="0" data-js-switcher-toggle>
                    <input
                      type="checkbox"
                      class="switcher__checkbox"
                      id="switcher-checkbox"
                      data-js-switcher-checkbox
                    />
                    <span class="switcher__slider"></span>
                  </label>
                  <span
                    class="switcher__variant"
                    data-js-switcher-variant-2
                    >Yearly</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="form__actions hidden-mobile" data-js-form-actions>
            <button
              type="button"
              class="form__button form__button--prev"
              data-js-form-actions-prev
            >
              <svg
                class="form__button-icon form__button-icon--prev"
                fill="#000000"
                height="24px"
                width="24px"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 476.213 476.213"
                xml:space="preserve"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <polygon
                    points="476.213,223.107 57.427,223.107 151.82,128.713 130.607,107.5 0,238.106 130.607,368.714 151.82,347.5 57.427,253.107 476.213,253.107 "
                  ></polygon>
                </g>
              </svg>
              <span>Go Back</span>
            </button>
            <button
              type="button"
              class="form__button form__button--next"
              data-js-form-actions-next
            >
              <span>Next Step</span>
              <svg
                class="form__button-icon form__button-icon--next"
                viewBox="0 -6.5 36 36"
                version="1.1"
                height="24px"
                width="24px"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g
                    id="icons"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="ui-gambling-website-lined-icnos-casinoshunter"
                      transform="translate(-212.000000, -159.000000)"
                      fill="#252528"
                      fill-rule="nonzero"
                    >
                      <g
                        id="square-filled"
                        transform="translate(50.000000, 120.000000)"
                      >
                        <path
                          d="M187.108012,39.2902857 L197.649804,49.7417043 L197.708994,49.7959169 C197.889141,49.9745543 197.986143,50.2044182 198,50.4382227 L198,50.5617773 C197.986143,50.7955818 197.889141,51.0254457 197.708994,51.2040831 L197.6571,51.2479803 L187.108012,61.7097143 C186.717694,62.0967619 186.084865,62.0967619 185.694547,61.7097143 C185.30423,61.3226668 185.30423,60.6951387 185.694547,60.3080911 L194.702666,51.3738496 L162.99947,51.3746291 C162.447478,51.3746291 162,50.9308997 162,50.3835318 C162,49.8361639 162.447478,49.3924345 162.99947,49.3924345 L194.46779,49.3916551 L185.694547,40.6919089 C185.30423,40.3048613 185.30423,39.6773332 185.694547,39.2902857 C186.084865,38.9032381 186.717694,38.9032381 187.108012,39.2902857 Z M197.115357,50.382693 L186.401279,61.0089027 L197.002151,50.5002046 L197.002252,50.4963719 L196.943142,50.442585 L196.882737,50.382693 L197.115357,50.382693 Z"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </button>
          </div>
        </form>
      </section>
    </main>
    <div class="form__actions visible-mobile" data-js-form-actions>
      <button
        type="button"
        class="form__button form__button--prev"
        data-js-form-actions-prev
      >
        <svg
          class="form__button-icon form__button-icon--prev"
          fill="#000000"
          height="24px"
          width="24px"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 476.213 476.213"
          xml:space="preserve"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <polygon
              points="476.213,223.107 57.427,223.107 151.82,128.713 130.607,107.5 0,238.106 130.607,368.714 151.82,347.5 57.427,253.107 476.213,253.107 "
            ></polygon>
          </g>
        </svg>
        <span>Go Back</span>
      </button>
      <button
        type="button"
        class="form__button form__button--next"
        data-js-form-actions-next
      >
        <span>Next Step</span>
        <svg
          class="form__button-icon form__button-icon--next"
          viewBox="0 -6.5 36 36"
          version="1.1"
          height="24px"
          width="24px"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g
              id="icons"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g
                id="ui-gambling-website-lined-icnos-casinoshunter"
                transform="translate(-212.000000, -159.000000)"
                fill="#252528"
                fill-rule="nonzero"
              >
                <g
                  id="square-filled"
                  transform="translate(50.000000, 120.000000)"
                >
                  <path
                    d="M187.108012,39.2902857 L197.649804,49.7417043 L197.708994,49.7959169 C197.889141,49.9745543 197.986143,50.2044182 198,50.4382227 L198,50.5617773 C197.986143,50.7955818 197.889141,51.0254457 197.708994,51.2040831 L197.6571,51.2479803 L187.108012,61.7097143 C186.717694,62.0967619 186.084865,62.0967619 185.694547,61.7097143 C185.30423,61.3226668 185.30423,60.6951387 185.694547,60.3080911 L194.702666,51.3738496 L162.99947,51.3746291 C162.447478,51.3746291 162,50.9308997 162,50.3835318 C162,49.8361639 162.447478,49.3924345 162.99947,49.3924345 L194.46779,49.3916551 L185.694547,40.6919089 C185.30423,40.3048613 185.30423,39.6773332 185.694547,39.2902857 C186.084865,38.9032381 186.717694,38.9032381 187.108012,39.2902857 Z M197.115357,50.382693 L186.401279,61.0089027 L197.002151,50.5002046 L197.002252,50.4963719 L196.943142,50.442585 L196.882737,50.382693 L197.115357,50.382693 Z"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </button>
    </div>
    `
  },

  get "step-2" () {
    return `
    <main class="content">
      <section class="section container">
        <form class="form" data-js-form novalidate>
          <div class="steps" data-js-form-steps>
            <ul class="steps__list">
              <li class="steps__list-item">
                <div class="steps__label" data-js-form-step>
                  <span class="steps__label-step">1</span>
                </div>
                <div class="steps__info hidden-mobile">
                  <div class="steps__info-title">Step 1</div>
                  <div class="steps__info-description">Your info</div>
                </div>
              </li>
              <li class="steps__list-item">
                <div class="steps__label" data-js-form-step>
                  <span class="steps__label-step">2</span>
                </div>
                <div class="steps__info hidden-mobile">
                  <div class="steps__info-title">Step 2</div>
                  <div class="steps__info-description">Select Plan</div>
                </div>
              </li>
              <li class="steps__list-item">
                <div class="steps__label" data-js-form-step>
                  <span class="steps__label-step">3</span>
                </div>
                <div class="steps__info hidden-mobile">
                  <div class="steps__info-title">Step 3</div>
                  <div class="steps__info-description">Add-Ons</div>
                </div>
              </li>
              <li class="steps__list-item">
                <div class="steps__label" data-js-form-step>
                  <span class="steps__label-step">4</span>
                </div>
                <div class="steps__info hidden-mobile">
                  <div class="steps__info-title">Step 4</div>
                  <div class="steps__info-description">Summary</div>
                </div>
              </li>
            </ul>
          </div>
          <div class="form__body">
            <div class="plans">
              <div class="form__header">
                <h1 class="form__title">Select your plan</h1>
                <p class="form__description">
                  You have the option of monthly or yearly billing.
                </p>
              </div>

              <ul class="plans__list">
                <li class="plans__item">
                  <div class="plans__card is-selected" tabindex="0" data-plan-name="arcade" data-js-form-plans-card>
                    <img
                      src="./assets/images/icon-arcade.svg"
                      class="plans__card-icon"
                      alt=""
                      width="50"
                      height="50"
                    />
                    <div class="plans__card-info" data-js-plans-card-info>
                      <span class="plans__card-info-key">Arcade</span>
                      <span class="plans__card-info-value" data-js-plan-price>$9/mo</span>
                    </div>
                  </div>
                </li>
                <li class="plans__item">
                  <div class="plans__card" tabindex="0" data-plan-name="advanced" data-js-form-plans-card>
                    <img
                      src="./assets/images/icon-pro.svg"
                      class="plans__card-icon"
                      alt=""
                      width="50"
                      height="50"
                    />
                    <div class="plans__card-info" data-js-plans-card-info>
                      <span class="plans__card-info-key">Advanced</span>
                      <span class="plans__card-info-value" data-js-plan-price>$12/mo</span>
                    </div>
                  </div>
                </li>
                <li class="plans__item">
                  <div class="plans__card" tabindex="0" data-plan-name="pro" data-js-form-plans-card>
                    <img
                      src="./assets/images/icon-advanced.svg"
                      class="plans__card-icon"
                      alt=""
                      width="50"
                      height="50"
                    />
                    <div class="plans__card-info" data-js-plans-card-info>
                      <span class="plans__card-info-key">Pro</span>
                      <span class="plans__card-info-value" data-js-plan-price>$15/mo</span>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="switcher" data-js-switcher>
                <div class="switcher__inner">
                  <span
                    class="switcher__variant switcher__variant--active"
                    data-js-switcher-variant-1
                    >Monthly</span
                  >
                  <label class="switcher__toggle" tabindex="0" data-js-switcher-toggle>
                    <input
                      type="checkbox"
                      class="switcher__checkbox"
                      id="switcher-checkbox"
                      data-js-switcher-checkbox
                    />
                    <span class="switcher__slider"></span>
                  </label>
                  <span
                    class="switcher__variant"
                    data-js-switcher-variant-2
                    >Yearly</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="form__actions hidden-mobile" data-js-form-actions>
            <button
              type="button"
              class="form__button form__button--prev"
              data-js-form-actions-prev
            >
              <svg
                class="form__button-icon form__button-icon--prev"
                fill="#000000"
                height="24px"
                width="24px"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 476.213 476.213"
                xml:space="preserve"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <polygon
                    points="476.213,223.107 57.427,223.107 151.82,128.713 130.607,107.5 0,238.106 130.607,368.714 151.82,347.5 57.427,253.107 476.213,253.107 "
                  ></polygon>
                </g>
              </svg>
              <span>Go Back</span>
            </button>
            <button
              type="button"
              class="form__button form__button--next"
              data-js-form-actions-next
            >
              <span>Next Step</span>
              <svg
                class="form__button-icon form__button-icon--next"
                viewBox="0 -6.5 36 36"
                version="1.1"
                height="24px"
                width="24px"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g
                    id="icons"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="ui-gambling-website-lined-icnos-casinoshunter"
                      transform="translate(-212.000000, -159.000000)"
                      fill="#252528"
                      fill-rule="nonzero"
                    >
                      <g
                        id="square-filled"
                        transform="translate(50.000000, 120.000000)"
                      >
                        <path
                          d="M187.108012,39.2902857 L197.649804,49.7417043 L197.708994,49.7959169 C197.889141,49.9745543 197.986143,50.2044182 198,50.4382227 L198,50.5617773 C197.986143,50.7955818 197.889141,51.0254457 197.708994,51.2040831 L197.6571,51.2479803 L187.108012,61.7097143 C186.717694,62.0967619 186.084865,62.0967619 185.694547,61.7097143 C185.30423,61.3226668 185.30423,60.6951387 185.694547,60.3080911 L194.702666,51.3738496 L162.99947,51.3746291 C162.447478,51.3746291 162,50.9308997 162,50.3835318 C162,49.8361639 162.447478,49.3924345 162.99947,49.3924345 L194.46779,49.3916551 L185.694547,40.6919089 C185.30423,40.3048613 185.30423,39.6773332 185.694547,39.2902857 C186.084865,38.9032381 186.717694,38.9032381 187.108012,39.2902857 Z M197.115357,50.382693 L186.401279,61.0089027 L197.002151,50.5002046 L197.002252,50.4963719 L196.943142,50.442585 L196.882737,50.382693 L197.115357,50.382693 Z"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </button>
          </div>
        </form>
      </section>
    </main>
    <div class="form__actions visible-mobile" data-js-form-actions>
      <button
        type="button"
        class="form__button form__button--prev"
        data-js-form-actions-prev
      >
        <svg
          class="form__button-icon form__button-icon--prev"
          fill="#000000"
          height="24px"
          width="24px"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 476.213 476.213"
          xml:space="preserve"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <polygon
              points="476.213,223.107 57.427,223.107 151.82,128.713 130.607,107.5 0,238.106 130.607,368.714 151.82,347.5 57.427,253.107 476.213,253.107 "
            ></polygon>
          </g>
        </svg>
        <span>Go Back</span>
      </button>
      <button
        type="button"
        class="form__button form__button--next"
        data-js-form-actions-next
      >
        <span>Next Step</span>
        <svg
          class="form__button-icon form__button-icon--next"
          viewBox="0 -6.5 36 36"
          version="1.1"
          height="24px"
          width="24px"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g
              id="icons"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g
                id="ui-gambling-website-lined-icnos-casinoshunter"
                transform="translate(-212.000000, -159.000000)"
                fill="#252528"
                fill-rule="nonzero"
              >
                <g
                  id="square-filled"
                  transform="translate(50.000000, 120.000000)"
                >
                  <path
                    d="M187.108012,39.2902857 L197.649804,49.7417043 L197.708994,49.7959169 C197.889141,49.9745543 197.986143,50.2044182 198,50.4382227 L198,50.5617773 C197.986143,50.7955818 197.889141,51.0254457 197.708994,51.2040831 L197.6571,51.2479803 L187.108012,61.7097143 C186.717694,62.0967619 186.084865,62.0967619 185.694547,61.7097143 C185.30423,61.3226668 185.30423,60.6951387 185.694547,60.3080911 L194.702666,51.3738496 L162.99947,51.3746291 C162.447478,51.3746291 162,50.9308997 162,50.3835318 C162,49.8361639 162.447478,49.3924345 162.99947,49.3924345 L194.46779,49.3916551 L185.694547,40.6919089 C185.30423,40.3048613 185.30423,39.6773332 185.694547,39.2902857 C186.084865,38.9032381 186.717694,38.9032381 187.108012,39.2902857 Z M197.115357,50.382693 L186.401279,61.0089027 L197.002151,50.5002046 L197.002252,50.4963719 L196.943142,50.442585 L196.882737,50.382693 L197.115357,50.382693 Z"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </button>
    </div>
    `
  }
};

export default steps;
