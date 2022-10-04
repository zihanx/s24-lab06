/**
 * Refactor Exercise 2: Account
 *
 * @author Zishen Wen (F22), Deyuan Chen (S22)
 */
abstract class PaymentAccount {
	// TODO: Can we extract these fields to Object? (Data Clumps)
	private accountName: string;
	private accountNumber: number;

	constructor(accountName: string, accountNumber: number) {
		this.accountName = accountName;
		this.accountNumber = accountNumber;
	}

	public abstract pay(amount: number): boolean;

	public getAccountName(): string {
		return this.accountName;
	}

	public getAccountNumber(): number {
		return this.accountNumber;
	}
}

export { PaymentAccount }