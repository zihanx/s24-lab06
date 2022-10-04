import { Road } from "./road";

/**
 * Refactor Exercise 4: Frogger
 *
 * @author Zishen Wen (F22), Deyuan Chen (S22)
 */
class Frogger {
	private road: Road;
    private position: number;

    constructor(road: Road, position: number) {
        this.road = road;
        this.position = position;
    }

	/**
     * Moves Frogger.
     * @param forward true is move forward, else false.
     * @return true if move successful, else false.
     */
    public move(forward: boolean): boolean {
        let nextPosition: number = this.position + (forward ? 1 : -1);
        if (!this.isValid(nextPosition) || this.isOccupied(nextPosition)) {
            return false;
        }
        this.position = nextPosition;
        return true;
    }

	// TODO: Do you notice any issues of here?
    public isOccupied(position: number): boolean {
        let occupied: boolean[] = this.road.getOccupied();
        return occupied[position];
    }

    public isValid(position: number): boolean {
        if (position < 0) return false;
        let occupied: boolean[] = this.road.getOccupied();
        return position < occupied.length;
    }
}