import { useForm } from 'react-hook-form';

export default function AddItems() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleOnSubmit = (data) => { 
        // handleSubmit automatically manages preventDefault and collects data into a parameter "data"
        // Pack data into raw json
        console.log(data)
        const todo = {
            title: data.title,
            description: data.description,
            user: data.user,
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
            <form onSubmit={handleSubmit(handleOnSubmit)} className="p-4 flex flex-col">
                <label htmlFor="title">Title</label>
                {/* register automatically connects input fields to RHF state */}
                <input {...register('title', { required: true })} placeholder="New todo" className="border-2 border-black px-0.5" autoComplete="off"/>
                {errors.title && <span>Title is required</span>}
                <label htmlFor="description">Description</label>
                <input {...register('description')} placeholder="Enter description" className="border-2 border-black px-0.5" autoComplete="off"/>
                <label htmlFor="user">User</label>
                <input {...register('user')} placeholder="Enter user" className="border-2 border-black px-0.5" autoComplete="off"/>
                <button type="submit" className='bg-blue-600 text-white m-4 p-2'>Add</button>
            </form>
        </>
    );
}