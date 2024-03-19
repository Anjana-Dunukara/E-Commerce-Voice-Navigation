import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useNavigate } from "react-router-dom";
import { MdKeyboardVoice } from "react-icons/md";

const Footer = () => {
  //   const commands = [
  //     {
  //       command: ["Open *"],
  //       callback: (redirectPage) => setRedirectUrl(redirectPage),
  //     },
  //   ];

  //   const navigate = useNavigate();
  //   const { transcript, resetTranscript } = useSpeechRecognition({ commands });
  //   const [redirectUrl, setRedirectUrl] = useState("");
  //   const pages = ["home", "search", "cart", "favorites", "login"];
  //   const urls = {
  //     home: "/",
  //     search: "/search",
  //     cart: "/cart",
  //     favorites: "/favorites",
  //     login: "/login",
  //   };

  //   if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
  //     return null;
  //   }

  //   if (redirectUrl) {
  //     if (pages.includes(redirectUrl)) {
  //       navigate(urls[redirectUrl]);
  //     } else {
  //       console.log("Error");
  //     }
  //   }

  //   const handleVoiceCommand = () => {
  //     SpeechRecognition.startListening();
  //   };

  return (
    <Box mt={5} className="footer">
      {/* <div className="voiceBtn">
        <MdKeyboardVoice onClick={handleVoiceCommand} />
      </div> */}
    </Box>
  );
};

export default Footer;
