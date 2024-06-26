import React from 'react'

const Checkout = () => {
  return (
<div className="inner-page">
  {/* rts header area start */}
  <header className="header-one header--sticky">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="header-main-wrapper">
            <a href="index.html" className="logo">
              <img src="assets/images/logo/01.svg" alt="logo" />
            </a>
            {/* nav */}
            <div className="nav-area-main d-xl-block d-lg-block d-md-none d-sm-none d-none">
              <nav>
                <ul>
                  <li className="has-dropdown">
                    <a className="links-main" href="#">
                      Home
                    </a>
                    <ul className="submenu">
                        {/* <li><a href="/index-page-1">Content Writing 01</a></li> */}
                        <li><a href='/IndexOne'>Content Writing 01</a></li>
                        <li><a href="/">Content Writing 02</a></li>
                        <li><a href="/IndexThree">Content Writing 03</a></li>
                        <li><a href="/IndexFour">Ai Chat Bot</a></li>
                        <li><a href="/IndexFive">Voice Generator</a></li>
                        <li><a href="/">Image Generator <span>New</span></a></li>
                        <li><a href="/">Photo Stock <span>New</span></a></li>
                    </ul>
                  </li>
                  <li>
                    <a className="links-main" href="/UseCase">
                      Use Cases
                    </a>
                  </li>
                  <li className="has-dropdown mega-menu">
                    <a className="links-main" href="#">
                      Pages
                    </a>
                    <div className="rts-mega-menu">
                                                <div className="wrapper">
                                                    <div className="row g-0">
                                                        <div className="col-lg-3">
                                                            <ul className="mega-menu-item">
                                                                <li>
                                                                    <a href="/AboutOpenUp">
                                                                        <img src="assets/images/mega-menu/01.svg" alt="icon"/>
                                                                        <div className="info">
                                                                            <p>About OpenUp</p>
                                                                            <span>Get know about openup </span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/UseCase">
                                                                        <img src="assets/images/mega-menu/02.svg" alt="icon"/>
                                                                        <div className="info">
                                                                            <p>Use Cases</p>
                                                                            <span>provide detailed explan</span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/Pricing">
                                                                        <img src="assets/images/mega-menu/03.svg" alt="icon"/>
                                                                        <div className="info">
                                                                            <p>Pricing</p>
                                                                            <span>Openup provide pro price</span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/Login">
                                                                        <img src="assets/images/mega-menu/04.svg" alt="icon"/>
                                                                        <div className="info">
                                                                            <p>Login</p>
                                                                            <span>Create content by ou</span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <ul className="mega-menu-item">
                                                                <li>
                                                                    <a href="/Blog">
                                                                        <img src="assets/images/mega-menu/05.svg" alt="icon"/>
                                                                        <div className="info">
                                                                            <p>Blog</p>
                                                                            <span>Read openup artical</span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/UseCasesDetails">
                                                                        <img src="assets/images/mega-menu/06.svg" alt="icon"/>
                                                                        <div className="info">
                                                                            <p>Use Cases Details</p>
                                                                            <span>provide detailed explan</span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/Pricing2">
                                                                        <img src="assets/images/mega-menu/07.svg" alt="icon"/>
                                                                        <div className="info">
                                                                            <p>Pricing 2</p>
                                                                            <span>Openup provide pro price</span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/Register">
                                                                        <img src="assets/images/mega-menu/08.svg" alt="icon"/>
                                                                        <div className="info">
                                                                            <p>Register</p>
                                                                            <span>Make your account</span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <ul className="mega-menu-item">
                                                                <li>
                                                                    <a href="/BlogDetails">
                                                                        <img src="assets/images/mega-menu/09.svg" alt="icon"/>
                                                                        <div className="info">
                                                                            <p>Blog Details</p>
                                                                            <span>Read openup artical</span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/UseCases2">
                                                                        <img src="assets/images/mega-menu/10.svg" alt="icon"/>
                                                                        <div className="info">
                                                                            <p>Use Cases 2</p>
                                                                            <span>provide detailed explan</span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/Pricing3">
                                                                        <img src="assets/images/mega-menu/11.svg" alt="icon"/>
                                                                        <div className="info">
                                                                            <p>Pricing 3</p>
                                                                            <span>Openup provide pro price</span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/Reset">
                                                                        <img src="assets/images/mega-menu/12.svg" alt="icon"/>
                                                                        <div className="info">
                                                                            <p>Reset</p>
                                                                            <span>Rest your possword</span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <ul className="mega-menu-item">
                                                                <li>
                                                                    <a href="/Contact">
                                                                        <img src="assets/images/mega-menu/13.svg" alt="icon"/>
                                                                        <div className="info">
                                                                            <p>Contact</p>
                                                                            <span>Contact with openup</span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/UseCasesDetails2">
                                                                        <img src="assets/images/mega-menu/14.svg" alt="icon"/>
                                                                        <div className="info">
                                                                            <p>Use Cases Details 2</p>
                                                                            <span>provide detailed explan</span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/FAQ">
                                                                        <img src="assets/images/mega-menu/15.svg" alt="icon"/>
                                                                        <div className="info">
                                                                            <p>FAQ</p>
                                                                            <span>Do you know openup</span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="404.html">
                                                                        <img src="assets/images/mega-menu/16.svg" alt="icon"/>
                                                                        <div className="info">
                                                                            <p>Error</p>
                                                                            <span>Back to home</span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                    </div>
                  </li>
                  <li>
                    <a className="links-main" href="/Feature">
                      Feature
                    </a>
                  </li>
                  <li className="has-dropdown">
                    <a className="links-main" href="#">
                      Shop
                    </a>
                    <ul className="submenu">
                      <li>
                        <a href="/ProductDetails">Product Details</a>
                      </li>
                      <li>
                        <a href="/Cart">Cart</a>
                      </li>
                      <li>
                        <a href="/Checkout">Checkout</a>
                      </li>
                      <li>
                        <a href="/MyAccount">My Account</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="links-main" href="/Contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            {/* nav end */}
            <div className="button-area">
              <a href="/Login" className="rts-btn btn-lonly mr--30">
                Sign in
              </a>
              <a href="/AboutOpenUp" className="rts-btn btn-blur">
                Get Started
              </a>
            </div>
            <div
              className="menu-btn d-xl-none d-lg-none d-md-block d-sm-block"
              id="menu-btn"
            >
              <svg
                width={20}
                height={16}
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y={14} width={20} height={2} fill="#1F1F25" />
                <rect y={7} width={20} height={2} fill="#1F1F25" />
                <rect width={20} height={2} fill="#1F1F25" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/* rts header area end */}
  {/* rts breadcrumb area start*/}
  <div className="rts-bread-crumb-area bg_image">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="breadcrumb-inne">
            <div className="title-area">
              <h1 className="bread-title">Checkout</h1>
              <div className="inner-wrapper">
                <a href="index.html">Home</a>/
                <a href="#" className="active">
                  Checkout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* rts breadcrumb area end */}
  {/* rts team area start */}
  <div className="rts-checkout-area rts-section-gapTop">
    <div className="container">
      <div className="checkout-area-inner">
        <div className="ms-default-page container entry-content">
          <div className="woocommerce">
            <div className="coupon-toggle">
              <div id="accordion" className="accordion">
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <div className="card-title">
                      <span>
                        <i className="fa fa-window-maximize" /> Have a coupon?
                      </span>
                      <button
                        className="accordion-toggle collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                        Click here to enter your code
                      </button>
                    </div>
                  </div>
                  <div
                    id="collapseOne"
                    className="collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordion"
                    style={{}}
                  >
                    <div className="card-body">
                      <p>If you have a coupon code, please apply it below.</p>
                      <div className="coupon-code-input">
                        <input
                          type="text"
                          name="coupon_code"
                          placeholder="Coupon code"
                          required=""
                        />
                      </div>
                      <button
                        className="add-btn rts-btn btn-primary"
                        type="submit"
                      >
                        Apply Coupon
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="woocommerce-notices-wrapper" />
            <form
              name="checkout"
              method="post"
              className="checkout woocommerce-checkout ms-woocommerce-checkout"
              action="#"
              encType="multipart/form-data"
              noValidate="novalidate"
            >
              <div className="row">
                <div className="col-lg-8">
                  <div className="full-grid">
                    <div className="billing-fields">
                      <div className="checkout-title">
                        <h3 className="animated fadeIn">Billing details</h3>
                      </div>
                      <div className="form-content-box">
                        <div className="row">
                          <div className="col-md-6 col-sm-12 col-xs-12">
                            <div className="form-group">
                              <label>First Name *</label>
                              <input
                                id="fname"
                                name="fname"
                                className="form-control-mod"
                                type="text"
                                required=""
                              />
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-12 col-xs-12">
                            <div className="form-group">
                              <label>Last Name *</label>
                              <input
                                id="lname"
                                name="lname"
                                className="form-control-mod"
                                type="text"
                                required=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="form-group">
                              <label>Company name (optional)</label>
                              <input
                                id="cname"
                                name="cname"
                                className="form-control-mod"
                                type="text"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="form-group">
                              <label>District*</label>
                              <select className="d-block" required="">
                                <option value="">Select a countryâ€¦</option>
                                <option value="AX">Ã…land Islands</option>
                                <option value="AF">Afghanistan</option>
                                <option value="AL">Albania</option>
                                <option value="DZ">Algeria</option>
                                <option value="AS">American Samoa</option>
                                <option value="AD">Andorra</option>
                                <option value="AO">Angola</option>
                                <option value="AI">Anguilla</option>
                                <option value="AQ">Antarctica</option>
                                <option value="AG">Antigua and Barbuda</option>
                                <option value="AR">Argentina</option>
                                <option value="AM">Armenia</option>
                                <option value="AW">Aruba</option>
                                <option value="AU">Australia</option>
                                <option value="AT">Austria</option>
                                <option value="AZ">Azerbaijan</option>
                                <option value="BS">Bahamas</option>
                                <option value="BH">Bahrain</option>
                                <option value="BD" selected="selected">
                                  Bangladesh
                                </option>
                                <option value="BB">Barbados</option>
                                <option value="BY">Belarus</option>
                                <option value="PW">Belau</option>
                                <option value="BE">Belgium</option>
                                <option value="BZ">Belize</option>
                                <option value="BJ">Benin</option>
                                <option value="BM">Bermuda</option>
                                <option value="BT">Bhutan</option>
                                <option value="BO">Bolivia</option>
                                <option value="BQ">
                                  Bonaire, Saint Eustatius and Saba
                                </option>
                                <option value="BA">
                                  Bosnia and Herzegovina
                                </option>
                                <option value="BW">Botswana</option>
                                <option value="BV">Bouvet Island</option>
                                <option value="BR">Brazil</option>
                                <option value="IO">
                                  British Indian Ocean Territory
                                </option>
                                <option value="VG">
                                  British Virgin Islands
                                </option>
                                <option value="BN">Brunei</option>
                                <option value="BG">Bulgaria</option>
                                <option value="BF">Burkina Faso</option>
                                <option value="BI">Burundi</option>
                                <option value="KH">Cambodia</option>
                                <option value="CM">Cameroon</option>
                                <option value="CA">Canada</option>
                                <option value="CV">Cape Verde</option>
                                <option value="KY">Cayman Islands</option>
                                <option value="CF">
                                  Central African Republic
                                </option>
                                <option value="TD">Chad</option>
                                <option value="CL">Chile</option>
                                <option value="CN">China</option>
                                <option value="CX">Christmas Island</option>
                                <option value="CC">
                                  Cocos (Keeling) Islands
                                </option>
                                <option value="CO">Colombia</option>
                                <option value="KM">Comoros</option>
                                <option value="CG">Congo (Brazzaville)</option>
                                <option value="CD">Congo (Kinshasa)</option>
                                <option value="CK">Cook Islands</option>
                                <option value="CR">Costa Rica</option>
                                <option value="HR">Croatia</option>
                                <option value="CU">Cuba</option>
                                <option value="CW">CuraÃ§ao</option>
                                <option value="CY">Cyprus</option>
                                <option value="CZ">Czech Republic</option>
                                <option value="DK">Denmark</option>
                                <option value="DJ">Djibouti</option>
                                <option value="DM">Dominica</option>
                                <option value="DO">Dominican Republic</option>
                                <option value="EC">Ecuador</option>
                                <option value="EG">Egypt</option>
                                <option value="SV">El Salvador</option>
                                <option value="GQ">Equatorial Guinea</option>
                                <option value="ER">Eritrea</option>
                                <option value="EE">Estonia</option>
                                <option value="ET">Ethiopia</option>
                                <option value="FK">Falkland Islands</option>
                                <option value="FO">Faroe Islands</option>
                                <option value="FJ">Fiji</option>
                                <option value="FI">Finland</option>
                                <option value="FR">France</option>
                                <option value="GF">French Guiana</option>
                                <option value="PF">French Polynesia</option>
                                <option value="TF">
                                  French Southern Territories
                                </option>
                                <option value="GA">Gabon</option>
                                <option value="GM">Gambia</option>
                                <option value="GE">Georgia</option>
                                <option value="DE">Germany</option>
                                <option value="GH">Ghana</option>
                                <option value="GI">Gibraltar</option>
                                <option value="GR">Greece</option>
                                <option value="GL">Greenland</option>
                                <option value="GD">Grenada</option>
                                <option value="GP">Guadeloupe</option>
                                <option value="GU">Guam</option>
                                <option value="GT">Guatemala</option>
                                <option value="GG">Guernsey</option>
                                <option value="GN">Guinea</option>
                                <option value="GW">Guinea-Bissau</option>
                                <option value="GY">Guyana</option>
                                <option value="HT">Haiti</option>
                                <option value="HM">
                                  Heard Island and McDonald Islands
                                </option>
                                <option value="HN">Honduras</option>
                                <option value="HK">Hong Kong</option>
                                <option value="HU">Hungary</option>
                                <option value="IS">Iceland</option>
                                <option value="IN">India</option>
                                <option value="ID">Indonesia</option>
                                <option value="IR">Iran</option>
                                <option value="IQ">Iraq</option>
                                <option value="IE">Ireland</option>
                                <option value="IM">Isle of Man</option>
                                <option value="IL">Israel</option>
                                <option value="IT">Italy</option>
                                <option value="CI">Ivory Coast</option>
                                <option value="JM">Jamaica</option>
                                <option value="JP">Japan</option>
                                <option value="JE">Jersey</option>
                                <option value="JO">Jordan</option>
                                <option value="KZ">Kazakhstan</option>
                                <option value="KE">Kenya</option>
                                <option value="KI">Kiribati</option>
                                <option value="KW">Kuwait</option>
                                <option value="KG">Kyrgyzstan</option>
                                <option value="LA">Laos</option>
                                <option value="LV">Latvia</option>
                                <option value="LB">Lebanon</option>
                                <option value="LS">Lesotho</option>
                                <option value="LR">Liberia</option>
                                <option value="LY">Libya</option>
                                <option value="LI">Liechtenstein</option>
                                <option value="LT">Lithuania</option>
                                <option value="LU">Luxembourg</option>
                                <option value="MO">Macao S.A.R., China</option>
                                <option value="MK">Macedonia</option>
                                <option value="MG">Madagascar</option>
                                <option value="MW">Malawi</option>
                                <option value="MY">Malaysia</option>
                                <option value="MV">Maldives</option>
                                <option value="ML">Mali</option>
                                <option value="MT">Malta</option>
                                <option value="MH">Marshall Islands</option>
                                <option value="MQ">Martinique</option>
                                <option value="MR">Mauritania</option>
                                <option value="MU">Mauritius</option>
                                <option value="YT">Mayotte</option>
                                <option value="MX">Mexico</option>
                                <option value="FM">Micronesia</option>
                                <option value="MD">Moldova</option>
                                <option value="MC">Monaco</option>
                                <option value="MN">Mongolia</option>
                                <option value="ME">Montenegro</option>
                                <option value="MS">Montserrat</option>
                                <option value="MA">Morocco</option>
                                <option value="MZ">Mozambique</option>
                                <option value="MM">Myanmar</option>
                                <option value="NA">Namibia</option>
                                <option value="NR">Nauru</option>
                                <option value="NP">Nepal</option>
                                <option value="NL">Netherlands</option>
                                <option value="NC">New Caledonia</option>
                                <option value="NZ">New Zealand</option>
                                <option value="NI">Nicaragua</option>
                                <option value="NE">Niger</option>
                                <option value="NG">Nigeria</option>
                                <option value="NU">Niue</option>
                                <option value="NF">Norfolk Island</option>
                                <option value="KP">North Korea</option>
                                <option value="MP">
                                  Northern Mariana Islands
                                </option>
                                <option value="NO">Norway</option>
                                <option value="OM">Oman</option>
                                <option value="PK">Pakistan</option>
                                <option value="PS">
                                  Palestinian Territory
                                </option>
                                <option value="PA">Panama</option>
                                <option value="PG">Papua New Guinea</option>
                                <option value="PY">Paraguay</option>
                                <option value="PE">Peru</option>
                                <option value="PH">Philippines</option>
                                <option value="PN">Pitcairn</option>
                                <option value="PL">Poland</option>
                                <option value="PT">Portugal</option>
                                <option value="PR">Puerto Rico</option>
                                <option value="QA">Qatar</option>
                                <option value="RE">Reunion</option>
                                <option value="RO">Romania</option>
                                <option value="RU">Russia</option>
                                <option value="RW">Rwanda</option>
                                <option value="ST">
                                  SÃ£o TomÃ© and PrÃ­ncipe
                                </option>
                                <option value="BL">Saint BarthÃ©lemy</option>
                                <option value="SH">Saint Helena</option>
                                <option value="KN">
                                  Saint Kitts and Nevis
                                </option>
                                <option value="LC">Saint Lucia</option>
                                <option value="SX">
                                  Saint Martin (Dutch part)
                                </option>
                                <option value="MF">
                                  Saint Martin (French part)
                                </option>
                                <option value="PM">
                                  Saint Pierre and Miquelon
                                </option>
                                <option value="VC">
                                  Saint Vincent and the Grenadines
                                </option>
                                <option value="WS">Samoa</option>
                                <option value="SM">San Marino</option>
                                <option value="SA">Saudi Arabia</option>
                                <option value="SN">Senegal</option>
                                <option value="RS">Serbia</option>
                                <option value="SC">Seychelles</option>
                                <option value="SL">Sierra Leone</option>
                                <option value="SG">Singapore</option>
                                <option value="SK">Slovakia</option>
                                <option value="SI">Slovenia</option>
                                <option value="SB">Solomon Islands</option>
                                <option value="SO">Somalia</option>
                                <option value="ZA">South Africa</option>
                                <option value="GS">
                                  South Georgia/Sandwich Islands
                                </option>
                                <option value="KR">South Korea</option>
                                <option value="SS">South Sudan</option>
                                <option value="ES">Spain</option>
                                <option value="LK">Sri Lanka</option>
                                <option value="SD">Sudan</option>
                                <option value="SR">Suriname</option>
                                <option value="SJ">
                                  Svalbard and Jan Mayen
                                </option>
                                <option value="SZ">Swaziland</option>
                                <option value="SE">Sweden</option>
                                <option value="CH">Switzerland</option>
                                <option value="SY">Syria</option>
                                <option value="TW">Taiwan</option>
                                <option value="TJ">Tajikistan</option>
                                <option value="TZ">Tanzania</option>
                                <option value="TH">Thailand</option>
                                <option value="TL">Timor-Leste</option>
                                <option value="TG">Togo</option>
                                <option value="TK">Tokelau</option>
                                <option value="TO">Tonga</option>
                                <option value="TT">Trinidad and Tobago</option>
                                <option value="TN">Tunisia</option>
                                <option value="TR">Turkey</option>
                                <option value="TM">Turkmenistan</option>
                                <option value="TC">
                                  Turks and Caicos Islands
                                </option>
                                <option value="TV">Tuvalu</option>
                                <option value="UG">Uganda</option>
                                <option value="UA">Ukraine</option>
                                <option value="AE">United Arab Emirates</option>
                                <option value="GB">United Kingdom (UK)</option>
                                <option value="US">United States (US)</option>
                                <option value="UM">
                                  United States (US) Minor Outlying Islands
                                </option>
                                <option value="VI">
                                  United States (US) Virgin Islands
                                </option>
                                <option value="UY">Uruguay</option>
                                <option value="UZ">Uzbekistan</option>
                                <option value="VU">Vanuatu</option>
                                <option value="VA">Vatican</option>
                                <option value="VE">Venezuela</option>
                                <option value="VN">Vietnam</option>
                                <option value="WF">Wallis and Futuna</option>
                                <option value="EH">Western Sahara</option>
                                <option value="YE">Yemen</option>
                                <option value="ZM">Zambia</option>
                                <option value="ZW">Zimbabwe</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="form-group">
                              <label>Street address *</label>
                              <input
                                id="hnumber"
                                name="hnumber"
                                className="form-control-mod margin-bottom"
                                type="text"
                                placeholder="House number and street name"
                                required=""
                              />
                              <input
                                id="hnumber-2"
                                name="hnumber"
                                className="form-control-mod"
                                type="text"
                                placeholder="Apartment, suite, unit etc. (optional)"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="form-group">
                              <label>Town / City *</label>
                              <input
                                id="city"
                                name="city"
                                className="form-control-mod"
                                type="text"
                                required=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="form-group">
                              <label>District *</label>
                              <select className="d-block" required="">
                                <option value="">Select an option</option>
                                <option value="BD-05">Bagerhat</option>
                                <option value="BD-01">Bandarban</option>
                                <option value="BD-02">Barguna</option>
                                <option value="BD-06">Barishal</option>
                                <option value="BD-07">Bhola</option>
                                <option value="BD-03">Bogura</option>
                                <option value="BD-04">Brahmanbaria</option>
                                <option value="BD-09">Chandpur</option>
                                <option value="BD-10">Chattogram</option>
                                <option value="BD-12">Chuadanga</option>
                                <option value="BD-11">Cox's Bazar</option>
                                <option value="BD-08">Cumilla</option>
                                <option value="BD-13">Dhaka</option>
                                <option value="BD-14">Dinajpur</option>
                                <option value="BD-15">Faridpur </option>
                                <option value="BD-16">Feni</option>
                                <option value="BD-19">Gaibandha</option>
                                <option value="BD-18">Gazipur</option>
                                <option value="BD-17">Gopalganj</option>
                                <option value="BD-20">Habiganj</option>
                                <option value="BD-21">Jamalpur</option>
                                <option value="BD-22">Jashore</option>
                                <option value="BD-25">Jhalokati</option>
                                <option value="BD-23">Jhenaidah</option>
                                <option value="BD-24">Joypurhat</option>
                                <option value="BD-29">Khagrachhari</option>
                                <option value="BD-27">Khulna</option>
                                <option value="BD-26">Kishoreganj</option>
                                <option value="BD-28">Kurigram</option>
                                <option value="BD-30">Kushtia</option>
                                <option value="BD-31">Lakshmipur</option>
                                <option value="BD-32">Lalmonirhat</option>
                                <option value="BD-36">Madaripur</option>
                                <option value="BD-37">Magura</option>
                                <option value="BD-33">Manikganj </option>
                                <option value="BD-39">Meherpur</option>
                                <option value="BD-38">Moulvibazar</option>
                                <option value="BD-35">Munshiganj</option>
                                <option value="BD-34">Mymensingh</option>
                                <option value="BD-48">Naogaon</option>
                                <option value="BD-43">Narail</option>
                                <option value="BD-40">Narayanganj</option>
                                <option value="BD-42">Narsingdi</option>
                                <option value="BD-44">Natore</option>
                                <option value="BD-45">Nawabganj</option>
                                <option value="BD-41">Netrakona</option>
                                <option value="BD-46">Nilphamari</option>
                                <option value="BD-47">Noakhali</option>
                                <option value="BD-49">Pabna</option>
                                <option value="BD-52">Panchagarh</option>
                                <option value="BD-51">Patuakhali</option>
                                <option value="BD-50">Pirojpur</option>
                                <option value="BD-53">Rajbari</option>
                                <option value="BD-54">Rajshahi</option>
                                <option value="BD-56">Rangamati</option>
                                <option value="BD-55">Rangpur</option>
                                <option value="BD-58">Satkhira</option>
                                <option value="BD-62">Shariatpur</option>
                                <option value="BD-57">Sherpur</option>
                                <option value="BD-59">Sirajganj</option>
                                <option value="BD-61">Sunamganj</option>
                                <option value="BD-60">Sylhet</option>
                                <option value="BD-63">Tangail</option>
                                <option value="BD-64">Thakurgaon</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="form-group">
                              <label>Postcode / ZIP (optional)</label>
                              <input
                                id="pcode"
                                name="pcode"
                                className="form-control-mod"
                                type="text"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="form-group">
                              <label>Phone *</label>
                              <input
                                id="number"
                                name="number"
                                className="form-control-mod"
                                type="text"
                                required=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="form-group">
                              <label>Email address *</label>
                              <input
                                id="email"
                                name="email"
                                className="form-control-mod"
                                type="email"
                                required=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* .billing-fields */}
                    <div className="additional-fields">
                      <div className="form-content-box">
                        <div className="row">
                          <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="form-group">
                              <label>Order notes (optional)</label>
                              <textarea
                                placeholder="Notes about your order, e.g. special notes for delivery."
                                defaultValue={""}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pl-lg-5 col-lg-4">
                  <div
                    id="order_review"
                    className="woocommerce-checkout-review-order"
                  >
                    <div className="ms-cart-collaterals cart-collaterals">
                      <div className="ms-cart-totals cart_totals ">
                        <table className="shop_table shop_table_responsive">
                          <tbody>
                            <tr className="heading">
                              <th className="product-name">Product</th>
                              <th className="product-total">Subtotal</th>
                            </tr>
                            <tr className="cart-subtotal product">
                              <th>Bruno's Scribble × 1</th>
                              <td data-title="Subtotal">
                                <span className="woocommerce-Price-amount amount">
                                  <bdi>
                                    <span className="woocommerce-Price-currencySymbol">
                                      $
                                    </span>
                                    519.00
                                  </bdi>
                                </span>
                              </td>
                            </tr>
                            <tr className="cart-subtotal product">
                              <th>Prickly Pear Tonic × 1</th>
                              <td data-title="Subtotal">
                                <span className="woocommerce-Price-amount amount">
                                  <bdi>
                                    <span className="woocommerce-Price-currencySymbol">
                                      $
                                    </span>
                                    519.00
                                  </bdi>
                                </span>
                              </td>
                            </tr>
                            <tr className="cart-subtotal">
                              <th>Subtotal</th>
                              <td data-title="Subtotal">
                                <span className="woocommerce-Price-amount amount">
                                  <bdi>
                                    <span className="woocommerce-Price-currencySymbol">
                                      $
                                    </span>
                                    519.00
                                  </bdi>
                                </span>
                              </td>
                            </tr>
                            <tr className="cart-subtotal">
                              <th>Shipping</th>
                              <td data-title="Subtotal">
                                <span className="woocommerce-Price-amount amount">
                                  <label htmlFor="shipping_method_0_free_shipping1">
                                    Free shipping
                                  </label>
                                </span>
                              </td>
                            </tr>
                            <tr className="order-total">
                              <th>Total</th>
                              <td data-title="Total">
                                <strong>
                                  <span className="woocommerce-Price-amount amount">
                                    <bdi>
                                      <span className="woocommerce-Price-currencySymbol">
                                        $
                                      </span>
                                      519.00
                                    </bdi>
                                  </span>
                                </strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="ms-proceed-to-checkout wc-proceed-to-checkout">
                          <a href="#" className="rts-btn btn-primary">
                            {" "}
                            Proceed to checkout
                          </a>
                        </div>
                      </div>
                    </div>
                    <div id="payment" className="woocommerce-checkout-payment">
                      <div className="form-row place-order">
                        <noscript>
                          Since your browser does not support JavaScript, or it
                          is disabled, please ensure you click the
                          &lt;em&gt;Update Totals&lt;/em&gt; button before
                          placing your order. You may be charged more than the
                          amount stated above if you fail to do so. &lt;br /&gt;
                          &lt;button type="submit" class="button alt"
                          name="woocommerce_checkout_update_totals"
                          value="Update totals"&gt;Update totals&lt;/button&gt;
                        </noscript>
                        <div className="woocommerce-terms-and-conditions-wrapper">
                          <div className="woocommerce-privacy-policy-text">
                            <p>
                              Your personal data will be used to process your
                              order, support your experience throughout this
                              website, and for other purposes described in our
                              <a
                                href="#"
                                className="woocommerce-privacy-policy-link"
                                target="_blank"
                              >
                                privacy policy
                              </a>
                              .
                            </p>
                          </div>
                        </div>
                        <div className="ms-proceed-to-checkout wc-proceed-to-checkout">
                          <a href="#" className="rts-btn btn-primary button">
                            {" "}
                            Place Order
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="clearfix" />
        </div>
      </div>
    </div>
  </div>
  {/* rts team area end */}
  {/* rts footer area start */}
  <div className="rts-footer-area  bg-footer footer-one">
    <div className="container rts-section-gapTop pb--100 pb_sm--30">
      <div className="row">
        <div className="col-lg-12">
          {/* footer main wrapper */}
          <div className="footer-one-main-wrapper">
            {/* single sized  footer  */}
            <div className="footer-singl-wized left-logo">
              <div className="head">
                <a href="#">
                  <img src="assets/images/logo/01.svg" alt="logo" />
                </a>
              </div>
              <div className="body">
                <p className="dsic">
                  Openup is an artificial intelligence trained to automate
                  important tasks such writing optimized product descriptions.
                </p>
                <div className="social-style-two">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-behance" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-discord" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* single sized  footer end */}
            {/* single sized  footer  */}
            <div className="footer-singl-wized">
              <div className="head">
                <h6 className="title">Company</h6>
              </div>
              <div className="body">
                <ul className="menu">
                  <li>
                    <a href="/AboutOpenUp">About Us</a>
                  </li>
                  <li>
                    <a href="#">Community</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Affiliate Program</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* single sized  footer end */}
            {/* single sized  footer  */}
            <div className="footer-singl-wized">
              <div className="head">
                <h6 className="title">Use Cases</h6>
              </div>
              <div className="body">
                <ul className="menu">
                  <li>
                    <a href="#">For Teams</a>
                  </li>
                  <li>
                    <a href="#">For Email Marketers</a>
                  </li>
                  <li>
                    <a href="#">For Blog Writers</a>
                  </li>
                  <li>
                    <a href="#">For social managers</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* single sized  footer end */}
            {/* single sized  footer  */}
            <div className="footer-singl-wized input-area">
              <div className="head">
                <h6 className="title">News &amp; Update</h6>
              </div>
              <div className="body">
                <form action="#">
                  <div className="input-area-fill">
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      required=""
                    />
                    <button> Subscribe</button>
                  </div>
                </form>
                <p className="disc">
                  Subscribe our newsletter for future updates. don’t worry we
                  don’t spam your email address
                </p>
              </div>
            </div>
            {/* single sized  footer end */}
          </div>
          {/* footer main wrapper end */}
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          {/* footer-copyright-area start */}
          <div className="copy-right-start-two">
            <p>
              <a href="https://reactheme.com/" target="_blank">
                Reactheme©
              </a>{" "}
              2023. All Rights Reserved.
            </p>
            <ul>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          {/* footer-copyright-area end */}
        </div>
      </div>
    </div>
  </div>
  {/* rts footer area end */}
  <div id="anywhere-home" className=""></div>
  {/* right switcher */}
  {/* <div className="modal-sidebar-scroll rts-dark-light">
    <ul>
      <li>
        <a href="dark/index.html">
          <span>Dark</span>
          <i className="rts-go-dark fal fa-moon" />
        </a>
      </li>
      <li>
        <a href="https://themewant.com/products/html/openup-rtl">
          <span>RTL</span>
          <i className="fa-solid fa-paragraph-left" />
        </a>
      </li>
    </ul>
  </div> */}
  {/* right switcher end */}
  {/* header style two */}
  <div id="side-bar" className="side-bar header-two">
    <button className="close-icon-menu">
      <i className="far fa-times" />
    </button>
    {/* mobile menu area start */}
    <div className="mobile-menu-main">
      <nav className="nav-main mainmenu-nav mt--30">
        <ul className="mainmenu metismenu" id="mobile-menu-active">
          <li className="has-droupdown parent">
            <a href="#" className="main">
              Home
            </a>
            <ul className="submenu mm-collapse">
              <li>
                <a className="mobile-menu-link" href="index.html">
                  Content Writing 01
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="index-two.html">
                  Content Writing 03
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="index-three.html">
                  Content Writing 03
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="index-four.html">
                  Ai Chat Bot
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="index-five.html">
                  Voice Generator
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="index-five.html">
                  Image Generator
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="index-five.html">
                  Photo Stock
                </a>
              </li>
            </ul>
          </li>
          <li className="parent">
            <a href="feature.html" className="main">
              Use Cases
            </a>
          </li>
          <li className="has-droupdown parent">
            <a href="#" className="main">
              Pages
            </a>
            <ul className="submenu mm-collapse">
              <li>
                <a className="mobile-menu-link" href="/AboutOpenUp">
                  About Us
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="blog.html">
                  Blog
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="blog-details.html">
                  Blog Details
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="/Contact">
                  Contact
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="use-case.html">
                  Use Case
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="use-case-2.html">
                  Use Case 2
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="case-details.html">
                  Use Case Details
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="case-details-2.html">
                  Use Case Details
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="pricing.html">
                  Pricing
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="pricing-two.html">
                  Pricing Two
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="pricing-three.html">
                  Pricing Three
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="faq.html">
                  FAQ
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="/Login">
                  Log In
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="registration.html">
                  Registration
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="reset.html">
                  Reset
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="404.html">
                  Not Found
                </a>
              </li>
            </ul>
          </li>
          <li className="parent">
            <a href="feature.html" className="main">
              Feature
            </a>
          </li>
          <li className="has-droupdown parent">
            <a href="#" className="main">
              Shop
            </a>
            <ul className="submenu mm-collapse">
              <li>
                <a className="mobile-menu-link" href="shop-details.html">
                  Product Details
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="cart.html">
                  Cart
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="checkout.html">
                  Checkout
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="/Login">
                  My Account
                </a>
              </li>
            </ul>
          </li>
          <li className="parent">
            <a href="/Contact" className="main">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="rts-social-style-one pl--20 mt--100">
        <ul>
          <li>
            <a href="#">
              <i className="fa-brands fa-facebook-f" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-youtube" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-linkedin-in" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    {/* mobile menu area end */}
  </div>
  {/* header style two End */}
  {/* rts backto top start */}
  <div className="progress-wrap">
    <svg
      className="progress-circle svg-content"
      width="100%"
      height="100%"
      viewBox="-1 -1 102 102"
    >
      <path
        d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
        style={{
          transition: "stroke-dashoffset 10ms linear 0s",
          strokeDasharray: "307.919, 307.919",
          strokeDashoffset: "307.919"
        }}
      />
    </svg>
  </div>
  {/* rts backto top end */}
</div>

  )
}

export default Checkout
