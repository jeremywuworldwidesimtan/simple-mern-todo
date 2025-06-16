import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoList from './pages/to-do-list'
import './App.css'
import AddItems from './pages/add-items';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TodoList />} />
                <Route path="/add" element={<AddItems />} />
            </Routes>
        </BrowserRouter>
    );
}
