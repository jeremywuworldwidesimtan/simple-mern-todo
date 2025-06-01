import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoList from './components/to-do-list'
import './App.css'
import AddItems from './components/add-items';

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
