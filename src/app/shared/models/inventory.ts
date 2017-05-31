export class Inventory {

    type: string;
    name: string;
    color: string;
    quantity: number;
    cost: number;
    description: string;
    source: string;
    active: boolean;

    constructor(options?:
        {
            'type'?: string,
            'name'?: string,
            'color'?: string,
            'quantity'?: number,
            'cost'?: number,
            'description'?: string,
            'source'?: string,
            'active'?: boolean
        }) {
        this.type = options.type || '';
        this.name = options.name || '';
        this.color = options.color || '';
        this.quantity = +options.quantity || 0;
        this.cost = +options.cost || 0;
        this.description = options.description || '';
        this.source = options.source || '';
        this.active = !!options.active;
    }
}