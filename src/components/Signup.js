import { useState } from "react"; 
import { useNavigate } from "react-router-dom";
import axios from "axios"; 
import "./Signup.css"; 

function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://ubuntuxx.infinityfreeapp.com/signup.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, email, password })
            });
    
            const data = await response.json();
            if (data.success) {
                alert("Account Created Successfully!"); 
                navigate("/");
            } else {
                alert(data.message);
            }
        } catch (error) {
            alert("Server error. Please try again later.");
        }
    };
    

    return (
        <div className="signup-container">
            <div className="signup-box">
                <h1>UbuntuX</h1>
                <h2>Sign Up</h2>
                {error && <p className="error">{error}</p>}
                <form onSubmit={handleSignup}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Sign Up</button>
                </form>
                <p>Already have an account? <a href="/">Login</a></p>
            </div>
        </div>
    );
}

export default Signup;
