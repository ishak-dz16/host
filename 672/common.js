// Common.js for PS4 6.72 Exploit
function postPayload() {
    document.getElementById("progress").innerHTML = "Payload Loaded! (إسحاق بن يحي)";
}

function debug(msg) {
    console.log(msg);
}

window.onerror = function(msg, url, line, col, error) {
    alert("Error: " + msg + "\nLine: " + line);
};

// هذا الكود يساعد في تنظيم الذاكرة قبل تشغيل الثغرة
var OFFSET_WK_VTABLE_SAMPLED_672 = 0x14f38a0;
var OFFSET_WK_VTABLE_SAMPLED_900 = 0x1568280;

function int64(low, high) {
    this.low = low;
    this.high = high;
}