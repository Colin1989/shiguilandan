export class Dot {
  id: number

  /**
   * 1-传送
   * 2-障碍
   * 3-宝箱
   * 4-~~阶梯~~弃用，留空位以后其他用途
   * 5-开关
   * 6-大风
   * 7-路人
   * 8-大牛
   * 9-义工
   * 10-商店
   * 11-医生
   * 12-道士
   * 13-英雄
   * 14-客栈
   * 15-妖兽区域
   */
  type: number

  x: number

  y: number

  /**标记数值修改过，需要更新，因为数据以json格式保存，所以简写 */
  r: number
}