import { useState, FormEvent } from "react";

export function AddTodo() {
    const [newTodo, setNewTodo] = useState('')


    function handleNewTodo(e: FormEvent) {
        e.preventDefault()

        console.log(newTodo)
    }

    return (
        <form>
            <input 
                type="text"
                placeholder="Novo to-do"
                value={newTodo}
                onChange={e => setNewTodo(e.target.value)}
            />
            <button type="submit">Adicionar</button>
        </form>
    )
}