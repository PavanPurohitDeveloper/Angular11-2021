export interface iArithmetic {

    Add(x: number, y: number): number;
    subtract(x: number, y: number): number;

}

export class Arthmetic implements iArithmetic {

    Add(x: number, y: number): number {
        return x + y;
    }

    subtract(x: number, y: number): number {
        return x - y;
    }
}