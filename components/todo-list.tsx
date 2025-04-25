"use client"

import type React from "react"

import { useState } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import type { Database } from "@/lib/database.types"
import { Loader2, Trash2 } from "lucide-react"

type Todo = Database["public"]["Tables"]["todos"]["Row"]

interface TodoListProps {
  initialTodos: Todo[]
  userId: string
}

export function TodoList({ initialTodos, userId }: TodoListProps) {
  const supabase = createClientComponentClient<Database>()
  const router = useRouter()
  const [todos, setTodos] = useState<Todo[]>(initialTodos)
  const [newTask, setNewTask] = useState("")
  const [loading, setLoading] = useState(false)

  const addTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!newTask.trim()) return

    setLoading(true)

    try {
      const { data, error } = await supabase
        .from("todos")
        .insert({
          user_id: userId,
          task: newTask,
          is_complete: false,
        })
        .select()
        .single()

      if (error) throw error

      setTodos([data, ...todos])
      setNewTask("")
      router.refresh()
    } catch (error) {
      console.error("Error adding todo:", error)
    } finally {
      setLoading(false)
    }
  }

  const toggleTodo = async (todo: Todo) => {
    try {
      const { error } = await supabase.from("todos").update({ is_complete: !todo.is_complete }).eq("id", todo.id)

      if (error) throw error

      setTodos(todos.map((t) => (t.id === todo.id ? { ...t, is_complete: !t.is_complete } : t)))
      router.refresh()
    } catch (error) {
      console.error("Error updating todo:", error)
    }
  }

  const deleteTodo = async (id: string) => {
    try {
      const { error } = await supabase.from("todos").delete().eq("id", id)

      if (error) throw error

      setTodos(todos.filter((t) => t.id !== id))
      router.refresh()
    } catch (error) {
      console.error("Error deleting todo:", error)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Todo List</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={addTodo} className="flex space-x-2">
          <Input
            placeholder="Add a new task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            disabled={loading}
          />
          <Button type="submit" disabled={loading || !newTask.trim()}>
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Add"}
          </Button>
        </form>

        <div className="space-y-2">
          {todos.length === 0 ? (
            <p className="text-center text-muted-foreground py-4">No todos yet. Add one above!</p>
          ) : (
            todos.map((todo) => (
              <div key={todo.id} className="flex items-center justify-between p-2 border rounded-md">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={`todo-${todo.id}`}
                    checked={todo.is_complete}
                    onCheckedChange={() => toggleTodo(todo)}
                  />
                  <label
                    htmlFor={`todo-${todo.id}`}
                    className={`text-sm ${todo.is_complete ? "line-through text-muted-foreground" : ""}`}
                  >
                    {todo.task}
                  </label>
                </div>
                <Button variant="ghost" size="icon" onClick={() => deleteTodo(todo.id)} aria-label="Delete todo">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))
          )}
        </div>
      </CardContent>
      <CardFooter>
        <p className="text-xs text-muted-foreground">
          {todos.filter((t) => t.is_complete).length} of {todos.length} tasks complete
        </p>
      </CardFooter>
    </Card>
  )
}
