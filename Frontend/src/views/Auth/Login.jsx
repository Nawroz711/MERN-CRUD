import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useStateContext } from '../../context/ContextProvider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { setUser, setToken } = useStateContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Fake login
    setUser({ name: 'Fake User', email: formData.email });
    setToken('fake-token');
    navigate('/dashboard');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Log In
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Email"
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Password"
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              sx={{ mb: 2 }}
            />
            <Button type="submit" variant="contained" fullWidth sx={{ mb: 2 }}>
              Log In
            </Button>
          </form>
          <Typography variant="body2" align="center" sx={{ mb: 1 }}>
            <Link to="/forgot-password">Forgot Password?</Link>
          </Typography>
          <Typography variant="body2" align="center">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
