import './main.css';
import Card from '../Card/card';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';


function Main() {
    return (
        <div className='container'>
    
            <div className='timeline'>

                <Card 
                htmlString={` <p>Durante todo o período de quarentena, estamos à total disposição de cada um de vocês, clientes.
                O COVID-19 chegou desestabilizando o país e trazendo consigo uma grande incógnita quanto a proporção disso no país, nas pessoas e principalmente, na economia.</p>

                <p>Nosso compromisso com você durante essa fase, é para assegurar que o seu negócio seja o  menos afetado possível, mantendo sua base de clientes fidelizados sólida e segura!</p>

                <p>Apesar do caos, estamos contentes de ver na prática de que muitos clientes tem se apoiado em nossa solução como uma das saídas para enfrentar essa crise e estamos registrando um volume recorde de utilização de funções de comunicação com os clientes - sobretudo de email marketing e WhatsApp.</p>

                <p className='pink'>Hoje, contamos com um sistema robusto, funcionalidades eficientes, assertivas e primordiais para o seu negócio.</p>

                <h2 className='secondary-title'><div className='indicator'>></div>O poder está nas suas mãos!</h2>

                <p>Para garantir os melhores resultados e o mínimo de perdas, estamos liberando para todos os clientes, as funcionalidades do nosso maior e mais completo plano, o Elite.
                Com isso, você poderá fazer envio de email marketing para sua base de clientes e utilizar a régua de WhatsApp para reforçar sua comunicação com seu público.
                Para isto, basta entrar em contato com nosso suporte.</p>

                <h2 className='secondary-title'><div className='indicator'>></div>Você pode estar onde seu público deseja.</h2>

                <p>Além disso, também estamos disponibilizando licenças ilimitadas do FideliZi Lite, aplicativo para Android, que permite ações básicas como cadastrar, pontuar e resgatar prêmios. Assim, se você está disponibilizando o delivery no seus estabelecimento, o aplicativo poderá ser utilizado pelo motoboy, para que os clientes possam ter suas compras pontuadas.</p>

                <p>Em breve, em caráter extraordinário, estamos trabalhando para lançar o mais rápido possível, uma solução adaptada para o delivery que ajudará os estabelecimentos que puderem continuar operando nessa modalidade.</p>

                <h2 className='secondary-title'><div className='indicator'>></div>Um bom Mago detecta uma adversidade e oferece a solução.</h2>

                <p>Entendemos perfeitamente as inseguranças impostas pela fase em que estamos, mas asseguramos que nossa parceria é fundamental para a sobrevivência do seu negócio, pois a comunicação que disponibilizamos é imprescindível no momento.
                Seus clientes precisam se lembrar do seu negócio, dar preferência para os produtos ou serviços que você comercializa, e nesta época onde estar próximo precisa significa estar distante, a comunicação digital é o pó mágico para manter seu público fidelizado à sua marca.</p>

                <p>Sabemos das dificuldades financeiras que muitas empresas já estão enfrentando, e apesar de difícil, manter a calma neste momento é de extrema importância. Obviamente, realizar cortes em despesas que não farão a diferença neste momento, é crucial, bem como negociar com fornecedores. Contudo, algumas soluções como a do FideliZi, tem um valor de investimento relativamente baixo que não impactarão o negócio de forma significativa, enquanto que, podem fazer muita diferença durante este período.</p>

                <p>Reforçando mais uma vez que em termos de marketing, mais do que nunca, será difícil vender para clientes novos. Logo, manter a comunicação com clientes fidelizados será crucial!
                É preciso saber diferenciar o que é realmente custo e o que é estratégico antes de sair cortando tudo que parece despesa. Para os negócios em maior dificuldade, sobretudo aqueles já impossibilitados de operar, não deixem de entrar em contato com nosso time de FideWizards para que possamos auxiliá-lo da melhor forma possível.</p>

                <p>Quando dissemos que estamos juntos, não foi uma expressão, mas sim nosso principal objetivo nesse momento! Não iremos te abandonar e nem tornar o momento pior, muito pelo contrário. Vamos fazer de tudo para que você se mantenha firme nesta fase de incertezas e inseguranças.</p>

                <p className='featured-phrase'>Os FideWizards estão em plena atividade para te auxiliar, orientar, desenvolver estratégias e fazer tudo que for possível para reduzir qualquer impacto econômico em seu negócio.</p>`}
                title={"O que estamos fazendo para ajudar o seu negócio"} 
                index={"1"} titleButton={"VER MAIS"} 
                textList={["Durante todo o período de quarentena, estamos à total disposição de cada um de vocês, clientes.O COVID-19 chegou desestabilizando o país e trazendo consigo uma grande incógnita quanto a proporção disso no país, nas pessoas e principalmente, na economia.", "Nosso compromisso com você durante essa fase, é para assegurar que o seu negócio seja o  menos afetado possível, mantendo sua base de clientes fidelizados sólida e segura!"]} 
                nameImage={img1} 
                direction={"row"} 
                indexDirection={"end"} />

                <Card
                htmlString={`<p>Você sabe que magos contam com bons artifícios para fazer sua magia acontecer. Com nós FideWizards não é diferente!</p>

                <p>Contamos com ferramentas poderosas para fazer nossa mágica acontecer e fidelizar seus clientes. Especialmente neste período em que o COVID-19 nos pegou desprevenidos, vamos compartilhar com você nossas ferramentas e fórmulas mágicas, afinal, queremos ver o seu negócio se destacando e superando essa fase, como um toque de mágica. </p>

                <p>Conheça agora o que está a sua disposição:</p>

                <h2 className='secondary-title'><div className='indicator'>></div>Segmentação</h2>

                <p>Tão poderosa quanto qualquer outra ferramenta mágica, a Segmentação permite que os clientes da sua base sejam separados por categorias para que suas ações sejam direcionadas para grupos específicos. Desta forma, a efetividade da campanha torna-se alta e assertiva.
                <strong>Faça comunicações segmentadas e ofereça o que cada cliente gosta e deseja.</strong></p>

                <h2 className='secondary-title'><div className='indicator'>></div>Email Marketing</h2>

                <p> Esta ferramenta tem o poder de falar diretamente com o seu cliente, levando informações, ofertas, surpresas ou o que você achar pertinente. Ela desperta o interesse e o seu poder ainda pode atrair seu público para que façam a ação sugerida no email, como visitar seus estabelecimento, fazer pedido por delivery, curtir e seguir suas redes sociais, entre outros.</p>

                <p>Mas lembre-se: Para obter o resultado desejado, é preciso utilizar as palavras mágicas corretamente, por isso, elabore muito bem o conteúdo do email, para que o objetivo seja alcançado com sucesso!
                Vale a pena aprender manusear a ferramenta de Email Marketing.<strong>O resultado dessa magia é surpreendente.</strong></p>

                <h2 className='secondary-title'><div className='indicator'>></div>Piloto automático</h2>

                <p>Esta funcionalidade tem um poder incrível!</p>

                <p>Imagine toda a sua base clientes sendo parabenizada pelo aniversário, sem que você precise saber a cada data de cor! Com os Pilotos automáticos isso e muito mais é possível.
                Envie emails de boas-vindas, de inatividade para aqueles clientes que tomaram um chá de sumiço e os faça aparecer novamente, deseja Feliz Aniversário no dia certo para toda a sua base, faça com que seus novos clientes sintam-se acolhidos com um email de boas-vindas. Também é possível fazer envios de emails em datas comemorativas com mensagens, felicitações ou até mesmo oferta especiais para a ocasião.</p>

                <p>O Piloto Automático é uma ferramenta poderosa que pode <strong>ajudar muito no seu relacionamento com o público.</strong></p>

                <h2 className='secondary-title'><div className='indicator'>></div>Régua do WhatsApp</h2>

                <p>A magia desta funcionalidade está na pontas dos seus dedos!</p>

                <p><strong>Saiba quem são os clientes que não receberam o email que você enviou.</strong> Além destes, você também pode saber:</p>

                <p>- Quem recebeu, mas não abriu o email.</p>
                <p>- Quem recebeu e abriu, mas não ativou a oferta que você disponibilizou.</p>

                <p>Você terá estas informações e poderá falar com essas pessoas como num toque de mágica. A Régua de WhatsApp é um complemento para suas campanhas de email, onde é possível segmentar os clientes e acioná-los por mensagens direto em seu WhatsApp, desde que no cadastro do seu programa seja solicitado o número dos clientes.</p>

                <h2 className='secondary-title'><div className='indicator'>></div>Aplicativo FideliZi Lite</h2>

                <p>Este pode ser considerado o “Coelho na cartola” do FideliZi!</p>

                <p>O aplicativo FideliZi Lite permite que transações como cadastro, pontuação e resgate de prêmios <strong>sejam feitas através de um smartphone Android com o app instalada.</strong> É uma boa saída para entregar delivery, onde os clientes mesmo longe do tablet, possam garantir a pontuação de suas compras sejam registradas, assim como os que desejam se cadastrar no seu programa e aqueles que tem prêmios para resgatar.</p>
                
                <p>Neste período de quarentena causada pelo COVID-19, o aplicativo pode ser uma excelente estratégia para você, se o seu negócio permitir entregar delivery. Seus clientes continuarão ganhando pontos e o vínculo afetivo com sua marca poderá ser fortalecido!</p>
                
                <p>É ou não é o coelho na cartola em tempos de crise?!</p>

                <h2 className='secondary-title'><div className='indicator'>></div>Plataforma de ofertas</h2>

                <p>Esta ferramenta é um truque super eficiente e pode fazer toda diferença neste momento no qual estamos.</p>

                <p>Basicamente, a Plataforma de Ofertas é semelhante àquelas páginas de compras coletivas, entretanto, haverá apenas a oferta da sua loja e página pode conter todas as informações da sua marca. O cliente recebe o link por email, abre o link e é automaticamente direcionado para sua página, onde poderá ativar a oferta que você disponibilizou a ele e depois é ir até a sua loja para resgatar o prêmio. <strong>Esta é uma forma atrair novamente os clientes, quando os período de quarentena chegar ao fim.</strong></p>
                
                <h2 className='secondary-title'><div className='indicator'>></div>Página de Indicações</h2>
                
                <p>A magia desta ferramenta é transformar um cliente em outros vários!Na Página de Indicações, os seus clientes podem enviar convites para amigos, parentes e conhecidos, para eles irem conhecer seu estabelecimento, com um prêmio disponível para eles.Além disso, os clientes que fizeram a indicação são bonificados também, seja com pontos extras, um brinde exclusivo ou vale compras.</p>
                
                <p> Esta é uma ótima estratégia para a retomada pós-crise, pois você beneficia seus clientes quando fizerem indicações do seu negócio, aumentando as chances de eles indicarem cada vez mais; presenteia os clientes que vierem através das indicações, aumentando assim a probabilidade de fidelizá-los.</p>
                
                <p className='pink'>Cada ferramenta estará disponível para você fazer suas campanhas e traçar suas estratégias de retomada após a crise imposta pelo COVID-19. A comunicação com seus clientes é fundamental para manter os clientes próximos e reforçar a lembrança da sua marca.</p>
                
                <p className='featured-phrase'>Não postergue suas ações de marketing. Nós estamos a sua disposição para configurar as ferramentas necessárias para manter o seu negócio ativo e com os menores danos possíveis, diante da atual situação!</p>`} 
                title={"Ferramentas indispensáveis nesse momento"} 
                index={"2"} 
                titleButton={"CONHEÇA AGORA O QUE ESTÁ A SUA DISPOSIÇÃO"} 
                textList={["Você sabe que magos contam com bons artifícios para fazer sua magia acontecer. Com nós FideWizards não é diferente!", "Contamos com ferramentas poderosas para fazer nossa mágica acontecer e fidelizar seus clientes. Especialmente neste período em que o COVID-19 nos pegou desprevenidos, vamos compartilhar com você nossas ferramentas e fórmulas mágicas, afinal, queremos ver o seu negócio se destacando e superando essa fase, como um toque de mágica."]} 
                nameImage={img2} 
                direction="row-reverse" 
                colorHeader={"#662F6A"}
                />

                <div className='container-vertical'>

                    <div className='vertical-line'></div>

                    <div className='ball1'></div>
                    <div className='ball2'></div>
                    <div className='ball3'></div>
                    <div className='ball4'></div>

                </div>

                <Card 
                htmlString={`<p>O momento é crítico, mas fazendo as ações corretas e traçando as estratégias de retomada, vamos trabalhar juntos para manter o seu negócio funcionando e seus clientes fidelizados!</p>

                <h2 className='third-title'>Confira alguns materiais para te ajudar a ter insights e promover seu negócio durante a quarentena.</h2>

                <p className='pink'>Como promover a fidelização de clientes em época de crise</p>
                <p className='pink'>5 estratégias de marketing de baixo custo que dão resultado.</p>
                <p className='pink'>Como o e-mail marketing te ajudará a se relacionar com seus leads</p>
                <p className='pink'>Como aumentar a curiosidade por sua marca e criar valor ao seu cliente!</p>
                <p className='pink'>Problemas são oportunidades disfarçadas.</p>
                <p className='pink'>Sistema de fidelização: Como melhorar a experiência de compra do seu cliente?</p>
                <p className='pink'>Meu cliente conhece mesmo o meu negócio?</p>
                <p className='pink'>Como construir um relacionamento com seus clientes?</p>
                <p className='pink'>Por que o programa de fidelidade certo deixará minha empresa mais competitiva?</p>
                <p className='pink'>4 passos para reconstruir fidelidade à marca da sua pequena empresa.</p>
                <p className='pink'>Por que engajar os clientes faz toda a diferença para seu negócio.</p>
                <p className='pink'>Meu cliente sumiu! E agora?</p>
                <p className='pink'>O poder das mídias sociais para o pequeno e médio empreendedor.</p>
                <p className='pink'>Descubra o que são e como ter táticas de promoção.</p>
                <p className='pink'>A prova fundamental de que a retenção de clientes funciona.</p>
                <p className='pink'>Como evitar gastos desnecessários na sua empresa.</p>
                <p className='pink'>Aposte no planejamento estratégico para alcançar resultados positivos</p>
                <p className='pink'>Aposte no planejamento estratégico para alcançar resultados positivos</p>
                <p className='pink'>4 passos para recuperar um cliente perdido.</p>
                <p className='pink'>4 passos para recuperar um cliente perdido.</p>
                <p className='pink'>Estratégias matadoras para alavancar as vendas de pequenas empresas de varejo</p>
                <p className='pink'>Como avaliar o investimento no FideliZi para o seu negócio</p>
                <p className='pink'>Os pontos mais importantes sobre fazer o cliente retornar</p>
                <p className='pink'>Marca e consumidor: Como criar vínculos emocionais.</p>
                <p className='pink'>Qual é a importância da elaboração de um planejamento estratégico de negócios?</p>
                <p className='pink'>Como monitorar sua marca na web?</p>
                <p className='pink'>O que é diferencial competitivo?</p>
                <p className='pink'>Dicas de gestão para pequenas empresas.</p>
                <p className='pink'>É possível um pequeno comércio inovar na fidelização com os clientes?</p>
                <p className='pink'>A importância da inovação no relacionamento com os clientes</p>
                <p className='pink'>Como surpreender clientes fiéis de forma interativa? Conheça a FideliZi!</p>
                <p className='pink'>5 dicas de como fazer clientes retornarem para alavancar seu negócio</p>
                <p className='pink'>4 lições que a era digital nos ensinou sobre a fidelização de clientes</p>
                <p className='pink'>Como pequenas empresas podem ter bons resultados em marketing gastando pouco</p>
                <p className='pink'>Quanto pequenas empresas devem investir em marketing?</p>
                <p className='pink'>Enfrentando a concorrência com um Programa de Fidelidade</p>
            
                <h2 className='third-title'>Vídeos</h2>

                <p className='pink'>3 dicas para evitar a perda de clientes e combater a concorrência</p>
                <p className='pink'>Palestra Sebrae - Fidelização de clientes na era digital</p>
                <p className='pink'>Saiba como isentar suas mensalidades através do Indica FideliZi!</p>
                <p className='pink'>MARKETING DIGITAL - Saiba como as mídias sociais podem ajudar o seu negócio!</p>
                <p className='pink'>Estratégias promocionais SEM Desconto - Insights e Dicas para o seu negócio!</p>
                <p className='pink'>Saiba como vender o ano inteiro para os clientes que visitam sua loja em datas comemorativas.</p>
                <p className='pink'>Fidelização de clientes: O que você não sabe e o que está perdendo por isso | Palestra Abrasel.</p>
                <p className='pink'>LTV: O que é e qual a sua real importância?</p>`}
                title={"Como tornar a magia real"} 
                index={"3"} titleButton={"VER MATERIAIS"} 
                textList={["Durante todo o período de quarentena, estamos à total disposição de cada um de vocês, clientes.O COVID-19 chegou desestabilizando o país e trazendo consigo uma grande incógnita quanto a proporção disso no país, nas pessoas e principalmente, na economia.", "Nosso compromisso com você durante essa fase, é para assegurar que o seu negócio seja o  menos afetado possível, mantendo sua base de clientes fidelizados sólida e segura!"]} 
                nameImage={img3} 
                direction={"row"} 
                indexDirection={"end"} />

                <Card 
                htmlString={`<p>Estamos a todo vapor neste período de quarentena, auxiliando e configurando as ferramentas para que nossos clientes possam manter uma comunicação perene com seus respectivos públicos.</p>
                <p><strong>Neste momento, nosso objetivo principal é manter o seu negócio saudável e com mínimo de danos ocasionados pela crise!</strong></p>
                <p>Manter o contato com a sua base de clientes é a melhor estratégia, seja oferecendo seus produtos com entregas delivery fazendo vendas antecipadas, provendo ações para a retomada pós quarentena, e outras diversas opções estratégicas.
                O importante é manter-se presente no dia a dia dos clientes, para que eles lembrem-se da sua marca e sejam motivados a voltar para o seu estabelecimento assim que tudo se acalmar, e mais, optar pelos seus produtos ou serviços se isso for uma opção neste período.</p>

                <h2 className='third-title'>Confira alguns feedbacks de clientes que estão em busca de soluções para manter seus estabelecimentos ativos e saudáveis e contaram com a gente para isso!</h2>
                
                <div className='container-photo'>
                <img className='whats2'/>
                <img className='whats1'/>
                </div>`}
                title={"Conheça alguns clientes que compartilharam suas experiências"} 
                index={"4"} titleButton={"VER MAIS"} 
                textList={["Estamos a todo vapor neste período de quarentena, auxiliando e configurando as ferramentas para que nossos clientes possam manter uma comunicação perene com seus respectivos públicos.Neste momento, nosso objetivo principal é manter o seu negócio saudável e com mínimo de danos ocasionados pela crise!", "Manter o contato com a sua base de clientes é a melhor estratégia, seja oferecendo seus produtos com entregas delivery fazendo vendas antecipadas, provendo ações para a retomada pós quarentena, e outras diversas opções estratégicas.", "O importante é manter-se presente no dia a dia dos clientes, para que eles lembrem-se da sua marca e sejam motivados a voltar para o seu estabelecimento assim que tudo se acalmar, e mais, optar pelos seus produtos ou serviços se isso for uma opção neste período.", "Confira alguns feedbacks de clientes que estão em busca de soluções para manter seus estabelecimentos ativos e saudáveis e contaram com a gente para isso!"]} 
                nameImage={img4} 
                direction={"row-reverse"} 
                colorHeader={"#662F6A"}
                />

            </div>

                <img className='potion' src={require('../assets/formula.png')} />

                <p className='phrase'>Fique ligado, mais dicas estão saindo do laboratório!</p>
            
        </div>
        
    );
}

export default Main;

