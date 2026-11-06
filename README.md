# 우리반 통계 실험실

중학교 1학년 통계 수업용 웹앱입니다. 학생이 설문에 응답하면, 그 자료로 대푯값(평균·중앙값·최빈값), 줄기와 잎 그림, 도수분포표, 히스토그램, 도수분포다각형, 상대도수를 교과서 방법과 함께 보여 줍니다.

- 학생: 첫 화면에서 **학생** 선택 → 반·성별·답 입력 (로그인 없음)
- 교사: **선생님** 선택 → 교사 번호 입력 → 분석 화면, 설문 관리, 학생 화면 연동
- 설문 만들기와 학생 화면 연동은 교사 구글 계정 로그인 후 사용할 수 있습니다.

## 파일

| 파일 | 내용 |
|---|---|
| `index.html` | 웹앱 본체 |
| `firebase-config.js` | Firebase 연결 정보와 교사 이메일 (직접 채움) |
| `firestore.rules` | Firebase 보안 규칙 (콘솔에 붙여 넣음) |

Firebase를 연결하기 전에도 예시 자료와 ‘직접 입력한 자료’(구글 설문 결과 붙여 넣기)로 모든 분석 기능을 쓸 수 있습니다.

---

## 1. GitHub Pages 켜기

1. 저장소 **Settings → Pages**
2. **Source: Deploy from a branch**, **Branch: main / (root)** → Save
3. 1~2분 뒤 주소가 생깁니다: `https://leebyongj-del.github.io/statisticcs/`

## 2. Firebase 프로젝트 만들기 (무료 요금제로 충분)

1. https://console.firebase.google.com 에서 **프로젝트 추가** (Google 애널리틱스는 꺼도 됨)
2. 프로젝트 개요의 **웹(</>)** 아이콘 → 앱 이름 입력 → 등록
3. 화면에 나온 `firebaseConfig = { ... }` 값을 복사해 둡니다.

## 3. 로그인 방식 켜기

**빌드 → Authentication → 시작하기 → Sign-in method**

- **익명** 사용 설정 (학생 응답용)
- **Google** 사용 설정 (교사 로그인용)

**Authentication → 설정 → 승인된 도메인 → 도메인 추가**

- `leebyongj-del.github.io` 추가 ← 빠뜨리면 교사 구글 로그인이 안 됩니다.

## 4. 데이터베이스 만들기

1. **빌드 → Firestore Database → 데이터베이스 만들기**
2. 위치: `asia-northeast3 (서울)` 권장 → **프로덕션 모드**로 시작
3. **규칙** 탭에 `firestore.rules` 내용을 통째로 붙여 넣고, `교사-구글-이메일@gmail.com`을 실제 교사 구글 주소로 바꾼 뒤 **게시**

## 5. firebase-config.js 채우기

GitHub에서 `firebase-config.js` → 연필(수정) 아이콘

```js
window.FIREBASE_CONFIG = { apiKey: "...", authDomain: "...", projectId: "...", storageBucket: "...", messagingSenderId: "...", appId: "..." };
window.TEACHER_EMAILS = ["실제-교사-주소@gmail.com"];
```

**Commit changes** → 1~2분 뒤 사이트에 반영됩니다.

## 6. 확인

1. 사이트에서 **선생님** → 교사 번호 → **설문 관리** → **구글로 로그인** → 설문 만들기
2. 휴대폰으로 같은 주소를 열어 **학생** → 응답 내기
3. 교사 화면 **자료** 탭에 응답이 나타나면 완료입니다.

## 알아 둘 점

- 학생은 기기(브라우저)별로 구분됩니다. 같은 기기에서 다시 내면 답이 바뀌고, 다른 기기나 시크릿 창에서는 새 응답으로 들어갑니다.
- 응답에는 이름이 저장되지 않습니다. 반·성별·답·시각만 저장됩니다.
- 응답은 사이트를 여는 누구나 읽을 수 있는 구조입니다. 민감한 주제(몸무게, 성적 등)는 받지 마세요.
- 교사 번호는 화면을 나누는 용도입니다. 실제 설문 수정 권한은 교사 구글 계정과 보안 규칙이 지킵니다.
