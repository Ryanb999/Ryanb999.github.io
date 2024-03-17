declare class TypeIt {
    constructor(element: string | HTMLElement, options: TypeIt.Options);
}

declare namespace TypeIt {
    interface Options {
        strings: string[];
        breakLines?: boolean;
        nextStringDelay?: number;
        startDelay?: number;
        // Add any other options you're using
    }
}