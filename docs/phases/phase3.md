# Phase 3: Notebooks and Tags (2 days)

## Rails
### Models
* Posts

### Controllers
* Api::NotebooksController (create, destroy, index, show, update)

### Views
* posts/index.json.jbuilder
* posts/show.json.jbuilder

## Flux
### Views (React Components)
* PostsIndex
  - PostIndexItem
* PostForm
* SearchIndex

### Stores
* Posts

### Actions
* ApiActions.receiveAllNotebooks -> triggered by ApiUtil
* ApiActions.receiveSingleNotebook
* ApiActions.deleteNotebook
* NotebookActions.fetchAllNotebooks -> triggers ApiUtil
* NotebookActions.fetchSingleNotebook
* NotebookActions.createNotebook
* NotebookActions.editNotebook
* NotebookActions.destroyNotebook

### ApiUtil
* ApiUtil.fetchAllNotebooks
* ApiUtil.fetchSingleNotebook
* ApiUtil.createNotebook
* ApiUtil.editNotebook
* ApiUtil.destroyNotebook

## Gems/Libraries
