import { motion } from 'framer-motion'
import styles from './Discografia.module.css'

// Define o conteúdo das músicas com URL de áudio
const musicData = [
  {
    title: 'Dezko - Ascend',
    production: 'Dollmaker Bootleg',
    imageUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1727877334/capa_dezco_ascend_dsdogt.jpg',
    audioUrl:
      'https://res.cloudinary.com/dio2dnpmn/video/upload/v1727877279/MP3_-_Dezco_-_Ascend_Dollmaker_Bootleg_f5k5ov.mp3',
    spotifyUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725753882/dollmaker/reakd3tsuhlxespv5e9s.png',
    soundcloudUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725753882/dollmaker/guwqklp7omf9amvxm3ox.png',
    spotify:
      'https://open.spotify.com/intl-pt/artist/7dGmK4sImWkq5ClORKQwIL?si=b6stSiSwR7S57vko92d-YQ',
    sound: 'https://soundcloud.com/dollmakerlive'
  },
  {
    title: 'Just Sound',
    production: 'Dollmaker',
    imageUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1727877336/capa_just_sound_fkflmu.jpg',
    audioUrl:
      'https://res.cloudinary.com/dio2dnpmn/video/upload/v1727877295/MP3_-_Dollmaker_-_Just_Sound_xr43cq.mp3',
    spotifyUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725753882/dollmaker/reakd3tsuhlxespv5e9s.png',
    soundcloudUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725753882/dollmaker/guwqklp7omf9amvxm3ox.png',
    spotify:
      'https://open.spotify.com/intl-pt/artist/7dGmK4sImWkq5ClORKQwIL?si=b6stSiSwR7S57vko92d-YQ',
    sound: 'https://soundcloud.com/dollmakerlive'
  },
  {
    title: 'No Light',
    production: 'Dollmaker',
    imageUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1727877337/capa_no_light_zvhda3.jpg',
    audioUrl:
      'https://res.cloudinary.com/dio2dnpmn/video/upload/v1727877290/MP3_-_Dollmaker_-_No_Light_bbwvyb.mp3',
    spotifyUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725753882/dollmaker/reakd3tsuhlxespv5e9s.png',
    soundcloudUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725753882/dollmaker/guwqklp7omf9amvxm3ox.png',
    spotify:
      'https://open.spotify.com/intl-pt/artist/7dGmK4sImWkq5ClORKQwIL?si=b6stSiSwR7S57vko92d-YQ',
    sound: 'https://soundcloud.com/dollmakerlive'
  },
  {
    title: 'On My Time',
    production: 'Dollmaker - Mashup Project',
    imageUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1727877338/capa_on_my_time_sa3wwi.jpg',
    audioUrl:
      'https://res.cloudinary.com/dio2dnpmn/video/upload/v1727877299/MP3_-_Dollmaker_-_On_My_Time_ccvae5.mp3',
    spotifyUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725753882/dollmaker/reakd3tsuhlxespv5e9s.png',
    soundcloudUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725753882/dollmaker/guwqklp7omf9amvxm3ox.png',
    spotify:
      'https://open.spotify.com/intl-pt/artist/7dGmK4sImWkq5ClORKQwIL?si=b6stSiSwR7S57vko92d-YQ',
    sound: 'https://soundcloud.com/dollmakerlive'
  },
  {
    title: 'Trust',
    production: 'Dollmaker & Mr Kane',
    imageUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1727877342/capa_trust_xf3sml.jpg',
    audioUrl:
      'https://res.cloudinary.com/dio2dnpmn/video/upload/v1727877294/MP3_-_Dollmaker_Mr_Kane_-_Trust_g1kn9t.mp3',
    spotifyUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725753882/dollmaker/reakd3tsuhlxespv5e9s.png',
    soundcloudUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725753882/dollmaker/guwqklp7omf9amvxm3ox.png',
    spotify:
      'https://open.spotify.com/intl-pt/artist/7dGmK4sImWkq5ClORKQwIL?si=b6stSiSwR7S57vko92d-YQ',
    sound: 'https://soundcloud.com/dollmakerlive'
  },
  {
    title: 'Children',
    production: 'Dollmaker Bootleg - (MATTN - Klass Roland Clark)',
    imageUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1727877337/capa_mattn_ynrklu.jpg',
    audioUrl:
      'https://res.cloudinary.com/dio2dnpmn/video/upload/v1727877282/MP3_-_MATTN_Klaas_Roland_Clark_-_Children_Dollmaker_Bootleg_bfkhyf.mp3',
    spotifyUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725753882/dollmaker/reakd3tsuhlxespv5e9s.png',
    soundcloudUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725753882/dollmaker/guwqklp7omf9amvxm3ox.png',
    spotify:
      'https://open.spotify.com/intl-pt/artist/7dGmK4sImWkq5ClORKQwIL?si=b6stSiSwR7S57vko92d-YQ',
    sound: 'https://soundcloud.com/dollmakerlive'
  },
  {
    title: 'Lucid Dreams Assembly',
    production: 'Dollmaker',
    imageUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1727877343/capa_lucid_dreams_bx5yyj.jpg',
    audioUrl:
      'https://res.cloudinary.com/dio2dnpmn/video/upload/v1727877297/MP3_-_Dollmaker_-_Lucid_Dream_Assembly_pyy8hl.mp3',
    spotifyUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725753882/dollmaker/reakd3tsuhlxespv5e9s.png',
    soundcloudUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725753882/dollmaker/guwqklp7omf9amvxm3ox.png',
    spotify:
      'https://open.spotify.com/intl-pt/artist/7dGmK4sImWkq5ClORKQwIL?si=b6stSiSwR7S57vko92d-YQ',
    sound: 'https://soundcloud.com/dollmakerlive'
  },
  {
    title: 'Psy Trance Influences',
    production: 'Dollmaker & Dieb',
    imageUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1727877341/capa_psytrance_influences_x6hqov.jpg',
    audioUrl:
      'https://res.cloudinary.com/dio2dnpmn/video/upload/v1727877293/MP3_-_Dollmaker_Dieb_-_Psytrance_influences_d84wsk.mp3',
    spotifyUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725753882/dollmaker/reakd3tsuhlxespv5e9s.png',
    soundcloudUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725753882/dollmaker/guwqklp7omf9amvxm3ox.png',
    spotify:
      'https://open.spotify.com/intl-pt/artist/7dGmK4sImWkq5ClORKQwIL?si=b6stSiSwR7S57vko92d-YQ',
    sound: 'https://soundcloud.com/dollmakerlive'
  },
  {
    title: 'White Stone',
    production: 'Dollmaker',
    imageUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1727877340/capa_white_stone_apphlq.jpg',
    audioUrl:
      'https://res.cloudinary.com/dio2dnpmn/video/upload/v1727877288/MP3_-_Dollmaker_-_White_stone_o6dhwb.mp3',
    spotifyUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725753882/dollmaker/reakd3tsuhlxespv5e9s.png',
    soundcloudUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725753882/dollmaker/guwqklp7omf9amvxm3ox.png',
    spotify:
      'https://open.spotify.com/intl-pt/artist/7dGmK4sImWkq5ClORKQwIL?si=b6stSiSwR7S57vko92d-YQ',
    sound: 'https://soundcloud.com/dollmakerlive'
  },
  {
    title: 'Sunset Midnight',
    production: 'Dollmaker',
    imageUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1727877339/capa_sunset_niyn9f.jpg',
    audioUrl:
      'https://res.cloudinary.com/dio2dnpmn/video/upload/v1727877286/MP3_-_Dollmaker_-_Sunset_Midnight_clnvre.mp3',
    spotifyUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725753882/dollmaker/reakd3tsuhlxespv5e9s.png',
    soundcloudUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725753882/dollmaker/guwqklp7omf9amvxm3ox.png',
    spotify:
      'https://open.spotify.com/intl-pt/artist/7dGmK4sImWkq5ClORKQwIL?si=b6stSiSwR7S57vko92d-YQ',
    sound: 'https://soundcloud.com/dollmakerlive'
  },
  {
    title: 'Critical Delirium',
    production: 'Dollmaker',
    imageUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1727877334/capa_critical_delirium_k2znwe.jpg',
    audioUrl:
      'https://res.cloudinary.com/dio2dnpmn/video/upload/v1727877286/MP3_-_Dollmaker_-_Sunset_Midnight_clnvre.mp3',
    spotifyUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725753882/dollmaker/reakd3tsuhlxespv5e9s.png',
    soundcloudUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725753882/dollmaker/guwqklp7omf9amvxm3ox.png',
    spotify:
      'https://open.spotify.com/intl-pt/artist/7dGmK4sImWkq5ClORKQwIL?si=b6stSiSwR7S57vko92d-YQ',
    sound: 'https://soundcloud.com/dollmakerlive'
  },
  {
    title: 'Bell Rabbit',
    production: 'Dollmaker',
    imageUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1727877333/capa_bellrabbit_fnbc7x.jpg',
    audioUrl:
      'https://res.cloudinary.com/dio2dnpmn/video/upload/v1727877291/MP3_-_Dollmaker_-_Bellrabbit_klca6l.mp3',
    spotifyUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725753882/dollmaker/reakd3tsuhlxespv5e9s.png',
    soundcloudUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725753882/dollmaker/guwqklp7omf9amvxm3ox.png',
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
