const { ccclass, property } = cc._decorator;

@ccclass
export default class util extends cc.Component {

    private static angle: number = 0;    //初始化角度

    private static vx: number = 0;
    private static vy: number = 0;

    private _easing: number = 0.2;//定义缓动系数


    /**
     * A-B朝向
     * @param node1 第一个物体
     * @param node2 跟随物体
     */
    public static AtowardsB(node1: cc.Node, node2: cc.Node) {
        let _x = node1.x - node2.x;
        let _y = node1.y - node2.y;
        let agren = Math.atan2(_y, _x);
        node2.rotation = agren * 180 / Math.PI;
    }

    /**
     * @param angle 角度
     * @returns 角度转换弧度
     */
    public static angleToRadian(angle: number): number {
        return angle * 180 / Math.PI;
    }

    /**
     * @param radian 
     * @returns 弧度转角度
     */
    public static radianToAngle(radian: number): number {
        return radian * Math.PI / 180;
    }

    /**
     * @param node 来回的运动的函数 
     */
    public static userSinMoveDwon(node: cc.Node) {
        node.y = Math.sin(this.angle);
        this.angle += 0.2;
    }

    /**
     * 心跳动画
     */
    public static headerFun(node: cc.Node) {
        //心态的变化就是方法缩小
        node.scaleX = node.scaleY = 1 + Math.sin(this.angle) * 0.5;//其中0.5是缩放比
        this.angle += 0.2;
    }

    //双向的运动代码
    public static shuangXiang(node: cc.Node) {
        node.y = Math.sin(this.angle) * 5;
        node.x = Math.sin(this.angle) * 10
        this.angle += 0.2;
    }

    //圆周动画 顺时针
    public static circumference(node: cc.Node) {
        node.y = Math.sin(this.angle) * 10;
        node.x = Math.cos(this.angle) * 10
        this.angle += 0.2;
    }

    //逆时针
    public static uncircumference(node: cc.Node) {
        node.y = Math.sin(this.angle) * 10;
        node.x = Math.cos(this.angle) * 10
        this.angle -= 0.2;
    }

    /**
     * 计算两个点的之间的距离的
     * @param node1 
     * @param node2 
     */
    public static pointOpt(node1: cc.Node, node2: cc.Node) {
        let dx = node1.x - node2.x;
        let dy = node1.y - node2.y;
        let dist = Math.sqrt(dx * dx + dy * dy);
        return dist;
    }

    //第二章的函数编写

    //直线运动
    public static lineMove(node: cc.Node, type: number) {
        type == 1 ? node.x += 1 : node.x -= 1;
    }

    //两个轴上的运动
    public static TowLineMove(node1: cc.Node) {
        node1.x += 1;
        node1.y += 1;
    }

    //任意角度,速度移动
    public static angleNodeMove(node1: cc.Node, angle: number, speed: number) {
        let angleSpeed = angle * Math.PI / 180;
        let vx = Math.cos(angle) * speed;
        let vy = Math.sin(angle) * speed;
        node1.x += vx;
        node1.y += vy;
    }

    //跟随效果 a跟随b的效果，首先保证a是运动状态
    public static AMoveB(node1: cc.Node, node2: cc.Node, speed: number) {
        //计算角度
        let dx = node1.x - node2.x;
        let dy = node1.y - node2.y;
        let angle = Math.atan2(dy, dx);//计算角度
        node2.rotation = angle;     //旋转角度
        //移动
        let angleSpeed = angle * Math.PI / 180;
        let vx = Math.cos(angle) * speed;
        let vy = Math.sin(angle) * speed;
        node2.x += vx;
        node2.y += vy;
    }

    //单项加速度
    public static addMove(node1: cc.Node) {
        this.vx += 0.2;
        node1.x += this.vx;
    }

    //双加速
    public static dobleMove(node1: cc.Node) {
        this.vx += 0.2;
        this.vy += 0.2;
        node1.x += this.vx;
        node1.y += this.vy;
    }

    /**
     * 是否移动到边界 cocos creator的版本
     * @param node1 
     */
    public static checkMoveBoundary(node1: cc.Node) {
        let life = 0;
        let right = cc.view.getFrameSize().width;
        let top = cc.view.getFrameSize().height;
        let buttom = 0;

        if (node1.x < life || node1.x > right || node1.y > top || node1.y < buttom) {
            return true;
        }
        return false;
    }

    /**
     * 单轴旋绕的基础
     * if(this.img.x < 0){
            this.img.x = this._right + this.img.x;
        }else if(this.img.x > this._right){
            this.img.x = this._left - this.img.x;
        }
        if(this.img.y < 0){
            this.img.y = this._top - this.img.y;
        }
        else if(this.img.y > this._top){
            this.img.y = this._bottom + this.img.y;
        }
     */

    //回弹效果
    public static backMove(node: cc.Node): void {
        node.x += this.vx;
        if (node.x < 0) {
            this.vx *= -1;
        } else if (node.x > cc.view.getFrameSize().width) {
            this.vx *= -1;
        }
        if (node.y < 0) {
            this.vy *= -1;
        }
        else if (node.y > cc.view.getFrameSize().height) {
            this.vy *= -1;
        }
    }

    /**
     * 缓动动画系数操作
     * @param targetX 目标x坐标
     * @param targetY 目标y坐标
     * @param easing 系数
     * @param node 是谁进行移动的对象
     */
    public static easingMove(targetX: number, targetY: number, easing: number, node: cc.Node) {
        let dx = (targetX - node.x) * easing;
        let dy = (targetY - node.y) * easing;
        node.x += dx;
        node.y += dy;
    }


    private static speedx: number = 10;
    private static speedy: number = 10;
    private static moca: number = 0.98;
    /**
     * 回弹效果
     * @param targetX 
     * @param targetY 
     * @param easing 
     * @param node 
     */
    public static rebound(targetX: number, targetY: number, easing: number, node: cc.Node) {
        let dx = (targetX - node.x) * easing;
        let dy = (targetY - node.y) * easing;

        this.speedx += dx;
        this.speedy += dy;

        node.x += this.speedx;
        node.y += this.speedy;
    }

    //二维弹性运动
    public static yiweitan(targetX: number, targetY: number, easing: number, node: cc.Node) {
        let ax = (targetX - node.x) * easing;
        let ay = (targetY - node.y) * easing;

        this.speedx += ax;
        this.speedy += ay;

        this.speedx *= this.moca;
        this.speedy *= this.moca;

        node.x += this.speedx;
        node.y += this.speedy;
    }

    //单体的圆周运动效果函数
    public static circular(node: cc.Node, targetX: number, targetY: number, angle: number) {
        //算距离
        let x1 = node.x - targetX;
        let y1 = node.y - targetY;
        //旋转
        let x2 = Math.cos(angle) * x1 - Math.sin(angle) * y1;
        let y2 = Math.cos(angle) * y1 + Math.sin(angle) * x1;
        //使用操作
        node.x = cc.view.getFrameSize().width/2 + x2;
        node.y = cc.view.getFrameSize().height/2 + y2;
    }

    //单向的增加物体质量的操作
}
