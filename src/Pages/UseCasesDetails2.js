import React from 'react'

const UseCasesDetails2 = () => {
  return (
<div className='inner-page case-details-2'>
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
              <h1 className="bread-title">Use Case Details 2</h1>
              <div className="inner-wrapper">
                <a href="/">Home</a>/
                <a href="#" className="active">
                  Use Case Details 2
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* rts breadcrumb area end */}
  <div className="caase-details-area-start rts-section-gap">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="title-conter-area top-tt">
            <span className="pre-title-bg">OpenUp Use cases</span>
            <h2 className="title">
              Generate Blog, Article or <br />
              Essay Ideas in One Click
            </h2>
            <p className="disc">
              The easiest way to come up with catchy blog, essay, and article
              topics and content structures using AI writing assistant.
            </p>
            <a href="#" className="rts-btn btn-primary">
              Start Writing
            </a>
          </div>
        </div>
      </div>
      <div className="row case-lg-img-w">
        <div className="share-mid">
          <img src="assets/images/case/06.png" alt="" />
        </div>
        <div className="col-lg-6 mt--150 mt_sm--50">
          <div className="use-case-left-thumb">
            <h3 className="title">Select Your Option</h3>
            <img src="assets/images/case/05.jpg" alt="case-images" />
          </div>
        </div>
        <div className="col-lg-6 mt--20">
          <div className="use-case-right-thumb">
            <div className="inner">
              <h3 className="title">Write Your content</h3>
              <img src="assets/images/case/04.jpg" alt="case-images" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* rts feature area start */}
  <div className="rts-feature-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="title-conter-area">
            <h2 className="title">
              Instruct to our AI <br />
              writing generate copy
            </h2>
            <p className="disc">
              Let our AI assist with most time consuming to write blog articles,
              product descriptions and more.
            </p>
          </div>
        </div>
      </div>
      <div className="row mt--50">
        <div className="col-lg-12">
          {/* single openup feature area start */}
          <div className="single-feature-area-start">
            <div className="image-area">
              <img src="assets/images/feature/01.png" alt="feature_image" />
            </div>
            <div className="featue-content-area">
              <span className="pre">01</span>
              <h2 className="title">
                Generate copy in <br />
                seconds
              </h2>
              <p className="disc">
                Generate many types of content in under 30 seconds by simply
                inserting a few input fields. Generate blog topic ideas, intros,
                ad copy, copywriting.
              </p>
              <a href="#" className="rts-btn btn-primary">
                Get Started Free
              </a>
            </div>
          </div>
          {/* single openup feature area end */}
          {/* single openup feature area start */}
          <div className="single-feature-area-start bg-red-l">
            <div className="featue-content-area">
              <span className="pre">02</span>
              <h2 className="title">
                45+ highly-tuned AI <br />
                tools fingertips
              </h2>
              <p className="disc">
                We have a wide variety of tools available for you to use. From
                blog shots (full blog posts) and tweets to sales email
                generators and marketing copy.
              </p>
              <a href="#" className="rts-btn btn-primary">
                Get Started Free
              </a>
            </div>
            <div className="image-area">
              <img src="assets/images/feature/02.png" alt="feature_image" />
            </div>
          </div>
          {/* single openup feature area end */}
          {/* single openup feature area start */}
          <div className="single-feature-area-start bg-blue-l">
            <div className="image-area">
              <img src="assets/images/feature/03.png" alt="feature_image" />
            </div>
            <div className="featue-content-area">
              <span className="pre">03</span>
              <h2 className="title">
                Enter your <br />
                copywriting project
              </h2>
              <p className="disc">
                Choose from emails, social posts, long-form blog posts, and
                more! Then, just copy and paste the work into your CMS for
                publishing.
              </p>
              <a href="#" className="rts-btn btn-primary">
                Get Started Free
              </a>
            </div>
          </div>
          {/* single openup feature area end */}
        </div>
      </div>
    </div>
  </div>
  {/* rts feature area end */}
  {/* rts clients deview area start */}
  <div className="rts-clients-review-area rts-section-gapTop">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="title-conter-area">
            <h2 className="title">
              OpenUP Received 4.8/5 Stars in Over <br />
              10,000+ Reviews.
            </h2>
            <p className="disc">Used by them World Best Markting Team</p>
            <div className="brand-area">
              <img src="assets/images/brand/01.png" alt="" />
              <img src="assets/images/brand/02.png" alt="" />
              <img src="assets/images/brand/03.png" alt="" />
              <img src="assets/images/brand/04.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-tt mt--60">
      {/* marque area start */}
      <div className="marquee">
        <div className="marquee__item">
          <div className="row">
            <div className="col-lg-12">
              <div className="main--wrapper-tt">
                {/* ingle testimonials area */}
                <div className="single-testimonials-marquree">
                  <div className="top">
                    <div className="author">
                      <img src="assets/images/team/09.png" alt="team" />
                      <div className="info-content">
                        <h6 className="title">Samuel</h6>
                        <span className="deg">Blogger</span>
                      </div>
                    </div>
                    <div className="stars-area">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </div>
                  </div>
                  <div className="body">
                    <p>
                      So glad i found openup!! It has made my blog <br /> tasks
                      a billion times more enjoyable (which is <br /> an emotion
                      way beyond.
                    </p>
                  </div>
                </div>
                {/* ingle testimonials area end */}
                {/* ingle testimonials area */}
                <div className="single-testimonials-marquree">
                  <div className="top">
                    <div className="author">
                      <img src="assets/images/team/09.png" alt="team" />
                      <div className="info-content">
                        <h6 className="title">Samuel</h6>
                        <span className="deg">Blogger</span>
                      </div>
                    </div>
                    <div className="stars-area">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </div>
                  </div>
                  <div className="body">
                    <p>
                      So glad i found openup!! It has made my blog <br /> tasks
                      a billion times more enjoyable (which is <br /> an emotion
                      way beyond.
                    </p>
                  </div>
                </div>
                {/* ingle testimonials area end */}
                {/* ingle testimonials area */}
                <div className="single-testimonials-marquree">
                  <div className="top">
                    <div className="author">
                      <img src="assets/images/team/09.png" alt="team" />
                      <div className="info-content">
                        <h6 className="title">Samuel</h6>
                        <span className="deg">Blogger</span>
                      </div>
                    </div>
                    <div className="stars-area">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </div>
                  </div>
                  <div className="body">
                    <p>
                      So glad i found openup!! It has made my blog <br /> tasks
                      a billion times more enjoyable (which is <br /> an emotion
                      way beyond.
                    </p>
                  </div>
                </div>
                {/* ingle testimonials area end */}
                {/* ingle testimonials area */}
                <div className="single-testimonials-marquree">
                  <div className="top">
                    <div className="author">
                      <img src="assets/images/team/09.png" alt="team" />
                      <div className="info-content">
                        <h6 className="title">Samuel</h6>
                        <span className="deg">Blogger</span>
                      </div>
                    </div>
                    <div className="stars-area">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </div>
                  </div>
                  <div className="body">
                    <p>
                      So glad i found openup!! It has made my blog <br /> tasks
                      a billion times more enjoyable (which is <br /> an emotion
                      way beyond.
                    </p>
                  </div>
                </div>
                {/* ingle testimonials area end */}
              </div>
            </div>
          </div>
        </div>
        <div className="marquee__item">
          <div className="row">
            <div className="col-lg-12">
              <div className="main--wrapper-tt">
                {/* ingle testimonials area */}
                <div className="single-testimonials-marquree">
                  <div className="top">
                    <div className="author">
                      <img src="assets/images/team/09.png" alt="team" />
                      <div className="info-content">
                        <h6 className="title">Samuel</h6>
                        <span className="deg">Blogger</span>
                      </div>
                    </div>
                    <div className="stars-area">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </div>
                  </div>
                  <div className="body">
                    <p>
                      So glad i found openup!! It has made my blog <br /> tasks
                      a billion times more enjoyable (which is <br /> an emotion
                      way beyond.
                    </p>
                  </div>
                </div>
                {/* ingle testimonials area end */}
                {/* ingle testimonials area */}
                <div className="single-testimonials-marquree">
                  <div className="top">
                    <div className="author">
                      <img src="assets/images/team/09.png" alt="team" />
                      <div className="info-content">
                        <h6 className="title">Samuel</h6>
                        <span className="deg">Blogger</span>
                      </div>
                    </div>
                    <div className="stars-area">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </div>
                  </div>
                  <div className="body">
                    <p>
                      So glad i found openup!! It has made my blog <br /> tasks
                      a billion times more enjoyable (which is <br /> an emotion
                      way beyond.
                    </p>
                  </div>
                </div>
                {/* ingle testimonials area end */}
                {/* ingle testimonials area */}
                <div className="single-testimonials-marquree">
                  <div className="top">
                    <div className="author">
                      <img src="assets/images/team/09.png" alt="team" />
                      <div className="info-content">
                        <h6 className="title">Samuel</h6>
                        <span className="deg">Blogger</span>
                      </div>
                    </div>
                    <div className="stars-area">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </div>
                  </div>
                  <div className="body">
                    <p>
                      So glad i found openup!! It has made my blog <br /> tasks
                      a billion times more enjoyable (which is <br /> an emotion
                      way beyond.
                    </p>
                  </div>
                </div>
                {/* ingle testimonials area end */}
                {/* ingle testimonials area */}
                <div className="single-testimonials-marquree">
                  <div className="top">
                    <div className="author">
                      <img src="assets/images/team/09.png" alt="team" />
                      <div className="info-content">
                        <h6 className="title">Samuel</h6>
                        <span className="deg">Blogger</span>
                      </div>
                    </div>
                    <div className="stars-area">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </div>
                  </div>
                  <div className="body">
                    <p>
                      So glad i found openup!! It has made my blog <br /> tasks
                      a billion times more enjoyable (which is <br /> an emotion
                      way beyond.
                    </p>
                  </div>
                </div>
                {/* ingle testimonials area end */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* marque area end */}
      {/* marque area start */}
      <div className="marquee mt--30">
        <div className="marquee__item-2">
          <div className="row">
            <div className="col-lg-12">
              <div className="main--wrapper-tt">
                {/* ingle testimonials area */}
                <div className="single-testimonials-marquree">
                  <div className="top">
                    <div className="author">
                      <img src="assets/images/team/09.png" alt="team" />
                      <div className="info-content">
                        <h6 className="title">Samuel</h6>
                        <span className="deg">Blogger</span>
                      </div>
                    </div>
                    <div className="stars-area">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </div>
                  </div>
                  <div className="body">
                    <p>
                      So glad i found openup!! It has made my blog <br /> tasks
                      a billion times more enjoyable (which is <br /> an emotion
                      way beyond.
                    </p>
                  </div>
                </div>
                {/* ingle testimonials area end */}
                {/* ingle testimonials area */}
                <div className="single-testimonials-marquree">
                  <div className="top">
                    <div className="author">
                      <img src="assets/images/team/09.png" alt="team" />
                      <div className="info-content">
                        <h6 className="title">Samuel</h6>
                        <span className="deg">Blogger</span>
                      </div>
                    </div>
                    <div className="stars-area">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </div>
                  </div>
                  <div className="body">
                    <p>
                      So glad i found openup!! It has made my blog <br /> tasks
                      a billion times more enjoyable (which is <br /> an emotion
                      way beyond.
                    </p>
                  </div>
                </div>
                {/* ingle testimonials area end */}
                {/* ingle testimonials area */}
                <div className="single-testimonials-marquree">
                  <div className="top">
                    <div className="author">
                      <img src="assets/images/team/09.png" alt="team" />
                      <div className="info-content">
                        <h6 className="title">Samuel</h6>
                        <span className="deg">Blogger</span>
                      </div>
                    </div>
                    <div className="stars-area">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </div>
                  </div>
                  <div className="body">
                    <p>
                      So glad i found openup!! It has made my blog <br /> tasks
                      a billion times more enjoyable (which is <br /> an emotion
                      way beyond.
                    </p>
                  </div>
                </div>
                {/* ingle testimonials area end */}
                {/* ingle testimonials area */}
                <div className="single-testimonials-marquree">
                  <div className="top">
                    <div className="author">
                      <img src="assets/images/team/09.png" alt="team" />
                      <div className="info-content">
                        <h6 className="title">Samuel</h6>
                        <span className="deg">Blogger</span>
                      </div>
                    </div>
                    <div className="stars-area">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </div>
                  </div>
                  <div className="body">
                    <p>
                      So glad i found openup!! It has made my blog <br /> tasks
                      a billion times more enjoyable (which is <br /> an emotion
                      way beyond.
                    </p>
                  </div>
                </div>
                {/* ingle testimonials area end */}
              </div>
            </div>
          </div>
        </div>
        <div className="marquee__item-2">
          <div className="row">
            <div className="col-lg-12">
              <div className="main--wrapper-tt">
                {/* ingle testimonials area */}
                <div className="single-testimonials-marquree">
                  <div className="top">
                    <div className="author">
                      <img src="assets/images/team/09.png" alt="team" />
                      <div className="info-content">
                        <h6 className="title">Samuel</h6>
                        <span className="deg">Blogger</span>
                      </div>
                    </div>
                    <div className="stars-area">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </div>
                  </div>
                  <div className="body">
                    <p>
                      So glad i found openup!! It has made my blog <br /> tasks
                      a billion times more enjoyable (which is <br /> an emotion
                      way beyond.
                    </p>
                  </div>
                </div>
                {/* ingle testimonials area end */}
                {/* ingle testimonials area */}
                <div className="single-testimonials-marquree">
                  <div className="top">
                    <div className="author">
                      <img src="assets/images/team/09.png" alt="team" />
                      <div className="info-content">
                        <h6 className="title">Samuel</h6>
                        <span className="deg">Blogger</span>
                      </div>
                    </div>
                    <div className="stars-area">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </div>
                  </div>
                  <div className="body">
                    <p>
                      So glad i found openup!! It has made my blog <br /> tasks
                      a billion times more enjoyable (which is <br /> an emotion
                      way beyond.
                    </p>
                  </div>
                </div>
                {/* ingle testimonials area end */}
                {/* ingle testimonials area */}
                <div className="single-testimonials-marquree">
                  <div className="top">
                    <div className="author">
                      <img src="assets/images/team/09.png" alt="team" />
                      <div className="info-content">
                        <h6 className="title">Samuel</h6>
                        <span className="deg">Blogger</span>
                      </div>
                    </div>
                    <div className="stars-area">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </div>
                  </div>
                  <div className="body">
                    <p>
                      So glad i found openup!! It has made my blog <br /> tasks
                      a billion times more enjoyable (which is <br /> an emotion
                      way beyond.
                    </p>
                  </div>
                </div>
                {/* ingle testimonials area end */}
                {/* ingle testimonials area */}
                <div className="single-testimonials-marquree">
                  <div className="top">
                    <div className="author">
                      <img src="assets/images/team/09.png" alt="team" />
                      <div className="info-content">
                        <h6 className="title">Samuel</h6>
                        <span className="deg">Blogger</span>
                      </div>
                    </div>
                    <div className="stars-area">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </div>
                  </div>
                  <div className="body">
                    <p>
                      So glad i found openup!! It has made my blog <br /> tasks
                      a billion times more enjoyable (which is <br /> an emotion
                      way beyond.
                    </p>
                  </div>
                </div>
                {/* ingle testimonials area end */}
              </div>
            </div>
          </div>
        </div>
        <div className="marquee__item-2">
          <div className="row">
            <div className="col-lg-12">
              <div className="main--wrapper-tt">
                {/* ingle testimonials area */}
                <div className="single-testimonials-marquree">
                  <div className="top">
                    <div className="author">
                      <img src="assets/images/team/09.png" alt="team" />
                      <div className="info-content">
                        <h6 className="title">Samuel</h6>
                        <span className="deg">Blogger</span>
                      </div>
                    </div>
                    <div className="stars-area">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </div>
                  </div>
                  <div className="body">
                    <p>
                      So glad i found openup!! It has made my blog <br /> tasks
                      a billion times more enjoyable (which is <br /> an emotion
                      way beyond.
                    </p>
                  </div>
                </div>
                {/* ingle testimonials area end */}
                {/* ingle testimonials area */}
                <div className="single-testimonials-marquree">
                  <div className="top">
                    <div className="author">
                      <img src="assets/images/team/09.png" alt="team" />
                      <div className="info-content">
                        <h6 className="title">Samuel</h6>
                        <span className="deg">Blogger</span>
                      </div>
                    </div>
                    <div className="stars-area">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </div>
                  </div>
                  <div className="body">
                    <p>
                      So glad i found openup!! It has made my blog <br /> tasks
                      a billion times more enjoyable (which is <br /> an emotion
                      way beyond.
                    </p>
                  </div>
                </div>
                {/* ingle testimonials area end */}
                {/* ingle testimonials area */}
                <div className="single-testimonials-marquree">
                  <div className="top">
                    <div className="author">
                      <img src="assets/images/team/09.png" alt="team" />
                      <div className="info-content">
                        <h6 className="title">Samuel</h6>
                        <span className="deg">Blogger</span>
                      </div>
                    </div>
                    <div className="stars-area">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </div>
                  </div>
                  <div className="body">
                    <p>
                      So glad i found openup!! It has made my blog <br /> tasks
                      a billion times more enjoyable (which is <br /> an emotion
                      way beyond.
                    </p>
                  </div>
                </div>
                {/* ingle testimonials area end */}
                {/* ingle testimonials area */}
                <div className="single-testimonials-marquree">
                  <div className="top">
                    <div className="author">
                      <img src="assets/images/team/09.png" alt="team" />
                      <div className="info-content">
                        <h6 className="title">Samuel</h6>
                        <span className="deg">Blogger</span>
                      </div>
                    </div>
                    <div className="stars-area">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </div>
                  </div>
                  <div className="body">
                    <p>
                      So glad i found openup!! It has made my blog <br /> tasks
                      a billion times more enjoyable (which is <br /> an emotion
                      way beyond.
                    </p>
                  </div>
                </div>
                {/* ingle testimonials area end */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* marque area end */}
    </div>
  </div>
  {/* rts clients deview area end */}
  {/* rts faq area stat */}
  <div className="rts-faq-area rts-section-gap bg_faq">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="title-conter-area">
            <h2 className="title">
              Questions About our GenAI? <br />
              We have Answers!
            </h2>
            <p className="disc">
              please feel free to reach out to us. We are always happy to assist
              you and provide any additional.
            </p>
          </div>
        </div>
      </div>
      <div className="row mt--60">
        <div className="col-lg-12">
          <div className="accordion-area-one">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    What is openup content writing tool?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Once you know your audience, choose a topic that will
                    resonate with them. Look for trending topics in your
                    industry or address common questions or challenges your
                    audience may be facing.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    what languages does it supports?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Once you know your audience, choose a topic that will
                    resonate with them. Look for trending topics in your
                    industry or address common questions or challenges your
                    audience may be facing.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    What is sEO wirting ai and how do i use it?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Once you know your audience, choose a topic that will
                    resonate with them. Look for trending topics in your
                    industry or address common questions or challenges your
                    audience may be facing.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    what languages does it supports?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Once you know your audience, choose a topic that will
                    resonate with them. Look for trending topics in your
                    industry or address common questions or challenges your
                    audience may be facing.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    Does Openup to write long articles?
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Once you know your audience, choose a topic that will
                    resonate with them. Look for trending topics in your
                    industry or address common questions or challenges your
                    audience may be facing.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* rts faq area end */}
  {/* cta area start */}
  {/* cta area start */}
  <div className="rts-cta-area rts-section-gapBottom  bg_faq">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="cta-main-wrapper bg_image">
            <div className="left">
              <h3 className="title">
                All set to level up <br />
                your content game?
              </h3>
              <a href="/AboutOpenUp" className="rts-btn btn-primary">
                Get Started Now
              </a>
            </div>
            <div className="right">
              <img src="assets/images/cta/02.png" alt="cta-area" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* cta area end */}
  {/* cta area end */}
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

export default UseCasesDetails2
