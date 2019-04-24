@echo off
@CALL "%userprofile%\Anaconda3\Library\bin\conda.bat" activate RAcount
START /B python manage.py runserver
timeout /t 5 /nobreak > NUL
"C:\Program Files\Mozilla Firefox\firefox.exe" http://127.0.0.1:8000