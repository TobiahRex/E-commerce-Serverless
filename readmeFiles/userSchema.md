## user
Contains information related to User

```
╔═══════════════════════════════════════════╦═══════════╦═════════════════════════════════════════════════════╦═════════╦════════════════╗
║                  Property                 ║ Data Type ║                     Description                     ║ Remarks ║ Required items ║
║                                           ║           ║                                                     ║         ║   at the time  ║
║                                           ║           ║                                                     ║         ║   of creation  ║
╠═══════════════════════════════════════════╬═══════════╬═════════════════════════════════════════════════════╬═════════╬════════════════╣
║                    _id                    ║  MongoId  ║                  The ID of the User                 ║         ║       no       ║
╠═══════════════════════════════════════════╬═══════════╬═════════════════════════════════════════════════════╬═════════╬════════════════╣
║                 name.first                ║   String  ║              The first name of the user             ║         ║       yes      ║
╠═══════════════════════════════════════════╬═══════════╬═════════════════════════════════════════════════════╬═════════╬════════════════╣
║                 name.last                 ║   String  ║              The last name of the user              ║         ║       yes      ║
╠═══════════════════════════════════════════╬═══════════╬═════════════════════════════════════════════════════╬═════════╬════════════════╣
║                name.display               ║   String  ║             The display name of the user            ║         ║       yes      ║
╠═══════════════════════════════════════════╬═══════════╬═════════════════════════════════════════════════════╬═════════╬════════════════╣
║               pictures.small              ║   String  ║     Small user image used for the Navbar avatar     ║         ║       yes      ║
╠═══════════════════════════════════════════╬═══════════╬═════════════════════════════════════════════════════╬═════════╬════════════════╣
║              pictures.large               ║   String  ║     Large user image used for the user dashboard    ║         ║       yes      ║
╠═══════════════════════════════════════════╬═══════════╬═════════════════════════════════════════════════════╬═════════╬════════════════╣
║              pictures.default             ║   String  ║     The default user avatar if none is supplied     ║         ║       yes      ║
╠═══════════════════════════════════════════╬═══════════╬═════════════════════════════════════════════════════╬═════════╬════════════════╣
║          authentication.signedUp          ║   String  ║          The Date this user first signed up         ║         ║       no       ║
║                                           ║           ║                    for newsletters                  ║         ║                ║
╠═══════════════════════════════════════════╬═══════════╬═════════════════════════════════════════════════════╬═════════╬════════════════╣
║          authentication.password          ║   String  ║     This user's password, if using email signup     ║         ║       no       ║
╠═══════════════════════════════════════════╬═══════════╬═════════════════════════════════════════════════════╬═════════╬════════════════╣
║          authentication.createdAt         ║   String  ║            The date this user was created           ║         ║       no       ║
╠═══════════════════════════════════════════╬═══════════╬═════════════════════════════════════════════════════╬═════════╬════════════════╣
║         authentication.totalLogins        ║    Int    ║            The number of times, this user           ║         ║       yes      ║
║                                           ║           ║                     has logged in                   ║         ║                ║
╠═══════════════════════════════════════════╬═══════════╬═════════════════════════════════════════════════════╬═════════╬════════════════╣
║           authentication.logins           ║   Array   ║        Array of User login's date and device        ║         ║       yes      ║
╠═══════════════════════════════════════════╬═══════════╬═════════════════════════════════════════════════════╬═════════╬════════════════╣
║         authentication.logins.date        ║   String  ║             The Date the user logged in             ║         ║       yes      ║
╠═══════════════════════════════════════════╬═══════════╬═════════════════════════════════════════════════════╬═════════╬════════════════╣
║        authentication.logins.device       ║   String  ║      The type of device the user logged in with     ║         ║       yes      ║
╠═══════════════════════════════════════════╬═══════════╬═════════════════════════════════════════════════════╬═════════╬════════════════╣
║         authentication.ageVerified        ║  Boolean  ║             Verification if the user is             ║         ║       no       ║
║                                           ║           ║               at least 20 years of age              ║         ║                ║
╠═══════════════════════════════════════════╬═══════════╬═════════════════════════════════════════════════════╬═════════╬════════════════╣
║       authentication.auth0Identities      ║   Array   ║        An array of identity object from Auth0       ║         ║       yes      ║
║                                           ║           ║           for each different type of login          ║         ║                ║
║                                           ║           ║                   used by the user                  ║         ║                ║
╠═══════════════════════════════════════════╬═══════════╬═════════════════════════════════════════════════════╬═════════╬════════════════╣
║  authentication.auth0Identities.provider  ║   String  ║              The Social-Login Provider              ║         ║       yes      ║
╠═══════════════════════════════════════════╬═══════════╬═════════════════════════════════════════════════════╬═════════╬════════════════╣
║   authentication.auth0Identities.user_id  ║   String  ║        The Auth0 User ID for this login type        ║         ║       yes      ║
╠═══════════════════════════════════════════╬═══════════╬═════════════════════════════════════════════════════╬═════════╬════════════════╣
║ authentication.auth0Identities.connection ║   String  ║      The type of Auth0 connection that was used     ║         ║       yes      ║
╠═══════════════════════════════════════════╬═══════════╬═════════════════════════════════════════════════════╬═════════╬════════════════╣
║  authentication.auth0Identities.isSocial  ║  Boolean  ║      Verifies that a Social Login type was used     ║         ║       yes      ║
╠═══════════════════════════════════════════╬═══════════╬═════════════════════════════════════════════════════╬═════════╬════════════════╣
║             contactInfo.email             ║   String  ║               The email for this user               ║         ║       yes      ║
╠═══════════════════════════════════════════╬═══════════╬═════════════════════════════════════════════════════╬═════════╬════════════════╣
║             contactInfo.phone             ║   String  ║            The phone number for this use            ║         ║       yes      ║
╠═══════════════════════════════════════════╬═══════════╬═════════════════════════════════════════════════════╬═════════╬════════════════╣
║             contactInfo.locale            ║   String  ║           The users language of choice as           ║         ║       yes      ║
║                                           ║           ║       determined by the Social Login provider       ║         ║                ║
║                                           ║           ║                  or their preference                ║         ║                ║
╠═══════════════════════════════════════════╬═══════════╬═════════════════════════════════════════════════════╬═════════╬════════════════╣
║            contactInfo.timezone           ║    Int    ║             The users local Time Zone.              ║         ║       yes      ║
║                                           ║           ║         Retrieved from Social Login Provider        ║         ║                ║
╠═══════════════════════════════════════════╬═══════════╬═════════════════════════════════════════════════════╬═════════╬════════════════╣
║       contactInfo.location.ipAddress      ║   String  ║            IP address this user last used           ║         ║       yes      ║
╠═══════════════════════════════════════════╬═══════════╬═════════════════════════════════════════════════════╬═════════╬════════════════╣
║          contactInfo.location.lat         ║   String  ║ Latitude coordinates, this user last logged in from ║         ║       yes      ║
╠═══════════════════════════════════════════╬═══════════╬═════════════════════════════════════════════════════╬═════════╬════════════════╣
║         contactInfo.location.long         ║   String  ║           Longitude coordinates, this user          ║         ║       yes      ║
║                                           ║           ║                  last logged in from                ║         ║                ║
╠═══════════════════════════════════════════╬═══════════╬═════════════════════════════════════════════════════╬═════════╬════════════════╣
║        contactInfo.location.country       ║   String  ║      Country code this user last logged in from     ║         ║       yes      ║
╠═══════════════════════════════════════════╬═══════════╬═════════════════════════════════════════════════════╬═════════╬════════════════╣
║            contactInfo.devices            ║   Array   ║         The mobile devices used by a user to        ║         ║       yes      ║
║                                           ║           ║         connect to Social Apps - From Social        ║         ║                ║
║                                           ║           ║              Login Provider's Meta Data             ║         ║                ║
╠═══════════════════════════════════════════╬═══════════╬═════════════════════════════════════════════════════╬═════════╬════════════════╣
║        contactInfo.devices.hardware       ║   String  ║                The mobile Phone type                ║         ║       yes      ║
╠═══════════════════════════════════════════╬═══════════╬═════════════════════════════════════════════════════╬═════════╬════════════════╣
║           contactInfo.devices.os          ║   String  ║      The operating system for the mobile device     ║         ║       yes      ║
╠═══════════════════════════════════════════╬═══════════╬═════════════════════════════════════════════════════╬═════════╬════════════════╣
║         contactInfo.socialNetworks        ║   Array   ║       An array of Social Networks used by the       ║         ║       yes      ║
║                                           ║           ║         user + their respective account links       ║         ║                ║
╠═══════════════════════════════════════════╬═══════════╬═════════════════════════════════════════════════════╬═════════╬════════════════╣
║      contactInfo.socialNetworks.name      ║   String  ║            The name of the Social Network           ║         ║       yes      ║
╠═══════════════════════════════════════════╬═══════════╬═════════════════════════════════════════════════════╬═════════╬════════════════╣
║      contactInfo.socialNetworks.link      ║   String  ║    The Social Network Link for this users account   ║         ║       yes      ║
╠═══════════════════════════════════════════╬═══════════╬═════════════════════════════════════════════════════╬═════════╬════════════════╣
║               shopping.cart               ║   Array   ║     The Users Shopping Details: What's currently    ║         ║       no       ║
║                                           ║           ║      in the Users cart. What transactions have      ║         ║                ║
║                                           ║           ║           they madeThe Users shopping cart          ║         ║                ║
╠═══════════════════════════════════════════╬═══════════╬═════════════════════════════════════════════════════╬═════════╬════════════════╣
║             shopping.cart.qty             ║    Int    ║        The quantity of items of this product        ║         ║       no       ║
╠═══════════════════════════════════════════╬═══════════╬═════════════════════════════════════════════════════╬═════════╬════════════════╣
║       shopping.cart.nicotineStrength      ║    Int    ║        The nicotine strength of this product        ║         ║       no       ║
╠═══════════════════════════════════════════╬═══════════╬═════════════════════════════════════════════════════╬═════════╬════════════════╣
║           shopping.cart.product           ║  MongoID  ║         The Mongo ObjectID for this product         ║         ║       no       ║
╠═══════════════════════════════════════════╬═══════════╬═════════════════════════════════════════════════════╬═════════╬════════════════╣
║           shopping.transactions           ║   String  ║          The date this user first signed up         ║         ║       no       ║
║                                           ║ [Not Yet] ║         for newsletters - Typically coincides       ║         ║                ║
║                                           ║           ║               with users first purchase             ║         ║                ║
╠═══════════════════════════════════════════╬═══════════╬═════════════════════════════════════════════════════╬═════════╬════════════════╣
║              permissions.role             ║   String  ║         The authorization role for this user        ║         ║       yes      ║
╠═══════════════════════════════════════════╬═══════════╬═════════════════════════════════════════════════════╬═════════╬════════════════╣
║               userStory.age               ║    Int    ║               The age of this new user              ║         ║       yes      ║
╠═══════════════════════════════════════════╬═══════════╬═════════════════════════════════════════════════════╬═════════╬════════════════╣
║             userStory.birthday            ║   String  ║            The birthday of this new user            ║         ║       yes      ║
╠═══════════════════════════════════════════╬═══════════╬═════════════════════════════════════════════════════╬═════════╬════════════════╣
║               userStory.bio               ║   String  ║            The biography of this new user           ║         ║       yes      ║
╠═══════════════════════════════════════════╬═══════════╬═════════════════════════════════════════════════════╬═════════╬════════════════╣
║              userStory.gender             ║   String  ║                  The User's gender                  ║         ║       yes      ║
╠═══════════════════════════════════════════╬═══════════╬═════════════════════════════════════════════════════╬═════════╬════════════════╣
║              marketHero.tags              ║   Array   ║     Array of objects, containing all the "Tags"     ║         ║       no       ║
║                                           ║           ║      that have been added to this User's Market     ║         ║                ║
║                                           ║           ║         Hero profile, and the respective date       ║         ║                ║
╠═══════════════════════════════════════════╬═══════════╬═════════════════════════════════════════════════════╬═════════╬════════════════╣
║            marketHero.tags.name           ║   String  ║                The name of the "Tag"                ║         ║       no       ║
╠═══════════════════════════════════════════╬═══════════╬═════════════════════════════════════════════════════╬═════════╬════════════════╣
║            marketHero.tags.date           ║   String  ║            The Date this "Tag" was added            ║         ║       no       ║
║                                           ║           ║            the User\'s Market Hero profile          ║         ║                ║
╠═══════════════════════════════════════════╬═══════════╬═════════════════════════════════════════════════════╬═════════╬════════════════╣
║           socialProfileBlob.line          ║   String  ║    The Social Profile for the User's LINE account   ║         ║       yes      ║
╠═══════════════════════════════════════════╬═══════════╬═════════════════════════════════════════════════════╬═════════╬════════════════╣
║         socialProfileBlob.facebook        ║   String  ║  The Social Profile for the User's Facebook account ║         ║       yes      ║
╠═══════════════════════════════════════════╬═══════════╬═════════════════════════════════════════════════════╬═════════╬════════════════╣
║          socialProfileBlob.google         ║   String  ║   The Social Profile for the User's google account  ║         ║       yes      ║
╠═══════════════════════════════════════════╬═══════════╬═════════════════════════════════════════════════════╬═════════╬════════════════╣
║         socialProfileBlob.twitter         ║   String  ║  The Social Profile for the User's twitter account  ║         ║       yes      ║
╠═══════════════════════════════════════════╬═══════════╬═════════════════════════════════════════════════════╬═════════╬════════════════╣
║         socialProfileBlob.linkedin        ║   String  ║  The Social Profile for the User's Linkedin account ║         ║       yes      ║
╚═══════════════════════════════════════════╩═══════════╩═════════════════════════════════════════════════════╩═════════╩════════════════╝
```
