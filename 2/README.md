# 重点

## 速度向量
带方向并且有速度向量，叫做速度向量

## 匀速运动

一个轴上的运动，比如x轴
    
	//直线运动
    public static lineMove(node: cc.Node) {
        node.x += 1;
    }

两个线上的运动
    
	//两个轴上的运动
    public static TowLineMove(node1: cc.Node) {
        node1.x += 1;
        node1.y += 1;
    }

任意角度移动，上一节讲了任何角度的跟踪效果，今天只是加了一个简单移动效果，这样我们就可以做跟踪效果了。

	//任意角度,速度移动
    public static angleNodeMove(node1: cc.Node, angle: number, speed: number) {
        let angleSpeed = angle * Math.PI / 180;
        let vx = Math.cos(angle) * speed;
        let vy = Math.sin(angle) * speed;
        node1.x += vx;
        node1.y += vy;
    }

跟随效果代码

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