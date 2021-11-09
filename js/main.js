document.addEventListener("DOMContentLoaded", () => setInterval(initMatrix, 50));
document.querySelector("body").style ="background: #000";

const element = document.querySelector("#canvas");
const ctx = element.getContext("2d");

const w = document.documentElement.clientWidth;
const h = document.documentElement.clientHeight;

element.width = w;
element.height = h;

const position = Array(300).join(0).split("");

const initMatrix = () => {
    ctx.fillStyle = "rgba(0, 10, 2, 0.25)";
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = "#4caf50";
    ctx.font = "12pt";

    position.map((y, index) => {
        const text = String.fromCharCode(1e3 + Math.random() * 30);
        const x = (index * 15) + 15;
        canvas.getContext("2d").fillText(text, x, y);

        y > 100 + Math.random() * 1e5 ? position[index] = 0 : position[index] = y + 15;
    });
};

