import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdKeyboardVoice } from 'react-icons/md';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';

const Voice = () => {
  const commands = [
    {
      command: ['Open *'],
      callback: (redirectPage) => setRedirectUrl(redirectPage),
    },
  ];

  const navigate = useNavigate();
  const { transcript, resetTranscript } = useSpeechRecognition({ commands });
  const [redirectUrl, setRedirectUrl] = useState('');
  const pages = ['home', 'search', 'cart', 'favorites', 'login', 'product'];
  const urls = {
    home: '/',
    search: '/search',
    cart: '/cart',
    favorites: '/favorites',
    login: '/login',
    product: '/product',
  };

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  if (redirectUrl) {
    if (pages.includes(redirectUrl)) {
      navigate(urls[redirectUrl]);
    } else {
      console.log('Error');
    }
  }

  const handleVoiceCommand = () => {
    SpeechRecognition.startListening();
  };
  return (
    <div className="voiceBtn">
      <MdKeyboardVoice onClick={handleVoiceCommand} />
    </div>
  );
};

export default Voice;
