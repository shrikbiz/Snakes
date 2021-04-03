<template>
    <div>
        <v-row align="center" justify="center">
            <v-col>
                <h1>Score:</h1>
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
                :id="`cell-${col}-${row}`"
                :style="{
                    maxWidth: `${sizeConstant}rem`,
                    maxHeight: `${sizeConstant}rem`,
                    minWidth: `${sizeConstant}rem`,
                    minHeight: `${sizeConstant}rem`,
                    width: `${sizeConstant}rem`,
                    height: `${sizeConstant}rem`,
                    background: 'green',
                    border: 'solid white 1px',
                    padding: '0 !important',
                }"
            >
                <div
                    v-if="shouldSnakeShow(row, col)"
                    :style="{
                        maxWidth: `calc(${sizeConstant}rem - 2px)`,
                        maxHeight: `calc(${sizeConstant}rem - 2px)`,
                        minWidth: `calc(${sizeConstant}rem - 2px)`,
                        minHeight: `calc(${sizeConstant}rem - 2px)`,
                        width: `calc(${sizeConstant}rem - 2px)`,
                        height: `calc(${sizeConstant}rem - 2px)`,
                        background: 'red',
                    }"
                >
                    {{ row + ',' + col }}
                </div>
                <span v-else>{{ row + ',' + col }}</span>
            </v-col>
        </v-row>
        <v-row align="center" justify="center">
            <v-col>
                <v-btn @click="onStart">Start</v-btn>
            </v-col>
        </v-row>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Emit, Prop } from 'vue-property-decorator';
import { directive } from 'vue/types/umd';

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
    acceptingKeys = new Set([37, 38, 39, 40]);
    snake = new LinkedList(3, 5);
    currentDirection: Direction = 'right';
    timer: any;
    isStart: boolean = false;

    get snakePosition(): any {
        let position: any = new Set();
        let currentNode: any = this.snake.head;
        while (currentNode) {
            position.add(`cel-${currentNode.row}-${currentNode.col}`);
            currentNode = currentNode.next;
        }
        return position;
    }
    get isOutOfGround(): boolean {
        let current = this.snake.head;
        return (
            current.row < 1 || current.row > this.playGroundSize || current.col > this.playGroundSize || current.col < 1
        );
    }

    //LinkedList methods
    removeTail() {
        let current: any = this.snake.head;
        while (current.next) {
            if (current.next.next === null) {
                this.snake.tail = current;
                this.snake.tail.next = null;
                console.log(this.snake.tail);
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

    handleEatingFood() {
        this.addNode(this.nextNode);
    }

    beforeMount() {
        for (let i = 0; i < 6; i++) {
            this.addNode(this.nextNode);
        }
    }

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

    shouldSnakeShow(row: number, col: number) {
        return this.snakePosition.has(`cel-${row}-${col}`);
    }

    //handle key events
    handleKeyDown(e: any) {
        //checking if the key pressed is left(37) | right(39) | up(38) | down(40)
        if (this.acceptingKeys.has(e.keyCode))
            this.currentDirection =
                e.keyCode === 37 ? 'left' : e.keyCode === 39 ? 'right' : e.keyCode === 38 ? 'up' : 'down';
    }
    //handle key events -----End-----

    //setInterval based function
    moveSnake(node: Node) {
        this.addNode(node);
        this.removeTail();
    }
    onTick(): void {
        this.moveSnake(this.nextNode);
        if (this.isOutOfGround)
            this.snake.head = this.snake.tail = {
                row: 5,
                col: 5,
                next: null,
            };
    }
    //setInterval based function ---End----

    onStart() {
        this.isStart = !this.isStart;
        if (this.isStart) this.timer = setInterval(this.onTick, 500);
        else {
            clearInterval(this.timer);
            this.timer = null;
        }
    }
}
</script>

<style scoped lang="scss">
* {
    font-family: Montserrat, sans-serif;
}
</style>
