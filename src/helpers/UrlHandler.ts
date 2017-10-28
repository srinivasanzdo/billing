export let UrlHandler = (url) => {
    let splitUrl = url.split(".");
    let sUrl = "";
    splitUrl.forEach((element) => {
        sUrl += "/" + element;
    })
    return sUrl;
}