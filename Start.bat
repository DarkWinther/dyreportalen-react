@ECHO off

START "IIS" "C:\Program Files\IIS Express\iisexpress.exe" /path:"%CD%/dyreportalen-webapi/dyreportalen-webapi" /port:63504
sqlcmd -i ./AddData.sql -S . -E -X
cd ./dyreportalen-www
npm run start

PAUSE
