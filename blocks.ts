//% weight=100 color=#0fbc11 icon="\uf061" block="Draw Line"
namespace drawLine {
    /**
     * Nakreslí čiaru na LED matici.
     * @param x1 Súradnica X začiatku, 0-4
     * @param y1 Súradnica Y začiatku, 0-4
     * @param x2 Súradnica X konca, 0-4
     * @param y2 Súradnica Y konca, 0-4
     */
    //% block="line from x1 %x1 y1 %y1 to x2 %x2 y2 %y2"
    //% x1.min=0 x1.max=4 y1.min=0 y1.max=4
    //% x2.min=0 x2.max=4 y2.min=0 y2.max=4
    export function line(x1: number, y1: number, x2: number, y2: number): void {
        drawLineImplementation(x1, y1, x2, y2);
    }
}
