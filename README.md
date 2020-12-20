# I Love That Song

The app helping music journalists organize the music they need for research. Inspired by [Discogs](https://www.discogs.com/), this full-CRUD app pulls from its API and returns data on every album available in its database. "I Love That Song" was created as my General Assembly Unit 2 Project, building in one week a full-stack application from scratch using Node, Express, MongoDD, and Mongoose. (See icebox below for new features currently in development.)

## Getting Started

Deploy the app: https://i-love-that-song.herokuapp.com/

Link to original Trello board: https://trello.com/b/ELs21E3z

## Screenshots

### Landing Page
![landing page](https://i.imgur.com/nk4PiKm.png)
--
### Album Search
![album search](https://i.imgur.com/MRH0HG9.png)

### Album Details
![album details](https://i.imgur.com/YHk77vT.png)

## What This App Can Do

- Sign in and out through Google and save your album collection information.
- Create and update your personalized album collection, to-do's (or to-listen) list, and message board posts asking other writers about what albums to find to help with their research. (Don't worry, you can delete your posts.)
- Search and read up on some of your favorite albums, including: genre, style, liner notes, tracklist, and more. You also can listen to most albums in full via embedded YouTube streaming.

## The Code Itself

- The main Mongoose model revolves around an album schema matching every available API key and its various values.
- Favorite EJS template: The albums's show.ejs contains a For Each statement slicing an album's given YouTube IDs and converting them into iframe videos, while also not returning an error if an album page does not contain any videos.
- Albums controller contains several functions including: newAlbum, search, show, addToListenList and removeFromListenList (in development), addToCollection and removeFromCollection, and index.

## Key Learnings/Takeaways

- Biggest challenge: Spending a lot of time studying the API and planning out everything, only to pivot and change everything once I started playing with and using the API. Make a plan, but be ready to be flexible!
- I tried creating something complex and then had to turn it into something simple. Going forward, I want to first build something simple, and then add to it.
- Making DRY code is so vital, and something I want to pay closer attention to when edting and styling many different moving parts at once. Never understimate a well-placed button class.
- In order to fully utulize the API and make my search and results more dynamic and detailed, I am studying how to make more complex JS get requests and promises.

## Technologies Used

* Node
* Express
* MongoDD
* Mongoose
* Trello
* JavaScript  
* HTML  
* CSS  
* Postman  
* app.diagrams.net  
* Discogs API
* GitHub  
* Git  
* Mac Terminal  
* Visual Studio Code  
* Google Chrome DevTools (and, like, just Google)  
* Bootstap  
* Coffee  
* Naps  
* Breaks  
* Calling my mom  
* Decent nights' sleep 

## Next Steps (Icebox)

- Flesh out media query for both mobile and large desktop view.
- Fix error page issue to give user more clear direction on where to go after encountering a potential issue.
- Do a second pass on overall styling, especially of message board and profile page.
- Populate more options and types of releases in music search function; right now, you can only search for albums ("masters"), but the API also contains information on "artists", "labels", and "releases" (singles and EPs). This relates into the issue of not being able to populate album artwork one's collection or album details page.
- Expand user login capabilities to also incorporate Discogs accounts; if you log into the app through Discogs, your saved albums will automatically pop up.
- Allow users to write, delete, and update reviews on specific albums on the album details page.
- Expand users interaction with abilities to follow/unfollow other writers and see their reviews and saved albums.
- Install organization options for album collection beyond most recently saved albums appearing at the bottom of the list.

-bg
