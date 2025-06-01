export default function AddItems() {
    const submitTodo = () => {
        // Collect data from form and console log it
        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const user = document.getElementById("user").value;
        
        // Pack data into raw json
        const todo = {
            title,
            description,
            user,
        };
        fetch("http://localhost:3200/api/todos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(todo),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            // Return back to the main page
            window.location.href = "/";
        })
        .catch(err => console.error(err));
    }
    return (
        <>
            <div className="p-4 bg-blue-600 text-white">
                <h2 className="text-2xl font-bold">Add an item</h2>
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" className="border-2 border-black" autoComplete="off"/>
                <label htmlFor="description">Description</label>
                <input type="text" id="description" name="description" className="border-2 border-black" autoComplete="off"/>
                <label htmlFor="user">User</label>
                <input type="text" id="user" name="user" className="border-2 border-black" autoComplete="off"/>
                <button onClick={submitTodo}>Add</button>
            </form>
        </>
    );
}