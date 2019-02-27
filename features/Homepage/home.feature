Feature: Goto home pages

    As a user
    I want to see the homepages

    Scenario Outline: Check homepages will be opened

    Given Homepage for <homePage>
    When homepage is showed
    Then I except the url contains <homePage>
        
        Examples:
            | homePage          | 
            | www.google.com    |
            | www.bing.com    |            