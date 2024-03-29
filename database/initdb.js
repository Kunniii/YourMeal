db = db.getSiblingDB("yourMeal")
db.yourMeal.drop()

db.createCollection("Dishes")
db.createCollection("Ingredients")
// db.createCollection("Recipes")

// add some sample data Dishes
// the sample data will not be used in production
db.Dishes.insertMany(
    [
        {
            "name": "Chorizo and mozzarella gnocchi bake",
            "cal": 318,
            "ingredients": ["oil", "onion", "garlic", "chorizo", "tomatoes", "sugar", "gnocchi", "mozzarella", "basil"],
            "prepare_steps": [
                "1 tbsp olive oil",
                "1 onion, finely chopped",
                "2 garlic cloves , crushed",
                "120g chorizo , diced",
                "2 x 400g cans chopped tomatoes",
                "1 tsp caster sugar",
                "600g fresh gnocchi",
                "125g mozzarella ball, cut into chunks",
                "Small bunch of basil , torn",
                "Green salad , to serve"
            ],
            "cook_steps": [
                "Heat the oil in a medium pan over a medium heat. Fry the onion and garlic for 8-10 mins until soft. Add the chorizo and fry for 5 mins more. Tip in the tomatoes and sugar, and season. Bring to a simmer, then add the gnocchi and cook for 8 mins, stirring often, until soft. Heat the grill to high.",
                "Stir 1/2 of the mozzarella and most of the basil through the gnocchi. Divide the mixture between six ovenproof ramekins, or put in one baking dish. Top with the remaining mozzarella, then grill for 3 mins, or until the cheese is melted and golden. Season, scatter over the remaining basil and serve with green salad."
            ],
            "link_img": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/gnocchi-1d16725.jpg"
        },
        {
            "name": "Easy butter chicken",
            "cal": 367,
            "ingredients": ["chicken", "lemon", "ground cumin", "paprika", "hot chilli powder", "yogurt", "oil", "onion", "garlic", "green chilli", "ginger", "garam masala", "ground fenugreek", "tomato pur'e", "chicken stock", "almonds", "rice", "naan bread", "mango chutney", "lime", "coriander"],
            "prepare_steps": [
                "500g skinless boneless chicken thighs",
                "For the marinade:",
                "1 lemon, juiced",
                "2 tsp ground cumin",
                "2 tsp paprika",
                "1-2 tsp hot chilli powder",
                "200g natural yogurt",
                "For the curry:",
                "2 tbsp vegetable oil",
                "1 large onion, chopped",
                "3 garlic cloves, crushed",
                "1 green chilli, deseeded and finely chopped (optional)",
                "Thumb-sized piece ginger, grated",
                "1 tsp garam masala",
                "2 tsp ground fenugreek",
                "3 tbsp tomato pure",
                "300ml chicken stock",
                "50g flaked almonds, toasted",
                "To serve (optional):",
                "Cooked basmati rice",
                "Naan bread",
                "Mango chutney or lime pickle",
                "Fresh coriander",
                "Lime wedges"
            ],
            "cook_steps": [
                "In a medium bowl, mix all the marinade ingredients with some seasoning. Chop the chicken into bite-sized pieces and toss with the marinade. Cover and chill in the fridge for 1 hr or overnight.",
                "In a large, heavy saucepan, heat the oil. Add the onion, garlic, green chilli, ginger and some seasoning. Fry on a medium heat for 10 mins or until soft.",
                "Add the spices with the tomato pure, cook for a further 2 mins until fragrant, then add the stock and marinated chicken. Cook for 15 mins, then add any remaining marinade left in the bowl. Simmer for 5 mins, then sprinkle with the toasted almonds. Serve with rice, naan bread, chutney, coriander and lime wedges, if you like."
            ],
            "link_img": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/butter-chicken-cf6f9e2.jpg"
        },
        {
            "name": "Easy classic lasagn",
            "cal": 844,
            "ingredients": ["oil", "bacon", "onion", "celery", "carrot", "garlic", "beef", "tomatoes", "honey", "egg lasagne", "french cream", "mozzarella", "parmesan", "basil"],
            "prepare_steps": [
                "1 tbsp olive oil",
                "2 rashers smoked streaky bacon",
                "1 onion , finely chopped",
                "1 celery stick, finely chopped",
                "1 medium carrot , grated",
                "2 garlic cloves , finely chopped",
                "500g beef mince",
                "1 tbsp tomato pure",
                "2 x 400g cans chopped tomatoes",
                "1 tbsp clear honey",
                "500g pack fresh egg lasagne sheets",
                "400ml creme frache",
                "125g ball mozzarella , roughly torn",
                "50g freshly grated parmesan",
                "Large handful basil leaves , torn (optional)"
            ],
            "cook_steps": [
                "Heat the oil in a large saucepan. Use kitchen scissors to snip the bacon into small pieces, or use a sharp knife to chop it on a chopping board. Add the bacon to the pan and cook for just a few mins until starting to turn golden. Add the onion, celery and carrot, and cook over a medium heat for 5 mins, stirring occasionally, until softened.",
                "Add the garlic and cook for 1 min, then tip in the mince and cook, stirring and breaking it up with a wooden spoon, for about 6 mins until browned all over.",
                "Stir in the tomato pure and cook for 1 min, mixing in well with the beef and vegetables. Tip in the chopped tomatoes. Fill each can half full with water to rinse out any tomatoes left in the can, and add to the pan. Add the honey and season to taste. Simmer for 20 mins.",
                "Heat oven to 200C/180C fan/gas 6. To assemble the lasagne, ladle a little of the ragu sauce into the bottom of the roasting tin or casserole dish, spreading the sauce all over the base. Place 2 sheets of lasagne on top of the sauce overlapping to make it fit, then repeat with more sauce and another layer of pasta. Repeat with a further 2 layers of sauce and pasta, finishing with a layer of pasta.",
                "Put the creme frache in a bowl and mix with 2 tbsp water to loosen it and make a smooth pourable sauce. Pour this over the top of the pasta, then top with the mozzarella. Sprinkle Parmesan over the top and bake for 25-30 mins until golden and bubbling. Serve scattered with basil, if you like."
            ],
            "link_img": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/classic-lasange-4a66137.jpg"
        },
        {
            "name": "Easy teriyaki chicken",
            "cal": 243,
            "ingredients": ["oil", "chicken", "garlic", "ginger", "honey", "soy sauce", "wine vinegar", "sesame seeds", "onion", "sticky rice", "spring greens"],
            "prepare_steps": [
                "2 tbsp toasted sesame oil",
                "6 skinless and boneless chicken thighs, sliced",
                "2 large garlic cloves, crushed",
                "1 thumb-sized piece ginger, grated",
                "50g runny honey",
                "30ml light soy sauce",
                "1 tbsp rice wine vinegar",
                "1 tbsp sesame seeds , to serve",
                "4 spring onions, shredded, to serve",
                "sticky rice, to serve",
                "steamed bok choi or spring greens, to serve"
            ],
            "cook_steps": [
                "Heat the oil in a non-stick pan over a medium heat. Add the chicken and fry for 7 mins, or until golden. Add the garlic and ginger and fry for 2 mins. Stir in the honey, soy sauce, vinegar and 100ml water. Bring to the boil and cook for 2 - 5 mins over a medium heat until the chicken is sticky and coated in a thick sauce.",
                "Scatter over the spring onions and sesame seeds, then serve the chicken with the rice and steamed veg"
            ],
            "link_img": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/easy-teriyaki-c845724.jpg"
        },
        {
            "name": "Thai fried prawn and pineapple rice",
            "cal": 311,
            "ingredients": ["oil", "onion", "green pepper", "pineapple", "Thai green curry paste", "soy sauce", "rice", "egg", "peas", "bamboo shoots", "prawns", "limes"],
            "prepare_steps": [
                "2 tsp sunflower oil",
                "bunch spring onions , greens and whites separated, both sliced",
                "1 green pepper , deseeded and chopped into small chunks",
                "140g pineapple , chopped into bite-sized chunks",
                "3 tbsp Thai green curry paste",
                "4 tsp light soy sauce , plus extra to serve",
                "300g cooked basmati rice (brown, white or a mix - about 140g uncooked rice)",
                "2 large eggs , beaten",
                "140g frozen peas",
                "225g can bamboo shoots , drained",
                "250g frozen prawns , cooked or raw",
                "2-3 limes , 1 juiced, the rest cut into wedges to serve",
                "handful coriander leaves (optional)"
            ],
            "cook_steps": [
                "Heat the oil in a wok or non-stick frying pan and fry the spring onion whites for 2 mins until softened. Stir in the pepper for 1 min, followed by the pineapple for 1 min more, then stir in the green curry paste and soy sauce.",
                "Add the rice, stir-frying until piping hot, then push the rice to one side of the pan and scramble the eggs on the other side. Stir the peas, bamboo shoots and prawns into the rice and eggs, then heat through for 2 mins until the prawns are hot and the peas tender. Finally, stir in the spring onion greens, lime juice and coriander, if using. Spoon into bowls and serve with extra lime wedges and soy sauce."],
            "link_img": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/thai-aea8468.jpg"
        },
        {
            "name": "Easy chocolate fudge cake",
            "cal": 608,
            "ingredients": ["oil", "flour", "cocoa powder", "baking soda", "syrup", "egg", "milk", "butter", "sugar"],
            "prepare_steps": ["150ml sunflower oil, plus extra for the tin", "175g self-raising flour", "2 tbsp cocoa powder", "1 tsp bicarbonate of soda", "150g caster sugar", "2 tbsp golden syrup", "2 large eggs, lightly beaten", "150ml semi-skimmed milk", "For the icing", "100g unsalted butter", "225g icing sugar", "40g cocoa powder", "2' tbsp milk (a little more if needed)"],
            "cook_steps": [
                "Heat the oven to 180C/160C fan/gas 4. Oil and line the base of two 18cm sandwich tins. Sieve the flour, cocoa powder and bicarbonate of soda into a bowl. Add the caster sugar and mix well.",
                "Make a well in the centre and add the golden syrup, eggs, sunflower oil and milk. Beat well with an electric whisk until smooth.",
                "Pour the mixture into the two tins and bake for 25-30 mins until risen and firm to the touch. Remove from oven, leave to cool for 10 mins before turning out onto a cooling rack.",
                "To make the icing, beat the unsalted butter in a bowl until soft. Gradually sieve and beat in the icing sugar and cocoa powder, then add enough of the milk to make the icing fluffy and spreadable.",
                "Sandwich the two cakes together with the butter icing and cover the sides and the top of the cake with more icing."
            ],
            "link_img": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chocolate-fudge-cake-91de17a.jpg?quality=90&webp=true&resize=220,200"
        },
        {
            "name": "One-pan spaghetti with nduja, fennel and olives",
            "cal": 608,
            "ingredients": ["spaghetti", "garlic", "fennel", "sobrasada paste", "nduja", "tomatoes", "olives", "oil", "red wine vinegar", "pecorino", "basil"],
            "prepare_steps": ["400g spaghetti", "3 garlic cloves , very thinly sliced", "1/2 fennel , halved and very thinly sliced", "75g nduja or sobrasada paste", "200g tomatoes (the best you can get), chopped into chunks", "75g black olives , pitted and sliced", "2 tsp tomato pur'e", "3 tbsp olive oil , plus a drizzle", "2 tsp red wine vinegar", "40g pecorino , plus extra to serve", "handful basil , torn"],
            "cook_steps": ["Boil the kettle. Put all the ingredients except the pecorino and basil in a wide saucepan or deep frying pan and season well. Pour over 800ml kettle-hot water and bring to a simmer, using your tongs to ease the spaghetti under the liquid as it starts to soften.", "Simmer, uncovered, for 10-12 mins, tossing the spaghetti through the liquid every so often until it is cooked and the sauce is reduced and clinging to it. Add a splash more hot water if the sauce is too thick or does not cover the pasta while it cooks. Turn up the heat for the final few mins to drive off the excess liquid, leaving you with a rich sauce. Stir through the pecorino and basil, and serve with an extra drizzle of oil and pecorino on the side."],
            "link_img": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/one-pan-spaghetti-with-nduja-fennel-olives-2308fb3.jpg"
        },
        {
            "name": "Easy pancakes",
            "cal": 61,
            "ingredients": ["flour", "eggs", "milk", "oil", "lemon", "caster sugar"],
            "prepare_steps": ["100g plain flour", "2 large eggs", "300ml milk", "1 tbsp sunflower or vegetable oil, plus a little extra for frying", "lemon wedges to serve (optional)", "caster sugar to serve (optional)"],
            "cook_steps": ["Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.", "Set aside for 30 mins to rest if you have time, or start cooking straight away.", "Set a medium frying pan or cr'pe pan over a medium heat and carefully wipe it with some oiled kitchen paper.", "When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.", "Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months."],
            "link_img": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1273477_8-ad36e3b.jpg"
        },
        {
            "name": "Easy chicken fajitas",
            "cal": 723,
            "ingredients": ["chicken", "red onion", "red pepper", " red chilli", "paprika", " ground coriander", " ground cumin", "garlic", "oil", "lime", "Tabasco", "tortillas", "salsa"],
            "prepare_steps": ["2 large chicken breasts, finely sliced", "1 red onion, finely sliced", "1 red pepper, sliced", "1 red chilli, finely sliced (optional)", "For the marinade", "1 heaped tbsp smoked paprika", "1 tbsp ground coriander", "pinch of ground cumin", "2 medium garlic cloves, crushed", "4 tbsp olive oil", "1 lime, juiced", "4-5 drops Tabasco", "To serve", "6 medium tortillas", "bag mixed salad", "230g tub fresh salsa"], "cook_steps": ["Heat oven to 200C/180C fan/gas 6 and wrap 6 medium tortillas in foil.", "Mix 1 heaped tbsp smoked paprika, 1 tbsp ground coriander, a pinch of ground cumin, 2 crushed garlic cloves, 4 tbsp olive oil, the juice of 1 lime and 4-5 drops Tabasco together in a bowl with a big pinch each of salt and pepper.", "Stir 2 finely sliced chicken breasts, 1 finely sliced red onion, 1 sliced red pepper and 1 finely sliced red chilli, if using, into the marinade.", "Heat a griddle pan until smoking hot and add the chicken and marinade to the pan.", "Keep everything moving over a high heat for about 5 mins using tongs until you get a nice charred effect. If your griddle pan is small you may need to do this in two batches.", "To check the chicken is cooked, find the thickest part and tear in half ' if any part is still raw cook until done.", "Put the tortillas in the oven to heat up and serve with the cooked chicken, a bag of mixed salad and one 230g tub of fresh salsa."],
            "link_img": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chicken-fajitas-2-d7172f8.jpg"
        },
        {
            "name": "Easy carrot cake",
            "cal": 680,
            "ingredients": ["oil", "natural yogurt", "egg", "vanilla extract", "orange", "flour", "Muscovado", "cinnamon", "nutmeg", "carrots", "sultanas", "walnuts", "salted butter", "sugar", "cheese"],
            "prepare_steps": ["230ml vegetable oil, plus extra for the tin", "100g natural yogurt", "4 large eggs", "1' tsp vanilla extract", "' orange, zested", "265g self-raising flour", "335g light muscovado sugar", "2' tsp ground cinnamon", "' fresh nutmeg, finely grated", "265g carrots (about 3), grated", "100g sultanas or raisins", "100g walnuts or pecans, roughly chopped (optional)", "For the icing", "100g slightly salted butter, softened", "300g icing sugar", "100g soft cheese"],
            "cook_steps": ["Heat the oven to 180C/160C fan/gas 4. Oil and line the base and sides of two 20cm cake tins with baking parchment. Whisk the oil, yogurt, eggs, vanilla and zest in a jug. Mix the flour, sugar, cinnamon and nutmeg with a good pinch of salt in a bowl. Squeeze any lumps of sugar through your fingers, shaking the bowl a few times to bring the lumps to the surface.", "Add the wet ingredients to the dry, along with the carrots, raisins and half the nuts, if using. Mix well to combine, then divide between the tins.", "Bake for 25-30 mins or until a skewer inserted into the centre of the cake comes out clean. If any wet mixture clings to the skewer, return to the oven for 5 mins, then check again. Leave to cool in the tins.", "To make the icing, beat the butter and sugar together until smooth. Add half the soft cheese and beat again, then add the rest (adding it bit by bit prevents the icing from splitting). Remove the cakes from the tins and sandwich together with half the icing. Top with the remaining icing and scatter with the remaining walnuts. Will keep in the fridge for up to five days. Best eaten at room temperature."],
            "link_img": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/carrot-cake-f1b3d0c.jpg"
        },
        {
            "name": "Easy chicken curry",
            "cal": 354,
            "ingredients": ["oil", "onion", "garlic", "ginger", "chicken", "spice paste ", "tomatoes", "Greek yogurt", "coriander", "almonds", "basmati rice"],
            "prepare_steps": ["2 tbsp sunflower oil", "1 onion, thinly sliced", "2 garlic cloves, crushed", "thumb-sized piece of ginger, grated", "6 chicken thighs, boneless and skinless", "3 tbsp medium spice paste (tikka works well)", "400g can chopped tomatoes", "100g Greek yogurt", "1 small bunch of coriander, leaves chopped", "50g ground almonds", "naan breads or cooked basmati rice, to serve"],
            "cook_steps": ["Heat the oil in a flameproof casserole dish or large frying pan over a medium heat. Add the onion and a generous pinch of salt and fry for 8-10 mins, or until the onion has turned golden brown and sticky. Add the garlic and ginger, cooking for a further minute.", "Chop the chicken into chunky 3cm pieces, add to the pan and fry for 5 mins before stirring through the spice paste and tomatoes, along with 250ml water. Bring to the boil, lower to a simmer and cook on a gentle heat uncovered for 25-30 mins or until rich and slightly reduced. Stir though the yogurt, coriander and ground almonds, season and serve with warm naan or fluffy basmati rice."],
            "link_img": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/easy-chicken-curry-aa22a0b.jpg"
        },
        {
            "name": "Easy meatballs",
            "cal": 375,
            "ingredients": ["pork sausage", "onion", "carrot", " oregano", "beef", "parmesan", "breadcrumb", "egg", "oil", "celery", "courgette", "garlic", "red pepper", "tomato pur'e", "caster sugar"],
            "prepare_steps": ["300g good-quality pork sausage (about 4 large or 8 chipolatas)", "1 small onion", "1 carrot", "1 tbsp dried oregano", "500g lean beef mince", "50g parmesan , finely grated, plus extra to serve", "75g dried breadcrumb", "1 medium egg", "1 tbsp olive oil", "For the tomato sauce", "1 carrot (finely grated)", "2 sticks of celery (grated)", "1 courgette (coarsely grated)", "3 garlic cloves (finely grated)", "2 red peppers", "1 tbsp olive oil", "1 tbsp tomato pur'e", "pinch golden caster sugar", "splash red wine vinegar", "3 x 400g tins chopped tomatoes", "cooked spaghetti , to serve", "handful basil leaves , snipped"],
            "cook_steps": ["KIDS the writing in bold is for you. GROWN-UPS the rest is for you. Squeeze some sausages. Get your child to squeeze all the sausagemeat out of the skins into a large bowl. They can hold the sausages or do it by squashing them on a board.", "Get grating. Get your child to coarsely grate the onion and finely grate the carrot. If the onion starts to hurt their eyes, get them to wear goggles, which is good fun. Grating can take a bit of strength, so you may need to help. Tip these vegetables in with the sausages. While you have the grater out, grate the Parmesan, other vegetables and garlic for the sauce, and set aside.", "Make a marvellous mix. Next, get your child to add all the other meatball ingredients one by one, except the olive oil, into the bowl and season with black pepper.", "Squish everything together. Get the child to squish everything together through their hands until completely mixed. Keep an eye on younger children to make sure that they don't taste any of the raw mix.", "Roll meatballs. Children as young as three can now roll the meatball mix into walnut-sized balls, then place them on a board or tray. This mix should make 40 balls ' counting these is great way to help teach older children basic division. Cover the meatballs with cling film and have a little tidy up.", "Prepare the red peppers. Firstly, peel the peppers with a vegetable peeler, cut off the tops and bottoms and remove the seeds. Cut the peppers in half and children from the age of four can cut the peppers into strips.", "Make the sauce. A grown-up will need to help here. Heat the oil in a large saucepan. Add the vegetables and garlic and cook for 5 mins. Stir in the tomato pur'e, sugar and vinegar, leave for 1 min then tip in the tomatoes and simmer for 5 mins. Get the child to help blitz the sauce with a hand blender. Gently simmer the sauce while you cook the meatballs.", "Cook the meatballs. Brown the meatballs in the olive oil on all sides then pop them into the sauce, working in batches if necessary. Simmer the meatballs in the sauce for 15 mins, gently stirring until they are cooked through. It's ready to eat now or cool and freeze in suitable batches for up to 6 months. Serve with spaghetti, some basil and extra Parmesan, if you like."],
            "link_img": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/meatballs-main-b401430.jpg"
        },
        {
            "name": "Easy beef hotpot",
            "cal": 417,
            "ingredients": ["onion", "carrot", "potatoes", "beef", "bean", "Worcestershire sauce", " parsley"],
            "prepare_steps": ["2 onions", "300g carrots", "1kg potatoes", "450g lean minced beef", "2 beef stock cubes", "400g can baked beans", "splash of Worcestershire sauce", "handful of roughly chopped parsley (optional)"],
            "cook_steps": ["Cut each onion into eight wedges. Roughly chop the carrots and cut the potatoes into large chunks. Put the kettle on.", "Heat a large non-stick pan, add the mince and fry quickly, stirring all the time, until evenly browned. Crumble in the stock cubes and mix well. Add the prepared vegetables, stir them around, then pour in 900ml/1' pints of hot water from the kettle. Bring to the boil.", "Reduce the heat, cover and simmer for 25-30 minutes, until the veg are tender. Stir in the baked beans and a generous splash of Worcestershire sauce and heat through. Taste and add salt and pepper if necessary.", "Scatter over the parsley, then ladle the hotpot into bowls. Put the Worcestershire sauce bottle on the table in case anyone fancies a bit more spice.",],
            "link_img": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-52267_11-6aba81b.jpg"
        },
        {
            "name": "Piri-piri chicken with smashed sweet potatoes and broccoli",
            "cal": 662,
            "ingredients": ["sweet potatoes", "oil", "chicken", "onion", "piri-piri spice mix", "broccoli"],
            "prepare_steps": ["3 large sweet potatoes (about 900g), peeled and cut into large chunks", "oil , for drizzling", "6-8 chicken thighs, skin left on", "2 red onions , cut into wedges", "25g sachet piri-piri spice mix (or a mild version, if you like)", "300g long-stem broccoli"],
            "cook_steps": ["Heat the oven to 180C/160C fan/gas 4. Toss the sweet potatoes with a generous drizzle of oil and some seasoning, and tip into a very large roasting tin. Push the potatoes to one end of the tin, then, in the other end, toss the chicken with the onions, spice mix, a drizzle of oil and some seasoning. Roast for 40 mins, stirring everything halfway through. Add the broccoli to the tin, drizzle with a little oil and season, then roast for 10-15 mins more.", "Remove the chicken, onions and broccoli from the tin. Roughly mash the potatoes using a fork, making sure you incorporate all the chicken juices and spices from the pan. Spread the mash over the base of the tin, then top with the broccoli, chicken and onions and serve from the tin in the middle of the table."],
            "link_img": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/piri-piri-chicken-with-smashed-sweet-potatoes-broccoli-84cb220.jpg"
        },
        {
            "name": "Unbelievably easy mince pies",
            "cal": 222,
            "ingredients": ["butter", "flour", "sugar", "mincemeat", "egg", "sugar"],
            "prepare_steps": ["225g cold butter, diced", "350g plain flour", "100g golden caster sugar", "280g mincemeat", "1 small egg, beaten", "icing sugar, to dust"],
            "cook_steps": ["To make the pastry, rub the butter into the flour, then mix in the golden caster sugar and a pinch of salt.", "Combine the pastry into a ball ' don't add liquid ' and knead it briefly. The dough will be fairly firm, like shortbread dough. You can use the dough immediately, or chill for later.", "Heat the oven to 200C/180C fan/gas 6. Line 18 holes of two 12-hole patty tins, by pressing small walnut-sized balls of pastry into each hole.", "Spoon the mincemeat into the pies. Take slightly smaller balls of pastry than before and pat them out between your hands to make round lids, big enough to cover the pies.", "Top the pies with their lids, pressing the edges gently together to seal ' you don't need to seal them with milk or egg as they will stick on their own. Will keep frozen for up to one month.", "Brush the tops of the pies with the beaten egg. Bake for 20 mins until golden. Leave to cool in the tin for 5 mins, then remove to a wire rack. To serve, lightly dust with the icing sugar. Will keep for three to four days in an airtight container."],
            "link_img": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-901483_10-af0bd6b.jpg"
        },
        {
            "name": "Frying pan pizza with aubergine, ricotta and mint",
            "cal": 721,
            "ingredients": ["flour", "yeast", "sugar", "oil", "garlic", "passata", "aubergine", "ricotta", " mint "],
            "prepare_steps": ["For the dough", "200g strong white bread flour , plus a little for dusting", "' tsp fast-action dried yeast", "' tsp golden caster sugar", "a little oil , for greasing", "For the toppings", "4 tbsp olive oil , plus a little extra", "1 garlic clove , thinly sliced", "200g passata", "pinch of golden caster sugar (optional)", "1 small aubergine , sliced into discs", "100g ricotta", "small handful mint , roughly chopped", "extra virgin olive oil , for drizzling"],
            "cook_steps": ["Weigh the ingredients for the dough into a large bowl and add 1/2 tsp salt and 125ml warm water. Mix to form a soft dough, then tip onto your work surface and knead for 5 mins or until the dough feels stretchy. Clean and grease the bowl and return the dough. Cover with cling film and leave somewhere warm to rise for 1 hr, or until the dough has doubled in size.", "Meanwhile, make the sauce. Heat 1 tbsp olive oil in a pan and add the garlic. Sizzle gently for 30 secs, making sure the garlic doesn't brown, then add the passata. Season well and bubble for 8-10 mins until you have a rich sauce ' add a pinch of sugar if it tastes a little too tart. Set aside.", "When the dough has risen, knock out the air and roll it into a pizza base the same size as a large frying pan. Oil the surface of the dough, cover with cling film , then leave on the work surface for 15 mins to puff up a little. Meanwhile, heat 2 tbsp oil in the frying pan and add the aubergines in a single layer (you may have to cook in batches). Season well and cook for 4-5 mins on each side until really tender and golden. Transfer to a dish and cover with foil to keep warm.", "Heat the remaining 1 tbsp of oil in the pan and carefully lift the dough into it. You may have to reshape it a little to fit. Cook over a low-medium heat until the underside is golden brown and the edges of the dough are starting to look dry and set ' this should take about 6 mins, but it's best to go by eye. Flip over, drizzle a little more oil around the edge of the pan so it trickles underneath the pizza base, and cook for another 5-6 mins until golden and cooked through. Reheat the sauce if you need to and spread it over the base. Top with the warm aubergines and dot with spoonfuls of ricotta. Scatter with mint and drizzle with a little extra virgin olive oil just before serving."],
            "link_img": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/frying-pan-pizza-b691022.jpg"
        },
        {
            "name": "Easy huevos rancheros",
            "cal": 682,
            "ingredients": ["oil", "tortilla wrap", "egg", "bean", "lime", "avocado", "feta", "hot chilli sauce"],
            "prepare_steps": ["1 tbsp vegetable oil or sunflower oil", "1 corn tortilla wrap", "1 egg", "200g can black beans, drained", "juice ' lime", "' ripe avocado, peeled and sliced", "50g feta, crumbled", "hot chilli sauce (we like sriracha)"],
            "cook_steps": ["Heat the oil in a frying pan over a high heat. Add the tortilla and fry for 1-2 mins on each side until crisping at the edges. Transfer to a plate.", "Crack the egg into the pan and cook to your liking. Meanwhile, tip the beans into a bowl, season and add a squeeze of lime, then lightly mash with a fork.", "Spread the beans over the tortilla, top with the egg, avocado, feta and chilli sauce. Squeeze over a little more lime juice just before eating."],
            "link_img": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/easy-huevos-rancheros-38e94de.jpg"
        },
        {
            "name": "Vegetarian chilli",
            "cal": 608,
            "ingredients": ["vegetables", "chilli sauce", "tomatoes", "mixed grain pouch"],
            "prepare_steps": ["400g pack oven-roasted vegetables", "1 can kidney beans in chilli sauce", "1 can chopped tomatoes", "1 ready-to-eat mixed grain pouch"], 
            "cook_steps": ["Heat oven to 200C/180C fan/ gas 6. Cook the vegetables in a casserole dish for 15 mins. Tip in the beans and tomatoes, season, and cook for another 10-15 mins until piping hot. Heat the pouch in the microwave on High for 1 min and serve with the chilli."],
            "link_img": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/veggie-chilli-4a57c04.jpg"
        },
        {
            "name": "Easy rocky road",
            "cal": 320,
            "ingredients": ["biscuits", "butter", "chocolate", "syrup", "marshmallows", "sugar", "fruit", "nuts", "popcorn", "honeycomb"],
            "prepare_steps": ["200g digestive biscuits (Rich Tea can also be used)", "135g butter or margarine", "200g dark chocolate (70% cocoa works best)", "2-3 tbsp golden syrup", "100g mini marshmallows (chopped regular marshmallows work too)", "icing sugar, to dust", "Optional (up to 100g)", "raisins, dried cranberries or any dried fruit", "nuts", "popcorn", "honeycomb, broken into pieces"],
            "cook_steps": ["Grease and line an 18cm square brownie tin with baking paper.", "Place 200g digestive biscuits in a freezer bag and bash with a rolling pin or just the side of your fist until they're broken into a mixture of everything between dust and 50p-sized lumps. Set aside.", "In a large saucepan melt 135g butter or margarine, 200g dark chocolate and 2-3 tbsp golden syrup over a gentle heat stirring constantly until there are no or almost no more lumps of chocolate visible, then remove from the heat. Leave to cool.", "Take the biscuits, 100g mini marshmallows and up to 100g of additional ingredients (dried fruit, nuts, popcorn, honeycomb), if you like, and stir into the chocolate mixture until everything is completely covered.", "Tip the mixture into the lined baking tin, and spread it out to the corners. Chill for at least 2 hrs then dust with icing sugar and cut into 12 fingers."],
            "link_img": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/easy-rocky-road-13bd3fb.jpg"
        },
        {
            "name": "Easy chicken tagine",
            "cal": 304,
            "ingredients": ["oil", "chicken", "onion", "ginger", "saffron", "honey", "carrot", "parsley", "lemon"],
            "prepare_steps": ["2 tbsp olive oil", "8 skinless boneless chicken thighs, halved if large", "1 onion, chopped", "2 tsp grated fresh root ginger", "pinch saffron or tumeric", "1 tbsp honey", "400g carrot, cut into sticks", "small bunch parsley, roughly chopped", "lemon wedges, to serve"],
            "cook_steps": ["Heat the oil in a large, wide pan with a lid, add the chicken, then fry quickly until lightly coloured. Add the onion and ginger, then fry for a further 2 mins.", "Add 150ml water, the saffron, honey and carrots, season, then stir well. Bring to the boil, cover tightly, then simmer for 30 mins until the chicken is tender. Uncover and increase the heat for about 5 mins to reduce the sauce a little. Sprinkle with parsley and serve with lemon wedges for squeezing over."],
            "link_img": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-52383_11-427dca7.jpg"
        }
    ]
)

// add some sample data 
db.Ingredients.insertMany(
    [
        {
            "id": 1,
            "name": "chicken egg",
            "cal": 155,
            "link_img": "https://upload.wikimedia.org/wikipedia/commons/5/5e/Chicken_egg_2009-06-04.jpg"
        },
        {
            "id": 2,
            "name": "duck egg",
            "cal": 185,
            "link_img": "https://5.imimg.com/data5/HO/MU/IV/SELLER-13871848/duck-eggs-500x500.jpg"
        },
        {
            "id": 3,
            "name": "peef",
            "cal": 250.5,
            "link_img": "https://hanoismallgoods.com/wp-content/uploads/2021/05/beef-cheek-2.jpg"
        },
        {
            "id": 4,
            "name": "pork",
            "cal": 242.1,
            "link_img": "https://i0.wp.com/hanoismallgoods.com/wp-content/uploads/2021/05/pork-chops-loin.jpg"
        },
        {
            "id": 5,
            "name": "oil",
            "cal": 884.1,
            "link_img": "https://cdn-prod.medicalnewstoday.com/content/images/articles/324/324844/cooking-oil-being-poured-into-a-bowl.jpg"
        },
        {
            "id": 6,
            "name": "onion",
            "cal": 39.7,
            "link_img": "https://dictionary.cambridge.org/vi/images/thumb/onion_noun_001_11239.jpg?version=5.0.203"
        },
        {
            "id": 7,
            "name": "garlic",
            "cal": 149,
            "link_img": "https://dictionary.cambridge.org/vi/images/thumb/garlic_noun_002_15463.jpg?version=5.0.203"
        },
        {
            "id": 8,
            "name": "chorizo",
            "cal": 455,
            "link_img": "https://upload.wikimedia.org/wikipedia/commons/3/3f/Palacioschorizo.jpg"
        },
        {
            "id": 9,
            "name": "tomatoes",
            "cal": 18,
            "link_img": "https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg"
        },
        {
            "id": 10,
            "name": "sugar",
            "cal": 387,
            "link_img": "https://1.bp.blogspot.com/-vg93ooJdZr8/XhYcsMiWbtI/AAAAAAAAB8k/jO-UA3qtanU4_jj5Va_UQth5PD6WjJtGgCLcBGAsYHQ/s640/sugar-la-gi.jpg"
        },
        {
            "id": 11,
            "name": "gnocchi",
            "cal": 201,
            "link_img": "https://images.immediate.co.uk/production/volatile/sites/30/2017/03/Gnoochi-d7df2ce.png?quality=90&resize=556,505"
        },
        {
            "id": 12,
            "name": "mozzarella",
            "cal": 300,
            "link_img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Mozzarella_di_bufala3.jpg/1200px-Mozzarella_di_bufala3.jpg"
        },
        {
            "id": 13,
            "name": "basil",
            "cal": 24,
            "link_img": "https://cdn.huongnghiepaau.com/wp-content/uploads/2017/11/814c5fa8cc246f42c53a91bddf076dee.jpg"
        },
        {
            "id": 14,
            "name": "chicken",
            "cal": 220,
            "link_img": "https://vcdn-vnexpress.vnecdn.net/2017/03/22/chicken-9447-1490180692.jpg"
        },
        {
            "id": 15,
            "name": "lemon",
            "cal": 29,
            "link_img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Lemon.jpg/1024px-Lemon.jpg"
        },
        {
            "id": 16,
            "name": "ground cumin",
            "cal": 375,
            "link_img": "https://www.thespruceeats.com/thmb/N1-iws_Li3liPBd6_4XT0P8cV4Y=/2500x1406/smart/filters:no_upscale()/cumin-2500-56a20f715f9b58b7d0c623f6.jpg"
        },
        {
            "id": 17,
            "name": "paprika",
            "cal": 282,
            "link_img": "https://cdn.tgdd.vn/Files/2020/05/16/1255848/paprika-la-gi-paprika-net-dac-trung-cua-nen-am-th-8-760x367.jpg"
        },
        {
            "id": 18,
            "name": "hot chilli powder",
            "cal": 282,
            "link_img": "https://sc04.alicdn.com/kf/UTB8Fk_dn22JXKJkSanrq6y3lVXaN.jpg"
        },
        {
            "id": 19,
            "name": "yogurt",
            "cal": 63,
            "link_img": "https://cdn.dayphache.edu.vn/wp-content/uploads/2021/03/greek-yogurt.jpg"
        },
        {
            "id": 20,
            "name": "green chilli",
            "cal": 29,
            "link_img": "https://images.indianexpress.com/2019/11/green-chilli_759.jpg"
        },
        {
            "id": 21,
            "name": "ginger",
            "cal": 80,
            "link_img": "https://images.immediate.co.uk/production/volatile/sites/30/2013/06/ginger-80e324d-scaled.jpg"
        },
        {
            "id": 22,
            "name": "garam masala",
            "cal": 316,
            "link_img": "https://www.seriouseats.com/thmb/APGQ6U0skixhhPWa1l--Ofzkc9I=/1500x844/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__04__20150402-garam-masala-2879a150647d4403bdc0645e71a2ae0a.jpg"
        },
        {
            "id": 23,
            "name": "ground fenugreek",
            "cal": 323,
            "link_img": "https://thesourcebulkfoods.com.au/wp-content/uploads/2019/05/Ground-Fenugreek-1.jpg"
        },
        {
            "id": 24,
            "name": "tomato pure ",
            "cal": 38,
            "link_img": "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2021%2F04%2F13%2FGettyImages-1127120944-2-2000.jpg"
        },
        {
            "id": 25,
            "name": "chicken stock ",
            "cal": 36,
            "link_img": "https://www.spendwithpennies.com/wp-content/uploads/2017/12/How-to-Make-Chicken-Stock-21-500x500.jpg"
        },
        {
            "id": 26,
            "name": "almonds",
            "cal": 598,
            "link_img": "https://www.ofi.com/content/dam/olamofi/products-and-ingredients/nuts/nuts-images/almonds-processing.jpg"
        },
        {
            "id": 27,
            "name": "rice",
            "cal": 130,
            "link_img": "https://media.istockphoto.com/photos/rice-in-a-bowl-on-a-white-background-picture-id860931464?k=20&m=860931464&s=612x612&w=0&h=Q5ADqpZbQbVzm3YkNwbyhn023S64em9w08O0xg0b0KE="
        },
        {
            "id": 28,
            "name": "naan bread",
            "cal": 130,
            "link_img": "https://hips.hearstapps.com/amv-prod-tpw.s3.amazonaws.com/wp-content/uploads/2020/05/Sourdough-Naan-Bread-01.jpg"
        },
        {
            "id": 29,
            "name": "mango chutney",
            "cal": 196,
            "link_img": "https://www.simplyrecipes.com/thmb/nAuodqCn_xVyOfRCuqIwQ-j1izo=/2000x1333/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2007__05__mango-chutney-horiz-a-2000-2b99607680ef4c0fb0dcd470d158982d.jpg"
        },
        {
            "id": 30,
            "name": "prawns",
            "cal": 119,
            "link_img": "https://static.toiimg.com/thumb/75455296.cms?width=573&height=430"
        },
        {
            "id": 31,
            "name": "coriander",
            "cal": 278,
            "link_img": "https://vieclamdaubep.vn/wp-content/uploads/2018/11/coriander-mot-loai-rau-thom.jpg"
        },
        {
            "id": 32,
            "name": "celery",
            "cal": 16,
            "link_img": "https://thienkhoigarden.com/wp-content/uploads/2021/02/Loi-Ich-Suc-Khoe-Cua-Can-Tay-Celery.jpg"
        },
        {
            "id": 33,
            "name": "carrot",
            "cal": 35,
            "link_img": "https://luxuryfoods.vn/wp-content/uploads/2020/12/unnamed-1-1.jpg"
        },
        {
            "id": 34,
            "name": "honey",
            "cal": 304,
            "link_img": "https://sc04.alicdn.com/kf/U88d7b6ef0559496c900bae52bb7fa32fd.jpg"
        },
        {
            "id": 35,
            "name": "egg lasagne sheets",
            "cal": 370,
            "link_img": "https://www.manicaretti.com/images/products/pasta/rda-egg-pastas/rda-egg-lasagne/rda-egg-lasagne-pasta-only.jpg"
        },
        {
            "id": 36,
            "name": "cr'me fra'che",
            "cal": 401,
            "link_img": "https://dairyfarmersofcanada.ca/sites/default/files/styles/recipe_image/public/image_file_browser/conso_recipe/creme-fraiche.jpg.jpeg?itok=rY9Ns92o"
        },
        {
            "id": 37,
            "name": "parmesan ",
            "cal": 420,
            "link_img": "https://cdn.cet.edu.vn/wp-content/uploads/2019/04/parmesan-la-gi.jpg"
        },
        {
            "id": 38,
            "name": "soy sauce",
            "cal": 53,
            "link_img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Soy_sauce_2.jpg/220px-Soy_sauce_2.jpg"
        },
        {
            "id": 39,
            "name": "wine vinegar",
            "cal": 19,
            "link_img": "https://m.media-amazon.com/images/I/611U11RxJhL._SL1500_.jpg"
        },
        {
            "id": 40,
            "name": "sesame seeds",
            "cal": 565,
            "link_img": "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2021/03/GettyImages-56660763_header-1024x575.jpg?w=1155&h=1528"
        },
        {
            "id": 41,
            "name": "sticky rice",
            "cal": 136,
            "link_img": "https://thewoksoflife.com/wp-content/uploads/2019/04/how-to-make-sticky-rice-7.jpg"
        },
        {
            "id": 42,
            "name": "spring greens",
            "cal": 28,
            "link_img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0hK6TBpNzVRxudbZlCQaQNVhwL4y4J3SRBX1YyKAA4SiWSJZv-LrK4ZZX9ysA6dkV8Io&usqp=CAU"
        },
        {
            "id": 43,
            "name": "pineapple ",
            "cal": 50,
            "link_img": "https://vcdn-vnexpress.vnecdn.net/2017/03/09/pineapple-1268-1489051642.jpg"
        },
        {
            "id": 44,
            "name": "Thai green curry paste",
            "cal": 107,
            "link_img": "https://www.recipetineats.com/wp-content/uploads/2019/02/Homemade-Thai-Green-Curry-Paste_3.jpg"
        },
        {
            "id": 45,
            "name": "peas",
            "cal": 84,
            "link_img": "https://upload.wikimedia.org/wikipedia/commons/1/11/Peas_in_pods_-_Studio.jpg"
        },
        {
            "id": 46,
            "name": "bamboo shoots",
            "cal": 19,
            "link_img": "https://post.healthline.com/wp-content/uploads/2021/05/bamboo-shoots-shoot-food-1200x628-facebook.jpg"
        },
        {
            "id": 47,
            "name": "lime",
            "cal": 30,
            "link_img": "https://dictionary.cambridge.org/vi/images/thumb/lime_noun_002_21260.jpg?version=5.0.203"
        },
        {
            "id": 48,
            "name": "flour",
            "cal": 364,
            "link_img": "https://www.world-grain.com/ext/resources/Article-Images/2020/11/Milling-Ops_Flour-microbiology-challenges-and-observations_Flour-with-wheat_Adobe-stock_E.jpg?t=1606316349&width=1080"
        },
        {
            "id": 49,
            "name": "cocoa powder",
            "cal": 410,
            "link_img": "https://trongduccacao.vn/files/upload/tin-tuc/dac-diem-va-thanh-phan-cua-bot-cacao-01.jpg"
        },
        {
            "id": 50,
            "name": "baking soda",
            "cal": 0,
            "link_img": "https://cdn.tgdd.vn/2020/07/CookProduct/4-1200x676-1200x676-2.jpg"
        },
        {
            "id": 51,
            "name": "syrup",
            "cal": 265,
            "link_img": "http://cdn.tgdd.vn/Files/2020/07/22/1272775/syrup-la-gi-cac-loai-syrup-pho-bien-nhat-trong-cac-cong-thuc-pha-che-do-uong-202007221429256968.jpg"
        },
        {
            "id": 52,
            "name": "milk",
            "cal": 50,
            "link_img": "https://lh3.googleusercontent.com/proxy/w1Sk7RxcyAjUI4QmYkCqEn8gKH78vPwkSMb1bWVPypLOS9kSA1GIA5Zh3ys5O7HqC_ByrY9LOGGU1zCoNfm5JNP4dS-bvs6epL_lmpmkhg"
        },
        {
            "id": 53,
            "name": "unsalted butter",
            "cal": 717,
            "link_img": "http://hoahocmypham.com/wp-content/uploads/2018/03/Butter-Benefits.jpg"
        },
        {
            "id": 54,
            "name": "spaghetti ",
            "cal": 150,
            "link_img": "https://monngonmoingay.com/wp-content/uploads/2016/11/MiSpaghettiXotChay-540.jpg"
        },
        {
            "id": 55,
            "name": "fennel",
            "cal": 31,
            "link_img": "https://thienkhoigarden.com/wp-content/uploads/2020/12/Cac-Loai-Thi-La-Fennel.jpg"
        },
        {
            "id": 56,
            "name": "sobrasada paste",
            "cal": 666,
            "link_img": "https://149366112.v2.pressablecdn.com/wp-content/uploads/2016/07/sobrasada-spread.jpg"
        },
        {
            "id": 57,
            "name": "nduja",
            "cal": 518,
            "link_img": "https://upload.wikimedia.org/wikipedia/commons/d/df/Nduja_mit_Brot.jpg"
        },
        {
            "id": 58,
            "name": "olives",
            "cal": 25,
            "link_img": "https://www.thespruceeats.com/thmb/EjtuFRbnVm0G78jkeT5YHWgo2JY=/1517x1517/smart/filters:no_upscale()/greenolives-5a85e5dfa18d9e0037a56ce5.jpg"
        },
        {
            "id": 60,
            "name": "pecorino",
            "cal": 300,
            "link_img": "https://product.hstatic.net/1000282430/product/pecorino-romano-cheese_d16bb298915a4cc4a05dbddb6ee767b2_large.jpg"
        },
        {
            "id": 61,
            "name": "red onion",
            "cal": 0,
            "link_img": "https://m.media-amazon.com/images/I/71sRtyZtRLL._SL1500_.jpg"
        },
        {
            "id": 62,
            "name": "red pepper",
            "cal": 28,
            "link_img": "https://www.ikija.com/wp-content/uploads/2020/07/RED-BELL-PEPPER.jpg"
        },
        {
            "id": 63,
            "name": "red chilli",
            "cal": 118,
            "link_img": "https://sc04.alicdn.com/kf/Ufe712ed1f6b5485baddab5aa5c08bbb7Y.jpg"
        },
        {
            "id": 64,
            "name": "tabasco",
            "cal": 11,
            "link_img": "https://product.hstatic.net/1000282430/product/upload_43b61cc6a38d44a6867b92913a625f7b_large.jpg"
        },
        {
            "id": 65,
            "name": "tortilas",
            "cal": 295,
            "link_img": "https://vn-test-11.slatic.net/p/67d1061d94d6581ff5e41753e946c648.jpg"
        },
        {
            "id": 66,
            "name": "salsa",
            "cal": 29,
            "link_img": "https://cdn.loveandlemons.com/wp-content/uploads/2020/09/salsa-500x375.jpg"
        },
        {
            "id": 67,
            "name": "Vanilla Extract",
            "cal": 288,
            "link_img": "https://www.simplyrecipes.com/thmb/XDgYN1D8em5dMn-WWNzhdtaznYU=/3741x2494/filters:no_upscale():max_bytes(150000):strip_icc()/Vanilla-Extract-LEAD-3_RECIRC-bee6cdd807f840a1b3da204e9eb948dc.jpg"
        },
        {
            "id": 68,
            "name": "orange",
            "cal": 49,
            "link_img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Ambersweet_oranges.jpg/1200px-Ambersweet_oranges.jpg"
        },
        {
            "id": 69,
            "name": "Muscovado",
            "cal": 400,
            "link_img": "https://sc04.alicdn.com/kf/U8cb104f0174d461c979c566a5904c0ddY.jpg"
        },
        {
            "id": 70,
            "name": "cinnamon",
            "cal": 247,
            "link_img": "https://nghebep.com/wp-content/uploads/2018/06/cinnamon-la-gi-1.jpg"
        },
        {
            "id": 71,
            "name": "nutmeg",
            "cal": 525,
            "link_img": "http://chefjob.vn/wp-content/uploads/2020/07/nutmeg-la-nhuc-dau-khau.jpg"
        },
        {
            "id": 72,
            "name": "sultanas",
            "cal": 302,
            "link_img": "https://bornstate.com.au/wp-content/uploads/sultanas.jpg"
        },
        {
            "id": 73,
            "name": "walnuts",
            "cal": 654,
            "link_img": "https://cf.shopee.vn/file/5e7b842c360b2d2b753e2d1694509bbd"
        },
        {
            "id": 74,
            "name": "salted butter",
            "cal": 717,
            "link_img": "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F05%2F14%2Fbutter-on-blue-cloth-photo-by-littleny-GettyImages-506715010-resized.jpg"
        },
        {
            "id": 75,
            "name": "cheese",
            "cal": 404,
            "link_img": "https://cdn.huongnghiepaau.com/wp-content/uploads/2017/12/05956f3d84fecaec4433f74b2cec5d39.jpg"
        },
        {
            "id": 76,
            "name": "spice paste",
            "cal": 196,
            "link_img": "http://kelliesfoodtoglow.com/wp-content/uploads/2013/04/dsc_0055.jpg?w=630"
        },
        {
            "id": 77,
            "name": "Greek yogurt",
            "cal": 59,
            "link_img": "https://reviewchuan.vn/wp-content/uploads/2021/05/Greek-Yogurt-Nestle-1.jpg"
        },
        {
            "id": 78,
            "name": "pork sausage",
            "cal": 325,
            "link_img": "https://meatworksasia.com/wp-content/uploads/2021/08/BRATWURST-PORK-SAUSAGE.jpg"
        },
        {
            "id": 79,
            "name": "oregano",
            "cal": 265,
            "link_img": "http://cdn.tgdd.vn/Files/2020/11/18/1307585/la-oregano-la-gi-cong-dung-va-cach-su-dung-la-oregano-202011181345271796.jpg"
        },
        {
            "id": 80,
            "name": "bread crumb",
            "cal": 395,
            "link_img": "https://www.jessicagavin.com/wp-content/uploads/2019/02/how-to-make-breadcrumbs-6-1200.jpg"
        },
        {
            "id": 81,
            "name": "courgette",
            "cal": 15,
            "link_img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrZr6fX4PDXbNJoKIZcjEwW-mhQVNYkdQsqBz_O-1agyPBXgcZ_ZawU9-fD_j1zc5TM1A&usqp=CAU"
        },
        {
            "id": 82,
            "name": "bean",
            "cal": 127,
            "link_img": "https://cdn.tgdd.vn/Files/2019/10/20/1210645/mung-bean-la-gi-nhung-loi-ich-va-luu-y-khi-su-dung-mung-bean-201910202124347331.jpg"
        },
        {
            "id": 83,
            "name": "Worcestershire sauce",
            "cal": 78,
            "link_img": "https://m.media-amazon.com/images/I/71uxbKo6PlL._SX425_.jpg"
        },
        {
            "id": 84,
            "name": "parsley",
            "cal": 36,
            "link_img": "https://cdn.huongnghiepaau.com/wp-content/uploads/2019/01/Parsley-la-gi.jpg"
        },
        {
            "id": 85,
            "name": "sweet potatoes",
            "cal": 90,
            "link_img": "https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Sweet-potatoes-ca0d8f4.jpg?quality=90&resize=661%2C600"
        },
        {
            "id": 86,
            "name": "Piri Piri Seasoning",
            "cal": 295,
            "link_img": "https://m.media-amazon.com/images/I/61Feb9JAMmL._SL1000_.jpg"
        },
        {
            "id": 87,
            "name": "broccoli",
            "cal": 35,
            "link_img": "https://meatworksasia.com/wp-content/uploads/2021/08/BROCCOLI.jpg"
        },
        {
            "id": 88,
            "name": "mincemeat",
            "cal": 302,
            "link_img": "https://images.immediate.co.uk/production/volatile/sites/30/2009/10/mincemeat-856b31b.jpg"
        },
        {
            "id": 89,
            "name": "passata ",
            "cal": 22,
            "link_img": "https://salt.tikicdn.com/cache/w1200/ts/product/d3/46/56/977dd96d0c724063cd96e9391bb5ed13.jpg"
        },
        {
            "id": 90,
            "name": "aubergine ",
            "cal": 35,
            "link_img": "https://images.ctfassets.net/6jpeaipefazr/1q3zcvQrYzfDakrHweU9AB/b8c1e26a8f0756e7d1066a36ba743e84/Aubergine.jpg"
        },
        {
            "id": 91,
            "name": "ricotta ",
            "cal": 138,
            "link_img": "https://cdn.tgdd.vn/2020/09/CookProduct/pho-mai-ricotta-la-gi-cach-lam-pho-mai-ricotta-don-gian-tai-thumbCN-1200x676.jpg"
        },
        {
            "id": 92,
            "name": "mint",
            "cal": 394,
            "link_img": "https://www.thespruce.com/thmb/rRTxXlu4eAFk1hWSOuOhQwKXBk8=/2138x2138/smart/filters:no_upscale()/growing-mint-1402628-closeup-d55f829e9b4d487d942a2edec4343eab.jpg"
        },
        {
            "id": 93,
            "name": "tortilla wrap",
            "cal": 325,
            "link_img": "https://www.sprinklesandsprouts.com/wp-content/uploads/2016/03/Flour-Tortilla2.jpg"
        },
        {
            "id": 94,
            "name": "avocado",
            "cal": 160,
            "link_img": "https://learnenglishteens.britishcouncil.org/sites/teens/files/styles/article/public/rs7776_thinkstockphotos-856586464_1-low.jpg?itok=zHdfQ6Ij"
        },
        {
            "id": 95,
            "name": "feta",
            "cal": 264,
            "link_img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Feta_Cheese.jpg/1200px-Feta_Cheese.jpg"
        },
        {
            "id": 96,
            "name": "vegetables",
            "cal": 65,
            "link_img": "https://hoclaixecaptoc.com/wp-content/uploads/2018/11/vegetable-l%C3%A0-g%C3%AC.jpg"
        },
        {
            "id": 97,
            "name": "chilli sauce",
            "cal": 239,
            "link_img": "https://angonstore.vn/img/p/sot-ot-heinz-chilli-sauce-300g-thai-lan-p390.jpg"
        },
        {
            "id": 98,
            "name": "mixed grain powder",
            "cal": 360,
            "link_img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu-WtSt9e2v2FzOPy2BmaxLSRt1jRknxiuDoLI_eayEUPSfmVQRrDJDkWv1SaVDl3633s&usqp=CAU"
        },
        {
            "id": 99,
            "name": "biscuits",
            "cal": 353,
            "link_img": "https://img.taste.com.au/4tQ4G3W8/taste/2020/04/may20_ginger-spiced-biscuits-with-lemon-drizzle-160744-1.jpg"
        },
        {
            "id": 100,
            "name": "chocolate",
            "cal": 535,
            "link_img": "http://imgs.vietnamnet.vn/Images/2016/03/10/17/20160310171840-socola.jpg"
        },
        {
            "id": 101,
            "name": "marshmallow",
            "cal": 318,
            "link_img": "https://cdn.tgdd.vn/2021/03/content/19-800x500-2.jpg"
        },
        {
            "id": 102,
            "name": "fruit",
            "cal": 59,
            "link_img": "https://vcdn1-vnexpress.vnecdn.net/2015/07/11/fruit-image-4717-1436585539.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=LNT284FboSe4wyC1yAaVjw"
        },
        {
            "id": 103,
            "name": "popcorn",
            "cal": 557,
            "link_img": "https://www.simplyrecipes.com/thmb/nbVlRHaiditISFfsrwnYm-j5094=/1264x1264/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2015__01__perfect-popcorn-vertical-b-1800-b6948302f0f1460a93eb9d4d73623831.jpg"
        },
        {
            "id": 104,
            "name": "honeycomb",
            "cal": 394,
            "link_img": "https://storage.ettip.com/Upload/Images/Vocabulary/Official/1811.png"
        },
        {
            "id": 105,
            "name": "saffron",
            "cal": 310,
            "link_img": "https://channel.mediacdn.vn/thumb_w/640/2021/7/7/photo-1-1625653610969237928564.jpg"
        }
    ]
)
