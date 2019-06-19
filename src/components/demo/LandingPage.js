import React, { PureComponent, Fragment } from 'react';

export default class LandingPage extends PureComponent {

  render() {
    return (
      <Fragment>
        <header className="header-siemens-landing">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <img src="img/siemens-logo.png" alt="logo" />
              </div>
            </div>
          </div>
        </header>

        <section className="section-hero">
          <h1>A better workday for collaborating people</h1>
          <a href="/login" className="btn btn-primary btn-lg">Take a Tour!</a>
        </section>

        <section className="section-hero-bg">
          <p className="fs-18">Read below why and how UniQueue improves your workday</p>
          <div className="scroll-down-wrap">
            <a href="#scroll-down" className="scroll-down"><img src="img/ctrl-down.svg" alt="scroll" /></a>
          </div>
        </section>

        <section className="section-landing" id="scroll-down">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <p className="mb-5">UniQueue creates a better workday for collaborating people, by offering a wide range of smart modules that can easily be combined so that as many people as possible can get business information in right time and in one streamlined process. With UniQueue, teams optimizes those business processes and get work done faster.</p>
                <h3 className="section-landing-title text-center">
                  <img src="img/target.svg" className="d-block m-auto mb-2" alt="" />
                  The Challenge
                </h3>
                <p>All businesses run into the same fundamental problems. Buried under email, meetings after meetings, things needed to be done, different persons need important business information in right time to get work done. Stuff everywhere. The challenge is to structure your work and business processes in a smart way. That's where UniQueue comes into play.</p>
              </div>
            </div>
          </div>
        </section>

        <hr />

        <section className="section-landing">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <h3 className="section-landing-title">But… What is UniQueue?</h3>
                <p className="fs-14">You know what happens when products, emails, documents, customer documentation are scattered all over the place. Miscommunication, old versions of ongoing work-in-progress documents, or wrong information sent to print - simply because a document wasn’t approved.</p>
                <p className="fs-14">UniQueue helps your business with all these problems, with a streamlined module based plattform which makes it easy to handle the information and all the underlying processes.</p>
              </div>
              <div className="col-md-6">
                <img src="img/uq-siemens-img-1.png" alt="logo" />
              </div>
            </div>
          </div>
        </section>

        <hr />

        <section className="section-landing">
          <div className="container">
            <div className="row justify-content-center mb-3">
              <div className="col-md-6">
                <img src="img/uq-siemens-img-2.png" alt="logo" />
              </div>
              <div className="col-md-6">
                <h3 className="section-landing-title">How does it work?</h3>
                <p className="fs-14 mb-0">It’s easy, let us explain. First we will help you to identify your business needs. Then we will help you set up a unique, tailor-made workflow, by combining several smart modules into one optimized workflow that will fulfill all your business needs and goals. We automate repetitive tasks. By that we will help your organization to get an optimize performance. We have helped companies worldwide to create automated workflows for customer documentation, campaigns, automated invoicing processes to several million recipients, setting up unique ordering processes, </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <p className="fs-14">construction and real estate companies has streamlined the construction process and property portfolio by using UniQueue as a digital information system, marketing departments has streamlined their marketing processes, education companies to produce their material faster, the Nordic region's leading company in substations sells more of their products.</p>
              </div>
            </div>
          </div>
        </section>

        <hr />

        <section className="section-landing">
          <div className="container">
            <div className="row justify-content-center mb-4">
              <div className="col-md-4">
                <div className="card shadow">
                  <div className="card-body text-center p-4">
                    <img src="img/components.svg" className="w-25" alt="comp" />
                    <h4 className="lh-normal">So how is UniQueue actually used?</h4>
                    <p className="fs-14 text-left">UniQueue is a digital platform that consists of several smart building blocks (modules) that are combined together to enhance the customer's unique business process. Each individual module can be customized.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow">
                  <div className="card-body text-center p-4">
                    <img src="img/money-time.svg" alt="time" />
                    <h4 className="lh-normal">What about the business value?</h4>
                    <p className="fs-14 text-left">By using UniQueue, a customer can streamline work processes and save hundreds of thousands of euros a year. In addition, a more uniform and clearer brand is obtained.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <a href="/login" className="btn btn-primary btn-lg">Take a Tour!</a>
            </div>
          </div>
        </section>

        <section className="section-landing section-landing-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h3 className="text-white">And what about those modules?</h3>
                <p className="text-white mb-0">UniQueue contains modules for procurement, project management, issue tracking, proofing, reviewing, document management, email marketing, ordering, inventory management, production, print automation, distribution, archiving and OneStream that automates repetitive tasks. So, a whole lot of modules for you to pick out and choose from.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-landing">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <h3 className="section-landing-title text-center">
                  <img src="img/uq-symbol.png" className="d-block m-auto mb-4" alt="sym" />
                  Our vision
                </h3>
                <p>UniQueue's vision is to create a better workday for people who are collaborating. Our business idea supports this vision by offering a wide range of smart and functional modules that can be combined, so simple that as many people as possible will be able to streamline their business processes.</p>
              </div>
            </div>
          </div>
        </section>

        <hr />

        <footer className="text-center pb-3">
          <img src="img/uq-power.jpg" alt="power" />
        </footer>
      </Fragment>
    );
  }
}
