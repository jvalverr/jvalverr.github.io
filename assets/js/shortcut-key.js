// Check if the user is on a Mac and update the shortcut key for search accordingly
document.addEventListener("readystatechange", () => {
  if (document.readyState === "interactive") {
    let isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
    let searchToggle = document.querySelector("#search-toggle");
    let shortcutKeyElement = document.querySelector("#search-toggle .search-shortcut");
    if (shortcutKeyElement && isMac) {
      // use the unicode for command key (label and tooltip)
      shortcutKeyElement.textContent = "⌘ k";
      searchToggle.title = "Search (⌘ k)";
    }
  }
});
