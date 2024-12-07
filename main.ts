namespace drawLine {
    /**
     * Implementácia algoritmu kreslenia čiary.
     */
    export function lineImplementation(x1: number, y1: number, x2: number, y2: number): void {
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
