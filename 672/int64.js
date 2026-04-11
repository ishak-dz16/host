function int64(low, hi) {
    this.low = low;
    this.hi = hi;
}

int64.prototype.add32 = function(val) {
    var new_low = (this.low + val) >>> 0;
    if (new_low < this.low) this.hi++;
    this.low = new_low;
}

int64.prototype.set32 = function(val) {
    this.low = val;
    this.hi = 0;
}

function int64_from_float(f) {
    var bytes = new Uint8Array(8);
    var farr = new Float64Array(bytes.buffer);
    farr[0] = f;
    return new int64(
        bytes[0] | (bytes[1] << 8) | (bytes[2] << 16) | (bytes[3] << 24),
        bytes[4] | (bytes[5] << 8) | (bytes[6] << 16) | (bytes[7] << 24)
    );
}