### 介绍
lerna可以管理依赖，一键发布npm/git
### 安装
cnpm i lerna -g
lerna init
lerna publish  发布
### 提交
git add .
git commit -m 'init'
git remote add origin https://github.com/peterZhang520/easycss.git
git push -u origin master
### package模板
yarn add plop -W -D
写模板(copy,有需要修改)
配置文件(copy)
### 依赖管理
monorepo + yarn 工作区间

npm config get registry 检查镜像源