# Main.ps1

function Show-Echo {
    param (
        $Text
    )
    Write-Output $Text
}

function Update-PowerShell {
    iex "& { $(irm https://aka.ms/install-powershell.ps1) } -UseMSI"
    # https://superuser.com/questions/1287032/update-powershell-through-command-line
}

function Get-UserSignUpListFromCsv {
    param (
        [string]$FilePath
    )
    $Data = Import-Csv $FilePath
    $UserSignUpList = New-Object System.Collections.ArrayList

    foreach ($Record in $Data) {
        $Date = $Record.'Completion time'

        $split_date = $Date.split('/')
        $month = if ($split_date[0].Length -eq 1) { "0" + $split_date[0] } else { $split_date[0] }
        $day = if ($split_date[1].Length -eq 1) { "0" + $split_date[1] } else { $split_date[1] }
        $year_time_split = $split_date[2].split(" ")
        $year = $year_time_split[0]
        $split_time = $year_time_split[1].split(":")
        $hours = if ($split_time[0].Length -eq 1) { "0" + $split_time[0] } else { $split_time[0] }
        $modified_time = $hours + ":" + $split_time[1]
        $modifiedDateString = "$month/$day/$year" + " " + $modified_time

        $Date = [DateTime]::ParseExact($modifiedDateString, 'MM/dd/yyyy HH:mm', $null)

        $UserSignUp = Get-UserSignUp -Name $Record.Name -Email $Record.Email -Date $Date
        $UserSignUpList.Add($UserSignUp) | out-null
    }

    return $UserSignUpList
}

function Get-UserSignUpsAfterDate {
param (
    [Parameter(Mandatory=$true)]
    [System.Collections.ArrayList]$UserSignUpList,
    [Parameter(Mandatory=$true)]
    [DateTime]$Date
  )

  $Result = New-Object System.Collections.ArrayList

  foreach ($UserSignUp in $UserSignUpList) {
    if ($UserSignUp.Date -gt $Date) {
      $Result.Add($UserSignUp) | out-null # https://stackoverflow.com/a/2154760
    }
  }

  return $Result
}

function Get-UserSignUp {
    [CmdletBinding()]
    param(
        [Parameter(Mandatory=$true)]
        [string]$Name,
        [Parameter(Mandatory=$true)]
        [string]$Email,
        [Parameter(Mandatory=$true)]
        [Datetime]$Date
    )

    $signUp = [PSCustomObject]@{
        PSTypeName = "UserSignUp"
        Name = $Name
        Email = $Email
        Date = $Date
    }

    return $signUp
}

function Get-DatesAfterDate {
  param (
    [Parameter(Mandatory=$true)]
    [System.Collections.ArrayList]$Dates,
    [Parameter(Mandatory=$true)]
    [DateTime]$Date
  )

  $Result = New-Object System.Collections.ArrayList

  foreach ($D in $Dates) {
    if ($D -gt $Date) {
      $Result.Add($D) | out-null # https://stackoverflow.com/a/2154760
    }
  }

  return $result
}
