import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Tabs,
  Tab,
} from 'carbon-components-react';

const props = {
  tabs: {
    selected: 0,
    triggerHref: '#',
    role: 'navigation',
  },
  tab: {
    href: '#',
    role: 'presentation',
    tabIndex: 0,
  },
};

const LandingPage = () => {
  return (
    <div className="bx--grid bx--grid--full-width landing-page">
      <div className="bx--row landing-page__banner">
        <div className="bx--col-lg-16">
          <Breadcrumb noTrailingSlash>
            <BreadcrumbItem>
              <a href="/">Getting started</a>
            </BreadcrumbItem>
          </Breadcrumb>
          <h1 className="landing-page__heading">
            Design &amp; build with Carbon
          </h1>
        </div>
      </div>
      <div className="bx--row landing-page__r2">
        <div className="bx--col bx--no-gutter">
          <Tabs {...props.tabs}>
            <Tab {...props.tab} label="About">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-md-4 bx--col-lg-7">7/16</div>
                  <div className="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
                    8/16
                  </div>
                </div>
              </div>
            </Tab>
            <Tab {...props.tab} label="Design">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-lg-16">
                    Rapidly build beautiful and accessible experiences. The
                    Carbon kit contains all resources you need to get started.
                  </div>
                </div>
              </div>
            </Tab>
            <Tab {...props.tab} label="Develop">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-lg-16">
                    Carbon provides styles and components in Vanilla, React,
                    Angular, and Vue for anyone building on the web.
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
      <div className="bx--row landing-page__r3">
        <div className="bx--col-md-4 bx--col-lg-4">1/4</div>
        <div className="bx--col-md-4 bx--col-lg-4">1/4</div>
        <div className="bx--col-md-4 bx--col-lg-4">1/4</div>
        <div className="bx--col-md-4 bx--col-lg-4">1/4</div>
      </div>
    </div>
  );
};

export default LandingPage;