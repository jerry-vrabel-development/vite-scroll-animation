import "../App.css";
import { motion } from "framer-motion";
import FadeInScroll from "./FadeInScroll";

const routeVariants = {
  initial: {
    y: "100vh",
  },
  final: {
    y: "0vh",
    transition: {
      type: "spring",
      mass: 0.4,
    },
  },
};

const childVariants = {
  initial: {
    opacity: 0,
    y: "50px",
  },
  final: {
    opacity: 1,
    y: "0px",
    transition: {
      duration: 0.5,
      delay: 0.5,
    },
  },
};

function Home() {
  return (
    <div>

    <motion.div
      className="home component"
      variants={routeVariants}
      initial="initial"
      animate="final"
    >
     <motion.h1 variants={childVariants} initial="initial" animate="final">Home Component</motion.h1>
    </motion.div>
    <FadeInScroll>
          <p className="fadeDiv">Captain. Yes, sir? Tell them we wish to board at once. With all due respect, the Ambassadors for the Supreme Chancellor wish to board immediately. Yes, yes, of course, as you know, our blockade is perfectly legal, and we'd be happy to receive the Ambassador. I'm TC-14 at your service.
 You have been well trained, my young apprentice, they will be no match for you. All slaves have transmitters placed inside their bodies somewhere. I've been working on a scanner to try and locate mine. Any attempt to escape, and they blow you up, boom! How wude.
 Negotiation? We've lost all communications! And where are the Chancellors Ambassadors? This is a dangerous situation, Your Highness. Our security volunteers will be no match against a battle-hardened Federation army. I will not condone a course of action that will lead us to war. Yes, Viceroy? Captain, we've searched the ship and there is no trace of the Jedi. They may have got on onto one of your landing craft. If they are down here, sir, we'll find them. Use caution.
so. I came to say goodbye. We will tell her for you. We are sure her heart goes with you. We are greatly honored by your visit Ambassadors. Make yourselves comfortable. My master will be with you shortly. I have a bad feeling about this. Thank you. I'll watch after him. You have my word. Will you be all right? Oh! Oh my, oh.
I pray you will bring sanity and compassion back to the Senate. The Force is strong with him. He's to be trained, then? No. He will not be trained.
he will. bring balance. train him! Now, Viceroy, you are going to have to go back to the Senate and explain all this. I think you can kiss your Trade franchise goodbye. We are indebted to you for your bravery, Obi-Wan Kenobi.</p>
    </FadeInScroll>
        <FadeInScroll>
          <div className="fadeDiv"><p>I will. May the Force be with you. O grandio lust amu intoe tah parena, Jabba Du Hutt. Welcome! Begin the race! Is he nervous? He's fine.

There's not enough power to get us to Coruscant. The hyperdrive is leaking. We'll have to land somewhere to refuel and repair the ship. Here, Master. Tatooine, It's small, out of the way, poor. The Trade Federation has no presence there. How can you be sure? It's controlled by the Hutts.

Oh, noooooooooo! Quick! Get out of here! Get off! Whas dat? Hey wait! Oyi, mooie-mooie! I luv yous! You almost got us killed! Are you brainless? I spake. The ability to speak does not make you intelligent. Now get outta here! No, no! Mesa stay, Mesa culled Ja Ja Binksss. Mesa yous humble servaunt.

it wasn't my fault really. Sebulba flashed me with his vents. I actually saved the Pod. mostly.

'Scuse me. Has anybody ever seen a Podrace? They have Podracing on Malastare. Very fast, very dangerous. I'm the only human who can do it.</p></div>
        </FadeInScroll>

        <p className="fadeDiv">This paragraph is not wrapped with FadeInScroll, so it won't fade in.</p>
      </div>
  );
}

export default Home;
