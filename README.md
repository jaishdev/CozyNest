
# CozyNest – CRUD, Auth, and Image Upload Practice Project

**Live Site:** [cozynest](https://cozynest-jd6g.onrender.com)

Hi! So **CozyNest** is a personal **backend-focused** project I built to practice **CRUD operations, user authentication, and working with image uploads** and proper project structure using the **MVC pattern**. I named it **CozyNest** – the idea was to create a simple platform where users can post "listings" (kind of like properties or products) and interact with them.

The goal here wasn't to make a polished product or a commercial-ready app. Instead, I focused on learning how backend systems work, especially around:

- Session-based authentication using Passport
- Handling user-generated content and ownership (create/edit/delete)
- Working with Cloudinary for image storage
- Structuring an Express + MongoDB app properly
- Validating user input securely using Joi

## Tech I Used

| Purpose           | Tech/Library                |
|-------------------|-----------------------------|
| Server            | Express.js                  |
| Database          | MongoDB, Mongoose           |
| Auth              | Passport.js, passport-local |
| Sessions          | express-session, connect-mongo |
| Templates         | EJS + ejs-mate              |
| Image Upload      | Multer, Cloudinary          |
| Validation        | Joi                          |
| Flash Messages    | connect-flash               |
| Styling           | Bootstrap 5 (only basic use)|

## What You Can Do on CozyNest

- Sign up / Log in using your own credentials (handled securely using Passport)
- Create a new listing with an image (uploaded to Cloudinary)
- Edit or delete your own listing
- Leave a review on any listing
- Delete your own review

## Folder Structure

```
cozynest/
├── controllers/        # Route handler logic (e.g., createListing, NewReview)
├── init/               # App initialization configs (DB setup)
├── models/             # Mongoose schemas (User.js, Listing.js, Review.js)
├── public/             # Static files like CSS, client-side JS
├── routes/             # Express routers (e.g., listings.js, users.js, reviews.js)
├── utils/              # Utility functions (helpers)
├── views/              # EJS templates (form pages, layouts, show/list views)
├── .gitignore          # Git ignore rules (includes .env etc.)
├── Schema.js           # Joi schema validation logic
├── app.js              # Main entry point for the app
├── cloudConfig.js      # Cloudinary config setup
├── middleware.js       # Custom middleware (auth checks, validation)
├── package.json        # Project metadata and dependencies
├── package-lock.json   # Lockfile for npm dependencies
```
### ⚙️ Environment Setup

Create a `.env` file in the root directory with required environment variables like:

- MongoDB connection string
- Cloudinary API credentials
- Session secret

You can refer to `app.js`and `cloudConfig.js` to see which env vars are needed.

## How to Run Locally

```bash
git clone https://github.com/your-username/cozynest.git
cd cozynest
npm install
npm start
```

Visit: `http://localhost:5000`

## Limitations (I’m aware of these)

- No email verification or password reset flow yet
- Cloudinary image deletion on listing removal isn't implemented
- UI is basic – the goal was backend logic, not visuals

## Why I Built This

I built CozyNest as a backend practice project — not to focus on design, but to deeply understand:

- How real-world user auth systems work
- Image uploads beyond just storing locally
- How CRUD operations are structured in RESTful apps
- Proper route protection and user-specific permissions
- What goes into building a basic full-stack app, even without React

### Future Plans

* Add user profile pages
* Add delete/edit review feature
* Admin/moderation tools
* Pagination and filtering
* Improve UI for production
  
## Deployment
This app is deployed on Render.

Let me know what you think, and if you're a beginner like me — happy to walk you through anything you find confusing in the code :)
