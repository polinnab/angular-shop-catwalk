export interface Good {
    id: string;
    name: string;
    image: {
        thumb: string[],
        origin: string[]
    };
    price: string;
    description: string;
    mainCategory: string;
    subCategory: string;
    size: string[];
    color: string[];
    new: boolean;
    sale: boolean;
    bestseller: boolean
};

export interface Blog {
    id: number;
    name: string;
    date: string;
    text: string;
    subcategory: string;
    image: {
        thumb: string,
        origin: string
    }
}

export interface ByCategory {
    id: number;
    nameofcategory: string;
    text: string;
    subCategory: string;
    image: string
}

export interface Discount {
    id: number;
    price: number;
    image: string
}