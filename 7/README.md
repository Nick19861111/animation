# 重点总结

## 理论

### 质量

普遍认为地球上重量就是质量。

### 质量会影响的参数

质量越大，这个物体就越难移动，也不容易改变其本身的运动（减慢，加速，改变方向）

### 动量

动量是有物体的质量和速度构成。关系是相乘的关系。p = m * v

### 动量守恒

在系统中，碰撞前的动量总和与碰撞后的动量总和相等。

## 实践

单轴上的动量守恒

1.创建动态的box的类，对其增加一个属性mass（质量）

	const {ccclass, property} = cc._decorator;

	@ccclass
	export default class Box extends cc.Component {
	    
	    //属性
	    @property(Number)
	    vx:number = 0;
	
	    @property(Number)
	    vy:number = 0;
	
	    //新增加质量
	    @property(Number)
	    mass:number = 0;
	
	    onLoad () {
	
	    }
	
	    public getMass(){
	        return this.mass;
	    }
	
	    public setMass(mass:number){
	        this.mass = mass;
	    }
	
	    public getVx(){
	        return this.vx;
	    }
	
	    public setVx(value:number) {
	        this.vx = value;
	    }
	
	    //运动的轨迹
	    update (dt) {
	        this.node.x += this.vx;
	    }
	}

然后根据公式

![](https://github.com/Nick19861111/animation/tree/main/7/1.jpg)

	import { log } from "console";
	import Box from "./Box";
	import HighVolPrintCenter from "./factory/HighVolPrintCenter";
	import LowVolPrintCenter from "./factory/LowVolPrintCenter";
	import PrintCenter from "./factory/PrintCenter";
	import Human from "./Huamn";
	import Master from "./Master";
	import util from "./util";
	
	const { ccclass, property } = cc._decorator;
	
	@ccclass
	export default class Helloworld extends cc.Component {
	
	    @property(cc.Node)
	    box1: cc.Node = null;
	
	    @property(cc.Node)
	    box2: cc.Node = null;
	
	    private _currBox1 = null;
	    private _currBox2 = null;
	
	    onLoad() {
	        this._currBox1 = this.box1.getComponent("Box");
	        this._currBox2 = this.box1.getComponent("Box");
	    }
	
	    update(dt: number) {
	        let dx = this.box1.x - this.box2.x;
	        if (Math.abs(dx) < this.box1.width / 2 + this.box2.width / 2) {
	            let vxF = (this._currBox1.getMass() - this._currBox2.getMass()) * this._currBox1.getVx() + 2 * this._currBox2.getMass() * this._currBox1.getVx()
	                 / (this._currBox2.getMass() + this._currBox2.getVx());
	            let vxF1 = (this._currBox2.getMass() - this._currBox1.getMass()) * this._currBox2.getVx() + 2 * this._currBox1.getMass() * this._currBox2.getVx() 
	                / (this._currBox1.getMass() * this._currBox1.getVx())
	            
	            //代码
	            this._currBox1.setVx(vxF);
	            this._currBox2.setVx(vxF1);
	            this.box1.x += this._currBox1.getVx();
	            this.box2.x += this._currBox2.getVx();
	        }
	    }
	}

