# HJ Portfolio

Next.js를 활용한 개인 포트폴리오 웹사이트입니다.

## 🚀 기술 스택

- **Framework**: Next.js 15.4.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **Package Manager**: Yarn

## 📦 설치 및 실행

### 필수 요구사항
- Node.js 18.0.0 이상
- Yarn

### 설치
```bash
# 의존성 설치
yarn install
```

### 개발 서버 실행
```bash
# 개발 서버 시작 (http://localhost:3000)
yarn dev
```

### 빌드
```bash
# 프로덕션 빌드
yarn build

# 프로덕션 서버 시작
yarn start
```

### 린팅
```bash
# ESLint 실행
yarn lint
```

## 🏗️ 프로젝트 구조

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 루트 레이아웃
│   ├── page.tsx           # 메인 페이지
│   └── globals.css        # 전역 스타일
├── components/             # 재사용 가능한 컴포넌트
│   └── ui/               # UI 컴포넌트
│       └── button.tsx    # Button 컴포넌트
└── lib/                   # 유틸리티 함수
    └── utils.ts          # 유틸리티 함수들
```

## 🎨 주요 기능

- **반응형 디자인**: 모바일, 태블릿, 데스크톱에 최적화
- **다크 모드 지원**: 자동 다크 모드 감지
- **모던 UI**: Tailwind CSS를 활용한 깔끔한 디자인
- **접근성**: 웹 접근성 가이드라인 준수
- **SEO 최적화**: 메타데이터 및 구조화된 마크업

## 📝 커스터마이징

### 개인 정보 수정
`src/app/page.tsx` 파일에서 다음 정보들을 수정하세요:

- 이름 및 직함
- 연락처 정보
- 자기소개
- 기술 스택
- 프로젝트 정보

### 스타일 수정
`src/app/globals.css` 파일에서 전역 스타일을 수정할 수 있습니다.

## 🚀 배포

### Vercel (권장)
1. GitHub에 프로젝트를 푸시
2. Vercel에서 프로젝트 연결
3. 자동 배포 설정

### 기타 플랫폼
- Netlify
- AWS Amplify
- GitHub Pages

## 📄 라이선스

MIT License

## 🤝 기여

이슈나 풀 리퀘스트를 통해 기여해주세요!

---

**개발자**: 김현재 (DEV HJ)  
**이메일**: kimhyunjae114@gmail.com  
**GitHub**: [@kiming0604](https://github.com/kiming0604)