import init, {process} from "../pkg/markdown_fckr_wasm.js";

init().then(() => {
    let input = document.getElementById("input");
    if (input.value) {
        let fcked_txt = process(input.value);
        let txt = document.getElementById("fcked");
        txt.innerHTML = fcked_txt;
    }
    const updateText = debounce(e => {
        let fcked_txt = process(e.target.value);
        let txt = document.getElementById("fcked");
        txt.innerHTML = fcked_txt;
    }, 500);
    input.addEventListener("input", updateText);
});

function debounce(func, wait) {
    let timeout = null;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {func.apply(this, args);}, wait);
    };
}