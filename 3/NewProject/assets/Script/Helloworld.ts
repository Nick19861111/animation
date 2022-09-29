import util from "./util";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    private angle: number = 0;

    // private vx: number = 0;
    @property(cc.Node)
    img: cc.Node = null;

    @property(cc.Node)
    matser: cc.Node = null;

    start() {
        // console.log(Math.sin(30 * Math.PI / 180));//这里我们的都是用的弧度进行计算的
    }

    update(dt: number) {
        let dts = util.pointOpt(this.img, this.matser);
        if (dts < 200) {
            util.lineMove(this.img, 1);
        } else {
            util.lineMove(this.img, 2);
        }
    }
}
