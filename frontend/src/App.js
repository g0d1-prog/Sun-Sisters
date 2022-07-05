//Esssentials
import * as React from 'react'
import Carousel from 'react-elastic-carousel'
import axios from 'axios'
import Aos from "aos"
import 'aos/dist/aos.css'
import InputMask from "react-input-mask"

//Styles
import './App.css'
// This import below is for the responsive itens in the website that can't be defined in the styled props
import styles from './Responsivity.module.css'

//Layout
import Container from './layout/Container'
import Image from './layout/Image'
import Title from './layout/Title'
import Subtitle from './layout/Subtitle'
import Line from './layout/Line'
import Article from './layout/Article'

//Images
import flower_image_top_left from './img/flower_image_top_left.png'
import flower_title_image from './img/flower_title_image.png'
import bride_holding_flowers from './img/bride_holding_flowers.jpg'
import couple_infront_of_a_castle from './img/couple_infront_of_a_castle.jpg'
import wedding_dinner_table from './img/wedding_dinner_table.jpg'
import flower_image_bottom_right from './img/flower_image_bottom_right.png'
import wedding_toast from './img/wedding_toast.jpg'
import couple_infront_of_a_beach from './img/couple_infront_of_a_beach.jpg'
import couple_praying from './img/couple_praying.jpg'
import birthday_party_service from './img/birthday_party_service.jpg'
import corporative_party_service from './img/corporative_party_service.jpg'
import wedding_service from './img/wedding_service.jpg'
import sun_sisters_renata from './img/sun_sisters_renata.jpeg'
import flowers_around from './img/flowers_around.png'
import flower_image_left from './img/flower_image_left.png'
import final_image_wedding from './img/final_image_wedding.jpg'
import sun_sisters_cintia from './img/sun_sisters_cintia.png'

// Gallery Images
import image_one from './gallery/image_one.jpeg'
import image_two from './gallery/image_two.jpeg'
import image_three from './gallery/image_three.jpeg'
import image_four from './gallery/image_four.jpeg'
import image_five from './gallery/image_five.jpeg'
import image_six from './gallery/image_six.jpeg'

function App() {

  // Activating animation on scroll library
  React.useEffect(() => {
    Aos.init({duration: 900})
  },  [])

  //Function to post the contact form via axios API
  function postContactForm(){
    const name_input = document.getElementById('name_input')
    const email_input = document.getElementById('email_input')
    const phone_number_input = document.getElementById('phone_number_input')
    const message_input = document.getElementById('message_input')

    if (name_input.value === ''){
      alert("Por favor, insira um nome!")
      name_input.value = ""
    }
    else if  (email_input.value === ''){
      alert('Por favor, insira um e-mail!')
      email_input.value = ""
    }
    else if (phone_number_input.value === ''){
      alert("Por favor, insira um número de telefone para contato!")
      phone_number_input.value = ""
    }
    else{
      axios({
        method: 'post',
        url: process.env.REACT_APP_API_URL,
        data:{
          name: name_input.value,
          email: email_input.value,
          phone_number: phone_number_input.value,
          message: message_input.value,
        },
        auth:{
          username: process.env.REACT_APP_API_USERNAME,
          password: process.env.REACT_APP_API_PASSWORD
        },
      })
      .then(function(){
        alert('Contato enviado!')
        name_input.value=""
        email_input.value=""
        phone_number_input.value=""
        message_input.value=""
      })
      .catch(function(error){
        alert('Falha ao enviar contato, por gentileza, veja no console para mais informações')
        console.log(error.responseText)
      })
    }
  }

  return (

    <html>

      <header>
        <title>Sun Sisters</title>
      </header>

      <body>

        {/* Main Title of the website container, it will appear when the website is loaded */}
        <Container 
        justifyContent="center"
        backgroundImage={flower_image_top_left}
        backgroundPosition="top left"
        padding="5vw"
        flexDirection="column"
        backgroundSize="25vw 25vw"
        gap="2em"
        display='flex'
        alignItems="center"
        >
          <Image 
          src={flower_title_image}
          alt="Arranjo de flores com flores rosas no centro e flores verdes em volta, o seu alinhamento é horizontal"
          />
          <Title
          fontSize="5em"
          title="Sun Sisters"
          />
          <Subtitle
          subtitle="Assessoria em eventos"
          fontSize="2em"
          fontWeight="lighter"
          />
          <Container
          width="100%"
          justifyContent="center"
          flexDirection="row"
          padding='3vw'
          flexWrap="wrap"
          gap='1em'
          display="flex"
          >
            <Image
            src={bride_holding_flowers}
            alt="Noiva vestido de branco segurando flores rosas em uma ilumninação ensolarada"
            height='auto'
            width='350px'
            />
            <Image
            src={couple_infront_of_a_castle}
            alt="Casal recém-casado em frente à um lindo castelo se admirando"
            height='auto'
            width='350px'
            />
            <Image
            src={wedding_dinner_table}
            alt="Mesa de casamento com velas e lindas taças e um buquê central com rosas e flores brancas"
            height='auto'
            width='350px'
            />
          </Container>
        </Container>
        {/* End of Main Title */}

        {/* About section telling about the Sun Siters enterprise */}
        <Container 
        justifyContent="center"
        backgroundImage={flower_image_bottom_right}
        backgroundPosition="bottom right"
        backgroundSize="auto 25vw"
        display="flex"
        alignItems="center"
        paddingLeft="20vw"
        paddingRight="20vw"
        >
          <div data-aos="flip-up">
            <Container 
            justifyContent="center"
            paddingTop="5em"
            paddingBottom="5em"
            flexDirection="column"
            gap="2em"
            display="flex"
            alignItems="center"
            >
              <Title
              fontSize="3em"
              title="Sobre nossa empresa"
              color="#9f895c"
              />
              <Subtitle
              fontSize="1.5em"
              subtitle="Criando momentos mágicos"
              fontWeight="lighter"
              />
              <Line
              height="3px"
              width="300px"
              backgroundColor="#9f897c"
              />
              <Article
              fontSize="1.2em"
              color="#6b5d41"
              fontStyle="italic"
              article="A Sun Sisters é uma empresa especializada em planejamento, gestão, organização e execução de projetos para eventos, atendendo as expectativas e necessidades dos clientes, proporcionando segurança, confiança e qualidade nos serviços prestados. Oferecemos um serviço insuperável e eventos inigualáveis, permanecendo fiéis à nossa paixão de colaboração com nossos clientes para contar as suas histórias com facilidade, beleza, arte e estilo"
              />
            </Container>
          </div>
        </Container>
        {/* End of the about section */}

        {/* Section of the customers opinions, using React-Elastic-Carousel */}
        <Carousel className="mouserPointerHover">
          <Container
          height="100vh"
          justifyContent="center"
          flexDirection="column"
          backgroundImage={wedding_toast}
          backgroundSize="cover"
          backgroundPosition="center"
          borderRadius="20px"
          paddingLeft="5em"
          paddingRight="5em"
          backgroundClip="text"
          webkitBackgroundClip="text"
          gap="2em"
          display="flex"
          alignItems="center"
          >

            {/* Responsive Article inside of the carousel */}
            <div className={styles.responsive_article_title}>
              <Article
              id="test"
              article='"A decoração ficou deslumbrante! Você superou todas as nossas expectativas! Foi sofisticada, festiva e de bom gosto!"'
              color="#000000"
              backgroundColor="#ffffff"
              />
            </div>
            {/* Responsive article authors inside of the carousel */}
            <div className={styles.responsive_article_author}>
              <Article 
              article='Davi e Alessandra'
              color="#ffffff"
              backgroundColor="#000000"
              boxShadow="0 0 3px 10px #ffffff"
              fontWeight="bold"
              />
            </div>

          </Container>
          <Container
          height="100vh"
          justifyContent="center"
          flexDirection="column"
          backgroundImage={couple_infront_of_a_beach}
          backgroundSize="cover"
          backgroundPosition="center"
          borderRadius="20px"
          paddingLeft="5vw"
          paddingRight="5vw"
          backgroundClip="text"
          webkitBackgroundClip="text"
          gap="2em"
          display="flex"
          alignItems="center"
          >
            {/* Responsive Article inside of the carousel */}
            <div className={styles.responsive_article_title}>
              <Article 
              article='"Não poderíamos ter imaginado um dia mais incrível e sabemos que devemos isso ao seu árduo trabalho e planejamento. Obrigado por TUDO!!!"'
              color="#000000"
              backgroundColor="#ffffff"
              />
            </div>
            {/* Responsive article authors inside of the carousel */}
            <div className={styles.responsive_article_author}>
              <Article 
              article='Pedro e Luana'
              color="#ffffff"
              backgroundColor="#000000"
              boxShadow="0 0 3px 10px #ffffff"
              fontWeight="bold"
              />
            </div>
          </Container>
          <Container
          height="100vh"
          justifyContent="center"
          flexDirection="column"
          backgroundImage={couple_praying}
          backgroundSize="cover"
          backgroundPosition="center"
          borderRadius="20px"
          paddingLeft="5vw"
          paddingRight="5vw"
          backgroundClip="text"
          webkitBackgroundClip="text"
          gap="2em"
          display="flex"
          alignItems="center"
          >
            {/* Responsive Article inside of the carousel */}
            <div className={styles.responsive_article_title}>
              <Article 
              article='"Só uma nota para avisar que no primeiro aniversário, olhamos para trás, para a beleza do dia e para o nosso aproveitamento total de todos os detalhes sem STRESS"'
              color="#000000"
              backgroundColor="#ffffff"
              />
            </div>
            {/* Responsive article authors inside of the carousel */}
            <div className={styles.responsive_article_author}>
              <Article 
              article='Davi e João'
              color="#ffffff"
              backgroundColor="#000000"
              boxShadow="0 0 3px 10px #ffffff"
              fontWeight="bold"
              />
            </div>
          </Container>
        </Carousel>
        {/* End of the section of the customers opinions */}

        {/* Services section showing all the services that Sun Sisters do! */}
        <Container
        justifyContent="center"
        flexDirection="column"
        paddingLeft="10vw"
        paddingRight="10vw"
        paddingTop="5em"
        paddingBottom="5em"
        gap="2em"
        dataAos="flip-right"
        display="flex"
        alignItems="center"
        >
            <Title 
            fontSize="3em"
            color="#9f895c"
            title="Nossos serviços"
            />
            <Subtitle 
            fontSize="2em"
            subtitle="Nós podemos fazer isso"
            color="#ffb9ff"
            />
            <Line 
            width="300px"
            height="3px"
            backgroundColor="#9f897c"
            />
            <Article
            fontSize="1.5em"
            fontWeight="lighter"
            fontStyle="italic"
            color="#56562c"
            article="A Sun Sisters é especializada em Assessoria e Gestão de Eventos, sejam eles sociais ou corporativos. Procuramos dar a cada evento um tratamento único, de acordo com as particularidades de cada cliente, alinhadas dentro de um projeto personalizado desenvolvido com todos os fornecedores envolvidos.
            Assessorias total, parcial ou do dia em casamentos, debutantes mini Wedding, aniversários, corporativos, produção de eventos e serviço de Cantora."
            />
        </Container>

        {/* Container of the images of the services */}
        <Container
        justifyContent="center"
        gap="1em"
        paddingLeft="3vw"
        paddingRight="3vw"
        paddingTop="5em"
        paddingBottom="5em"
        flexDirection="row"
        flexWrap="wrap"
        backgroundColor="#f2f2f2"
        display="flex"
        alignItems="center"
        >
          {/* Wedding Service */}
          <Container
          justifyContent="center"
          flexDirection="column"
          gap="2em"
          dataAos="fade-up"
          display="flex"
          alignItems="center"
          >
            <Image 
            borderRadius="50%"
            height="400px"
            width="400px"
            src={wedding_service}
            alt="Homem e mulher de mãos dadas representando o primeiro e principal serviço das Sun Sisters que é o casamento!"
            />
            <Subtitle 
            fontSize="2em"
            color="#56562c"
            fontWeight="bold"
            subtitle="Casamento"
            />
          </Container>

          {/* Birthday Party Service */}
          <Container
          justifyContent="center"
          flexDirection="column"
          gap="2em"
          dataAos="fade-down"
          display="flex"
          alignItems="center"
          >
            <Image 
            borderRadius="50%"
            height="400px"
            width="400px"
            src={birthday_party_service}
            alt="Velas acendidas em cima de um bolo para mostrar o segundo serviço que são festas de aniversário"
            />
            <Subtitle 
            fontSize="2em"
            color="#56562c"
            fontWeight="bold"
            subtitle="Aniversário"
            />
          </Container>
          {/* Corporative Party Service */}
          <Container
          justifyContent="center"
          flexDirection="column"
          gap="2em"
          dataAos="fade-up"
          display="flex"
          alignItems="center"
          >
            <Image 
            borderRadius="50%"
            height="400px"
            width="400px"
            src={corporative_party_service}
            alt="Pessoas segurando taças com bebidas, para indicar o terceiro serviço das Sun Sisters que são festas corporativas"
            />
            <Subtitle 
            fontSize="2em"
            color="#56562c"
            fontWeight="bold"
            subtitle="Corporativo"
            />
          </Container>
        </Container>

        {/* Gallery of images containing all the services that Sun Sisters had make along all these years */}
        <Container
        flexDirection="column"
        justifyContent="center"
        display="grid"
        paddingTop="5em"
        paddingBottom="5em"
        backgroundImage={flower_image_top_left}
        backgroundSize="auto 25vw"
        backGgroudnPosition="cover"
        gridTemplateColumns= "repeat(auto-fit, 400px)"
        gap="2em"
        alignItems="center"
        >
          {/* First Column */}
          <Container
          flexDirection="column"
          justifyContent="center"
          display="flex"
          height="100%"
          gap="2em"
          alignItems="center"
          >
            <Image
            src={image_one}
            height="300px"
            width="auto"
            alt="Mesa redonda de jantar montada pelas Sun Sisters em um lindo casamento"
            dataAos="flip-right"
            />
            <Image
            src={image_four}
            height="300px"
            width="auto"
            alt="Decoração com plantas verdes feita e gerenciada pelas Sun Sisters"
            dataAos="flip-left"
            />
          </Container>

          {/* Second Column */}
          <Container
          flexDirection="column"
          justifyContent="center"
          display="flex"
          height="100%"
          gap="2em"
          alignItems="center"
          >
            <Image
            src={image_two}
            height="auto"
            width="100%"
            alt="Pré-cerimônia de casamento sendo realizada com algumas sentadas na esquerda da imagem, assim como uma decoração linda na direta da imagem"
            dataAos="flip-down"
            />
            <Title 
            fontSize="4em"
            color="#9f895c"
            title="Nossa galeria"
            />
            <Image
            src={image_five}
            height="auto"
            width="100%"
            alt="Decoração com plantas verdes feita e gerenciada pelas Sun Sisters juntamente à uma mesa com amendoins"
            dataAos="flip-up"
            />
          </Container>

          {/* Third Column */}
          <Container
          flexDirection="column"
          justifyContent="center"
          display="flex"
          height="100%"
          gap="2em"
          alignItems="center"
          >
            <Image
            src={image_three}
            height="300px"
            width="100%"
            alt="Mesa redonda com copos e um vaso de flores no centro feito pelas Sun Sisters em um lindo casamento"
            dataAos="flip-left"
            />
            <Image
            src={image_six}
            height="300px"
            width="100%"
            alt="Decoração com plantas vermelhas feita e gerenciada pelas Sun Sisters, com um bolo ao centro"
            dataAos="flip-right"
            />
          </Container>
        </Container>

        {/* Container featuring the Sun Sisters similar to about us*/}
        <Container
        display="flex"
        flexDirection="column"
        gap="2em"
        paddingLeft="10vw"
        paddingRight="10vw"
        paddingTop="5em"
        paddingBottom="2em"
        alignItems="center"
        >
          <Title
          fontSize="4em"
          color="#9f895c"
          title="Feliz em te ver"
          />
          <Subtitle 
          fontWeight="lighter"
          fontSize="2em"
          color="#ffb9ff"
          subtitle="Em nossa empresa"
          />
          <Line 
          width="30%"
          height="5px"
          backgroundColor="#232323"
          />
          <Article 
          fontWeight="lighter"
          fontStyle="italic"
          fontSize="1.5em"
          color="#000000"
          article="Renata, com mais de 10 anos de experiência na área de eventos e Cíntia vinda do mundo jurídico, estão à frente da Sun Sisters Assessoria em Eventos, cuidando da gestão, de cada evento seja corporativo ou social, com técnica, expertise e muito carinho."
          />
          <Article 
          fontWeight="bold"
          fontStyle="normal"
          fontSize="1.5em"
          color="#5e5e2f"
          article="Nossa missão é sermos madrinhas virtuais e caminhar ao lado de muuuuitas pessoas nos preparativos de seus sonhos e torná-los reais e mágicos."
          />
          {/* Image Container inside of the "about" section */}
          <Container
          display="flex"
          flexDirection="row"
          heigth="100%"
          width="100%"
          justifyContent="center"
          alignItems="center"
          gap="2em"
          flexWrap="wrap"
          >
            <Container
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            >
              <Image
              src={sun_sisters_renata}
              width="225px"
              height="270px"
              borderRadius="50%"
              alt="Foto da irmã Renata em um lindo casamento que as Sun Sisters realizaram"
              />
              <Image 
              src={flowers_around}
              alt="Foto de flores que estão em volta da imagem da Renata para enaltecer sua beleza"
              transform="translate(0, -130px)"
              />
            </Container>
            <Container
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            >
              <Image
              src={sun_sisters_cintia}
              width="auto"
              height="270px"
              borderRadius="50%"
              alt="Foto da irmã Cintia em uma festa sentada em uma cadeira com uma flor no cabelo"
              />
              <Image 
              src={flowers_around}
              alt="Foto de flores que estão em volta da imagem da Renata para enaltecer sua beleza"
              transform="translate(0, -130px)"
              />
            </Container>
          </Container>
        </Container>
        
        {/* Contact section to the costumers enter in contact with the Sun Sisters */}
        
        <Container
        display="flex"
        flexDirection="row"
        paddingTop="5em"
        paddingBottom="5em"
        width="100%"
        height="100%"
        backgroundColor="#d8d8d8"
        backgroundImage={flower_image_left}
        backgroundSize="auto 40em"
        backgroundPosition="center left"
        alignItems="center"
        flexWrap="wrap"
        justifyContent="center"
        gap="3em"
        >
          {/* Form section */}
          <Container
          display="flex"
          flexDirection="column"
          height="100%"
          gap="2em"
          alignItems="center"
          >
            <Title
            fontSize="2.7em"
            color="#000000"
            title="Entrar em contato"
            />
            {/* Input is a pure html element because of the function to send it to the server-side API */}
            <input
            type="text"
            placeholder="Insira seu nome"
            className={styles.input}
            id="name_input"
            />
            <input
            type="email"
            placeholder="Insira seu e-mail"
            className={styles.input}
            id="email_input"
            />
            <InputMask
            mask="(99) 99999-9999"
            placeholder="Insira seu telefone"
            id="phone_number_input"
            className={styles.input}
            />
            <textarea
            id="message_input"
            className={styles.textarea_input}
            placeholder="Insira sua mensagem"
            />
            <Container
            display="flex"
            flexDirection="row"
            width="100%"
            justifyContent="center"
            flexWrap="wrap"
            gap="1em"
            >
              <button
              id="submit_input"
              className={styles.submit_button}
              onClick= {e => postContactForm(e)}
              >Enviar</button>
              <a href="https://wa.me/5511963602658" target="_blank" rel="noopener noreferrer">
                <button
                id="submit_input"
                className={styles.whatsapp_button}
                >Whatsapp Cíntia</button>
              </a>
              <a href="https://wa.me/5511995019298" target="_blank" rel="noopener noreferrer">
                <button
                id="submit_input"
                className={styles.whatsapp_button}
                >Whatsapp Renata</button>
              </a>
            </Container>
          </Container>

          {/* Final Image Container */}
          <Container
          display="flex"
          flexDirection="column"
          alignItems="center"
          height="100%"
          justifyContent="center"
          >
            <Image 
            src={final_image_wedding}
            width="300px"
            height="535px"
            alt="Festa de casamento com floresta verde por trás para compor o cenário, e pessoas parabenizando o casal que está passando em um corredor das mesmas"
            maxWidth="max-content"
            />
          </Container>
        </Container>

      </body>
      
    </html>

  );
}

export default App;