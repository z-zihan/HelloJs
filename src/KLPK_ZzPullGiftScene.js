
var KLPK_ZzPullGiftLayer = BaseLayer.extend({
    horn:null,  // 喇叭
    pedrail:null,   // 履带
    car:null,   // 小推车
    listener: null, // 点击事件
    ctor:function () {
        this._super();

        cc.spriteFrameCache.addSpriteFrames(res.PullGift_image1_plist, res.PullGift_image1_png);
        cc.spriteFrameCache.addSpriteFrames(res.PullGift_image2_plist, res.PullGift_image2_png);

        var size = cc.winSize;

        this.listener = cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: this.onTouchBegan.bind(this),
            onTouchMoved: this.onTouchMoved,
            onTouchEnded: this.onTouchEnded
        }, this);

        // 背景
        let bg1 = new cc.Sprite(res.PullGift_bg1_png);
        bg1.setPosition(size.width/2, size.height/2);
        this.addChild(bg1, 1);

        let bg2 = new cc.Sprite(res.PullGift_bg2_png);
        bg2.setPosition(size.width/2, size.height/2);
        this.addChild(bg2, 10);

        // 齿轮
        for (let i = 0; i < 2; i++) {
            let spriteFrame = cc.spriteFrameCache.getSpriteFrame("pg_gear_1.png");
            let gear = cc.Sprite.create(spriteFrame);
            if (i == 0) {
                gear.setPosition(size.width/2-633, 1216);
            }else {
                gear.setPosition(size.width/2+447, size.height);
            }
            this.addChild(gear, 2);
            let rotateBy = cc.rotateBy(0.1, 10);
            gear.runAction(rotateBy.repeatForever());
        }

        for (let i = 0; i < 2; i++) {
            let rotate;
            let spriteFrame = cc.spriteFrameCache.getSpriteFrame("pg_gear_2.png");
            let gear = cc.Sprite.create(spriteFrame);
            if (i == 0) {
                rotate = 6.45;
                gear.setPosition(size.width-673, 994);
            }else {
                rotate = 8.06;
                gear.setScale(0.8);
                gear.setPosition(size.width/2+855, 754);
            }
            this.addChild(gear, 2)
            let rotateBy = cc.rotateBy(0.1, -rotate);
            gear.runAction(rotateBy.repeatForever());
        }

        for (let i = 0; i < 2; i++) {
            let rotate;
            let spriteFrame = cc.spriteFrameCache.getSpriteFrame("pg_gear_3.png");
            let gear = cc.Sprite.create(spriteFrame);
            if (i == 0) {
                rotate = 4.35;
                gear.setPosition(size.width/2-879, 713);
            }else {
                rotate = 4.59;
                gear.setScale(0.95);
                gear.setPosition(size.width/2+541, 730);
            }
            this.addChild(gear, 2);
            let rotateBy = cc.rotateBy(0.1, rotate);
            gear.runAction(rotateBy.repeatForever());
        }

        for (let i = 0; i < 3; i++) {
            let rotate;
            let spriteFrame = cc.spriteFrameCache.getSpriteFrame("pg_gear_4.png");
            let gear = cc.Sprite.create(spriteFrame);
            if (i == 0) {
                rotate = -3.88;
                gear.setPosition(size.width/2-435, 526);
            }else if (i == 1) {
                rotate = -3.88
                gear.setPosition(size.width/2+740, 1125);
            }else {
                rotate = 8;
                gear.setScale(0.5);
                gear.setPosition(size.width/2-906, 1105);
            }
            let rotateBy = cc.rotateBy(0.1, rotate);
            gear.runAction(rotateBy.repeatForever());
        }

        // 箱子
        let box = new cc.Sprite(res.PullGift_box_png);
        box.setPosition(size.width/2, size.height/2);
        this.addChild(box, 3);

        // 喇叭
        let horn_spriteFrame = cc.spriteFrameCache.getSpriteFrame("pg_horn_0001.png");
        this.horn = cc.Sprite.create(horn_spriteFrame);
        this.horn.setPosition(size.width-300, 1168);
        this.addChild(this.horn, 5);

        // 履带
        this.pedrail = new cc.Sprite(res.PullGift_pedrail1_png);
        this.pedrail.setPosition(size.width/2, 546);
        this.addChild(this.pedrail, 11);

        return true;
    },

    onTouchBegan:function (touch, event) {
        cc.log("onTouchBegan");

        let target = event.getCurrentTarget();
        let rect = target.getBoundingBox();

        if (cc.rectContainsPoint(rect, touch.getLocation())) {
            this.hornAction();
            return true;
        }
        return false;
    },

    onTouchMoved:function (touch, event) {
        cc.log("onTouchMoved");
    },

    onTouchEnded:function (touch, event) {
        cc.log("onTouchEnded");
    },

    onEnter:function () {
        this._super();
        cc.log("onEnter");
    },

    onEnterTransitionDidFinish:function () {
        this._super();
        cc.log("onEnterTransitionDidFinish");
    },

    onExit:function () {
        this._super();
        cc.log("onExit");
    },

    onExitTransitionDidStart:function () {
        this._super();
        cc.log("onExitTransitionDidStart");
    },

    // 喇叭动画
    hornAction:function () {
        createFrameAnimationByName(
            "pg_read_",
            2,
            this.horn,
            0.2,
            true,
            3,
            true
        );
    },

    // 履带动画
    pedrailAction: function () {
        createFrameAnimationByFile(
            "res/KLPK_ZzPullGiftScene/images/pg_pedrail_",
            2,
            this.pedrail,
            0.15,
            true,
            0,
            true
        );
    },

});

var KLPK_ZzPullGiftScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new KLPK_ZzPullGiftLayer();
        this.addChild(layer);
    }
});