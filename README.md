
<a href="https://gitmoji.carloscuesta.me"> <img src="https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square" alt="Gitmoji?style=flat-square&logo=appveyor"> </a> <a href="https://github.com/codestates/Saekgalpi-ColorPalette"><img src ="https://img.shields.io/badge/github-kFood-lightgrey?style=flat-square&logo=appveyor"></a> <img src="https://img.shields.io/badge/npm-v6.14.4-important?style=flat-square&logo=appveyor"> <img src="https://img.shields.io/badge/node.js-v12.16.11-important?style=flat-square&logo=appveyor"> 

# 🎨 K-Food-Dictionary-server

이 웹페이지는 외국인들에게 한국의 다양하고 맛있는 음식을 정보를 제공합니다.

1. 사용자가 한국음식을 선택해서 정보를 받을 수 있다.

2. 사용자가 원하는 음식을 선택해 Mypage에 보관할 수 있다.

3. 사용자가 원하는 한국음식을 sns에 공유할 수 있다.

# 💡 About 

## Getting Started


## About Service  
   1. 로그인 / 로그아웃 / 회원가입
      - 로그인
      - sns 로그인
      - 로그아웃
      - 회원가입
   
   3. 즐겨찾기 기능
      - 관심있는 음식을 자신의 페이지에 추가할 수 있다.
   
   4. 음식 업로드
      - 관리자에 한해서만 새로운음식을 업로드 할 수 있다.
   
   5. youtube 먹방영상 불러오기
      - 해당하는 음식에 대한 먹방영상을 볼 수 있다.
   
   6. SNS 공유
      - 원하는 음식을 SNS에 공유 할 수 있다.
   
   7. 맛집 리스트 불러오기
      - 해당하는 음식의 맛집들을 볼 수 있다.
  
## Step by step 
   1. Bare Minimum Requirement
      - 회원가입
      - 로그인
      - 로그아웃
      - 즐겨찾기에 추가
      - youtube영상 불러오기
  
   2. Advanced
      - sns계정으로 로그인
      - 관리자에 의한 음식 업로드
      - sns에 공유하기
      
   3. Nightmare
      - 맛집 리스트 불러오기
      - tag기능
   
 ## Flow Chart
   <div>
     <img src="https://user-images.githubusercontent.com/59912499/89887350-0ed6dc80-dc09-11ea-8642-3d321f8da8b2.png">
   </div> 

## 🎨 Server

### :sparkles: API DOCS
  <details>
   <summary>API DOCS 문서</summary>
   <div markdown="3">
     <img src="https://user-images.githubusercontent.com/60249156/89889832-4d6e9600-dc0d-11ea-8db5-9beefc9ce151.png">
     <img src="https://user-images.githubusercontent.com/60249156/89889837-50698680-dc0d-11ea-8f87-2058786bd127.png">
     <img src="https://user-images.githubusercontent.com/60249156/89889840-519ab380-dc0d-11ea-99bc-b074971690ab.png">
     <img src="https://user-images.githubusercontent.com/44662643/90084295-ee656a00-dd4f-11ea-944a-e5357dd7d3f5.png">
   </div>
   </details> 


### 📦 Dependencies

   -   mysql2 
   -   sequelize
   -   sequelize-cli
   -   express
   -   express-session
   -   cors
   -   cookie parser
   -   dotenv
   -   crypto

## 🗃 Schema
   <div>
<img width="500" src="https://user-images.githubusercontent.com/60249156/90013882-18cc0e80-dce1-11ea-8afc-38dab1cd11b1.png">
   </div>

## 🗃 Schema 테이블 구조
<details>
   <summary>테이블 구조 </summary>
   <div markdown="3">
      <h2>user테이블 </h2>
     <img src="https://user-images.githubusercontent.com/60249156/90020441-d7406100-dcea-11ea-86e9-abf59e8d3a91.png">
      <h2>foodInfo테이블 </h2>
     <img src="https://user-images.githubusercontent.com/60249156/90020655-17074880-dceb-11ea-8b92-ebd6e4e367b6.png">
      <h2>user_foodInfo테이블 </h2>
     <img src="https://user-images.githubusercontent.com/60249156/90020979-972dae00-dceb-11ea-8286-7bf545ffac13.png">
   </div>
  </details> 

## 🎨 Client

### ✨ Features

   -   회원가입  
   -   로그인  
   -   로그아웃  
   -   음식 업로드
   -   즐겨찾기 기능
   
### 📦 Dependencies

   -   React
   -   React-Router
   -   React-Hooks
   -   SASS
   -   Styled-Component
   
   
# 🎨 Team rules
   -   Stand Up Meeting 필수 참석하기. (매일 10시~10시30분)
   -   잠은 꼭 6시간 이상 자기. (제정신으로 코딩하기)
   -   밥은 하루 2끼 이상 챙겨 먹기.(체력 유지하기)
   -   따뜻하게 말하기.
   -   1시간 이상 막혔을 때 바로 공유하기.
   -   짜증내지 말기.
   -   회의 도중 전화가 오면 양해구하기.
   -   모든 코드는 병합 전 리뷰를 받기.
   -   커밋 메시지는 "https://blog.ull.im/engineering/2019/03/10/logs-on-git.html" 규칙 따르기.
   -   Lint Rule - "eslint:recommended" Rule 따르기.
   -   Node 버전 - NVM v.12 사용하기.
   
   
# 🎨 About Team

## 🌿 이호철
**Team Leader, FrontEnd**  

📧 Gmail :samiosae@gmail.com

🆔 Github Id : @samiosae  

💡 Blog : https://seagull-dev.tistory.com/ 

## 🌿 유호현
**Team members, FrontEnd**  

📧 Gmail : bbirds94@gmail.com

🆔 Github Id :@bbirds94

💡 Blog : https://velog.io/@bbirds94
   

## 🌿 김현진
**Team members, BackEnd** 

📧 Gmail : wmc151567@gmail.com 

🆔 Github Id : @wmc15156

💡 Blog :https://velog.io/@wmc1415


## 🌿 김유현
**Team members, BackEnd**  

📧 Gmail :cocokiuuu1858@gmail.com

🆔 Github Id : @rladbgus

💡 Blog :https://yoohyeon.tistory.com/



