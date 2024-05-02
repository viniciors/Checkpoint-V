import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="princpal">
        <header className="cabeca">
          <h1 className="titulo">Bolo Formigueiro</h1>
          <Image className="img"
            src="/bolo-de-formigueiro-.jpg"
            alt ="Bolo Formigueiro"
            width={800}
            height={500}
          />
        </header>
        <h1 className="ingred">Ingredientes (12 porções)</h1>
        <ul className="list">
          <li>2 xícaras de farinha</li>
          <li>2 xícaras de açúcar</li>
          <li>1 colher de fermento em pó</li>
          <li>3 ovos</li>
          <li>1/2 xícara de óleo</li>
          <li>1 xícara de leite</li>
          <li>1/2 pacotinho de 100 g de chocolate granulado</li>
        </ul>
        <h2 className="cobertura">Cobertura</h2>
        <ul className="list">
          <li>5 colheres de açúcar</li>
          <li>5 colheres de chocolate em pó</li>
          <li>1 colher de margarina</li>
          <li>3 colheres de leite</li> 
          <li>1/2 pacotinho de 100 g de chocolate granulado</li>
        </ul>
        <h3 className="modo">Modo de Preparo</h3>
        <ul className="list">
          <li>1. Massa Coloque em uma vasilha a farinha, o açúcar e o fermento e mexa.</li>
          <li>2. Adicione os ovos, o óleo, o leite e mexa tudo.</li>
          <li>3. Adicione o chocolate granulado e mexa.</li>
          <li>4. Leve ao forno em uma forma untada e enfarinhada por aproximadamente 25 minutos no forno médio (180°).</li>
          <br></br>
          <li> <strong>Preparo da Cobertura</strong> </li>
          <br></br>
          <li>5. Misture o açúcar, o chocolate em pó, a margarina e o leite e leve ao fogo até levantar fervura, espere uns 3 minutinhos e desligue.</li>
          <li>6. Despeje a cobertura sobre o bolo e salpique o chocolate granulado.</li>
        </ul>
      </div>
      <div className="segunda">
        <header className="cabeca">
          <h1 className="titulo">Bolo de Cenoura</h1>
          <Image className="img"
            src="/cenoura.jpeg"
            alt ="Bolo de Cenoura"
            width={800}
            height={500}
          />
        </header>
        <h1 className="ingred">Ingredientes (12 porções)</h1>
        <ul className="list">
          <li>3 cenouras médias raladas</li>
          <li>4 ovos</li>
          <li>1 xícara de óleo</li>
          <li>2 xícaras de açúcar</li>
          <li>2 xícaras de farinha de trigo</li>
          <li>1 colher de fermento em pó</li>
        </ul>
        <h2 className="cobertura">Cobertura</h2>
        <ul className="list">
          <li>1 colher de margarina</li>
          <li>3 colheres de achocolatado</li>
          <li>1 xícara de açúcar</li>
          <li>1 xícara de leite</li> 
        </ul>
        <h3 className="modo">Modo de Preparo</h3>
        <ul className="list">
          <li>1. Em um liquidificador, adicione a cenoura, os ovos e o óleo, depois misture.</li>
          <li>2. Acrescente o açúcar e bata novamente por 5 minutos.</li>
          <li>3. Em uma tigela ou na batedeira, adicione a farinha de trigo e depois misture novamente.</li>
          <li>4. Acrescente o fermento e misture lentamente com uma colher.</li>
          <li>5. Asse em um forno preaquecido a 180° C por aproximadamente 40 minutos.</li>
          <br></br>
          <li > <strong>Preparo da Cobertura</strong> </li>
          <br></br>
          <li>6. Despeje em uma tigela a manteiga, o chocolate em pó, o açúcar e o leite, depois misture.</li>
          <li>7. Leve a mistura ao fogo e continue misturando até obter uma consistência cremosa, depois despeje a calda por cima do bolo.</li>
        </ul>
      </div>    
    </main>
  );
}
