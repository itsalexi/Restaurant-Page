import {
  renderFooter,
  renderHeader,
  renderMain,
  resetMain,
} from "./pageLoad.js";

import {
  renderHomeTab,
  renderMenuTab,
  renderAboutTab,
  renderTab,
} from "./tab.js";

// These should be loaded first and in order.
renderHeader();
renderMain();
renderFooter();

renderMenuTab();
// resetMain();

// When switching tabs, call the resetMain() function to reset main-content div
// Then call the tab function of whatever the person pressed on.
