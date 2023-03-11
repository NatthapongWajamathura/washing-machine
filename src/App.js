import logo from './logo.svg';
import './App.css';
import img from './img/img1.gif'

function App() {
  const data = [
    { image: img, label: 'Label for Image 1', status: 1 },
    { image: img, label: 'Label for Image 2', status: 2},
    { image: img, label: 'Label for Image 3', status: 1 }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {data.map(item => (
            <li key={item.image}>
              <div>
                <img src={item.image} alt={item.label} />
                {item.status == 1 ? <label>ว่าง</label> :<label>กำลังใช้งาน</label>}
              </div>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
