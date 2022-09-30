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




