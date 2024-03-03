import { Cell } from "./Cell";
import { Damage } from "./marks/Damage";
import { Miss } from "./marks/Miss";
import { Ship } from "./marks/Ship";

export class Board {
    cells = [];

    initCells() {
        for (let y = 0; y < 10; y++) {
            const row =[]
           for (let x = 0; x < 10; x++) {
            row.push(new Cell(this, x, y, null))
           }
           this.cells.push(row)
            
        }
    }
    getCopyBoard() {
        const newBoard = new Board();
        newBoard.cells = this.cells
        return newBoard;
    }

    getCells(x, y) {
        return this.cells[y][x]
    }

    addShip(x,y) {
        new Ship(this.getCells(x,y))
    }
    addMiss(x,y) {
        new Miss(this.getCells(x,y))
    }
    addDamage(x,y){
        new Damage(this.getCells(x,y))
    }
}