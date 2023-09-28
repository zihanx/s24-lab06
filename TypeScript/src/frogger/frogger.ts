import { Road } from "./road";

/**
 * Refactor Task 1, 2: Frogger
 *
 * @author Zishen Wen (F22), Deyuan Chen (S22), Duan Liang (F23)
 */
class Frogger {

  // Field for Task 1.
	private road: Road;
  private position: number;

  // Field for Task 2. Anything to add?
  private records: Records;
  private firstName: string; 
  private lastName: string; 
  private phoneNumber: string;
  private zipCode: string;
  private state: string;
  private gender: string;
  
  constructor(road: Road, position: number, records: Records, firstName: string, 
    lastName: string, phoneNumber: string, zipCode: string, state: string, gender: string) {
      this.road = road;
      this.position = position;
      this.records = records;
      this.firstName = firstName;
      this.lastName = lastName;
      this.phoneNumber = phoneNumber;
      this.zipCode = zipCode;
      this.state = state;
      this.gender = gender;
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

	// TODO: Do you notice any issues here?
  public isOccupied(position: number): boolean {
      let occupied: boolean[] = this.road.getOccupied();
      return occupied[position];
  }

  public isValid(position: number): boolean {
      if (position < 0) return false;
      let occupied: boolean[] = this.road.getOccupied();
      return position < occupied.length;
  }

  /**
   * Records Frogger to the list of records.
   * 
   * @returns true if record successful, else false.
   */
  public recordMyself(): boolean {
    // This is an annoying call...
    let success: boolean = this.records.addRecord(this.firstName, this.lastName, this.phoneNumber, this.zipCode, this.state, this.gender)
    return success
  }
}