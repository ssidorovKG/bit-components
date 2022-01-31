import React from 'react';
import {Header} from './header';

export const HeaderWithEverything = () => {
  return (
    <Header
      title={"Title of the Page"}
      subTitle={"Subtitle • Subtitle"}
      backArrowUrl={'https://example.com'}
      actionButtonCallback={() => {
        alert('Action!')
      }}
      navButtonsCallbacks={
        {
          back: () => alert('back'),
          forward: () => alert('forward')
        }
      }
      moreButtonCallback={() => {
        alert('more')
      }}
      tabsCallback={(activeTab) => {
        alert(activeTab);
      }}/>
  );
}

export const BasicHeader = () => {
  return (
    <Header title={"Title of the Page"}/>
  );
}

export const HeaderWithSubTitle = () => {
  return (
    <Header title={"Title of the Page"} subTitle={"Subtitle • Subtitle"}/>
  );
}

export const HeaderWithBackButton = () => {
  return (
    <Header title={"Title of the Page"} backArrowUrl={'https://example.com'}/>
  );
}

export const HeaderWithActionButton = () => {
  return (
    <Header title={"Title of the Page"} actionButtonCallback={() => {
      alert('Action!')
    }}/>
  );
}

export const HeaderWithNavButtons = () => {
  return (
    <Header title={"Title of the Page"} navButtonsCallbacks={
      {
        back: () => alert('back'),
        forward: () => alert('forward')
      }
    }/>
  );
}

export const HeaderWithMoreButton = () => {
  return (
    <Header title={"Title of the Page"} moreButtonCallback={() => {
      alert('more')
    }}/>
  );
}

export const HeaderWithTabs = () => {
  return (
    <Header title={"Title of the Page"} tabsCallback={(activeTab) => {
      alert(activeTab);
    }}/>
  );
}
