Feature: Calculator
 


@regression
    Scenario Outline: Scenario Outline Name
        Given I have a calculator
        When I "<operation>" <first> and <second>
        Then the result is <result>
        Examples:
            | operation | first | second | result             |
            | add       | 2     | 3      | 5                  |
            | add       | 5     | 7      | 12                 |
            | add       | 5     | -7     | 2                 |
            | subtract  | 5     | 7      | -2                 |
            | multiply  | 5     | 7      | 3                 |
            | divide    | 15     | 3     |5 |

