import './App.css';
import React, {useState} from 'react';

function App() {
  const [jogadores, setJogadores] = useState([]);
  const [time1, setTime1] = useState([]);
  const [time2, setTime2] = useState([]);
  const [nome, setNome] = useState();

  function add(){
    if(nome == null){
      alert('Por favor, preencha o campo para continuar')
    }
    else{
      setJogadores([...jogadores, nome])
      setNome('');
    }
  }

  function sortearTime1()
  {
    var jogadorSorteado = jogadores[Math.floor(Math.random() * jogadores.length)]
    var indice = jogadores.indexOf(jogadorSorteado);

    setTime1([...time1, jogadorSorteado])

    jogadores.splice(indice, 1);
  }

  function sortearTime2()
  {
    var jogadorSorteado = jogadores[Math.floor(Math.random() * jogadores.length)]
    var indice = jogadores.indexOf(jogadorSorteado);

    setTime2([...time2, jogadorSorteado])

    jogadores.splice(indice, 1);
  }

  return(
    <div class="App">
      <h1>Adicione os jogadores</h1>
      
        <label><b>Nome </b></label>
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />

        <button type='button' onClick={add}>+</button>

      <ul>
        {jogadores.map(jogador => (
          <li key={jogador}>
            {jogador}
            </li>
        ))}  
      </ul>
      
      <hr/>

      <h1>Time 1</h1>
      <button type="button" onClick={sortearTime1}>Sortear</button>

      <ul>
        {time1.map(item => (
          <li key={item}>
            {item}
            </li>
        ))}  
      </ul>

      <hr/>

<h1>Time 2</h1>
<button type="button" onClick={sortearTime2}>Sortear</button>

<ul>
  {time2.map(item => (
    <li key={item}>
      {item}
      </li>
  ))}  
</ul>
    </div>
  );
}

export default App;
