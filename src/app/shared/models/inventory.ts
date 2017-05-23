export class Inventory {

    type: string;
    name: string;
    color: string;
    quantity: number;
    cost: number;

    constructor(options?: { 'type'?: string, 'name'?: string, 'color'?: string, 'quantity'?: number, 'cost'?: number }) {
        this.type = options.type || '';
        this.name = options.name || '';
        this.color = options.color || '';
        this.quantity = +options.quantity || 0;
        this.cost = +options.cost || 0;
    }
}