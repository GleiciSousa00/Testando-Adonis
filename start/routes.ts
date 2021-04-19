import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.get('/posts', 'PostsController.index')
Route.post('/posts', 'PostsController.store')
Route.get('/posts/:id', 'PostsController.show')
Route.put('/posts/:id', 'PostsController.update')
Route.delete('/posts/:id', 'PostsController.destroy')
