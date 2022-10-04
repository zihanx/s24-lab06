import { Shape } from "./shapes/shape";
import { Writer } from "./writing/writer";
import { JPEGWriter } from "./writing/jpegwriter";
import { PNGWriter } from "./writing/pngwriter";
import { Line } from "./shapes/line";

class Drawing {

	// TODO: what is the problem of a having modifiable public filed?
    public shapes: Shape[];

    constructor(shapes: Shape[]) {
        this.shapes = shapes;
    }

	/**
     * Draw shapes to a file with given file format.
     * @param format file format
     * @param filename file name
     */
    public draw(format: string, filename: string): void {
        if (format === "jpeg") {
			// TODO: Do you notice code duplication here?
            try {
                let writer: Writer = new JPEGWriter(filename + ".png")
                for (let shape of this.shapes) {
					// TODO: What is the issue of the behavior here?
                    let lines: Line[] = shape.toLines();
                    shape.draw(writer, lines);
                }
            } catch (e) {
                console.log(e);
            }
        }
        else if (format === "png") {
            try {
                let writer: Writer = new PNGWriter(filename + ".png")
                for (let shape of this.shapes) {
                    let lines: Line[] = shape.toLines();
                    shape.draw(writer, lines);
                }
            } catch (e) {
                console.log(e);
            }
        }
    }
}

