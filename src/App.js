import logo from './logo.svg';
import './App.css';
import img from './img/img1.gif'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  const data = [
    { image: img, label: 'Label for Image 1', status: 1 },
    { image: img, label: 'Label for Image 2', status: 2 },
    { image: img, label: 'Label for Image 3', status: 1 }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <Box sx={{ flexGrow: 1 }}>
        {data.map(item => (
          <Grid container spacing={2} columns={16}>
            <Grid item xs={8}>
            <Item><img src={item.image} alt={item.label} /></Item>
            </Grid>
            <Grid item xs={8}>
            <Item>{item.status == 1 ? <label>ว่าง</label> : <label>กำลังใช้งาน</label>}</Item>
            </Grid>
          </Grid>
            ))}
        </Box>
      
      </header>
    </div>
  );
}

export default App;
