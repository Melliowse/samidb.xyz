const urlParams = new URLSearchParams(window.location.search);
let typed = "",
    options = {
        "noValue": []
    },
    params = urlParams.toString().split("&");
params.forEach(param => {
    if (param.indexOf("=") !== -1) {
        let splitted = param.split("="),
            key = splitted[0],
            value = splitted[1];
        if (!key in options) return;
        options[key] = value; 
    } else options.noValue.push(param);
})
window
    .addEventListener(
        "load",
        () => {
            document
                .getElementsByClassName("ntk")[0]
                .addEventListener(
                    "contextmenu",
                    (e) =>
                    {
                        e.preventDefault();
                        return false;
                });
            require("js/header.js");
            window.setHeaderShownVar()
});
function clearPage() {
    while (document.firstChild) {
        document.removeChild(document.firstChild);
    }
}
function keypress(event) {
    if (String(event.key).toLowerCase() == "a"
    || String(event.key).toLowerCase() == "y"
    || String(event.key).toLowerCase() == "u"
    || String(event.key).toLowerCase() == "m"
    || String(event.key).toLowerCase() == "i")
        typed = `${typed}${String(event.key).toLowerCase()}`;
    if (typed.indexOf("ayumi") !== -1)
        window.location = `http://samidb.xyz/AyumiIsDead`;
};
function toniKensa() {
    document
        .getElementsByClassName("ntk")[0].style
        .setProperty("display", "none");
    document
        .getElementsByClassName("toniKensa")[0].style
        .setProperty("display", "block");
}
