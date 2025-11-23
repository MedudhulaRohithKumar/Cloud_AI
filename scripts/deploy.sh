#!/bin/bash
cd /home/ec2-user/web-app
npm install
npm run build
pm2 serve dist 3000 --spa --name "web-app" &
