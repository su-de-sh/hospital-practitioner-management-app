# Hospital Practitioner Profile Management App
Practitioner Profile Management App  is a web application that manages the profile of Hospital Practitioners. This app has login/signup feature that alllows user to authenticate and view all the list of practitioners once authenticated. The practitioner page can only be accessed by the authenticated user.This app has information of practitioner such as fullname, email, contact, dob, working days, working hours and many more. User token is expired in every one hrs and is refreshed automatically without needing to relogin. We can add, edit and delete practitioners and also we can mark practitioners as ICU specialist. ICU specialist are arranged alphabetically and shown at the top of the list while non-ICU Specialist are shown below.

## Postman Collection
- [Here is the post man request used in testing API](https://orange-resonance-555787.postman.co/workspace/db28db8d-d100-4381-a30f-014ae58bb0c7/collection/22334232-c0768db3-9303-49b7-a5cd-6f0da8794d85)

## API Documentation
- [Here is API Documention](https://documenter.getpostman.com/view/22334232/2s8YzWS18C)

# User experience walkthrough

<img src="https://res.cloudinary.com/dqgzhdegr/image/upload/v1671422196/Screenshot_from_2022-12-19_09-02-06_onlvnw.png" width="300px" />
<img src="https://res.cloudinary.com/dqgzhdegr/image/upload/v1671422196/Screenshot_from_2022-12-19_09-12-21_ca5ktr.png" width="300px" />
<img src="https://res.cloudinary.com/dqgzhdegr/image/upload/v1671422195/Screenshot_from_2022-12-19_09-12-35_wyzjzg.png" width="300px" />
<img src="https://res.cloudinary.com/dqgzhdegr/image/upload/v1671422194/Screenshot_from_2022-12-19_09-12-40_jqo0xl.png" width="300px" />
<img src="https://res.cloudinary.com/dqgzhdegr/image/upload/v1671422196/Screenshot_from_2022-12-19_09-02-06_onlvnw.png" width="300px" />
<img src="https://res.cloudinary.com/dqgzhdegr/image/upload/v1671422194/Screenshot_from_2022-12-19_09-12-49_l8s93q.png" width="300px" />
<img src="https://res.cloudinary.com/dqgzhdegr/image/upload/v1671422194/Screenshot_from_2022-12-19_09-13-24_brn5uq.png" width="300px" />
<img src="https://res.cloudinary.com/dqgzhdegr/image/upload/v1671422194/Screenshot_from_2022-12-19_09-15-11_ns9vkx.png" width="300px" />
<img src="https://res.cloudinary.com/dqgzhdegr/image/upload/v1671422194/Screenshot_from_2022-12-19_09-15-23_p0lq37.png" width="300px" />

# Technology Stack
This project is built on ReactJs on frontend and NodeJs with express framework on backend. Database is deployed on mongoDB and for frontend styling Material UI is used. Redux is used for state management. Unit test is done in JEST whereas Cypress is used for end to end testing. Postman is used for design ,build and testing of APIs.

# Installation

Follow  the installation guide below to setup and run this souce code locally on your device.

## Clone Repo
 ```
 git clone https://github.com/su-de-sh/hospital-practitioner-management-app.git
 ```
 ## Install and setup dependencies for dev
 Client
 ```
 cd client
 npm install
 
 ```
 Server
 ```
 cd server
 npm install

 ```
 ## Install and setup dependencies for production
 ```
 cd server
 npm install
 
 ```
 and create ``` .env ``` file that has following:
 ```
 PORT='YOUR PORT NO.'
 MONGODB_URI='YOUR MONGODB URI'
 MONGODB_URI_TEST= YOUR MONGODB URI FOR TEST
 ACCESS_TOKEN_SECRET="YOUR SECRETS"
 REFRESH_TOKEN_SECRET="YOUR ANOTHER SECRETS"
 ```
 # Running the Application
 ## For development
 Server
 ```
 npm run dev
 
 ```
 client
 ```
 npm start
 ```
 ## For production

 ```
 npm run build:ui
 npm start
 
 ```
 That's it! Now you should be up and running.
 
 # Author
 Sudesh Mate
 <img src="https://res.cloudinary.com/dqgzhdegr/image/upload/v1671425659/IMG_7644_egkuia.jpg" width="100px" />

 
 
 
