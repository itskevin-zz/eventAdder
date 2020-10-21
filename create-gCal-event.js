const CONTEXT_MENU_ID = "MY_CONTEXT_MENU";
function getdate(info,tab) {
  if (info.menuItemId !== CONTEXT_MENU_ID) {
    return;
  }
  console.log(info.selectionText + " was selected.");

  // function to add a day in order to avoid error on google's event endpoint
  Date.prototype.addDays = function(days) {
    let endDate = new Date(this.valueOf());
    endDate.setDate(endDate.getDate() + days);
    return endDate;
  }

  const parsedDate = Sugar.Date.create(info.selectionText)
  const startDate = new Date(parsedDate);
  const endDate = new Date(parsedDate).addDays(1);
  const eventStart = startDate.toJSON().replace(/-|:|\.\d\d\d|T\d\d:\d\d:\d\d.\d\d\dZ/g,"");
  const eventEnd =  endDate.toJSON().replace(/-|:|\.\d\d\d|T\d\d:\d\d:\d\d.\d\d\dZ/g,"");
  
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