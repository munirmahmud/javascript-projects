const tabs = document.querySelector(".tabs");
const tabBtns = tabs.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll("[role='tabpanel']");

const handleTabClick = (e) => {
  // Hide all tab panels
  tabPanels.forEach((tabpanel) => (tabpanel.hidden = true));

  // Mark all tabs as unselected
  tabBtns.forEach((tab) => tab.setAttribute("aria-selected", false));

  // Mark the clicked tab as selected
  e.target.setAttribute("aria-selected", true);

  // Find the associated tab panel and show it
  const { id } = e.target;
  //   const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);

  const tabPanel = [...tabPanels].find(
    (panel) => panel.getAttribute("aria-labelledby") === id
  );
  tabPanel.hidden = false;
};

tabBtns.forEach((button) => button.addEventListener("click", handleTabClick));
