# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Posts

- `GET /api/posts`
  - Posts index/search
- `POST /api/posts`
- `GET /api/posts/:id`
- `PATCH /api/posts/:id`
- `DELETE /api/posts/:id`

### PostComments

- `GET /api/posts/:id/comments`
- `POST /api/posts/:id/comments`
- `PATCH /api/posts/:id/comments/:comment_id`
- `DELETE /api/posts/:id/comments/:comment_id`

### Folders

- `GET /api/folders`
- `POST /api/folders`
- `GET /api/folders/:id`
- `PATCH /api/folders/:id`
- `POST /api/posts/:id/folders`
- `DELETE /api/folders`
