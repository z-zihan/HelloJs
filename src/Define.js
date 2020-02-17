/**
 * 自定义函数名：prefixZero
 * @param number： 被操作数
 * @param n： 固定的总位数
 */
function prefixZero (number, n) {
    return (Array(n).join(0) + number).slice(-n);
}

/**
 * 自定义函数名：createFrameAnimationByName
 * @param name： 图片名
 * @param number： 帧数
 * @param node： 对象
 * @param time： 每帧时间间隔
 * @param order： 播放次序 正序：true 倒叙：false
 * @param repeat： 循环次数
 * @param restore： 是否回到第一帧 回：true 不回：false
 */
function createFrameAnimationByName (name, number, node, time, order, repeat, restore) {
    cc.log("createFrameAnimationByName: " + name);
    let frames = [];
    if (order) { // 正序
        for (let i = 1; i <= number ; i++) {
            let string = name + prefixZero(i, 4) + ".png";
            let frame = cc.spriteFrameCache.getSpriteFrame(string);
            frames.push(frame);
        }
    }else { // 倒序
        for (let i = number; i > 0 ; i--) {
            let string = name + prefixZero(i, 4) + ".png";
            let frame = cc.spriteFrameCache.getSpriteFrame(string);
            frames.push(frame);
        }
    }

    let animation = new cc.Animation(frames, time);
    animation.setRestoreOriginalFrame(restore); // 播放完后回到第一帧
    let animate = new cc.Animate(animation);
    if (repeat == 0) { // 无限循环
        node.runAction(animate.repeatForever());
    }else { // 循环 repeat 次
        node.runAction(animate.repeat(repeat));
    }
}

/**
 * 自定义函数名：createFrameAnimationByFile
 * @param file： 图片路径
 * @param number： 帧数
 * @param node： 对象
 * @param time： 每帧时间间隔
 * @param order： 播放次序 正序：true 倒叙：false
 * @param repeat： 循环次数
 * @param restore： 是否回到第一帧 回：true 不回：false
 */
function createFrameAnimationByFile (file, number, node, time, order, repeat, restore) {
    cc.log("createFrameAnimationByFile: " + file);
    let animation = new cc.Animation();

    if (order) { // 正序
        for (let i = 1; i <= number; i++) {
            let string = file + prefixZero(i, 4) + ".png";
            animation.addSpriteFrameWithFile(string);
        }
    }else { // 倒序
        for (let i = number; i > 0; i--) {
            let string = file + prefixZero(i, 4) + ".png";
            animation.addSpriteFrameWithFile(string);
        }
    }

    // 设置帧动画属性
    animation.setDelayPerUnit(time); // 每一帧停留的时间
    animation.setRestoreOriginalFrame(true); // 播放完后回到第一帧
    let animate = new cc.Animate(animation);
    if (repeat == 0) { // 无限循环
        node.runAction(animate.repeatForever());
    }else { // 循环 repeat 次
        node.runAction(animate.repeat(repeat));
    }
}