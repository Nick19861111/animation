# 基础三角函数

弧度 = 角度 * Math.pi / 180

角度 = 弧度 * 180 /Math.pi

1弧度 =  57.2958度

### 坐标系

cocos 使用的是opengl的坐标系，既是左下角为圆点

### 验证三角函数

	`console.log(Math.sin(30 * Math.PI / 180));//这里我们的都是用的弧度进行计算的`

    `let _x = dt - this.img.x;
     let _y = dt - this.img.y;
     let agren = Math.atan2(_y, _x);
     this.img.rotation = agren * 180 / Math.PI;`

一个物体方向一直朝着一个对象进行旋转

## 抽象一些函数出来
1.两个物体的，B一直跟随A的方法，这种可以做简单的跟踪效果，然后可以根据两个物体的位置小于某一个数据就不会继续跟踪，这个就是可以做简单的怪物的巡逻逻辑

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
     * @returns 
     */
    public radianToAngle(radian: number): number {
        return radian * Math.PI / 180;
    }

