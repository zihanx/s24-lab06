/**
 * Refactor Task 1.
 *
 * @author Zishen Wen (F22), Deyuan Chen (S22)
 */
class Road {
	private occupied: boolean[]

	constructor(occupied: boolean[]) {
		this.occupied = occupied;
	}

	public getOccupied(): boolean[] {
		return this.occupied;
	}
}

export { Road }