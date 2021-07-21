import { useState } from "react";
import "./styles.css";

var emojiPack = {
  "🤔": "Thinking",
  "😇": "Smiling Angel",
  "🤩": "Star-struck",
  "😉": "wink",
  "😍": "Hearty eyes",
  "😴": "Sleeping face"
};

var emojiDictionary = {
  "🤔": "Thinking",
  "😇": "Smiling Angel",
  "🤩": "Star-struck",
  "😉": "wink",
  "😍": "Hearty eyes",
  "😴": "Sleeping face",
  "😀": "Grinning face",
  "😃": "Happy face",
  "😄": "Grinning face with smily eyes",
  "😅": "Grinning face with sweat",
  "😊": "Smiling face",
  "☺": "Shy face",
  "😁": "Beaming face with smiling eyes",
  "😂": "Laughing face with tears of joy",
  "🤣": "Rolling on the floor laughing",
  "😆": "Grinning squinting face",
  "😋": "Face Craving for delicious food",
  "😎": "Smiling face with sunglasses",
  "😘": "Kiss blowing face",
  "🥰": "Smiling face with hearts",
  "😗": "Kissing face",
  "😙": "Kissing face with smiling eyes",
  "😚": "Kissing face with closed eyes",
  "🙂": "Slightly smiling face",
  "🤗": "Hugging face",
  "🤨": "Face with raised eyebrows",
  "😐": "Neutral face",
  "😑": "Expressionless face",
  "😶": "Face without mouth",
  "🙄": "Face with rolling eyes",
  "😏": "Smirking face",
  "😣": "Persevering face",
  "😥": "Sad but relieved face",
  "😮": "Face with open mouth",
  "🤐": "Zipper-mouth face",
  "😯": "Hushed face",
  "😪": "Snotty face",
  "😫": "Tired face",
  "🥱": "Yawning face",
  "😌": "Relieved face",
  "😛": "Face with tongue",
  "😜": "Winking face with tongue",
  "😝": "Squinting face with tongue",
  "🤤": "Mouth watering face",
  "😒": "Unamused face",
  "😓": "Downcast face with sweat",
  "😔": "Pensive face",
  "😕": "Confused face",
  "🙃": "Upside down face",
  "🤑": "Money-mouth face",
  "😲": "Astonished face",
  "☹": "frowning face",
  "🙁": "slightly frowning face",
  "😖": "Confounded face",
  "😞": "disappointed face",
  "😟": "worried face",
  "😤": "Face with steam from nose",
  "😢": "Crying face",
  "😭": "Loudly crying face",
  "😦": "Frowning face with open mouth",
  "😧": "Anguished face",
  "😨": "Frightened face",
  "😩": "Weary face",
  "🤯": "Exploding face",
  "😬": "Grimacing face",
  "😰": "Anxious face with sweat",
  "😱": "Face screamimg in fear",
  "🥵": "Hot face/ Face soaked up in sweat",
  "🥶": "Cold face/ Frozen face",
  "😳": "Flushed face",
  "🤪": "Zany face",
  "😵": "Dizzy face",
  "🥴": "Woozy face",
  "😠": "Angry face",
  "😡": "Very angry face",
  "🤬": "Cursing face",
  "😷": "Face wearing medical mask",
  "🤒": "Face with thermometer/ Fever",
  "🤕": "Face with bandage/ Head-ache",
  "🤢": "Nauseated face",
  "🤮": "Vomiting face",
  "🤧": "Sneezing face",
  "🥳": "Partying face",
  "🥺": "Pleading face",
  "🤠": "Cowboy hat face",
  "🤡": "Clown face",
  "🤥": "Lying face",
  "🤫": "Shushing face",
  "🤭": "Face with hand over mouth",
  "🧐": "Face with monacle",
  "🤓": "Nerd face",
  "😈": "Devil face",
  "👿": "Angry devil face"
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
