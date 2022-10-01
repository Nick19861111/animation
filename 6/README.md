# 重点总结

圆周运动的公式

	x1 = cos(angle) * x - sin(angle) * y;
	y1 = cos(angle) * y + sin(angle) * x;

具体的操作
	
	//1.计算你要花园的一个距离，x1，y1，是具体点的位置
	let x1: number = this.img.x - this._stageWidth / 2;
    let y1: number = this.img.y - this._stageHeight / 2;
	//2.其中Math.cos(angle) angle是一个速度
    let x2: number = Math.cos(0.1) * x1 - Math.sin(0.1) * y1;
    let y2: number = Math.cos(0.1) * y1 + Math.sin(0.1) * x1;
    this.img.x = this._stageWidth / 2 + x2;
    this.img.y = this._stageHeight / 2 + y2;

封装成函数
	
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

