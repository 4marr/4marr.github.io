function n() {
    let e = document.createElement("div");
    e.setAttribute("class", "meteor"),
    e.style.left = Math.round(Math.random() * window.innerWidth) + "px",
    e.style.top = Math.round(Math.random() * window.innerHeight) + "px";
    const t = document.querySelectorAll(".shower");
    if (t.length > 0) {
        const o = Math.floor(Math.random() * t.length);
        t[o].append(e)
    }
    setTimeout( () => {
        e.remove()
    }
    , 3500)
}
setInterval(n, 1500);
