export default defineBackground(() => {
  chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({notas: []});
  });
});
