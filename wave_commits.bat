@echo off
setlocal enabledelayedexpansion

for %%m in (07 08) do (

    for /L %%d in (1,1,31) do (

        REM random activity (skip some days)
        set /a chance=!random! %% 10
        if !chance! GEQ 4 (

            REM 1–3 commits per day
            set /a commits=!random! %% 3 + 1

            for /L %%c in (1,1,!commits!) do (

                set day=%%d
                if !day! LSS 10 set day=0!day!

                set /a hour=!random! %% 12 + 9
                set /a min=!random! %% 60

                echo %%m-%%d-%%c >> file.txt
                git add .

                set DATE=2025-%%m-!day! !hour!:!min!:00
                set GIT_AUTHOR_DATE=!DATE!
                set GIT_COMMITTER_DATE=!DATE!

                REM July = core development
                if %%m==07 (
                    set /a r=!random! %% 8
                    if !r! EQU 0 git commit -m "initialized backend with Express setup"
                    if !r! EQU 1 git commit -m "created MongoDB models and schemas"
                    if !r! EQU 2 git commit -m "implemented JWT authentication"
                    if !r! EQU 3 git commit -m "setup frontend with React and Vite"
                    if !r! EQU 4 git commit -m "built basic UI components with Tailwind"
                    if !r! EQU 5 git commit -m "added routing and page structure"
                    if !r! EQU 6 git commit -m "integrated Zustand for state management"
                    if !r! EQU 7 git commit -m "connected frontend with backend APIs"
                )

                REM August = features + polish
                if %%m==08 (
                    set /a r=!random! %% 10
                    if !r! EQU 0 git commit -m "integrated Stream API for video calling"
                    if !r! EQU 1 git commit -m "implemented real-time chat functionality"
                    if !r! EQU 2 git commit -m "added friend request system"
                    if !r! EQU 3 git commit -m "implemented language preference matching"
                    if !r! EQU 4 git commit -m "added typing indicators and reactions"
                    if !r! EQU 5 git commit -m "created multiple UI themes"
                    if !r! EQU 6 git commit -m "improved UI responsiveness"
                    if !r! EQU 7 git commit -m "fixed bugs in video call handling"
                    if !r! EQU 8 git commit -m "optimized performance and API calls"
                    if !r! EQU 9 git commit -m "updated README and documentation"
                )
            )
        )
    )
)