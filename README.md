# Star wars assignment

## Prep

1. Get data from API

   - get data from here: https://swapi.dev/api/paople
   - Map images from here: https://starwars-visualguide.com/assets/img/characters/3.jpg to the people from array above based on the position in the array

2. create a Card component based on the schema of a "person"
3. create a Profile component which will contain broader data than the Card component
4. Create navbar with dropdown

## Routes/Routing

1. / - some general buckets with categories of items/people/aliens/...
2. /details/:id - dynamic route which will map {id} to {index +1} in array of people

### State management/context

1. Data imported on launch = data
2. our reducer [data, dispatch]
3. data = {dataImported, favourites, dataFiltered, searchInputValue}
4. favorites - two actions dispatch("add"), dispatch("remove")
5. dataFiltered - dispatch("set data filtered"), dispatch("clear data filtered")
6. serachInputValue dispatch("set input"), dispatch("clear input")
