# collabright

[collabright][collabrightus] **NB:** This should be a link to your production site

[collabrightus]: http://www.collabright.us

## Minimum Viable Product

collabright is a web application modeled after Piazza that will be built using Ruby on Rails and React.js.

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] A production README.
- [ ] Ability to Create and Save Posts
  - [ ] Posts can be created, edited, and viewed.  
  - [ ] Posts track date submitted, last updated date, type of submission(user or instructor), type of post(public question, note, instructor only).
  - [ ] Post Body can only be edited by owner.
- [ ] Collaborative Answer Field
  - [ ] Can be edited by all users.
  - [ ] Changes are submitted in real time, with "new" edits badge visible in the question index view.
  - [ ] Field submission history is tracked.
- [ ] Post-level Discussion Field
  - [ ] Users can create new comments.
  - [ ] New comments update the discussion.
- [ ] User Homepage
  - [ ] Homepage displays navigation components
  - [ ] Homepage requires user login before loading further data.
  - [ ] User can open and close the Post Search List


## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: docs/views.md
[components]: docs/components.md
[flux-cycles]: docs/flux-cycles.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (1 day, W1 Tu 6pm)

**Objective:** Functioning rails project with Authentication

- [ ] create new project
- [ ] create `User` model
- [ ] authentication
- [ ] user signup/signin pages
- [ ] blank landing page after signin

### Phase 2: Posts Model, API, and basic APIUtil (1.5 days, W1 Th 12pm)

**Objective:** Posts can be created, read, edited and destroyed through
the API.
post
- [ ] create `Post` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for posts (`PostsController`)
- [ ] jBuilder views for posts
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (1.5 days, W1 F 6pm)

**Objective:** Posts can be created, read, edited and destroyed with the
user interface.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each post component, building out the flux loop as needed.
  - [ ] `PostsIndex`
  - [ ] `PostIndexItem`
  - [ ] `PostForm`


### Phase 4: Review And Polish (0.5 days, W2 M 12pm)

**Objective:** Existing pages (including signup/signin) will look good.

- [ ] review work so far

### Phase 5: Search (1 day, W2 Tu 12pm)

**Objective:** Posts can be searched.

- [ ] create Search
- build out API, Flux loop, and components for:
  - [ ] Searching Posts based on inputs
  - [ ] Search updates live
  - [ ] Search can specify title, body, comment fields to be searched

### Phase 6: Tags/Folders (1 days, W2 Th 12pm)

**Objective:** Posts can be tagged with folders, folders are displayed in the second bar of the page.

- [ ] create `Folder` model and join table
- build out API, Flux loop, and components for:
  - [ ] fetching folders
  - [ ] adding folders to posts
  - [ ] creating folders
  - [ ] updating display when folder is clicked
- [ ] Style new elements

### Phase 7: PostComments (1 day, W2 F 12pm)

**Objective:** Posts have general comments, acting as an active chat for that post.

- [ ] create 'PostComments' model and table
- build out API, Flux loop, and components for:
  - [ ] fetching PostComments
  - [ ] adding comments to posts
  - [ ] creating comments
  - [ ] updating display when comments are created

### Phase 8: Styling Cleanup and Seeding (.5 days, W2 F 6pm)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] Posts Search
- [ ] Tagging/Folders
- [ ] TA Answer
- [ ] Pagination / infinite scroll for Posts Index
- [ ] Pagination / infinite scroll for PostComments
- [ ] Changelogs for Posts
- [ ] Multiple sessions

[phase-one]: docs/phases/phase1.md
[phase-two]: docs/phases/phase2.md
[phase-three]: docs/phases/phase3.md
[phase-four]: docs/phases/phase4.md
[phase-five]: docs/phases/phase5.md
