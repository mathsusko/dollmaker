import {
  Envelope,
  WhatsappLogo,
  InstagramLogo,
  SpotifyLogo,
  SoundcloudLogo,
  YoutubeLogo
} from '@phosphor-icons/react'
import styles from './Contato.module.css'

export default function Contato() {
  return (
    <div className={styles.bg}>
      <div className={styles.content}>
        <div className={styles.contact}>
          <div className={styles.rows}>
            <div className={styles.rowOne}>
              <img
                src="https://res.cloudinary.com/dio2dnpmn/image/upload/v1736523848/dollmaker/cta/bf9e4z3bxtub0okhsq05.png"
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
                  src="https://res.cloudinary.com/dio2dnpmn/image/upload/v1736523850/dollmaker/cta/v7cq0exg8pynj3vkcc6n.png"
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
      </div>
    </div>
  )
}
