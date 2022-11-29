import React from 'react';
import './CorrespondenceMessages/nav.css';
import './CorrespondenceMessages/globalnav.css';

export const Header = () => {


    return (
        <header
        id="awsc-nav-header"
        data-testid="awsc-nav-header"
        className="globalNav-031"
      >
        <nav className="globalNav-032" aria-label="Navigation bar" style={{
    
        }}>
          <nav aria-label="Navigation bar">
            <div className="globalNav-033">
              <div className="globalNav-033">
                <a
                  className="globalNav-0398 globalNav-034 globalNav-035"
                  id="nav-home-link"
                  data-testid="nav-logo"
                  href="https://console.aws.amazon.com/console/home"
                  target="_top"
                  title="Console Home"
                  rel="noopener noreferrer"
                  
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="2.0"
                    focusable="false"
                    aria-hidden="true"
                    className="globalNav-0311 globalNav-038"
                    viewBox="0 0 29 17"
                  >
                    <path
                      className="globalNav-039"
                      d="M8.38 6.17a2.6 2.6 0 00.11.83c.08.232.18.456.3.67a.4.4 0 01.07.21.36.36 0 01-.18.28l-.59.39a.43.43 0 01-.24.08.38.38 0 01-.28-.13 2.38 2.38 0 01-.34-.43c-.09-.16-.18-.34-.28-.55a3.44 3.44 0 01-2.74 1.29 2.54 2.54 0 01-1.86-.67 2.36 2.36 0 01-.68-1.79 2.43 2.43 0 01.84-1.92 3.43 3.43 0 012.29-.72 6.75 6.75 0 011 .07c.35.05.7.12 1.07.2V3.3a2.06 2.06 0 00-.44-1.49 2.12 2.12 0 00-1.52-.43 4.4 4.4 0 00-1 .12 6.85 6.85 0 00-1 .32l-.33.12h-.14c-.14 0-.2-.1-.2-.29v-.46A.62.62 0 012.3.87a.78.78 0 01.27-.2A6 6 0 013.74.25 5.7 5.7 0 015.19.07a3.37 3.37 0 012.44.76 3 3 0 01.77 2.29l-.02 3.05zM4.6 7.59a3 3 0 001-.17 2 2 0 00.88-.6 1.36 1.36 0 00.32-.59 3.18 3.18 0 00.09-.81V5A7.52 7.52 0 006 4.87h-.88a2.13 2.13 0 00-1.38.37 1.3 1.3 0 00-.46 1.08 1.3 1.3 0 00.34 1c.278.216.63.313.98.27zm7.49 1a.56.56 0 01-.36-.09.73.73 0 01-.2-.37L9.35.93a1.39 1.39 0 01-.08-.38c0-.15.07-.23.22-.23h.92a.56.56 0 01.36.09.74.74 0 01.19.37L12.53 7 14 .79a.61.61 0 01.18-.37.59.59 0 01.37-.09h.75a.62.62 0 01.38.09.74.74 0 01.18.37L17.31 7 18.92.76a.74.74 0 01.19-.37.56.56 0 01.36-.09h.87a.21.21 0 01.23.23 1 1 0 010 .15s0 .13-.06.23l-2.26 7.2a.74.74 0 01-.19.37.6.6 0 01-.36.09h-.8a.53.53 0 01-.37-.1.64.64 0 01-.18-.37l-1.45-6-1.44 6a.64.64 0 01-.18.37.55.55 0 01-.37.1l-.82.02zm12 .24a6.29 6.29 0 01-1.44-.16 4.21 4.21 0 01-1.07-.37.69.69 0 01-.29-.26.66.66 0 01-.06-.27V7.3c0-.19.07-.29.21-.29a.57.57 0 01.18 0l.23.1c.32.143.656.25 1 .32.365.08.737.12 1.11.12a2.47 2.47 0 001.36-.31 1 1 0 00.48-.88.88.88 0 00-.25-.65 2.29 2.29 0 00-.94-.49l-1.35-.43a2.83 2.83 0 01-1.49-.94 2.24 2.24 0 01-.47-1.36 2 2 0 01.25-1c.167-.3.395-.563.67-.77a3 3 0 011-.48A4.1 4.1 0 0124.4.08a4.4 4.4 0 01.62 0l.61.1.53.15.39.16c.105.062.2.14.28.23a.57.57 0 01.08.31v.44c0 .2-.07.3-.21.3a.92.92 0 01-.36-.12 4.35 4.35 0 00-1.8-.36 2.51 2.51 0 00-1.24.26.92.92 0 00-.44.84c0 .249.1.488.28.66.295.236.635.41 1 .51l1.32.42a2.88 2.88 0 011.44.9 2.1 2.1 0 01.43 1.31 2.38 2.38 0 01-.24 1.08 2.34 2.34 0 01-.68.82 3 3 0 01-1 .53 4.59 4.59 0 01-1.35.22l.03-.01z"
                    ></path>
                    <path
                      className="globalNav-0310"
                      d="M25.82 13.43a20.07 20.07 0 01-11.35 3.47A20.54 20.54 0 01.61 11.62c-.29-.26 0-.62.32-.42a27.81 27.81 0 0013.86 3.68 27.54 27.54 0 0010.58-2.16c.52-.22.96.34.45.71z"
                    ></path>
                    <path
                      className="globalNav-0310"
                      d="M27.1 12c-.4-.51-2.6-.24-3.59-.12-.3 0-.34-.23-.07-.42 1.75-1.23 4.63-.88 5-.46.37.42-.09 3.3-1.74 4.68-.25.21-.49.09-.38-.18.34-.95 1.17-3.02.78-3.5z"
                    ></path></svg></a
                ><a
                  className="globalNav-0398 DTsYC4MpwPd9dAHVQyIyz"
                  href="https://support.console.aws.amazon.com/support/home#c"
                  data-testid="awsc-skip-to-main-content"
                  tabIndex={1}
                  >Skip to Main Content</a
                >
                <div className="globalNav-0312"  > 
                  <div className="Tm-3QhwnUkj2Uw-lI2pkk">
                    <button
                      aria-controls="menu--services"
                      aria-haspopup="menu"
                      className="_1c9itAyTQu7kLsk0Fy-yGs _3MVY6jGnrO4f9UF9n0ijD3"
                      data-testid="aws-services-list-button"
                      title="Services"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="4"
                          height="4"
                          rx="1"
                          fill="currentColor"
                        ></rect>
                        <rect
                          y="6"
                          width="4"
                          height="4"
                          rx="1"
                          fill="currentColor"
                        ></rect>
                        <rect
                          y="12"
                          width="4"
                          height="4"
                          rx="1"
                          fill="currentColor"
                        ></rect>
                        <rect
                          x="6"
                          width="4"
                          height="4"
                          rx="1"
                          fill="currentColor"
                        ></rect>
                        <rect
                          x="6"
                          y="6"
                          width="4"
                          height="4"
                          rx="1"
                          fill="currentColor"
                        ></rect>
                        <rect
                          x="6"
                          y="12"
                          width="4"
                          height="4"
                          rx="1"
                          fill="currentColor"
                        ></rect>
                        <rect
                          x="12"
                          width="4"
                          height="4"
                          rx="1"
                          fill="currentColor"
                        ></rect>
                        <rect
                          x="12"
                          y="6"
                          width="4"
                          height="4"
                          rx="1"
                          fill="currentColor"
                        ></rect>
                        <rect
                          x="12"
                          y="12"
                          width="4"
                          height="4"
                          rx="1"
                          fill="currentColor"
                        ></rect></svg
                      ><span className="globalNav-0313">Services</span>
                    </button>
                    <div
                      className="awsc-top-below-nav awsc-bot-above-f awsc-max-height-between-nav-f-margin _2_o9M7vHAJ0PnLTGrKSm91 _1bCyxqM6NO95SxwZWnxVCJ _18HxTDJVuXetYgB8chpUz2 _2B2BSCN_DL0qKMBVyKmX7b"
                    >
                      <div
                        data-testid="awsc-nav-service-menu"
                        className="globalNav-0361"
                        role="dialog"
                        id="menu--services"
                        aria-label="Services"
                      >
                        <div
                          className="awsui_flashbar_1q84n_1tn8b_295 awsui_breakpoint-default_1q84n_1tn8b_401"
                        >
                          <div className="awsui-context-flashbar"></div>
                        </div>
                        <div className="globalNav-0362">
                          <h2 className="globalNav-0363">Services</h2>
                          <div
                            className="awsui-context-top-navigation globalNav-0364"
                          >
                            <div
                              className="awsui_root_14rmt_oujth_352 awsui_tabs_14rmt_oujth_186"
                            >
                              <div
                                className="awsui_tabs-header_14rmt_oujth_186 awsui_tabs-header-with-divider_14rmt_oujth_348"
                              >
                                <ul
                                  role="tablist"
                                  className="awsui_tabs-header-list_14rmt_oujth_192"
                                >
                                  <li
                                    className="awsui_tabs-tab_14rmt_oujth_226"
                                    role="presentation"
                                  >
                                    <button
                                      className="awsui_tabs-tab-link_14rmt_oujth_253 awsui_tabs-tab-active_14rmt_oujth_341"
                                      role="tab"
                                      aria-selected="true"
                                      aria-controls="awsui-tabs-0-3347-recentlyVisited-panel"
                                      data-testid="recentlyVisited"
                                      tabIndex={0}
                                      type="button"
                                    >
                                      <span
                                        className="awsui_tabs-tab-label_14rmt_oujth_237"
                                        >Recently visited</span
                                      >
                                    </button>
                                  </li>
                                  <li
                                    className="awsui_tabs-tab_14rmt_oujth_226"
                                    role="presentation"
                                  >
                                    <button
                                      className="awsui_tabs-tab-link_14rmt_oujth_253"
                                      role="tab"
                                      aria-selected="false"
                                      aria-controls="awsui-tabs-0-3347-favorites-panel"
                                      data-testid="favorites"
                                      tabIndex={-1}
                                      type="button"
                                    >
                                      <span
                                        className="awsui_tabs-tab-label_14rmt_oujth_237"
                                        >Favorites</span
                                      >
                                    </button>
                                  </li>
                                  <li
                                    className="awsui_tabs-tab_14rmt_oujth_226"
                                    role="presentation"
                                  >
                                    <button
                                      className="awsui_tabs-tab-link_14rmt_oujth_253"
                                      role="tab"
                                      aria-selected="false"
                                      aria-controls="awsui-tabs-0-3347-allServices-panel"
                                      data-testid="allServices"
                                      tabIndex={-1}
                                      type="button"
                                    >
                                      <span
                                        className="awsui_tabs-tab-label_14rmt_oujth_237"
                                        >All services</span
                                      >
                                    </button>
                                  </li>
                                </ul>
                              </div>
                              <div
                                className="awsui_tabs-content-wrapper_14rmt_oujth_369 awsui_with-paddings_14rmt_oujth_369"
                              >
                                <div
                                  className="awsui_tabs-content_14rmt_oujth_369 awsui_tabs-content-active_14rmt_oujth_381"
                                  role="tabpanel"
                                  id="awsui-tabs-0-3347-recentlyVisited-panel"
                                >
                                  <h1
                                    className="globalNav-0365 globalNav-0366"
                                  >
                                    <svg
                                      width="50"
                                      height="50"
                                      viewBox="-4 -3 50 50"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g
                                        stroke="#879596"
                                        stroke-width="2"
                                        fill-rule="evenodd"
                                        stroke-linejoin="round"
                                        transform="translate(4.5,4) scale(.8)"
                                      >
                                        <path
                                          d="M20.2896 1L2 10.4139L19.7792 19.7423L38.1538 10.4139L20.2896 1Z"
                                        ></path>
                                        <path
                                          d="M2 10.4141V34.2057L20.0344 43.5341V19.7424L2 10.4141Z"
                                        ></path>
                                        <path
                                          d="M38.1541 10.4141V34.2057L20.0347 43.5341V19.7424L38.1541 10.4141Z"
                                        ></path>
                                      </g></svg
                                    >Recently visited
                                  </h1>
                                  <div
                                    className="globalNav-0367 globalNav-0368"
                                    data-testid="recently-visited-container"
                                  >
                                    <ul
                                      className="globalNav-0397"
                                      data-testid=""
                                    >
                                      <li
                                        className="_1DUEA3IJy2eDwsVuxM14ny"
                                        data-testid="-s"
                                      >
                                        <button
                                          type="button"
                                          className="globalNav-0399 _1sh5akoo7uxw32dE4fwwB1 _2xfNeYS2hLAYcWl6304QfA"
                                          aria-label='Add "Support" to favorites'
                                          data-testid="service-list-item-toggle-favorite-button-s"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            version="2.0"
                                            focusable="false"
                                            aria-hidden="true"
                                            className="globalNav-0311"
                                            viewBox="0 0 16 15"
                                            height="18px"
                                            width="18px"
                                          >
                                            <path
                                              fill="none"
                                              stroke="#FFFFFF"
                                              stroke-width="1"
                                              stroke-linejoin="round"
                                              stroke-miterlimit="10"
                                              d="M8 0.835615L9.70288 5.13601C9.84624 5.49806 10.1867 5.74396 10.5755 5.76621L15.2372 6.03304L11.636 8.94101C11.3289 9.18897 11.1964 9.59436 11.2978 9.97581L12.4793 14.4229L8.53442 11.9285C8.20803 11.7221 7.79197 11.7221 7.46557 11.9285L3.52065 14.4229L4.70221 9.97581C4.80356 9.59436 4.67107 9.18898 4.364 8.94101L0.762825 6.03304L5.4245 5.76621C5.81327 5.74396 6.15376 5.49806 6.29712 5.13601L8 0.835615Z"
                                            ></path>
                                          </svg></button
                                        ><a
                                          className="globalNav-0398 _16Irp43n86oNmqMVsk6FLi"
                                          href="https://support.console.aws.amazon.com/support/home"
                                          target="_top"
                                          title="Contact AWS for technical and account support."
                                          aria-disabled="false"
                                          role="link"
                                          data-testid="s"
                                          ><h3
                                            className="_2TdmLn1rgDIHj-52nOg80B"
                                          >
                                            Support
                                          </h3>
                                          <p
                                            className="_1-sVKFnf7Qe_IKS1gzUGlo"
                                          >
                                            Contact AWS for technical
                                            and account support.
                                          </p></a
                                        >
                                      </li>
                                      <li
                                        className="_1DUEA3IJy2eDwsVuxM14ny"
                                        data-testid="-kms"
                                      >
                                        <button
                                          type="button"
                                          className="globalNav-0399 _1sh5akoo7uxw32dE4fwwB1 _2xfNeYS2hLAYcWl6304QfA"
                                          aria-label='Add "Key Management Service" to favorites'
                                          data-testid="service-list-item-toggle-favorite-button-kms"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            version="2.0"
                                            focusable="false"
                                            aria-hidden="true"
                                            className="globalNav-0311"
                                            viewBox="0 0 16 15"
                                            height="18px"
                                            width="18px"
                                          >
                                            <path
                                              fill="none"
                                              stroke="#FFFFFF"
                                              stroke-width="1"
                                              stroke-linejoin="round"
                                              stroke-miterlimit="10"
                                              d="M8 0.835615L9.70288 5.13601C9.84624 5.49806 10.1867 5.74396 10.5755 5.76621L15.2372 6.03304L11.636 8.94101C11.3289 9.18897 11.1964 9.59436 11.2978 9.97581L12.4793 14.4229L8.53442 11.9285C8.20803 11.7221 7.79197 11.7221 7.46557 11.9285L3.52065 14.4229L4.70221 9.97581C4.80356 9.59436 4.67107 9.18898 4.364 8.94101L0.762825 6.03304L5.4245 5.76621C5.81327 5.74396 6.15376 5.49806 6.29712 5.13601L8 0.835615Z"
                                            ></path>
                                          </svg></button
                                        ><a
                                          className="globalNav-0398 _16Irp43n86oNmqMVsk6FLi"
                                          href="https://console.aws.amazon.com/kms/home"
                                          target="_top"
                                          title="Securely Generate and Manage AWS Encryption Keys"
                                          aria-disabled="false"
                                          role="link"
                                          data-testid="kms"
                                          ><h3
                                            className="_2TdmLn1rgDIHj-52nOg80B"
                                          >
                                            Key Management Service
                                          </h3>
                                          <p
                                            className="_1-sVKFnf7Qe_IKS1gzUGlo"
                                          >
                                            Securely Generate and Manage
                                            AWS Encryption Keys
                                          </p></a
                                        >
                                      </li>
                                      <li
                                        className="_1DUEA3IJy2eDwsVuxM14ny"
                                        data-testid="-license-manager"
                                      >
                                        <button
                                          type="button"
                                          className="globalNav-0399 _1sh5akoo7uxw32dE4fwwB1 _2xfNeYS2hLAYcWl6304QfA"
                                          aria-label='Add "AWS License Manager" to favorites'
                                          data-testid="service-list-item-toggle-favorite-button-license-manager"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            version="2.0"
                                            focusable="false"
                                            aria-hidden="true"
                                            className="globalNav-0311"
                                            viewBox="0 0 16 15"
                                            height="18px"
                                            width="18px"
                                          >
                                            <path
                                              fill="none"
                                              stroke="#FFFFFF"
                                              stroke-width="1"
                                              stroke-linejoin="round"
                                              stroke-miterlimit="10"
                                              d="M8 0.835615L9.70288 5.13601C9.84624 5.49806 10.1867 5.74396 10.5755 5.76621L15.2372 6.03304L11.636 8.94101C11.3289 9.18897 11.1964 9.59436 11.2978 9.97581L12.4793 14.4229L8.53442 11.9285C8.20803 11.7221 7.79197 11.7221 7.46557 11.9285L3.52065 14.4229L4.70221 9.97581C4.80356 9.59436 4.67107 9.18898 4.364 8.94101L0.762825 6.03304L5.4245 5.76621C5.81327 5.74396 6.15376 5.49806 6.29712 5.13601L8 0.835615Z"
                                            ></path>
                                          </svg></button
                                        ><a
                                          className="globalNav-0398 _16Irp43n86oNmqMVsk6FLi"
                                          href="https://console.aws.amazon.com/license-manager/home"
                                          target="_top"
                                          title="Set rules to manage, discover, and report third-party license usage proactively"
                                          aria-disabled="false"
                                          role="link"
                                          data-testid="license-manager"
                                          ><h3
                                            className="_2TdmLn1rgDIHj-52nOg80B"
                                          >
                                            AWS License Manager
                                          </h3>
                                          <p
                                            className="_1-sVKFnf7Qe_IKS1gzUGlo"
                                          >
                                            Set rules to manage,
                                            discover, and report
                                            third-party license usage
                                            proactively
                                          </p></a
                                        >
                                      </li>
                                      <li
                                        className="_1DUEA3IJy2eDwsVuxM14ny"
                                        data-testid="-marketplace"
                                      >
                                        <button
                                          type="button"
                                          className="globalNav-0399 _1sh5akoo7uxw32dE4fwwB1 _2xfNeYS2hLAYcWl6304QfA"
                                          aria-label='Add "AWS Marketplace Subscriptions" to favorites'
                                          data-testid="service-list-item-toggle-favorite-button-marketplace"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            version="2.0"
                                            focusable="false"
                                            aria-hidden="true"
                                            className="globalNav-0311"
                                            viewBox="0 0 16 15"
                                            height="18px"
                                            width="18px"
                                          >
                                            <path
                                              fill="none"
                                              stroke="#FFFFFF"
                                              stroke-width="1"
                                              stroke-linejoin="round"
                                              stroke-miterlimit="10"
                                              d="M8 0.835615L9.70288 5.13601C9.84624 5.49806 10.1867 5.74396 10.5755 5.76621L15.2372 6.03304L11.636 8.94101C11.3289 9.18897 11.1964 9.59436 11.2978 9.97581L12.4793 14.4229L8.53442 11.9285C8.20803 11.7221 7.79197 11.7221 7.46557 11.9285L3.52065 14.4229L4.70221 9.97581C4.80356 9.59436 4.67107 9.18898 4.364 8.94101L0.762825 6.03304L5.4245 5.76621C5.81327 5.74396 6.15376 5.49806 6.29712 5.13601L8 0.835615Z"
                                            ></path>
                                          </svg></button
                                        ><a
                                          className="globalNav-0398 _16Irp43n86oNmqMVsk6FLi"
                                          href="https://console.aws.amazon.com/marketplace/home"
                                          target="_top"
                                          title="Digital catalog where you can find, buy, and deploy software"
                                          aria-disabled="false"
                                          role="link"
                                          data-testid="marketplace"
                                          ><h3
                                            className="_2TdmLn1rgDIHj-52nOg80B"
                                          >
                                            AWS Marketplace
                                            Subscriptions
                                          </h3>
                                          <p
                                            className="_1-sVKFnf7Qe_IKS1gzUGlo"
                                          >
                                            Digital catalog where you
                                            can find, buy, and deploy
                                            software
                                          </p></a
                                        >
                                      </li>
                                      <li
                                        className="_1DUEA3IJy2eDwsVuxM14ny"
                                        data-testid="-s3"
                                      >
                                        <button
                                          type="button"
                                          className="globalNav-0399 _1sh5akoo7uxw32dE4fwwB1 _2xfNeYS2hLAYcWl6304QfA"
                                          aria-label='Add "S3" to favorites'
                                          data-testid="service-list-item-toggle-favorite-button-s3"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            version="2.0"
                                            focusable="false"
                                            aria-hidden="true"
                                            className="globalNav-0311"
                                            viewBox="0 0 16 15"
                                            height="18px"
                                            width="18px"
                                          >
                                            <path
                                              fill="none"
                                              stroke="#FFFFFF"
                                              stroke-width="1"
                                              stroke-linejoin="round"
                                              stroke-miterlimit="10"
                                              d="M8 0.835615L9.70288 5.13601C9.84624 5.49806 10.1867 5.74396 10.5755 5.76621L15.2372 6.03304L11.636 8.94101C11.3289 9.18897 11.1964 9.59436 11.2978 9.97581L12.4793 14.4229L8.53442 11.9285C8.20803 11.7221 7.79197 11.7221 7.46557 11.9285L3.52065 14.4229L4.70221 9.97581C4.80356 9.59436 4.67107 9.18898 4.364 8.94101L0.762825 6.03304L5.4245 5.76621C5.81327 5.74396 6.15376 5.49806 6.29712 5.13601L8 0.835615Z"
                                            ></path>
                                          </svg></button
                                        ><a
                                          className="globalNav-0398 _16Irp43n86oNmqMVsk6FLi"
                                          href="https://s3.console.aws.amazon.com/s3/home"
                                          target="_top"
                                          title="Scalable Storage in the Cloud"
                                          aria-disabled="false"
                                          role="link"
                                          data-testid="s3"
                                          ><h3
                                            className="_2TdmLn1rgDIHj-52nOg80B"
                                          >
                                            S3
                                          </h3>
                                          <p
                                            className="_1-sVKFnf7Qe_IKS1gzUGlo"
                                          >
                                            Scalable Storage in the
                                            Cloud
                                          </p></a
                                        >
                                      </li>
                                      <li
                                        className="_1DUEA3IJy2eDwsVuxM14ny"
                                        data-testid="-iam"
                                      >
                                        <button
                                          type="button"
                                          className="globalNav-0399 _1sh5akoo7uxw32dE4fwwB1 _2xfNeYS2hLAYcWl6304QfA"
                                          aria-label='Add "IAM" to favorites'
                                          data-testid="service-list-item-toggle-favorite-button-iam"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            version="2.0"
                                            focusable="false"
                                            aria-hidden="true"
                                            className="globalNav-0311"
                                            viewBox="0 0 16 15"
                                            height="18px"
                                            width="18px"
                                          >
                                            <path
                                              fill="none"
                                              stroke="#FFFFFF"
                                              stroke-width="1"
                                              stroke-linejoin="round"
                                              stroke-miterlimit="10"
                                              d="M8 0.835615L9.70288 5.13601C9.84624 5.49806 10.1867 5.74396 10.5755 5.76621L15.2372 6.03304L11.636 8.94101C11.3289 9.18897 11.1964 9.59436 11.2978 9.97581L12.4793 14.4229L8.53442 11.9285C8.20803 11.7221 7.79197 11.7221 7.46557 11.9285L3.52065 14.4229L4.70221 9.97581C4.80356 9.59436 4.67107 9.18898 4.364 8.94101L0.762825 6.03304L5.4245 5.76621C5.81327 5.74396 6.15376 5.49806 6.29712 5.13601L8 0.835615Z"
                                            ></path>
                                          </svg></button
                                        ><a
                                          className="globalNav-0398 _16Irp43n86oNmqMVsk6FLi"
                                          href="https://console.aws.amazon.com/iam/home"
                                          target="_top"
                                          title="Manage access to AWS resources"
                                          aria-disabled="false"
                                          role="link"
                                          data-testid="iam"
                                          ><h3
                                            className="_2TdmLn1rgDIHj-52nOg80B"
                                          >
                                            IAM
                                          </h3>
                                          <p
                                            className="_1-sVKFnf7Qe_IKS1gzUGlo"
                                          >
                                            Manage access to AWS
                                            resources
                                          </p></a
                                        >
                                      </li>
                                      <li
                                        className="_1DUEA3IJy2eDwsVuxM14ny"
                                        data-testid="-budgets"
                                      >
                                        <button
                                          type="button"
                                          className="globalNav-0399 _1sh5akoo7uxw32dE4fwwB1 _2xfNeYS2hLAYcWl6304QfA"
                                          aria-label='Add "AWS Budgets" to favorites'
                                          data-testid="service-list-item-toggle-favorite-button-budgets"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            version="2.0"
                                            focusable="false"
                                            aria-hidden="true"
                                            className="globalNav-0311"
                                            viewBox="0 0 16 15"
                                            height="18px"
                                            width="18px"
                                          >
                                            <path
                                              fill="none"
                                              stroke="#FFFFFF"
                                              stroke-width="1"
                                              stroke-linejoin="round"
                                              stroke-miterlimit="10"
                                              d="M8 0.835615L9.70288 5.13601C9.84624 5.49806 10.1867 5.74396 10.5755 5.76621L15.2372 6.03304L11.636 8.94101C11.3289 9.18897 11.1964 9.59436 11.2978 9.97581L12.4793 14.4229L8.53442 11.9285C8.20803 11.7221 7.79197 11.7221 7.46557 11.9285L3.52065 14.4229L4.70221 9.97581C4.80356 9.59436 4.67107 9.18898 4.364 8.94101L0.762825 6.03304L5.4245 5.76621C5.81327 5.74396 6.15376 5.49806 6.29712 5.13601L8 0.835615Z"
                                            ></path>
                                          </svg></button
                                        ><a
                                          className="globalNav-0398 _16Irp43n86oNmqMVsk6FLi"
                                          href="https://console.aws.amazon.com/billing/home#/budgets#/home"
                                          target="_top"
                                          title="Set Custom Budgets and Receive Alerts"
                                          aria-disabled="false"
                                          role="link"
                                          data-testid="budgets"
                                          ><h3
                                            className="_2TdmLn1rgDIHj-52nOg80B"
                                          >
                                            AWS Budgets
                                          </h3>
                                          <p
                                            className="_1-sVKFnf7Qe_IKS1gzUGlo"
                                          >
                                            Set Custom Budgets and
                                            Receive Alerts
                                          </p></a
                                        >
                                      </li>
                                      <li
                                        className="_1DUEA3IJy2eDwsVuxM14ny"
                                        data-testid="-home"
                                      >
                                        <button
                                          type="button"
                                          className="globalNav-0399 _1sh5akoo7uxw32dE4fwwB1 _2xfNeYS2hLAYcWl6304QfA"
                                          aria-label='Add "Console Home" to favorites'
                                          data-testid="service-list-item-toggle-favorite-button-home"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            version="2.0"
                                            focusable="false"
                                            aria-hidden="true"
                                            className="globalNav-0311"
                                            viewBox="0 0 16 15"
                                            height="18px"
                                            width="18px"
                                          >
                                            <path
                                              fill="none"
                                              stroke="#FFFFFF"
                                              stroke-width="1"
                                              stroke-linejoin="round"
                                              stroke-miterlimit="10"
                                              d="M8 0.835615L9.70288 5.13601C9.84624 5.49806 10.1867 5.74396 10.5755 5.76621L15.2372 6.03304L11.636 8.94101C11.3289 9.18897 11.1964 9.59436 11.2978 9.97581L12.4793 14.4229L8.53442 11.9285C8.20803 11.7221 7.79197 11.7221 7.46557 11.9285L3.52065 14.4229L4.70221 9.97581C4.80356 9.59436 4.67107 9.18898 4.364 8.94101L0.762825 6.03304L5.4245 5.76621C5.81327 5.74396 6.15376 5.49806 6.29712 5.13601L8 0.835615Z"
                                            ></path>
                                          </svg></button
                                        ><a
                                          className="globalNav-0398 _16Irp43n86oNmqMVsk6FLi"
                                          href="https://console.aws.amazon.com/console/home"
                                          target="_top"
                                          aria-disabled="false"
                                          role="link"
                                          data-testid="home"
                                          ><h3
                                            className="_2TdmLn1rgDIHj-52nOg80B"
                                          >
                                            Console Home
                                          </h3></a
                                        >
                                      </li>
                                      <li
                                        className="_1DUEA3IJy2eDwsVuxM14ny"
                                        data-testid="-systems-manager"
                                      >
                                        <button
                                          type="button"
                                          className="globalNav-0399 _1sh5akoo7uxw32dE4fwwB1 _2xfNeYS2hLAYcWl6304QfA"
                                          aria-label='Add "Systems Manager" to favorites'
                                          data-testid="service-list-item-toggle-favorite-button-systems-manager"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            version="2.0"
                                            focusable="false"
                                            aria-hidden="true"
                                            className="globalNav-0311"
                                            viewBox="0 0 16 15"
                                            height="18px"
                                            width="18px"
                                          >
                                            <path
                                              fill="none"
                                              stroke="#FFFFFF"
                                              stroke-width="1"
                                              stroke-linejoin="round"
                                              stroke-miterlimit="10"
                                              d="M8 0.835615L9.70288 5.13601C9.84624 5.49806 10.1867 5.74396 10.5755 5.76621L15.2372 6.03304L11.636 8.94101C11.3289 9.18897 11.1964 9.59436 11.2978 9.97581L12.4793 14.4229L8.53442 11.9285C8.20803 11.7221 7.79197 11.7221 7.46557 11.9285L3.52065 14.4229L4.70221 9.97581C4.80356 9.59436 4.67107 9.18898 4.364 8.94101L0.762825 6.03304L5.4245 5.76621C5.81327 5.74396 6.15376 5.49806 6.29712 5.13601L8 0.835615Z"
                                            ></path>
                                          </svg></button
                                        ><a
                                          className="globalNav-0398 _16Irp43n86oNmqMVsk6FLi"
                                          href="https://console.aws.amazon.com/systems-manager/home"
                                          target="_top"
                                          title="AWS Systems Manager is a Central Place to View and Manage AWS Resources"
                                          aria-disabled="false"
                                          role="link"
                                          data-testid="systems-manager"
                                          ><h3
                                            className="_2TdmLn1rgDIHj-52nOg80B"
                                          >
                                            Systems Manager
                                          </h3>
                                          <p
                                            className="_1-sVKFnf7Qe_IKS1gzUGlo"
                                          >
                                            AWS Systems Manager is a
                                            Central Place to View and
                                            Manage AWS Resources
                                          </p></a
                                        >
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div
                                  className="awsui_tabs-content_14rmt_oujth_369"
                                  role="tabpanel"
                                  id="awsui-tabs-0-3347-favorites-panel"
                                ></div>
                                <div
                                  className="awsui_tabs-content_14rmt_oujth_369"
                                  role="tabpanel"
                                  id="awsui-tabs-0-3347-allServices-panel"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <ul
                            className="globalNav-0383"
                            data-testid="awsc-nav-services-menu-left-panel"
                          >
                            <li>
                              <button
                                type="button"
                                className="globalNav-0399 globalNav-0385 globalNav-0387"
                                data-testid="awsc-nav-recently-visited-list-btn"
                              >
                                Recently visited
                              </button>
                            </li>
                            <li>
                              <button
                                type="button"
                                className="globalNav-0399 globalNav-0385"
                                data-testid="awsc-favorites-list-btn"
                              >
                                Favorites
                              </button>
                            </li>
                            <li>
                              <button
                                type="button"
                                className="globalNav-0399 globalNav-0385"
                                data-testid="awsc-nav-all-services-btn"
                              >
                                All services
                              </button>
                              <div
                                aria-hidden="true"
                                className="globalNav-0388"
                              ></div>
                              <ul className="globalNav-0384">
                                <li>
                                  <button
                                    type="button"
                                    className="globalNav-0399 globalNav-0386"
                                  >
                                    <svg
                                      width="56"
                                      height="44"
                                      viewBox="0 0 56 44"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      aria-hidden="true"
                                      className="globalNav-0389"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M44.0001 9V17H42.0001V11.536L30.7591 24.651C30.5821 24.857 30.3291 24.982 30.0591 24.999C29.7821 25.008 29.5211 24.918 29.3211 24.735L23.5271 19.387L13.2071 29.707L11.7931 28.293L22.7931 17.293C23.1721 16.913 23.7841 16.901 24.1791 17.265L29.9161 22.562L40.6841 10H35.0001V8H43.0001C43.5531 8 44.0001 8.448 44.0001 9ZM49.4851 42H6.51513L2.94313 37H5.00013H51.0001H53.0571L49.4851 42ZM6.00013 3.912C6.00013 2.857 6.91713 2 8.04413 2H47.9561C49.0831 2 50.0001 2.857 50.0001 3.912V35H6.00013V3.912ZM55.8901 35.542C55.7181 35.209 55.3751 35 55.0001 35H52.0001V3.912C52.0001 1.755 50.1861 0 47.9561 0H8.04413C5.81413 0 4.00013 1.755 4.00013 3.912V35H1.00013C0.62513 35 0.28213 35.209 0.11013 35.542C-0.06087 35.875 -0.0308699 36.276 0.18713 36.581L5.18713 43.581C5.37413 43.844 5.67713 44 6.00013 44H50.0001C50.3231 44 50.6261 43.844 50.8131 43.581L55.8131 36.581C56.0311 36.276 56.0611 35.875 55.8901 35.542Z"
                                        fill="currentColor"
                                      ></path></svg
                                    >Analytics
                                  </button>
                                </li>
                                <li>
                                  <button
                                    type="button"
                                    className="globalNav-0399 globalNav-0386"
                                  >
                                    <svg
                                      width="56"
                                      height="56"
                                      viewBox="0 0 56 56"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      aria-hidden="true"
                                      className="globalNav-0389"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M54 27H45.385C45.796 26.171 46.013 25.254 46.013 24.302C46.013 22.255 44.996 20.353 43.293 19.213C41.553 18.048 39.389 17.861 37.36 18.698C35.992 19.261 34.878 20.371 34.303 21.741C33.553 23.532 33.61 25.413 34.399 27H28V17.154C28 16.746 27.751 16.378 27.372 16.226C26.991 16.075 26.559 16.168 26.276 16.464C25.319 17.467 23.564 18.232 21.514 17.373C20.628 17.001 19.911 16.282 19.547 15.398C18.968 13.995 19.088 12.516 19.875 11.339C20.644 10.192 21.924 9.508 23.302 9.508C24.431 9.508 25.486 9.964 26.276 10.792C26.559 11.087 26.991 11.181 27.372 11.029C27.751 10.877 28 10.51 28 10.101V2H53C53.552 2 54 2.449 54 3V27ZM54 53C54 53.551 53.552 54 53 54H28V45.479C29.587 46.268 31.467 46.326 33.26 45.574C34.629 45 35.738 43.887 36.303 42.518C37.14 40.487 36.951 38.324 35.786 36.583C34.646 34.881 32.745 33.865 30.698 33.865C29.746 33.865 28.829 34.082 28 34.494V29H36.366C36.775 29 37.143 28.751 37.295 28.372C37.446 27.992 37.353 27.559 37.057 27.276C36.054 26.32 35.288 24.566 36.147 22.514C36.52 21.627 37.239 20.911 38.122 20.546C39.525 19.97 41.004 20.088 42.181 20.875C43.328 21.643 44.013 22.924 44.013 24.302C44.013 25.431 43.557 26.487 42.729 27.276C42.433 27.558 42.339 27.992 42.49 28.372C42.643 28.751 43.01 29 43.419 29H54V53ZM2 53V29H8.042C7.253 30.587 7.196 32.469 7.946 34.26C8.521 35.629 9.635 36.739 11.003 37.302C11.84 37.647 12.699 37.819 13.543 37.819C14.745 37.819 15.914 37.471 16.937 36.787C18.64 35.647 19.656 33.745 19.656 31.698C19.656 30.746 19.439 29.829 19.027 29H26V36.458C26 36.867 26.249 37.235 26.628 37.387C27.008 37.539 27.441 37.444 27.724 37.149C28.514 36.321 29.57 35.865 30.698 35.865C32.076 35.865 33.356 36.549 34.125 37.696C34.912 38.873 35.032 40.352 34.453 41.755C34.089 42.639 33.372 43.358 32.486 43.729C30.433 44.589 28.68 43.824 27.724 42.821C27.441 42.525 27.008 42.431 26.628 42.583C26.249 42.735 26 43.103 26 43.511V54H3C2.448 54 2 53.551 2 53ZM3 2H26V8.136C25.171 7.725 24.254 7.508 23.302 7.508C21.255 7.508 19.354 8.524 18.214 10.227C17.049 11.967 16.86 14.13 17.697 16.161C18.262 17.53 19.371 18.644 20.74 19.217C22.532 19.967 24.412 19.91 26 19.122V27H17.062C16.653 27 16.286 27.249 16.134 27.628C15.982 28.008 16.076 28.441 16.372 28.724C17.2 29.514 17.656 30.57 17.656 31.698C17.656 33.076 16.972 34.357 15.824 35.125C14.648 35.913 13.169 36.034 11.765 35.453C10.882 35.089 10.162 34.373 9.791 33.487C8.931 31.435 9.696 29.681 10.699 28.724C10.995 28.441 11.089 28.007 10.937 27.628C10.785 27.249 10.418 27 10.009 27H2V3C2 2.449 2.448 2 3 2ZM53 0H3C1.346 0 0 1.346 0 3V53C0 54.654 1.346 56 3 56H53C54.654 56 56 54.654 56 53V3C56 1.346 54.654 0 53 0Z"
                                        fill="currentColor"
                                      ></path></svg
                                    >Application Integration
                                  </button>
                                </li>
                                <li>
                                  <button
                                    type="button"
                                    className="globalNav-0399 globalNav-0386"
                                  >
                                    <svg
                                      width="56"
                                      height="32"
                                      viewBox="0 0 56 32"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      aria-hidden="true"
                                      className="globalNav-0389"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M49.97 29.935H38.342C36.924 29.935 35.58 29.041 34.656 27.482L31.246 21.737C30.56 20.579 29.346 19.888 28 19.888C26.655 19.888 25.441 20.579 24.754 21.736L21.345 27.482C20.521 28.871 18.747 29.935 17.128 29.935H5.5C3.701 29.935 2 28.26 2 26.548V9.935H54V26.548C54 28.293 51.73 29.935 49.97 29.935ZM7.906 1.935H48.095L52.903 7.935H3.098L7.906 1.935ZM55.991 8.935C55.991 8.71 55.924 8.487 55.778 8.306L49.349 0.371C49.158 0.137 48.873 0 48.572 0H7.429C7.127 0 6.842 0.137 6.652 0.371L0.223 8.306C0.0720001 8.493 0.00500023 8.724 0.0100002 8.956H0V26.548C0 29.338 2.621 31.879 5.5 31.879H17.128C19.444 31.879 21.885 30.491 23.066 28.502L26.475 22.756C26.797 22.212 27.367 21.888 28 21.888C28.633 21.888 29.203 22.212 29.526 22.757L32.935 28.502C34.23 30.684 36.2 31.935 38.342 31.935H49.97C52.701 31.935 56 29.532 56 26.548V8.935H55.991Z"
                                        fill="currentColor"
                                      ></path></svg
                                    >AR &amp; VR
                                  </button>
                                </li>
                                <li>
                                  <button
                                    type="button"
                                    className="globalNav-0399 globalNav-0386"
                                  >
                                    <svg
                                      width="46"
                                      height="56"
                                      viewBox="0 0 46 56"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      aria-hidden="true"
                                      className="globalNav-0389"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M19 51H26V49H19V51ZM7 51H14V49H7V51ZM19 45H26V43H19V45ZM7 45H14V43H7V45ZM19 37H26V35H19V37ZM7 37H14V35H7V37ZM33 49H37V37H33V49ZM38 35H32C31.447 35 31 35.448 31 36V50C31 50.552 31.447 51 32 51H38C38.553 51 39 50.552 39 50V36C39 35.448 38.553 35 38 35ZM8 30H37V23H8V30ZM7 21C6.447 21 6 21.448 6 22V31C6 31.552 6.447 32 7 32H38C38.553 32 39 31.552 39 31V22C39 21.448 38.553 21 38 21H7ZM44 54H2V15H13V17C13 17.552 13.447 18 14 18H32C32.553 18 33 17.552 33 17V15H44V54ZM13.88 2H26C28.458 2 31 3.496 31 6V13V15V16H15V15V13V6C15 4.559 14.641 3.112 13.88 2ZM7.5 8V5.959C7.5 2.47 8.764 2 10 2C12.783 2 13 5.062 13 6V8H7.5ZM45 13H33V6C33 2.244 29.44 0 26 0H10C7.947 0 5.5 1.034 5.5 5.959V9C5.5 9.552 5.947 10 6.5 10H13V13H1C0.447 13 0 13.448 0 14V55C0 55.552 0.447 56 1 56H45C45.553 56 46 55.552 46 55V14C46 13.448 45.553 13 45 13Z"
                                        fill="currentColor"
                                      ></path></svg
                                    >AWS Cost Management
                                  </button>
                                </li>
                                <li>
                                  <button
                                    type="button"
                                    className="globalNav-0399 globalNav-0386"
                                  >
                                    <svg
                                      width="55"
                                      height="17"
                                      viewBox="0 0 55 17"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      aria-hidden="true"
                                      className="globalNav-0389"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M53 15H40.649C40.49 15 40.157 14.867 40 14.752V10H34V15H21.649C21.49 15 21.157 14.867 21 14.752V10H15V14.752C14.843 14.867 14.51 15 14.351 15H2V2H14.443C14.562 2 14.895 2.102 15 2.194V7H21V2.194C21.105 2.102 21.438 2 21.557 2H34V7H40V2.194C40.105 2.102 40.382 2 40.5 2H53V15ZM52.966 0H40.557C39.556 0 38.103 0.806999 38.103 2.071V5H36V2.071C36 0.928999 35.088 0 33.966 0H21.557C20.556 0 19.103 0.806999 19.103 2.071V5H16.897V2.071C16.897 0.806999 15.444 0 14.443 0H2.034C0.912 0 0 0.928999 0 2.071V14.929C0 16.071 0.912 17 2.034 17H14.351C15.275 17 17 16.289 17 14.929V12H19V14.929C19 16.289 20.725 17 21.649 17H33.966C35.088 17 36 16.071 36 14.929V12H38V14.929C38 16.289 39.725 17 40.649 17H52.966C54.088 17 55 16.071 55 14.929V2.071C55 0.928999 54.088 0 52.966 0ZM49 6L49.022 11L44 11.022L43.978 6H49ZM43.978 13H49.022C50.113 13 51 12.113 51 11.022V5.978C51 4.887 50.113 4 49.022 4H43.978C42.887 4 42 4.887 42 5.978V11.022C42 12.113 42.887 13 43.978 13ZM25 11.022L24.978 6H30L30.022 11L25 11.022ZM30.022 4H24.978C23.887 4 23 4.887 23 5.978V11.022C23 12.113 23.887 13 24.978 13H30.022C31.113 13 32 12.113 32 11.022V5.978C32 4.887 31.113 4 30.022 4ZM6 11.022V6L11 5.978L11.022 11L6 11.022ZM11.022 4H5.978C4.887 4 4 4.887 4 5.978V11.022C4 12.113 4.887 13 5.978 13H11.022C12.113 13 13 12.113 13 11.022V5.978C13 4.887 12.113 4 11.022 4Z"
                                        fill="currentColor"
                                      ></path></svg
                                    >Blockchain
                                  </button>
                                </li>
                                <li>
                                  <button
                                    type="button"
                                    className="globalNav-0399 globalNav-0386"
                                  >
                                    <svg
                                      width="56"
                                      height="56"
                                      viewBox="0 0 56 56"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      aria-hidden="true"
                                      className="globalNav-0389"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M48.5862 54H7.41419L3.41419 50H52.5862L48.5862 54ZM6.00019 24.826C6.00019 23.819 6.81919 23 7.82619 23H12.0002V48H6.00019V24.826ZM17.0002 18C17.5532 18 18.0002 17.552 18.0002 17V11H23.0002V48H14.0002V18H17.0002ZM25.0002 48H31.0002V7H25.0002V48ZM38.0002 11V17C38.0002 17.552 38.4472 18 39.0002 18H42.0002V48H33.0002V11H38.0002ZM48.1742 23C49.1812 23 50.0002 23.819 50.0002 24.826V48H44.0002V23H48.1742ZM55.9242 48.617C55.7702 48.244 55.4042 48 55.0002 48H52.0002V24.826C52.0002 22.716 50.2832 21 48.1742 21H44.0002V17C44.0002 16.448 43.5532 16 43.0002 16H40.0002V10C40.0002 9.448 39.5532 9 39.0002 9H33.0002V6C33.0002 5.448 32.5532 5 32.0002 5H29.0002V0H27.0002V5H24.0002C23.4472 5 23.0002 5.448 23.0002 6V9H17.0002C16.4472 9 16.0002 9.448 16.0002 10V16H13.0002C12.4472 16 12.0002 16.448 12.0002 17V21H7.82619C5.71719 21 4.00019 22.716 4.00019 24.826V48H1.00019C0.596189 48 0.231189 48.244 0.0761893 48.617C-0.0788107 48.991 0.00718924 49.421 0.293189 49.707L6.29319 55.707C6.48119 55.895 6.73419 56 7.00019 56H49.0002C49.2662 56 49.5202 55.895 49.7072 55.707L55.7072 49.707C55.9932 49.421 56.0792 48.991 55.9242 48.617Z"
                                        fill="currentColor"
                                      ></path></svg
                                    >Business Applications
                                  </button>
                                </li>
                                <li>
                                  <button
                                    type="button"
                                    className="globalNav-0399 globalNav-0386"
                                  >
                                    <svg
                                      width="55"
                                      height="55"
                                      viewBox="0 0 55 55"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      aria-hidden="true"
                                      className="globalNav-0389"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M17 38H38V17H17V38ZM16 40H39C39.553 40 40 39.552 40 39V16C40 15.448 39.553 15 39 15H16C15.447 15 15 15.448 15 16V39C15 39.552 15.447 40 16 40ZM9 46H46V9H9V46ZM55 11V9H48V8C48 7.448 47.553 7 47 7H46V0H44V7H39V0H37V7H32V0H30V7H25V0H23V7H18V0H16V7H11V0H9V7H8C7.447 7 7 7.448 7 8V9H0V11H7V16H0V18H7V23H0V25H7V30H0V32H7V37H0V39H7V44H0V46H7V47C7 47.552 7.447 48 8 48H9V55H11V48H16V55H18V48H23V55H25V48H30V55H32V48H37V55H39V48H44V55H46V48H47C47.553 48 48 47.552 48 47V46H55V44H48V39H55V37H48V32H55V30H48V25H55V23H48V18H55V16H48V11H55Z"
                                        fill="currentColor"
                                      ></path></svg
                                    >Compute
                                  </button>
                                </li>
                                <li>
                                  <button
                                    type="button"
                                    className="globalNav-0399 globalNav-0386"
                                  >
                                    <svg
                                      width="56"
                                      height="56"
                                      viewBox="0 0 56 56"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      aria-hidden="true"
                                      className="globalNav-0389"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M4 49H52V30H4V49ZM2 54H54V51H2V54ZM54 30V49H55C55.553 49 56 49.448 56 50V55C56 55.552 55.553 56 55 56H1C0.447 56 0 55.552 0 55V50C0 49.448 0.447 49 1 49H2V30H1C0.447 30 0 29.552 0 29V24C0 23.478 0.404 23.062 0.915 23.017L21.47 10.152L22.53 11.848L4.712 23H37V25H2V28H54V25H40V23H51.288L33.47 11.848L34.53 10.152L55.085 23.017C55.596 23.062 56 23.478 56 24V29C56 29.552 55.553 30 55 30H54ZM28 12C30.206 12 32 10.206 32 8H30C30 9.103 29.103 10 28 10C26.897 10 26 9.103 26 8C26 6.897 26.897 6 28 6C28.553 6 29 5.552 29 5V0H27V4.126C25.276 4.572 24 6.14 24 8C24 10.206 25.794 12 28 12ZM9 46H11V33H9V46ZM15 46H17V33H15V46ZM21 46H23V33.143H21V46ZM45 46H47V33.143H45V46ZM39 46H41V33.143H39V46ZM33 46H35V33.143H33V46ZM27 46H29V33H27V46Z"
                                        fill="currentColor"
                                      ></path></svg
                                    >Containers
                                  </button>
                                </li>
                                <li>
                                  <button
                                    type="button"
                                    className="globalNav-0399 globalNav-0386"
                                  >
                                    <svg
                                      width="54"
                                      height="59"
                                      viewBox="0 0 54 59"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      aria-hidden="true"
                                      className="globalNav-0389"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M52 43.232L42.111 48.282C41.45 39.78 36.919 32.843 30.965 30.74C33.99 29.288 36.089 26.203 36.089 22.629C36.089 17.667 32.052 13.629 27.089 13.629C22.126 13.629 18.089 17.667 18.089 22.629C18.089 26.229 20.218 29.333 23.278 30.771C17.307 32.914 12.868 39.84 12.275 48.48L2 43.232V15.013L27 2.246L52 15.013V43.232ZM27.089 29.629C23.229 29.629 20.089 26.489 20.089 22.629C20.089 18.77 23.229 15.629 27.089 15.629C30.948 15.629 34.089 18.77 34.089 22.629C34.089 26.489 30.948 29.629 27.089 29.629ZM27 56L14.227 49.476C14.58 39.665 20.187 32.064 27.197 32.064C34.09 32.064 39.73 39.689 40.156 49.281L27 56ZM27 0L0 13.789V44.457L27 58.246L54 44.457V13.789L27 0Z"
                                        fill="currentColor"
                                      ></path></svg
                                    >Customer Enablement
                                  </button>
                                </li>
                                <li>
                                  <button
                                    type="button"
                                    className="globalNav-0399 globalNav-0386"
                                  >
                                    <svg
                                      width="38"
                                      height="56"
                                      viewBox="0 0 38 56"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      aria-hidden="true"
                                      className="globalNav-0389"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M19 27.982C8.981 27.982 2 24.822 2 21.986V11.667C5.057 14.275 11.357 15.991 19 15.991C26.643 15.991 32.943 14.275 36 11.667V21.986C36 24.822 29.019 27.982 19 27.982ZM19 41.727C8.981 41.727 2 38.567 2 35.732V25.658C5.057 28.267 11.357 29.982 19 29.982C26.643 29.982 32.943 28.267 36 25.658V35.732C36 38.567 29.019 41.727 19 41.727ZM19 54C8.981 54 2 50.84 2 48.004V39.403C5.057 42.012 11.357 43.727 19 43.727C26.643 43.727 32.943 42.012 36 39.403V48.004C36 50.84 29.019 54 19 54ZM19 2C29.019 2 36 5.16 36 7.996C36 10.831 29.019 13.991 19 13.991C8.981 13.991 2 10.831 2 7.996C2 5.16 8.981 2 19 2ZM19 0C8.168 0 0 3.438 0 7.996V48.004C0 52.563 8.168 56 19 56C29.832 56 38 52.563 38 48.004V7.996C38 3.438 29.832 0 19 0Z"
                                        fill="currentColor"
                                      ></path></svg
                                    >Database
                                  </button>
                                </li>
                                <li>
                                  <button
                                    type="button"
                                    className="globalNav-0399 globalNav-0386"
                                  >
                                    <svg
                                      width="56"
                                      height="56"
                                      viewBox="0 0 56 56"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      aria-hidden="true"
                                      className="globalNav-0389"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M53.9785 47.9479C53.9785 47.4979 53.8035 47.0759 53.4855 46.7589L32.8745 26.1479C32.7455 26.0189 32.5755 25.9539 32.4045 25.9539C32.2345 25.9539 32.0645 26.0189 31.9345 26.1479L26.1485 31.9349C25.8885 32.1939 25.8885 32.6159 26.1485 32.8759L46.7575 53.4849C47.3945 54.1199 48.4995 54.1209 49.1375 53.4849L53.4855 49.1379C53.8025 48.8199 53.9785 48.3969 53.9785 47.9479ZM26.2215 29.0329L29.0335 26.2209L16.7245 13.8649C16.2595 13.3979 15.9085 12.8199 15.7075 12.1939L13.9165 6.61192C13.7295 6.02792 13.3025 5.54892 12.7455 5.29592L6.61748 2.51692C5.79748 2.14492 4.81948 2.32292 4.18248 2.95992L2.95848 4.18292C2.32348 4.81892 2.14548 5.79692 2.51748 6.61692L5.29548 12.7449C5.54848 13.3029 6.02848 13.7299 6.61148 13.9179L13.1525 16.0159L26.2215 29.0329ZM55.9785 47.9479C55.9785 48.9309 55.5945 49.8559 54.8995 50.5519L50.5515 54.8989C49.8335 55.6169 48.8905 55.9759 47.9485 55.9759C47.0045 55.9759 46.0615 55.6169 45.3435 54.8989L24.7345 34.2899C23.6955 33.2509 23.6955 31.5599 24.7345 30.5209L24.8065 30.4479L12.0825 17.7729L5.99948 15.8219C4.87948 15.4619 3.95948 14.6419 3.47348 13.5719L0.695482 7.44292C-0.018518 5.86892 0.323482 3.98992 1.54448 2.76892L2.76848 1.54592C3.99248 0.322924 5.87348 -0.0160756 7.44348 0.695924L13.5715 3.47392C14.6425 3.95992 15.4615 4.88092 15.8215 6.00092L17.6125 11.5829C17.7165 11.9089 17.9005 12.2099 18.1425 12.4529L30.4475 24.8069L30.5205 24.7339C31.5595 23.6959 33.2495 23.6939 34.2895 24.7339L54.8995 45.3439C55.5945 46.0389 55.9785 46.9639 55.9785 47.9479ZM29.1665 19.7489L36.6035 12.3119C36.8225 12.0939 36.9275 11.7859 36.8885 11.4789C36.5555 8.86692 37.4265 6.30792 39.2775 4.45692C41.4405 2.29292 44.5885 1.50492 47.4825 2.30592L42.3035 7.48392C41.5215 8.26592 41.0905 9.30492 41.0905 10.4109C41.0905 11.5169 41.5215 12.5569 42.3035 13.3389C43.0855 14.1209 44.1245 14.5519 45.2315 14.5519C46.3365 14.5519 47.3765 14.1209 48.1585 13.3389L53.3365 8.16092C54.1375 11.0479 53.3485 14.2009 51.1855 16.3649C49.3335 18.2159 46.7765 19.0869 44.1635 18.7549C43.8545 18.7129 43.5475 18.8209 43.3305 19.0399L37.6015 24.7679L39.0155 26.1819L44.4085 20.7899C47.4625 21.0369 50.4255 19.9529 52.5995 17.7799C55.7105 14.6679 56.5255 9.90492 54.6275 5.92692C54.4885 5.63392 54.2145 5.42692 53.8945 5.37192C53.5805 5.31692 53.2495 5.42092 53.0185 5.65092L46.7445 11.9249C45.9355 12.7329 44.5265 12.7329 43.7175 11.9249C43.3135 11.5199 43.0905 10.9829 43.0905 10.4109C43.0905 9.83992 43.3135 9.30192 43.7175 8.89792L49.9925 2.62392C50.2215 2.39492 50.3265 2.06792 50.2705 1.74792C50.2155 1.42792 50.0085 1.15492 49.7155 1.01492C45.7365 -0.884076 40.9745 -0.0680761 37.8635 3.04292C35.6895 5.21692 34.6075 8.17792 34.8525 11.2349L27.7515 18.3349L29.1665 19.7489ZM26.1825 39.0159L20.7905 44.4079C21.0355 47.4639 19.9535 50.4259 17.7795 52.5999C15.7875 54.5919 13.1175 55.6419 10.4115 55.6419C8.88948 55.6419 7.35848 55.3109 5.92648 54.6279C5.63348 54.4889 5.42648 54.2149 5.37248 53.8949C5.31648 53.5749 5.42048 53.2479 5.65048 53.0189L11.9245 46.7449C12.7585 45.9099 12.7585 44.5519 11.9245 43.7179C11.0905 42.8839 9.73148 42.8839 8.89748 43.7179L2.62448 49.9919C2.39348 50.2219 2.05948 50.3239 1.74848 50.2699C1.42748 50.2159 1.15448 50.0089 1.01448 49.7159C-0.883518 45.7369 -0.0685184 40.9739 3.04248 37.8639C5.21648 35.6899 8.17948 34.6089 11.2335 34.8529L18.8765 27.2099L20.2905 28.6239L12.3115 36.6029C12.0925 36.8219 11.7815 36.9249 11.4785 36.8879C8.86448 36.5519 6.30748 37.4269 4.45748 39.2779C2.29248 41.4409 1.50448 44.5939 2.30548 47.4819L7.48348 42.3039C9.09848 40.6899 11.7235 40.6899 13.3385 42.3039C14.9525 43.9179 14.9525 46.5449 13.3385 48.1589L8.16148 53.3369C11.0455 54.1389 14.2015 53.3499 16.3655 51.1859C18.2155 49.3349 19.0865 46.7749 18.7535 44.1639C18.7145 43.8569 18.8205 43.5499 19.0395 43.3309L24.7685 37.6019L26.1825 39.0159Z"
                                        fill="currentColor"
                                      ></path></svg
                                    >Developer Tools
                                  </button>
                                </li>
                                <li>
                                  <button
                                    type="button"
                                    className="globalNav-0399 globalNav-0386"
                                  >
                                    <svg
                                      width="57"
                                      height="56"
                                      viewBox="0 0 57 56"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      aria-hidden="true"
                                      className="globalNav-0389"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M40.4336 51H47.4336V49H40.4336V51ZM5.43362 3.926C5.43362 2.864 6.38462 2 7.55462 2H49.3126C50.4826 2 51.4336 2.864 51.4336 3.926V8H53.4336V3.926C53.4336 1.761 51.5846 0 49.3126 0H7.55462C5.28262 0 3.43362 1.761 3.43362 3.926V36H0.999618C0.612618 36 0.258618 36.225 0.0946178 36.576C-0.0703822 36.927 -0.0163821 37.342 0.231618 37.64L5.23162 43.64C5.42162 43.868 5.70362 44 5.99962 44H28.4336V42H6.46862L3.13462 38H28.4336V36H5.43362V3.926ZM32.4336 54H54.4346V46H32.4336V54ZM32.4336 12V44H54.4346L54.4336 12H32.4336ZM56.4336 12V54C56.4336 55.103 55.5366 56 54.4336 56H32.4336C31.3306 56 30.4336 55.103 30.4336 54V12C30.4336 10.897 31.3306 10 32.4336 10H54.4336C55.5366 10 56.4336 10.897 56.4336 12ZM39.8866 21.678C41.1716 22.769 41.1906 24.517 41.1966 24.517H41.1976C41.1536 24.816 41.2486 25.12 41.4546 25.341C41.6626 25.563 41.9576 25.684 42.2616 25.657C42.2936 25.656 45.3896 25.447 46.9916 26.937C47.6246 27.526 47.9336 28.309 47.9336 29.33C47.9336 31.182 45.8586 33 43.7436 33H34.4336V35H43.7436C46.9836 35 49.9336 32.297 49.9336 29.33C49.9336 27.741 49.3996 26.441 48.3456 25.465C46.7716 24.007 44.4236 23.701 43.1026 23.653C42.9396 22.71 42.4966 21.391 41.3986 20.349C39.7936 18.828 37.3786 18.375 34.2066 19.01L34.5996 20.971C36.9916 20.494 38.7706 20.731 39.8866 21.678ZM17.4306 17.763C17.4306 18.285 17.5316 18.812 17.7376 19.375C17.8656 19.726 17.7876 20.119 17.5356 20.395C17.2826 20.67 16.9006 20.782 16.5366 20.684C16.0516 20.552 15.6476 20.491 15.2636 20.491C12.6006 20.491 10.4336 22.628 10.4336 25.254C10.4336 27.88 12.6006 30.017 15.2636 30.017L28.4326 30L28.4336 32H15.4336C11.6656 32 8.43362 28.983 8.43362 25.254C8.43362 21.455 11.6096 18.362 15.4756 18.495C15.4456 18.249 15.4306 18.005 15.4306 17.763C15.4306 14.097 18.6376 11 22.4336 11C26.1626 11 29.4336 14.271 29.4336 18H27.4336C27.4336 15.336 25.0966 13 22.4336 13C19.7216 13 17.4306 15.181 17.4306 17.763Z"
                                        fill="currentColor"
                                      ></path></svg
                                    >End User Computing
                                  </button>
                                </li>
                                <li>
                                  <button
                                    type="button"
                                    className="globalNav-0399 globalNav-0386"
                                  >
                                    <svg
                                      width="56"
                                      height="56"
                                      viewBox="0 0 56 56"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      aria-hidden="true"
                                      className="globalNav-0389"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M40 51H47V49H40V51ZM33 54H54.001V46H33V54ZM33 16V44H54.001L54 16H33ZM56 16V54C56 55.103 55.103 56 54 56H33C31.897 56 31 55.103 31 54V16C31 14.897 31.897 14 33 14H54C55.103 14 56 14.897 56 16ZM8 8H32V12H34V7C34 6.448 33.553 6 33 6H7C6.447 6 6 6.448 6 7V45C6 45.552 6.447 46 7 46H29V44H8V8ZM3.814 50H29V52H3.814C1.711 52 0 50.269 0 48.141V3.859C0 1.731 1.711 0 3.814 0H36.186C38.289 0 40 1.731 40 3.859V12H38V3.859C38 2.834 37.187 2 36.186 2H3.814C2.813 2 2 2.834 2 3.859V48.141C2 49.166 2.813 50 3.814 50Z"
                                        fill="currentColor"
                                      ></path></svg
                                    >Front-end Web &amp; Mobile
                                  </button>
                                </li>
                                <li>
                                  <button
                                    type="button"
                                    className="globalNav-0399 globalNav-0386"
                                  >
                                    <svg
                                      width="56"
                                      height="39"
                                      viewBox="0 0 56 39"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      aria-hidden="true"
                                      className="globalNav-0389"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M54 18.619C51.849 21.858 48.172 24 44 24C42.139 24 40.382 23.561 38.808 22.802C38.942 23.126 39.077 23.452 39.214 23.786C41.508 29.363 44.649 37 48.867 37C49.384 37 53.92 36.842 54 31.388V18.619ZM16.646 23.063C15.216 23.666 13.646 24 12 24C7.828 24 4.151 21.858 2 18.619V31.4C2.08 36.842 6.616 37 7.133 37C11.194 37 13.859 30.179 16.001 24.699C16.22 24.14 16.434 23.597 16.646 23.063ZM2 12C2 17.514 6.486 22 12 22C14.225 22 16.274 21.261 17.937 20.027C17.946 20.01 17.954 19.989 17.963 19.972L17.993 19.986C20.42 18.16 22 15.265 22 12C22 6.486 17.514 2 12 2C6.486 2 2 6.486 2 12ZM22.376 6C23.402 7.767 24 9.813 24 12C24 14.613 23.15 17.027 21.727 19H34.273C32.85 17.027 32 14.613 32 12C32 9.813 32.598 7.767 33.624 6H22.376ZM34 12C34 17.514 38.486 22 44 22C49.514 22 54 17.514 54 12C54 6.486 49.514 2 44 2C38.486 2 34 6.486 34 12ZM56 11.5V31.4C55.976 34.035 54.454 39 48.867 39C43.309 39 40.013 30.986 37.364 24.547C36.838 23.267 36.338 22.057 35.858 21H19.911C19.791 21.106 19.674 21.215 19.549 21.316C19 22.529 18.446 23.935 17.863 25.427C15.378 31.789 12.56 39 7.133 39C1.546 39 0.024 34.035 0 31.409V12C0 5.383 5.383 0 12 0C15.585 0 18.799 1.588 21 4.089V4H35.081C37.279 1.552 40.458 0 44 0C50.448 0 55.71 5.116 55.975 11.5H56ZM40 13H48V11H40V13ZM11 13H8V11H11V8H13V11H16V13H13V16H11V13Z"
                                        fill="currentColor"
                                      ></path></svg
                                    >Game Development
                                  </button>
                                </li>
                                <li>
                                  <button
                                    type="button"
                                    className="globalNav-0399 globalNav-0386"
                                  >
                                    <svg
                                      width="56"
                                      height="56"
                                      viewBox="0 0 56 56"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      aria-hidden="true"
                                      className="globalNav-0389"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M47.571 34.048C44.026 34.048 41.142 31.164 41.142 27.619C41.142 24.074 44.026 21.191 47.571 21.191C51.116 21.191 54 24.074 54 27.619C54 31.164 51.116 34.048 47.571 34.048ZM35 47.676V29H39.265C39.905 32.853 43.159 35.823 47.14 36.026C44.899 41.547 40.44 45.722 35 47.676ZM29 48.865V16.792C32.87 16.332 35.942 13.244 36.373 9.365C40.831 11.348 44.466 14.871 46.59 19.253C42.606 19.717 39.468 22.968 39.174 27H34C33.447 27 33 27.448 33 28V48.292C31.706 48.613 30.366 48.8 29 48.865ZM23 48.292V28.119C23 27.575 22.564 27.131 22.019 27.119L16.827 27.016C16.539 22.977 13.398 19.718 9.41 19.253C11.534 14.871 15.169 11.348 19.627 9.365C20.057 13.244 23.13 16.332 27 16.792V48.865C25.634 48.8 24.294 48.613 23 48.292ZM8.859 36.026C12.836 35.824 16.087 32.845 16.731 29H21V47.676C15.559 45.722 11.1 41.547 8.859 36.026ZM2 27.619C2 24.074 4.883 21.191 8.428 21.191C11.973 21.191 14.857 24.074 14.857 27.619C14.857 31.164 11.973 34.048 8.428 34.048C4.883 34.048 2 31.164 2 27.619ZM28 2C31.545 2 34.428 4.884 34.428 8.429C34.428 11.973 31.545 14.857 28 14.857C24.455 14.857 21.571 11.973 21.571 8.429C21.571 4.884 24.455 2 28 2ZM56 27.619C56 23.393 52.87 19.894 48.808 19.292C46.445 13.809 41.971 9.409 36.42 7.187L36.352 7.355C35.822 3.214 32.283 0 28 0C23.717 0 20.177 3.214 19.647 7.355L19.58 7.187C14.028 9.409 9.554 13.809 7.191 19.292C3.13 19.894 0 23.393 0 27.619C0 31.66 2.86 35.044 6.662 35.859C9.068 42.602 14.423 47.675 21 49.802V56H23V50.34C24.3 50.632 25.636 50.806 27 50.865V56H29V50.865C30.363 50.806 31.7 50.632 33 50.34V56H35V49.802C41.577 47.675 46.931 42.602 49.338 35.859C53.139 35.044 56 31.66 56 27.619Z"
                                        fill="currentColor"
                                      ></path></svg
                                    >Internet of Things
                                  </button>
                                </li>
                                <li>
                                  <button
                                    type="button"
                                    className="globalNav-0399 globalNav-0386"
                                  >
                                    <svg
                                      width="56"
                                      height="56"
                                      viewBox="0 0 56 56"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      aria-hidden="true"
                                      className="globalNav-0389"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M27 34.6075V27.1695L21.65 24.0665L22.654 22.3365L27 24.8565V4.63953L21.52 2.11053L16 4.89453V12.0005H14V5.90253L9 8.42453L8.999 16.0645L15.003 19.4255L20.999 16.0985V8.00053H22.999V16.6875C22.999 17.0505 22.802 17.3855 22.484 17.5615L16.001 21.1595L16 26.0005L22.477 29.7445C22.799 29.9195 22.999 30.2565 22.999 30.6225V36.9125L27 34.6075ZM27 36.9155L14.712 43.9945L13.714 42.2605L20.999 38.0645V31.2165L15.035 27.9735L8.363 31.8155L7.365 30.0825L14 26.2615L14.001 21.1565L8.029 17.8145L2.002 21.1595L2.001 25.6535L7.242 22.6345L8.24 24.3685L2.001 27.9615L2.002 33.4995L7.978 37.2045L13.985 33.7435L14.983 35.4765L9 39.0005L8.999 46.2545L14.394 49.5235L21.96 44.9855L22.989 46.7005L16.327 50.6955L21.563 53.8695L27 51.3605V36.9155ZM29 4.00053V52.0005C29 52.3905 28.773 52.7445 28.419 52.9085L21.919 55.9085C21.786 55.9695 21.643 56.0005 21.5 56.0005C21.32 56.0005 21.141 55.9515 20.981 55.8555L7.48 47.6725C7.182 47.4915 6.999 47.1675 6.999 46.8175L7 39.0005L0.475 34.9065C0.181 34.7235 0.00199986 34.4025 0.00199986 34.0565V33.4455C0.000999855 33.4255 0 33.4045 0 33.3845V21.2425C0 21.2225 0.000999855 21.2015 0.00199986 21.1815V20.5705C0.00199986 20.2075 0.199 19.8725 0.517 19.6955L6.999 16.0985L7 7.80953C7 7.43153 7.213 7.08653 7.55 6.91653L21.05 0.107531C21.322 -0.0304688 21.643 -0.0354691 21.919 0.0915309L28.419 3.09153C28.773 3.25553 29 3.60953 29 4.00053ZM55.91 32.9005C55.797 32.6495 55.585 32.4565 55.325 32.3665L51.886 31.1755C52.173 29.0285 52.168 26.8635 51.87 24.7175L55.306 23.5105C55.564 23.4195 55.775 23.2255 55.887 22.9735C55.999 22.7225 56.003 22.4365 55.896 22.1825L51.77 12.2805C51.664 12.0265 51.458 11.8275 51.201 11.7305C50.945 11.6335 50.658 11.6465 50.41 11.7665L47.124 13.3605C45.809 11.6395 44.276 10.1145 42.553 8.81053L44.133 5.51753C44.252 5.26953 44.264 4.98253 44.165 4.72653C44.066 4.46953 43.866 4.26453 43.612 4.15953L33.692 0.076531C33.438 -0.027469 33.152 -0.022469 32.9 0.089531C32.649 0.202531 32.457 0.414531 32.366 0.674531L30.897 4.91553L32.788 5.56953L33.91 2.32953L41.872 5.60653L40.39 8.69553C40.178 9.13653 40.316 9.66553 40.717 9.94653C42.766 11.3855 44.543 13.1545 45.997 15.2025C46.28 15.6005 46.809 15.7405 47.249 15.5235L50.331 14.0275L53.644 21.9745L50.422 23.1065C49.961 23.2685 49.685 23.7405 49.769 24.2215C50.2 26.6955 50.207 29.2055 49.786 31.6815C49.705 32.1635 49.983 32.6335 50.445 32.7935L53.67 33.9105L50.394 41.8715L47.313 40.3935C46.873 40.1815 46.343 40.3205 46.062 40.7195C44.623 42.7685 42.853 44.5455 40.8 46.0015C40.4 46.2845 40.265 46.8145 40.479 47.2535L41.973 50.3315L34.026 53.6435L32.893 50.4185L31.006 51.0815L32.49 55.3055C32.581 55.5655 32.775 55.7755 33.026 55.8875C33.156 55.9455 33.295 55.9745 33.434 55.9745C33.564 55.9745 33.695 55.9485 33.818 55.8975L43.72 51.7695C43.974 51.6645 44.173 51.4585 44.271 51.2005C44.367 50.9435 44.354 50.6575 44.234 50.4095L42.641 47.1285C44.365 45.8125 45.894 44.2795 47.198 42.5565L50.482 44.1325C50.73 44.2515 51.018 44.2645 51.273 44.1655C51.53 44.0665 51.735 43.8665 51.84 43.6125L55.923 33.6925C56.027 33.4375 56.022 33.1515 55.91 32.9005ZM39 28.0005C39 23.5445 36.01 19.5875 31.728 18.3765L32.272 16.4515C37.411 17.9055 41 22.6545 41 28.0005C41 33.3535 37.404 38.1045 32.256 39.5525L31.715 37.6285C36.004 36.4205 39 32.4615 39 28.0005Z"
                                        fill="currentColor"
                                      ></path></svg
                                    >Machine Learning
                                  </button>
                                </li>
                                <li>
                                  <button
                                    type="button"
                                    className="globalNav-0399 globalNav-0386"
                                  >
                                    <svg
                                      width="56"
                                      height="56"
                                      viewBox="0 0 56 56"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      aria-hidden="true"
                                      className="globalNav-0389"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M28 36H7V34H28V31H30V34H35V36H30V39H28V36ZM13 26H7V24H13V21H15V24H35V26H15V29H13V26ZM27 6H41V2H27V6ZM52.211 2H43V1C43 0.448 42.553 0 42 0H26C25.447 0 25 0.448 25 1V2H15.789C13.7 2 12 3.7 12 5.79V13H14V5.79C14 4.803 14.803 4 15.789 4H25V7C25 7.552 25.447 8 26 8H42C42.553 8 43 7.552 43 7V4H52.211C53.197 4 54 4.803 54 5.79V52.21C54 53.197 53.197 54 52.211 54H17.789C16.803 54 16 53.197 16 52.21V49H14V52.21C14 54.3 15.7 56 17.789 56H52.211C54.3 56 56 54.3 56 52.21V5.79C56 3.7 54.3 2 52.211 2ZM2 45H40V17H2V45ZM42 46V16C42 15.448 41.553 15 41 15H1C0.447 15 0 15.448 0 16V46C0 46.552 0.447 47 1 47H41C41.553 47 42 46.552 42 46Z"
                                        fill="currentColor"
                                      ></path></svg
                                    >Management &amp; Governance
                                  </button>
                                </li>
                                <li>
                                  <button
                                    type="button"
                                    className="globalNav-0399 globalNav-0386"
                                  >
                                    <svg
                                      width="56"
                                      height="44"
                                      viewBox="0 0 56 44"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      aria-hidden="true"
                                      className="globalNav-0389"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M28.875 21.854L14.613 30.431C14.439 30.545 14.285 30.491 14.208 30.451C14.131 30.409 14 30.308 14 30.103V12.999C14 12.793 14.131 12.692 14.209 12.65C14.248 12.629 14.309 12.605 14.386 12.605C14.46 12.605 14.55 12.627 14.652 12.695L28.836 21.222C28.989 21.324 29.012 21.472 29.012 21.551C29.012 21.629 28.989 21.777 28.875 21.854ZM29.906 19.533L15.723 11.006C14.986 10.516 14.046 10.469 13.265 10.887C12.484 11.305 12 12.114 12 12.999V30.103C12 30.987 12.484 31.796 13.265 32.214C13.624 32.406 14.018 32.5 14.405 32.5C14.86 32.5 15.308 32.371 15.684 32.12L29.945 23.543C30.613 23.098 31.012 22.354 31.012 21.551C31.012 20.749 30.613 20.003 29.906 19.533ZM54 33.605C54 33.823 53.823 34 53.605 34H50V10H53.605C53.823 10 54 10.176 54 10.394V33.605ZM43.535 26H38V40.21C38 41.197 37.163 42 36.135 42H3.865C2.837 42 2 41.197 2 40.21V3.789C2 2.802 2.837 2 3.865 2H36.135C37.163 2 38 2.802 38 3.789V18H43.535L48 11.302V32.697L43.535 26ZM53.605 8H50H48H47.798L42.465 16H40V3.789C40 1.7 38.266 0 36.135 0H3.865C1.734 0 0 1.7 0 3.789V40.21C0 42.299 1.734 44 3.865 44H36.135C38.266 44 40 42.299 40 40.21V28H42.465L47.798 36H53.605C54.926 36 56 34.925 56 33.605V10.394C56 9.074 54.926 8 53.605 8Z"
                                        fill="currentColor"
                                      ></path></svg
                                    >Media Services
                                  </button>
                                </li>
                                <li>
                                  <button
                                    type="button"
                                    className="globalNav-0399 globalNav-0386"
                                  >
                                    <svg
                                      width="57"
                                      height="56"
                                      viewBox="0 0 57 56"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      aria-hidden="true"
                                      className="globalNav-0389"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M39.0672 42.184L27.3582 27.088L15.6492 42.184H23.0052C23.5582 42.184 24.0052 42.632 24.0052 43.184V53.184H31.0052V43.184C31.0052 42.632 31.4532 42.184 32.0052 42.184H39.0672ZM41.8982 42.571C42.1322 42.872 42.1742 43.281 42.0062 43.624C41.8382 43.967 41.4902 44.184 41.1082 44.184H33.0052V54.184C33.0052 54.736 32.5582 55.184 32.0052 55.184H23.0052C22.4532 55.184 22.0052 54.736 22.0052 54.184V44.184H13.6082C13.2262 44.184 12.8782 43.967 12.7102 43.624C12.5422 43.281 12.5842 42.872 12.8182 42.571L26.5682 24.844C26.9472 24.355 27.7692 24.355 28.1482 24.844L41.8982 42.571ZM56.0052 27.053C56.0052 33.398 52.1362 38.184 47.0052 38.184H41.0052V36.184H47.0052C50.9962 36.184 54.0052 32.258 54.0052 27.053C54.0052 24.183 52.8842 19.368 45.3742 19.368C45.0662 19.368 44.7752 19.226 44.5862 18.983C44.3962 18.741 44.3292 18.424 44.4042 18.125C45.0082 15.705 44.5072 13.476 43.0282 12.01C41.5632 10.558 39.3582 10.08 36.9782 10.696C36.7202 10.763 36.4482 10.725 36.2182 10.589C35.9892 10.454 35.8242 10.232 35.7582 9.975C34.0812 3.383 28.2552 2 23.6642 2C23.1752 2.002 11.6372 2.228 11.6372 16.921C11.6372 17.473 11.1902 17.921 10.6372 17.921C7.87417 17.921 5.73017 18.699 4.26417 20.235C1.85417 22.76 2.00317 26.571 2.00417 26.609C2.00517 31.999 5.79717 36.184 10.6372 36.184H14.0052V38.184H10.6372C4.67517 38.184 0.00516936 33.121 0.00516936 26.658C-0.00283064 26.519 -0.197831 22.027 2.80317 18.869C4.47517 17.109 6.77617 16.13 9.65317 15.951C10.1792 0.186 23.5262 0 23.6642 0C30.7712 0 35.6212 3.029 37.4282 8.559C40.1562 8.114 42.6632 8.832 44.4362 10.59C46.1712 12.309 46.9222 14.747 46.5732 17.409C52.5052 17.823 56.0052 21.362 56.0052 27.053Z"
                                        fill="currentColor"
                                      ></path></svg
                                    >Migration &amp; Transfer
                                  </button>
                                </li>
                                <li>
                                  <button
                                    type="button"
                                    className="globalNav-0399 globalNav-0386"
                                  >
                                    <svg
                                      width="52"
                                      height="56"
                                      viewBox="0 0 52 56"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      aria-hidden="true"
                                      className="globalNav-0389"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M2 24.23C2.002 23.915 2.156 16.516 11.162 16.516C11.715 16.516 12.162 16.068 12.162 15.516C12.162 2.214 22.345 2.002 22.775 2C28.081 2 31.126 4.256 32.359 9.102C32.435 9.397 32.64 9.643 32.918 9.768C33.196 9.893 33.517 9.883 33.787 9.744C35.283 8.971 36.616 9.81 37.279 10.377C38.811 11.687 40.021 14.331 39.247 16.651C39.145 16.957 39.196 17.292 39.384 17.552C39.572 17.813 39.874 17.968 40.195 17.968C46.932 17.968 50 21.358 50 24.509C50 29.09 47.355 31.937 43.099 31.937H9.71C5.314 31.937 2 28.622 2 24.23ZM44.313 45.437C44.313 47.366 42.742 48.937 40.813 48.937C38.883 48.937 37.313 47.366 37.313 45.437C37.313 43.507 38.883 41.937 40.813 41.937C42.742 41.937 44.313 43.507 44.313 45.437ZM29.812 50.437C29.812 52.366 28.242 53.937 26.312 53.937C24.383 53.937 22.812 52.366 22.812 50.437C22.812 48.507 24.383 46.937 26.312 46.937C28.242 46.937 29.812 48.507 29.812 50.437ZM11.813 48.937C9.883 48.937 8.312 47.366 8.312 45.437C8.312 43.507 9.883 41.937 11.813 41.937C13.742 41.937 15.313 43.507 15.313 45.437C15.313 47.366 13.742 48.937 11.813 48.937ZM43.099 33.937C48.506 33.937 52 30.236 52 24.509C52 20.611 48.684 16.431 41.434 16.003C41.784 13.209 40.381 10.398 38.58 8.857C37.153 7.636 35.531 7.187 33.989 7.549C32.34 2.538 28.572 0 22.775 0C22.652 0 10.696 0.169 10.18 14.542C0.119 15.095 0 24.132 0 24.227C0 29.762 4.175 33.937 9.71 33.937H22.192L14.517 40.653C13.717 40.199 12.795 39.937 11.813 39.937C8.78 39.937 6.312 42.404 6.312 45.437C6.312 48.469 8.78 50.937 11.813 50.937C14.845 50.937 17.313 48.469 17.313 45.437C17.313 44.116 16.844 42.903 16.065 41.954L25.312 33.937V45.032C22.757 45.504 20.812 47.746 20.812 50.437C20.812 53.469 23.28 55.937 26.312 55.937C29.345 55.937 31.812 53.469 31.812 50.437C31.812 47.746 29.868 45.504 27.312 45.032V33.937L36.56 41.954C35.781 42.903 35.313 44.116 35.313 45.437C35.313 48.469 37.78 50.937 40.813 50.937C43.845 50.937 46.313 48.469 46.313 45.437C46.313 42.404 43.845 39.937 40.813 39.937C39.83 39.937 38.908 40.199 38.108 40.653L30.433 33.937H43.099Z"
                                        fill="currentColor"
                                      ></path></svg
                                    >Networking &amp; Content Delivery
                                  </button>
                                </li>
                                <li>
                                  <button
                                    type="button"
                                    className="globalNav-0399 globalNav-0386"
                                  >
                                    <svg
                                      width="50"
                                      height="56"
                                      viewBox="0 0 50 56"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      aria-hidden="true"
                                      className="globalNav-0389"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M47.517 41C47.05 41.809 46.168 42.379 44.903 42.71C44.542 41.161 43.158 40 41.5 40C39.863 40 38.495 41.135 38.115 42.657C36.99 42.463 35.82 42.208 34.598 41.87C35.117 39.511 35.504 36.932 35.739 34.189C37.961 32.639 40 31.021 41.809 29.375C42.716 30.27 43.56 31.168 44.3 32.061C47.44 35.845 48.613 39.104 47.517 41ZM41.5 45C40.673 45 40 44.327 40 43.5C40 42.673 40.673 42 41.5 42C42.328 42 43 42.673 43 43.5C43 44.327 42.328 45 41.5 45ZM25 54C22.31 54 19.503 49.994 17.754 43.255C20.067 42.523 22.505 41.565 25.01 40.391C27.471 41.541 29.911 42.509 32.246 43.255C30.497 49.994 27.691 54 25 54ZM2.484 41C1.779 39.779 2.126 38.179 2.647 36.882C2.922 36.952 3.204 37 3.5 37C5.43 37 7 35.43 7 33.5C7 32.709 6.727 31.987 6.283 31.4C6.873 30.726 7.509 30.05 8.193 29.375C10.001 31.021 12.04 32.639 14.262 34.189C14.497 36.944 14.888 39.534 15.41 41.901C8.702 43.754 3.829 43.329 2.484 41ZM3.5 32C4.328 32 5 32.673 5 33.5C5 34.327 4.328 35 3.5 35C2.673 35 2 34.327 2 33.5C2 32.673 2.673 32 3.5 32ZM2.484 15C3.829 12.671 8.703 12.247 15.41 14.099C14.888 16.467 14.497 19.057 14.262 21.812C12.04 23.362 10.001 24.98 8.193 26.626C7.286 25.73 6.442 24.833 5.701 23.939C2.561 20.155 1.388 16.896 2.484 15ZM25 2C25.919 2 26.84 2.464 27.746 3.367C27.286 3.959 27 4.693 27 5.5C27 7.43 28.571 9 30.5 9C30.672 9 30.836 8.973 31.002 8.949C31.452 10.12 31.86 11.387 32.214 12.752C29.914 13.482 27.49 14.435 25 15.602C22.498 14.43 20.064 13.474 17.754 12.743C19.503 6.005 22.31 2 25 2ZM32 5.5C32 6.327 31.328 7 30.5 7C29.673 7 29 6.327 29 5.5C29 4.673 29.673 4 30.5 4C31.328 4 32 4.673 32 5.5ZM35.899 24.373C37.509 25.555 38.992 26.771 40.35 28C38.995 29.226 37.516 30.44 35.91 31.619C35.967 30.436 36 29.229 36 28C36 26.779 35.959 25.572 35.899 24.373ZM27.316 16.74C29.184 15.916 30.977 15.229 32.672 14.679C33.056 16.468 33.356 18.378 33.577 20.362C32.576 19.718 31.556 19.083 30.5 18.474C29.434 17.858 28.371 17.283 27.316 16.74ZM16.4 20.379C16.621 18.334 16.925 16.425 17.3 14.671C19.004 15.222 20.806 15.911 22.684 16.74C21.629 17.283 20.567 17.858 19.5 18.474C18.436 19.088 17.409 19.729 16.4 20.379ZM14.091 31.619C12.485 30.44 11.006 29.226 9.651 28C11.007 26.774 12.485 25.56 14.091 24.38C14.034 25.564 14 26.77 14 28C14 29.229 14.034 30.436 14.091 31.619ZM22.697 39.255C20.814 40.086 19.008 40.777 17.3 41.33C16.926 39.575 16.621 37.666 16.4 35.621C17.409 36.271 18.436 36.912 19.5 37.526C20.559 38.138 21.627 38.707 22.697 39.255ZM33.601 35.621C33.381 37.657 33.078 39.558 32.705 41.307C30.967 40.746 29.165 40.051 27.34 39.251C28.387 38.712 29.442 38.137 30.5 37.526C31.565 36.912 32.592 36.271 33.601 35.621ZM29.5 35.794C27.972 36.677 26.475 37.463 25.01 38.179C23.505 37.449 21.995 36.657 20.5 35.794C19 34.928 17.556 34.021 16.176 33.088C16.063 31.462 16 29.766 16 28C16 26.234 16.063 24.538 16.176 22.912C17.556 21.978 19.001 21.072 20.5 20.206C22.033 19.321 23.533 18.533 25 17.816C26.468 18.533 27.968 19.321 29.5 20.206C30.996 21.069 32.435 21.973 33.811 22.903C33.931 24.571 34 26.274 34 28C34 29.766 33.938 31.462 33.825 33.088C32.445 34.021 31 34.928 29.5 35.794ZM47.517 15C48.613 16.896 47.44 20.155 44.3 23.939C43.56 24.832 42.716 25.73 41.809 26.625C39.996 24.977 37.954 23.355 35.727 21.803C35.493 19.096 35.111 16.498 34.588 14.1C41.297 12.246 46.172 12.671 47.517 15ZM43.262 28C44.199 27.073 45.072 26.143 45.84 25.216C49.599 20.685 50.809 16.702 49.249 14C47.326 10.669 41.522 10.179 34.13 12.185C33.747 10.718 33.307 9.355 32.82 8.101C33.538 7.459 34 6.537 34 5.5C34 3.57 32.43 2 30.5 2C30.115 2 29.749 2.078 29.402 2.194C28.038 0.738 26.562 0 25 0C21.155 0 17.83 4.781 15.87 12.186C8.478 10.18 2.674 10.669 0.751 14C-0.808 16.702 0.402 20.685 4.161 25.216C4.929 26.143 5.803 27.074 6.741 28.001C5.996 28.738 5.302 29.477 4.663 30.214C4.297 30.084 3.91 30 3.5 30C1.571 30 0 31.57 0 33.5C0 34.405 0.355 35.224 0.921 35.846C-0.115 38.256 -0.184 40.379 0.751 42C1.922 44.028 4.531 45.002 8.061 45.002C10.328 45.002 12.979 44.594 15.869 43.811C17.829 51.217 21.155 56 25 56C28.846 56 32.171 51.219 34.131 43.814C35.558 44.206 36.924 44.499 38.227 44.704C38.72 46.04 39.996 47 41.5 47C42.973 47 44.23 46.083 44.746 44.793C46.897 44.376 48.416 43.443 49.249 42C50.809 39.298 49.599 35.315 45.84 30.784C45.072 29.857 44.199 28.927 43.262 28Z"
                                        fill="currentColor"
                                      ></path></svg
                                    >Quantum Technologies
                                  </button>
                                </li>
                                <li>
                                  <button
                                    type="button"
                                    className="globalNav-0399 globalNav-0386"
                                  >
                                    <svg
                                      width="56"
                                      height="56"
                                      viewBox="0 0 56 56"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      aria-hidden="true"
                                      className="globalNav-0389"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M16.85 6.628L15.434 5.215C18.787 1.856 23.249 0.003 27.996 0H28.01C32.751 0 37.209 1.844 40.565 5.195L39.153 6.61C36.174 3.637 32.217 2 28.01 2H27.997C23.785 2.003 19.826 3.647 16.85 6.628ZM37.175 8.848L35.761 10.262C31.482 5.983 24.519 5.983 20.24 10.262L18.826 8.848C23.884 3.789 32.117 3.789 37.175 8.848ZM54 49.376L52 50.889V39.472L54 41.025V49.376ZM10 36.336C10 26.074 17.739 18.336 28 18.336C38.262 18.336 46 26.074 46 36.336V53.5H10V36.336ZM6 53.5H8V36.5H6V53.5ZM2 49.376V41.025L4 39.472V50.889L2 49.376ZM26 14.024C26 13.184 26.684 12.5 27.524 12.5H28.477C29.317 12.5 30 13.184 30 14.024V16.431C29.344 16.371 28.678 16.336 28 16.336C27.323 16.336 26.657 16.371 26 16.431V14.024ZM48 53.5H50V36.5H48V53.5ZM55.614 39.746L52 36.94V35.5C52 34.948 51.553 34.5 51 34.5H47.913C47.155 25.365 40.773 18.353 32 16.709V14.024C32 12.081 30.419 10.5 28.477 10.5H27.524C25.581 10.5 24 12.081 24 14.024V16.709C15.228 18.353 8.846 25.365 8.087 34.5H5C4.448 34.5 4 34.948 4 35.5V36.94L0.387 39.746C0.143 39.935 0 40.227 0 40.536V49.874C0 50.187 0.147 50.482 0.397 50.671L4 53.398V53.5V54.5V55.5H52V54.5V53.5V53.398L55.604 50.671C55.854 50.482 56 50.187 56 49.874V40.536C56 40.227 55.858 39.935 55.614 39.746ZM37.224 39.165C36.093 39.604 34.906 39.42 34.042 38.676C33.185 37.936 32.826 36.819 33.081 35.689C33.325 34.616 34.208 33.73 35.281 33.485C35.525 33.429 35.768 33.402 36.006 33.402C36.685 33.402 37.329 33.625 37.869 34.055C38.588 34.629 39 35.484 39 36.413C38.998 37.649 38.285 38.754 37.224 39.165ZM39.116 32.492C37.917 31.536 36.358 31.189 34.835 31.535C33 31.954 31.546 33.411 31.13 35.247C30.715 37.084 31.33 38.978 32.736 40.191C33.663 40.99 34.806 41.403 35.994 41.403C36.64 41.403 37.301 41.28 37.947 41.03C39.77 40.324 40.996 38.47 41 36.403C41 34.873 40.314 33.447 39.116 32.492ZM21.224 39.165C20.094 39.604 18.906 39.42 18.042 38.676C17.185 37.936 16.826 36.819 17.081 35.689C17.325 34.616 18.208 33.73 19.281 33.485C19.525 33.429 19.768 33.402 20.006 33.402C20.685 33.402 21.329 33.625 21.869 34.055C22.588 34.629 23 35.484 23 36.413C22.998 37.649 22.285 38.754 21.224 39.165ZM23.116 32.492C21.917 31.536 20.358 31.189 18.835 31.535C17 31.954 15.546 33.411 15.13 35.247C14.715 37.084 15.33 38.978 16.736 40.191C17.663 40.99 18.806 41.403 19.994 41.403C20.64 41.403 21.301 41.28 21.947 41.03C23.77 40.324 24.996 38.47 25 36.403C25 34.873 24.314 33.447 23.116 32.492Z"
                                        fill="currentColor"
                                      ></path></svg
                                    >Robotics
                                  </button>
                                </li>
                                <li>
                                  <button
                                    type="button"
                                    className="globalNav-0399 globalNav-0386"
                                  >
                                    <svg
                                      width="55"
                                      height="47"
                                      viewBox="0 0 55 47"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      aria-hidden="true"
                                      className="globalNav-0389"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M43.7057 25.9848C40.7677 27.7728 37.1877 29.5078 33.1467 31.0588C25.6557 33.9338 17.0217 35.8918 10.4277 36.0008C13.6317 41.0518 19.2587 44.4218 25.6707 44.4218C35.6257 44.4218 43.7257 36.3228 43.7257 26.3678C43.7257 26.2378 43.7087 26.1128 43.7057 25.9848ZM7.0897 33.8768C6.1467 31.5548 5.6167 29.0238 5.6167 26.3678C5.6167 26.2338 5.6347 26.1038 5.6377 25.9708C3.4117 27.8188 2.1017 29.5588 2.0057 30.8758C1.9647 31.4378 2.1487 31.8968 2.5887 32.3188C3.4107 33.1098 4.9707 33.6368 7.0897 33.8768ZM7.6167 26.3678C7.6167 29.1048 8.2467 31.6908 9.3417 34.0178C15.0437 34.1268 23.4447 32.6408 32.4307 29.1918C37.0327 27.4258 40.7087 25.5488 43.5137 23.7508C42.2387 15.0338 34.7337 8.3128 25.6707 8.3128C15.7157 8.3128 7.6167 16.4118 7.6167 26.3678ZM47.2687 11.0468C47.2687 10.2198 46.5957 9.54679 45.7687 9.54679C44.9407 9.54679 44.2677 10.2198 44.2677 11.0468C44.2677 11.8738 44.9407 12.5468 45.7687 12.5468C46.5957 12.5468 47.2687 11.8738 47.2687 11.0468ZM51.0347 13.7068C52.0797 14.7198 52.4577 15.9568 52.1767 17.3258C51.7107 19.5888 49.3517 22.1798 45.6427 24.7278C45.6857 25.2698 45.7257 25.8138 45.7257 26.3678C45.7257 37.4258 36.7287 46.4218 25.6707 46.4218C18.0867 46.4218 11.4747 42.1888 8.0667 35.9618C5.0157 35.7758 2.5837 35.0878 1.2027 33.7608C0.338696 32.9298 -0.0733038 31.8808 0.0106962 30.7298C0.215696 27.9378 3.2617 25.1468 5.8867 23.2388C7.3957 13.6658 15.6797 6.3128 25.6707 6.3128C35.4077 6.3128 43.5387 13.2908 45.3447 22.5068C48.3117 20.3338 49.9237 18.3508 50.2167 16.9228C50.3597 16.2268 50.1917 15.6738 49.6887 15.1848C49.0857 14.6718 48.3437 14.2818 47.5407 14.0468C47.0187 14.3568 46.4177 14.5468 45.7687 14.5468C43.8387 14.5468 42.2687 12.9768 42.2687 11.0468C42.2687 9.11679 43.8387 7.54679 45.7687 7.54679C47.6977 7.54679 49.2677 9.11679 49.2677 11.0468C49.2677 11.5458 49.1597 12.0178 48.9717 12.4468C49.7147 12.7628 50.4157 13.1788 51.0347 13.7068ZM44.1917 5.7488C45.4117 5.3388 46.7177 5.42279 47.8717 5.99379C48.8137 6.45979 49.5907 7.2348 50.0567 8.1778L51.8497 7.2918C51.1887 5.9578 50.0917 4.85979 48.7587 4.20079C47.1257 3.39379 45.2767 3.2708 43.5517 3.8548C41.8257 4.4388 40.4327 5.6588 39.6257 7.2918L41.4187 8.1778C41.9887 7.0248 42.9737 6.1618 44.1917 5.7488ZM54.8947 5.6758L53.1037 6.56579C52.3097 4.96779 50.9937 3.65179 49.3967 2.85879C45.3377 0.840795 40.3897 2.50279 38.3697 6.56579L36.5787 5.6758C39.0877 0.624795 45.2367 -1.4422 50.2877 1.0678C52.2717 2.0538 53.9087 3.69079 54.8947 5.6758Z"
                                        fill="currentColor"
                                      ></path></svg
                                    >Satellite
                                  </button>
                                </li>
                                <li>
                                  <button
                                    type="button"
                                    className="globalNav-0399 globalNav-0386"
                                  >
                                    <svg
                                      width="42"
                                      height="57"
                                      viewBox="0 0 42 57"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      aria-hidden="true"
                                      className="globalNav-0389"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M40 33.1418C40 33.1958 39.964 38.5788 37.563 43.8577C34.417 50.7767 28.845 54.2858 21 54.2858C13.164 54.2858 7.593 50.5428 4.442 43.1618C2.035 37.5208 2 31.7707 2 31.7147V9.39375L21 2.07175L40 9.39375V33.1418ZM41.359 7.77375L21.359 0.06675C21.129 -0.02225 20.871 -0.02225 20.641 0.06675L0.641 7.77375C0.255 7.92275 0 8.29375 0 8.70675V31.7147C0 31.9597 0.24 56.2858 21 56.2858C41.76 56.2858 42 33.3737 42 33.1427V8.70675C42 8.29375 41.745 7.92275 41.359 7.77375ZM35 33.1348C34.986 34.7458 34.495 48.5488 22 49.2518V7.81575L35 12.8258V33.1348ZM7 31.7147V12.8258L20 7.81575V49.2467C7.158 48.4507 7 32.4137 7 31.7147ZM20.641 5.42575L5.641 11.2058C5.255 11.3548 5 11.7248 5 12.1388V31.7147C5 32.5137 5.182 51.2858 21 51.2858C27.384 51.2858 32.16 48.3498 34.813 42.7967C36.854 38.5228 36.993 34.0117 37 33.1427V12.1388C37 11.7248 36.745 11.3548 36.359 11.2058L21.359 5.42575C21.129 5.33675 20.871 5.33675 20.641 5.42575Z"
                                        fill="currentColor"
                                      ></path></svg
                                    >Security, Identity, &amp;
                                    Compliance
                                  </button>
                                </li>
                                <li>
                                  <button
                                    type="button"
                                    className="globalNav-0399 globalNav-0386"
                                  >
                                    <svg
                                      width="52"
                                      height="56"
                                      viewBox="0 0 52 56"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      aria-hidden="true"
                                      className="globalNav-0389"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M17 38H35L35.001 43H17V38ZM17 45H35C36.103 45 37 44.103 37 43V38C37 36.897 36.103 36 35 36H17C15.897 36 15 36.897 15 38V43C15 44.103 15.897 45 17 45ZM15 23H36V21H15V23ZM15 10H23V8H15V10ZM15 16H24V14H15V16ZM50 52.034C50 53.118 49.118 54 48.034 54H3.966C2.882 54 2 53.118 2 52.034V31H50V52.034ZM11 2H30V12C30 12.552 30.447 13 31 13H41V29H11V2ZM32 3.414L39.586 11H32V3.414ZM51 29H43V12H42.991C42.99 11.74 42.898 11.484 42.707 11.293L31.707 0.293C31.516 0.102 31.26 0.0100002 31 0.0100002V0H10C9.447 0 9 0.448 9 1V29H1C0.447 29 0 29.448 0 30V52.034C0 54.221 1.779 56 3.966 56H48.034C50.221 56 52 54.221 52 52.034V30C52 29.448 51.553 29 51 29Z"
                                        fill="currentColor"
                                      ></path></svg
                                    >Storage
                                  </button>
                                </li>
                              </ul>
                            </li>
                          </ul>
                          <div
                            className="globalNav-0391"
                            data-testid="awsc-nav-services-menu-right-panel"
                          >
                            <h1 className="globalNav-0365 globalNav-0366">
                              <svg
                                width="50"
                                height="50"
                                viewBox="-4 -3 50 50"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g
                                  stroke="#879596"
                                  stroke-width="2"
                                  fill-rule="evenodd"
                                  stroke-linejoin="round"
                                  transform="translate(4.5,4) scale(.8)"
                                >
                                  <path
                                    d="M20.2896 1L2 10.4139L19.7792 19.7423L38.1538 10.4139L20.2896 1Z"
                                  ></path>
                                  <path
                                    d="M2 10.4141V34.2057L20.0344 43.5341V19.7424L2 10.4141Z"
                                  ></path>
                                  <path
                                    d="M38.1541 10.4141V34.2057L20.0347 43.5341V19.7424L38.1541 10.4141Z"
                                  ></path>
                                </g></svg
                              >Recently visited
                            </h1>
                            <div
                              className="globalNav-0367 globalNav-0368"
                              data-testid="recently-visited-container"
                            >
                              <ul className="globalNav-0397" data-testid="">
                                <li
                                  className="_1DUEA3IJy2eDwsVuxM14ny"
                                  data-testid="-s"
                                >
                                  <button
                                    type="button"
                                    className="globalNav-0399 _1sh5akoo7uxw32dE4fwwB1 _2xfNeYS2hLAYcWl6304QfA"
                                    aria-label='Add "Support" to favorites'
                                    data-testid="service-list-item-toggle-favorite-button-s"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      version="2.0"
                                      focusable="false"
                                      aria-hidden="true"
                                      className="globalNav-0311"
                                      viewBox="0 0 16 15"
                                      height="18px"
                                      width="18px"
                                    >
                                      <path
                                        fill="none"
                                        stroke="#FFFFFF"
                                        stroke-width="1"
                                        stroke-linejoin="round"
                                        stroke-miterlimit="10"
                                        d="M8 0.835615L9.70288 5.13601C9.84624 5.49806 10.1867 5.74396 10.5755 5.76621L15.2372 6.03304L11.636 8.94101C11.3289 9.18897 11.1964 9.59436 11.2978 9.97581L12.4793 14.4229L8.53442 11.9285C8.20803 11.7221 7.79197 11.7221 7.46557 11.9285L3.52065 14.4229L4.70221 9.97581C4.80356 9.59436 4.67107 9.18898 4.364 8.94101L0.762825 6.03304L5.4245 5.76621C5.81327 5.74396 6.15376 5.49806 6.29712 5.13601L8 0.835615Z"
                                      ></path>
                                    </svg></button
                                  ><a
                                    className="globalNav-0398 _16Irp43n86oNmqMVsk6FLi"
                                    href="https://support.console.aws.amazon.com/support/home"
                                    target="_top"
                                    title="Contact AWS for technical and account support."
                                    aria-disabled="false"
                                    role="link"
                                    data-testid="s"
                                    ><h3
                                      className="_2TdmLn1rgDIHj-52nOg80B"
                                    >
                                      Support
                                    </h3>
                                    <p className="_1-sVKFnf7Qe_IKS1gzUGlo">
                                      Contact AWS for technical and
                                      account support.
                                    </p></a
                                  >
                                </li>
                                <li
                                  className="_1DUEA3IJy2eDwsVuxM14ny"
                                  data-testid="-kms"
                                >
                                  <button
                                    type="button"
                                    className="globalNav-0399 _1sh5akoo7uxw32dE4fwwB1 _2xfNeYS2hLAYcWl6304QfA"
                                    aria-label='Add "Key Management Service" to favorites'
                                    data-testid="service-list-item-toggle-favorite-button-kms"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      version="2.0"
                                      focusable="false"
                                      aria-hidden="true"
                                      className="globalNav-0311"
                                      viewBox="0 0 16 15"
                                      height="18px"
                                      width="18px"
                                    >
                                      <path
                                        fill="none"
                                        stroke="#FFFFFF"
                                        stroke-width="1"
                                        stroke-linejoin="round"
                                        stroke-miterlimit="10"
                                        d="M8 0.835615L9.70288 5.13601C9.84624 5.49806 10.1867 5.74396 10.5755 5.76621L15.2372 6.03304L11.636 8.94101C11.3289 9.18897 11.1964 9.59436 11.2978 9.97581L12.4793 14.4229L8.53442 11.9285C8.20803 11.7221 7.79197 11.7221 7.46557 11.9285L3.52065 14.4229L4.70221 9.97581C4.80356 9.59436 4.67107 9.18898 4.364 8.94101L0.762825 6.03304L5.4245 5.76621C5.81327 5.74396 6.15376 5.49806 6.29712 5.13601L8 0.835615Z"
                                      ></path>
                                    </svg></button
                                  ><a
                                    className="globalNav-0398 _16Irp43n86oNmqMVsk6FLi"
                                    href="https://console.aws.amazon.com/kms/home"
                                    target="_top"
                                    title="Securely Generate and Manage AWS Encryption Keys"
                                    aria-disabled="false"
                                    role="link"
                                    data-testid="kms"
                                    ><h3
                                      className="_2TdmLn1rgDIHj-52nOg80B"
                                    >
                                      Key Management Service
                                    </h3>
                                    <p className="_1-sVKFnf7Qe_IKS1gzUGlo">
                                      Securely Generate and Manage AWS
                                      Encryption Keys
                                    </p></a
                                  >
                                </li>
                                <li
                                  className="_1DUEA3IJy2eDwsVuxM14ny"
                                  data-testid="-license-manager"
                                >
                                  <button
                                    type="button"
                                    className="globalNav-0399 _1sh5akoo7uxw32dE4fwwB1 _2xfNeYS2hLAYcWl6304QfA"
                                    aria-label='Add "AWS License Manager" to favorites'
                                    data-testid="service-list-item-toggle-favorite-button-license-manager"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      version="2.0"
                                      focusable="false"
                                      aria-hidden="true"
                                      className="globalNav-0311"
                                      viewBox="0 0 16 15"
                                      height="18px"
                                      width="18px"
                                    >
                                      <path
                                        fill="none"
                                        stroke="#FFFFFF"
                                        stroke-width="1"
                                        stroke-linejoin="round"
                                        stroke-miterlimit="10"
                                        d="M8 0.835615L9.70288 5.13601C9.84624 5.49806 10.1867 5.74396 10.5755 5.76621L15.2372 6.03304L11.636 8.94101C11.3289 9.18897 11.1964 9.59436 11.2978 9.97581L12.4793 14.4229L8.53442 11.9285C8.20803 11.7221 7.79197 11.7221 7.46557 11.9285L3.52065 14.4229L4.70221 9.97581C4.80356 9.59436 4.67107 9.18898 4.364 8.94101L0.762825 6.03304L5.4245 5.76621C5.81327 5.74396 6.15376 5.49806 6.29712 5.13601L8 0.835615Z"
                                      ></path>
                                    </svg></button
                                  ><a
                                    className="globalNav-0398 _16Irp43n86oNmqMVsk6FLi"
                                    href="https://console.aws.amazon.com/license-manager/home"
                                    target="_top"
                                    title="Set rules to manage, discover, and report third-party license usage proactively"
                                    aria-disabled="false"
                                    role="link"
                                    data-testid="license-manager"
                                    ><h3
                                      className="_2TdmLn1rgDIHj-52nOg80B"
                                    >
                                      AWS License Manager
                                    </h3>
                                    <p className="_1-sVKFnf7Qe_IKS1gzUGlo">
                                      Set rules to manage, discover, and
                                      report third-party license usage
                                      proactively
                                    </p></a
                                  >
                                </li>
                                <li
                                  className="_1DUEA3IJy2eDwsVuxM14ny"
                                  data-testid="-marketplace"
                                >
                                  <button
                                    type="button"
                                    className="globalNav-0399 _1sh5akoo7uxw32dE4fwwB1 _2xfNeYS2hLAYcWl6304QfA"
                                    aria-label='Add "AWS Marketplace Subscriptions" to favorites'
                                    data-testid="service-list-item-toggle-favorite-button-marketplace"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      version="2.0"
                                      focusable="false"
                                      aria-hidden="true"
                                      className="globalNav-0311"
                                      viewBox="0 0 16 15"
                                      height="18px"
                                      width="18px"
                                    >
                                      <path
                                        fill="none"
                                        stroke="#FFFFFF"
                                        stroke-width="1"
                                        stroke-linejoin="round"
                                        stroke-miterlimit="10"
                                        d="M8 0.835615L9.70288 5.13601C9.84624 5.49806 10.1867 5.74396 10.5755 5.76621L15.2372 6.03304L11.636 8.94101C11.3289 9.18897 11.1964 9.59436 11.2978 9.97581L12.4793 14.4229L8.53442 11.9285C8.20803 11.7221 7.79197 11.7221 7.46557 11.9285L3.52065 14.4229L4.70221 9.97581C4.80356 9.59436 4.67107 9.18898 4.364 8.94101L0.762825 6.03304L5.4245 5.76621C5.81327 5.74396 6.15376 5.49806 6.29712 5.13601L8 0.835615Z"
                                      ></path>
                                    </svg></button
                                  ><a
                                    className="globalNav-0398 _16Irp43n86oNmqMVsk6FLi"
                                    href="https://console.aws.amazon.com/marketplace/home"
                                    target="_top"
                                    title="Digital catalog where you can find, buy, and deploy software"
                                    aria-disabled="false"
                                    role="link"
                                    data-testid="marketplace"
                                    ><h3
                                      className="_2TdmLn1rgDIHj-52nOg80B"
                                    >
                                      AWS Marketplace Subscriptions
                                    </h3>
                                    <p className="_1-sVKFnf7Qe_IKS1gzUGlo">
                                      Digital catalog where you can
                                      find, buy, and deploy software
                                    </p></a
                                  >
                                </li>
                                <li
                                  className="_1DUEA3IJy2eDwsVuxM14ny"
                                  data-testid="-s3"
                                >
                                  <button
                                    type="button"
                                    className="globalNav-0399 _1sh5akoo7uxw32dE4fwwB1 _2xfNeYS2hLAYcWl6304QfA"
                                    aria-label='Add "S3" to favorites'
                                    data-testid="service-list-item-toggle-favorite-button-s3"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      version="2.0"
                                      focusable="false"
                                      aria-hidden="true"
                                      className="globalNav-0311"
                                      viewBox="0 0 16 15"
                                      height="18px"
                                      width="18px"
                                    >
                                      <path
                                        fill="none"
                                        stroke="#FFFFFF"
                                        stroke-width="1"
                                        stroke-linejoin="round"
                                        stroke-miterlimit="10"
                                        d="M8 0.835615L9.70288 5.13601C9.84624 5.49806 10.1867 5.74396 10.5755 5.76621L15.2372 6.03304L11.636 8.94101C11.3289 9.18897 11.1964 9.59436 11.2978 9.97581L12.4793 14.4229L8.53442 11.9285C8.20803 11.7221 7.79197 11.7221 7.46557 11.9285L3.52065 14.4229L4.70221 9.97581C4.80356 9.59436 4.67107 9.18898 4.364 8.94101L0.762825 6.03304L5.4245 5.76621C5.81327 5.74396 6.15376 5.49806 6.29712 5.13601L8 0.835615Z"
                                      ></path>
                                    </svg></button
                                  ><a
                                    className="globalNav-0398 _16Irp43n86oNmqMVsk6FLi"
                                    href="https://s3.console.aws.amazon.com/s3/home"
                                    target="_top"
                                    title="Scalable Storage in the Cloud"
                                    aria-disabled="false"
                                    role="link"
                                    data-testid="s3"
                                    ><h3
                                      className="_2TdmLn1rgDIHj-52nOg80B"
                                    >
                                      S3
                                    </h3>
                                    <p className="_1-sVKFnf7Qe_IKS1gzUGlo">
                                      Scalable Storage in the Cloud
                                    </p></a
                                  >
                                </li>
                                <li
                                  className="_1DUEA3IJy2eDwsVuxM14ny"
                                  data-testid="-iam"
                                >
                                  <button
                                    type="button"
                                    className="globalNav-0399 _1sh5akoo7uxw32dE4fwwB1 _2xfNeYS2hLAYcWl6304QfA"
                                    aria-label='Add "IAM" to favorites'
                                    data-testid="service-list-item-toggle-favorite-button-iam"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      version="2.0"
                                      focusable="false"
                                      aria-hidden="true"
                                      className="globalNav-0311"
                                      viewBox="0 0 16 15"
                                      height="18px"
                                      width="18px"
                                    >
                                      <path
                                        fill="none"
                                        stroke="#FFFFFF"
                                        stroke-width="1"
                                        stroke-linejoin="round"
                                        stroke-miterlimit="10"
                                        d="M8 0.835615L9.70288 5.13601C9.84624 5.49806 10.1867 5.74396 10.5755 5.76621L15.2372 6.03304L11.636 8.94101C11.3289 9.18897 11.1964 9.59436 11.2978 9.97581L12.4793 14.4229L8.53442 11.9285C8.20803 11.7221 7.79197 11.7221 7.46557 11.9285L3.52065 14.4229L4.70221 9.97581C4.80356 9.59436 4.67107 9.18898 4.364 8.94101L0.762825 6.03304L5.4245 5.76621C5.81327 5.74396 6.15376 5.49806 6.29712 5.13601L8 0.835615Z"
                                      ></path>
                                    </svg></button
                                  ><a
                                    className="globalNav-0398 _16Irp43n86oNmqMVsk6FLi"
                                    href="https://console.aws.amazon.com/iam/home"
                                    target="_top"
                                    title="Manage access to AWS resources"
                                    aria-disabled="false"
                                    role="link"
                                    data-testid="iam"
                                    ><h3
                                      className="_2TdmLn1rgDIHj-52nOg80B"
                                    >
                                      IAM
                                    </h3>
                                    <p className="_1-sVKFnf7Qe_IKS1gzUGlo">
                                      Manage access to AWS resources
                                    </p></a
                                  >
                                </li>
                                <li
                                  className="_1DUEA3IJy2eDwsVuxM14ny"
                                  data-testid="-budgets"
                                >
                                  <button
                                    type="button"
                                    className="globalNav-0399 _1sh5akoo7uxw32dE4fwwB1 _2xfNeYS2hLAYcWl6304QfA"
                                    aria-label='Add "AWS Budgets" to favorites'
                                    data-testid="service-list-item-toggle-favorite-button-budgets"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      version="2.0"
                                      focusable="false"
                                      aria-hidden="true"
                                      className="globalNav-0311"
                                      viewBox="0 0 16 15"
                                      height="18px"
                                      width="18px"
                                    >
                                      <path
                                        fill="none"
                                        stroke="#FFFFFF"
                                        stroke-width="1"
                                        stroke-linejoin="round"
                                        stroke-miterlimit="10"
                                        d="M8 0.835615L9.70288 5.13601C9.84624 5.49806 10.1867 5.74396 10.5755 5.76621L15.2372 6.03304L11.636 8.94101C11.3289 9.18897 11.1964 9.59436 11.2978 9.97581L12.4793 14.4229L8.53442 11.9285C8.20803 11.7221 7.79197 11.7221 7.46557 11.9285L3.52065 14.4229L4.70221 9.97581C4.80356 9.59436 4.67107 9.18898 4.364 8.94101L0.762825 6.03304L5.4245 5.76621C5.81327 5.74396 6.15376 5.49806 6.29712 5.13601L8 0.835615Z"
                                      ></path>
                                    </svg></button
                                  ><a
                                    className="globalNav-0398 _16Irp43n86oNmqMVsk6FLi"
                                    href="https://console.aws.amazon.com/billing/home#/budgets#/home"
                                    target="_top"
                                    title="Set Custom Budgets and Receive Alerts"
                                    aria-disabled="false"
                                    role="link"
                                    data-testid="budgets"
                                    ><h3
                                      className="_2TdmLn1rgDIHj-52nOg80B"
                                    >
                                      AWS Budgets
                                    </h3>
                                    <p className="_1-sVKFnf7Qe_IKS1gzUGlo">
                                      Set Custom Budgets and Receive
                                      Alerts
                                    </p></a
                                  >
                                </li>
                                <li
                                  className="_1DUEA3IJy2eDwsVuxM14ny"
                                  data-testid="-home"
                                >
                                  <button
                                    type="button"
                                    className="globalNav-0399 _1sh5akoo7uxw32dE4fwwB1 _2xfNeYS2hLAYcWl6304QfA"
                                    aria-label='Add "Console Home" to favorites'
                                    data-testid="service-list-item-toggle-favorite-button-home"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      version="2.0"
                                      focusable="false"
                                      aria-hidden="true"
                                      className="globalNav-0311"
                                      viewBox="0 0 16 15"
                                      height="18px"
                                      width="18px"
                                    >
                                      <path
                                        fill="none"
                                        stroke="#FFFFFF"
                                        stroke-width="1"
                                        stroke-linejoin="round"
                                        stroke-miterlimit="10"
                                        d="M8 0.835615L9.70288 5.13601C9.84624 5.49806 10.1867 5.74396 10.5755 5.76621L15.2372 6.03304L11.636 8.94101C11.3289 9.18897 11.1964 9.59436 11.2978 9.97581L12.4793 14.4229L8.53442 11.9285C8.20803 11.7221 7.79197 11.7221 7.46557 11.9285L3.52065 14.4229L4.70221 9.97581C4.80356 9.59436 4.67107 9.18898 4.364 8.94101L0.762825 6.03304L5.4245 5.76621C5.81327 5.74396 6.15376 5.49806 6.29712 5.13601L8 0.835615Z"
                                      ></path>
                                    </svg></button
                                  ><a
                                    className="globalNav-0398 _16Irp43n86oNmqMVsk6FLi"
                                    href="https://console.aws.amazon.com/console/home"
                                    target="_top"
                                    aria-disabled="false"
                                    role="link"
                                    data-testid="home"
                                    ><h3
                                      className="_2TdmLn1rgDIHj-52nOg80B"
                                    >
                                      Console Home
                                    </h3></a
                                  >
                                </li>
                                <li
                                  className="_1DUEA3IJy2eDwsVuxM14ny"
                                  data-testid="-systems-manager"
                                >
                                  <button
                                    type="button"
                                    className="globalNav-0399 _1sh5akoo7uxw32dE4fwwB1 _2xfNeYS2hLAYcWl6304QfA"
                                    aria-label='Add "Systems Manager" to favorites'
                                    data-testid="service-list-item-toggle-favorite-button-systems-manager"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      version="2.0"
                                      focusable="false"
                                      aria-hidden="true"
                                      className="globalNav-0311"
                                      viewBox="0 0 16 15"
                                      height="18px"
                                      width="18px"
                                    >
                                      <path
                                        fill="none"
                                        stroke="#FFFFFF"
                                        stroke-width="1"
                                        stroke-linejoin="round"
                                        stroke-miterlimit="10"
                                        d="M8 0.835615L9.70288 5.13601C9.84624 5.49806 10.1867 5.74396 10.5755 5.76621L15.2372 6.03304L11.636 8.94101C11.3289 9.18897 11.1964 9.59436 11.2978 9.97581L12.4793 14.4229L8.53442 11.9285C8.20803 11.7221 7.79197 11.7221 7.46557 11.9285L3.52065 14.4229L4.70221 9.97581C4.80356 9.59436 4.67107 9.18898 4.364 8.94101L0.762825 6.03304L5.4245 5.76621C5.81327 5.74396 6.15376 5.49806 6.29712 5.13601L8 0.835615Z"
                                      ></path>
                                    </svg></button
                                  ><a
                                    className="globalNav-0398 _16Irp43n86oNmqMVsk6FLi"
                                    href="https://console.aws.amazon.com/systems-manager/home"
                                    target="_top"
                                    title="AWS Systems Manager is a Central Place to View and Manage AWS Resources"
                                    aria-disabled="false"
                                    role="link"
                                    data-testid="systems-manager"
                                    ><h3
                                      className="_2TdmLn1rgDIHj-52nOg80B"
                                    >
                                      Systems Manager
                                    </h3>
                                    <p className="_1-sVKFnf7Qe_IKS1gzUGlo">
                                      AWS Systems Manager is a Central
                                      Place to View and Manage AWS
                                      Resources
                                    </p></a
                                  >
                                </li>
                              </ul>
                            </div>
                          </div>
                          <button
                            data-testid="service-section-close-icon"
                            className="_25eBY3cmF1hjcpSRSfmrMs"
                            aria-label="Close"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              version="2.0"
                              focusable="false"
                              aria-hidden="true"
                              className="globalNav-0311 _2a7AQys-EM5-NJWTt7e08v"
                              viewBox="0 0 16 16"
                            >
                              <path
                                d="M2 2l12 12M14 2L2 14"
                                className="globalNav-0360"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="globalNav-search-042 globalNav-search-041" style={{
                  visibility: 'hidden',
                  display: 'none'
                }} >
                <div className="globalNav-search-043" >
                  <button
                    title="Search"
                    type="button"
                    className="globalNav-search-0434 globalNav-search-047 globalNav-search-048 globalNav-search-044"
                    data-testid="awsc-concierge-open-search-button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="2.0"
                      focusable="false"
                      aria-hidden="true"
                      className="globalNav-search-0411 globalNav-search-045"
                      viewBox="0 0 16 16"
                    >
                      <circle
                        cx="7"
                        cy="7"
                        r="5"
                        className="globalNav-search-0410"
                      ></circle>
                      <line
                        x1="15"
                        y1="15"
                        x2="10.5"
                        y2="10.5"
                        className="globalNav-search-0410"
                      ></line>
                    </svg>
                  </button>
                  <div
                    className="globalNav-search-0413 globalNav-search-0412"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="2.0"
                      focusable="false"
                      aria-hidden="true"
                      className="globalNav-search-0411 globalNav-search-0414"
                      viewBox="0 0 16 16"
                    >
                      <circle
                        cx="7"
                        cy="7"
                        r="5"
                        className="globalNav-search-0410"
                      ></circle>
                      <line
                        x1="15"
                        y1="15"
                        x2="10.5"
                        y2="10.5"
                        className="globalNav-search-0410"
                      ></line>
                    </svg>
                    <div className="globalNav-search-0417">
                      <input
                      title="Search"
                        className="globalNav-search-0418 globalNav-search-0424"
                        readOnly={false}
                        type="search"
                        autoComplete="off"
                        spellCheck="false"
                        tabIndex={-1}
                        data-testid="awsc-concierge-input-hint"
                        value=""
                      /><input
                        className="globalNav-search-0419 globalNav-search-0425"
                        type="search"
                        autoComplete="off"
                        spellCheck="false"
                        placeholder="Search for services, features, blogs, docs, and more"
                        data-testid="awsc-concierge-input"
                        maxLength={256}
                        value=""
                      />
                    </div>
                    <div className="globalNav-search-0420">[Option+S]</div>
                  </div>
                </div>
              </div>
              <div className="globalNav-033" >
                <div className="Tm-3QhwnUkj2Uw-lI2pkk">
                  <button
                    aria-controls="menu--phd"
                    aria-haspopup="menu"
                    className="_1c9itAyTQu7kLsk0Fy-yGs B5xhk3c8e7Mwat42rPfOL"
                    data-testid="awsc-phd__bell-icon"
                    title="Notifications"
                  >
                    <div
                      data-testid="awsc-phd__bell-icon"
                      aria-label="Notifications"
                    >
                      <svg
                        className="_3bn1TFvZHOYOcBRf0FqXDE"
                        viewBox="0 0 18 18"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                      >
                        <g
                          id="Page-1"
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                          stroke-linejoin="round"
                        >
                          <g
                            id="Group"
                            transform="translate(1.000000, 1.000000)"
                            stroke="currentColor"
                            stroke-width="2"
                          >
                            <path
                              d="M8,1.33333714 C4,1.33333714 4,6.66666286 4,6.66666286 L0,11.4285714 L16,11.4285714 L12,6.66666286 C12,6.66666286 12,1.33333714 8,1.33333714 Z"
                              id="Path"
                            ></path>
                            <path
                              d="M5.33333714,12 L5.33333714,13.3333371 C5.33333714,14.8060944 6.52724277,16 8,16 C9.47275723,16 10.6666629,14.8060944 10.6666629,13.3333371 L10.6666629,12"
                              id="Path"
                            ></path>
                            <path
                              d="M8,1.88737914e-15 L8,1.33333714"
                              id="Path"
                              stroke-linecap="round"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </button>
                  <div
                    className="awsc-top-below-nav awsc-bot-above-f awsc-max-height-between-nav-f-margin _2_o9M7vHAJ0PnLTGrKSm91 _1bCyxqM6NO95SxwZWnxVCJ _2Yi8CX97V8NFv1Ue67hCAE"
                  >
                    <div id="phd-content-container">
                      <div className="_4oGQlADSCefuFLM1WCUPZ">
                        <button
                          className="_2v-8iYl7IkjebTAl3xHEes _1YIRTc9q-hRKFp9lQKkNxJ"
                          aria-label="Close"
                        >
                          <span
                            className="awsui_icon_h11ix_31bp4_98 awsui_size-normal-mapped-height_h11ix_31bp4_151 awsui_size-normal_h11ix_31bp4_147 awsui_variant-normal_h11ix_31bp4_219"
                            ><svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 16 16"
                              focusable="false"
                              aria-hidden="true"
                            >
                              <path
                                d="m2 2 12 12M14 2 2 14"
                              ></path></svg
                          ></span>
                        </button>
                      </div>
                      <div className="_2Koqyo144ucIpsTSyDKm-R">
                        <ul
                          role="menu"
                          id="menu--phd"
                          className="_1sRoMqrIpCJzaQfcczt4k"
                        >
                          <li
                            role="menuitem"
                            className="_2gAsBKb-hyDUG19J7W4k9u"
                          >
                            <div
                              tabIndex={-1}
                              className="YNU__jNTudeR_6GXEwegm aNX9l-zOQhcm2p5A9-X80 _2Zhuecrj9Ufl9VhCAaXzvc"
                            >
                              Notifications were unable to load. Please
                              go to PHD to check your Service Health.
                            </div>
                          </li>
                          <hr className="_1KVt4I-fKa7fommXVYmwcG" />
                          <li
                            role="menuitem"
                            className="_2gAsBKb-hyDUG19J7W4k9u _30rmrIuJgrJfzJgc0YdFyk"
                          >
                            <a
                              id="awsc-phd-event-log"
                              href="https://phd.aws.amazon.com/phd/home?#/event-log"
                              target="_top"
                              data-testid="awsc-phd-event-log"
                              tabIndex={-1}
                              className="YNU__jNTudeR_6GXEwegm"
                              >Event log</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="_2hfvPlotB_W6ynSWO_vWQi">
                  <button
                    aria-controls="awsc-navigation__more-menu--list"
                    aria-haspopup="menu"
                    className="-QMSffHxi8e4xKH5My_8U"
                    data-testid="awsc-nav-more-menu"
                    title="More"
                  >
                    More<span className="_35mAXmfbCHtFsukgiXLpJp"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="2.0"
                        focusable="false"
                        aria-hidden="true"
                        className="globalNav-0311 globalNav-0318 globalNav-0319"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M4 11h8L8 5l-4 6z"
                          className="globalNav-0320"
                        ></path></svg
                    ></span>
                  </button>
                  <div
                    className="awsc-top-below-nav awsc-bot-above-f _2tPytxO9lUBJIYe9AU1i-v"
                    data-testid="awsc-nav-more-menu-list"

                  >
                    <ul
                      id="awsc-navigation__more-menu--list"
                      className="_3Jm71N5bQ6sO5s4jmxDzui"
                      role="menu"
                    >
                      <li role="menuitem" className="Xppoy2gHTZDz1EHWcjgks"  >
                        <div className="Tm-3QhwnUkj2Uw-lI2pkk">
                          <button
                            aria-controls="menu--support"
                            aria-label="Open support menu"
                            aria-haspopup="menu"
                            className="_1c9itAyTQu7kLsk0Fy-yGs QgA2vIs7D77repEtoveeO"
                            data-testid="more-menu__awsc-nav-support-menu-button"
                          >
                            <span
                              data-testid="awsc-nav-support-menu-button"
                              className="OYUiy2c-Bv3l4eRDVvfYu"
                              ><svg
                                width="16"
                                height="16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <title>Support</title>
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M8 0C3.586 0 0 3.584 0 8c0 4.415 3.586 8 8 8 4.416 0 8-3.585 8-8 0-1.92-.677-3.681-1.805-5.06A7.988 7.988 0 008 0zM8 2c1.874 0 3.546.86 4.648 2.205A6.002 6.002 0 018 14C4.69 14 2 11.311 2 8A6.004 6.004 0 018 2z"
                                  fill="currentColor"
                                ></path>
                                <path
                                  d="M7.007 11.094h1.997v1.935H7.007v-1.935zM4.563 6.27c.052-1.272.497-2.173 1.332-2.705.526-.34 1.174-.51 1.943-.51 1.01 0 1.848.24 2.514.725.668.481 1.002 1.196 1.002 2.143 0 .58-.145 1.07-.436 1.467-.168.24-.495.55-.977.923l-.476.369c-.259.2-.431.435-.515.704-.055.169-.083.432-.089.789H7.053c.028-.755.098-1.274.215-1.563.116-.29.415-.62.897-.996l.49-.38c.16-.121.29-.254.389-.396.178-.245.267-.516.267-.81 0-.34-.099-.65-.297-.928-.199-.279-.562-.42-1.09-.42-.518 0-.885.173-1.102.516a1.989 1.989 0 00-.325 1.072H4.563z"
                                  fill="currentColor"
                                ></path></svg
                              ><span
                                className="_1Vtx1Z7gxtNZJP2MVzVCLO _31GHADTBDW3BW3qVhZRFPq"
                              ></span
                            ></span>
                          </button>
                          <div
                            className="awsc-top-below-nav awsc-bot-above-f awsc-max-height-between-nav-f-margin _2maVID4-40Ka9DsaImVuUK HcniFFM-93JZrVD6ATd-- _2_o9M7vHAJ0PnLTGrKSm91 _1bCyxqM6NO95SxwZWnxVCJ _2Yi8CX97V8NFv1Ue67hCAE"
                          >
                            <div className="_4oGQlADSCefuFLM1WCUPZ">
                              <button
                                aria-label="Back"
                                className="_2v-8iYl7IkjebTAl3xHEes _2zrWNnMShw1K78VxtDgxXs"
                                data-testid="awsc-nav-unified-account-menu-header"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  version="2.0"
                                  focusable="false"
                                  aria-hidden="true"
                                  className="globalNav-0311 GSBFK_vRYiyr0KqQz70s3"
                                  viewBox="0 0 16 16"
                                  height="16px"
                                  width="16px"
                                  fill="transparent"
                                  stroke="#D5DBDB"
                                  stroke-width="2"
                                  stroke-linejoin="round"
                                  stroke-miterlimit="10"
                                >
                                  <path d="M12 1L5 8l7 7"></path></svg
                                >Help &amp; support</button
                              ><button
                                className="_2v-8iYl7IkjebTAl3xHEes _1YIRTc9q-hRKFp9lQKkNxJ"
                                aria-label="Close"
                              >
                                <span
                                  className="awsui_icon_h11ix_31bp4_98 awsui_size-normal-mapped-height_h11ix_31bp4_151 awsui_size-normal_h11ix_31bp4_147 awsui_variant-normal_h11ix_31bp4_219"
                                  ><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    focusable="false"
                                    aria-hidden="true"
                                  >
                                    <path
                                      d="m2 2 12 12M14 2 2 14"
                                    ></path></svg
                                ></span>
                              </button>
                            </div>
                            <div className="_2Koqyo144ucIpsTSyDKm-R">
                              <ul
                                role="menu"
                                id="menu--support"
                                className="_1sRoMqrIpCJzaQfcczt4k"
                              >
                                <li
                                  role="menuitem"
                                  className="_2gAsBKb-hyDUG19J7W4k9u"
                                >
                                  <a
                                    id="aws-support"
                                    href="https://support.console.aws.amazon.com/support/home"
                                    target="_top"
                                    data-testid="aws-support"
                                    data-awsc-service-id="s"
                                    tabIndex={-1}
                                    className="YNU__jNTudeR_6GXEwegm"
                                    >Support Center</a
                                  >
                                </li>
                                <li
                                  role="menuitem"
                                  className="_2gAsBKb-hyDUG19J7W4k9u"
                                >
                                  <a
                                    id="aws-expert-help"
                                    href="https://iq.aws.amazon.com/?utm=csl.support"
                                    target="_blank"
                                    data-testid="aws-expert-help"
                                    data-awsc-service-id=""
                                    tabIndex={-1}
                                    rel="noreferrer noopener"
                                    className="YNU__jNTudeR_6GXEwegm"
                                    >Expert Help<svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      version="2.0"
                                      focusable="false"
                                      aria-hidden="true"
                                      className="globalNav-0311 globalNav-0393 _3O2-CnLAdxx4hq_ysV79R3"
                                      viewBox="0 0 16 16"
                                    >
                                      <path
                                        className="globalNav-0394"
                                        d="M10 2h4v4"
                                      ></path>
                                      <path d="M6 10l8-8"></path>
                                      <path
                                        className="globalNav-0395"
                                        d="M14 9.048V14H2V2h5"
                                      ></path></svg
                                  ></a>
                                </li>
                                <li
                                  role="menuitem"
                                  className="_2gAsBKb-hyDUG19J7W4k9u"
                                >
                                  <a
                                    id="aws-rePost"
                                    href="https://repost.aws/"
                                    target="_blank"
                                    data-testid="aws-rePost"
                                    data-awsc-service-id=""
                                    tabIndex={-1}
                                    rel="noreferrer noopener"
                                    className="YNU__jNTudeR_6GXEwegm"
                                    >re:Post<svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      version="2.0"
                                      focusable="false"
                                      aria-hidden="true"
                                      className="globalNav-0311 globalNav-0393 _3O2-CnLAdxx4hq_ysV79R3"
                                      viewBox="0 0 16 16"
                                    >
                                      <path
                                        className="globalNav-0394"
                                        d="M10 2h4v4"
                                      ></path>
                                      <path d="M6 10l8-8"></path>
                                      <path
                                        className="globalNav-0395"
                                        d="M14 9.048V14H2V2h5"
                                      ></path></svg
                                  ></a>
                                </li>
                                <hr className="_1KVt4I-fKa7fommXVYmwcG" />
                                <li
                                  role="menuitem"
                                  className="_2gAsBKb-hyDUG19J7W4k9u _30rmrIuJgrJfzJgc0YdFyk"
                                >
                                  <a
                                    id="aws-documentation"
                                    href="https://docs.aws.amazon.com/"
                                    target="_blank"
                                    data-testid="aws-documentation"
                                    data-awsc-service-id=""
                                    tabIndex={-1}
                                    rel="noreferrer noopener"
                                    className="YNU__jNTudeR_6GXEwegm"
                                    >Documentation<svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      version="2.0"
                                      focusable="false"
                                      aria-hidden="true"
                                      className="globalNav-0311 globalNav-0393 _3O2-CnLAdxx4hq_ysV79R3"
                                      viewBox="0 0 16 16"
                                    >
                                      <path
                                        className="globalNav-0394"
                                        d="M10 2h4v4"
                                      ></path>
                                      <path d="M6 10l8-8"></path>
                                      <path
                                        className="globalNav-0395"
                                        d="M14 9.048V14H2V2h5"
                                      ></path></svg
                                  ></a>
                                </li>
                                <li
                                  role="menuitem"
                                  className="_2gAsBKb-hyDUG19J7W4k9u"
                                >
                                  <a
                                    id="aws-training"
                                    href="https://aws.amazon.com/training/"
                                    target="_blank"
                                    data-testid="aws-training"
                                    data-awsc-service-id=""
                                    tabIndex={-1}
                                    rel="noreferrer noopener"
                                    className="YNU__jNTudeR_6GXEwegm"
                                    >Training<svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      version="2.0"
                                      focusable="false"
                                      aria-hidden="true"
                                      className="globalNav-0311 globalNav-0393 _3O2-CnLAdxx4hq_ysV79R3"
                                      viewBox="0 0 16 16"
                                    >
                                      <path
                                        className="globalNav-0394"
                                        d="M10 2h4v4"
                                      ></path>
                                      <path d="M6 10l8-8"></path>
                                      <path
                                        className="globalNav-0395"
                                        d="M14 9.048V14H2V2h5"
                                      ></path></svg
                                  ></a>
                                </li>
                                <li
                                  role="menuitem"
                                  className="_2gAsBKb-hyDUG19J7W4k9u"
                                >
                                  <a
                                    id="aws-other-resources"
                                    href="https://aws.amazon.com/resources/"
                                    target="_blank"
                                    data-testid="aws-other-resources"
                                    data-awsc-service-id=""
                                    tabIndex={-1}
                                    rel="noreferrer noopener"
                                    className="YNU__jNTudeR_6GXEwegm"
                                    >Getting Started Resource Center<svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      version="2.0"
                                      focusable="false"
                                      aria-hidden="true"
                                      className="globalNav-0311 globalNav-0393 _3O2-CnLAdxx4hq_ysV79R3"
                                      viewBox="0 0 16 16"
                                    >
                                      <path
                                        className="globalNav-0394"
                                        d="M10 2h4v4"
                                      ></path>
                                      <path d="M6 10l8-8"></path>
                                      <path
                                        className="globalNav-0395"
                                        d="M14 9.048V14H2V2h5"
                                      ></path></svg
                                  ></a>
                                </li>
                              </ul>
                            </div>
                            <hr
                              className="_1KVt4I-fKa7fommXVYmwcG globalNav-0322"
                            />
                            <div className="globalNav-0321">
                              <button
                                type="button"
                                className="globalNav-0399 globalNav-0396"
                                data-testid="awsc-give-feedback"
                              >
                                Send feedback
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li role="menuitem" className="Xppoy2gHTZDz1EHWcjgks" >
                        <div className="Tm-3QhwnUkj2Uw-lI2pkk">
                          <button
                            title="AWS Account"
                            data-aria-controls="menu--regions"
                            aria-label="Open regions menu"
                            aria-haspopup="menu"
                            className="_1c9itAyTQu7kLsk0Fy-yGs QgA2vIs7D77repEtoveeO"
                            data-testid="more-menu__awsc-nav-regions-menu-button"
                          >
                            <span
                              data-testid="awsc-nav-regions-menu-button"
                              className="OYUiy2c-Bv3l4eRDVvfYu"
                              ><span
                                title="Regions"
                                className="_1Vtx1Z7gxtNZJP2MVzVCLO _31GHADTBDW3BW3qVhZRFPq"
                                >Global</span
                              ><span className="_19KbVfZZySpI3AGmHwEoL8"
                                ><svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  version="2.0"
                                  focusable="false"
                                  aria-hidden="true"
                                  className="globalNav-0311 _2shvUPeog_Xu1d7GvCBh2S"
                                  viewBox="0 0 16 16"
                                  height="16px"
                                  width="16px"
                                  fill="transparent"
                                  stroke="#95a5a6"
                                  stroke-width="2"
                                  stroke-linejoin="round"
                                  stroke-miterlimit="10"
                                >
                                  <path
                                    d="M12 1L5 8l7 7"
                                  ></path></svg></span></span
                            ><span
                              className="_116jw9hsQruDMMZC3ss-Zq _14bgy8CLokcgu64cAVlIRx"
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                version="2.0"
                                focusable="false"
                                aria-hidden="true"
                                className="globalNav-0311 globalNav-0318 globalNav-0323"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  d="M4 11h8L8 5l-4 6z"
                                  className="globalNav-0320"
                                ></path></svg
                            ></span>
                          </button>
                          <div
                            className="awsc-top-below-nav awsc-bot-above-f awsc-max-height-between-nav-f-margin _2maVID4-40Ka9DsaImVuUK HcniFFM-93JZrVD6ATd-- _2_o9M7vHAJ0PnLTGrKSm91 _1bCyxqM6NO95SxwZWnxVCJ _2Yi8CX97V8NFv1Ue67hCAE"
                          >
                            <div
                              data-testid="awsc-nav-regions-menu-content"
                              className="cw93xitjPhIpq2m1DGbx3"
                            >
                              <div>
                                <div className="_4oGQlADSCefuFLM1WCUPZ">
                                  <button
                                    aria-label="Back"
                                    className="_2v-8iYl7IkjebTAl3xHEes _2zrWNnMShw1K78VxtDgxXs"
                                    data-testid="awsc-nav-unified-account-menu-header"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      version="2.0"
                                      focusable="false"
                                      aria-hidden="true"
                                      className="globalNav-0311 GSBFK_vRYiyr0KqQz70s3"
                                      viewBox="0 0 16 16"
                                      height="16px"
                                      width="16px"
                                      fill="transparent"
                                      stroke="#D5DBDB"
                                      stroke-width="2"
                                      stroke-linejoin="round"
                                      stroke-miterlimit="10"
                                    >
                                      <path
                                        d="M12 1L5 8l7 7"
                                      ></path></svg
                                    >Regions</button
                                  ><button
                                    className="_2v-8iYl7IkjebTAl3xHEes _1YIRTc9q-hRKFp9lQKkNxJ"
                                    aria-label="Close"
                                  >
                                    <span
                                      className="awsui_icon_h11ix_31bp4_98 awsui_size-normal-mapped-height_h11ix_31bp4_151 awsui_size-normal_h11ix_31bp4_147 awsui_variant-normal_h11ix_31bp4_219"
                                      ><svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <path
                                          d="m2 2 12 12M14 2 2 14"
                                        ></path></svg
                                    ></span>
                                  </button>
                                </div>
                                <div className="_XZoIbh_ynDtlSOxUqIju">
                                  <span
                                    >Support does not require region
                                    selection.</span
                                  >
                                </div>
                              </div>
                              <div className="Gnc8RF8-lniNItIkkG9FE"></div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li role="menuitem" className="Xppoy2gHTZDz1EHWcjgks" >
                        <div className="Tm-3QhwnUkj2Uw-lI2pkk">
                          <button
                            aria-controls="menu--account"
                            aria-label="Open account menu"
                            aria-haspopup="menu"
                            className="_1c9itAyTQu7kLsk0Fy-yGs QgA2vIs7D77repEtoveeO"
                            data-testid="more-menu__awsc-nav-account-menu-button"
                            id="nav-usernameMenu"
                          >
                            <span
                              data-testid="awsc-nav-account-menu-button"
                              className="OYUiy2c-Bv3l4eRDVvfYu"
                              ><span
                                title="VLADIMIR LENIN"
                                className="_1Vtx1Z7gxtNZJP2MVzVCLO _31GHADTBDW3BW3qVhZRFPq"
                                >VLADIMIR LENIN</span
                              ><span className="_19KbVfZZySpI3AGmHwEoL8"
                                ><svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  version="2.0"
                                  focusable="false"
                                  aria-hidden="true"
                                  className="globalNav-0311 _2shvUPeog_Xu1d7GvCBh2S"
                                  viewBox="0 0 16 16"
                                  height="16px"
                                  width="16px"
                                  fill="transparent"
                                  stroke="#95a5a6"
                                  stroke-width="2"
                                  stroke-linejoin="round"
                                  stroke-miterlimit="10"
                                >
                                  <path
                                    d="M12 1L5 8l7 7"
                                  ></path></svg></span></span
                            ><span
                              className="_116jw9hsQruDMMZC3ss-Zq _14bgy8CLokcgu64cAVlIRx"
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                version="2.0"
                                focusable="false"
                                aria-hidden="true"
                                className="globalNav-0311 globalNav-0318 globalNav-0330"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  d="M4 11h8L8 5l-4 6z"
                                  className="globalNav-0320"
                                ></path></svg
                            ></span>
                          </button>
                          <div
                            className="awsc-top-below-nav awsc-bot-above-f awsc-max-height-between-nav-f-margin _2maVID4-40Ka9DsaImVuUK HcniFFM-93JZrVD6ATd-- _2_o9M7vHAJ0PnLTGrKSm91 _1bCyxqM6NO95SxwZWnxVCJ _2Yi8CX97V8NFv1Ue67hCAE"
                          >
                            <div
                              data-testid="awsc-nav-account-menu-content"
                              className="_3y403FThrIarGOxO2L9uxA"
                            >
                              <div className="_4oGQlADSCefuFLM1WCUPZ">
                                <button
                                  aria-label="Back"
                                  className="_2v-8iYl7IkjebTAl3xHEes _2zrWNnMShw1K78VxtDgxXs"
                                  data-testid="awsc-nav-unified-account-menu-header"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    version="2.0"
                                    focusable="false"
                                    aria-hidden="true"
                                    className="globalNav-0311 GSBFK_vRYiyr0KqQz70s3"
                                    viewBox="0 0 16 16"
                                    height="16px"
                                    width="16px"
                                    fill="transparent"
                                    stroke="#D5DBDB"
                                    stroke-width="2"
                                    stroke-linejoin="round"
                                    stroke-miterlimit="10"
                                  >
                                    <path d="M12 1L5 8l7 7"></path></svg
                                  >Account</button
                                ><button
                                  className="_2v-8iYl7IkjebTAl3xHEes _1YIRTc9q-hRKFp9lQKkNxJ"
                                  aria-label="Close"
                                >
                                  <span
                                    className="awsui_icon_h11ix_31bp4_98 awsui_size-normal-mapped-height_h11ix_31bp4_151 awsui_size-normal_h11ix_31bp4_147 awsui_variant-normal_h11ix_31bp4_219"
                                    ><svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 16 16"
                                      focusable="false"
                                      aria-hidden="true"
                                    >
                                      <path
                                        d="m2 2 12 12M14 2 2 14"
                                      ></path></svg
                                  ></span>
                                </button>
                              </div>
                              <div
                                id="menu--account"
                                className="WL3CkS43_bIQqobgLcmoX globalNav-0324"
                              >
                                <div
                                  className="globalNav-0333"
                                  data-testid="account-detail-menu"
                                >
                                  <div className="globalNav-0334">
                                    <div>
                                      <span>Account ID: </span
                                      ><span>0593-8987-3153</span
                                      ><button
                                        className="globalNav-0336 awsui_button_vjswe_17xsg_101 awsui_variant-inline-icon_vjswe_17xsg_180 awsui_button-no-text_vjswe_17xsg_881"
                                        data-testid="awsc-copy-accountid"
                                        aria-label="Copy Account Id"
                                        type="submit"
                                      >
                                        <span
                                          className="awsui_icon_vjswe_17xsg_901 awsui_icon-left_vjswe_17xsg_901 awsui_icon_h11ix_31bp4_98 awsui_size-normal-mapped-height_h11ix_31bp4_151 awsui_size-normal_h11ix_31bp4_147 awsui_variant-normal_h11ix_31bp4_219"
                                          ><svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 16 16"
                                            focusable="false"
                                            aria-hidden="true"
                                          >
                                            <path
                                              className="stroke-linejoin-round"
                                              d="M2 5h9v9H2z"
                                            ></path>
                                            <path
                                              className="stroke-linejoin-round"
                                              d="M5 5V2h9v9h-3"
                                            ></path></svg
                                        ></span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                <hr
                                  className="_1KVt4I-fKa7fommXVYmwcG H0hm1ylgp6D00IN6CKnxy globalNav-0329"
                                />
                                <div className="_57lZtXlFcK51bah0JV1q">
                                  <ul
                                    role="menu"
                                    className="_2Dfc0BCPcAg98F3wfl8MEm"
                                  >
                                    <li
                                      role="menuitem"
                                      className="_3khD7GmSePMW4kPqjJMoc"
                                    >
                                      <a
                                        className="_2eEc2CF87Xhi6LuUUpry5h"
                                        href="https://console.aws.amazon.com/billing/home?#/account"
                                        target="_top"
                                        tabIndex={-1}
                                        data-testid="aws-my-account"
                                        >Account</a
                                      >
                                    </li>
                                    <li
                                      role="menuitem"
                                      className="_3khD7GmSePMW4kPqjJMoc"
                                    >
                                      <a
                                        className="_2eEc2CF87Xhi6LuUUpry5h"
                                        href="https://console.aws.amazon.com/organizations/v2/home"
                                        target="_top"
                                        tabIndex={-1}
                                        data-awsc-service-id="organizations"
                                        data-testid="awsc-organizations-console"
                                        >Organization</a
                                      >
                                    </li>
                                    <li
                                      role="menuitem"
                                      className="_3khD7GmSePMW4kPqjJMoc"
                                    >
                                      <a
                                        className="_2eEc2CF87Xhi6LuUUpry5h"
                                        href="https://console.aws.amazon.com/servicequotas/home"
                                        target="_top"
                                        tabIndex={-1}
                                        data-awsc-service-id="servicequotas"
                                        data-testid="awsc-servicequotas-console"
                                        >Service Quotas</a
                                      >
                                    </li>
                                    <li
                                      role="menuitem"
                                      className="_3khD7GmSePMW4kPqjJMoc"
                                    >
                                      <a
                                        className="_2eEc2CF87Xhi6LuUUpry5h"
                                        href="https://console.aws.amazon.com/billing/home#/"
                                        target="_top"
                                        tabIndex={-1}
                                        data-testid="aws-billing-console"
                                        >Billing Dashboard</a
                                      >
                                    </li>
                                    <li
                                      role="menuitem"
                                      className="_3khD7GmSePMW4kPqjJMoc undefined"
                                    >
                                      <a
                                        className="_2eEc2CF87Xhi6LuUUpry5h"
                                        href="https://console.aws.amazon.com/iam/home#security_credential"
                                        target="_top"
                                        tabIndex={-1}
                                        data-testid="aws-security-credentials"
                                        >Security credentials</a
                                      >
                                    </li>
                                  </ul>
                                </div>
                                <hr
                                  className="_1KVt4I-fKa7fommXVYmwcG H0hm1ylgp6D00IN6CKnxy globalNav-0327"
                                />
                                <div className="globalNav-0328">
                                  <a
                                    title="Unified Settings"
                                    data-testid="awsc-nav-user-preference-center-nav-link"
                                    href="https://console.aws.amazon.com/settings/home"
                                    className="globalNav-0338"
                                    >Settings</a
                                  >
                                </div>
                                <hr
                                  className="_1KVt4I-fKa7fommXVYmwcG H0hm1ylgp6D00IN6CKnxy"
                                />
                                <div
                                  className="BdmItIqJcuTQ6wpjeaB_u globalNav-0325"
                                >
                                  <div
                                    className="globalNav-0352 awsui-context-top-navigation"
                                  >
                                    <a
                                      className="globalNav-0354 awsui_button_vjswe_17xsg_101 awsui_variant-primary_vjswe_17xsg_206"
                                      id="aws-console-logout"
                                      data-testid="aws-console-signout"
                                      href="https://support.console.aws.amazon.com/support/logout!doLogout"
                                      ><span
                                        className="awsui_content_vjswe_17xsg_97"
                                        >Sign out</span
                                      ></a
                                    >
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </nav>
        <div className="awsui_flashbar_1q84n_1tn8b_295">
          <div className="awsui-context-flashbar"></div>
        </div>
      </header>
    )


}

export default Header;