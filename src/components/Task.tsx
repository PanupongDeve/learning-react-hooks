import { FC, useEffect } from 'react'

interface Props {
    id: number,
    task: string
}

const Task:FC<Props> = ({task}) => {
    useEffect(() => {
        console.log('Rendering <Task />', task)
    })

    return (
        <li>{task}</li>
    )
}

export default Task