var BaseLayer = cc.Layer.extend({
    ctor:function () {
        this._super();

        var size = cc.winSize;

        let backItem = new cc.MenuItemImage(
            res.Back_png,
            res.Back_png,
            function () {
                console.log("test");
            }.bind(this));
        backItem.setAnchorPoint(0, 1);
        backItem.setPosition(49, size.height-16);
        // backItem.setPosition(0, 0);
        let menu = new cc.Menu(backItem);
        menu.setPosition(0, 0);
        this.addChild(menu, 10086);

        return true;
    },

    onEnter:function () {
        this._super();
        cc.log("BaseLayer onEnter");
    },

    onEnterTransitionDidFinish:function () {
        this._super();
        cc.log("BaseLayer onEnterTransitionDidFinish");
    },

    onExit:function () {
        this._super();
        cc.log("BaseLayer onExit");
    },

    onExitTransitionDidStart:function () {
        this._super();
        cc.log("BaseLayer onExitTransitionDidStart");
    },
});