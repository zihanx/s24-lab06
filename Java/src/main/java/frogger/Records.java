package frogger;

import java.util.ArrayList;
import java.util.List;

/**
 * Refactor Task 2.
 *
 * @author Zishen Wen (F22), Deyuan Chen (S22)
 */
public class Records {
    // change it to a list of FroggerID
    // private final List<String[]> records;
    private final List<FroggerID> records;

    public Records() {
        this.records = new ArrayList<>();
    }


    // This is way too annoying!
    // /**
    //  * Adds a frogger's record.
    //  *
    //  * @param firstName   first name of the frogger
    //  * @param lastName    last name of the frogger
    //  * @param phoneNumber phone number of the frogger
    //  * @param zipCode     zip code of the frogger
    //  * @param state       state of the frogger
    //  * @param gender      gender of the frogger
    //  * @return Return false if the record has existed. Else, return true.
    //  */
    // public boolean addRecord(String firstName, String lastName, String phoneNumber,
    //                          String zipCode, String state, String gender) {
    //     for (String[] row : this.records) {
    //         if (row[0].equals(firstName)
    //                 && row[1].equals(lastName)
    //                 && row[2].equals(phoneNumber)
    //                 && row[3].equals(zipCode)
    //                 && row[4].equals(state)
    //                 && row[5].equals(gender)) {
    //             return false;
    //         }
    //     }
    //     this.records.add(
    //             new String[]{firstName, lastName, phoneNumber, zipCode, state, gender});
    //     return true;
    // }
    public boolean addRecord(FroggerID froggerID) {
        for (FroggerID id : records) {
            if (id.equals(froggerID)) {
                return false;
            }
        }
        this.records.add(froggerID);
        return true;
    }
}