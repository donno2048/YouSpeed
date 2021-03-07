var head = document.getElementsByTagName('head')[0]
var script = document.createElement("script")
chrome.storage.local.get(["value"], function (items) {
    var playbackRate = items.value
    if (typeof playbackRate === "undefined") {playbackRate = 1}
    script.appendChild(document.createTextNode("document.getElementsByTagName(\"video\")[0].playbackRate = " + playbackRate))
    head.appendChild(script)
    head.removeChild(script)
})
