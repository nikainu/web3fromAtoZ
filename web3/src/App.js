import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Character( {value}) {

  var str = 'images/' + value + '.png'
  var explanation = texts[value]
  var title = titles[value]

  return <>
    <div class="box">
      <img src={str}/>
      <div class="box-content">
        <h3 class="title">{title}</h3>
        <span class="post">{explanation}</span>
      </div>
      <ul class="icon">
        <li><a href="#"><i class="fa fa-search"></i></a></li>
        <li><a href="#"><i class="fa fa-link"></i></a></li>
      </ul>
    </div>
    </>
}

function App() {
  return (
    <div className={'background-grey'}>
      <div className="flexbox-container">
        <Character value="A" />
        <Character value="B" />
        <Character value="C" />
      </div>
      <div className="flexbox-container">
        <Character value="D" />
        <Character value="E" />
        <Character value="F" />
      </div>
      <div className="flexbox-container">
        <Character value="G" />
        <Character value="H" />
        <Character value="I" />
      </div>
      </div>
  );
 
}

export default App;

const titles = new Map();

titles["A"] = "Address"

const texts = new Map();

texts["A"] = "wird benötigt um Transaktionen auf der blockchain zu versenden und zu erhalten. Sie wird aus den letzten 20 bytes des public keys generiert."


