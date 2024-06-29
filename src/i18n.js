// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "OUR VISION": "OUR VISION",
      "Empowering Educators": "Empowering Educators",
      "visionDescription": "The traditional classroom is evolving. XR4U equips educators with the latest tools and knowledge in Extended Reality (XR) through comprehensive workshops and training programs. This empowers teachers to seamlessly integrate XR into their curriculum, creating a more engaging and interactive learning experience.",
      "Find a fit for your company": "Find a fit for your company",
      "XR IN EDUCATION": "XR IN EDUCATION",
      "Immersive Learning": "Immersive Learning",
      "educationDescription": "Students today crave innovative ways to explore the world. XR4U unlocks immersive learning experiences that extend beyond textbooks and lectures. Imagine virtual reality tours of the pyramids, virtual dissections in biology, or practicing public speaking in a safe, simulated environment. XR ignites curiosity, enhances knowledge retention, and fosters a deeper understanding of subjects.",
      "OUR METHODOLOGY": "OUR METHODOLOGY",
      "Bridging the Gap": "Bridging the Gap",
      "methodologyDescription": "XR4U provides students with practical tools to apply their learning in simulated environments. They can design 3D models in history, conduct virtual experiments in science, or collaborate on projects across geographical boundaries. This hands-on approach develops critical thinking, problem-solving skills, and collaboration, preparing students for future workforce challenges and opportunities."
    }
  },
  hi: {
    translation: {
      "OUR VISION": "हमारा दृष्टिकोण",
      "Empowering Educators": "शिक्षकों को सशक्त बनाना",
      "visionDescription": "पारंपरिक कक्षा विकसित हो रही है। XR4U शिक्षकों को व्यापक कार्यशालाओं और प्रशिक्षण कार्यक्रमों के माध्यम से विस्तारित वास्तविकता (XR) में नवीनतम उपकरण और ज्ञान से लैस करता है। यह शिक्षकों को अपने पाठ्यक्रम में XR को सहजता से एकीकृत करने के लिए सशक्त बनाता है, जिससे अधिक आकर्षक और इंटरैक्टिव सीखने का अनुभव बनता है।",
      "Find a fit for your company": "अपनी कंपनी के लिए एक उपयुक्तता खोजें",
      "XR IN EDUCATION": "शिक्षा में XR",
      "Immersive Learning": "इमर्सिव लर्निंग",
      "educationDescription": "आज के छात्र दुनिया का अन्वेषण करने के लिए अभिनव तरीकों की लालसा रखते हैं। XR4U पाठ्यपुस्तकों और व्याख्यानों से परे इमर्सिव लर्निंग अनुभवों को अनलॉक करता है। कल्पना करें कि पिरामिडों का वर्चुअल रियलिटी दौरा, जीवविज्ञान में वर्चुअल विच्छेदन, या एक सुरक्षित, सिम्युलेटेड वातावरण में सार्वजनिक भाषण का अभ्यास करें। XR जिज्ञासा जगाता है, ज्ञान प्रतिधारण को बढ़ाता है, और विषयों की गहरी समझ को बढ़ावा देता है।",
      "OUR METHODOLOGY": "हमारी कार्यप्रणाली",
      "Bridging the Gap": "अंतर को पाटना",
      "methodologyDescription": "XR4U छात्रों को सिम्युलेटेड वातावरण में अपने सीखने को लागू करने के लिए व्यावहारिक उपकरण प्रदान करता है। वे इतिहास में 3D मॉडल डिज़ाइन कर सकते हैं, विज्ञान में वर्चुअल प्रयोग कर सकते हैं, या भौगोलिक सीमाओं के पार परियोजनाओं पर सहयोग कर सकते हैं। यह व्यावहारिक दृष्टिकोण महत्वपूर्ण सोच, समस्या-समाधान कौशल और सहयोग को विकसित करता है, छात्रों को भविष्य की कार्यबल चुनौतियों और अवसरों के लिए तैयार करता है।"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
