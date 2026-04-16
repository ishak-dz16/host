// ملف int64.js الأساسي لثغرات PS4
function Int64(low, high) {
    var res = new Uint8Array(8);
    res[0] = low & 0xff;
    res[1] = (low >> 8) & 0xff;
    res[2] = (low >> 16) & 0xff;
    res[3] = (low >> 24) & 0xff;
    res[4] = high & 0xff;
    res[5] = (high >> 8) & 0xff;
    res[6] = (high >> 16) & 0xff;
    res[7] = (high >> 24) & 0xff;
    this.buffer = res;
}

Int64.prototype.low = function() {
    return (this.buffer[3] << 24) | (this.buffer[2] << 16) | (this.buffer[1] << 8) | this.buffer[0];
};

Int64.prototype.high = function() {
    return (this.buffer[7] << 24) | (this.buffer[6] << 16) | (this.buffer[5] << 8) | this.buffer[0];
};

Int64.prototype.toString = function() {
    var res = "";
    for (var i = 7; i >= 0; i--) {
        var h = this.buffer[i].toString(16);
        if (h.length < 2) res += "0";
        res += h;
    }
    return "0x" + res;
};

// وظائف إضافية للتعامل مع العناوين في الذاكرة
function Add(a, b) {
    var l = (a.low() + b.low()) >>> 0;
    var h = (a.high() + b.high() + (l < a.low() ? 1 : 0)) >>> 0;
    return new Int64(l, h);
}
