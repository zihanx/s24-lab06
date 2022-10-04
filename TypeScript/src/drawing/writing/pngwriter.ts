import { Writer } from "./writer";

/**
 * Refactor Exercise 3: (Mis-)Shaped
 *
 * @author Zishen Wen (F22), Deyuan Chen (S22)
 */
class PNGWriter implements Writer {
	path: string;

	constructor(path: string) {
		this.path = path;
	}
	// This is a stub class. Pretend this writer work.
	write(values: number[]) {
		// TODO: Stub. Pretend it is complete.
	}
}

export { PNGWriter }