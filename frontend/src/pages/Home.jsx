import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdKeyboardVoice } from "react-icons/md";
import {
  Box,
  Text,
  Container,
  SimpleGrid,
  Image,
  CircularProgress,
} from "@chakra-ui/react";
import {
  AccountBalanceWallet,
  AssignmentReturn,
  WorkspacePremium,
} from "@mui/icons-material";

import Carousel from "../components/Carousel";
import { getAllMiniImages } from "../services/ImageServices";
import { useSearchContext } from "../contexts/SearchContext";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Home = () => {
  useEffect(() => {
    getAllMiniImages().then((result) => {
      setMiniImages(result.miniImages);
    });
  }, []);

  const commands = [
    {
      command: ["Open *"],
      callback: (redirectPage) => setRedirectUrl(redirectPage),
    },
  ];

  const navigate = useNavigate();
  const { setSearch } = useSearchContext();
  const [miniImages, setMiniImages] = useState([]);
  const { transcript, resetTranscript } = useSpeechRecognition({ commands });
  const [redirectUrl, setRedirectUrl] = useState("");
  const pages = ["home", "search", "cart", "favorites", "login"];
  const urls = {
    home: "/",
    search: "/search",
    cart: "/cart",
    favorites: "/favorites",
    login: "/login",
  };

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  if (redirectUrl) {
    if (pages.includes(redirectUrl)) {
      navigate(urls[redirectUrl]);
    } else {
      console.log("Error");
    }
  }

  const handleVoiceCommand = () => {
    SpeechRecognition.startListening();
  };

  const onClickImage = () => {
    setSearch("a");
    navigate("/search");
  };

  return (
    <Box>
      <Box display="flex" justifyContent="center" className="carousel">
        <Carousel />
      </Box>
      <Box bg="black" mt={{ base: 5, md: 0 }}>
        <Container
          maxWidth={1200}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{ base: "column", md: "row" }}
          py={7}
        >
          <Box
            color="#fff"
            alignItems="center"
            display="flex"
            flexDirection="column"
          >
            <AccountBalanceWallet sx={{ fontSize: 50 }} color="inherit" />
            <Text mt={3} fontSize={20} fontWeight={600} color="inherit">
              Secure Payment Options
            </Text>
          </Box>
          <Box
            color="#fff"
            alignItems="center"
            display="flex"
            flexDirection="column"
            mt={{ base: 5, md: 0 }}
          >
            <AssignmentReturn sx={{ fontSize: 50 }} color="inherit" />
            <Text mt={3} fontSize={20} fontWeight={600} color="inherit">
              30 Days Free Returns
            </Text>
          </Box>
          <Box
            color="#fff"
            alignItems="center"
            display="flex"
            flexDirection="column"
            mt={{ base: 5, md: 0 }}
          >
            <WorkspacePremium sx={{ fontSize: 50 }} color="inherit" />
            <Text mt={3} fontSize={20} fontWeight={600} color="inherit">
              Vcart Quality Assurance
            </Text>
          </Box>
        </Container>
      </Box>
      <SimpleGrid
        columns={{ base: 1, sm: 2 }}
        spacing={{ base: 3, md: 5 }}
        px={{ base: 3, md: 0 }}
        py={{ base: 3, md: 5 }}
        mt={5}
        maxWidth={1200}
        mx="auto"
      >
        {miniImages &&
          miniImages.map((image, index) => {
            return (
              <Image
                key={index}
                cursor="pointer"
                onClick={onClickImage}
                src={image.url}
              />
            );
          })}
        {miniImages.length === 0 && (
          <>
            <Box my={20} display="flex" justifyContent="center" width="100%">
              <CircularProgress isIndeterminate color="facebook.500" />
            </Box>
            <Box my={20} display="flex" justifyContent="center" width="100%">
              <CircularProgress isIndeterminate color="facebook.500" />
            </Box>
          </>
        )}
      </SimpleGrid>
      <div className="voiceBtn">
        <MdKeyboardVoice onClick={handleVoiceCommand} />
      </div>
    </Box>
  );
};

export default Home;
