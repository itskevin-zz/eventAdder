const CONTEXT_MENU_ID = "MY_CONTEXT_MENU";
function getdate(info,tab) {
  if (info.menuItemId !== CONTEXT_MENU_ID) {
    return;
  }
  console.log(info.selectionText + " was selected.");

  const parsedDate = Sugar.Date.create(info.selectionText, { fromUTC: true })
  const start = new Date(parsedDate);
  const end = new Date(parsedDate.getTime() + 30*60000);
  const eventStart = start.toJSON().replace(/-|:|\.\d\d\d|Z/g,"");
  const eventEnd =  end.toJSON().replace(/-|:|\.\d\d\d|Z/g,"");
  
  chrome.tabs.create({  
    url: "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=" + eventStart + "%2f" + eventEnd
  });
}
chrome.contextMenus.create({
  title: "Create Event", 
  contexts:["selection"], 
  id: CONTEXT_MENU_ID
});
chrome.contextMenus.onClicked.addListener(getdate)