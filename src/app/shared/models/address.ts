export class address {
    address1: string;
    address2: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    associatedId: string[];
    constructor(options?: {
        address1?: string,
        address2?: string,
        city?: string,
        state?: string,
        postalCode?: string,
        country?: string,
        associatedId?: string[],
    }) {
        this.address1 = options.address1 || '';
        this.address2 = options.address2 || '';
        this.city = options.city || '';
        this.state = options.state || '';
        this.postalCode = options.postalCode || '';
        this.country = options.country || '';
        this.associatedId = options.associatedId || [];
    }
}