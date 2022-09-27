# 基础三角函数

弧度 = 角度 * Math.pi / 180

角度 = 弧度 * 180 /Math.pi

1弧度 =  57.2958度

###坐标系

cocos 使用的是opengl的坐标系，既是左下角为圆点

###验证三角函数

	`console.log(Math.sin(30 * Math.PI / 180));//这里我们的都是用的弧度进行计算的`

    `let _x = dt - this.img.x;
     let _y = dt - this.img.y;
     let agren = Math.atan2(_y, _x);
     this.img.rotation = agren * 180 / Math.PI;`

一个物体方向一直朝着一个对象进行旋转