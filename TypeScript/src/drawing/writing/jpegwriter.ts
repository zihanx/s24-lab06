import { Writer } from "./writer";

/**
 * Refactor Exercise 3: (Mis-)Shaped
 *
 * @author Zishen Wen (F22), Deyuan Chen (S22)
 */
class JPEGWriter implements Writer {
	// This is a stub class. Pretend this writer work.
	path: string;

	constructor(path: string) {
		this.path = path;
	}

	write(values: number[]) {
	}
}

export { JPEGWriter }