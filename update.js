document.getElementById("update").addEventListener("click", function() {
    chrome.storage.local.set({value: document.getElementById("val").value}, function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.reload(tabs[0].id, {}, ()=>{})
        })
    })
})
