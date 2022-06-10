import './header.css'

function Header() {
  return (
    <div>

      <header>
        <h1>Guia de enfrentamento</h1>

        <p className='caption'>CRISE CORONAVÍRUS</p>

        <p className='phrase-header'>❤️feito com amor por</p>

        <a href="https://fidelizii.com.br/" target='_blank' className='link-fide'>FideliZi!</a>
        
        <nav>
          <a href="#">&#x2764;Conte conosco</a>
          <a href="#">&#x1FA84; que fazer?</a>
          <a href="#">&#x1F4F0;Notícias Empreendedoras</a>
          <a href="#">&#x21AA;Compartilhe</a>
        </nav>

      </header>

    </div>
  );
}

export default Header;
