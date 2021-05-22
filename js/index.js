
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
