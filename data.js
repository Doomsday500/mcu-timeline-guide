const projects = [

{
id:1,

title:"Captain America: The First Avenger",

type:"Movie",

phase:"Phase 1",

year:2011,

timeline:1,

runtime:"124 min",

importance:5,

summary:"During World War II, Steve Rogers volunteers for the Super Soldier Program and becomes Captain America. He battles HYDRA and Red Skull before sacrificing himself to save millions.",

why:"Introduces Captain America, the Tesseract, HYDRA, Peggy Carter, and several events that influence the MCU for decades.",

essential:true
},

{
id:2,

title:"Agent Carter (Optional)",

type:"Series",

phase:"Phase 2",

year:2015,

timeline:2,

runtime:"18 Episodes",

importance:2,

summary:"Peggy Carter works for the SSR after World War II while secretly carrying out dangerous missions that help shape the future of SHIELD.",

why:"Provides extra background for Peggy Carter and the early formation of SHIELD. Helpful but optional.",

essential:false
},

{
id:3,

title:"Captain Marvel",

type:"Movie",

phase:"Phase 3",

year:2019,

timeline:3,

runtime:"124 min",

importance:4,

summary:"Carol Danvers discovers the truth about her past while becoming one of the universe's most powerful heroes during the 1990s.",

why:"Introduces Captain Marvel, Nick Fury's origins, the Kree-Skrull conflict, and the pager that becomes important in Avengers: Endgame.",

essential:true
},

{
id:4,

title:"Iron Man",

type:"Movie",

phase:"Phase 1",

year:2008,

timeline:4,

runtime:"126 min",

importance:5,

summary:"Billionaire inventor Tony Stark escapes captivity, builds the first Iron Man suit, and decides to become a superhero.",

why:"Introduces Iron Man, Stark Industries, and officially begins the modern MCU.",

essential:true
},

{
id:5,

title:"Iron Man 2",

type:"Movie",

phase:"Phase 1",

year:2010,

timeline:5,

runtime:"124 min",

importance:4,

summary:"Tony Stark deals with new enemies while Black Widow and SHIELD become more involved in his life.",

why:"Introduces Black Widow and expands SHIELD's role before The Avengers.",

essential:true
},

{
id:6,

title:"The Incredible Hulk",

type:"Movie",

phase:"Phase 1",

year:2008,

timeline:6,

runtime:"112 min",

importance:3,

summary:"Bruce Banner searches for a cure while struggling to control the Hulk and facing the Abomination.",

why:"Introduces Hulk and his powers before joining the Avengers.",

essential:false
},

{
id:7,

title:"Thor",

type:"Movie",

phase:"Phase 1",

year:2011,

timeline:7,

runtime:"115 min",

importance:5,

summary:"Thor is banished to Earth where he learns humility before reclaiming his power and confronting Loki.",

why:"Introduces Thor, Loki, Asgard, and the cosmic side of the MCU.",

essential:true
},

{
id:8,

title:"The Avengers",

type:"Movie",

phase:"Phase 1",

year:2012,

timeline:8,

runtime:"143 min",

importance:5,

summary:"Earth's mightiest heroes unite for the first time to stop Loki and an alien invasion led by the Chitauri.",

why:"The first Avengers team forms, the Battle of New York changes the MCU forever, and the post-credit scene introduces Thanos.",

essential:true

}
,
{
id:9,

title:"Iron Man 3",

type:"Movie",

phase:"Phase 2",

year:2013,

timeline:9,

runtime:"130 min",

importance:3,

summary:"Tony Stark struggles with the emotional impact of recent battles while facing a mysterious new terrorist threat and questioning what truly makes him a hero.",

why:"Shows Tony's character development after The Avengers and introduces technology that influences future events.",

essential:false
},

{
id:10,

title:"Thor: The Dark World",

type:"Movie",

phase:"Phase 2",

year:2013,

timeline:10,

runtime:"112 min",

importance:4,

summary:"Thor returns to protect the Nine Realms when an ancient force threatens the universe and places someone close to him in danger.",

why:"Introduces the Reality Stone and expands the cosmic side of the MCU.",

essential:true
},

{
id:11,

title:"Captain America: The Winter Soldier",

type:"Movie",

phase:"Phase 2",

year:2014,

timeline:11,

runtime:"136 min",

importance:5,

summary:"Steve Rogers uncovers a dangerous conspiracy that changes everything he believed about SHIELD while confronting a powerful new enemy from his past.",

why:"Completely changes the MCU by exposing HYDRA's influence and reshaping the world's heroes.",

essential:true
},

{
id:12,

title:"Guardians of the Galaxy",

type:"Movie",

phase:"Phase 2",

year:2014,

timeline:12,

runtime:"121 min",

importance:5,

summary:"A group of unlikely heroes come together in space to protect a powerful artifact while forming one of the MCU's most unique teams.",

why:"Introduces the Guardians, cosmic civilizations, and another Infinity Stone.",

essential:true
},

{
id:13,

title:"Guardians of the Galaxy Vol. 2",

type:"Movie",

phase:"Phase 3",

year:2017,

timeline:13,

runtime:"136 min",

importance:4,

summary:"The Guardians learn more about Peter Quill's origins while strengthening their bond as a family.",

why:"Expands the Guardians' story and introduces characters who return in later MCU films.",

essential:true
},

{
id:14,

title:"Avengers: Age of Ultron",

type:"Movie",

phase:"Phase 2",

year:2015,

timeline:14,

runtime:"141 min",

importance:5,

summary:"The Avengers face an artificial intelligence created with good intentions that quickly becomes humanity's greatest threat.",

why:"Introduces Vision, Wanda Maximoff, Pietro Maximoff, and Wakanda while laying foundations for Civil War and Infinity War.",

essential:true
},

{
id:15,

title:"Ant-Man",

type:"Movie",

phase:"Phase 2",

year:2015,

timeline:15,

runtime:"117 min",

importance:4,

summary:"Scott Lang becomes the new Ant-Man and learns to use shrinking technology for heroic missions.",

why:"Introduces the Quantum Realm, which becomes extremely important in later Avengers stories.",

essential:true
}
,
{
id:16,
title:"Captain America: Civil War",
type:"Movie",
phase:"Phase 3",
year:2016,
timeline:16,
runtime:"147 min",
importance:5,
summary:"Political disagreements divide the Avengers, forcing friends to choose sides while a hidden mastermind pushes them further apart.",
why:"Introduces the Avengers' split, Spider-Man, and Black Panther. The team's division has lasting consequences throughout the MCU.",
essential:true
},

{
id:17,
title:"Black Widow",
type:"Movie",
phase:"Phase 4",
year:2021,
timeline:17,
runtime:"134 min",
importance:3,
summary:"Natasha Romanoff confronts unfinished chapters from her past and reunites with people who shaped her early life.",
why:"Expands Black Widow's backstory and introduces Yelena Belova, an important character in later MCU projects.",
essential:false
},

{
id:18,
title:"Black Panther",
type:"Movie",
phase:"Phase 3",
year:2018,
timeline:18,
runtime:"134 min",
importance:5,
summary:"T'Challa returns to Wakanda to become king while facing challenges that test his leadership and the future of his nation.",
why:"Introduces Wakanda, Vibranium's global importance, and key characters who play major roles in future Avengers stories.",
essential:true
},

{
id:19,
title:"Spider-Man: Homecoming",
type:"Movie",
phase:"Phase 3",
year:2017,
timeline:19,
runtime:"133 min",
importance:4,
summary:"Peter Parker balances everyday life with the responsibilities of being Spider-Man while learning what it truly means to be a hero.",
why:"Develops Spider-Man's relationship with Tony Stark before Infinity War.",
essential:true
},

{
id:20,
title:"Doctor Strange",
type:"Movie",
phase:"Phase 3",
year:2016,
timeline:20,
runtime:"115 min",
importance:5,
summary:"A brilliant surgeon discovers the world of mystical arts and becomes one of Earth's most powerful defenders.",
why:"Introduces Doctor Strange, magic, alternate dimensions, and the Time Stone—foundational concepts for the Multiverse Saga.",
essential:true
},

{
id:21,
title:"Thor: Ragnarok",
type:"Movie",
phase:"Phase 3",
year:2017,
timeline:21,
runtime:"130 min",
importance:5,
summary:"Thor races to save Asgard while facing powerful new enemies and unexpected allies across the cosmos.",
why:"Sets up the events immediately before Avengers: Infinity War and significantly changes Thor's journey.",
essential:true
},

{
id:22,
title:"Ant-Man and the Wasp",
type:"Movie",
phase:"Phase 3",
year:2018,
timeline:22,
runtime:"118 min",
importance:5,
summary:"Scott Lang reunites with Hank Pym and Hope van Dyne for a mission that explores the mysteries of the Quantum Realm.",
why:"Introduces more of the Quantum Realm, which becomes central to Avengers: Endgame.",
essential:true
},

{
id:23,
title:"Avengers: Infinity War",
type:"Movie",
phase:"Phase 3",
year:2018,
timeline:23,
runtime:"149 min",
importance:5,
summary:"The Avengers and their allies unite against the greatest cosmic threat they have ever faced as the hunt for the Infinity Stones reaches its climax.",
why:"One of the MCU's most important films, bringing together nearly every major hero and setting up Endgame.",
essential:true
},

{
id:24,
title:"Avengers: Endgame",
type:"Movie",
phase:"Phase 3",
year:2019,
timeline:24,
runtime:"181 min",
importance:5,
summary:"Following devastating events, the remaining heroes embark on a final mission that changes the future of the Marvel Cinematic Universe forever.",
why:"Concludes the Infinity Saga and establishes the status quo that leads into the Multiverse Saga and eventually Avengers: Doomsday.",
essential:true
},

{
id:25,
title:"Spider-Man: Far From Home",
type:"Movie",
phase:"Phase 3",
year:2019,
timeline:25,
runtime:"129 min",
importance:4,
summary:"Peter Parker tries to balance normal life with superhero responsibilities while dealing with the aftermath of Endgame.",
why:"Shows the world's recovery after Endgame and sets up Spider-Man's future in the MCU.",
essential:true
}
,
{
id:26,
title:"WandaVision",
type:"Series",
phase:"Phase 4",
year:2021,
timeline:26,
runtime:"9 Episodes",
importance:5,
summary:"Wanda Maximoff experiences profound grief while strange events unfold in a seemingly perfect suburban town.",
why:"Introduces major multiverse-related ideas and Wanda's evolution, which directly impacts later MCU stories.",
essential:true
},

{
id:27,
title:"The Falcon and the Winter Soldier",
type:"Series",
phase:"Phase 4",
year:2021,
timeline:27,
runtime:"6 Episodes",
importance:4,
summary:"Sam Wilson and Bucky Barnes face global challenges in a world adjusting after Endgame.",
why:"Shows the next Captain America and the changing political landscape of the MCU.",
essential:true
},

{
id:28,
title:"Loki Season 1",
type:"Series",
phase:"Phase 4",
year:2021,
timeline:28,
runtime:"6 Episodes",
importance:5,
summary:"A Loki variant is drawn into a mystery that reshapes reality and the structure of time itself.",
why:"Introduces the TVA, branching timelines, and key multiverse concepts that lead toward Avengers: Doomsday.",
essential:true
},

{
id:29,
title:"Shang-Chi and the Legend of the Ten Rings",
type:"Movie",
phase:"Phase 4",
year:2021,
timeline:29,
runtime:"132 min",
importance:4,
summary:"Shang-Chi is forced to confront his past and unlock the true power of the Ten Rings.",
why:"Introduces Shang-Chi and the Ten Rings, which may become important in future MCU stories.",
essential:true
},

{
id:30,
title:"Eternals",
type:"Movie",
phase:"Phase 4",
year:2021,
timeline:30,
runtime:"157 min",
importance:3,
summary:"Ancient immortal beings emerge to protect Earth from a forgotten threat while questioning their purpose.",
why:"Expands the cosmic history of the MCU and introduces Celestials.",
essential:false
},

{
id:31,
title:"Spider-Man: No Way Home",
type:"Movie",
phase:"Phase 4",
year:2021,
timeline:31,
runtime:"148 min",
importance:5,
summary:"Peter Parker faces unexpected consequences when events involving the multiverse spiral beyond control.",
why:"One of the MCU's biggest multiverse stories and an important step toward Doomsday.",
essential:true
},

{
id:32,
title:"Doctor Strange in the Multiverse of Madness",
type:"Movie",
phase:"Phase 4",
year:2022,
timeline:32,
runtime:"126 min",
importance:5,
summary:"Doctor Strange journeys across multiple realities while confronting dangerous multiverse threats.",
why:"Introduces incursions and expands the rules of the multiverse, both expected to be central to Doomsday.",
essential:true
},

{
id:33,
title:"Moon Knight",
type:"Series",
phase:"Phase 4",
year:2022,
timeline:33,
runtime:"6 Episodes",
importance:2,
summary:"A man discovers he shares his body with another identity while becoming involved with ancient Egyptian gods.",
why:"Introduces supernatural elements but is mostly standalone.",
essential:false
},

{
id:34,
title:"Ms. Marvel",
type:"Series",
phase:"Phase 4",
year:2022,
timeline:34,
runtime:"6 Episodes",
importance:3,
summary:"Teenager Kamala Khan discovers extraordinary abilities while embracing her own identity.",
why:"Introduces Ms. Marvel before The Marvels.",
essential:true
},

{
id:35,
title:"Thor: Love and Thunder",
type:"Movie",
phase:"Phase 4",
year:2022,
timeline:35,
runtime:"119 min",
importance:3,
summary:"Thor embarks on a new adventure that tests his purpose while confronting a dangerous new enemy.",
why:"Continues Thor's story before future Avengers films.",
essential:false
},

{
id:36,
title:"She-Hulk: Attorney at Law",
type:"Series",
phase:"Phase 4",
year:2022,
timeline:36,
runtime:"9 Episodes",
importance:2,
summary:"Jennifer Walters balances life as a lawyer and a newly empowered superhero.",
why:"Introduces She-Hulk and expands the MCU's street-level heroes.",
essential:false
},

{
id:37,
title:"Black Panther: Wakanda Forever",
type:"Movie",
phase:"Phase 4",
year:2022,
timeline:37,
runtime:"161 min",
importance:4,
summary:"Wakanda faces new challenges while honoring its past and preparing for the future.",
why:"Introduces important new leaders and further develops Wakanda's role in the MCU.",
essential:true
},

{
id:38,
title:"Ant-Man and the Wasp: Quantumania",
type:"Movie",
phase:"Phase 5",
year:2023,
timeline:38,
runtime:"125 min",
importance:5,
summary:"Scott Lang and his family enter the Quantum Realm and encounter a powerful new adversary.",
why:"Expands the Quantum Realm and introduces a major multiverse antagonist.",
essential:true
}
,
{
id:39,
title:"Guardians of the Galaxy Vol. 3",
type:"Movie",
phase:"Phase 5",
year:2023,
timeline:39,
runtime:"150 min",
importance:4,
summary:"The Guardians embark on a deeply personal mission that tests their loyalty while revealing more about Rocket's past.",
why:"Concludes the current Guardians story and sets the stage for the future cosmic MCU.",
essential:true
},

{
id:40,
title:"Secret Invasion",
type:"Series",
phase:"Phase 5",
year:2023,
timeline:40,
runtime:"6 Episodes",
importance:2,
summary:"Nick Fury returns to Earth to confront a hidden threat that has been growing in secret.",
why:"Expands Fury's story but is mostly separate from the main Multiverse storyline.",
essential:false
},

{
id:41,
title:"Loki Season 2",
type:"Series",
phase:"Phase 5",
year:2023,
timeline:41,
runtime:"6 Episodes",
importance:5,
summary:"Loki continues his journey through time while confronting the consequences of a changing multiverse.",
why:"One of the most important projects leading toward Avengers: Doomsday and Secret Wars.",
essential:true
},

{
id:42,
title:"The Marvels",
type:"Movie",
phase:"Phase 5",
year:2023,
timeline:42,
runtime:"105 min",
importance:4,
summary:"Captain Marvel joins forces with Monica Rambeau and Kamala Khan when their powers become mysteriously connected.",
why:"Expands the cosmic side of the MCU and introduces developments with multiverse implications.",
essential:true
},

{
id:43,
title:"Echo",
type:"Series",
phase:"Phase 5",
year:2024,
timeline:43,
runtime:"5 Episodes",
importance:2,
summary:"Maya Lopez returns home while confronting both her past and new challenges.",
why:"Continues the street-level MCU storyline.",
essential:false
},

{
id:44,
title:"Deadpool & Wolverine",
type:"Movie",
phase:"Phase 5",
year:2024,
timeline:44,
runtime:"127 min",
importance:5,
summary:"Deadpool and Wolverine become entangled in a multiverse adventure with consequences beyond their own universe.",
why:"Connects Fox Marvel characters with the MCU and is expected to influence future crossover events.",
essential:true
},

{
id:45,
title:"Agatha All Along",
type:"Series",
phase:"Phase 5",
year:2024,
timeline:45,
runtime:"9 Episodes",
importance:3,
summary:"Agatha Harkness embarks on a new magical journey while exploring deeper corners of the MCU's supernatural world.",
why:"Continues WandaVision's magical storyline.",
essential:false
},

{
id:46,
title:"Captain America: Brave New World",
type:"Movie",
phase:"Phase 5",
year:2025,
timeline:46,
runtime:"TBA",
importance:5,
summary:"Sam Wilson faces new global challenges as Captain America in an evolving world.",
why:"Establishes the new Captain America before the next Avengers films.",
essential:true
},

{
id:47,
title:"Daredevil: Born Again",
type:"Series",
phase:"Phase 5",
year:2025,
timeline:47,
runtime:"Season 1",
importance:3,
summary:"Matt Murdock returns to protect Hell's Kitchen while balancing his legal and heroic lives.",
why:"Reintroduces Daredevil into the main MCU.",
essential:false
},

{
id:48,
title:"Ironheart",
type:"Series",
phase:"Phase 6",
year:2025,
timeline:48,
runtime:"Season 1",
importance:3,
summary:"Young inventor Riri Williams continues developing advanced technology while forging her own heroic identity.",
why:"Continues the legacy of Iron Man through a new generation.",
essential:false
},

{
id:49,
title:"Thunderbolts*",
type:"Movie",
phase:"Phase 6",
year:2025,
timeline:49,
runtime:"TBA",
importance:5,
summary:"A team of unconventional heroes and antiheroes is assembled for a dangerous mission unlike any before.",
why:"Introduces a major new team expected to influence Avengers: Doomsday.",
essential:true
},

{
id:50,
title:"The Fantastic Four: First Steps",
type:"Movie",
phase:"Phase 6",
year:2025,
timeline:50,
runtime:"TBA",
importance:5,
summary:"Marvel's First Family enters the MCU while facing extraordinary scientific and cosmic challenges.",
why:"The Fantastic Four are expected to play a major role in Avengers: Doomsday.",
essential:true
},

{
id:51,
title:"Avengers: Doomsday",
type:"Movie",
phase:"Phase 6",
year:2026,
timeline:51,
runtime:"December 18, 2026",
importance:5,
summary:"The culmination of the Multiverse Saga where Earth's Mightiest Heroes face an unprecedented threat.",
why:"The destination of this entire watch guide.",
essential:true
}

];