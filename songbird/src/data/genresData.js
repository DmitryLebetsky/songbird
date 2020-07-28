// Rock
import rockIcon from '../assets/images/icons/genres-icons/rock-icon.png';

import nickelbackBurnItToTheGroundCover from '../assets/images/songs/rock/nickelback-burn-it-to-the-ground.jpg';
import nickelbackBurnItToTheGroundAudio from '../assets/songs/rock/Nickelback - Burn It to the Ground.mp3';
import nickelbackBurnItToTheGroundAudioMinus from '../assets/songs/rockMinuses/Nickelback - Burn It to the Ground (minus).mp3';

import linkinParkUntilItsGoneCover from '../assets/images/songs/rock/linkin-park-until-it\'s-gone.jpg';
import linkinParkUntilItsGoneAudio from '../assets/songs/rock/Linkin Park - Until Its Gone.mp3';
import linkinParkUntilItsGoneAudioMinus from '../assets/songs/rockMinuses/Linkin Park - Until Its Gone (minus).mp3';

import systemOfADownToxicityCover from '../assets/images/songs/rock/system-of-a-down-toxicity.jpg';
import systemOfADownToxicityAudio from '../assets/songs/rock/System Of A Down - Toxicity.mp3';
import systemOfADownToxicityAudioMinus from '../assets/songs/rockMinuses/System Of A Down - Toxicity (minus).mp3';

import nirvanaSmellsLikeTeenSpiritCover from '../assets/images/songs/rock/nirvana-smells-like-teen-spirit.jpg';
import nirvanaSmellsLikeTeenSpiritAudio from '../assets/songs/rock/Nirvana - Smells Like Teen Spirit.mp3';
import nirvanaSmellsLikeTeenSpiritAudioMinus from '../assets/songs/rockMinuses/Nirvana - Smells Like Teen Spirit (minus).mp3';

import avengedSevenfoldNightmareCover from '../assets/images/songs/rock/avenged-sevenfold-nightmare.jpg';
import avengedSevenfoldNightmareAudio from '../assets/songs/rock/Avenged Sevenfold - Nightmare.mp3';
import avengedSevenfoldNightmareAudioMinus from '../assets/songs/rockMinuses/Avenged Sevenfold - Nightmare (minus).mp3';

import skilletTheResistanceCover from '../assets/images/songs/rock/skillet-the-resistance.jpg';
import skilletTheResistanceAudio from '../assets/songs/rock/Skillet - The Resistance.mp3';
import skilletTheResistanceAudioMinus from '../assets/songs/rockMinuses/Skillet - The Resistance (minus).mp3';

// Pop
import popIcon from '../assets/images/icons/genres-icons/pop-icon.png';

import capitalCitiesSafeAndSoundCover from '../assets/images/songs/pop/capital-cities-safe-and-sound.jpg';
import capitalCitiesSafeAndSoundAudio from '../assets/songs/pop/Capital Cities - Safe And Sound.mp3';
import capitalCitiesSafeAndSoundAudioMinus from '../assets/songs/popMinuses/Capital Cities - Safe And Sound (minus).mp3';

import TomWalkerLeaveALightOnCover from '../assets/images/songs/pop/tom-walker-leave-a-light-on.jpg';
import TomWalkerLeaveALightOnAudio from '../assets/songs/pop/Tom Walker - Leave a Light On.mp3';
import TomWalkerLeaveALightOnAudioMinus from '../assets/songs/popMinuses/Tom Walker - Leave a Light On (minus).mp3';

import RagnBoneManHumanCover from '../assets/songs/pop/rag\'n\'bone-man-human.jpg';
import RagnBoneManHumanAudio from '../assets/songs/pop/RagnBone Man - Human.mp3';
import RagnBoneManHumanAudioMinus from '../assets/songs/popMinuses/RagnBone Man - Human (minus).mp3';

import siaChandelierCover from '../assets/images/songs/pop/sia-chandelier.jpg';
import siaChandelierAudio from '../assets/songs/pop/Sia - Chandelier.mp3';
import siaChandelierAudioMinus from '../assets/songs/popMinuses/Sia - Chandelier (minus).mp3';

import pinkJustLikeFireCover from '../assets/images/songs/pop/p!nk-just-like-fire.jpg';
import pinkJustLikeFireAudio from '../assets/songs/pop/Pink - Just Like Fire (From the Original Motion Picture Alice Through The Looking Glass).mp3';
import pinkJustLikeFireAudioMinus from '../assets/songs/popMinuses/Pink - Just Like Fire (From the Original Motion Picture Alice Through The Looking Glass) (minus).mp3';

import theScriptFeatWillIAmHalfOfFameCover from '../assets/images/songs/pop/the-script-feat-will-i-am-half-of-fame.jpg';
import theScriptFeatWillIAmHalfOfFameAudio from '../assets/songs/pop/The Script feat william - Hall of Fame.mp3';
import theScriptFeatWillIAmHalfOfFameAudioMinus from '../assets/songs/popMinuses/The Script feat william - Hall of Fame (minus).mp3';

// Folk

const genresData = [
  {
    title: 'rock',
    icon: rockIcon,
    songs: [
      {
        title: 'Nickelback - Burn It To The Ground',
        description: 'This song is about a group of guys who are ready to or are in the process of partying. They are drinking whiskey and the narrator notes it makes him \'bat shit crazy\'. They are ready to \'go hard or go home\' and tear up the town.',
        cover: nickelbackBurnItToTheGroundCover,
        audio: nickelbackBurnItToTheGroundAudio,
        audioMinus: nickelbackBurnItToTheGroundAudioMinus,
      },
      {
        title: 'Linkin Park - Until It\'s Gone',
        description: 'This song is about people, who take things for granted, and that they don\'t understand what they have until it\'s gone.',
        cover: linkinParkUntilItsGoneCover,
        audio: linkinParkUntilItsGoneAudio,
        audioMinus: linkinParkUntilItsGoneAudioMinus,
      },
      {
        title: 'System Of A Down - Toxicity',
        description: 'The word "Toxicity" means the level of toxins in an item. There is lots of room for interpretation in the lyrics, as the toxins could refer to the city of Los Angeles and the Hollywood lifestyle, but could also be a commentary on the music industry, religion, corruption, drugs or any number of things that the band feels is poisoning people',
        cover: systemOfADownToxicityCover,
        audio: systemOfADownToxicityAudio,
        audioMinus: systemOfADownToxicityAudioMinus,
      },
      {
        title: 'Nirvana - Smells Like Teen Spirit',
        description: 'This song is about the youth generation and boredom. It is a vision of how a person or a little group look at the time in for example school. A non conformist little groups views on unwritten laws we follow. A denial by the blind or a denial even if you know the truth and getting bored of it.',
        cover: nirvanaSmellsLikeTeenSpiritCover,
        audio: nirvanaSmellsLikeTeenSpiritAudio,
        audioMinus: nirvanaSmellsLikeTeenSpiritAudioMinus,
      },
      {
        title: 'Avenged Sevenfold - Nightmare',
        description: 'This song is basically about hell and if you are going to keep on being sinful you\'re going to end up in the "nightmare" which is hell.',
        cover: avengedSevenfoldNightmareCover,
        audio: avengedSevenfoldNightmareAudio,
        audioMinus: avengedSevenfoldNightmareAudioMinus,
      },
      {
        title: 'Skillet - The Resistance',
        description: 'This song  is about rising up to the bad in the world and dying for what you believe in. No matter who we are, we can all stand up and rise with all our efforts, not listening to and being mislead by lies. Peace and belief is the way.',
        cover: skilletTheResistanceCover,
        audio: skilletTheResistanceAudio,
        audioMinus: skilletTheResistanceAudioMinus,
      },
    ],
  },
  {
    title: 'pop',
    icon: popIcon,
    songs: [
      {
        title: 'Capital Cities - Safe And Sound',
        description: 'The song is about weathering storms with the right people sharing your umbrella. Life or death, as long as you\'ve got the right wingman or a wingwoman in your corner, you\'re golden.',
        cover: capitalCitiesSafeAndSoundCover,
        audio: capitalCitiesSafeAndSoundAudio,
        audioMinus: capitalCitiesSafeAndSoundAudioMinus,
      },
      {
        title: 'Tom Walker - Leave a Light On',
        description: '“Leave a Light On” were inspired by a friend of Tom who had been battling severe drug addiction. In the song, Walker encourages his friend to get help. He goes on to tell his friend that if he ever loses his way, he (Walker) “will leave the light on” for him so he can find his way back.',
        cover: TomWalkerLeaveALightOnCover,
        audio: TomWalkerLeaveALightOnAudio,
        audioMinus: TomWalkerLeaveALightOnAudioMinus,
      },
      {
        title: 'Rag\'n\'Bone Man - Human',
        description: 'In “Human”, Rag’n’Bone Man is speaking to his mortality.  This is not done in the physical sense, as in the temporalness of his physical body.  Rather he expresses this sentiment along the lines of acknowledging his inherent flaws and inability to resolve certain issues.',
        cover: RagnBoneManHumanCover,
        audio: RagnBoneManHumanAudio,
        audioMinus: RagnBoneManHumanAudioMinus,
      },
      {
        title: 'Sia - Chandelier',
        description: 'The lyrics of Sia’s “Chandelier” are about a party girls’ love for living life to the fullest. She loves the attention being a party girl gives her despite the fact that it’s fleeting and not genuine. She knows she’s the one for the good time. The one people call on only for fun. Swinging from a chandelier has always been one way of describing a life of excessive partying and that’s what she is doing.',
        cover: siaChandelierCover,
        audio: siaChandelierAudio,
        audioMinus: siaChandelierAudioMinus,
      },
      {
        title: 'P!nk - Just Like Fire (From the Original Motion Picture "Alice Through The Looking Glass")',
        description: '“Just like Fire” by Pink mainly speaks about the singer’s determination to live out her own dreams and truly be herself without being controlled by other people. It appears she works hard to reach her maximum potential, but realizes that the very people around her have been hindering her from attaining her goals.',
        cover: pinkJustLikeFireCover,
        audio: pinkJustLikeFireAudio,
        audioMinus: pinkJustLikeFireAudioMinus,
      },
      {
        title: 'The Script - Hall of Fame (feat. will.i.am)',
        description: 'The song expresses that you don\'t have to go after fame. Rather if you dedicate yourselves to make your dreams true, then fame will ultimately go after you.',
        cover: theScriptFeatWillIAmHalfOfFameCover,
        audio: theScriptFeatWillIAmHalfOfFameAudio,
        audioMinus: theScriptFeatWillIAmHalfOfFameAudioMinus,
      }
    ],
  },
]