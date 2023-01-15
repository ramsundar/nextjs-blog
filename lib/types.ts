export type PostData = {
    date: string
    title: string
    id: string
    contentHtml?: string
}

export type TodoListData = {
    userId: number
    id: number
    title: string
    completed: boolean
}