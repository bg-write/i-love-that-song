# I Love That Song

The app helping music journalists organize the music and information they need for research. (In development.) Inspired by [Discogs](https://www.discogs.com/), this full-CRUD app pulls from the Discogs API to return data on every album available in its database. "I Love That Song" was created as my General Assembly Unit 2 Project, building in one week a full-stack application from scratch using Node, Express, MongoDD, and Mongoose.

## Getting Started

Deploy the app: https://i-love-that-song.herokuapp.com/

Link to original Trello board: https://trello.com/b/ELs21E3z

## Screenshots

### Landing page
![landing page](imgur)
--
###

## What This App Can Do

- Sign in and out through Google, saving your information even if you log out.
- Create and update your personalized album collection, to-do's (or to-listen) list, and message board posts asking other users about what albums to find to help with their research. (Don't worry, you can delete your posts.)
- Search and read up on some of your favorite albums, including: genre, style, liner notes, tracklist, credited musicians, in-app YouTube streaming, and more.

## The Code Itself

- The main Mongoose model revolves around an album schema matching every available API key and its various values.
- Favorite EJS template: The albums's show.ejs contains a forEach statement slicing an album's given YouTube IDs and converting them into an iframe video, while also not returning an error if an album page does not contain any videos.
- albums controller contains several functions, including: newAlbum, search, show, addToListenList and removeFromListenList (in development), addToCollection and removeFromCollection, and index.

## Key Learnings/takeaways

- Biggest challenge: Spending a lot of time studying my API and planning out everything, only to pivot and change everything once I started playing with and using the API.
- I tried creating something complex and then had to turn it into something simple. Going first, I want to first build some simple, then add to it.

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

## Next Steps (icebox):

[XXX]

-bg
