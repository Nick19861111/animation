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