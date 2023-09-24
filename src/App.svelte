<script>
  import alerta from "./helpers/alerts";
  const preguntas = [{pregunta:'Es un tipo de inteligencia humana', 1:'Espacial', 2:'Reactiva', 3:'Limitada', respuesta:'1'},{pregunta:'Caracteristica principal de las maquinas reactivas', 1:'No tienen capacidad de memorizar', 2:'Tienen capacidad limitada para recordar', 3:'Tienen representaciones sobre el mundo', respuesta:'1'},
                    {pregunta:'Es un tipo de IA', 1:'Musical', 2:'Naturalista', 3:'Memoria limitada', respuesta:'3'},{pregunta:'Qué es la IA?', 1:'Un robot', 2:'Manera de automatizar tareas que son normalmente hechas por el humano y en donde la maquina puede predecir acciones para tomar desiciones propias', 3:'Un robot que te ayuda a realizar tus tareas', respuesta:'2'},
                    {pregunta:'Quipen desarrollo la prueba de turing?', 1:'Bill Gates', 2:'Steve Jobs', 3:'Alan Turing', respuesta:'3'}, {pregunta:'El agente que toma en cuenta el ambiente y reacciona en funcion de el es un tipo de agnete:', 1:'Reactivo simple', 2:'Basado en Modulos', 3:'Basado en Objetivos', respuesta:'1'},
                  {pregunta:'La busqueda en profundidad...', 1:'Se expande en profundidad en un solo nodo del árbol', 2:'Podemos regresar a un nodo anterior', respuesta:'1'},{pregunta:'Es un tipo de busqueda', 1:'Astral', 2:'En anchura', 3:'Superficial', respuesta:'2'},
                {pregunta:'Qué es el estado inicial cuando aplicamos un tipo de busqueda?', 1:'Es el punto de partida en la busqueda', 2:'El punto final de la busqueda', respuesta:'1'},{pregunta:'Qué es el coste del camino', 1:'Es el coste de ejecución', 2:'Función que asigna un coste númerico a cada camino', respuesta:'2'}]
    //Verificar en que pregunta vamos para mostrar el formulario
   $:start = 0
  let respuesta = 0
  const validar_respuesta = (e, respuestaNum)=>{
    e.preventDefault()
    if(respuesta >= preguntas.length) alerta('Has completado el formulario', 'success')
    else
    if(respuestaNum == respuesta) {
      alerta('Correcto', 'success')
      setTimeout(()=>{
        start++
      }, 1000)
    }else{
      alerta('Respuesta incorrecta', 'error')
    }
    
  }
</script>

<main>
  <h1>Jiménez Merlin Jorge Angel</h1>
  {#if start == preguntas.length}
    <h2>Has completado el formulario</h2>
    {:else}
    <div class="contenedor">
      {#each preguntas as  p, inx}
        <form class={`${inx != start ? 'hidden' : 'form'}`}>
          <p class="pregunta">{p.pregunta}</p>
          <div class="contenido">
            <label for={`${inx}-1`}>{p['1']}</label>
            <div class={`${respuesta == 1? 'seleccionado checkbox': 'checkbox'}`}>
                <input id={`${inx}-1`}  bind:group={respuesta}  name={p.pregunta} value="1" type="radio" >
            </div>
          </div>
          <div class="contenido">
            <label for={`${inx}-2`}>{p['2']}</label>
           <div class={`${respuesta == 2 ? 'seleccionado checkbox': 'checkbox'}`}>
               <input id={`${inx}-2`} bind:group={respuesta} name={p.pregunta} value="2" type="radio" >
           </div>
          </div>
        {#if p.hasOwnProperty(3)}
        <div class="contenido">
          <label for={`${inx}-3`}>{p['3']}</label>
          <div class={`${respuesta == 3? 'seleccionado checkbox': 'checkbox'} `}>
            <input id={`${inx}-3`} bind:group={respuesta} name={p.pregunta} value="3" type="radio">
          </div>
        </div>
        {/if}
          <button type="submit" on:click={(e)=>validar_respuesta(e,p.respuesta)}>Comprobar</button>
        </form>
      {/each}
  </div>
  {/if}
 
</main>

<style>
  main{
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .contenedor{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #d6ccc2;
    padding: 10px 15px;
    border-radius: 10px;
    width: 20rem;
    
  }
  .hidden{
    opacity: 0;
    display: none;
  }
  .form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: .8rem;

  }
  .pregunta{
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0;
  }
  .contenido{
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    gap: .7rem;
  }
  .contenido label{
    font-size: 1.4rem;
  }
  input[type="radio"] {
      display: hidden;
      opacity: 0;
  }
    input[type="radio"]:hover {
      cursor: pointer;
  }
  .checkbox{
    border: 1px solid #d5bdaf;
    background-color: #d5bdaf;
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    position: relative;
    
  }
  .checkbox::before{
    content: '';
    border:2px solid #e3d5ca;
    width: .5rem;
    height: .5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    border-radius: 50%;
    top: 25%;
    left: 26%;
  }
  .seleccionado::before{
    background-color: green;
    border:1px solid green !important;
    
  }
  button{
    background-color: #d5bdaf;
    border:1px solid #d5bdaf;
    cursor: pointer;
    border-radius: 10px;
    padding: 10px 25px;
    transition: all .3s ease-in;
    font-size: 1rem;
  }
  button:hover{
    transform: scale(.9);
    transition: all .3s ease-in;
    border:1px solid #e3d5ca;
  }
</style>
