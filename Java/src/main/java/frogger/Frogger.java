package frogger;

/**
 * Refactor Task 1 & 2: Frogger
 *
 * @author Zishen Wen (F22), Deyuan Chen (S22), Duan Liang (F23)
 */
public class Frogger {

    // Field for task 1.
    private final Road road;
    private int position;
    
    // Field for task 2. Anything to add?
    private final Records records;
    private String firstName, lastName, phoneNumber, zipCode, state, gender;

    // We won't pass in all the identity strings above to avoid messy code. Can we pass in something else..?
    public Frogger(Road road, int position, Records records) {
        this.road = road;
        this.position = position;
        this.records = records;
    }

    /**
     * Moves Frogger.
     *
     * @param forward true is move forward, else false.
     * @return true if move successful, else false.
     */
    public boolean move(boolean forward) {
        int nextPosition = this.position + (forward ? 1 : -1);
        if (!isValid(nextPosition) || isOccupied(nextPosition)) {
            return false;
        }
        this.position = nextPosition;
        return true;
    }

    // TODO: Do you notice any issues here?
    public boolean isOccupied(int position) {
        boolean[] occupied = this.road.getOccupied();
        return occupied[position];
    }
    
    public boolean isValid(int position) {
        if (position < 0) return false;
        boolean[] occupied = this.road.getOccupied();
        return position < occupied.length;
    }

    /**
     * Records Frogger to the list of records.
     * 
     * @return true if record successful, else false.
     */
    public boolean recordMyself() {
      boolean success = records.addRecord(firstName, lastName, phoneNumber, zipCode, state, gender);
      return success;
    }

}
