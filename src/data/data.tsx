export interface BookData {
	date: string;
	lines: string[];
	author: string;
	work: string;
	genre: string;
	era: string;
}

const markovChainsData: BookData[] = [
	{
		date: '23-08-2025',
		lines: [
			"Disposing these articles about him fast, and decree followed decree with that last expression looking as if it and a crash, and stood upright.",
			"Waste forces within him, and Monsieur the Marquis, flambeau preceded, went from his feet, and were putting candles in every one of the year one thousand seven hundred and fifty particular friends, pointing out the door with the family.",
			"Little Lucie sat by him, and already broke upon the prisons, and when he awoke refreshed, and went out for his amiable purpose.",
		],
		author: "Charles Dickens",
		work: "A Tale of Two Cities",
		genre: "Realist / Social Novel",
		era: "19th Century Romantic & Victorian (1800-1900)"
	},
	{
		date: '24-08-2025',
		lines: [
			"It was as long as there seemed to be patted on the floor: in another minute there was room for this, and after a few minutes she heard the Queen's absence, and were resting in the middle.",
			"There was exactly the right house, because the chimneys were shaped like ears and the bright eager eyes were getting extremely small for a baby: altogether [she] did not quite know what to say it out loud.",
			"While she was out of his teacup instead of the others took the thimble, looking as solemn as she could, and soon found an opportunity of taking it away."
		],
		author: "Lewis Carroll",
		work: "Alice's Adventures in Wonderland",
		genre: "Speculative / Sci-Fi / Fantasy",
		era: "19th Century Romantic & Victorian (1800-1900)"
	},
	{
		date: '25-08-2025',
		lines: [
			"With fourteen chosen companions, he sets out for Dane-land. The excellent knight from the thicket, 25 The prospect of plenty.",
			"Then I heard that the troop-lord, Ongentheow's slayer, excellent, youthful Folk-prince and warrior was there.",
			"He left and retreated, He lived in the swimming-match.",
		],
		author: "Anonymous",
		work: "Beowulf",
		genre: "Epic / Mythic",
		era: "Classical & Medieval (pre-1500)"
	},
	{
		date: '26-08-2025',
		lines: [
			"I never saw a man of a fiend.",
			"A great chocolate-coloured pall lowered over heaven, but the wind had tilted her, and flying wrack of the bed curtains and the Regent's Park was full of premature twilight, although the sky, high up overhead, was still so engaged when, in one direction only.",
			"The steps drew swiftly nearer, and swelled out suddenly louder as they must appear, you might have charged your conscience with my imperious desire to kill him."
		],
		author: "Robert Louis Stevenson",
		work: "Dr. Jekyll and Mr. Hyde",
		genre: "Gothic / Horror",
		era: "19th Century Romantic & Victorian (1800-1900)"
	},
	{
		date: '27-08-2025',
		lines: [
			"Mr. Morris, who also has plenty of water, and there was a sudden shock would be master of the moonlight, some weird effect of these monsters, and the white flesh.",
			"The friends of the bands hears the other, but up here an hour ago I heard the click of the loaves and fishes even when we entered.",
			"They whispered together, and spoke as cheerily as he gathered himself up from the feeling was common to us close round the house at Carfax, near Purfleet, immediately on receipt at goods station King's Cross.",
		],
		author: "Bram Stoker",
		work: "Dracula",
		genre: "Gothic / Horror",
		era: "19th Century Romantic & Victorian (1800-1900)"
	},
	{
		date: '28-08-2025',
		lines: [
			"I lay for two months I began to grow watchful with anxious thoughts, when a young soldier, burning for glory and honour, can never willingly continue to endure their present hardships.",
			"My trifling occupations take up the instrument which produced the divine sounds that had broken the only criminal, when all was dry, the heavens than that of his children had departed, he took up the letter, while I followed my conductor in silence and remained for a few sounds with an aspect expressive of disgust and loathing.",
			"My journey was very probable that these people possessed a mind of an omnipotent God warring with his demand.",
		],
		author: "Mary Shelley",
		work: "Frankenstein",
		genre: "Gothic / Horror",
		era: "19th Century Romantic & Victorian (1800-1900)"
	},
	{
		date: '29-08-2025',
		lines: [
			"The sensation was like my own bread to earn, and my bed and think of what I underwent within.",
			"Joe gave it a pity, that, in my head full of fears for the walk with that artful slipperiness that the situation admitted of nothing less than two fat sweltering one-pound notes that seemed as though the whole strain was so doubtful of myself down in this case to you.",
			"She manifested the greatest joy by a half-laugh, come into a gloomy room with a discontented eye, became aware of the man on the river.",
		],
		author: "Charles Dickens",
		work: "Great Expectations",
		genre: "Realist / Social Novel",
		era: "19th Century Romantic & Victorian (1800-1900)"
	},
	{
		date: '30-08-2025',
		lines: [
			"He approached the Florentines became his friends; the Marquess of Mantua, the Duke of Milan thou canst place no reliance, for they are omitted.",
			"And as with these forces can easily secure himself by avoiding being hated by the men of great repute and abilities in Lucca, he neglected no opportunity, short of open war, he considered that it might stand a siege for a prince if he is indebted to him, had to submit to its duties.",
			"And when fighting afterwards amongst themselves, each one succeeds in reaching the goal by a path on the King of France would have been and may again be subject to adduce a modern example.",
		],
		author: "Niccolò Machiavelli",
		work: "The Prince",
		genre: "Realist / Social Novel",
		era: "Renaissance & Early Modern (1500-1700)"
	},
	{
		date: '31-08-2025',
		lines: [
			"The sudden noise behind Gregor so startled him that his body pressed to the sight of him.",
			"The office assistant was the first one that was not a pleasant experience, and Gregor pushed himself through the wooden door, as his sister managed to get free of it into his room.",
			"The washing up from what they should do now; but even so his mother until later and was nearly a miracle that only the chief clerk, or perhaps they were talking, Mr. and Mrs. Samsa just came out in a way that is quite unheard of.",
		],
		author: "Franz Kafka",
		work: "The Metamorphosis",
		genre: "Speculative / Sci-Fi / Fantasy",
		era: "Early 20th Century Modernism (1900-1945)"
	},
	{
		date: '01-09-2025',
		lines: [
			"Nor does it unwittingly pay us the dread Vishnoo, one of the whale, which, having been so long as the Polynesian Isles; while suspended in his untraceable evolutions, the White Sea exert such a relish that there was a little way further, and untagging the points which the Right Whale is toothless.",
			"While some were forty-eight, some fifty feet in girth.",
			"Whether that mark was born with halters round their savageness even breeds a certain morbidness.",
		],
		author: "Herman Melville",
		work: "Moby-Dick",
		genre: "Epic / Mythic",
		era: "19th Century Romantic & Victorian (1800-1900)"
	},
	{
		date: '02-09-2025',
		lines: [
			"And virtue is courage, which includes them both.",
			"How, then, can we administer any soothing cordial or advice to him, that, in the dialectical process are included under the yoke of the lower part of a likeness to the idea will sometimes seem to stand firm against the new pleasures succeed the old mythology; like Xenophanes and Heracleitus he is mistaken? or that a very few persons continue to go beyond the non-physician?",
			"Forgive my enthusiasm; I am referring to the rest of the soul?",
		],
		author: "Plato",
		work: "The Republic",
		genre: "Epic / Mythic",
		era: "Classical & Medieval (pre-1500)"
	},
	{
		date: '03-09-2025',
		lines: [
    		"We passed each other in large mixed parties, it is very young: she has seen me, for she really had no conversation, no style, no taste, no beauty.",
			"He was received with great admiration for about a mile across the park.",
			"You thought the waiter must not think it all with great pleasure in talking to anybody."
		],
		author: "Jane Austen",
		work: "Pride and Prejudice",
		genre: "Romance",
		era: "19th Century Romantic & Victorian (1800-1900)"
	},
	{
		date: '04-09-2025',
		lines: [
			"The intense vitality that had separated him from his door the business was over.",
			"I wanted the world she so much to read, for one strange hour, before we melted indistinguishably into it with a flurry of dust and the O. R. P. Schraeders, and the largest of the world outside, and she stood up.",
			"Next morning I sent the butler left the shade and support of the Forties were lined five deep in the water.",
		],
		author: "F. Scott Fitzgerald",
		work: "The Great Gatsby",
		genre: "Realist / Social Novel",
		era: "Early 20th Century Modernism (1900-1945)"
	},
	{
        date: '05-09-2025',
        lines: [
			"The parlor-windows were closed and curtained, no picture of a big fish Tail-piece Being neighborly Laurie opened the parlor rose and mother's face.",
			"If rank and money come with love and value more than thrice a day.",
			"Her keen eyes were merry as well as a sort of elegant and rich?",
		],
        author: 'Louisa May Alcott',
        work: 'Little Women; Or, Meg, Jo, Beth, and Amy',
        genre: 'Realist / Social Novel',
        era: '19th Century Romantic & Victorian (1800-1900)'
    },
    {
        date: '06-09-2025',
        lines: [
			"He answered to every century except his own, it had got from all parts of the Aztecs, that are quite flawless now.",
    		"She brought me the news, in fact, had no real appreciation of the forest had been things in modern life.",
			"If [he] and his passion for property is in love, one always ends by deceiving one's self, and one always ends by deceiving others.",
		],
        author: 'Oscar Wilde',
        work: 'The Picture of Dorian Gray',
        genre: 'Gothic / Horror',
        era: '19th Century Romantic & Victorian (1800-1900)'
    },
    {
        date: '07-09-2025',
        lines: [
			"Some live in separate sections, they are executed by men who have not glossed over matters for policy's sake, for I fear we have in the seventies to woo this coy dark soil.",
			"The advocates of the South, nursing its own way, untrammeled alike by old and hardened criminals; and when once the glory of his sister, and the contingent in the valley.",
			"They lived in three- or four-room unpainted cottages, some neat and homelike, and some felt and feel only indifference and contempt.",
		],
        author: 'W. E. B. Du Bois',
        work: 'The Souls of Black Folk',
        genre: 'Realist / Social Novel',
        era: 'Early 20th Century Modernism (1900-1945)'
    },
    {
        date: '08-09-2025',
        lines: [
			"A man is ever so little developed and experienced, he will certainly try to win their favour; she rarely met them, sometimes only she felt for some reason.",
			"It was a neglected child, whose mother, probably a divinity student.",
    		"If he had never experienced such a man... even though I stepped on the terrace after supper?",
		],
        author: 'Fyodor Dostoyevsky',
        work: 'Crime and Punishment',
        genre: 'Realist / Social Novel',
        era: '19th Century Romantic & Victorian (1800-1900)'
    },
    {
        date: '09-09-2025',
        lines: [
			"To have done more hurt to another, when we ascribe to every man might not be considered as the fayling of Vertue in the first of Gods people, is called our SAVIOUR.",
			"The Fire, or Burning, or Purging, or Clensing, in case of gift, I Merit not that any such hope to Requite, disposeth to the disturbance of the Soveraigns Right.",
			"Inspiration What On the contrary, but that which is called Salary, and Wages; which is improper to say, the will of the Judge, that shall reign eternally, unlesse hee beleeve him also risen again from the beginning; in which lyes the foundation of that Heathen Power.",
		],
        author: 'Thomas Hobbes',
        work: 'Leviathan',
        genre: 'Epic / Mythic',
        era: 'Renaissance & Early Modern (1500-1700)'
    },
    {
        date: '10-09-2025',
        lines: [
			"We were left at peace in our road; and, as a substitute for the solace of the grace, had not once been beyond the right time after dinner.",
			"You need not be seen, and when she came into the same room with him a vagabond, and won't let her out; but I fixed her choice of a child laid on the few corpses deposited there.",
    		"The lattice was open, and, to fulfil this project: she teased Mr. Linton had certainly behaved provokingly: however, it was not to hurt thee, Linton isn't that thy name?",
		],
        author: 'Emily Brontë',
        work: 'Wuthering Heights',
        genre: 'Romance',
        era: '19th Century Romantic & Victorian (1800-1900)'
    },
    {
        date: '11-09-2025',
        lines: [
			"But what horrid clothes you have had very little reference at all to the country quite so frequently as your wicked custom was.",
			"No doubt you have had very little music in the country.",
			"An engagement should come on a most important business.",
		],
        author: 'Oscar Wilde',
        work: 'The Importance of Being Earnest: A Trivial Comedy for Serious People',
        genre: 'Satire / Comedy',
        era: '19th Century Romantic & Victorian (1800-1900)'
    },
    {
        date: '12-09-2025',
        lines: [
			"I looked over my shoulder every now and then, or else the bees would all weaken down and laid in with all their might.",
			"He said he would give them good-day, and didn't find them I couldn't hear yourself think for the light, but as for me, but I recollected it wouldn't talk.",
			"I said I would, and maybe see a raft went by our house I aimed to find out who I was.",
		],
        author: 'Mark Twain',
        work: 'Adventures of Huckleberry Finn',
        genre: 'Realist / Social Novel',
        era: '19th Century Romantic & Victorian (1800-1900)'
    },
    {
        date: '13-09-2025',
        lines: [
			"Having described the precise situation of which cases, the miserable little being was usually his chief characteristic.",
			"Suddenly she arose; and hurrying on, in merry conversation, until they came to the name of Hockley-in-the-Hole; thence into Long Lane, and so do the same.",
			"Her words and manner were unusually prepossessing; but he was already fumbling in his whole person changed, as he could.",
		],
        author: 'Charles Dickens',
        work: 'Oliver Twist',
        genre: 'Realist / Social Novel',
        era: '19th Century Romantic & Victorian (1800-1900)'
    },
    {
        date: '14-09-2025',
        lines: [
			"She came with an ounce of shag tobacco and a great hurry, shouted to the length of obstinacy.",
			"I found her biography sandwiched in between that of a situation, and his feet again and again to the right time.",
			"I have never met so utterly spoiled and so through Oxford Street to Baker Street.",
		],
        author: 'Arthur Conan Doyle',
        work: 'The Adventures of Sherlock Holmes',
        genre: 'Realist / Social Novel',
        era: '19th Century Romantic & Victorian (1800-1900)'
    },
    {
        date: '15-09-2025',
        lines: [
			"This ant is absolutely necessary for its changed habits, or exclusively for the male salmon.",
			"I have several specimens showing clearly that they cannot be maintained that species generally uniting with facility.",
			"I have taken pains to verify this assertion, and I am informed by Colonel Poole whether such face-stripes ever occur in the eyes of moles and of species, and of varieties in a much greater weight; but until some of the conditions to which these varieties belong range over the horse, since its introduction by the Honourable and Reverend W. Herbert.",
		],
        author: 'Charles Darwin',
        work: 'On the Origin of Species By Means of Natural Selection',
        genre: 'Realist / Social Novel',
        era: '19th Century Romantic & Victorian (1800-1900)'
    },
    {
        date: '16-09-2025',
        lines: [
			"On the third had caught a horse for the girl told her courtiers that whoever came on horseback, and rode to the best of things which they passed on their way and that so far the dwarf was enraged at his ease.",
			"As Heinel came near the brook they saw something like a red landmark in the night, he should see the bottom of the king's son.",
			"But Red-Cap went joyously home, and played tricks with their robbing, murdering, ravaging, and burning, and hid themselves, to watch what the little pocket of his sword.",
		],
        author: 'Jacob and Wilhelm Grimm',
        work: "Grimms' Fairy Tales",
        genre: 'Speculative / Sci-Fi / Fantasy',
        era: '19th Century Romantic & Victorian (1800-1900)'
    },
    {
        date: '17-09-2025',
        lines: [
			"But before something of that kind shall be found equally innocent, cheap, easy, and effectual.",
    		"Neither indeed can I deny, that if at any other publick entertainment.",
			"Fourthly, The constant breeders, besides the gain of eight shillings neat profit, and be fit for work till she produces another child.",
		],
        author: 'Jonathan Swift',
        work: 'A Modest Proposal',
        genre: 'Satire / Comedy',
        era: '18th Century / Enlightenment (1700-1800)'
    },
    {
        date: '18-09-2025',
        lines: [
			"The scene of enchantment; the table the bread he was about to double it, and then went forward again.",
			"The notary here descended, and instead of being married, and he stood in the performance of this time the executioner had raised between himself and wife, and it has reached you; that will look very well.",
			"It is true, the letter that Villefort will be the same.",
		],
        author: 'Alexandre Dumas and Auguste Maquet',
        work: 'The Count of Monte Cristo',
        genre: 'Epic / Mythic',
        era: '19th Century Romantic & Victorian (1800-1900)'
    },
    {
        date: '19-09-2025',
        lines: [
			"The old minister seated himself in the various properties of native elegance, seldom seen in a garment of coarse gray cloth.",
			"In the absorbing contemplation of the authenticity of the opportunities thus afforded for tampering with the bitterest hatred that can be no doubt; and, examining myself and my face hardly known.",
			"And then he sets his mark in that interior kingdom, was adequate to account for the food of his finger, make the incomprehensible as clear as the people what he was.",
		],
        author: 'Nathaniel Hawthorne',
        work: 'The Scarlet Letter',
        genre: 'Realist / Social Novel',
        era: '19th Century Romantic & Victorian (1800-1900)'
    },
    {
        date: '20-09-2025',
        lines: [
			"Already she was thinking or of the trouble this mistake was probably easy enough in towered Camelot hundreds of years ago, but romance is not probable she lamented them.",
			"[She] lighted the lamp, oversetting the match safe and sound that I was born a boy, but that mother thought I was born in that kind people had been done without her advice being asked, and must perforce be disapproved.",
			"Something in her expressive eyes.",
		],
        author: 'L. M. Montgomery',
        work: 'Anne of Green Gables',
        genre: 'Realist / Social Novel',
        era: 'Early 20th Century Modernism (1900-1945)'
    },
    {
        date: '21-09-2025',
        lines: [
			"Prince Bolknski sat down beside him to be occupied by the white snow.",
			"And so it is we who are so considerable as not to be forever happy, rewarded, and distinguished from everyone in the roofless, half-ruined houses.",
			"CHAPTER XXXV On the ground, the drummer a lean, handsome soldier of placid temperament, being also upset by all the sovereigns of the evening.",
		],
        author: 'Leo Tolstoy',
        work: 'War and Peace',
        genre: 'Epic / Mythic',
        era: '19th Century Romantic & Victorian (1800-1900)'
    },
]

export const markovChains = markovChainsData

export const getBookForDate = (dateString: string): BookData => {
	const book = markovChains.find(book => book.date === dateString)
	return book || markovChains[0]
}

export const AUTHORS = [
	"Charles Dickens", "Lewis Carroll", "Anonymous", "Robert Louis Stevenson",
	"Bram Stoker", "Mary Shelley", "Niccolò Machiavelli", "Franz Kafka",
	"Herman Melville", "Plato", "Jane Austen", "F. Scott Fitzgerald",
	"William Shakespeare", "Mark Twain", "Virginia Woolf", "Oscar Wilde",
	"George Orwell", "Harper Lee", "Ernest Hemingway",
	"Charlotte Brontë", "Emily Brontë", "Leo Tolstoy", "Fyodor Dostoevsky",
	"James Joyce", "Marcel Proust", "Gabriel García Márquez", "Toni Morrison",
	"Maya Angelou", "Zora Neale Hurston", "Langston Hughes", "Ralph Ellison",
	"John Steinbeck", "William Faulkner", "Flannery O'Connor", "Kurt Vonnegut",
	"Ray Bradbury", "Isaac Asimov", "Philip K. Dick", "Ursula K. Le Guin",
	"Margaret Atwood", "Doris Lessing", "Simone de Beauvoir", "Jean-Paul Sartre",
	"Albert Camus", "Jorge Luis Borges", "Italo Calvino", "Umberto Eco",
	"Milan Kundera", "Salman Rushdie", "Chinua Achebe", "Wole Soyinka",
	"Haruki Murakami", "Yukio Mishima", "Natsume Sōseki", "Lu Xun",
	"Rabindranath Tagore", "R.K. Narayan", "Vikram Seth", "Arundhati Roy",
	"Octavio Paz", "Pablo Neruda", "Isabel Allende", "Mario Vargas Llosa",
	"Julio Cortázar", "Carlos Fuentes", "José Saramago", "Fernando Pessoa",
	"Günter Grass", "Thomas Mann", "Hermann Hesse", "Rainer Maria Rilke",
	"Friedrich Nietzsche", "Johann Wolfgang von Goethe", "Henrik Ibsen", "August Strindberg",
	"Anton Chekhov", "Ivan Turgenev", "Nikolai Gogol", "Alexander Pushkin",
	"Dante Alighieri", "Giovanni Boccaccio", "Petrarch", "Niccolò Machiavelli",
	"Miguel de Cervantes", "Federico García Lorca", "Antonio Machado", "Camilo José Cela",
	"Voltaire", "Jean-Jacques Rousseau", "Victor Hugo", "Gustave Flaubert",
	"Honoré de Balzac", "Émile Zola", "Guy de Maupassant", "Alexandre Dumas",
	"Stendhal", "Marcel Proust", "André Gide", "Jean Cocteau",
	"Samuel Beckett", "Eugène Ionesco", "Jean Genet", "Marguerite Duras",
	"Simone Weil", "Roland Barthes", "Michel Foucault", "Jacques Derrida"
]

export const GENRES = [
  "Epic / Mythic",
  "Drama",
  "Poetry",
  "Gothic / Horror",
  "Satire / Comedy",
  "Romance",
  "Realist / Social Novel",
  "Speculative / Sci-Fi / Fantasy"
]


export const ERAS = [
  "Classical & Medieval (pre-1500)",
  "Renaissance & Early Modern (1500-1700)",
  "18th Century / Enlightenment (1700-1800)",
  "19th Century Romantic & Victorian (1800-1900)",
  "Early 20th Century Modernism (1900-1945)",
  "Mid 20th Century (1945-1970)",
  "Late 20th Century & Contemporary (1970-present)"
]


export const WORKS = [
	"A Tale of Two Cities", "Alice's Adventures in Wonderland", "Beowulf",
	"Dr. Jekyll and Mr. Hyde", "Dracula", "Frankenstein", "Great Expectations",
	"The Prince", "The Metamorphosis", "Moby-Dick", "The Republic",
	"Pride and Prejudice", "The Great Gatsby", "Hamlet", "1984",
	"To Kill a Mockingbird", "The Picture of Dorian Gray", "Wuthering Heights",
	"Romeo and Juliet", "Macbeth", "King Lear", "Othello", "A Midsummer Night's Dream",
	"The Tempest", "Julius Caesar", "Richard III", "Henry V", "Much Ado About Nothing",
	"Animal Farm", "Brave New World", "Fahrenheit 451", "The Catcher in the Rye",
	"Lord of the Flies", "Of Mice and Men", "The Grapes of Wrath", "East of Eden",
	"The Sun Also Rises", "A Farewell to Arms", "For Whom the Bell Tolls", "The Old Man and the Sea",
	"War and Peace", "Anna Karenina", "Crime and Punishment", "The Brothers Karamazov",
	"Notes from Underground", "The Idiot", "Demons", "The Gambler",
	"Ulysses", "Dubliners", "A Portrait of the Artist as a Young Man", "Finnegans Wake",
	"In Search of Lost Time", "Swann's Way", "The Stranger", "The Plague",
	"The Myth of Sisyphus", "Being and Nothingness", "No Exit", "The Second Sex",
	"One Hundred Years of Solitude", "Love in the Time of Cholera", "Chronicle of a Death Foretold",
	"Beloved", "Song of Solomon", "The Bluest Eye", "Sula", "Jazz",
	"I Know Why the Caged Bird Sings", "Their Eyes Were Watching God", "Invisible Man",
	"The Sound and the Fury", "As I Lay Dying", "Light in August", "Absalom, Absalom!",
	"Slaughterhouse-Five", "Cat's Cradle", "Breakfast of Champions", "The Sirens of Titan",
	"Foundation", "I, Robot", "The Caves of Steel", "The End of Eternity",
	"Do Androids Dream of Electric Sheep?", "The Man in the High Castle", "Ubik", "A Scanner Darkly",
	"The Left Hand of Darkness", "The Dispossessed", "A Wizard of Earthsea", "The Lathe of Heaven",
	"The Handmaid's Tale", "Oryx and Crake", "The Blind Assassin", "Cat's Eye",
	"The Golden Notebook", "The Grass Is Singing", "Memoirs of a Survivor", "The Fifth Child",
	"Norwegian Wood", "Kafka on the Shore", "The Wind-Up Bird Chronicle", "Hard-Boiled Wonderland",
	"The Tale of Genji", "Snow Country", "The Sound of the Mountain", "Thousand Cranes",
	"Things Fall Apart", "No Longer at Ease", "Arrow of God", "Anthills of the Savannah",
	"The God of Small Things", "A Suitable Boy", "The Mahabharata", "The Ramayana",
	"Don Quixote", "One Hundred Years of Solitude", "Hopscotch", "Blow-Up",
	"The Divine Comedy", "The Decameron", "The Canterbury Tales", "Paradise Lost",
	"Gulliver's Travels", "Robinson Crusoe", "Moll Flanders", "Tom Jones",
	"Candide", "The Social Contract", "Emile", "Confessions",
	"Les Misérables", "The Hunchback of Notre-Dame", "Madame Bovary", "Sentimental Education",
	"The Red and the Black", "The Charterhouse of Parma", "Père Goriot", "Eugénie Grandet",
	"Germinal", "Nana", "L'Assommoir", "The Human Beast",
	"The Three Musketeers", "The Count of Monte Cristo", "The Man in the Iron Mask", "Twenty Years After"
]