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

	onLoad() {
        this._stageWidth = cc.view.getFrameSize().width;
        this._stageHeight = cc.view.getFrameSize().height;
        console.log("width = " + this._stageWidth);
        console.log("height = " + this._stageHeight);
        this._left = 0;
        this._top = this._stageHeight;//上边界
        this._right = this._stageWidth;
        this._bottom = 0;
    }
	
	update(dt: number) {
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
    }

### 重置

重新对物体进行设置属性。

	this.img.x += 1;
    this.img.y += 1;
    //方案就是只要超出边界就会移除 || this.img.y < 0 || this.img.x > this._top
    if (this.img.x < this._left || this.img.x > this._right || this.img.y < this._bottom || this.img.y > this._top) {
        //已经被删除
        if (this.img) {
            this.img.x = 0;
            this.img.y = 0;
        }
    }

其中this.img.x = 0这一段就是对物体的重新设置，这样做可以减小删除带来的消耗，特别是东西变多的时候。

### 环绕

这个理念理解起来和重置是一样的，不过是方向不一样，一个是重新定义x，y，一个是对其方向有所改变，具体的构思就是从左边出界那么我们就从右边的屏幕中出现设置他的位置，这样就让人感觉是出去了又从反面进来的意思。

	if(this.img.x < 0){
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

### 回弹

核心就是利用速度的反方向，比如你一开始是正向的速度，碰到边界以后就反向的速度，这样就可以制作出回弹的效果。

	if (this.img.x < 0) {
            this.vx *= -1;
    } else if (this.img.x > this._right) {
        this.vx *= -1;
    }
    if (this.img.y < 0) {
        this.vy *= -1;
    }
    else if (this.img.y > this._top) {
        this.vy *= -1;
    }

## 缓冲

### 摩擦力

向相反的方向的力

	update(dt: number) {
        this.vx *= 0.9;
        this.img.x += this.vx;
    }

这里面可以看成一个简单的缓动的一个简单的效果，核心就是增量有一定的减少产生的效果。