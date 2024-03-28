export type Question = {
  category: string;
  question: string;
  answers: string[];
  correctAnswer: string;
};

class QuestionImpl implements Question {
  constructor(
    public category: string,
    public question: string,
    public answers: string[],
    public correctAnswer: string
  ) {}
}

const categories = ["Art", "History", "Geography", "Science"];

const questions: Question[] = [
  new QuestionImpl(
    "Art",
    "Which 20th century Mexican artist contracted polio as a child?",
    ["Pablo Picasso", "Diego Rivera", "Frida Kahlo", "Salvador Dali"],
    "Frida Kahlo"
  ),
  new QuestionImpl(
    "Art",
    "The Solomon R. Guggenheim Museum is in which US city?",
    ["New York", "Los Angeles", "Chicago", "Washington D.C."],
    "New York"
  ),
  new QuestionImpl(
    "Art",
    "Which type of flower features heavily in the work of Claude Monet?",
    ["Roses", "Water Lillies", "Sunflowers", "Daisies"],
    "Water Lillies"
  ),
  new QuestionImpl(
    "Art",
    "Which eccentric artist believed he was a reincarnation of his dead brother?",
    ["Pablo Picasso", "Vincent Van Gogh", "Andy Warhol", "Salvador Dali"],
    "Salvador Dali"
  ),
  new QuestionImpl(
    "Art",
    "Which Spanish painter's works include 'The Tilled Field' and 'The Farm'?",
    ["Joan Miro", "Pablo Picasso", "Salvador Dali", "Diego Velazquez"],
    "Joan Miro"
  ),
  new QuestionImpl(
    "Art",
    "What boy's name is also the name of Michaelangelo's most famous sculpture?",
    ["Adam", "Michael", "David", "Peter"],
    "David"
  ),
  new QuestionImpl(
    "Art",
    "How many paintings did Vincent Van Gogh sell in his lifetime?",
    ["1", "0", "5", "10"],
    "1"
  ),
  new QuestionImpl(
    "Art",
    "Which scientist invented the color wheel?",
    [
      "Johannes Gutenberg",
      "Albert Einstein",
      "Galileo Galilei",
      "Isaac Newton",
    ],
    "Isaac Newton"
  ),
  new QuestionImpl(
    "History",
    "What was the language of the Moors, who lived in Spain until 1492?",
    ["Spanish", "Arabic", "Latin", "French"],
    "Arabic"
  ),
  new QuestionImpl(
    "History",
    "Explorer Vasco da Gama came from which country?",
    ["Italy", "Spain", "Portugal", "France"],
    "Portugal"
  ),
  new QuestionImpl(
    "History",
    "Rosa Parks made her bus protest in which US state?",
    ["Alabama", "Georgia", "Mississippi", "Tennessee"],
    "Alabama"
  ),
  new QuestionImpl(
    "History",
    "In which US city did Washington make the first State of the Union address?",
    ["Washington D.C.", "Philadelphia", "Boston", "New York"],
    "New York"
  ),
  new QuestionImpl(
    "History",
    "Which US state was originally called New Netherlands?",
    ["New Jersey", "New York", "Delaware", "Pennsylvania"],
    "New Jersey"
  ),
  new QuestionImpl(
    "History",
    "Hugo Chavez was elected President of which country in 1998?",
    ["Brazil", "Colombia", "Venezuela", "Argentina"],
    "Venezuela"
  ),
  new QuestionImpl(
    "History",
    "Which was the first country to put a man into space?",
    ["Soviet Union", "United States", "China", "Germany"],
    "Soviet Union"
  ),
  new QuestionImpl(
    "History",
    "Which country issued the world's first paper money in around 1024?",
    ["India", "China", "Japan", "Korea"],
    "China"
  ),
  new QuestionImpl(
    "Geography",
    "Which Central American country's name means 'Rich Coast'?",
    ["Costa Rica", "Panama", "Nicaragua", "Honduras"],
    "Costa Rica"
  ),
  new QuestionImpl(
    "Geography",
    "Mount Fuji is an active volcano in which country?",
    ["Indonesia", "China", "Japan", "Philippines"],
    "Japan"
  ),
  new QuestionImpl(
    "Geography",
    "Which Massachusetts town takes its name from the Hebrew word 'Shalom'?",
    ["Cambridge", "Boston", "Salem", "Springfield"],
    "Salem"
  ),
  new QuestionImpl(
    "Geography",
    "The Commonwealth describes countries which were mostly former colonies of which nation?",
    ["United Kingdom", "France", "Spain", "Portugal"],
    "United Kingdom"
  ),
  new QuestionImpl(
    "Geography",
    "A major dam on the Colorado River is named after which President?",
    ["Roosevelt", "Hoover", "Washington", "Lincoln"],
    "Hoover"
  ),
  new QuestionImpl(
    "Geography",
    "The Pyramids of Giza are on the outskirts of which major city?",
    ["Aswan", "Alexandria", "Luxor", "Cairo"],
    "Cairo"
  ),
  new QuestionImpl(
    "Science",
    'Who wrote the science law "for every action there is an equal and opposite reaction"?',
    ["Galileo Galilei", "Albert Einstein", "Isaac Newton", "Nikola Tesla"],
    "Isaac Newton"
  ),
  new QuestionImpl(
    "Science",
    "Which mathematician first said the world wasn't flat, but a sphere?",
    ["Archimedes", "Aristotle", "Euclid", "Pythagoras"],
    "Pythagoras"
  ),
  new QuestionImpl(
    "Science",
    "What is the name of the change of state from solid to liquid?",
    ["Evaporation", "Freezing", "Melting", "Condensation"],
    "Melting"
  ),
  new QuestionImpl(
    "Science",
    "Which science term means an observation which differs from expectations?",
    ["Hypothesis", "Anomaly", "Theory", "Experiment"],
    "Anomaly"
  ),
  new QuestionImpl(
    "Science",
    "What is the name of the fundamental unit of temperature?",
    ["Rankine", "Celsius", "Fahrenheit", "Kelvin"],
    "Kelvin"
  ),
  new QuestionImpl(
    "Science",
    "Which biological term means without a spine?",
    ["Invertebrate", "Vertebrate", "Mammal", "Amphibian"],
    "Invertebrate"
  ),
  new QuestionImpl(
    "Science",
    "How many Laws of Thermodynamics are there?",
    ["5", "4", "3", "1"],
    "3"
  ),
  new QuestionImpl(
    "Science",
    "What is the name of the sugar stored in the body for energy?",
    ["Fructose", "Glucose", "Sucrose", "Lactose"],
    "Glucose"
  ),
];

export { questions };
