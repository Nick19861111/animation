// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

import util from "./util";
/**
 * 怪物类
 */
@ccclass
export default class Master extends cc.Component {

    private _speed: number = 50;

    private ranrom: number = 0;

    private type: number = 0;

    @property(cc.Node)
    playNode: cc.Node = null;

    @property
    public x: number = 0;
    @property
    public y: number = 0;

    onLoad() {
        this.initPoint();
    }

    initPoint() {
        this.node.x = this.x;
        this.node.y = this.y;
    }

    update(dt) {
        util.test(this.playNode, this.node, 2);
    }
}
