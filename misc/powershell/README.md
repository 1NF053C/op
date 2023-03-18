## BEFORE RUNNING

Scripts must be enabled on this system for this script to run.
Run powershell as admin, then run this command:

```ps1
Set-ExecutionPolicy bypass
```

## HOW TO RUN

source file to access these commands in a PowerShell Script:

```ps1
. ./Main.ps1
```

## HOW TO TEST

Run the following command to execute Main.Tests.ps1 tests for functions in `Main.ps1`

```ps1
Invoke-Pester
```

## How to install Pester Module without Admin

Note: `-SkipPublisherCheck` is still required when an existing older Pester module exists on your system

```ps1
Install-Module -Name Pester -Scope CurrentUser -SkipPublisherCheck
```
