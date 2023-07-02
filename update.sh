git pull origin main
cd /home/user
git pull origin main

# api server update
cd /home/user/server
tsc

# client update
cd /home/user/client
rm -rf node-modules
npm install 
npm run build

# pm2 restart 
pm2 restart ecosystems.config.js