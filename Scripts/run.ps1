Start-Process -FilePath 'dotnet' -WorkingDirectory '..\Api\dndvtt.api' -ArgumentList 'run'
Start-Process -FilePath 'npm' -WorkingDirectory '..\Frontend\client' -ArgumentList 'start'