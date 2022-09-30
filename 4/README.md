# 重点总结

## 设置边界

Cocos Creator 获得舞台大小的几种方式

- canvas尺寸：cc.view.getCanvasSize();
- 可见区域尺寸：cc.view.getVisubeSize();
- 设计分辨率大小:cc.view.getDesignResolutionSize();
- 屏幕的尺寸:cc.view.getFrameSize();

我时使用的是最后的一个获得屏幕的尺寸大小

    let left:number = 0;//左边为0
	let right:number = cc.view.getFrameSize().width;//屏幕的宽度
	let top:number = cc.view.getFrameSize().height;
	let buttom:number = 0;
	//对象在移动到外面以后的判断核心
	if(node.x > right){
		//todo
	}else if(node.x < 0){
		//todo
	}
	if(node.y > top){
		//todo
	}else if(node.y < 0){
		//todo
	}

如果超出了边界我们的处理方式

- 将对象移除
- 重置对象（重置把坐标放到初始点）
- 将同一个放置在不同的对象
- 反弹回去

将对象移除

	this.img.x += 1;
    this.img.y += 1;
    //方案就是只要超出边界就会移除 || this.img.y < 0 || this.img.x > this._top
    if (this.img.x < this._left || this.img.x > this._right || this.img.y < this._bottom || this.img.y > this._top) {
        //已经被删除
        if (this.img) {
            this.img.removeFromParent();
            this.img = null;
        }
    }
	


## 缓冲