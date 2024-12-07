//% weight=100 color=#0fbc11 icon="\uf061" block="Draw Line"
namespace drawLine {
    /**
     * Kreslí čiaru na LED matici z bodu [x1, y1] do bodu [x2, y2].
     * @param x1 Súradnica X začiatku, 0-4
     * @param y1 Súradnica Y začiatku, 0-4
     * @param x2 Súradnica X konca, 0-4
     * @param y2 Súradnica Y konca, 0-4
     */
    //% block="line from x1 %x1 y1 %y1 to x2 %x2 y2 %y2"
    //% x1.min=0 x1.max=4 y1.min=0 y1.max=4
    //% x2.min=0 x2.max=4 y2.min=0 y2.max=4
    //% x1.shadow="math_number" x1.defl=0
    //% y1.shadow="math_number" y1.defl=0
    //% x2.shadow="math_number" x2.defl=4
    //% y2.shadow="math_number" y2.defl=4
    export function line(x1: number, y1: number, x2: number, y2: number): void {
        let dx = Math.abs(x2 - x1);
        let dy = Math.abs(y2 - y1);
        let sx = (x1 < x2) ? 1 : -1;
        let sy = (y1 < y2) ? 1 : -1;
        let err = dx - dy;

        while (true) {
            led.plot(x1, y1); // Zapni LED na súradniciach [x1, y1]
            if (x1 === x2 && y1 === y2) break; // Ak sme dosiahli koncový bod, zastav
            let e2 = 2 * err;
            if (e2 > -dy) {
                err -= dy;
                x1 += sx;
            }
            if (e2 < dx) {
                err += dx;
                y1 += sy;
            }
        }
    }
}
