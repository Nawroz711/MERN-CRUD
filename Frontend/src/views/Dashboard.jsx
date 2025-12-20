import { useStateContext } from '../context/ContextProvider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
// import { BarChart } from '@mui/x-charts/BarChart'; // Uncomment if @mui/x-charts is installed

export default function Dashboard() {
  const { user } = useStateContext();

  const chartData = [
    { month: 'Jan', users: 120 },
    { month: 'Feb', users: 150 },
    { month: 'Mar', users: 180 },
    { month: 'Apr', users: 200 },
    { month: 'May', users: 220 },
    { month: 'Jun', users: 250 },
  ];

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Typography variant="h6" gutterBottom>
        Welcome back, {user.name || 'User'}!
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Total Users</Typography>
            <Typography variant="h4">150</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Active Sessions</Typography>
            <Typography variant="h4">23</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Revenue</Typography>
            <Typography variant="h4">$12,345</Typography>
          </Paper>
        </Grid>
      </Grid>

      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            User Growth Over Time
          </Typography>
          <div style={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f5', borderRadius: 4 }}>
            <Typography variant="body1">Chart Placeholder - Install @mui/x-charts for actual chart</Typography>
          </div>
        </CardContent>
      </Card>

      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Recent Activity
          </Typography>
          <Typography variant="body2">
            - User John Doe logged in<br/>
            - New user registered<br/>
            - System backup completed
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}