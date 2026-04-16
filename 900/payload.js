// payload.js - الخاص بـ إسحاق هوست (مستوحى من Isfayeed)

function load_goldhen(payload_name) {
    var xhr = new XMLHttpRequest();
    // إخبار المستخدم ببدء التحميل
    document.getElementById('status').innerHTML = "جاري قراءة ملف: " + payload_name + "...";
    
    xhr.open('GET', payload_name, true);
    xhr.responseType = 'arraybuffer';

    xhr.onload = function (e) {
        if (this.status == 200) {
            // تحويل الملف المختار إلى Buffer
            window.payload_buffer = new Uint8Array(this.response);
            document.getElementById('status').innerHTML = "الملف جاهز.. جاري كسر الحماية (Kernel) ⏳";
            
            // استدعاء وظيفة الاختراق من ملف kexploit.js
            setTimeout(function(){
                try {
                    // ملاحظة: poc() هي الوظيفة الشائعة في ملفات إسلام فايد لبدء الثغرة
                    poc(); 
                } catch (err) {
                    document.getElementById('status').innerHTML = "خطأ في تشغيل poc(): " + err.message;
                }
            }, 500);
        } else {
            document.getElementById('status').innerHTML = "خطأ: لم يتم العثور على ملف " + payload_name;
            document.getElementById('status').style.color = "#ff0000";
        }
    };
    
    xhr.send();
}

// وظيفة مساعدة لإرسال البايلود إلى الذاكرة بعد نجاح الثغرة
function send_payload() {
    if (window.payload_buffer) {
        // هذا الجزء يعتمد على العناوين الموجودة في rop.js و common.js
        document.getElementById('status').innerHTML = "تم الاختراق! جاري تفعيل GoldHEN... 🔥";
        document.getElementById('status').style.color = "#00ffcc";
        
        // تنفيذ الـ ROP Chain لإرسال البايلود
        // ستقوم ملفات الثغرة الأصلية باستدعاء payload_buffer تلقائياً هنا
    }
}