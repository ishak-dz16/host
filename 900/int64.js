// int64.js - التعامل مع ذاكرة 64-بت
var Int64 = function(low, high) {
    var float64 = new Float64Array(1);
    var uint32 = new Uint32Array(float64.buffer);
    this.low = low; this.high = high;
    this.add = function(other) {
        var l = (this.low + other.low) >>> 0;
        var h = (this.high + other.high + (l < this.low ? 1 : 0)) >>> 0;
        return new Int64(l, h);
    };
};
// دوال إضافية للتحويل من وإلى التنسيقات المختلفة
function int64(low, high) { return new Int64(low, high); }
