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






