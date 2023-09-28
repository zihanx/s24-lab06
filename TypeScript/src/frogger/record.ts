/**
 * Refactor Task 2.
 *
 * @author Zishen Wen (F22), Deyuan Chen (S22)
 */
class Records {
    private records: string[][];

    constructor() {
        this.records = [];
    }

	/**
     * Adds a person's record.
     *
     * @param firstName   first name of the person
     * @param lastName    last name of the person
     * @param phoneNumber phone number of the person
     * @param zipCode     zip code of the person
     * @param state       state of the person
     * @param gender      gender of the person
     * @return Return false if the record has existed. Else, return true.
     */
    public addRecord(firstName: string, lastName: string, phoneNumber: string,
                             zipCode: string, state: string, gender: string) {
        for (let row of this.records) {
            if (row[0] === firstName
                    && row[1] === lastName
                    && row[2] === phoneNumber
                    && row[3] === zipCode
                    && row[4] === state
                    && row[5] === gender) {
                return false;
            }
        }
        this.records.push([firstName, lastName, phoneNumber, zipCode, state, gender]);
        return true;
    }
}