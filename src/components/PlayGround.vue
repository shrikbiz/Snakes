<template>
    <div>
        <v-row align="center" justify="center">
            <v-col>
                <h1>Score:{{ score }}</h1>
            </v-col>
        </v-row>
        <v-row
            v-for="col in playGroundSize"
            :key="col"
            :style="{
                minWidth: `${playGroundSize * sizeConstant}rem`,
                minHeight: `${sizeConstant}rem`,
                maxWidth: `${playGroundSize * sizeConstant}rem`,
                maxHeight: `${sizeConstant}rem`,
                width: `${playGroundSize * sizeConstant}rem`,
                height: `${sizeConstant}rem`,
                background: 'yellow',
            }"
        >
            <v-col
                v-for="row in playGroundSize"
                :key="row"
                :id="`cell-${row}-${col}`"
                :style="{
                    maxWidth: `${sizeConstant}rem`,
                    maxHeight: `${sizeConstant}rem`,
                    minWidth: `${sizeConstant}rem`,
                    minHeight: `${sizeConstant}rem`,
                    width: `${sizeConstant}rem`,
                    height: `${sizeConstant}rem`,
                    background: platGroundColor(row, col),
                    border: 'solid white 1px',
                    padding: '0 !important',
                }"
            >
                <!-- food -->
                <div
                    v-if="snakeRender(row, col)"
                    :id="`snake-${row}-${col}`"
                    :style="{
                        maxWidth: `calc(${sizeConstant}rem - 2px)`,
                        maxHeight: `calc(${sizeConstant}rem - 2px)`,
                        minWidth: `calc(${sizeConstant}rem - 2px)`,
                        minHeight: `calc(${sizeConstant}rem - 2px)`,
                        width: `calc(${sizeConstant}rem - 2px)`,
                        height: `calc(${sizeConstant}rem - 2px)`,
                        background: 'red',
                    }"
                ></div>
                <div
                    v-else-if="`cell-${row}-${col}` === food"
                    :style="{
                        maxWidth: `calc(${sizeConstant}rem - 2px)`,
                        maxHeight: `calc(${sizeConstant}rem - 2px)`,
                        minWidth: `calc(${sizeConstant}rem - 2px)`,
                        minHeight: `calc(${sizeConstant}rem - 2px)`,
                        width: `calc(${sizeConstant}rem - 2px)`,
                        height: `calc(${sizeConstant}rem - 2px)`,
                        background: 'yellow',
                    }"
                ></div>
            </v-col>
        </v-row>
        <v-row align="center" justify="center">
            <v-col>
                <v-btn @click="onStart">
                    <span v-if="!isStart">Start</span>
                    <span v-if="isStart">Pause</span>
                </v-btn>
            </v-col>
        </v-row>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Emit, Prop } from 'vue-property-decorator';
import { RandomFoodId } from '@/helper/index';

interface Node {
    row: number;
    col: number;
    next?: Node | null;
}

class LinkedList {
    head: Node;
    tail: Node;
    constructor(row: number = 5, col: number = 5) {
        this.head = this.tail = {
            row: row,
            col: col,
            next: null,
        };
    }
}

type Direction = 'up' | 'down' | 'left' | 'right';

@Component
export default class PlayGround extends Vue {
    playGroundSize: number = 10;
    sizeConstant: number = 3.5; //in rem
    acceptingKeys: Set<number> = new Set([37, 38, 39, 40]);
    snake = new LinkedList(3, 5);
    currentDirection: Direction = 'right';
    timer: any;
    isStart: boolean = false;
    food: string = RandomFoodId(this.playGroundSize);
    score: number = 0;
    isRemoveTail: boolean = true;
    oppositeDirection: Map<any, Direction> = new Map([
        ['left', 'right'],
        ['right', 'left'],
        ['up', 'down'],
        ['down', 'up'],
    ]);
    keyInfo: Map<number, Direction> = new Map([
        [37, 'left'],
        [39, 'right'],
        [38, 'up'],
        [40, 'down'],
    ]);

    //Set of cells on which snake is
    get snakePosition(): Set<string> {
        let position: Set<string> = new Set();
        let currentNode: any = this.snake.head;
        while (currentNode) {
            position.add(`cell-${currentNode.row}-${currentNode.col}`);
            currentNode = currentNode.next;
        }
        return position;
    }

    get hitWall(): boolean {
        let current = this.snake.head;
        return (
            current.row < 1 || current.row > this.playGroundSize || current.col > this.playGroundSize || current.col < 1
        );
    }

    platGroundColor(row: number, col: number): string {
        return (row + col) % 2 === 0 ? 'green' : 'darkGreen';
    }

    //LinkedList methods
    removeTail() {
        let current: any = this.snake.head;
        while (current.next) {
            if (current.next.next === null) {
                this.snake.tail = current;
                this.snake.tail.next = null;
                break;
            }
            current = current.next;
        }
    }

    addNode(node: Node) {
        let temp = this.snake.head;
        this.snake.head = node;
        this.snake.head.next = temp;
    }
    //LL methods ---End----

    get nextNode(): Node {
        let node: Node = {
            row: this.snake.head.row,
            col: this.snake.head.col,
        };
        if (this.currentDirection === 'left') --node.row;
        if (this.currentDirection === 'right') ++node.row;
        if (this.currentDirection === 'up') --node.col;
        if (this.currentDirection === 'down') ++node.col;
        return node;
    }

    mounted() {
        window.addEventListener('keydown', e => this.handleKeyDown(e));
    }

    snakeRender(row: number, col: number) {
        return this.snakePosition.has(`cell-${row}-${col}`);
    }

    //handle key events
    handleKeyDown({ keyCode }: any) {
        //checking if the key pressed is left(37) | right(39) | up(38) | down(40)
        if (this.acceptingKeys.has(keyCode)) {
            if (
                !(
                    this.oppositeDirection.get(this.keyInfo.get(keyCode)) === this.currentDirection &&
                    this.snakePosition.size > 1
                )
            )
                this.currentDirection =
                    keyCode === 37 ? 'left' : keyCode === 39 ? 'right' : keyCode === 38 ? 'up' : 'down';
        }
        if (keyCode === 32) this.onStart();
    }
    //handle key events -----End-----

    //setInterval based function
    moveSnake(): void {
        this.addNode(this.nextNode);
        if (this.isRemoveTail) this.removeTail();
    }
    onTick(): void {
        this.foodCheck();
        if (this.isEatingItSelf) this.restart();
        this.moveSnake();
        if (this.hitWall) this.restart();
        // this.giveSnakeBody();
        this.isRemoveTail = true;
    }

    giveSnakeBody() {
        let current: Node | null | undefined = this.snake.head;
        let counter = 0;
        let previous: Node | null | undefined = current;
        //edge case:
        //if size of snake is 1
        //if size of snake is 2
        while (current) {
            let cellId = `cell-${current.row}-${current.col}`;
            let bodyId = `snake-${current.row}-${current.col}`;
            // let cell: any = document.querySelector(`#${cellId}`);
            let body: any = document.querySelector(`#${bodyId}`);
            if (body) body.style.background = 'black';
            // let bodyId = document.querySelector(`#${currentId}`);
            // if (currentId === `snake-${this.snake.head.row}-${this.snake.head.row}`) {
            //     //head
            // } else if (currentId === `snake-${this.snake.tail.row}-${this.snake.tail.col}`) {
            //     //tail
            // } else {
            // }
            counter++;
            previous = current;
            current = current.next;
        }
    }

    get isEatingItSelf(): boolean {
        return this.snakePosition.has(`cell-${this.nextNode.row}-${this.nextNode.col}`);
    }

    restart() {
        this.snake.head = this.snake.tail = {
            row: 5,
            col: 5,
            next: null,
        };
        this.score = 0;
        this.onStart();
    }
    //setInterval based function ---End----

    //food & its position
    foodRender = (row: number, col: number): boolean => {
        return this.food === `cell-${row}-${col}`;
    };

    foodCheck() {
        //foodRender is not working for reason unknown
        let snakeHeadPos: string = `cell-${this.snake.head.row}-${this.snake.head.col}`;
        if (this.food === snakeHeadPos) {
            this.isRemoveTail = false;
            this.score++;
            this.food = RandomFoodId(this.playGroundSize);
            this.checkFoodNotOnSnake(snakeHeadPos);
        }
    }

    checkFoodNotOnSnake(snakeHeadPos: string): void {
        let failSafe = this.playGroundSize * this.playGroundSize;
        while (this.snakePosition.has(this.food) && failSafe > 0) {
            this.food = RandomFoodId(this.playGroundSize);
            failSafe--;
        }
    }
    //food & its position ----End----

    onStart() {
        this.isStart = !this.isStart;
        if (this.isStart) this.timer = setInterval(this.onTick, 300);
        else {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    /**
     head:
        border-all
        border: none => for:
            up=> down
            down=> up
            left=> right
            right=> left
    body:
        border-all
        border: non => for:
            prev:
                not have border in direction of its previous node
            next:
                not have border in direction of its previous node

    tail: inherit body border propertier
        next:
            no next available, so there should be a border


     */
}
</script>

<style scoped lang="scss">
* {
    font-family: Montserrat, sans-serif;
}
</style>
