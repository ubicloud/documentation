if (location.hostname == "localhost") {
  console.log("Analytics disabled on localhost");
} else {
  // Tracking code provided by Matomo Analytics
  var _paq = (window._paq = window._paq || []);
  _paq.push(["trackPageView"]);
  _paq.push(["enableLinkTracking"]);
  (function () {
    var u = "https://ubicloud.matomo.cloud/";
    _paq.push(["setTrackerUrl", u + "matomo.php"]);
    _paq.push(["setSiteId", "1"]);
    var d = document,
      g = d.createElement("script"),
      s = d.getElementsByTagName("script")[0];
    g.async = true;
    g.src = "https://cdn.matomo.cloud/ubicloud.matomo.cloud/matomo.js";
    s.parentNode.insertBefore(g, s);
  })();

  // Since it's a SPA, track page views on title change
  var target = document.querySelector("title");
  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      _paq.push(["setCustomUrl", window.location.href]);
      _paq.push(["setDocumentTitle", document.title]);
      _paq.push(["trackPageView"]);
    });
  });
  observer.observe(target, { childList: true });
}
