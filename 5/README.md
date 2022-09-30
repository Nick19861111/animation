# 重点总结

缓动：**速度**与距离成正比，离目标越近速度越快。

弹性：**加速度**与距离成正比，离目标越近，速度越小。

缓动的操作

1.确定运动系数

	private _easing:number = 0.2;//定义系数

2.确定目标点

	//舞台中央
	let targetX = cc.view.getFrameSize().width/2;
	let targetY = cc.view.getFrameSize().height/2;

3.计算距离

	let dx:number = node.x - targetX;
	let dy:number = node.y - targetY;

4.用距离乘以系数

	let vx = dx:easing;
	let vy = dy:esaing;

5.将向量加入到运动物体的坐标

	node.x += vx;
	node.y += vy;

完整的代码
	
	private _easing: number = 0.1;//定义系数

    private targetX: number = 0;//定义要去的点
    private targetY: number = 0;

    private _boxs = [];
    onLoad() {
        this._stageWidth = cc.view.getFrameSize().width;
        this._stageHeight = cc.view.getFrameSize().height;
        console.log("width = " + this._stageWidth);
        console.log("height = " + this._stageHeight);
        this._left = 0;
        this._top = this._stageHeight;//上边界
        this._right = this._stageWidth;
        this._bottom = 0;

        //定义终点坐标
        this.targetX = cc.view.getFrameSize().width / 2;
        this.targetY = cc.view.getFrameSize().height / 2;

    }

    update(dt: number) {
        //距离
        let dx = this.targetX - this.img.x;
        let dy = this.targetY - this.img.y;

        let vx = dx * this._easing;
        let vy = dy * this._easing;

        this.img.x += vx;
        this.img.y += vy;
    }


### 回弹

1.确定回弹系数

	private _easing:number = 0.2;//定义系数

2.设定目标计算距离，设置初始化速度

	private vxs: number = 2;
    private vys: number = 2;

	//定义终点坐标
    this.targetX = cc.view.getFrameSize().width / 2;
    this.targetY = cc.view.getFrameSize().height / 2;
	
	//距离
    let dx = this.targetX - this.img.x;
    let dy = this.targetY - this.img.y;
	
3.用距离乘以系数

	let vx = dx:easing;
	let vy = dy:esaing;

4.将加速度放到累加的速度上
	
	this.vxs += vx;
    this.vys += vy; 

5.移动需要移动的操作

	this.img.x += this.vxs;
    this.img.y += this.vys;

整个代码如下

	import { log } from "console";
	import util from "./util";
	
	const { ccclass, property } = cc._decorator;
	
	@ccclass
	export default class Helloworld extends cc.Component {

    @property(cc.Node)
    img: cc.Node = null;

    private _stageWidth: number = 0;
    private _stageHeight: number = 0;

    //设置好边界
    private _left: number = 0;   //左边界
    private _top: number = 0;   //左边界
    private _right: number = 0;   //左边界
    private _bottom: number = 0;   //左边界

    private vxs: number = 2;
    private vys: number = 2;

    private _easing: number = 0.01;//定义系数

    private targetX: number = 0;//定义要去的点
    private targetY: number = 0;


    private _boxs = [];
    onLoad() {
        this._stageWidth = cc.view.getFrameSize().width;
        this._stageHeight = cc.view.getFrameSize().height;
        console.log("width = " + this._stageWidth);
        console.log("height = " + this._stageHeight);
        this._left = 0;
        this._top = this._stageHeight;//上边界
        this._right = this._stageWidth;
        this._bottom = 0;

        //定义终点坐标
        this.targetX = cc.view.getFrameSize().width / 2;
        this.targetY = cc.view.getFrameSize().height / 2;

    }

    update(dt: number) {
        //距离
        let dx = this.targetX - this.img.x;
        let dy = this.targetY - this.img.y;

        let vx = dx * this._easing;
        let vy = dy * this._easing;

        this.vxs += vx;
        this.vys += vy; 

        this.img.x += this.vxs;
        this.img.y += this.vys;

    }

效果如下gif

![](https://github.com/Nick19861111/animation/blob/main/5/screenity.gif)


封装成函数
	
	private static speedx: number = 10;
	    private static speedy: number = 10;
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

二级弹性增加了一个摩擦力，表现就是运动一端时间就会停止
	
	this.vxs *= this.friction;
    this.vys *= this.friction;

封装成函数

	private static moca:number = 0.98;
	//二维弹性运动
    public static yiweitan(targetX: number, targetY: number, easing: number, node: cc.Node){
        let ax = (targetX - node.x) * easing;
        let ay = (targetY - node.y) * easing;

        this.speedx += ax;
        this.speedy += ay;

        this.speedx *= this.moca;
        this.speedy *= this.moca;

        node.x += this.speedx;
        node.y += this.speedy;
    }



