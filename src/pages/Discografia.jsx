import { motion } from 'framer-motion'
import styles from './Discografia.module.css'

// Define o conteúdo das músicas com URL de áudio
const musicData = [
  {
    title: 'Dezko - Ascend',
    production: 'Dollmaker Bootleg',
    imageUrl:
      'https://res-console.cloudinary.com/dio2dnpmn/media_explorer_thumbnails/fec062d9acef8da3d4a469938dcdab2e/detailed',
    spotifyUrl:
      'https://res-console.cloudinary.com/dio2dnpmn/media_explorer_thumbnails/1bdfcb5c8019ce9021e0ae496994455a/detailed',
    soundcloudUrl:
      'https://res-console.cloudinary.com/dio2dnpmn/media_explorer_thumbnails/06962879aa19e0ae58ec78ec9fe56468/detailed',
    audioUrl:
      'https://res-console.cloudinary.com/dio2dnpmn/thumbnails/transform/v1/video/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGR1XzEw/v1/ZG9sbG1ha2VyL211c2ljYXMvYXVkaW8veXV2d3hnZzN0aW4zMTh1azIycjU=/template_primary',
    spotify:
      'https://open.spotify.com/intl-pt/artist/7dGmK4sImWkq5ClORKQwIL?si=b6stSiSwR7S57vko92d-YQ',
    sound: 'https://soundcloud.com/dollmakerlive'
  },
  {
    title: 'Just Sound',
    production: 'Dollmaker',
    imageUrl:
      'https://res-console.cloudinary.com/dio2dnpmn/media_explorer_thumbnails/7eb1db625879ea37664baeac6062c50b/detailed',
    spotifyUrl:
      'https://res-console.cloudinary.com/dio2dnpmn/media_explorer_thumbnails/1bdfcb5c8019ce9021e0ae496994455a/detailed',
    soundcloudUrl:
      'https://res-console.cloudinary.com/dio2dnpmn/media_explorer_thumbnails/06962879aa19e0ae58ec78ec9fe56468/detailed',
    audioUrl:
      'https://res-console.cloudinary.com/dio2dnpmn/thumbnails/transform/v1/video/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGR1XzEw/v1/ZG9sbG1ha2VyL211c2ljYXMvYXVkaW8vc3FhY2M4anppZGx6MnVwbGx1aGo=/template_primary',
    spotify:
      'https://open.spotify.com/intl-pt/artist/7dGmK4sImWkq5ClORKQwIL?si=b6stSiSwR7S57vko92d-YQ',
    sound: 'https://soundcloud.com/dollmakerlive'
  },
  {
    title: 'No Light',
    production: 'Dollmaker',
    imageUrl:
      'https://res-console.cloudinary.com/dio2dnpmn/media_explorer_thumbnails/fc3ab1743ab79d85997f67ad2cb23713/detailed',
    spotifyUrl:
      'https://res-console.cloudinary.com/dio2dnpmn/media_explorer_thumbnails/1bdfcb5c8019ce9021e0ae496994455a/detailed',
    soundcloudUrl:
      'https://res-console.cloudinary.com/dio2dnpmn/media_explorer_thumbnails/06962879aa19e0ae58ec78ec9fe56468/detailed',
    audioUrl:
      'https://res.cloudinary.com/dio2dnpmn/video/upload/v1725766296/dollmaker/musicas/audio/l8olvchf5vd396wrhkts.mp4',
    spotify:
      'https://open.spotify.com/intl-pt/artist/7dGmK4sImWkq5ClORKQwIL?si=b6stSiSwR7S57vko92d-YQ',
    sound: 'https://soundcloud.com/dollmakerlive'
  },
  {
    title: 'On My Time',
    production: 'Dollmaker - Mashup Project',
    imageUrl:
      'https://res-console.cloudinary.com/dio2dnpmn/media_explorer_thumbnails/b8367abefa613b65d3a956944368f284/detailed',
    spotifyUrl:
      'https://res-console.cloudinary.com/dio2dnpmn/media_explorer_thumbnails/1bdfcb5c8019ce9021e0ae496994455a/detailed',
    soundcloudUrl:
      'https://res-console.cloudinary.com/dio2dnpmn/media_explorer_thumbnails/06962879aa19e0ae58ec78ec9fe56468/detailed',
    audioUrl:
      'https://res-console.cloudinary.com/dio2dnpmn/thumbnails/transform/v1/video/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGR1XzEw/v1/ZG9sbG1ha2VyL211c2ljYXMvYXVkaW8vbXJvZWFzNnJmajVmeXEyNG10c2M=/template_primary',
    spotify:
      'https://open.spotify.com/intl-pt/artist/7dGmK4sImWkq5ClORKQwIL?si=b6stSiSwR7S57vko92d-YQ',
    sound: 'https://soundcloud.com/dollmakerlive'
  },
  {
    title: 'Trust',
    production: 'Dollmaker & Mr Kane',
    imageUrl:
      'https://res-console.cloudinary.com/dio2dnpmn/media_explorer_thumbnails/438af5d58c43be2cc5c74328cc970695/detailed',
    spotifyUrl:
      'https://res-console.cloudinary.com/dio2dnpmn/media_explorer_thumbnails/1bdfcb5c8019ce9021e0ae496994455a/detailed',
    soundcloudUrl:
      'https://res-console.cloudinary.com/dio2dnpmn/media_explorer_thumbnails/06962879aa19e0ae58ec78ec9fe56468/detailed',
    audioUrl:
      'https://res-console.cloudinary.com/dio2dnpmn/thumbnails/transform/v1/video/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGR1XzEw/v1/ZG9sbG1ha2VyL211c2ljYXMvYXVkaW8vYXNqbHY2amwxYnp5aWp3cG1icDg=/template_primary',
    spotify:
      'https://open.spotify.com/intl-pt/artist/7dGmK4sImWkq5ClORKQwIL?si=b6stSiSwR7S57vko92d-YQ',
    sound: 'https://soundcloud.com/dollmakerlive'
  },
  {
    title: 'Children',
    production: 'Dollmaker Bootleg',
    imageUrl:
      'https://res-console.cloudinary.com/dio2dnpmn/media_explorer_thumbnails/15dddf0ffc68affef5ec11bcfeaa6834/detailed',
    spotifyUrl:
      'https://res-console.cloudinary.com/dio2dnpmn/media_explorer_thumbnails/1bdfcb5c8019ce9021e0ae496994455a/detailed',
    soundcloudUrl:
      'https://res-console.cloudinary.com/dio2dnpmn/media_explorer_thumbnails/06962879aa19e0ae58ec78ec9fe56468/detailed',
    audioUrl:
      'https://res-console.cloudinary.com/dio2dnpmn/thumbnails/transform/v1/video/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGR1XzEw/v1/ZG9sbG1ha2VyL211c2ljYXMvYXVkaW8vdHNweHRjZm13MW82eW16Z3Vkb3g=/template_primary',
    spotify:
      'https://open.spotify.com/intl-pt/artist/7dGmK4sImWkq5ClORKQwIL?si=b6stSiSwR7S57vko92d-YQ',
    sound: 'https://soundcloud.com/dollmakerlive'
  }

  // Adicione mais músicas conforme necessário
]

export default function Discografia() {
  // Define a animação para os cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className={styles.content}>
      <div className={styles.hero}>
        <div className={styles.discografia}>
          <div className={styles.spotify}>
            <h2>DISCOGRAFIA</h2>

            <div className={styles.cards}>
              {musicData.map((music, index) => (
                <motion.div
                  key={index}
                  className={styles.card}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  transition={{ duration: 0.5, delay: index * 0.3 }} // Define o atraso entre os cards
                >
                  <div
                    className={styles.fotoMusic}
                    style={{ backgroundImage: `url(${music.imageUrl})` }}
                  ></div>

                  <div className={styles.descMusic}>
                    <h2>{music.title}</h2>
                    <p>{music.production}</p>
                  </div>

                  <audio controls>
                    <source
                      src={music.audioUrl}
                      type="audio/mp3"
                    />
                  </audio>

                  <div className={styles.cta}>
                    <a href={music.spotify}>
                      <img
                        src={music.spotifyUrl}
                        alt="Spotify"
                      />
                    </a>
                    <a href={music.sound}>
                      <img
                        src={music.soundcloudUrl}
                        alt="SoundCloud"
                      />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
