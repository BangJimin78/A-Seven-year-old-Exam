// 새로고침 시 이미지 및 check 제거
window.addEventListener('DOMContentLoaded', () => {
  const questionNumber = document.querySelector('.question-number');
  if (questionNumber) {
    questionNumber.classList.remove('correct');
  }

  const allSteps = document.querySelectorAll('.step-item');
  allSteps.forEach(item => item.classList.remove('checked'));

  // 이미지도 숨기기
  const redCircle = document.getElementById('red-circle');
  const marking = document.getElementById('marking');
  // 기존 코드 (두 개 setTimeout) → 아래처럼 하나로 변경
  
/*
setTimeout(() => {
  // red_circle 표시 및 fade-in
  if (redCircle) {
    redCircle.style.display = 'block';
    redCircle.classList.remove('fade-in');
    void redCircle.offsetWidth;
    redCircle.classList.add('fade-in');
  }
  // marking 표시 및 fade-in
  if (marking) {
    marking.style.display = 'block';
    marking.classList.remove('fade-in');
    void marking.offsetWidth;
    marking.classList.add('fade-in');
  }
}, 1000);
*/
});

function showMessage(msg, element) {
  const messageBox = document.getElementById('message-box');
  const questionNumber = document.querySelector('.question-number');
  const redCircle = document.getElementById('red-circle');
  const marking = document.getElementById('marking');

  // 이미지 초기화
  if (redCircle) redCircle.style.display = 'none';
  if (marking) marking.style.display = 'none';

  // 이미 체크된 항목을 다시 클릭한 경우 처리
  if (element && element.classList.contains('step-item') && element.classList.contains('checked')) {
    element.classList.remove('checked');

    if (questionNumber) {
      questionNumber.classList.remove('correct');
    }

    messageBox.classList.add('hidden');
    return;
  }

  messageBox.textContent = msg;

  const allSteps = document.querySelectorAll('.step-item');
  allSteps.forEach(item => item.classList.remove('checked'));

  if (element && element.classList.contains('step-item')) {
    element.classList.add('checked');
  }

  if (msg === '정답입니다') {
    messageBox.classList.add('correct');
    messageBox.classList.remove('hidden');

    // 정답 이미지 순차 등장
    setTimeout(() => {
      if (questionNumber) {
        questionNumber.classList.add('correct');
      }
    }, 200);

    setTimeout(() => {
  if (redCircle) {
    redCircle.style.display = 'block';
    redCircle.classList.remove('fade-in'); // 이전 애니메이션 제거
    void redCircle.offsetWidth;            // 리플로우 강제 발생
    redCircle.classList.add('fade-in');    // 애니메이션 재실행
  }

  if (marking) {
    marking.style.display = 'block';
    marking.classList.remove('fade-in');
    void marking.offsetWidth;
    marking.classList.add('fade-in');
  }
}, 200);

    // 4초 후 메시지 숨기기
    setTimeout(() => {
      messageBox.classList.add('hidden');
    }, 3000);

  } else {
    messageBox.classList.remove('correct');
    messageBox.classList.remove('hidden');

    if (questionNumber) {
      questionNumber.classList.remove('correct');
    }

    // 오답일 경우 메시지만 1.5초 후 사라지기
    setTimeout(() => {
      messageBox.classList.add('hidden');
    }, 1500);
  }
}

function scrollToSection(id) {
    const element = document.getElementById(id);
    const yOffset = 235; // 100px 아래쪽으로 더 내려가게 함
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
}

function scrollToSection1(id) {
    const element = document.getElementById(id);
    const yOffset = -160; // 원하는 만큼 위로 올리고 싶을 때 음수 사용 (예: 100px 위쪽)
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
}

function scrollToSection2(id) {
    const element = document.getElementById(id);
    const yOffset = -30; // 원하는 만큼 위로 올리고 싶을 때 음수 사용 (예: 100px 위쪽)
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

