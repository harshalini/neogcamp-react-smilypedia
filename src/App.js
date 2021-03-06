import { useState } from "react";
import "./styles.css";

var emojiPack = {
  "๐ค": "Thinking",
  "๐": "Smiling Angel",
  "๐คฉ": "Star-struck",
  "๐": "wink",
  "๐": "Hearty eyes",
  "๐ด": "Sleeping face",
  "๐": "Beaming face with smiling eyes",
  "๐": "Face Craving for delicious food",
  "๐ฎ": "Face with open mouth",
  "๐ฅฑ": "Yawning face",
  "๐": "Face with tongue"
};

var emojiDictionary = {
  "๐ค": "Thinking",
  "๐": "Smiling Angel",
  "๐คฉ": "Star-struck",
  "๐": "wink",
  "๐": "Hearty eyes",
  "๐ด": "Sleeping face",
  "๐": "Grinning face",
  "๐": "Happy face",
  "๐": "Grinning face with smily eyes",
  "๐": "Grinning face with sweat",
  "๐": "Smiling face",
  "โบ": "Shy face",
  "๐": "Beaming face with smiling eyes",
  "๐": "Laughing face with tears of joy",
  "๐คฃ": "Rolling on the floor laughing",
  "๐": "Grinning squinting face",
  "๐": "Face Craving for delicious food",
  "๐": "Smiling face with sunglasses",
  "๐": "Kiss blowing face",
  "๐ฅฐ": "Smiling face with hearts",
  "๐": "Kissing face",
  "๐": "Kissing face with smiling eyes",
  "๐": "Kissing face with closed eyes",
  "๐": "Slightly smiling face",
  "๐ค": "Hugging face",
  "๐คจ": "Face with raised eyebrows",
  "๐": "Neutral face",
  "๐": "Expressionless face",
  "๐ถ": "Face without mouth",
  "๐": "Face with rolling eyes",
  "๐": "Smirking face",
  "๐ฃ": "Persevering face",
  "๐ฅ": "Sad but relieved face",
  "๐ฎ": "Face with open mouth",
  "๐ค": "Zipper-mouth face",
  "๐ฏ": "Hushed face",
  "๐ช": "Snotty face",
  "๐ซ": "Tired face",
  "๐ฅฑ": "Yawning face",
  "๐": "Relieved face",
  "๐": "Face with tongue",
  "๐": "Winking face with tongue",
  "๐": "Squinting face with tongue",
  "๐คค": "Mouth watering face",
  "๐": "Unamused face",
  "๐": "Downcast face with sweat",
  "๐": "Pensive face",
  "๐": "Confused face",
  "๐": "Upside down face",
  "๐ค": "Money-mouth face",
  "๐ฒ": "Astonished face",
  "โน": "frowning face",
  "๐": "slightly frowning face",
  "๐": "Confounded face",
  "๐": "disappointed face",
  "๐": "worried face",
  "๐ค": "Face with steam from nose",
  "๐ข": "Crying face",
  "๐ญ": "Loudly crying face",
  "๐ฆ": "Frowning face with open mouth",
  "๐ง": "Anguished face",
  "๐จ": "Frightened face",
  "๐ฉ": "Weary face",
  "๐คฏ": "Exploding face",
  "๐ฌ": "Grimacing face",
  "๐ฐ": "Anxious face with sweat",
  "๐ฑ": "Face screamimg in fear",
  "๐ฅต": "Hot face/ Face soaked up in sweat",
  "๐ฅถ": "Cold face/ Frozen face",
  "๐ณ": "Flushed face",
  "๐คช": "Zany face",
  "๐ต": "Dizzy face",
  "๐ฅด": "Woozy face",
  "๐?": "Angry face",
  "๐ก": "Very angry face",
  "๐คฌ": "Cursing face",
  "๐ท": "Face wearing medical mask",
  "๐ค": "Face with thermometer/ Fever",
  "๐ค": "Face with bandage/ Head-ache",
  "๐คข": "Nauseated face",
  "๐คฎ": "Vomiting face",
  "๐คง": "Sneezing face",
  "๐ฅณ": "Partying face",
  "๐ฅบ": "Pleading face",
  "๐ค?": "Cowboy hat face",
  "๐คก": "Clown face",
  "๐คฅ": "Lying face",
  "๐คซ": "Shushing face",
  "๐คญ": "Face with hand over mouth",
  "๐ง": "Face with monacle",
  "๐ค": "Nerd face",
  "๐": "Devil face",
  "๐ฟ": "Angry devil face"
};

var emojisWeKnow = Object.keys(emojiPack);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in our database!";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiPack[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 style={{}}>Funnn Smilies!!!</h1>
      <p style={{ fontStyle: "italic" }}>
        Put a smiley emoji here and we will interprete it
      </p>
      <input
        style={{
          width: "50%",
          padding: "1rem",
          fontSize: "2rem",
          textAlign: "center"
        }}
        onChange={emojiInputHandler}
      ></input>

      <h2> meaning: {meaning} </h2>

      <h3> Emojis we know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
      <h3> and many more...</h3>
    </div>
  );
}

/**
 * things to notice
 * class --> className
 * style --> takes an object instead of ""
 *
 * VISER --. View -> Interact -> State in Event handler -> Render
 */
