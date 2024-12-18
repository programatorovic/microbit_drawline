//% weight=100 color=#0fbc11 icon="\uf061"
//% block="Graphics"
namespace Graphics {
    //% block="nakresli čiaru z [$x1, $y1] do [$x2, $y2]" blockGap=8
    //% x1.min=0 x1.max=4 y1.min=0 y1.max=4 inlineInputMode=inline
    //% x2.min=0 x2.max=4 y2.min=0 y2.max=4 inlineInputMode=inline
    export function drawLine(x1: number, y1: number, x2: number, y2: number): void {
        led.plot(x1, y1);
        led.plot(x2, y2);
        // Jednoduchý algoritmus na kreslenie ciar
        let dx = Math.abs(x2 - x1);
        let sx = x1 < x2 ? 1 : -1;
        let dy = -Math.abs(y2 - y1);
        let sy = y1 < y2 ? 1 : -1;
        let err = dx + dy;

        while (true) {
            led.plot(x1, y1);
            if (x1 === x2 && y1 === y2) break;
            let e2 = 2 * err;
            if (e2 >= dy) {
                err += dy;
                x1 += sx;
            }
            if (e2 <= dx) {
                err += dx;
                y1 += sy;
            }
        }
    }

    //% block="nakresli kruh so stredom [$x, $y] a polomerom $r" blockGap=8
    //% x.min=0 x.max=4 y.min=0 y.max=4 inlineInputMode=inline
    //% r.min=0 r.max=4
    export function drawCircle(x: number, y: number, r: number): void {
        for (let i = 0; i < 360; i++) {
            let rad = i * Math.PI / 180;
            let cx = Math.round(x + r * Math.cos(rad));
            let cy = Math.round(y + r * Math.sin(rad));
            if (cx >= 0 && cx < 5 && cy >= 0 && cy < 5) {
                led.plot(cx, cy);
            }
        }
    }
}
