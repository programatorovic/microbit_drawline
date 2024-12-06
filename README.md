# Draw Line Extension

This MakeCode extension provides a simple way to draw lines on the micro:bit LED matrix using the Bresenham algorithm.

## Features
- Draws a line between two points on the 5x5 LED matrix.
- Accepts input as numbers, variables, or sensor data.

## How to Use
1. Add the **"Draw Line"** category to your MakeCode project by including this extension.
2. Use the `line from x1 y1 to x2 y2` block to draw a line between two points.

## Example
```blocks
drawLine.line(0, 0, 4, 4)
