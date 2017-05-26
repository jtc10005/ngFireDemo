export class Person {
    firstName: string;
    lastName: string;
    email: string;

    constructor(options?: { 'fn': string, 'ln': string, 'email': string }) {
        this.firstName = options.fn || '';
        this.lastName = options.ln || '';
        this.email = options.email || '';
    }
}