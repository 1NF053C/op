# Main.Tests.ps1

# See Unit testing with Pester tutorial: https://dev.to/omiossec/unit-testing-in-powershell-introduction-to-pester-1de7

# To see stdout when running tests:
#   $(Invoke-pester -PassThru).Tests | Format-Table ExpandedPath, StandardOutput

Describe -name "NICE Coordination" {
    Describe "Get-UserSignUpListFromCsv" {
        It "reads csv data correctly" {
            $testFilePath = ".\fixtures/mock-user-sign-up-list.csv"
            $data = Get-UserSignUpListFromCsv -FilePath $testFilePath

            $data | Should -Not -BeNullOrEmpty
            $data | Should -HaveCount 3
            #$data[0].PSTypeName | Should -Be "UserSignUp"
            #$data[0].Name | Should -Be "John Doe"
            #$data[0].Email | Should -Be "johndoe@example.com"
            #$data[0].Date | Should -Be "2022-01-01"
            #$data[1].PSTypeName | Should -Be "UserSignUp"
            #$data[1].Name | Should -Be "Jane Doe"
            #$data[1].Email | Should -Be "janedoe@example.com"
            #$data[1].Date | Should -Be "2022-01-02"
        }
    }

    Describe "Get-UserSignUp" {
        It "Get-UserSignUp gets a UserSignUp Object" {
            $Result = Get-UserSignUp -Name "Water" -Email "alias@example.com" -Date ([DateTime]'2023-01-01')

            $Result.PSTypeNames | Should -Contain "UserSignUp"
            $Result.Name | Should -Be "Water"
            $Result.Email | Should -Be "alias@example.com"
            $Result.Date | Should -Be ([DateTime]'2023-01-01')
        }
    }

    Describe "Get-UserSignUpsAfterDate" {
        It "gets user sign ups after the given date" {
            $UserSignUpList = @(
                (Get-UserSignUp -Name "A" -Email "a@example.com" -Date ([DateTime]'2022-12-01')),
                (Get-UserSignUp -Name "B" -Email "b@example.com" -Date ([DateTime]'2022-12-02')),
                (Get-UserSignUp -Name "C" -Email "c@example.com" -Date ([DateTime]'2023-01-01'))
            )

            $Result = Get-UserSignUpsAfterDate -UserSignUpList $UserSignUpList -Date ([DateTime]'2022-12-01')
            $Result[0].Date | Should -Be ([DateTime]'2022-12-02')
            $Result[1].Date | Should -Be ([DateTime]'2023-01-01')
            $Result.Count | Should -Be 2
        }
    }

    Describe "Get-DatesAfterDate" {
        It "gets dates after date" {
            $Dates = @([DateTime]'2022-12-01', [DateTime]'2022-12-02', [DateTime]'2023-01-01')
            $Date = [DateTime]'2022-12-01'

            $Result = Get-DatesAfterDate -Dates $dates -Date $Date

            $ExpectedResult = @([DateTime]'2022-12-02', [DateTime]'2023-01-01')
            $Result | Should -Be $ExpectedResult
        }
    }
}

Describe -name "Sanity" {
   Describe "Show-Echo" {
       It "echos the given text" {
           Show-Echo "Hello, Learners" | Should -Be "Hello, Learners"
       }
   }
}
