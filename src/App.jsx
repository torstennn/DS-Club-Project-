import MapView from './components/MapView';

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ padding: '10px', background: '#2c3e50', color: 'white' }}>
        <h1 style={{ margin: 0 }}>My Housing Map</h1>
      </header>
      
      {/* This div is the map's "box" */}
      <div style={{ flex: 1, position: 'relative' }}>
        <MapView />
      </div>
    </div>
  );
}

export default App;