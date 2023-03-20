import './MyProjectStyle.css'
export const MyProject =()=>{
    return(
        <section className="MyProjectSection">
            <h1>My Project </h1>

            <div className="DisplayMyProjectSection">
                
                <div className='SlideLeft'>
                           
             <div id="carouselExampleCaptions" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>

                </div>
                
                <div class="carousel-inner">

                        <div class="carousel-item active">
                        <div className="Project01"></div>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                        </div>

                        <div class="carousel-item">
                        <div className="Project02"></div>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                        </div>

                        <div class="carousel-item">
                        <div className="Project03"></div>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>

                        </div>
                        <div class="carousel-item">
                        <div className="Project04"></div>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>

                        </div>

                </div>
            
            </div>
          
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Prezados amigos do OneBitCode </h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>  Eu gostaria de expressar minha sincera gratidão pela qualidade incrível do curso que vocês oferecem. Desde o primeiro dia, fiquei impressionado com a atenção aos detalhes e o compromisso com o ensino de qualidade.

As aulas são extremamente bem estruturadas e fáceis de seguir, e a plataforma é atualizada constantemente, mantendo-nos sempre informados sobre as últimas tendências e tecnologias. Estou muito grato por ter a oportunidade de aprender com vocês.
Além disso, o suporte oferecido por toda a equipe do OneBitCode tem sido nada menos do que excepcional. Sempre que tive dúvidas ou problemas, fui atendido prontamente e com um nível de profissionalismo que é difícil de encontrar em outros lugares.
Como estudante, eu me sinto verdadeiramente privilegiado por ter acesso a um curso tão incrível e por ter encontrado um grupo de pessoas tão apaixonadas pelo que fazem. Estou ansioso para continuar minha jornada de aprendizado com vocês e estou confiante de que farei um grande progresso graças ao seu suporte.
Muito obrigado por tudo o que vocês fazem.

</p>
    
<p>Atenciosamente,<br/>
Marcos Gregorio Vieira</p>

        
      </div>
      <div class="modal-footer">
      
        <a href="https://onebitcode.com/lp/"><button type="button" class="btn btn-primary">Save changes</button></a>
      
      </div>
    </div>
  </div>
</div>
            </div>
                
                <div className='SlideRight'>
                <div id="carouselExampleCaptions1" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide-to="3" aria-label="Slide 4"></button>

                </div>
                
                <div class="carousel-inner">

                        <div class="carousel-item active">
                        <div className="Project05"></div>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                        </div>

                        <div class="carousel-item">
                        <div className="Project06"></div>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                        </div>

                        <div class="carousel-item">
                        <div className="Project07"></div>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>

                        </div>
                        <div class="carousel-item">
                        <div className="Project08"></div>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>

                        </div>

                </div>
            
            </div>
                </div>

            </div>
        </section>
    )
}