const factsDb = {
    // Mammals
    cats: ["Cats have five toes on their front paws, but only four toes on their back paws.", "A group of cats is called a clowder.", "Cats can rotate their ears 180 degrees.", "Cats sleep for about 70% of their lives.", "A cat's nose is as unique as a human's fingerprint.", "Cats have whiskers on the backs of their front legs.", "A cat can jump up to six times its length.", "Some cats are polydactyl — born with extra toes.", "Cats have a 'third eyelid' that helps keep their eyes moist and protected.", "A cat's purr vibrates at a frequency that may help heal bones and muscles."],
    dogs: ["Dogs' sense of smell is about 10,000 to 100,000 times more sensitive than humans'.", "A dog's nose print is unique and can be used to identify them.", "Dogs can learn more than 1000 words in some cases.", "A Greyhound could beat a Cheetah in a long-distance race.", "Dogs curl up to protect their organs and keep warm.", "Dogs have a third eyelid called the nictitating membrane.", "A dog's sense of hearing is four times better than a human's.", "Puppies are born with their eyes and ears closed.", "Dogs sweat through the pads on their feet.", "Dogs have been domesticated for at least 15,000 years."],
    lion: ["A lion's roar can be heard up to 5 miles away.", "Lions live in social groups called prides.", "Male lions have manes which protect their necks during fights.", "Lions are the only cats that live in groups.", "Lionesses do most of the hunting in a pride.", "A lion's mane color darkens as it ages.", "Lions sleep up to 20 hours a day.", "A lion's bite force is about 650 PSI.", "Male lions spend much of their time protecting pride territory.", "Lions have retractable claws that can grow up to 2 inches long."],
    tiger: ["Tigers have striped skin as well as striped fur.", "No two tigers have the same stripes.", "A tiger's roar can be heard up to 2 miles away.", "Tigers are the largest cat species and strong swimmers.", "Tigers use scent markings and scratch marks to define territory.", "Tigers are mostly solitary animals, unlike lions.", "A tiger can eat up to 88 pounds of meat in a single sitting.", "Tigers have a white spot on the back of each ear that looks like eyes.", "Tigers can leap up to 30 feet in a single bound.", "Each tiger's stripe pattern is unique, like a human fingerprint."],
    elephant: ["Elephants are the largest land animals with highly developed brains.", "They use their trunks for breathing, grasping, and producing sounds.", "Elephants show signs of self-awareness and mourning behaviors.", "Their tusks are modified incisors that continue to grow.", "Elephants can drink up to 40 gallons of water per day.", "An elephant's trunk has over 40,000 muscles.", "Elephants have excellent long-term memory and never forget.", "Elephants communicate using infrasound below human hearing range.", "Elephants are one of the few animals that recognize themselves in mirrors.", "Baby elephants suck their trunks like human babies suck thumbs."],
    giraffe: ["Giraffes are the tallest land animals with long necks adapted for browsing treetops.", "A giraffe's tongue can be up to 20 inches long and is prehensile.", "They have unique spot patterns used like fingerprints.", "A giraffe's heart weighs about 25 pounds.", "Baby giraffes drop 6 feet to the ground when born.", "Giraffes have no vocal cords and are mostly silent animals.", "A giraffe's spots darken as it ages.", "Giraffes can run up to 35 mph in short bursts.", "Giraffes sleep only about 30 minutes a day.", "A giraffe's long tail ends in a tuft of hair used to swat flies."],
    rabbit: ["Rabbits have strong hind legs for rapid running and leaping.", "They are social and often live in groups in warrens.", "Rabbits' teeth grow continuously and need to be worn down by chewing.", "Rabbits can reach speeds of up to 35 mph when fleeing predators.", "Rabbits have nearly 360-degree vision to spot predators.", "A rabbit's ears help regulate its body temperature.", "Rabbits purr when they are content, similar to cats.", "Baby rabbits are called 'kittens' or 'kits'.", "Rabbits practice a behavior called 'binky' — jumping and twisting mid-air.", "Rabbits communicate through foot stomps and other body language."],
    mouse: ["Mice are highly adaptable and can thrive in many environments.", "They have strong reproductive rates — a female mouse can produce many litters a year.", "Mice use whiskers to sense their environment in the dark.", "A mouse's tail is as long as its body.", "Mice can jump up to 10 times their body length.", "Mice have excellent hearing and can hear sounds up to 100 kHz.", "Mice can squeeze through holes as small as a dime.", "Mice leave scent marks to navigate and communicate.", "A mouse's eyes are positioned on the sides for a wide field of view.", "Mice can run up to 8 mph in short bursts."],
    whale: ["Whales are marine mammals that migrate thousands of miles annually.", "The blue whale is the largest animal ever known to have lived.", "Many whales use complex vocalizations (songs) for communication.", "A blue whale's heart weighs about 400 pounds.", "Whales breathe through a blowhole, not gills.", "Humpback whales have the longest migration of any mammal.", "Whales are known to care for sick or injured pod members.", "Sperm whales can dive deeper than 6,500 feet.", "Beluga whales are called 'canaries of the sea' for their vocalizations.", "Whales nurse their young with milk."],
    dolphin: ["Dolphins are highly social and use echolocation to find prey.", "Some dolphins display problem-solving skills and playful behavior.", "They live in groups called pods and cooperate when hunting.", "Dolphins sleep with only half their brain at a time.", "Dolphins have names for each other (unique whistle patterns).", "Dolphins can recognize themselves in mirrors.", "A dolphin's brain is proportionally larger than a human's.", "Dolphins use tools to hunt and have been observed using sea sponges.", "Dolphins are known to help humans in distress.", "Dolphins play games and toys with one another for enjoyment."],
    zebra: ["Zebras have unique stripe patterns like human fingerprints.", "A zebra's stripes may serve as a natural insect repellent.", "Zebras live in family groups called harems.", "They can run up to 40 mph when escaping predators.", "Zebras communicate through barks, snorts, and whinnies.", "A zebra's stripes help regulate body temperature.", "Zebras are herbivores that graze on grasses and leaves.", "Baby zebras can walk within an hour of being born.", "Zebras have excellent night vision.", "Zebras are highly social and form strong bonds with family members."],
    bear: ["Bears are intelligent animals with excellent memory.", "A bear can run up to 35 mph despite their large size.", "Bears can walk on their hind legs for extended periods.", "A bear's sense of smell is seven times better than a bloodhound's.", "Some bear species are omnivores while others are primarily carnivores.", "Bears hibernate during winter to conserve energy.", "A bear's roar can be heard up to 2.5 miles away.", "Bears are excellent swimmers and can dive deep underwater.", "Baby bears are called cubs and stay with their mother for several years.", "Bears have thick fur that provides excellent insulation."],
    monkey: ["Monkeys are highly intelligent primates with complex social structures.", "Most monkeys have tails that help them balance in trees.", "Monkeys communicate using vocalizations, facial expressions, and gestures.", "A monkey's hands are remarkably similar to human hands.", "Monkeys live in groups called troops that can number up to hundreds.", "Some monkeys can recognize themselves in mirrors.", "Monkeys are primarily herbivores but some eat insects and small animals.", "Baby monkeys nurse for several years and learn from their mothers.", "Monkeys have a distinctive fingerprint pattern.", "Monkeys can live up to 40 years in the wild."],
    
    // Birds
    birds: ["The smallest bird is the bee hummingbird, about 2.25 inches long.", "Some birds migrate thousands of miles each year.", "Owls can rotate their heads up to 270 degrees.", "Parrots can mimic human speech by imitating sound patterns.", "Pigeons can recognize themselves in a mirror.", "A bird's vision is four times sharper than human vision.", "Hummingbirds beat their wings about 80 times per second.", "Crows are intelligent and can recognize individual human faces.", "A penguin's feathers are so densely packed they provide insulation better than fur.", "Birds have hollow bones to reduce weight for flight."],
    eagle: ["Eagles have excellent eyesight, several times better than humans'.", "Some eagle species build enormous nests that are reused for years.", "Eagles are apex predators in their ecosystems.", "An eagle's grip strength is about 10 times stronger than a human's hand grip.", "Bald eagle nests can weigh over 1,000 pounds.", "Eagles can spot a rabbit from 3,280 feet away.", "Eagles can reach speeds of over 100 mph during a dive.", "An eagle's eye can move independently in different directions.", "Eagle pairs often stay together for life and return to the same nest yearly.", "Eagles have been known to live over 40 years in the wild."],
    sparrow: ["Sparrows are small, social birds often found near human habitation.", "House sparrows can form large flocks and show flexible diets.", "They build nests from grass, feathers, and other soft materials.", "Sparrows have been observed using tools to crack seeds.", "A sparrow's heart beats about 800 times per minute.", "Sparrows can remember the location of hundreds of food sources.", "Male sparrows sing to attract mates and defend territory.", "Sparrows take dust baths to keep their feathers clean and waterproof.", "Sparrows can fly at speeds up to 30 mph.", "Baby sparrows leave the nest just 10 days after hatching."],
    peacock: ["Male peacocks display colorful tail feathers to attract mates.", "A peacock's tail can have hundreds of eye-like markings called ocelli.", "Peafowl are native to South Asia but introduced elsewhere.", "Peacock tails have over 200 feathers and can span 6 feet wide.", "Peacocks make a loud 'meow' sound similar to cats.", "A peacock's train (tail) weighs more than its entire body.", "Peacocks drag their trains through water to clean them.", "Male peacocks strut and vibrate their trains to attract females.", "Peahens (female peacocks) are dull in color to blend in during nesting.", "Peacocks can run up to 10 mph despite their heavy tails."],
    vulture: ["Vultures are scavengers and play a critical role cleaning up carcasses.", "Some vultures have highly acidic stomachs to digest rotting meat safely.", "Vultures use thermals to soar and cover long distances with little effort.", "Vultures have bald heads to prevent food from getting stuck in feathers.", "Vultures can fly up to 6,000 feet high and spot carrion from miles away.", "Vultures can go weeks without food after a large meal.", "A group of vultures is called a 'kettle' or 'volt'.", "Vultures vomit as a defense mechanism when threatened.", "Vultures have incredible eyesight about 8 times better than humans.", "Vultures are found on every continent except Antarctica."],
    penguin: ["Penguins are flightless birds that are excellent swimmers.", "Penguins can swim at speeds up to 22 mph.", "Penguins huddle together in groups to stay warm.", "Emperor penguins can dive deeper than 1,800 feet.", "Penguins have waterproof feathers and a layer of blubber for insulation.", "Baby penguins are called chicks and stay with their parents for months.", "Penguins communicate through calls, body postures, and flipper movements.", "Penguins can hold their breath for up to 20 minutes.", "Penguins eat primarily fish and squid.", "Some penguin species migrate thousands of miles each year."],
    owl: ["Owls have forward-facing eyes that give them binocular vision.", "Owls can rotate their heads up to 270 degrees.", "Owls have asymmetrical ears that help them locate prey by sound.", "An owl's hearing is so acute it can hunt in complete darkness.", "Owls have special feathers that allow them to fly silently.", "Owls have excellent night vision and can see in very low light.", "Some owls can fly up to 40 mph.", "Owls regurgitate pellets containing bones and fur of their prey.", "An owl's large forward-facing eyes take up much of their skull.", "Owls are found on every continent except Antarctica."],
    hummingbird: ["Hummingbirds are the smallest bird species, weighing less than a penny.", "A hummingbird's heart can beat up to 1,200 times per minute.", "Hummingbirds must eat constantly to maintain their energy levels.", "A hummingbird can fly forwards, backwards, and upside down.", "Hummingbirds have the highest metabolism of any bird.", "A hummingbird's wings beat up to 80 times per second.", "Hummingbirds are the only birds that can hover in place.", "Some hummingbirds migrate over 3,000 miles annually.", "Hummingbirds have long, specialized beaks for feeding on nectar.", "A hummingbird can remember every flower it has visited."],
    parrot: ["Parrots are highly intelligent birds capable of learning complex tasks.", "Parrots can live 40 to 80 years in captivity.", "Parrots can mimic human speech with remarkable accuracy.", "Parrots have strong pair bonds and often mate for life.", "Parrots communicate using vocalizations and body language.", "Some parrots can learn hundreds of words and phrases.", "Parrots have excellent color vision and can see ultraviolet light.", "Parrots use their beaks as a third foot for climbing.", "Parrots are primarily frugivores and herbivores.", "Parrots live in social groups and form strong family bonds."],
    
    // Reptiles & Amphibians
    frog: ["Frogs absorb water through their skin and many start life in water as tadpoles.", "Some frogs have powerful toxin defenses; others are harmless.", "Frog calls are used by males to attract females and mark territory.", "Frogs have been around for over 265 million years.", "A frog's eyes help push food down into its stomach.", "Some frogs can freeze solid and thaw out in spring.", "Poison dart frogs can be lethal to predators but harmless in captivity.", "Frogs shed their skin about once a week and eat it.", "A frog's tongue is attached at the front of its mouth.", "Frogs can jump 20 times their body length."],
    crocodile: ["Crocodiles have been around for over 200 million years.", "They are skilled ambush predators that can hold their breath underwater for long periods.", "Crocodiles have a powerful bite force of about 3,700 PSI.", "Crocodiles build nests and exhibit parental care for their young.", "Crocodiles cry actual tears when they eat, not from sadness.", "Crocodiles have a valve in their throat that lets them breathe while eating underwater.", "Crocodiles can live over 70 years in the wild.", "A crocodile's teeth are constantly replaced throughout its life.", "Crocodiles are mostly silent but produce low-frequency sounds called infrasound.", "Crocodiles have been observed playing with objects and each other."],
    snake: ["Snakes are legless reptiles found on every continent except Antarctica.", "Snakes shed their entire skin several times a year as they grow.", "Snakes use their forked tongues to sense their environment.", "Some snakes can swallow prey larger than their own head.", "Snakes have transparent eyelids instead of movable eyelids.", "Snakes are carnivores and some can go months without eating.", "Snakes communicate through hisses, rattles, and body movements.", "Some snakes are venomous while others use constriction to kill prey.", "Snakes have flexible spines that allow them to move in many directions.", "A snake's jaw can dislocate to accommodate large prey."],
    lizard: ["Lizards are reptiles found on every continent except Antarctica.", "Some lizards can detach their tails as a defense mechanism.", "Lizards can change color to blend in with their surroundings.", "Some lizards can run on water using their fast leg movements.", "Lizards have external ears and movable eyelids.", "Lizards use their tails for balance and communication.", "Some lizards can live 50 years or more in captivity.", "Lizards are primarily carnivores, eating insects and small animals.", "Lizards have excellent vision and can see ultraviolet light.", "Lizards regulate their body temperature by basking in the sun."],
    
    // Aquatic
    fish: ["Fish breathe using gills which extract oxygen from water.", "There are over 30,000 known species of fish.", "Some fish have symbiotic relationships with other animals.", "Fish have a keen sense of taste with taste buds on their bodies.", "Some fish can see ultraviolet light that humans cannot.", "Fish communicate through color changes and vibrations.", "Goldfish can live 20+ years when properly cared for.", "Some fish produce their own light through bioluminescence.", "Fish don't have eyelids and cannot close their eyes.", "A group of fish swimming together is called a 'school' or 'shoal'."],
    shark: ["Sharks have existed for over 400 million years, before dinosaurs.", "Many shark species can detect electric fields produced by other animals.", "Not all sharks are large — the smallest can be less than 8 inches long.", "Sharks have multiple rows of teeth that grow back throughout their lives.", "Some sharks can swim backwards to clean their gills.", "A shark's skeleton is made of cartilage, not bone.", "Sharks can sense a drop of blood from miles away.", "Great white sharks can live up to 70 years.", "Sharks are carnivores and apex predators in their ecosystems.", "Sharks have been around longer than dinosaurs and trees."],
    octopus: ["Octopuses are highly intelligent cephalopods with eight arms.", "An octopus has nine brains — one central brain and a mini-brain in each arm.", "Octopuses can change color and texture in milliseconds.", "An octopus can squeeze through any hole larger than its hard beak.", "Octopuses use tools and can solve complex puzzles.", "An octopus has three hearts that pump blue blood.", "Octopuses have excellent vision but are colorblind.", "Octopuses communicate through color changes and body postures.", "Most octopuses live only 1-2 years in the wild.", "Octopuses are solitary and typically live alone except during mating."],
    jellyfish: ["Jellyfish have existed for over 500 million years, predating dinosaurs.", "Jellyfish are about 95-98% water.", "Jellyfish have no brain, heart, blood, or bones.", "Jellyfish have stinging tentacles called nematocysts for catching prey.", "Some jellyfish are bioluminescent and glow in the dark.", "Jellyfish can be found in every ocean, from surface to deep sea.", "Most jellyfish are carnivores eating small fish and plankton.", "Jellyfish drift with ocean currents and tides.", "Some jellyfish are nearly immortal and can reverse their aging process.", "Jellyfish range from the size of a pinhead to over 100 feet long."],
    starfish: ["Starfish are echinoderms found in oceans worldwide.", "Most starfish have five arms, but some species have more.", "Starfish have no brain or blood, using a water vascular system instead.", "Starfish move using tube feet on the underside of their arms.", "Starfish can regenerate lost arms over time.", "Many starfish are carnivores eating mollusks and other animals.", "Starfish have eyes at the tip of each arm.", "Starfish reproduce by releasing sperm and eggs into the water.", "Starfish can live 30+ years in the wild.", "Starfish are found from shallow tide pools to the deepest oceans."],
    crab: ["Crabs are crustaceans with ten legs, including two large claws.", "Crabs walk sideways to move faster and avoid obstacles.", "Crabs have hard exoskeletons that they shed as they grow.", "Crabs communicate using a variety of clicks and sounds.", "Some crabs can live 25-30 years in captivity.", "Crabs are primarily carnivores and scavengers.", "Crabs have compound eyes that allow them to see in many directions.", "Male crabs perform elaborate displays and battles for mates.", "Crabs are found in oceans, freshwater, and on land.", "Some crabs can regenerate lost claws and legs."],
    seahorse: ["Seahorses are small fish that move by using their dorsal fins.", "Seahorses are the only species where the male gets pregnant.", "Male seahorses carry eggs in a pouch and give birth to live young.", "Seahorses have prehensile tails they use to anchor to seagrass.", "Seahorses are monogamous and often mate for life.", "Seahorses move very slowly and are among the slowest fish.", "Seahorses have excellent camouflage and can change color.", "Seahorses have tubular snouts for sucking up small prey.", "Seahorses have no stomach and food goes directly to intestines.", "Seahorses are considered endangered due to habitat loss."],
    dolphin_aquatic: ["Dolphins are marine mammals, not fish.", "Dolphins use echolocation to navigate and find prey.", "Dolphins are highly social and live in groups called pods.", "Dolphins sleep with only half their brain at a time.", "Dolphins have names for each other in the form of unique whistles.", "Dolphins can recognize themselves in mirrors.", "A dolphin's brain is proportionally larger than a human's.", "Dolphins use tools and have been observed using sea sponges.", "Dolphins are known to help humans in distress.", "Dolphins play games and interact with toys for enjoyment."],
    
    // Insects
    butterfly: ["Butterflies have colorful wings covered in tiny scales.", "A butterfly's wings are transparent but colored by pigments and scales.", "Butterflies taste with their feet to find host plants.", "A butterfly goes through four life stages: egg, larva, pupa, and adult.", "Butterflies can fly at speeds up to 30 mph.", "Butterflies migrate thousands of miles annually.", "A butterfly's lifespan is typically 2-6 weeks, though some live longer.", "Butterflies are pollinators that visit flowers for nectar.", "Butterflies have compound eyes that can see ultraviolet light.", "Some butterflies are mimics and resemble other toxic species."],
    bee: ["Bees are essential pollinators for flowering plants.", "A bee colony can contain 20,000 to 80,000 bees.", "Bees communicate using dance movements to share information.", "Honey bees have been used by humans for over 4,500 years.", "A bee's wings beat about 200 times per second.", "Bees can fly at speeds up to 15 mph.", "A bee has five eyes — three small eyes and two large eyes.", "Bees produce honey from nectar as a food source.", "A bee colony can make 30 pounds of honey in a season.", "Bees have been observed using tools and solving puzzles."],
    ant: ["Ants are social insects that live in colonies of up to millions.", "Ants can carry objects 10-50 times their own body weight.", "Ants communicate using pheromones and touch.", "An ant colony has a queen, workers, and soldiers.", "Ants have been around for over 100 million years.", "Ants can survive temperatures from -30°F to 130°F.", "Ants navigate using the sun and landmarks.", "Some ants farm fungi as a food source.", "Ants have two stomachs — one for personal use and one for sharing.", "Ants are found on every continent except Antarctica."],
    beetle: ["Beetles are the most diverse animal group with over 400,000 species.", "Beetles have hardened wing covers called elytra.", "Some beetles can live 3-5 years, much longer than most insects.", "Beetles are found in almost every habitat on Earth.", "Some beetles can produce light through bioluminescence.", "Beetles undergo complete metamorphosis from egg to adult.", "A beetle's jaws can exert a force 100 times stronger than the beetle's body weight.", "Some beetles are scavengers while others are predators.", "Beetles are important food sources for many animals.", "Beetles have been around for over 300 million years."],
    grasshopper: ["Grasshoppers can jump 20 times their body length.", "Grasshoppers produce sound by rubbing their legs together.", "Grasshoppers have powerful hind legs for jumping and running.", "Grasshoppers have excellent vision with large compound eyes.", "Grasshoppers can see into the ultraviolet spectrum.", "Grasshoppers are herbivores that eat grasses and leaves.", "Some grasshopper species change color to match their environment.", "Grasshoppers have been around for over 200 million years.", "Grasshoppers are important food sources for birds and other animals.", "A single grasshopper can eat its own body weight in vegetation per day."],
    dragonfly: ["Dragonflies are ancient insects that have existed for 300+ million years.", "Dragonflies have four wings that move independently.", "Dragonflies can fly in any direction — forwards, backwards, and sideways.", "Dragonflies have excellent vision and can see in almost all directions.", "Dragonflies can fly at speeds up to 30 mph.", "Dragonflies spend most of their life as aquatic nymphs.", "Adult dragonflies live only 2-4 weeks after emerging from water.", "Dragonflies are carnivores that eat mosquitoes and other small insects.", "Dragonflies have been observed using tools and problem-solving.", "Dragonflies are important indicators of ecosystem health."],
    
    // Plants
    roses: ["Roses are one of the most popular flowers in the world.", "There are over 300 species of roses and more than 3,000 cultivars.", "Red roses symbolize love and passion.", "Roses have been cultivated for at least 5,000 years.", "A rose requires 6 weeks to develop from bud to full bloom.", "Roses produce a natural fragrance called rose oil or attar of roses.", "The oldest known rose fossil is 35 million years old.", "White roses symbolize purity and innocence.", "Yellow roses symbolize friendship and joy.", "Roses can be found on every continent except Antarctica."],
    trees: ["Trees produce oxygen and absorb carbon dioxide through photosynthesis.", "The oldest living tree is over 5,000 years old.", "A single tree can absorb up to 48 pounds of carbon dioxide per year.", "Trees improve air quality by removing pollutants.", "Forests cover about 30% of Earth's land surface.", "Trees communicate underground through a network called the 'wood wide web'.", "A mature tree produces oxygen for two people annually.", "Trees prevent soil erosion and regulate water cycles.", "The largest tree by volume is the General Sherman Giant Sequoia.", "Trees can live hundreds or even thousands of years."],
    cacti: ["Cacti are succulents that store water in their stems and roots.", "There are over 2,000 species of cacti found mainly in the Americas.", "Cactus spines are modified leaves that reduce water loss.", "The Saguaro cactus can live for over 200 years.", "Cacti can survive long periods without water, sometimes years.", "The barrel cactus can store up to 200 gallons of water.", "Cacti perform photosynthesis at night to minimize water loss.", "Some cacti flowers bloom only at night.", "Cacti play a crucial role in desert ecosystems.", "The prickly pear cactus produces edible fruit."],
    mushrooms: ["Mushrooms are fungi, not plants, and lack chlorophyll.", "There are over 2 million estimated species of fungi.", "Mushrooms reproduce by spreading spores.", "The largest organism on Earth is a honey fungus spanning 2,384 acres.", "Mushrooms contain vitamin D, which is rare in plant foods.", "Some mushrooms are bioluminescent and glow in the dark.", "Fungi break down dead organic matter and recycle nutrients.", "The truffle fungus can sell for thousands of dollars per pound.", "Penicillin, a lifesaving antibiotic, comes from fungus.", "Mushrooms grow by extending threads called mycelium underground."],
    sunflower: ["Sunflowers are tall plants that can reach 12 feet in height.", "Sunflowers have a sunflower head that contains hundreds of tiny florets.", "Young sunflowers track the sun's movement across the sky.", "Sunflowers turn to face the rising sun in the morning.", "Sunflowers produce seeds that are edible and highly nutritious.", "A single sunflower can produce up to 2,000 seeds.", "Sunflowers are native to North America but grown worldwide.", "Sunflowers have been used by humans for over 4,500 years.", "Sunflower oil is widely used in cooking.", "Sunflowers are important pollinators that attract bees and butterflies."],
    orchid: ["Orchids are one of the largest flowering plant families.", "There are over 25,000 species of orchids worldwide.", "Orchids can bloom for months at a time.", "Some orchids have intricate shapes that mimic insects.", "Orchids use elaborate strategies to attract pollinators.", "Some orchids have a symbiotic relationship with fungi.", "Orchids can be grown in soil, on trees, or on rocks.", "Orchids require specific humidity and temperature conditions.", "Some orchids have a fragrance that smells like rotting meat.", "Orchids have been cultivated by humans for over 2,500 years."],
    oak: ["Oak trees are long-lived hardwood trees found worldwide.", "Some oak trees can live over 1,000 years.", "Oak trees produce acorns that are food for many animals.", "Oak trees can reach heights of over 100 feet.", "Oak wood is used for furniture, flooring, and construction.", "Oak trees have a deep root system that stabilizes the soil.", "Oak trees support a diverse ecosystem of insects and animals.", "Acorns from oak trees take 1-2 years to mature.", "Oak trees are affected by climate and soil conditions.", "Oak trees are important in many cultures and mythologies."],
    
    // Microorganisms
    bacteria: ["Bacteria are single-celled prokaryotic organisms.", "Bacteria have been on Earth for about 3.5 billion years.", "The human body contains roughly as many bacterial cells as human cells.", "Some bacteria can survive extreme temperatures and radiation.", "Bacteria are essential for breaking down waste and cycling nutrients.", "E. coli bacteria in our gut help us digest food.", "Some bacteria produce light through bioluminescence.", "Bacteria reproduce through binary fission, dividing into two cells.", "Many bacteria have flagella (tails) that help them move.", "Bacteria can communicate with each other through chemical signals."],
    viruses: ["Viruses are the smallest infectious agents known.", "A virus needs a host cell to reproduce.", "Viruses contain DNA or RNA but not both.", "A single virus particle is called a virion.", "Some viruses can live outside cells for extended periods.", "The largest known virus is the Mimivirus, nearly as big as bacteria.", "Viruses have been used in medical research and gene therapy.", "Bacteriophages are viruses that infect bacteria.", "A virus's structure includes a protein coat called a capsid.", "Some viruses mutate rapidly, which is why flu vaccines change yearly."],
    algae: ["Algae are photosynthetic organisms that produce about 50% of Earth's oxygen.", "Algae range from single-celled to multicellular organisms.", "Seaweed is a type of macroalgae found in marine environments.", "Algae have been on Earth for over 2.7 billion years.", "Many fish and marine animals depend on algae for food.", "Algae produce biofuel and can be used as sustainable energy.", "Some algae can double their biomass in less than a day.", "Algae remove excess nutrients from water, reducing pollution.", "The spirulina algae is packed with protein and used as a supplement.", "Algae blooms can occur when nutrient levels in water become too high."],
    yeast: ["Yeast is a type of fungus used in baking and brewing.", "Yeast reproduces asexually by budding.", "Yeast can ferment sugars and produce alcohol and carbon dioxide.", "Yeast has been used by humans for over 5,000 years.", "There are over 1,500 species of yeast.", "Yeast cells are single-celled organisms similar in size to bacterial cells.", "Yeast is rich in B vitamins and other nutrients.", "Yeast is used to make bread, beer, wine, and other products.", "Yeast can survive in extreme environments.", "Yeast is used in scientific research to study genetics and biology."],
    
    // Fun
    jokes: ["Why don't scientists trust atoms? Because they make up everything!", "I told my computer I needed a break, and it said 'No problem — I'll go to sleep.'", "Why did the scarecrow win an award? Because he was outstanding in his field.", "I asked the librarian if the library had books on paranoia — she whispered, 'They're right behind you.'", "What do you call fake spaghetti? An impasta!", "Why do seagulls fly over the sea? Because if they flew over the bay, they'd be bagels!", "Why did the bicycle fall over? Because it was two-tired.", "What do you call cheese that isn't yours? Nacho cheese.", "Why don't eggs tell jokes? They'd crack each other up.", "How does the ocean say hello? It waves."]
};

const icons = {
    cats: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3c-1.5 0-3 .5-4 1.5C6.2 6 5 8 5 10.5 5 14 8 16 12 16s7-2 7-5.5c0-2.5-1.2-4.5-3-5.99C15 3.5 13.5 3 12 3z" fill="#ffd166"/><path d="M8 14s.5 2 4 2 4-2 4-2" stroke="#073b4c" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    dogs: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 8c-1-1.5-2.5-2-4-1.5v6c1.5.5 3 0 4-1.5V8z" fill="#f4a261"/><path d="M17 8c1-1.5 2.5-2 4-1.5v6c-1.5.5-3 0-4-1.5V8z" fill="#f4a261"/><path d="M12 4c-2 0-4 1.5-4 4v5c0 2 2 3 4 3s4-1 4-3V8c0-2.5-2-4-4-4z" fill="#ffd6a5" stroke="#073b4c" stroke-width="0.8"/></svg>`,
    lion: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="30" r="12" fill="#f4a261"/><path d="M12 30c4-10 24-18 40-6-6-2-12 0-16 4-6-4-12-2-24 2z" fill="#e76f51" opacity="0.9"/></svg>`,
    tiger: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="14" fill="#ffd166"/><path d="M20 22c4 2 6 0 10 0s6 2 10 0" stroke="#073b4c" stroke-width="1.6" stroke-linecap="round"/><path d="M16 36c4-2 8 0 16 0s12-2 16 0" stroke="#073b4c" stroke-width="1.2" stroke-linecap="round"/></svg>`,
    elephant: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="20" width="48" height="22" rx="6" fill="#a8dadc"/><path d="M16 30c0 8 6 12 16 12s16-4 16-12" fill="#74c0c0"/></svg>`,
    eagle: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M12 36c10-10 28-10 40 0-8-6-22-6-40 0z" fill="#fde68a"/><path d="M40 28c4 2 6 6 8 8" stroke="#073b4c" stroke-width="1.2"/></svg>`,
    frog: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="34" r="12" fill="#86efac"/><circle cx="26" cy="28" r="2" fill="#073b4c"/><circle cx="38" cy="28" r="2" fill="#073b4c"/></svg>`,
    fish: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><ellipse cx="32" cy="32" rx="18" ry="10" fill="#93c5fd"/><path d="M50 32c6-4 6 4 0 0z" fill="#60a5fa"/></svg>`,
    shark: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M8 34c10-8 30-10 40 0-6-2-10 0-16 4-6-4-14-2-24-4z" fill="#94a3b8"/></svg>`,
    octopus: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="20" r="10" fill="#d946ef"/><path d="M20 30c0 8 0 16-4 20M32 30c0 8 0 16 0 20M44 30c0 8 0 16 4 20M26 30c0 8 -2 16-6 20M38 30c0 8 2 16 6 20" stroke="#d946ef" stroke-width="1.5" stroke-linecap="round"/></svg>`,
    butterfly: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><ellipse cx="24" cy="24" rx="6" ry="10" fill="#f59e0b"/><ellipse cx="40" cy="24" rx="6" ry="10" fill="#f59e0b"/><ellipse cx="24" cy="40" rx="8" ry="12" fill="#f59e0b"/><ellipse cx="40" cy="40" rx="8" ry="12" fill="#f59e0b"/><rect x="30" y="10" width="4" height="44" fill="#92400e"/></svg>`,
    bee: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><ellipse cx="32" cy="32" rx="8" ry="12" fill="#fbbf24"/><path d="M32 8c0 6 2 12 0 16M32 48c0 6-2 12 0 16" stroke="#fbbf24" stroke-width="2"/><path d="M16 20c-4 0-8 2-10 6M48 20c4 0 8 2 10 6M16 44c-4 0-8-2-10-6M48 44c4 0 8-2 10-6" stroke="#fbbf24" stroke-width="2" stroke-linecap="round"/></svg>`,
    ant: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="16" r="4" fill="#4b5563"/><ellipse cx="32" cy="28" rx="5" ry="7" fill="#4b5563"/><ellipse cx="32" cy="44" rx="6" ry="10" fill="#4b5563"/><line x1="27" y1="21" x2="16" y2="32" stroke="#4b5563" stroke-width="1"/><line x1="37" y1="21" x2="48" y2="32" stroke="#4b5563" stroke-width="1"/><line x1="26" y1="35" x2="12" y2="50" stroke="#4b5563" stroke-width="1"/><line x1="38" y1="35" x2="52" y2="50" stroke="#4b5563" stroke-width="1"/></svg>`,
    beetle: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><ellipse cx="32" cy="32" rx="12" ry="18" fill="#475569"/><path d="M20 28c-4 2-6 6-6 10M44 28c4 2 6 6 6 10" stroke="#475569" stroke-width="2" stroke-linecap="round"/><circle cx="32" cy="20" r="2" fill="#94a3b8"/></svg>`,
    grasshopper: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><ellipse cx="32" cy="28" rx="6" ry="8" fill="#86efac"/><ellipse cx="32" cy="42" rx="8" ry="10" fill="#86efac"/><path d="M24 36c-6 6-10 12-12 18M40 36c6 6 10 12 12 18" stroke="#86efac" stroke-width="2" stroke-linecap="round"/><circle cx="32" cy="20" r="1.5" fill="#4b5563"/></svg>`,
    roses: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="28" r="8" fill="#ef4444"/><ellipse cx="32" cy="42" rx="5" ry="8" fill="#22c55e"/><path d="M32 20c4-3 8 0 8 4" stroke="#22c55e" stroke-width="1.2"/></svg>`,
    trees: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><rect x="28" y="38" width="8" height="20" fill="#92400e"/><path d="M32 10c8 4 12 12 12 20H20c0-8 4-16 12-20z" fill="#22c55e"/></svg>`,
    cacti: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><rect x="24" y="20" width="16" height="32" fill="#84cc16" rx="3"/><circle cx="18" cy="32" r="4" fill="#84cc16"/><circle cx="46" cy="36" r="4" fill="#84cc16"/><circle cx="20" cy="20" r="2" fill="#4b5563"/><circle cx="44" cy="24" r="2" fill="#4b5563"/></svg>`,
    mushrooms: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><ellipse cx="32" cy="24" rx="14" ry="10" fill="#a78bfa"/><circle cx="24" cy="38" r="3" fill="#c4b5fd"/><circle cx="32" cy="40" r="3" fill="#c4b5fd"/><circle cx="40" cy="38" r="3" fill="#c4b5fd"/><rect x="30" y="35" width="4" height="14" fill="#d8b4fe"/></svg>`,
    bacteria: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="12" fill="#ec4899"/><path d="M20 32c0 0 4 0 4-4s-4-4-4-4M44 32c0 0-4 0-4-4s4-4 4-4M32 20c0 0 0-4-4-4s-4 4-4 4M32 44c0 0 0 4-4 4s-4-4-4-4" stroke="#ec4899" stroke-width="1"/></svg>`,
    viruses: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="10" fill="#f97316"/><path d="M32 22L38 18M38 42L32 46M46 32L50 26M18 32L14 38M42 20L46 16M20 44L16 48" stroke="#f97316" stroke-width="2" stroke-linecap="round"/></svg>`,
    algae: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M20 32c8-6 16 4 24 0c-4 8 4 12 0 20" stroke="#10b981" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="28" cy="28" r="3" fill="#10b981"/><circle cx="40" cy="32" r="3" fill="#10b981"/></svg>`,
    jokes: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="24" r="12" fill="#fde68a" /><path d="M18 44c8-6 28-6 36 0-8-6-28-6-36 0z" fill="#fca5a5" /></svg>`
};

const animalIconEl = document.getElementById('animalIcon');

function updateIcon(animal){
    const svg = icons[animal] || '';
    animalIconEl.innerHTML = svg;
    animalIconEl.animate([{ transform: 'scale(0.96)' }, { transform: 'scale(1)' }], { duration: 240, easing: 'cubic-bezier(.2,.8,.2,1)' });
}

const animalSelect = document.getElementById('animal');
const factTextEl = document.getElementById('factText');
const factImageEl = document.getElementById('factImage');
const showBtn = document.getElementById('showBtn');
const toggleLoopBtn = document.getElementById('toggleLoop');
const generateBtn = document.getElementById('generateBtn');
const exitBtn = document.getElementById('exitBtn');
const intervalLabel = document.getElementById('intervalLabel');

let loopTimer = null;
let loopIndex = 0;
let loopInterval = 3000;

function setFact(text, imgHtml){
    const img = imgHtml || icons[animalSelect.value] || '';
    factTextEl.classList.remove('show');
    factImageEl.classList.remove('show');
    setTimeout(()=>{
        factTextEl.innerHTML = text;
        factImageEl.innerHTML = img;
        factTextEl.classList.add('show');
        factImageEl.classList.add('show');
    }, 60);
}

function getFactsForCurrent(){
    const animal = animalSelect.value;
    return factsDb[animal] || [];
}

function displayFact(){
    const list = getFactsForCurrent();
    if(!list.length) return setFact('No facts available.');
    const idx = Math.floor(Math.random() * list.length);
    setFact(list[idx], icons[animalSelect.value]);
}

const animalToApiCategory = {
    cats: 'cat', dogs: 'dog', lion: 'lion', tiger: 'tiger', elephant: 'elephant',
    giraffe: 'giraffe', rabbit: 'rabbit', mouse: 'mouse', whale: 'whale', dolphin: 'dolphin',
    zebra: 'zebra', bear: 'bear', monkey: 'monkey',
    birds: 'bird', eagle: 'eagle', sparrow: 'sparrow', peacock: 'peacock', vulture: 'vulture',
    penguin: 'penguin', owl: 'owl', hummingbird: 'hummingbird', parrot: 'parrot',
    frog: 'frog', crocodile: 'crocodile', snake: 'snake', lizard: 'lizard',
    fish: 'fish', shark: 'shark', octopus: 'octopus', jellyfish: 'jellyfish', starfish: 'starfish',
    crab: 'crab', seahorse: 'seahorse',
    butterfly: 'butterfly', bee: 'bee', ant: 'ant', beetle: 'beetle', grasshopper: 'grasshopper', dragonfly: 'dragonfly',
    roses: 'flower', trees: 'plant', cacti: 'plant', sunflower: 'flower', orchid: 'flower', oak: 'plant',
    mushrooms: 'fungus', bacteria: 'bacterium', viruses: 'virus', algae: 'organism', yeast: 'organism'
};

async function generateAIFact(){
    const animal = animalSelect.value;
    if(animal === 'jokes') {
        displayFact();
        return;
    }
    
    setFact("⏳ Generating AI fact...", icons[animal]);
    
    try {
        const category = animalToApiCategory[animal] || animal;
        const response = await fetch(`https://api.api-ninjas.com/v1/facts?category=${category}`);
        
        if(response.ok) {
            const data = await response.json();
            if(data && data[0] && data[0].fact) {
                setFact("🤖 API Fact: " + data[0].fact, icons[animal]);
            } else {
                setFact("🤖 API Fact: No fact found.", icons[animal]);
            }
        } else {
            generateFallbackFact(animal);
        }
    } catch(e) {
        console.warn("API error, using fallback", e);
        generateFallbackFact(animal);
    }
    stopLoop();
}

function generateFallbackFact(animal) {
    const list = getFactsForCurrent();
    if(!list.length) return setFact('No facts available.');
    const idx = Math.floor(Math.random() * list.length);
    setFact("💡 Fun Fact: " + list[idx], icons[animal]);
}

animalSelect.addEventListener('change', ()=>{
    updateIcon(animalSelect.value);
    setFact('Switched to ' + animalSelect.value + '. Click Show or Start Loop.');
    stopLoop();
});

function startLoop(){
    stopLoop();
    const list = getFactsForCurrent();
    if(!list.length) return;
    loopIndex = Math.floor(Math.random() * list.length);
    loopTimer = setInterval(()=>{
        setFact(list[loopIndex], icons[animalSelect.value]);
        loopIndex = (loopIndex + 1) % list.length;
    }, loopInterval);
    toggleLoopBtn.textContent = 'Stop Loop';
    toggleLoopBtn.dataset.running = '1';
}

function stopLoop(){
    if(loopTimer){
        clearInterval(loopTimer);
        loopTimer = null;
    }
    toggleLoopBtn.textContent = 'Start Loop';
    toggleLoopBtn.dataset.running = '0';
}

function exitApp(){
    stopLoop();
    showBtn.disabled = true;
    toggleLoopBtn.disabled = true;
    animalSelect.disabled = true;
    exitBtn.disabled = true;
    setFact('<strong>Goodbye!</strong> Thanks for exploring living organisms!');
    try{ window.close(); }catch(e){}
}

showBtn.addEventListener('click', ()=>{ displayFact(); stopLoop(); });
generateBtn.addEventListener('click', ()=>{ generateAIFact(); stopLoop(); });
toggleLoopBtn.addEventListener('click', ()=>{
    if(toggleLoopBtn.dataset.running === '1') stopLoop(); else startLoop();
});
exitBtn.addEventListener('click', exitApp);

window.addEventListener('keydown',(e)=>{
    if(e.key === '+' || e.key === '='){ loopInterval = Math.max(1000, loopInterval - 500); intervalLabel.textContent = Math.round(loopInterval/1000); if(loopTimer) startLoop(); }
    if(e.key === '-' || e.key === '_'){ loopInterval = Math.min(10000, loopInterval + 500); intervalLabel.textContent = Math.round(loopInterval/1000); if(loopTimer) startLoop(); }
});

intervalLabel.textContent = Math.round(loopInterval/1000);
updateIcon(animalSelect.value);
setTimeout(()=> setFact('Pick an organism and press Show or Start Loop to explore!'), 200);
