export interface Speaker {
	name: string;
	image: string;
	description: string;
}

export interface KeynoteSpeaker extends Speaker {
	keynote: string;
}

export interface Workshop {
	day: string;
	speakers?: string[];
	speaker?: string;
	title: string;
	description: string;
}

export const data: {
	speakers: (Speaker | KeynoteSpeaker)[];
	workshops: Workshop[];
} = {
	speakers: [
		{
			name: 'Miriam Beloglovsky, M.A.',
			image: 'Miriam Beloglovsky.png',
			keynote: 'friday',
			description:
				"As a professor of early childhood education, sought-after public speaker, CEO of Playful Transformation, and author, Miriam Beloglovsky’s goal is to engage, inspire, and motivate audiences worldwide to explore the power of play and embrace play as a vehicle that transforms their life.  Miriam is the author of the “Loose Parts” book series, which showcases her advocacy for play with unscripted materials.\nMiriam’s keynote, Just Play: Rekindling Adult Creativity, delves into the dynamic tapestry of adulthood, where amidst our roles and responsibilities, the concept of 'play' often gets lost or dismissed as frivolous. Yet, \"Just Play\" is a testament to the profound importance of play in adult life, underscoring how it is beneficial and essential for fostering creativity, adaptiveness, and holistic well-being.\nPlay is not just an act; it's a state of being that can elevate every facet of life. By harnessing play's joy and unbound potential, adults can rediscover their childhood genius — the spark of transformation and creativity that can change the world. \"Just Play\" is more than a keynote; it's an invitation, a call to action for adults to reengage with their innate playful spirits, a quality we often attribute solely to childhood. This insightful workshop explores how play can catalyze transformational growth for both children and adults.",
		},
		{
			name: 'Julie Nicholson, Ph.D, MBA',
			image: 'Julie Nicholson.jpg',
			keynote: 'saturday',
			description:
				'Dr. Julie Nicholson is an early learning champion, a former preschool and kindergarten teacher, a parent of three daughters and a former parent and President of a Bay Area parent participation preschool. She was a Professor of Practice at Mills College in Oakland for 17 years where she directed several innovative programs including the Leadership Program in Early Childhood, a Joint MBA/MA Educational Leadership Program and the Center for Global Play Research. Dr. Nicholson is co-author of 13 books and many journal articles. Her most recent books include The Powerful Role of Play in Education and Creating Equitable Early Learning Environments for Young Boys of Color: Disrupting Disproportionate Outcomes (2023; both published by the California Department of Education), Principals as Early Learning Leaders: Effectively Supporting Our Youngest Learners (2022; Teachers College Press) and Supporting Young Children to Cope, Build Resilience and Heal from Trauma through Play: A Practical Guide (2023; Routledge). Her forthcoming book, Reducing Stress in Schools: Trauma-Responsive Strategies to Support Teachers and Students (2024, Harvard Education Press) is focused on PreK-12 teachers and administrators. Julie is currently the Vice President of Implementation and Impact at Children’s Funding Project. She regularly gives keynotes and provides professional development, coaching and mentoring to individuals, agencies, schools/districts, and state leadership teams across the U.S. She has extensive experience participating in policy committees, serving on non-profit Boards, and participating in international policy, research and practice-focused projects.\nDuring her keynote, Dr. Nicholson will guide us in celebrating the powerful role of play in supporting young children’s learning, development, and overall well-being. Weaving together authentic stories, contemporary research, and windows into high quality early learning environments, she will highlight the sights and sounds of powerful learning for preschool-aged children and the complex role of early childhood teachers and families who are entrusted to guide them during a critical time for their brain and body development. Participants will see developmentally informed early learning environments in action. Dr. Nicholson will inspire all of us to see our collective opportunity and responsibility to create inclusive, engaging, equitable and healing play-based environments for our youngest learners.',
		},
		{
			name: 'Jenna Hermans',
			image: 'jenna hermans.jpg',
			description:
				"Jenna is living proof that you can create a life of calm within chaos and overwhelm. She uses her bachelor’s degree in psychology, master’s degree in organizational management, over 10 years in the early childhood field, and over fifteen years of Human Resources experience to build strong teams, both at work and at home. Jenna is the co-founder and COO of Be Courageous a transformation agency, a busy mom of 4, a coach and an author. As seen in Forbes, The Sun, ELLE, Yahoo, Insider, and more, Jenna takes an intentional and inclusive approach to help parents, educators, and businesses implement tools that put organization and systems around their busy lives that infuse calm and more joy, helping them go from 'Chaos to Calm,' which doubles as the title of her debut book that launched in May 2023.",
		},
		{
			name: 'Jamie Close, MSOT, OTR/L',
			image: 'Jamie close.png',
			description:
				'Jamie is an occupational therapist (OT) who has worked in pediatrics for over 25 years. She has worked in a variety of settings including in homes, schools, and clinics as well as teaching OT students both in the clinic and in the university classroom. She is Executive Director of Ready Set GO Therapy, a pediatric practice offering OT, Speech Therapy, and Outdoor Therapy groups. Jamie is passionate about sharing her experiences with students, teachers, and parents in an effort to meet the mission of Ready Set GO Therapy which is ‘to empower kids to lead joyful lives!’ ',
		},
		{
			name: 'Kate Lumsden, L.AC',
			image: 'Kate Lumsden.jpg',
			description:
				'Kate is a board licensed acupuncturist and Ayurvedic practitioner who specializes in pediatrics. She treats a wide range of challenges in children from asthma to eczema, anxiety to ADHD. In her Marin county clinical practice, Kate uses a myriad of kid-friendly tools including massage, needle-less acu point stimulation, heat therapy, cupping, herbal medicine and more, always paired with playful connection. When not in the office, Kate is cuddling or shuttling her two young children who happily take their herbs when needed. ',
		},
		{
			name: 'Diana Tauder',
			image: 'Diana Tauder.jpg',
			description:
				'Diana Tauder is a leadership and life coach committed to empowering people to embrace life to its fullest and make a positive impact on the world. With a background as a film industry executive and a native New Yorker, Diana brings bold perspectives and high energy to her coaching practice. She is an expert at navigating change, communicating effectively, and resolving conflicts. Her clients include leaders at Fortune 500 companies, film and television executives, and artists seeking to unleash their full potential. As a certified and credentialed coach, she guides her clients towards intentional and transformative growth, both personally and professionally. Diana is also a proud Single Mother by Choice, sharing adventures and laughter with her two daughters, Arden (7) and Iris (5).',
		},
		{
			name: 'Janna Barkin',
			image: 'Janna barkin.jpg',
			description:
				'Janna  is an author, educator, and mother. Her youngest is transgender. A preschool teacher of many years, Janna served as director of the Novato Parents Nursery School, a parent participation preschool in Novato, CA, and at the SFJCC Rosenberg Early Childhood Center in San Francisco. She now supports transgender youth and their families as a parent support group facilitator, speaker, blogger, workshop presenter, and parent coach. Janna was a featured speaker at the CCPPNS Conventions in 2018 and 2020. For more information about Janna and the work she does, please visit her website: www.hesalwaysbeenmyson.com. ',
		},
		{
			name: 'Taira Restar',
			image: 'Taira RESTAR.jpg',
			description:
				'Taira Restar considers playfulness and creativity to be two of her superpowers. At 7 years old, she created a circus to entertain neighborhood kids. Since then she has facilitated classes, workshops and events for children and adults worldwide--using a multi-modal arts approach to broaden creativity, well-being and nature connection. Taira is a grandmother, a minister, and the director of Emerald Heart Forest School. Her motto is “Life is sacred play.” ',
		},
		{
			name: 'Jessica Chivers Long',
			image: 'Jessica Chivers Long.jpg',
			description:
				'Jessica Chilvers Long is a holistic health coach, hormone health specialist and long-time fitness instructor empowering women to improve their own well-being through education and connection. She has healed gut and skin issues through nutrition and alleviated a long list of perimenopause symptoms through diet and lifestyle changes – and she wants to help you do the same. She is passionate about sharing information so you can make intelligent choices for yourself and feel less alone while doing so. She is a UCLA grad, Institute of Integrative Nutrition (IIN) Health Coach grad, IIN Advanced Hormone Health grad, and is a barre and Pilates teacher.',
		},
		{
			name: 'Taylor Ross',
			image: 'Taylor Ross.png',
			description:
				'Taylor Ross is a Trauma-Informed Parenting and Education Consultant who works with clients privately and in groups worldwide. She is a U-Mass Boston Early Childhood Mental Health graduate, Somatic Experiencing Practitioner, has certificates in Mediation, Buddhist Psychology and Meditation and Non-Violent Parenting and Education. She holds an empathic space, provides practical tools, current research and draws from thousands of hours of courageous shared experience to help parents and educators support children and foster emotionally nuanced and resilient community and family cultures. ',
		},
		{
			name: 'Jamaica Stevens',
			image: 'Jamaica Stevens.jpg',
			description:
				'Jamaica Stevens is a teacher, entrepreneur, speaker, published author and children\'s music artist and producer. Jamaica is the founder of JAMaROO Kids, which specializes in providing weekly enrichment classes for young children at over 150 schools in California and the Seattle, Washington Area. Her written work includes "The Vegetarian Cookbook for Kids" and "Yoga Adventure!," as well as producing the original children\'s album "Celebrate with JAMaROO Kids," which can be found on ITunes, Spotify and all major streaming platforms. Jamaica has taught over 10,000 classes to young children and has worked with over 100,000 children and families over the past 20+ years! She presents at educational conferences all over the United States and has captured the attention of over 3 million views on the JAMaROO Kids YouTube Channel.',
		},
		{
			name: 'Donnie Weaver',
			image: 'Donnie Weaver.jpg',
			description:
				'Donnie Weaver is a San Francisco native, Autist, artist, activist, and dad. He has worked in education for 13 years, previously teaching art and science, but enjoys his time in preschool most of all. He has worked at Slippery Fish for 3 years and was a parent in the co-op before that. He has a teaching credential from CCSF with a background in child psychology and learning differences.',
		},
		{
			name: 'Alison Tucker, M.ED',
			image: 'Alison Tucker.jpg',
			description:
				"Alison Tucker is an Autist, East Bay native, naturalist, swimmer, activist, and older sister. She has a master's degree in Special Education (Mild/Moderate Support Needs) with an emphasis & certificate in Autism Spectrum Disorder, having studied Psychology, Disability, and Black Studies as an undergraduate at San Francisco State University.  ",
		},
		{
			name: 'Sara O’Neill',
			image: 'Sara O’Neill.jpg',
			description:
				'Sara O’Neill is a founding parent of Slippery Fish and she is passionate about the opportunity for families to be part of their child’s first learning experiences. She received her B.A. from the University of Michigan, but on-the-job training from her children and the Slippery Fish community is a life-long learning opportunity.',
		},
		{
			name: 'Michele Tyler',
			image: 'Michele Tyler.jpg',
			description:
				'Michele Tyler has been in the field of early childhood education for over 25 years; She is the second oldest of seven and grew up in a neighborhood where her home was the gathering point for all the neighbor kids. She has been involved in early care and education for as long as she can remember. Michele has worked in Family Child Care, Center Based Care, Infant Care, and Head-Start, to name a few places. She holds a degree in Elementary Education, and is currently working on a master’s degree from Pacific Oaks college. When Michele retired from teaching, she began working at a Resource and Referral Agency where she began coaching and training. Over the past 8 years she has conducted over 100 workshops on topics ranging from Play to Trauma to Brain Development. She likes to mix her trainings with a bit of humor, and believes that when we are laughing, we are learning.',
		},
		{
			name: 'Oshik Maoz-Metzl',
			image: 'Oshik Maoz-Metzl.jpg',
			description:
				'Oshik Maoz-Metzl is a parenting educator, life coach and a mother of three fantastic kids. Working with parents and helping them find their solutions to a happy home is her passion. Her approach is mainly based on Adlerian psychology combined with nonviolent communication methods wrapped in creativity and playfulness. Drawing from her theater background, Oshik infuses roleplay and humor into her consolations and parenting workshops. After many years of working in informal education, she received credentials as a parenting educator and as a sleep consultant in 2019. As a life coach with a specialization in ADHD, Oshik collaborates with individuals and families to work on overcoming challenges, learning new skills and achieving their goals. She sees people as creative, resilient and whole. Oshik views the opportunity to support her clients through difficult times and witness their growth is an honor and a privilege. Additionally, Oshik is a retired La Leche League leader, and holds a special place in her heart for mothers dealing with breast-feeding challenges. Oshik divides her time between working with parents privately, facilitating workshops, and coaching people with ADHD in every age. To schedule a private meeting or a workshop, please contact Oshik at: oshiksm@gmail.com',
		},
		{
			name: 'Michelle Semrad Barrera, M.Ed, M.fA',
			image: 'Michelle Semrad Barrera.jpg',
			description:
				'Michelle Semrad Barrera loves the messiness of play and the constant discovery. She holds a master’s in education from the University of California Los Angeles and a master’s of fine arts from the California Institute of the Arts. She is a former K12 teacher, early literacy and writing coach, and school consultant. After years of championing a student-directed approach as opposed to a rewards and punishment, teacher-directed and one-size-fits-all system of education, she discovered the true meaning and wonder of teaching and learning through play, the work of childhood, and in teaching and learning side by side with families. For Michelle, this is the core of the work: supporting all types of families with all types of children in healthy social-emotional development, while trusting children to know the work they need to do.  Michelle is a sought after presenter throughout the state on play and early childhood development.',
		},
		{
			name: 'Jessica Diaz France, LCSW',
			image: 'Jessica diaz france.jpg',
			description:
				'Jessica Diaz France (she/her) began working with The Body Positive as a high school peer leader in 2001. Since then she has supported the organization by helping to write curricula, developing and facilitating peer leadership training, blog writing, and participating in video projects. Jessica serves as a Board Member on The Body Positive Board of Directors. She holds a B.A. in Politics, and minors in Legal Studies and Music from the University of San Francisco. She also holds a Masters degree in Social Work from San Francisco State University. Her thesis project was curricula for a 1-unit masters level course entitled “Size Diversity for Masters of Social Work Students.” Jessica is a Licensed Clinical Social Worker, working as a Program Manager of Adult and Older Adult Programs at County of Marin, Behavioral Health and Recovery Services.  Jessica is a bilingual Spanish speaker and lives in Marin County with her husband and two sons.',
		},
		{
			name: 'Jennifer Curtis',
			image: 'Jennifer curtis.png',
			description:
				'RIE® Associate Jennifer Curtis was first introduced to the teachings of Magda Gerber by her Montessori mentor in 1997. Over the years to follow, while classroom teaching, then as a school director, teacher trainer, professional nanny and community-based service provider, the Educaring Approach continually informed her practice and elevated her relationships with children and adults, alike. In 2015, Jennifer embraced a long-held dream of professionally sharing the Educaring Approach with others and became a RIE Associate in 2022. With an enduring passion for promoting the importance of primary relationships from birth, Jennifer provides nurturing, respectful, holistic support and guidance for families in the perinatal year and beyond through Heartful Birth. She offers classes for parents and professionals in her beautiful Novato classroom, as well as private family support and program consulting in Marin and Sonoma Counties. Jennifer is also a DONA-Certified Birth Doula, Certified Instructor of Infant Massage, and credentialed Montessori ECE teacher.',
		},
		{
			name: 'Jessica Miller, ICCE, CLD, CLC',
			image: 'Jessica Miller.jpg',
			description:
				'Jessica Miller has been involved with co-op communities and working privately with parents and children since 1999. She has two adult children, both of whom attended co-op preschools for three years each, along with an elementary school co-op. Currently, she serves the Fremont community as a lactation counselor, CPR instructor, maternal educator, and preschool director. Jessica firmly believes that children learn best through play, facilitated by engaging, rich, and natural experiences and materials provided by both staff and parents. Through continuous education, collaboration between parents and teachers, and fostering friendships within her community, her aim is to instill a lifelong love of learning in both parents and children, promoting curiosity and connection beyond their time together.',
		},
		{
			name: 'Kavitha Vishwanathan, MA',
			image: 'Kavitha Vishwanathan.png',
			description:
				"Kavitha's journey toward becoming a preschool teacher began in 2005, when she enrolled at Mission College, Santa Clara, to pursue her Associate Degree in Early Childhood Education. During this time, she gained valuable experience working with children aged 2 to 4 at the on-campus Childcare Center. Additionally, Kavitha holds a Masters Degree in Literature and Arts from India. Fremont Parents’ Nursery School holds a special place in her heart, as both of her children were former students. She considers it a blessing to be part of a team that shares her passion and dedication to fostering an environment that encourages learning through play.",
		},
		{
			name: 'Stacy Gohman, Ph.D., M.S.',
			image: 'Stacy Gohman.jpg',
			description:
				"Stacy  Gohman is a dedicated lifelong educator with 15 years of experience in classrooms and museums. Afterward, she dedicated her time to raising her children, both of whom attended Fremont Parents’ Nursery School. Stacy holds degrees in chemistry, geology, and education. Her diverse background includes teaching high school and college students, contracting with NASA, and as an educator and exhibit developer at the Children's Discovery Museum of San Jose.",
		},
		{
			name: 'Merrill Page',
			image: 'Merrill Page.jpg',
			description:
				'Merrill Page is an author, a teacher, and a practitioner of Mindbody medicine rooted in Craniosacral Therapy and Five-element theory.  Merrill brings an integrated understanding and heartfelt illumination of diverse alternatives to her medicine. Her teachings help individuals overcome obstacles and limitations created by old patterns, spiritual, mental, emotional, and physical.  She is the founder of non-profit Earth Medicine Institute Taos and author of EARTH MEDICINE: A FIELD GUIDE,  healing in seasons and cycles (2001).  The Path of Medicine Woman: fertility, women’s health and rewilding is coming this spring, Gracepoint Publishing. She lives between the Bay Area and New Mexico with her four sons and puppy.',
		},
		{
			name: 'Marci Silverberg, MPT, PPCES & Caitlin MONDT, PT, DPT',
			image: 'Marci Silverberg + Caitlin MONDT.jpg',
			description:
				'Marci Silverberg is a Physical Therapist and the founder of Pelvic Path Physical Therapy, located nearby in San Rafael. She is joined by her colleague, fellow Orthopedic and Pelvic Health Physical Therapist, Dr. Caitlin Mondt. Marci and Caitlin are passionate about educating women about common myths about the pelvic health, and simple things that can be done to improve it. They specialize in working with women, and especially new mothers, in helping them to fully recover from the effects of pregnancy and childbirth so they can enjoy their lives with confidence and strength. As new mothers are some of the busiest and most hardworking people out there, and as mothers themselves, they fully understand the time constraints on exercise. Therefore, they especially love to teach women how to accomplish their fitness goals with their children, and through play. ',
		},
		{
			name: 'Barbara Crowley',
			image: 'Barbara Crowley.png',
			description:
				'Barbara Crowley taught STEM curriculum as the base of all thematic learning long before the need for STEM focus was recognized. Science holds the secrets of the universe- and children want to know “how” and “why.” Barbara created Beyond Basic Steam as a blueprint to integrate STEM activities and vocabulary into literature, art and social emotional learning. ',
		},
		{
			name: 'Aki Raymer, M.A.',
			image: 'Aki Raymer.jpg',
			description:
				'Aki Raymer is a parenting coach, speaker, Infant Mental Health specialist, adjunct professor, and certified Positive Discipline educator. She has created her signature Parenting Blueprints with clients in the United States and abroad, facilitated lifestyle and discipline workshops, led many a toddler in circle time, and has worked with families, schools, and children in a host of capacities over the last decade. Connect with Aki, find out about upcoming events and explore her blog at: www.parentingpaths.com.',
		},
		{
			name: 'Wendolyn Bird',
			image: 'wendolyn bird.jpg',
			description:
				'Wendolyn Bird has spent the last 30+ years supporting thousands of parents, teachers and children. As a Coach she helps adults gain the tools, understanding and confidence to calmly navigate and diffuse those challenging moments so they can raise happy, secure children and feel capable and fulfilled, meeting their parenting or professional dreams.',
		},
		{
			name: 'Jocelyn Robertson, M.A.',
			image: 'Jocelyn Robertson + Ana Chaidez.jpg',
			description:
				'As the Director of Cottage Co-Op Nursery School since 2017, Jocelyn Robertson (left) is deeply committed to providing a nurturing and enriching educational environment for young learners. With a Bachelor of Arts in Gender Studies and a Master of Arts in Human Development, they bring a comprehensive understanding of child development and educational practices to my role. Additionally,  they have the honor of serving as the President Emeritus of CCPPNS, where they continue to advocate for the importance of parent participation in early childhood education. ',
		},
		{
			name: 'Ana Chaidez',
			image: 'Jocelyn Robertson + Ana Chaidez.jpg',
			description:
				'Ana  Chaidez (right) brings over 20 years of dedicated teaching experience to their role as a Senior Teacher at Cottage Co-Op Nursery School. With a passion for innovative educational philosophies, Ana specializes in Constructivism, Reggio Emilia, RIE, and Forest School-inspired approaches. ',
		},
		{
			name: 'Lisa Silva Willoughby',
			image: 'Lisa silva Willoughby.jpg',
			description:
				"Lisa Silva Willoughby, hails from Goiânia, Brazil, and has dedicated her life to integrating capoeira into Marin County culture through ABADÁ-Capoeira Marin, which she established in 2014. Armed with a degree in Public Relations from the State University of São Paulo, Lisa ventured into marketing in both Brazil and California before settling in San Francisco with her husband and family. Inspired by the transformative impact of capoeira on her students, Lisa founded ABADA-Capoeira Marin under the guidance of Mestra Márcia Cigarra in 2014, and since then, has been teaching the art to Marinites of all ages. Committed to community outreach, she spearheaded the certification of ABADA-Capoeira Marin as a non-profit corporation in 2019, aiming to embed capoeira into the fabric of Marin County culture. Lisa's unwavering dedication to her students and her remarkable achievements in capoeira competitions, including winning international titles in 2019 and 2023, underscore her commitment to promoting capoeira worldwide.",
		},
		{
			name: 'Rebecca Nowlen',
			image: 'Rebecca Nowlen.jpg',
			description:
				'Rebecca Nowlen is an educator with over twenty five years of experience working for equity in our communities. In her early days as a high school English teacher, pioneered the AVID program at her high school, fostering academic excellence and college readiness for all students. After first experiencing co-ops as the mother of two children, Rebecca directed a parent-cooperative nursery school for twelve years. Rebecca has been a member of CCPPNS since 2008, serving as its secretary for a decade before assuming the role of president. Her commitment to holistic parenting approaches is evidenced by her certification as a Hand in Hand Parenting instructor and a consultant on Peace Coaching, advocating for inclusive, connected, and supportive homes learning environments. Currently, Rebecca channels her passion for education into teaching adults and collaborating with non-profit support agencies in Marin County, where she continues to inspire positive change and foster lifelong learning opportunities.',
		},
		{
			name: 'Cait Goss, M.A.',
			image: 'Cait goss.jpg',
			description:
				'Cait Goss (They/She) is queer, neurodivergent artist, storyteller, and an educator of almost 15 years and childcare provider for nearing 20 years. Born and raised in the San Fernando Valley, Cait received their B.A. in Urban and Environmental Policy from Occidental College and M.A. in Teaching from USC. They have interned for the Farm to Preschool program, taught college students abroad in Thailand in both traditional and alternative & community-based educational systems, and taught middle school English Language Development before finding their happy place at Our Children’s Place Cooperative Preschool. Cait is passionate about the arts, creativity, social justice, mindfulness,and social emotional learning, all of which are the backbone of their teaching and learning pedagogy. ',
		},
		{
			name: 'Laurel Shear',
			image: 'Laurel Shear.jpg',
			description:
				'Laurel Shear is an artist, educator, mother, and energy medicine practitioner.  She is certified in Clinical EFT (emotional freedom technique), Biofield Tuning and recently earned a Masters Certification in Intuition Medicine®.  Laurel uses scientifically researched modalities that are rooted in ancient practices, that activate healing on a cellular level.  Laurel works with her clients to help relieve stress, anxiety, depression, PTSD and fosters relaxing experiences to help her clients feel lighter, release pain from the body and quickly shift out of limiting beliefs.',
		},
		{
			name: 'Stephan Goyne',
			image: 'Stephan Goyne.jpg',
			description:
				'Stephan Goyne is an expert in teaching kids how to explore their physical potential. He has been a gymnastics coach since 1996, a martial arts school owner since 2008, a certified elementary school teacher in Oakland and an acroyoga teacher. He is also a highly decorated jiu-jitsu competitor and a combat wrestling world champion. He will show you how to introduce kids to various forms of adventurous play, such as climbing, jumping, balancing, tumbling, and wrestling, in a safe and fun way.',
		},
		{
			name: 'Justine Chadly',
			image: 'Justine chadly.jpg',
			description:
				"Justine Chadly is the owner of In Harmony Music and has been an early childhood music educator since 2003 when she couldn't find quality creative arts programs for her young son. She additionally offers a curriculum based on a contemporary combination of methods including but not limited to Orff, Kodaly, Jacques-Dalcroze, and Comprehensive Musicianship for private students, group classes, preschools, elementary students and more. As a guest speaker for local universities and conferences nationwide, Justine enjoys sharing the significance of and best practices for early childhood and early elementary music education. She holds a BA in music from UC Davis with an emphasis in vocal performance and an MA in Music Education with an emphasis in early childhood and special needs from San Francisco State University. She completed the certification course from the Smithsonian Folkways in World Music Pedagogy in the summer of 2015,.",
		},
		{
			name: 'Diego Silva de Frietas',
			image: 'Diego silva de frietas.jpg',
			description:
				'Diego Silva de Freitas is an accomplished athlete and performance artist dedicated to capoeira. Beginning his training at age ten in Rio de Janeiro, Brazil, Diego has excelled in numerous ABADÁ-Capoeira competitions, earning top honors including first-place finishes in New York and Mexico City. After relocating to New York in 2012, Diego contributed to local ABADÁ-Capoeira initiatives before settling in the Bay Area in 2016. As the Artistic Director of ABADÁ-Capoeira Marin, he passionately teaches students of all levels and is renowned for his exceptional instructional abilities and dynamic performances worldwide. In 2019, he was awarded his brown cord at the ABADÁ-Capoeira International Arts Festival in Rio de Janeiro, recognizing his significant contributions to the capoeira community.',
		},
	],
	workshops: [
		{
			day: 'friday',
			speaker: 'Miriam Beloglovsky, M.A.',
			title: 'Exploring the Power of Unscripted Materials',
			description:
				'Join us for a dynamic workshop designed to unlock the potential of unscripted materials in early childhood ecosystems. This engaging experience will shed light on the transformation power of loose parts pedagogy. Participants will explore a diverse array of materials that encourage creativity and deep joy in children. Through active engagement with unscripted materials, participants will deepen their understanding of how loose parts play promotes creativity, innovation, and critical thinking.',
		},
		{
			day: 'friday',
			speaker: 'Jamie Close, MSOT, OTR/L',
			title: 'Sensory Processing & Behavior',
			description:
				'Sensory processing is a complex, neurological process that allows us to alert to, interpret, and ignore or react to sensory information. While we have our traditional senses that paint a picture of our external world including touch, taste, smell, sight, and hearing, we also have internal senses that impact our body awareness and emotional regulation. These include vestibular processing, proprioception, and interoception. This presentation will present information about these systems in relation to how they impact behavior. Participants will also learn practical strategies to support different sensory processing patterns of preschool-aged children.',
		},
		{
			day: 'friday',
			speaker: 'Jenna Hermans',
			title:
				'Empowering Educators & Parents: Taking Care of You So You Can better take care of others',
			description:
				'In a profession where nurturing and educating others is at the forefront, teachers and parents often have little time for self-care, leading to burnout and overwhelm. Participants will learn the importance of self-care for personal well-being and professional efficacy, explore various self-care practices that can be seamlessly incorporated into daily life, and participate in guided activities to start their self-care journey immediately.',
		},
		{
			day: 'friday',
			speaker: 'Kate Lumsden, L.AC',
			title: 'Hands on healing with east asian medicine & ayurveda',
			description:
				"Support nervous system regulation, strong immune systems, and cognitive development in small children (& yourselves!) through fun movement, acupressure, massage, and singing with East Asian Medicine! You'll walk away with simple and effective tools you can put into practice right away with your students and children. ",
		},
		{
			day: 'friday',
			speaker: 'Jamie Close, MSOT, OTR/L',
			title: 'Movement & learning: How early motor skills influence learning',
			description:
				'Play is the work of children. It is through joyful exploration of the world and meaningful interactions that children learn and develop throughout early childhood. Sensory motor skills, which develop through play over the first years of life, lay the foundation for strong social emotional regulation and even for later academic success. This presentation will focus on early motor skills and their impact on learning. Participants will learn fun, playful activities that help facilitate the development of these motor skills.',
		},
		{
			day: 'friday',
			speaker: 'Janna Barkin',
			title:
				'Supporting gender expansive/transgender youth in early childhood settings',
			description:
				"This workshop will deepen participants' understanding about gender and gender identity, especially regarding young children. Participants will learn language they can use when talking to families, friends, and colleagues about gender identities and differences. The workshop offers strategies to create inclusive classrooms and communities that support diverse gender expression. The workshop facilitator will also present options for resources and support for parents who think their child may be transgender, or who have questions about their child’s gender identity. ",
		},
		{
			day: 'friday',
			speaker: 'Janna Barkin',
			title:
				'Discussion group for parents, caregivers, family, & friends of transgender, non-binary, or gender questioning children',
			description:
				'Come share your experiences in a safe and welcoming space where you can speak openly, find and offer support, and get the information you need. Explore how to support yourself as you support your child. Participants will have the opportunity to gather for support, discussion, Q&A, and more. The workshop facilitator will lead a discussion and offer options for resources and support for parents/teachers who think their child (or a child they teach) may be transgender, or who have questions about their child’s gender identity. Transgender/Non-binary/Gender questioning adults also welcome and encouraged to join the discussion.',
		},
		{
			day: 'friday',
			speaker: 'Taylor Ross',
			title:
				're-orienting the difficult moments as opportunities for connection & growth',
			description:
				'This talk is focused on moments when we may feel particularly overwhelmed and/or at a loss for how to support the children in our world. We will consider the inevitability of these moments and their rich invitation to strengthen relationships to self and others and build pathways for future/family/educational/inner life navigation. We will consider the importance of keeping neuro-development in mind, both for the adult and in the child, and honoring these powerful opportunities to model and normalize human feelings, experiences, inner boundaries and needs with curiosity and care.',
		},
		{
			day: 'friday',
			speaker: 'Taira Restar',
			title: 'invitation to play! Play! Play!',
			description:
				'Using an Expressive Arts Therapy approach, we will invite our Inner Children (and our Inner Critics!) on a play date. Join Taira Restar for a light-hearted exploration of creative play. Take home ideas for how to bring more joy and fulfillment into your life and into your parenting/teaching.',
		},
		{
			day: 'friday',
			speaker: 'Jamaica Stevens',
			title: 'learning through music, dance & yoga',
			description:
				'In this workshop, we’ll explore how as teachers we can foster all 5 areas of child development (cognitive, social and emotional, speech and language, fine and gross motor) through music, dance and yoga activities. The focus will be on learning simple ways to integrate dance, music and yoga into your daily curriculum/ routine. Activities will encourage self-expression, problem solving, teamwork and creative thinking while working on balance, coordination, listening skills, concentration, breathing techniques and spatial awareness. We’ll discover fun creative ways to teach basic science, math, early literacy skills and social emotional learning! Explore creative ways to use books, toys and other props that you can find throughout your classroom to keep your students engaged and focused throughout the year and help foster imaginative play. Learn tips for modifying these activities for different age groups to make sure that you are being developmentally appropriate!',
		},
		{
			day: 'friday',
			speaker: 'Diana Tauder',
			title:
				'embracing playfulness: cultivating a growth mindset in work & life',
			description:
				"In this dynamic talk, we'll shake off the shackles of the drill sergeant mentality and embrace the rhythm of life with grace and gusto. Whether facing challenges or seizing opportunities, it’s possible to approach our work with purpose and passion every step of the way. We'll swap 'getting through the day' for ‘embracing the day' and transform our workplaces into vibrant playgrounds of innovation. Through practical strategies and real-life examples, we’ll discover how to infuse our tasks, responsibilities and work-place interactions with playfulness, curiosity, and a growth mindset. As we know, our children and students are watching, and will be learning firsthand what it means to live life with joy and authenticity.\n*Also offered on Saturday",
		},
		{
			day: 'friday',
			speaker: 'Jessica Long',
			title: 'perimenopause 101',
			description:
				'When it comes to perimenopause, there are LOTS of questions. What exactly is perimenopause? When does it start? How do I know if I am in perimenopause? How long does it last? Why are there SO MANY symptoms? What can I do to feel like myself again? If any of these questions resonate with you, be sure to join the Perimenopause 101 breakout session led by Jessica Long, Hormone Health Coach and founder of Belong Wellness. In this session, tailored for women in their late 30s – early 50s, Jessica will answer all of these questions and discuss how to alleviate your symptoms. Perimenopause can be confusing, challenging and frustrating. But, you are NOT alone and you don’t have to suffer. Join this workshop to learn what exactly is happening with your hormones, how you can alleviate your symptoms and gain a sense of belonging knowing that so many other women are experiencing what you are.',
		},
		{
			day: 'friday',
			speakers: ['Sara O’Neill', 'Alison Tucker, M.ED', 'Donnie Weaver'],
			title: 'high support needs in the classroom - Q&A',
			description:
				"Join a conversation around supporting children and families who have higher needs or challenging behaviors in the classroom. Have you run out of strategies? New or struggling to work with an ABA team or other early interventionists? Bring questions and/or your own wisdom and experiences to share in a deeper conversation around supporting families and children. Slippery Fish Co-op is centered around inclusion - 30-40% of our children have higher needs. We don't have all the answers, but we are here to support a broader conversation.",
		},
		{
			day: 'saturday',
			speakers: ['Michele Tyler'],
			title: 'Using Play to alleviate challenging Behaviors',
			description:
				'This interactive training will focus on the stages and types of play that unfold in early childhood, the role of the brain in this process, and how play can be used to alleviate the challenging behaviors we see in our programs. ',
		},
		{
			day: 'saturday',
			speakers: ['Oshik Maoz-Metzl'],
			title:
				'my body and others: sexual education for parents and teachers of young kids',
			description:
				"Don't worry, this isn't the birds and bees talk your parents gave you in the '90s. Join me as we tackle the sometimes awkward, but always important, topic of sexual education. Together, we'll explore normal and abnormal behavior of children 0-6. Covering everything from answering curious questions to setting boundaries and handling those tricky 'What do I say when…' moments. Let's equip ourselves with the tools to support our kids' journey in understanding their bodies and relationships, both at home and in preschool, all while prioritizing their safety.",
		},
		{
			day: 'saturday',
			speakers: ['Julie Nicholson, Ph.D, MBA'],
			title:
				'Supporting young children to Reduce stress, build RESILIENCE & Heal from trauma through play',
			description:
				'Join Dr. Nicholson for an enlightening workshop exploring the transformative power of play to reduce stress, build resilience and support children impacted by trauma to heal. Discover how children tell us stories through their play communicating their experiences, emotions and what they need from their caregivers to feel safe and to cope through stress and adversity. Participants will gain insights into fostering attuned and responsive relationships through play, both at home and in early learning environments. Dr. Nicholson will offer practical examples of activities that support nervous system regulation, strengthen children’s resilience and build their social emotional development through play.',
		},
		{
			day: 'saturday',
			speakers: ['Jessica Diaz France, LCSW'],
			title:
				'introduction to the be body positive model for educators and parents',
			description:
				'Jessica Diaz France, LCSW is a licensed Be Body Positive facilitator who has worked with The Body Positive organization for over 23 years. The Be Body Positive Model is comprised of five Core Competencies, the fundamental skills we can practice on a daily basis to live peacefully and healthfully in our bodies. Proficiency with these skills allows us to care for ourselves from a place of self-love and appreciation, leading to alignment with our purpose and life goals. Our model defines health as the interconnectedness of physical, psychological, and emotional needs in human beings. The Competencies of Reclaim Health, Practice Intuitive Self-Care, Cultivate Self-Love, Declare Your Own Authentic Beauty, and Build Community establish foundational building blocks that honor individual authority as the primary path to positive change. Attendees will learn about the importance of modeling a loving and caring relationship to their body to the young children in their lives. Workshop will provide an overview of the Be Body Positive Model and lead participants in a few experiential exercises related to 1-2 Core Competencies. ',
		},
		{
			day: 'saturday',
			speakers: ['Jessica Diaz France, LCSW'],
			title: 'Educaring® as a Foundation for Play and Lifelong Learning',
			description:
				'An introduction to the Educaring® Approach to caregiving in the early years (0 - 6) with a focus on play as an essential element of human development. The lifelong benefits of practicing the Educaring principles of Time for Uninterrupted Play and Freedom to Explore, plus tips for providing an environment that invites and supports authentic, child-initiated play in the early years, will be shared along with a general overview of the Educaring Approach to parenting and caregiving as originated by Magda Gerber, founder of Resources for Infant Educarers® (RIE®).\n*Please note this workshop is being offered twice!',
		},
		{
			day: 'saturday',
			speakers: ['Michelle Semrad Barrera, M.Ed, M.fA'],
			title: 'A Play filled approach to early literacy',
			description:
				"Play is foremost self-chosen and self-directed. When we observe children's play, we can discover a myriad of ways to expand upon the early literacy work in which they engage while honoring the play. In this workshop, we will examine how we can follow children's lead to foster a passion for language, stories, and learning.",
		},
		{
			day: 'saturday',
			speakers: [
				'Jessica Miller, ICCE, CLD, CLC',
				'Kavitha Vishwanathan, MA',
				'Stacy Gohman, Ph.D., M.S.',
			],
			title: 'risky play: What are the limits?',
			description:
				'What is risky play, and what are the benefits for children? In this workshop, we will be discussing how to differentiate between a risk and a hazard, how to support teachers, parents, and children taking risks. We will provide some examples of how we’ve done it at our school and invite you to consider and discuss what risky play might look like in your space.',
		},
		{
			day: 'saturday',
			speakers: ['Merrill Page'],
			title:
				'the biology of play: tools for regulating your nervous system to optimize play',
			description:
				'Merrill Page, mother of four, founder of Earth Medicine Institute Taos, author of EARTH MEDICINE: A FIELD GUIDE, healing in seasons and cycles has practiced the art and science of nervous system regulation for 3 decades now. This workshop offers insights, inspirations and tools she has gathered as a mother and as a Craniosacral therapist to help parents and educators truly enjoy their play time with their children. She draws on research across systems including Chinese Medicine, Ayurveda, psychology and biology to offer take-home practices that optimize your ability shift gears, drop-in and delight.',
		},
		{
			day: 'saturday',
			speakers: ['Marci Silverberg, MPT, PPCES & Caitlin MONDT, PT, DPT'],
			title: 'pelvic health in postpartum women: Common, not normal',
			description:
				"A staggering 30-50% of women have various types of issues with the pelvic floor, ranging from leaking with sneezing, painful sex, pressure and pain, which are often ignored. As the pelvic floor muscles are actually part of the deep core, we need to break the stigma about this elusive topic. We need clarity about what is actually normal in terms of pelvic health, what isn't, and what your options are. Let's break barriers in the field of Women's Health, educate ourselves about normal bladder, bowel and sexual function- and start living our lives with the optimal health we deserve!\n*Please note this workshop is being offered twice",
		},
		{
			day: 'saturday',
			speakers: ['Barbara Crowley'],
			title:
				'beyond basic stem: strategies to grow young scientists by intergrating science, technology, engineering and math into regular preschool curriculum',
			description:
				'Beyond Basic STEAM: Strategies to grow young scientists by integrating Science, Technology, Engineering and Math into regular preschool curriculum. Low tech, informational/inspirational blueprint and hands-on activities to thoughtfully integrate STEAM into your program, at your own pace.',
		},
		{
			day: 'saturday',
			speakers: ['Aki Raymer, M.A.'],
			title: 'positive discipline for preschoolers',
			description:
				"Are you ready to explore the secrets to raising raising joyful, connected, and confident kids? Learn brain-based strategies that will empower you to set loving limits with ease. Aki will equip you with practical tools that you can implement immediately. Together, we'll tackle common behavioral issues head-on, and you'll have the opportunity to ask questions and create a personalized game-plan for your individual situation. You'll leave ready to tackle your biggest parenting challenges with confidence!",
		},
		{
			day: 'saturday',
			speakers: ['Wendolyn Bird'],
			title:
				'play with discipline - discipline with play: speak the language of children & children will follow yours',
			description:
				"This is an insightful session exploring the dynamic relationship between play and discipline. We will delve into a young child's language of play and how it intersects with adults' efforts to support social, emotional, and intellectual development. You will gain practical strategies through engaging lectures, hands-on participation, and informative Q&A, aiming to implement a balanced approach. Come prepared to embrace the language of children and enhance your connection to foster positive behavior and create harmony for children, parents, and teachers.",
		},
		{
			day: 'saturday',
			speakers: ['Jocelyn Robertson, M.A.', 'Ana Chaidez'],
			title: 'emergent curriculum',
			description:
				"Unlock the power of child-led free play in your curriculum development! While it's widely acknowledged that children learn through play, adults persistently use curriculum models that prevent it from happening in its freest form. In this workshop, discover how to use your observations of what children are already doing to shape and enrich your curriculum. ",
		},
		{
			day: 'saturday',
			speakers: ['Oshik Maoz-Metzl'],
			title: 'motivation matters: empowering preschoolers and their parents',
			description:
				"Join this dynamic workshop for co-op parents and educators! We'll explore what motivates different people into action. Just remember, motivating kids is like trying to herd cats - sometimes you just need a little creativity! Through interactive activities, we'll uncover effective strategies for recognizing and using motivation, individually and in a group setting. Get ready to energize your approach so you can gain cooperation from the kids and empower your workday team.",
		},
		{
			day: 'saturday',
			speakers: ['Diana Tauder'],
			title: 'Filling your schools & making a difference',
			description:
				'Join us for a game-changing session as we revolutionize student enrollment! Dive deep into the incredible impact of authentic service. Through real-life examples and actionable strategies, we’ll explore the art of active listening, empathetic communication, and value-based engagement. Discover how our commitment to serving the educational community can transform the enrollment process for the better.',
		},
		{
			day: 'saturday',
			speakers: ['Lisa Silva Willoughby', 'Diego Silva de Frietas'],
			title: 'capoeira for preschoolers',
			description:
				"Capoeira, a captivating Brazilian martial art seamlessly integrating dance, music, and combat, holds a special allure for children due to its multifaceted nature. Participating in consistent Capoeira practice offers significant benefits for children's psychomotor development, improving gross motor skills while nurturing a sense of community and connection through a distinctive repertoire of movements and songs. As children delve into Capoeira, they cultivate physical agility, coordination, and an appreciation for music, rhythm, and cultural traditions, contributing to their overall growth by providing an outlet for self-expression and an opportunity to embrace a vibrant cultural heritage. Come learn about engaging in this practice with young children while playfully exploring this unique form of movement yourself!",
		},
		{
			day: 'saturday',
			speakers: ['Alison Tucker, M.ED', 'Donnie Weaver'],
			title: 'autism demystification',
			description:
				'This workshop is a dive into our societies beliefs and perceptions around Autism Spectrum disorder and led by two co-op educators who specialize in ASD and are Autistic. This workshop is an introduction into unlearning harmful untruths, finding out what is true today, and how this might even change tomorrow.',
		},
		{
			day: 'saturday',
			speakers: ['Rebecca Nowlen'],
			title: 'the benefits of five years of play',
			description:
				'Wondering about TK? Discover how five years of developmentally appropriate, play-based schooling can effectively prepare your child to thrive in kindergarten and beyond.',
		},
		{
			day: 'saturday',
			speakers: ['Cait Goss, M.A.'],
			title: 'the magic of process art',
			description:
				'In this workshop, artist & educator, Cait Goss (they/she) will guide participants on an exploration of process art and the incredible power of open-ended creative play for the mind, the body, the heart, and the classroom community. The first part of this workshop will invite participants to explore various open-ended art projects. The second part of the workshop will share resources, activities, and the benefits of process art in the early childhood environment and beyond.',
		},
		{
			day: 'saturday',
			speakers: ['Laurel Shear'],
			title:
				'learn how to tap the pain away so we can play: eft tapping therapy for children, parents, and teachers',
			description:
				'This workshop will teach a simple and effective technique to release stress from the mind and body. EFT (Emotional Freedom technique) can be used on yourself and your kids to regulate emotions and release stress and pain from the body so you are able to live the life you want to live. Over 100 clinical trials have shown that EFT is effective for anxiety, depression. PTSD, pain, phobias, and many physical diagnoses. EFT is able to rapidly reduce the emotional impact of memories and incidents that trigger emotional distress.',
		},
		{
			day: 'saturday',
			speakers: ['Justine Chadly'],
			title:
				'harmony in early learning: a purposeful playshop for parents and educators',
			description:
				'"Harmony in Early Learning," is  a playshop designed for those seeking to enrich the early childhood experience through playful music and movement practices. In this immersive playshop, participants will embark on a melodic and rhythmic journey that seamlessly integrates the world of music with purposeful play.',
		},
		{
			day: 'saturday',
			speakers: ['Stephan Goyne'],
			title: 'active play on a budget: risky play and basic gymnastics',
			description:
				'Join us for an engaging and practical workshop designed for co-op teachers and parents!! Discover how to foster resilience, creativity, and physical fitness in children through risky play and basic gymnastics—all while working within shoestring budgets.\nWhat You’ll Learn:\nUnderstand the benefits of risky play. Explore basic gymnastics movements.\nGet resourceful with low-cost equipment ideas.\n\nDon’t miss this opportunity to empower young minds through play!',
		},
	],
};
