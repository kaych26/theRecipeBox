# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Recipe.destroy_all
Category.destroy_all
User.destroy_all

@user = User.create(username:"a", email: "a@m.com", password: "123456")
# User.create(username:"admin", email: "admin@mail.com", password: "123456")
p "#{User.count} user(s) created"


@dinner = Category.create!(group: "dinner", image: "https://images-gmi-pmc.edge-generalmills.com/7d6f3a8e-2eca-4c61-8988-489b40546395.jpg", group_id: "1")
@dessert = Category.create!(group: "dessert", image: "https://www.dairyfoods.com/ext/resources/DF/2019/September/desserts/dfx0919-Outlook-img-open.jpg", group_id: "2")

p "#{Category.count} category created"

@r1 = Recipe.create!(
  name:"Sesame Ginger Salmon", 
  image:"https://s23209.pcdn.co/wp-content/uploads/2013/11/IMG_6429edit-360x360.jpg",
  prep_time: "2 hours", 
  ingredient: "1/4 cup olive oil
  2 tablespoons soy sauce
  2 tablespoons rice vinegar
  2 tablespoons sesame oil
  2 tablespoons brown sugar
  2 cloves garlic, pressed
  1 tablespoon grated fresh ginger
  1 tablespoon sesame seeds
  4 green onions, thinly sliced
  4 (5-ounce) salmon filets
  FOR THE HONEY GINGER GLAZE
  2 tablespoons honey
  1 teaspoon soy sauce
  1 teaspoon sesame oil
  1/2 teaspoon Sriracha, or more, to taste
  1/2 teaspoon grated fresh ginger
  1/2 teaspoon sesame seeds",
direction: "DIRECTIONS:
To make the glaze, whisk together honey, soy sauce, sesame oil, Sriracha, ginger and sesame seeds in a small bowl; set aside.
In a medium bowl, whisk together olive oil, soy sauce, rice vinegar, sesame oil, brown sugar, garlic, ginger, sesame seeds and green onions.
In a gallon size Ziploc bag or large bowl, combine ginger marinade and salmon filets; marinate for at least 30 minutes to overnight, turning the bag occasionally.
Preheat oven to 400 degrees F. Lightly coat a 9×13 baking dish with nonstick spray.
Place salmon filets along with the marinade onto prepared baking dish and bake until the fish flakes easily with a fork, about 20 minutes.
Serve salmon immediately with honey ginger glaze.", 
group_id: "1", user_id: @user, category_id: @dinner)

@r2 = Recipe.create!(
  name:"Grandma's Beef Stew", 
  image:"https://www.kroger.com/asset/594048c7bae8a2517539b915?data=1",
  prep_time: "2 hours", 
  ingredient: "2 lbs. stewing beef, cut into cubes
  1 tsp. salt
  ¼ tsp. freshly ground black pepper
  ¼ cup shortening
  4 cups boiling water
  1 Tbsp. lemon juice
  1 Tbsp. Worcestershire sauce
  1 tsp. sugar
  1 large onion, peeled and sliced
  2 bay leaves
  ¼ tsp. allspice
  12 small carrots, peeled and coarsely chopped
  8 small white onions, trimmed, peeled, and halved
  8 small new potatoes, peeled and coarsely chopped", 
direction: "Season the beef with salt and pepper. In a soup pot, melt the shortening on high heat. When the fat is very hot, add as many of the beef cubes to the pan as you can without crowding them, and brown on all sides; remove with a slotted spoon and set aside; repeat this process until all the beef is browned. Return all the meat to the soup pot and add the boiling water. Stir in the lemon juice, Worcestershire sauce, sugar, onion, bay leaves, and allspice. Reduce the heat to low, cover, and simmer for about 2 hours, until the meat is tender.", story: "I am Annie and I enjoy cooking. Add the carrots, onions, and potatoes; cover and cook for about 20 to 25 minutes, until the vegetables can be pierced easily with a fork. Discard the bay leaves before serving.", 
group_id: "1", user_id: @user, category_id: @dinner)

@r3 = Recipe.create!(
  name:"Simple Cajun Butter Chicken", 
  image:"https://cafedelites.com/wp-content/uploads/2019/09/HERO-Cajun-Butter-Chicken-Breasts-1.jpg",
  prep_time: "2 hours", 
  ingredient: "For Cajun Seasoning:
  2 teaspoons brown sugar KETO: use brown sugar substitute
  1 1/2 teaspoons mild paprika
  1 teaspoon dried oregano
  1 teaspoon salt
  1/2 teaspoon each garlic powder and onion powder
  1/2 teaspoon each chili powder and cayenne pepper, add more if you like heat
  1/4 teaspoon cracked black pepper to taste
  For Chicken:
  2 large chicken breasts (8-11oz | 250-300g each), sliced horizontally in half to make 4 steaks
  1 1/2 tablespoons canola oil, divided
  1/4 cup butter
  4 cloves garlic, finely chopped
  1/2 cup low sodium chicken stock/broth", 
direction: "Combine cajun seasoning ingredients and toss chicken in the seasoning. Drizzle with 1/2 tablespoon of oil and rub seasoning all over to evenly coat. 
Heat remaining oil and 1 tablespoon butter in a skillet or pan over medium-high heat until combined and hot.
Sear chicken in batches for 5-7 minutes each side until golden or internal temperature is 165°F / 75°C using a meat thermometer. Remove from pan; set aside to rest for 5 minutes.
While chicken is resting, make the sauce.
Reduce heat to medium. Melt remaining butter in the pan. Sauté garlic until fragrant (about 30 seconds), while scraping up any browned bits from the pan. Pour in the broth and let reduce for 2-3 minutes, while stirring occasionally.
Take the pan off the heat. Drizzle sauce over the chicken. Serve warm..", 
group_id: "1", user_id: @user, category_id: @dinner)

@r4 = Recipe.create!(
  name:"Mango Cheesecake", 
  image:"https://assets.epicurious.com/photos/57b208990e4be0011c1bf088/6:4/w_620%2Ch_413/mango-cheesecake.jpg",
  prep_time: "1 hour", 
  ingredient: "Crust
  1 1/2 cups graham cracker crumbs
  1/2 cup sugar
  6 tablespoons (3/4 stick) unsalted butter, melted
  Filling
  3 large very ripe mangoes (each about 13 ounces), peeled, pitted, coarsely chopped
  3 8-ounce packages cream cheese, room temperature
  1 1/4 cups sugar
  2 teaspoons vanilla extract
  4 large eggs
  Sliced peeled pitted mangoes", 
direction: "For crust:
Preheat oven to 325°F. Lightly butter 9-inch-diameter springform pan with 2 3/4-inch-high sides. Stir cracker crumbs and sugar in medium bowl to blend. Add melted butter and stir until evenly moistened. Press crumb mixture firmly onto bottom (not sides) of prepared pan. Bake until crust is set, about 12 minutes. Cool completely. Maintain oven temperature.
For filling:
Puree mangoes in processor until smooth. Set aside 2 cups mango puree (reserve any remaining puree for another use). Beat cream cheese, sugar, and vanilla in large bowl until smooth. Add eggs 1 at a time, beating well after each addition. Add 2 cups mango puree and beat until well blended. Pour filling over crust in pan.
Bake cake until set and puffed and golden around edges (center may move very slightly when pan is gently shaken), about 1 hour 25 minutes. Cool cake 1 hour. Refrigerate uncovered overnight. Run small knife between cake and sides of pan to loosen. Remove pan sides. Transfer cake to platter. Cut into wedges and serve with sliced mangoes.", 
group_id: "2", user_id: @user, category_id: @dessert)

@r5 = Recipe.create!(
  name:"French Macaron", 
  image:"https://preppykitchen.com/wp-content/uploads/2020/04/French-Macarons-feature-1200-768x1088.jpg",
  prep_time: "1 hour", 
  ingredient: "MACARONS

  1 ¾ cups powdered sugar
  1 cup almond flour, finely ground
  1 teaspoon salt, divided
  3 egg whites, at room temperature
  ¼ cup granulated sugar
  ½ teaspoon vanilla extract
  2 drops pink gel food coloring
  VANILLA BUTTERCREAM
  
  1 cup unsalted butter, 2 sticks, at room temperature
  3 cups powdered sugar
  1 teaspoon vanilla extract
  3 tablespoons heavy cream
  ", 
direction: "Make the macarons: In the bowl of a food processor, combine the powdered sugar, almond flour, and ½ teaspoon of salt, and process on low speed, until extra fine. Sift the almond flour mixture through a fine-mesh sieve into a large bowl.
In a separate large bowl, beat the egg whites and the remaining ½ teaspoon of salt with an electric hand mixer until soft peaks form. Gradually add the granulated sugar until fully incorporated. Continue to beat until stiff peaks form (you should be able to turn the bowl upside down without anything falling out).
Add the vanilla and beat until incorporated. Add the food coloring and beat until just combined.
Add about ⅓ of the sifted almond flour mixture at a time to the beaten egg whites and use a spatula to gently fold until combined. After the last addition of almond flour, continue to fold slowly until the batter falls into ribbons and you can make a figure 8 while holding the spatula up.
Transfer the macaron batter into a piping bag fitted with a round tip.
Place 4 dots of the batter in each corner of a rimmed baking sheet, and place a piece of parchment paper over it, using the batter to help adhere the parchment to the baking sheet.
Pipe the macarons onto the parchment paper in 1½-inch (3-cm) circles, spacing at least 1-inch (2-cm) apart.
Tap the baking sheet on a flat surface 5 times to release any air bubbles.
Let the macarons sit at room temperature for 30 minutes to 1 hour, until dry to the touch.
Preheat the oven to 300˚F (150˚C).
Bake the macarons for 17 minutes, until the feet are well-risen and the macarons don’t stick to the parchment paper.
Transfer the macarons to a wire rack to cool completely before filling.
Make the buttercream: In a large bowl, add the butter and beat with a mixer for 1 minute until light and fluffy. Sift in the powdered sugar and beat until fully incorporated. Add the vanilla and beat to combine. Add the cream, 1 tablespoon at a time, and beat to combine, until desired consistency is reached.
Transfer the buttercream to a piping bag fitted with a round tip.
Add a dollop of buttercream to one macaron shell. Top it with another macaron shell to create a sandwich. Repeat with remaining macaron shells and buttercream.
Place in an airtight container for 24 hours to “bloom”.
Enjoy!", 
group_id: "2", user_id: @user, category_id: @dessert)

p "#{Recipe.count} recipes created"


