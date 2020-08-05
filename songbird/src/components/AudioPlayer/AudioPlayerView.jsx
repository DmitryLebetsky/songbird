import React from 'react';
import classNames from 'classnames';

import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import {ReactComponent as PlayAudioPlayerIcon} from '../../assets/images/icons/audio-player-icons/play-audio-player-icon-white.svg';
import {ReactComponent as StopAudioPlayerIcon} from '../../assets/images/icons/audio-player-icons/stop-audio-player-icon-white.svg';
import {ReactComponent as VolumeAudioPlayerIcon} from '../../assets/images/icons/audio-player-icons/audio-player-volume-icon-white.svg';
import {ReactComponent as VolumeMuteAudioPlayerIcon} from '../../assets/images/icons/audio-player-icons/audio-player-volume-mute-icon-white.svg'

const AudioPlayerView = ({
  src,
  className = '',
  autoPlay = false,
  autoPlayAfterSrcChange = false,
  audioRef = null,
  onPlay = () => {},
}) => {
  const audioPlayerClasses = classNames({
    'songhunt-audio-player': true,
    [className]: Boolean(className),
  });
  return (
    <AudioPlayer
      ref={audioRef}
      autoPlay={autoPlay}
      autoPlayAfterSrcChange={autoPlayAfterSrcChange}
      onPlay={onPlay}
      customIcons={{
        play: <PlayAudioPlayerIcon className="songhunt-audio-player__play-icon"/>,
        pause: <StopAudioPlayerIcon className="songhunt-audio-player__stop-icon"/>,
        volume: <VolumeAudioPlayerIcon className="songhunt-audio-player__volume-icon" />,
        volumeMute: <VolumeMuteAudioPlayerIcon className="songhunt-audio-player__volume-mute-icon" />,
      }}
      className={audioPlayerClasses}
      layout="horizontal-reverse"
      customAdditionalControls={[
        RHAP_UI.CURRENT_TIME,
        RHAP_UI.PROGRESS_BAR,
        RHAP_UI.DURATION,
      ]}
      customProgressBarSection={[
        RHAP_UI.MAIN_CONTROLS,
        RHAP_UI.ADDITIONAL_CONTROLS,
        RHAP_UI.VOLUME,
      ]}
      customControlsSection={[]}
      showJumpControls={false}
      src={src}
    />
  );
};

export default AudioPlayerView;