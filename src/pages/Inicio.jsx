import { useState, useEffect, useRef } from 'react'
import styles from './Inicio.module.css'
import { useNavigate } from 'react-router-dom'
import {
  SpeakerHigh,
  Play,
  EnvelopeOpen,
  WhatsappLogo,
  SpotifyLogo,
  SoundcloudLogo,
  InstagramLogo,
  YoutubeLogo
} from '@phosphor-icons/react'

export default function Inicio() {
  const navigate = useNavigate()
  const [isVisible, setIsVisible] = useState(false) // Estado para controlar a visibilidade
  const musicRef = useRef(null) // Referência à div .music

  function handleDiscografia() {
    navigate('/discografia')
  }

  useEffect(() => {
    const handleScroll = () => {
      if (musicRef.current) {
        const rect = musicRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight

        // Verifica se a metade da div .music está visível na janela de visualização
        if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const contatoRef = useRef(null)

  const handleScrollToContato = (event) => {
    event.preventDefault()
    contatoRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section>
      <article className={styles.bannerHero}></article>

      <article className={styles.teste}>
        <div className={styles.extra}>
          {/* <img
            src="https://res.cloudinary.com/dio2dnpmn/image/upload/v1730258463/Triade_mb0foi.png"
            alt=""
          /> */}
          <div className={styles.cardzin}>
            <div className={styles.head}>
              <p>Siga me</p>

              <div className={styles.sociais}>
                <a
                  href="https://www.instagram.com/dollmakerlive/"
                  target="_blank"
                >
                  <InstagramLogo size={32} />
                </a>
                <a
                  href="https://www.youtube.com/@dollmaker626?themeRefresh=1"
                  target="_blank"
                >
                  <YoutubeLogo size={32} />
                </a>
                <a
                  href="https://soundcloud.com/dollmakerlive"
                  target="_blank"
                >
                  <SoundcloudLogo size={32} />
                </a>
                <a
                  href="https://open.spotify.com/intl-pt/artist/7dGmK4sImWkq5ClORKQwIL?si=cFlutIm5RQq06ABT4Au6Iw"
                  target="_blank"
                >
                  <SpotifyLogo size={32} />
                </a>
              </div>
            </div>
            <div className={styles.button}>
              <a
                href="#contato"
                onClick={handleScrollToContato}
              >
                ENTRAR EM CONTATO
              </a>
            </div>
          </div>
          {/* <img
            src="https://res.cloudinary.com/dio2dnpmn/image/upload/v1730258466/code_hfhhq3.png"
            alt=""
          /> */}
        </div>
      </article>
      <article className={styles.content}>
        <div className={styles.bgFixed}>
          <div className={styles.circleBlue}></div>
          <div className={styles.circlePurple}></div>
        </div>
        <div className={styles.panel}>
          <p>Oficial Website</p>
          <p>©</p>
          <p>2024</p>
          <p>Progressive</p>
          <p>|</p>
          <p>Psy Trance</p>
        </div>

        <div className={styles.youtube}>
          <div className={styles.pill}>
            <p>ASSISTA MINHA LIVE</p>
          </div>
          <div className={styles.video}>
            <iframe
              src="https://www.youtube.com/embed/B2OcUn3aDno"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        {/* Adiciona a classe 'visible' condicionalmente */}
        <div
          className={`${styles.music} ${isVisible ? styles.visible : ''}`}
          ref={musicRef}
        >
          <div className={styles.card}>
            <div className={styles.firstColumn}>
              <div className={styles.descriptions}>
                <div className={styles.head}>
                  <h2>Lançamento</h2>
                  <p>Ouça aqui minha prévia!</p>
                  <p>Ethereal Buzz - Dollmaker & Vetala</p>
                </div>
                <div className={styles.mid}>
                  <p>Me siga nas plataformas!</p>
                  <div className={styles.images}>
                    <a href="https://open.spotify.com/intl-pt/artist/7dGmK4sImWkq5ClORKQwIL?si=b6stSiSwR7S57vko92d-YQ">
                      <img src="https://res.cloudinary.com/dio2dnpmn/image/upload/v1725753882/dollmaker/reakd3tsuhlxespv5e9s.png" />
                    </a>
                    <a href="https://soundcloud.com/dollmakerlive">
                      <img src="https://res.cloudinary.com/dio2dnpmn/image/upload/v1725753882/dollmaker/guwqklp7omf9amvxm3ox.png" />
                    </a>
                  </div>
                </div>
              </div>

              <button onClick={handleDiscografia}>Ver discografia</button>
            </div>
            <div className={styles.secondColumn}>
              <div className={styles.boxMusic}></div>

              <audio
                src="https://res.cloudinary.com/dio2dnpmn/video/upload/v1727877253/MP3_-_Dollmaker_Vetala_-_Ethereal_Buzz_amostra_moobi1.mp3"
                controls
              ></audio>
            </div>
          </div>
        </div>

        <div className={styles.bio}>
          <div className={styles.firstRow}>
            <div className={styles.img}>
              <img
                src="https://res.cloudinary.com/dio2dnpmn/image/upload/v1730808713/dollmaker/newUpgrade/aksqzpet6z720xibez6c.png"
                alt=""
              />
            </div>

            <div className={styles.text}>
              <div className={styles.title}>
                <img
                  src="https://res.cloudinary.com/dio2dnpmn/image/upload/v1731592582/DOLLMAKER_PROGRESSIVE_TRANCE_xcqdfo.png"
                  alt=""
                />
                {/* <div className={styles.subtitle}>
                  <p>EDUARDO SANCHES</p>
                  <p>TRIADE TRANCE</p>
                  <p>BRASILEIRO</p>
                </div> */}
              </div>

              <div className={styles.description}>
                <p>
                  Eduardo Sanches, conhecido artisticamente como Dollmaker, é um talentoso
                  DJ e produtor brasileiro que tem se destacado na cena progressive
                  psytrance. Desde o início de sua carreira em 2016, Dollmaker tem chamado
                  a atenção com seu som inovador, que habilmente mistura elementos de
                  progressive trance e música clássica.
                  <br />
                  Ao longo dos anos, Dollmaker já se apresentou em diversas festas de
                  renome nacional, incluindo eventos icônicos como Progressive, Danghai e
                  Psycodélicos. Sua habilidade de criar atmosferas únicas e envolventes o
                  tornou uma presença constante e aguardada nesses eventos.
                  <br />
                  Dollmaker é amplamente reconhecido por suas produções meticulosamente
                  elaboradas e por seu estilo inconfundível, que combina melodias
                  cativantes, linhas de baixo poderosas e arranjos complexos. Sua música
                  não apenas cativa o público nas pistas de dança, mas também oferece uma
                  experiência auditiva rica e variada, consolidando sua posição como um
                  dos artistas mais promissores da cena psytrance.
                </p>
              </div>
            </div>
          </div>

          {/* <div className={styles.secondRow}>
            <img
              src="https://res.cloudinary.com/dio2dnpmn/image/upload/v1730802432/dollmaker/newUpgrade/s11bjve9r7wd6ftavcx3.png"
              alt=""
            />
          </div> */}
        </div>
        <div
          ref={contatoRef}
          className={styles.contact}
        >
          <div className={styles.rows}>
            <div className={styles.rowOne}>
              <img
                src="https://res.cloudinary.com/dio2dnpmn/image/upload/v1731595235/contato_wkmlcl.png"
                alt=""
              />
            </div>
            <div className={styles.rowTwo}>
              <div className={styles.colOne}>
                <div className={styles.desc}>
                  <p>
                    Se você está pronto para levar seu próximo evento a um novo patamar ou
                    deseja discutir uma parceria que vai marcar a cena do Psy Trance,
                    entre em contato comigo! Estou ansioso para ouvir suas ideias e
                    colaborar para criar algo realmente especial.
                  </p>
                </div>
                <div className={styles.img}>
                  <img
                    src="https://res.cloudinary.com/dio2dnpmn/image/upload/v1731595031/LOGO_PNG_mcuyqn.png"
                    alt=""
                  />
                </div>
              </div>
              <div className={styles.colTwo}>
                <img
                  src="https://res.cloudinary.com/dio2dnpmn/image/upload/v1730802432/dollmaker/newUpgrade/smjggotafnto4ducnsy3.png"
                  alt=""
                />
                <div className={styles.sociaiss}>
                  <p>Redes sociais/Plataformas músicais</p>
                  <div className={styles.icones}>
                    <a
                      href="https://www.instagram.com/dollmakerlive/"
                      target="_blank"
                    >
                      <InstagramLogo size={32} />
                    </a>
                    <a
                      href="https://www.youtube.com/@dollmaker626"
                      target="_blank"
                    >
                      <YoutubeLogo size={32} />
                    </a>
                    <a
                      href="https://soundcloud.com/dollmakerlive"
                      target="_blank"
                    >
                      <SoundcloudLogo size={32} />
                    </a>
                    <a
                      href="https://open.spotify.com/intl-pt/artist/7dGmK4sImWkq5ClORKQwIL?si=cFlutIm5RQq06ABT4Au6Iw"
                      target="_blank"
                    >
                      <SpotifyLogo size={32} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}
