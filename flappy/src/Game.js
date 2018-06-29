import React from 'react';
import Grid from "./Grid";

export default class Game extends React.Component {

    cellColor = "red";
    birdColor = "yellow";
    towerColor = "blue";
    xCell = 30;
    yCell = 20;
    delay = 300;
    birdDefaultHeight = 10;
    birdDefaultPosition = 4;

    constructor(props) {
        super(props)

        var grid = this.initGrid();
        var bird = this.initBird();

        var towers = [
            { position: 3, height: 5, upright: false },
            { position: 7, height: 8, upright: true },
            { position: 10, height: 6, upright: false },
            { position: 14, height: 7, upright: true },
            { position: 18, height: 5, upright: false },
            { position: 22, height: 6, upright: true },
            { position: 26, height: 10, upright: false },
            { position: 29, height: 2, upright: true },
        ]

        this.state = {
            grid: grid,
            bird: bird,
            towers: towers,
            crashed: false,
            score: 0
        }

        grid = this.moveBirdOnGrid(grid, bird);

        this.startGame();    
    }

    updateGame() {
        let birdCopy = this.state.bird;
        let gridCopy = this.initGrid();
        let towersCopy = this.state.towers.slice();
        let crashed = this.state.crashed;
        if (crashed) {
            clearInterval(this.timerID);
            return;
        }

        this.updateBirdPositon(birdCopy);
        this.moveTowersOnGrid(towersCopy, gridCopy)
        
        let collision = this.moveBirdOnGrid(gridCopy, birdCopy);
        if (collision) {
            birdCopy = this.initBird();
            crashed = true;
        }

        this.setState((prev, props) => {
            return {
                grid: gridCopy,
                bird: birdCopy,
                towers: towersCopy,
                crashed: crashed,
                score: prev.score + 1
            }
        })
    }

    initGrid() {
        var grid = [];
        for (let i = 0; i < this.yCell; i++) {
            grid.push(new Array(this.xCell).fill(this.cellColor));
        }
        return grid;
    }

    initBird() {
        return {
            height: this.birdDefaultHeight,
            position: this.birdDefaultPosition
        }
    }

    updateBirdPositon(birdCopy) {
        birdCopy.height++;        
        if (birdCopy.height >= this.yCell) {
            birdCopy.height = this.yCell - 1;
            this.crashed = true;
        }
        else if (birdCopy.height < 0) {
            birdCopy.height = 0;
            this.crashed = true;
        }
    }

    updateTowersPosistion(towersCopy) {
        for (let i = 0; i < towersCopy.length; i++) {
            towersCopy[i].position--;
            if (towersCopy[i].position < 0) {
                towersCopy[i].position = this.xCell - 1;
                towersCopy[i].height = Math.floor(Math.random() * 7) + 3;
            }
        }
    }

    moveTowersOnGrid(towersCopy, gridCopy){

        this.updateTowersPosistion(towersCopy);

        for (let i = 0; i < towersCopy.length; i++) {
            for (let j = 0; j < towersCopy[i].height; j++) {
                if (towersCopy[i].upright)
                    gridCopy[this.yCell - j - 1][towersCopy[i].position] = this.towerColor;
                else
                    gridCopy[j][towersCopy[i].position] = this.towerColor;
            }
        }
    }

    moveBirdOnGrid(grid, bird) {
        let collision = false;
        if (grid[bird.height][bird.position + 1] === this.towerColor) {
            collision = true;
        }
        
        grid[bird.height][bird.position] = this.birdColor;
        return collision;
    }

    handleKeyDown = (e) => {        
        if (e.key === "ArrowUp") {
            var birdCopy = this.state.bird;
            birdCopy.height -= 2;
            this.setState({
                bird: birdCopy
            })
        }            
    }

    startGame = () => {
        this.timerID = setInterval(() => {
            this.updateGame()
        }, this.delay);

        this.setState({
            crashed: false,
            score: 0
        })
    }

    render() {
        return (
            <div tabIndex="0" onKeyDown={this.handleKeyDown}>
                <Grid grid={this.state.grid} />
                <div>Score: {this.state.score}</div>
                <div>
                {this.state.crashed ? <button onClick={this.startGame}>Restart Game</button> : null}
                </div>
            </div>
        )
    }
}