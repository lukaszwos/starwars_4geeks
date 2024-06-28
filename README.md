# Star wars assignment

## Prep

1. Get data from API

   - [x] Get data from here: https://swapi.dev/api/paople
   - [x] Map images from here: https://starwars-visualguide.com/assets/img/characters/3.jpg to the people from array above based on the position in the array

2. [x] create a Card component based on the schema of a "person"
3. [x] create a Profile component which will contain broader data than the Card component
4. [x] Create navbar with dropdown

## Routes/Routing

1. [x] / - some general buckets with categories of items/people/aliens/...
2. [x] /details/:id - dynamic route which will map {id} to {index +1} in array of people

## State management/context

1. [x] Data imported on launch = data
2. [x] our reducer [data, dispatch]
3. [x] data = {dataImported, favourites, dataFiltered, searchInputValue}
4. [x] favorites - two actions dispatch("add"), dispatch("remove")
5. [ ] dataFiltered - dispatch("set data filtered"), dispatch("clear data filtered")
6. [ ] serachInputValue dispatch("set input"), dispatch("clear input")

Now. Fork it and create this glorious app.
