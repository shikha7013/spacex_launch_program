# SpaceX Launch Program
#### General Info:
This application help users list and browse all launches by SpaceX program
#### Stack Details:
Application is created with below technologies:
##### Frontend:
* HTML
* CSS
* Javascript
#### Backend:
* Node JS framework
#### Technical Overview:
Application opens up with some filters of launch year,successful landing & launching on the left side menu.This menu contains static content.Selecting any filter hits spacex API from backend and loads the response array of objects.Further based on the length of response object,page is popluated with the launches dynamically.If there is no data for the selected filters,user will get an alert of 'No data present'</br></br>
Also to make the application work on different screen sizes and resolutions,media queries are used in the css.
#### Desktop View:
![](/desktop-view.PNG)
#### Mobile View:
![](/mobileView-1.jpeg) 
![](/mobileView-2.jpeg)
</br></br>
#### Lighthouse score for Performance,Accessibility, SEO and Best Practices:
![](/lighthouse1.JPG)
#### Setup Instructions:
* Take a clone of the project from github repository
* Unzip the folder
* Open 'index.html' file in browser
#### Application is hosted on Heroku.To view [Click here](https://spacex-1.herokuapp.com/index.html)
