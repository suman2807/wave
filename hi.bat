@echo off
setlocal enabledelayedexpansion

for %%m in (03 04) do (
    for /L %%d in (1,1,31) do (
        set "run="
        
        REM Logic to define the active window: March 10 to April 18
        if %%m==03 if %%d GEQ 10 set run=true
        if %%m==04 if %%d LSS 19 set run=true

        if defined run (
            REM ~60% activity (realistic)
            set /a chance=!random! %% 10
            if !chance! GEQ 4 (

                REM 1–4 commits/day
                set /a commits=!random! %% 4 + 1

                for /L %%c in (1,1,!commits!) do (
                    set day=%%d
                    if !day! LSS 10 set day=0!day!

                    REM realistic time (10 AM – 10 PM)
                    set /a hour=!random! %% 12 + 10
                    set /a min=!random! %% 60
                    if !min! LSS 10 set min=0!min!

                    echo %%m-!day!-%%c >> file.txt
                    git add .

                    set "DATETIME=2026-%%m-!day! !hour!:!min!:00"
                    set "GIT_AUTHOR_DATE=!DATETIME!"
                    set "GIT_COMMITTER_DATE=!DATETIME!"

                    REM Wave-specific commits
                    set /a r=!random! %% 8
                    
                    if %%m==03 (
                        if !r! EQU 0 git commit -m "implemented video call feature"
                        if !r! EQU 1 git commit -m "added real-time chat functionality"
                        if !r! EQU 2 git commit -m "integrated Stream API"
                        if !r! EQU 3 git commit -m "added friend request system"
                        if !r! EQU 4 git commit -m "improved UI for chat interface"
                        if !r! EQU 5 git commit -m "fixed bugs in messaging system"
                        if !r! EQU 6 git commit -m "optimized API calls"
                        if !r! EQU 7 git commit -m "enhanced user experience"
                    )

                    if %%m==04 (
                        if !r! EQU 0 git commit -m "added language matching feature"
                        if !r! EQU 1 git commit -m "implemented typing indicators"
                        if !r! EQU 2 git commit -m "added reactions in chat"
                        if !r! EQU 3 git commit -m "improved video call stability"
                        if !r! EQU 4 git commit -m "refactored frontend components"
                        if !r! EQU 5 git commit -m "fixed UI bugs and edge cases"
                        if !r! EQU 6 git commit -m "optimized performance"
                        if !r! EQU 7 git commit -m "updated README and documentation"
                    )
                )
            )
        )
    )
)

echo Done!
pause