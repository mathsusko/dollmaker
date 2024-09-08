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
  InstagramLogo
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

  return (
    <section>
      <article className={styles.bannerHero}></article>
      <article className={styles.content}>
        <div className={styles.panel}>
          <p>Oficial Website</p>
          <p>©</p>
          <p>2024</p>
          <p>Progressive Trance</p>
          <p>|</p>
          <p>Psy Trance</p>
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
                  <p>The Factory - Vetala</p>
                </div>
                <div className={styles.mid}>
                  <p>Acesse minhas plataformas musicais e encontre muito mais!</p>
                  <div className={styles.images}>
                    <img src="https://res-console.cloudinary.com/dio2dnpmn/media_explorer_thumbnails/06962879aa19e0ae58ec78ec9fe56468/detailed" />
                    <img src="https://res-console.cloudinary.com/dio2dnpmn/media_explorer_thumbnails/1bdfcb5c8019ce9021e0ae496994455a/detailed" />
                  </div>
                </div>
              </div>

              <button onClick={handleDiscografia}>Ver discografia</button>
            </div>
            <div className={styles.secondColumn}>
              <div className={styles.boxMusic}></div>

              <audio
                src="../src/assets/audio/funky.wav"
                controls
              ></audio>
            </div>
          </div>
        </div>

        <div className={styles.bio}>
          <div className={styles.logoOne}>
            <img src="https://res-console.cloudinary.com/dio2dnpmn/media_explorer_thumbnails/5af31b392849f613fcaefb09db3da35f/detailed" />
          </div>
          <div className={styles.logoTwo}>
            <img src="https://res-console.cloudinary.com/dio2dnpmn/media_explorer_thumbnails/da128cec65adf58a54c9097eb97475cd/detailed" />
          </div>
          <div className={styles.bioDescription}>
            <h2>Biografia</h2>
            <p>
              Eduardo Sanches, conhecido artisticamente como Dollmaker, é um talentoso DJ
              e produtor brasileiro que tem se destacado na cena progressive psytrance.
              Desde o início de sua carreira em 2016, Dollmaker tem chamado a atenção com
              seu som inovador, que habilmente mistura elementos de progressive trance e
              música clássica.
            </p>
            <p>
              Ao longo dos anos, Dollmaker já se apresentou em diversas festas de renome
              nacional, incluindo eventos icônicos como Progressive, Danghai e
              Psycodélicos. Sua habilidade de criar atmosferas únicas e envolventes o
              tornou uma presença constante e aguardada nesses eventos.
            </p>
            <p>
              Dollmaker é amplamente reconhecido por suas produções meticulosamente
              elaboradas e por seu estilo inconfundível, que combina melodias cativantes,
              linhas de baixo poderosas e arranjos complexos. Sua música não apenas cativa
              o público nas pistas de dança, mas também oferece uma experiência auditiva
              rica e variada, consolidando sua posição como um dos artistas mais
              promissores da cena psytrance.
            </p>
          </div>
        </div>

        <div className={styles.cta}>
          <div className={styles.ctaContent}>
            <div className={styles.colOne}>
              <h2>Vamos Conversar?</h2>
              <p>
                Se você está pronto para levar seu próximo evento a um novo patamar ou
                deseja discutir uma parceria que vai marcar a cena do Psy Trance, entre em
                contato comigo! Estou ansioso para ouvir suas ideias e colaborar para
                criar algo realmente especial.
              </p>
            </div>

            <div className={styles.colTwo}>
              <div className={styles.contacts}>
                <h2>Contatos</h2>
                <div className={styles.contact}>
                  <div className={styles.wpp}>
                    <WhatsappLogo size={24} />
                    <p>WhatsApp</p>
                  </div>
                  <p>(41) 99999-9999</p>
                </div>

                <div className={styles.contact}>
                  <div className={styles.wpp}>
                    <EnvelopeOpen size={24} />
                    <p>E-mail</p>
                  </div>
                  <p>email@dollmaker.com.br</p>
                </div>
              </div>

              <div className={styles.icons}>
                <p>Redes sociais/Plataformas Musicais</p>
                <div className={styles.icon}>
                  <a
                    href="https://www.instagram.com/dollmakerlive/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.instagramLink}
                  >
                    <InstagramLogo size={32} />
                  </a>
                  <a
                    href="https://soundcloud.com/dollmakerlive"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.instagramLink}
                  >
                    <SoundcloudLogo size={32} />
                  </a>
                  <a
                    href="https://open.spotify.com/intl-pt/artist/7dGmK4sImWkq5ClORKQwIL?si=X-98tm35QhOOQnoXXyuyfw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.instagramLink}
                  >
                    <SpotifyLogo size={32} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}
