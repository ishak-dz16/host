var Int64 = function(low, high) {
    this.low = low;
    this.high = high;
};

Int64.prototype.add = function(other) {
    var low = (this.low + other.low) >>> 0;
    var high = (this.high + other.high + (low < this.low ? 1 : 0)) >>> 0;
    return new Int64(low, high);
};
// ... (بقية العمليات الحسابية)
