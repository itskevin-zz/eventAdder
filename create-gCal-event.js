const CONTEXT_MENU_ID = "MY_CONTEXT_MENU";
function getdate(info,tab) {
  if (info.menuItemId !== CONTEXT_MENU_ID) {
    return;
  }
  console.log(info.selectionText + " was selected.");

  // switch case for different date formats
  
  
  const parsedDate = Date.parse(info.selectionText);
  const toDate = new Date(parsedDate);
  const eventStart = toDate.toJSON().replace(/-|:|\.\d\d\d|Z/g,"");
  
  chrome.tabs.create({  
    url: "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=" + eventStart + "%2f" + eventStart
  });
}
chrome.contextMenus.create({
  title: "Create Event", 
  contexts:["selection"], 
  id: CONTEXT_MENU_ID
});
chrome.contextMenus.onClicked.addListener(getdate)