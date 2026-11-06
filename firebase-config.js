/* ============================================================
   우리반 통계 실험실 · Firebase 설정
   README.md의 순서대로 Firebase를 만든 뒤 아래 두 곳을 채우세요.
   (이 값들은 공개되어도 괜찮은 값이에요. 실제 보호는 firestore.rules가 해요.)
   ============================================================ */

// ① Firebase 콘솔 > 프로젝트 설정 > 내 앱(웹 앱)의 firebaseConfig 값을 그대로 붙여 넣으세요.
//    채우기 전(null)에는 예시 자료와 ‘직접 입력한 자료’로만 동작해요.
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyCE3JV8xNC5LvCQwFTfJ2piSdghDkUP4GQ",
  authDomain: "statistics-b1040.firebaseapp.com",
  projectId: "statistics-b1040",
  messagingSenderId: "783109914933",
  appId: "1:783109914933:web:bc48b11bc4f773fda80c7c"
};
/* 예시
window.FIREBASE_CONFIG = {
  apiKey: "AIza...",
  authDomain: "my-stats-lab.firebaseapp.com",
  projectId: "my-stats-lab",
  storageBucket: "my-stats-lab.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef"
};
*/

// ② 설문을 만들고 학생 화면을 바꿀 수 있는 교사 구글 계정 (firestore.rules에도 같은 주소를 넣어야 해요)
window.TEACHER_EMAILS = ["leebyongj@myongji.sen.ms.kr"];
