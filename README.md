# I Love That Song

The app helping music journalists organize the music they need for research. This full-stack, full-CRUD database pulls from the [Discogs](https://www.discogs.com/) API and returns YouTube streaming links, genre and style descriptions, liner notes, tracklistings, and more data on every album available through Discogs. "I Love That Song" was built with Node, Express, MongoDD, and Mongoose.

## Getting Started

Deploy the app: https://i-love-that-song.herokuapp.com/

Run local (in your terminal): "> npm start"

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
## Technologies Used

* Node
* Express
* MongoDD
* Mongoose
* Trello
* JavaScript  
* EJS Templates
* HTML  
* CSS  
* Postman  
* app.diagrams.net  
* Discogs API
* GitHub  
* Git  
* Mac Terminal  
* Visual Studio Code  
* Google Chrome DevTools
* Google 
* Bootstrap  
* Coffee  
* Naps  
* Breaks   

## Next Steps (Icebox)

- Flesh out media query for both mobile and large desktop view.
- Fix error page issue to give user more clear direction on where to go after encountering a potential issue.
- Do a second pass on overall styling, especially of message board and profile page.
- Populate more options and types of releases in music search function; right now, you can only search for albums ("masters"), but the API also contains information on "artists", "labels", and "releases" (singles and EPs). This relates into the issue of not being able to populate album artwork one's collection or album details page.
- Expand user login capabilities to also incorporate Discogs accounts; if you log into the app through Discogs, your saved albums will automatically pop up.
- Allow users to write, delete, and update reviews on specific albums on the album details page.
- Expand users interaction with abilities to follow/unfollow other writers and see their reviews and saved albums.
- Install organization options for album collection beyond most recently saved albums appearing at the bottom of the list.