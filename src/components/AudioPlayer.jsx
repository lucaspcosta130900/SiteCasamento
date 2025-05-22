import React, { useState, useEffect, useRef } from 'react';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import '../styles/AudioPlayer.css';

function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = volume;
    audio.loop = true;

    // Salvar estado do áudio no localStorage
    const savedVolume = localStorage.getItem('audioVolume');
    const savedMuted = localStorage.getItem('audioMuted');
    if (savedVolume) {
      setVolume(parseFloat(savedVolume));
      audio.volume = parseFloat(savedVolume);
    }
    if (savedMuted === 'true') {
      setIsMuted(true);
      audio.muted = true;
    }

    // Verificar se é a primeira visita na home
    const isFirstVisit = !localStorage.getItem('hasVisitedBefore');
    if (isFirstVisit && location.pathname === '/') {
      // Marcar que já visitou
      localStorage.setItem('hasVisitedBefore', 'true');
      
      // Tentar tocar o áudio automaticamente
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(error => {
            console.log('Erro ao tocar áudio automaticamente:', error);
            // Se falhar, não faz nada - o usuário precisará clicar para tocar
          });
      }
    }

    // Limpar ao desmontar
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [location.pathname]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(error => {
        console.log('Erro ao tocar áudio:', error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const newMuted = !isMuted;
    audioRef.current.muted = newMuted;
    setIsMuted(newMuted);
    localStorage.setItem('audioMuted', newMuted);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
    localStorage.setItem('audioVolume', newVolume);
    if (newVolume === 0) {
      setIsMuted(true);
      audioRef.current.muted = true;
    } else if (isMuted) {
      setIsMuted(false);
      audioRef.current.muted = false;
    }
  };

  return (
    <div className="audio-player">
      <audio
        ref={audioRef}
        src="/audio/falling-like-the-stars.mp3"
        preload="auto"
      />
      <button 
        className="audio-control play-pause"
        onClick={togglePlay}
        aria-label={isPlaying ? 'Pausar música' : 'Tocar música'}
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      <div className="volume-control">
        <button 
          className="audio-control mute"
          onClick={toggleMute}
          aria-label={isMuted ? 'Ativar som' : 'Desativar som'}
        >
          {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
          className="volume-slider"
          aria-label="Controle de volume"
        />
      </div>
    </div>
  );
}

export default AudioPlayer; 