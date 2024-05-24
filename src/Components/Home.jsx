import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Creating a form to capture user input and navigate:
function Home() {
    const[city, setCity] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/vite-react-router/weather/${city}`);
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <form onSubmit={handleSubmit} className="flex flex-col bg-blue-200 rounded-lg p-2">
                <label>
                    Enter your City:
                    <input 
                        className="bg-gray-100 my-2 ml-1 rounded-md px-2"
                        type="text" 
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </label>
                <button type="submit" className="bg-orange-400 hover:bg-orange-200 rounded-md">See weather updates!</button>
            </form>
        </div>
    );
}

export default Home;