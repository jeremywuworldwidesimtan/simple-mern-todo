import { Button } from "@headlessui/react";
import ConfirmationModal from "../components/confirmation-modal";

export default function Todo(props) {
    // Refactor time
    const time = new Date(props.todo.createdAt);
    const date = time.toLocaleDateString();
    const timeString = time.toLocaleTimeString();

    const toggleComplete = async () => {
        try {
            await fetch(`http://localhost:3200/api/todos/${props.todo._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                }
            });

            // rerender the page after the request completes
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    }

    const deleteTodo = async () => {
        try {
            await fetch(`http://localhost:3200/api/todos/${props.todo._id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                }
            });

            // rerender the page after the request completes
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="p-4">
            <div className="flex justify-between">
                <div className="flex gap-4">
                    <h2 className="font-bold text-lg">{props.todo.title} {props.todo.completed ? "✅":"❌"}</h2>
                </div>
                <p>Priority: {props.todo.priority}</p>
            </div>
            <p>{props.todo.description}</p>
            <div className="flex justify-between items-center">
                <p>by {props.todo.user} on {date} at {timeString}</p>
                <div>
                    <Button onClick={toggleComplete} className="bg-blue-600 px-4 py-2 text-sm font-medium text-white focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-blue-600/30">Toggle complete</Button>
                    <ConfirmationModal dialogButton="Delete" dialogTitle="Delete todo?" dialogDescription="Are you sure you want to delete this todo?" onYes={deleteTodo} />
                </div>
            </div>
        </div>
    )
}