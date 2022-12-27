# Base 이미지를 사용합니다. (여기서는 node 16버전을 사용합니다)
FROM node:16

# 작업 폴더를 설정합니다. 도커내의 폴더를 지정합니다.
WORKDIR /app/nestjs

# 해당 package.json 파일을 도커의 /app/nestjs폴더로 옮깁니다.
COPY package.json /app/nestjs
# 해당 package-lock.json 파일을 도커의 /app/nestjs폴더로 옮깁니다.
COPY package-lock.json /app/nestjs

# 'npm install'을 터미널로 실행합니다.
RUN npm install --legacy-peer-deps

# 복사하지 않은 모든 것을 도커의 /app/nestjs으로 옮깁니다.
COPY . /app/nestjs

# 'npm run build'을 터미널로 실행합니다.
RUN npm run build

# 도커 내부에 3000포트를 노출 시킵니다.
EXPOSE 3000

# 도커의 Volume를 만들기 위한 경로.
VOLUME [ "/userData" ]

# 컨테이너 실행시 'npm run start:dev'을 터미널로 실행합니다. 코드 변경시 바로 적용
CMD [ "npm", "run", "start:dev" ]
