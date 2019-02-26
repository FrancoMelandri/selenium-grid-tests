Feature: Goto home pages

    As a user
    I want to see the homepages

    Scenario Outline: Check homepages will be opened

    Given Homepage for <homePage>
        
        Examples:
            | homePage          | 
            | www.google.com    |