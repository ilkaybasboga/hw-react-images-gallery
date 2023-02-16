
import Picture from "./components/Picture";
import data from "./helper/data"



function App() {
  return (
    <div className="section">
<h1>İmage Gallery</h1>
<div  className="card">
{data.map(({photographer,src:{large}})=>(
<Picture  name={photographer} image={large}/>
))}
</div>
    </div>
  );
}

export default App;
