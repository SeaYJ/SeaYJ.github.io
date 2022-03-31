@ECHO OFF
For %%i in (*.png) do ((ffmpeg -i "%%i" "%%~ni.webp") && (del %%i ))