@ECHO OFF
For %%i in (*.webp) do ((ffmpeg -i "%%i" "%%~ni.png") && (dir %%i ))