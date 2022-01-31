import React, {MouseEventHandler, ReactNode} from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import MoreVert from '@mui/icons-material/MoreVert';
import ArrowBack from '@mui/icons-material/ArrowBack';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import styles from './header.module.scss';

export type HeaderProps = {
  /**
   * Page title
   */
  title: string;
  /**
   * Page sub title
   */
  subTitle?: string;
  /**
   * The URL of the previous page
   */
  backArrowUrl?: string;
  /**
   * Callback to be called when action button is clicked
   */
  actionButtonCallback?: MouseEventHandler<HTMLButtonElement>;
  /**
   * Callbacks to be called when back\forward buttons are clicked
   */
  navButtonsCallbacks?: { back: MouseEventHandler<HTMLButtonElement>, forward: MouseEventHandler<HTMLButtonElement> };
  /**
   * Callback to be called when more button is clicked
   */
  moreButtonCallback?: MouseEventHandler<HTMLButtonElement>;
  /**
   * Callbacks to be called when different tabs are selected
   */
  tabsCallback?: Function;
};

export function Header({
                         title,
                         subTitle,
                         backArrowUrl,
                         actionButtonCallback,
                         navButtonsCallbacks,
                         moreButtonCallback,
                         tabsCallback,
                       }: HeaderProps) {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    tabsCallback(newValue);
  };

  return (
    <div className={styles.grid}>
      <header>
        {backArrowUrl ?
          <Button variant={"text"} size={"large"} href={backArrowUrl}><ArrowBack></ArrowBack></Button> : null}
        <div className={styles.titles}>
          <h1>{title}</h1>
          {subTitle ? <h2>{subTitle}</h2> : null}
        </div>
        {actionButtonCallback ?
          <Button variant="contained" size="large" color="primary" onClick={actionButtonCallback}>Large</Button> : null}
        {navButtonsCallbacks
          ? <ButtonGroup variant="contained" aria-label="outlined primary button group" size="large">
            <Button onClick={navButtonsCallbacks.back}><ArrowBackIosIcon></ArrowBackIosIcon></Button>
            <Button onClick={navButtonsCallbacks.forward}><ArrowForwardIosIcon></ArrowForwardIosIcon></Button>
          </ButtonGroup> : null}
        {moreButtonCallback ? <Button onClick={moreButtonCallback}><MoreVert></MoreVert></Button> : null}
      </header>
      {tabsCallback ?
      <nav className={styles.tabs}>
        <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
          <Tabs aria-label="basic tabs example"
                value={value}
                onChange={handleChange}
          >
            <Tab value={0} label="Tab"/>
            <Tab value={1} label="Tab"/>
            <Tab value={2} label="Tab"/>
            <Tab value={3} label="Tab"/>
            <Tab value={4} label="Tab"/>
          </Tabs>
        </Box>
      </nav> : null }
    </div>
  );
}
