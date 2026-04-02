# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

오픈형 스터디카페 소개 웹페이지. 레트로 픽셀아트 / Y2K 감성 디자인.

## Tech Stack

- **Framework**: Next.js (App Router, TypeScript)
- **Styling**: Tailwind CSS v4 + custom CSS variables in `globals.css`
- **Font**: Press Start 2P (Google Fonts, pixel font)

## Commands

- `npm run dev` — 개발 서버 (localhost:3000)
- `npm run build` — 프로덕션 빌드
- `npm run lint` — ESLint 실행

## Architecture

```
src/
  app/
    layout.tsx      — 루트 레이아웃 (메타데이터, 폰트, 글로벌 CSS)
    page.tsx        — 메인 랜딩 페이지 (모든 섹션 포함, client component)
    globals.css     — 디자인 시스템: CSS 변수, 레트로 윈도우 스타일, 애니메이션
  components/
    RetroWindow.tsx — 재사용 가능한 레트로 윈도우 UI (타이틀바 + 컨텐츠)
    PixelSparkle.tsx — SVG 기반 픽셀 반짝이 장식
    PixelIcon.tsx   — 8x8 픽셀 아트 아이콘 (coffee, book, clock, wifi 등)
```

## Design System

- **컬러 팔레트**: 민트 그린 배경(`#b8d8c8`) + 핑크/코랄 UI(`#e8a0a0`, `#e07868`)
- **배경**: 32px 그리드 패턴 (CSS background-image)
- **윈도우 스타일**: `.retro-window`, `.retro-title-bar` 클래스 — Windows 95/98 스타일 UI
- **버튼**: `.pixel-btn` 클래스 — 3D 엠보스 효과의 레트로 버튼
- **애니메이션**: `sparkle` (반짝임), `float-anim` (둥둥), `blink` (깜빡임)
- CSS 변수는 Tailwind `@theme inline`으로 등록되어 `text-coral`, `bg-mint` 등으로 사용 가능

## Conventions

- 레트로 UI 요소는 `RetroWindow` 컴포넌트로 감싸서 일관된 윈도우 스타일 유지
- 폰트 크기는 픽셀 감성을 위해 작게 유지 (8px ~ 14px, arbitrary values 사용)
- 색상은 globals.css의 CSS 변수 기반으로 통일
