// rop.js - بناء سلسلة العمليات
var ROP = function() {
    this.stack = new Uint32Array(0x1000);
    this.index = 0;
    this.push = function(val) {
        this.stack[this.index++] = val.low;
        this.stack[this.index++] = val.high;
    };
    // دوال للتحكم في سجلات المعالج (Gadgets)
};
