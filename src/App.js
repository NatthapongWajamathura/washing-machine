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
    { image: img, machineName: 'เครื่องที่ 1', price: 30, status: 1 },
    { image: img, machineName: 'เครื่องที่ 2', price: 30, status: 2 },
    { image: img, machineName: 'เครื่องที่ 3', price: 30, status: 1 }
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
                <Item>{item.status == 1 ? (
                  <div>
                    <Item><label>{item.machineName} : ว่าง</label></Item>
                    <Item><label>ราคา : {item.price}</label></Item>
                    <br></br>
                    <Grid container spacing={2}>
                      <Grid item xs={6} md={8}>
                        <input type="number" placeholder='กรุณาหยอดเหรียญ'></input>
                      </Grid>
                      <Grid item xs={6} md={4}>
                        <input type="submit"></input>
                      </Grid>
                    </Grid>
                  </div>
                ) : (
                  <div>
                    <label>{item.machineName} : กำลังใช้งาน</label>
                    <Item><label>ราคา : {item.price}</label></Item>
                  </div>
                )}</Item>

              </Grid>
            </Grid>
          ))}
        </Box>

      </header>
    </div>
  );
}

export default App;
