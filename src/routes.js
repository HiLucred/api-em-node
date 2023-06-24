import { Database } from './database.js'
import { randomUUID } from 'node:crypto'
import { buildRoutPath } from './utils/build-route-path.js'

const database = new Database()

export const routes = [
  {
    method: 'GET',
    path: buildRoutPath('/tasks'),
    handler: (req, res) => {
      const { title, description } = req.query

      const tasks = database.select(
        'tasks',
        title && description ? { title, description } : null
      )

      return res.end(JSON.stringify(tasks))
    },
  },
  {
    method: 'POST',
    path: buildRoutPath('/tasks'),
    handler: (req, res) => {
      const { title, description } = req.body

      if (title && description) {
        const data = {
          id: randomUUID(),
          title,
          description,
          completed_at: null,
          created_at: new Date().toLocaleString(),
          update_at: new Date().toLocaleString(),
        }

        database.insert('tasks', data)

        return res.writeHead(201).end()
      }

      return res.writeHead(400).end()
    },
  },
  {
    method: 'PUT',
    path: buildRoutPath('/tasks/:id'),
    handler: (req, res) => {
      const { id } = req.params
      const { title, description } = req.body
      const [task] = database.select('tasks', { id })

      if (!task) res.writeHead(400).end()

      if (title && description) {
        database.update('tasks', id, {
          title,
          description,
        })

        return res.writeHead(201).end()
      }

      return res.writeHead(400).end()
    },
  },
  {
    method: 'DELETE',
    path: buildRoutPath('/tasks/:id'),
    handler: (req, res) => {
      const { id } = req.params
      const [task] = database.select('tasks', { id })

      if (!task) res.writeHead(400).end()

      database.delete('tasks', id)

      return res.writeHead(204).end()
    },
  },
  {
    method: 'PATCH',
    path: buildRoutPath('/tasks/:id/complete'),
    handler: (req, res) => {
      const { id } = req.params
      const [task] = database.select('tasks', { id })

      if (!task) res.writeHead(400).end()

      const isTaskCompleted = !!task.completed_at
      const completed_at = isTaskCompleted ? null : new Date().toLocaleString()

      database.update('tasks', id, { completed_at })

      return res.writeHead(204).end()
    },
  },
]
