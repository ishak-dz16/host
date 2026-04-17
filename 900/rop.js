var ROP = function() {
    this.stack = malloc(0x1000);
    this.index = 0;
};

ROP.prototype.push = function(value) {
    this.write64(this.stack.add(this.index * 8), value);
    this.index++;
};
// هذا الكود يسمح لنا بترتيب الأوامر خلف بعضها
