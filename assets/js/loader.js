// محتوى ملف loader.js

function loadHTML(url, elementId) {
  fetch(url)
    .then(response => response.text())
    .then(data => {
      // هذا الجزء للتعامل مع السكربتات الموجودة في الفوتر
      const element = document.getElementById(elementId);
      element.innerHTML = data;

      // إعادة تنفيذ السكربتات المضافة
      const scripts = element.getElementsByTagName('script');
      for (let i = 0; i < scripts.length; i++) {
        const newScript = document.createElement('script');
        if (scripts[i].src) {
          newScript.src = scripts[i].src;
        } else {
          newScript.innerHTML = scripts[i].innerHTML;
        }
        document.body.appendChild(newScript);
      }
    });
}

// استدعاء الدالة لجلب الهيدر والفوتر
loadHTML('assets/includes/header.html', 'header');
loadHTML('assets/includes/footer.html', 'footer');