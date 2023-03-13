# Inforce frontend task
blob:https://xn--80affa3aj0al.xn--80asehdb/83e6b75e-1083-40b9-bad5-616e50ff26ba
###### Actual task

We need to build a product list web app. The goal is to simulate a shop app.
There are two primary views: the product list view and the product view.


###### Products List View:

On the list view, I can add products by clicking on the add button(after that modal window
should occur with different inputs which allows me to set product details, also inside modal
window should be two buttons, for confirmation and for canceling) and remove products
(When pressing the delete button I should see a modal with confirmation of removing this
product - I can either confirm or cancel the current action). You shouldn`t be able to add an
empty product without setting data for him.
The list view should always sort alphabetically first, and then by count. Also I can select how
products should be sorted from the dropdown menu.

###### Product View:

On the product view, I can see all of the details of the product. After pressing the edit
button I can see the modal with different inputs which allows me to change product details.
Also you can add and delete comments for the current product.

### `npm install`

## First of all launch the json-server

### `npx json-server --watch data/db.json --port 8000`


Open [http://localhost:8000/data](http://localhost:8000/data) to view JSON it in the browser.


## Then launch the React App

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.