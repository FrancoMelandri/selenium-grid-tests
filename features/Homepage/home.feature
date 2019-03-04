Feature: Show home pages

    As a user
    I want to see the homepages

    Scenario Outline: Check <homePage> will be opened

    Given Homepage for <homePage>
    When homepage is showed
    Then I except the url contains <realHomePage>
        
        Examples:
            | homePage              | realHomePage          | title         |
            | www.google.com        | www.google.com        | GOOGLE        |
            | www.bing.com          | www.bing.com          | BING          |
            | www.microsoft.com     | www.microsoft.com     | MICROSOFT     |
            | www.ibm.com           | www.redhat.com           | IBM           |