# Analytics Plan

# Sales
  ## Periodicity Options
    - Lifetime
    - Yearly
    - Semi-Annual (6 months)
    - Quarter (3 months)
    - Month
    - Week
    - Day (last 24 hours)

  ## Total Revenue
    - Web generated ($)
    - Mobile generated ($)
    - Unknown generated (anything else) ($)
    - Card Type: `['Visa', 'Mastercard', 'Diners-Club', 'American Express', 'Discover']`

  ## Average Sale ($)

  ## Total Expenses
    - AWS Expenses ($)
    - Any other 3rd party services cost ($)

  ## Growth
    - Calculate the amount of growth (in percentage) from Today to the given timeframes listed above. (%)
    - Example: `Semi-Annual` = The most recent 6 months to the last 6 months.

  ## Purchases
    - Per periodicity selection

  ## Conversions
    - Adds to Cart (#)
      * Guests
      * Members
      * Unknowns
      * Wholesalers
    - Successful Checkouts (%)
      * Guests
      * Members
      * Unknowns
      * Wholesalers
    - Cart Bounce Rate (adds to cart but did not complete purchase) (%)
    - In Cart (%)
      * Guests
      * Members
      * Unknowns
      * Wholesalers
    - Payment Rejections (%)
      * Guests
      * Members
      * Unknowns
      * Wholesalers


# Traffic
  ## Periodicity Options
    - Lifetime
    - Yearly
    - Semi-Annual (6 months)
    - Quarter (3 months)
    - Month
    - Week
    - Day (last 24 hours)

  ## Visits
    * Per periodicity
      - Guests (checked out as Guest) (#)
      - Members (Logged in and browsed) (#)
      - Wholesalers (Identified through membership Type) (#)
      - Unknown (No login & No checkout) (#)

  ## Countries
    - Shows on a world heat map, where the users are visiting the site from.
    - example: "Japan - 123,000"

  ## Platform Stats
    - Mobile (#)
    - Website (#)
    - Unkown (User-Agent returns a falsy value)

    * Growth
      - Calculate the amount of growth (in percentage) from Today to the given timeframes listed above. (%)

    * Page Views (# per page)

    * Avg. Visit Time (#)

    * New Visitors (non-recognized IP Address) (#)
      - This is gonna to require us to keep a database of `IP Addresses` Perhaps have the ip-address be the key, and the value be the index # for O(1) lookup time.

    * Bounce Rate (%)

    * Web Views (%)

    * Mobile Views (%)

    * Unknown (%)

# Products
  ## Periodicity Options
    - Lifetime
    - Yearly
    - Semi-Annual (6 months)
    - Quarter (3 months)
    - Month
    - Week
    - Day (last 24 hours)

  ## Top 10 Products (#)

  ## Page Views (#)
    - Guests
    - Members
    - Unknowns
    - Wholesalers

  ## Clicks (#)
    - Guests
    - Members
    - Unknowns
    - Wholesalers

  ## Time Viewed (hh:mm:ss)
    - Guests
    - Members
    - Unknowns
    - Wholesalers

  ## Purchased - Identifies the following stats based on the type of visitor.
    - Once (#)
    - Repeat (#)

  ## Rating
    - Entries (#)
    - Avg. Grade (%)

# Members
  ## Periodicity Options
    - Lifetime
    - Yearly
    - Semi-Annual (6 months)
    - Quarter (3 months)
    - Month
    - Week
    - Day (last 24 hours)

  ## Total (#)

  ## Register Stats
   - Country (#)

  ## Growth
    - Calculate the amount of growth (in percentage) from Today to the given timeframes listed above. (%)
    - Example: `Semi-Annual` = The most recent 6 months to the last 6 months.

  ## Each Member
    - Nicotine User (if we ever sell non-nicotine juice, then if the user purchases nicotine or non-nicotine products) (bool)
    - Loyalty (yyyymmdd)
    - Purchases (#)
    - Reward Points (future feature) (#)
    - Product Ratings (#)
    - Reviews (#)
    - Referalls (#)
    - Register Method (`['facebook', 'instagram', 'twitter', 'google', 'email']`)
    - User Story (text)
    - Location (lat, long)
    - Email (text)
    - Permissions (`['member', 'admin', 'whole-seller', 'super-admin', 'staff']`),
    - Age (#)

# Newsletters
  ## Clicks (#)
    - Guests
    - Members
    - Unknowns
    - Wholesalers
  ## Purchases-after (%)
    - Guests
    - Members
    - Unknowns
    - Wholesalers
  ## Un-subscribers (%)
    - Guests
    - Members
    - Unknowns
    - Wholesalers

# AWS Stats
  ## Service stats
    * Whatever service we've activated, we'd like to display those stats that we think are relevant here.
