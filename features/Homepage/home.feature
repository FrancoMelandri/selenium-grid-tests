Feature: Show home pages

    As a user
    I want to see the homepages

    Scenario Outline: Check <homePage> will be opened

    Given Homepage for <homePage>
    When homepage is showed
    Then I except the url contains <homePage>
        
        Examples:
            | homePage              | title         |
            | www.google.com        | GOOGLE        |
            | www.bing.com          | BING          |
            | www.microsoft.com     | MICROSOFT     |
            | www.ibm.com           | IBM           |