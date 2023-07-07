 const myDiv = document.getElementById("myDiv");

    // button 클릭 이벤트
    document.getElementById("myButton").onclick = () => {
      // div의 내용(textContent)을 복사한다.
      window.navigator.clipboard.writeText(myDiv.textContent).then(() => {
        // 복사가 완료되면 호출된다.
        alert("복사완료");
      });
    };

    document.getElementById("btn_textarea_copy").onclick = function(){
      const textArea = document.getElementById("textArea");
      textArea.select();
      document.execCommand('copy');
  }
  textarea엘리먼트.select();
textarea엘리먼트.setSelectionRange(0, 99999); // 모바일 브라우저(iOS)등에서 작동하도록 선택 필요!
document.execCommand('copy');
textarea엘리먼트.setSelectionRange(0, 0); // 모바일 브라우저(iOS)등에서 작동하도록 선택 필요!

$(function(){
  var clipboard = new ClipboardJS('#copy_text');

  clipboard.on('success', function(e) {
    console.info('Text:', e.text);
    alert("텍스트가 복사되었습니다. \nCtrl + v 를 눌러서 붙여넣기 하세요.");
  });

  clipboard.on('error', function(e) {
    alert("Ctrl + C 를 눌러서 복사해 주세요.");
  });
});