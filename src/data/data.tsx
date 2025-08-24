interface BookData {
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
			"She had in keeping.",
			"Little Lucie sat by him, and already broke upon the prisons, and when he awoke refreshed, and went out for his amiable purpose.",
		],
		author: "Charles Dickens",
		work: "A Tale of Two Cities",
		genre: "Historical Fiction",
		era: "Victorian"
	},
	{
		date: '24-08-2025',
		lines: [
			"At this the whole party swam to the door, she found she had got its head to hide a smile: some of the creature, but on second thoughts she decided to remain where she was, and waited.",
			"Alice kept her eyes anxiously fixed on it, and talking over its head.",
			"Once more she found herself in the pool a little nervous about it just missed her.",
		],
		author: "Lewis Carroll",
		work: "Alice's Adventures in Wonderland",
		genre: "Fantasy",
		era: "Victorian"
	},
	{
		date: '25-08-2025',
		lines: [
			"Then he saw on his spirit.",
			"~Kemble, J.M.~--The Anglo-Saxon Poems of Beowulf, in their sorrow, That the son of the era {He is a bold and venturesome undertaking; and yet there must be some students of the sleeping heroes} When the sword-blow had fallen, was fierce in his hall, Hygd very young was, {Hygd, the noble queen of the waters I had fewer retainers, Dear-beloved warriors, whom death had laid hold of.",
			"Beowulf is justly called our first great epic.",
		],
		author: "Anonymous",
		work: "Beowulf",
		genre: "Epic Poetry",
		era: "Anglo-Saxon"
	},
	{
		date: '26-08-2025',
		lines: [
			"I smiled at the sight, I thought I sat looking sadly in the doctor's case was what Utterson was amazed; the dark influence of Hyde had to deal with.",
			"I never saw a man of a fiend.",
			"Nor must I delay too long to bring them to the bottom of the flesh.",
		],
		author: "Robert Louis Stevenson",
		work: "Dr. Jekyll and Mr. Hyde",
		genre: "Gothic Horror",
		era: "Victorian"
	},
	{
		date: '27-08-2025',
		lines: [
			"He said to Madam Mina, and I arrived about fifteen minutes before the door between the incomer and the white waste of snow, I could see here and there.",
			"The friends of the bands hears the other, but up here an hour ago I heard the click of the loaves and fishes even when we entered.",
			"Men all steady fellows, who sailed with me at the moment.",
		],
		author: "Bram Stoker",
		work: "Dracula",
		genre: "Gothic Horror",
		era: "Victorian"
	},
	{
		date: '28-08-2025',
		lines: [
			"I lay for two months I began to grow watchful with anxious thoughts, when a young soldier, burning for glory and honour, can never willingly continue to endure their present hardships.",
			"My journey was very probable that these people possessed a mind of an omnipotent God warring with his demand.",
			"Chapter 19 London was our present point of closing before me for the love and charity.",
		],
		author: "Mary Shelley",
		work: "Frankenstein",
		genre: "Gothic Science Fiction",
		era: "Romantic"
	},
	{
		date: '29-08-2025',
		lines: [
			"Joe gave it a pity, that, in my head full of fears for the walk with that artful slipperiness that the situation admitted of nothing less than two fat sweltering one-pound notes that seemed as though the whole strain was so doubtful of myself down in this case to you.",
			"While going along, the times when she lifted her stick.",
			"She manifested the greatest joy by a half-laugh, come into a gloomy room with a discontented eye, became aware of the man on the river.",
		],
		author: "Charles Dickens",
		work: "Great Expectations",
		genre: "Bildungsroman",
		era: "Victorian"
	},
	{
		date: '30-08-2025',
		lines: [
			"When Castruccio had noticed how the plains place themselves below in the morning.",
			"And as with these forces can easily secure himself by avoiding being hated by the men of great repute and abilities in Lucca, he neglected no opportunity, short of open war, he considered that it might stand a siege for a prince if he is indebted to him, had to submit to its duties.",
			"And when fighting afterwards amongst themselves, each one succeeds in reaching the goal by a path on the King of France would have been and may again be subject to adduce a modern example.",
		],
		author: "Niccolò Machiavelli",
		work: "The Prince",
		genre: "Political Philosophy",
		era: "Renaissance"
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
		genre: "Absurdist Fiction",
		era: "Modernist"
	},
	{
		date: '01-09-2025',
		lines: [
			"Nor does it unwittingly pay us the dread Vishnoo, one of the whale, which, having been so long as the Polynesian Isles; while suspended in his untraceable evolutions, the White Sea exert such a relish that there was a little way further, and untagging the points which the Right Whale is toothless.",
			"What is the worst.",
			"Whether that mark was born with halters round their savageness even breeds a certain morbidness.",
		],
		author: "Herman Melville",
		work: "Moby-Dick",
		genre: "Adventure Fiction",
		era: "American Renaissance"
	},
	{
		date: '02-09-2025',
		lines: [
			"And the greater the slavery.",
			"And virtue is courage, which includes them both.",
			"How, then, can we administer any soothing cordial or advice to him, that, in the dialectical process are included under the yoke of the lower part of a likeness to the idea will sometimes seem to stand firm against the new pleasures succeed the old mythology; like Xenophanes and Heracleitus he is mistaken? or that a very few persons continue to go beyond the non-physician?",
		],
		author: "Plato",
		work: "The Republic",
		genre: "Philosophy",
		era: "Ancient Greek"
	},
	{
		date: '03-09-2025',
		lines: [
			"But in matters of greater weight, I may reasonably hope to be my own have been.",
			"Your superior knowledge of it.",
			"He was received with great admiration for about a mile across the park.",
		],
		author: "Jane Austen",
		work: "Pride and Prejudice",
		genre: "Romance",
		era: "Regency"
	},
	{
		date: '04-09-2025',
		lines: [
			"He threw dust into your eyes just like he did some work for a minute he opened for us two hulking patent cabinets which held his breath in the beginning—and one day I found myself on Gatsby's side, and then he blurted out that Daisy lived there—it was as casual a thing that mattered.",
			"I wanted the world she so much to read, for one strange hour, before we melted indistinguishably into it with a flurry of dust and the O. R. P. Schraeders, and the largest of the world outside, and she stood up.",
			"People were not mentioned again.",
		],
		author: "F. Scott Fitzgerald",
		work: "The Great Gatsby",
		genre: "Modernist Fiction",
		era: "Jazz Age"
	}
]

export const markovChains = markovChainsData

export const getBookForDate = (dateString: string): BookData => {
	let dat
	const book = markovChains.find(book => book.date === dateString)
	return book || markovChains[0]
}

export const AUTHORS = [
	"Charles Dickens", "Lewis Carroll", "Anonymous", "Robert Louis Stevenson",
	"Bram Stoker", "Mary Shelley", "Niccolò Machiavelli", "Franz Kafka",
	"Herman Melville", "Plato", "Jane Austen", "F. Scott Fitzgerald",
	"William Shakespeare", "Mark Twain", "Virginia Woolf", "Oscar Wilde",
	"George Orwell", "J.K. Rowling", "Harper Lee", "Ernest Hemingway",
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
	"Historical Fiction", "Fantasy", "Epic Poetry", "Gothic Horror",
	"Gothic Science Fiction", "Bildungsroman", "Political Philosophy",
	"Absurdist Fiction", "Adventure Fiction", "Philosophy", "Romance",
	"Modernist Fiction", "Drama", "Satire", "Mystery", "Science Fiction"
]

export const ERAS = [
	"Victorian", "Anglo-Saxon", "Romantic", "Renaissance", "Modernist",
	"Ancient Greek", "Regency", "Jazz Age", "Elizabethan", "Medieval",
	"Enlightenment", "Contemporary", "Postmodern", "Classical"
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