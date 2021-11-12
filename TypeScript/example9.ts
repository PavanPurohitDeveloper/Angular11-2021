export interface IArithmetic {

    Add(x: number, y: number): number;
    subtract(x: number, y: number): number;

}

export class Arthmetic implements IArithmetic {

    Add(x: number, y: number): number {
        return x + y;
    }

    subtract(x: number, y: number): number {
        return x - y;
    }
}

//let obj: IArithmetic = new Arthmetic();
//console.log(obj.Add(100, 200));
//console.log(obj.subtract(100, 50));

//tsc example9.ts
//node example.js