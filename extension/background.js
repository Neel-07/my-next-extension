chrome.runtime.onInstalled.addListener(function () {
    console.log("Extension installed!");
  
    // Set up storage for Gemini API key when the extension is installed
    chrome.storage.sync.set({ geminiApiKey: 'AIzaSyBp_H3a5pIlq5jiFavEVFMirrzDgNPHrgo' }, function () {
      console.log('Gemini API key stored.');
    });
  });
  