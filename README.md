# Angular Homes App
- Install Angular if you don't have it installed

  `npm install -g @angular/cli`

- Once the code has been downloaded, change to this directory (insert your own local path)

  `cd homes-app`

- Install this projects dependencies (package.json)

  `npm install` 

- Run the application 

  `ng serve`

- Install the server (the '-g' makes it global, if you omit, it will install locally to the directory the command was run in)

  `npm install -g json-server`

- Run the server

  `json-server --watch db.json`
  `npx json-server --watch db.json` // if local install

- To begin unit test watch (*.spec.ts files) -- will open in browser and react / execute all tests when any file is saved
  
  `ng test`

- To debug unit tests, a launch.json file should have been added. Jasmine (test runner) uses port 9876.
    - Start up debugging by F5 or Debug Menu -> Run and Debug
    - Refresh chrome page that ng test fired up, any break points should be hit