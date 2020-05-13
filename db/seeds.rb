# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User.destroy_all
#Recipe.destroy_all
# Category.destroy_all

User.create(username:"a", email: "a@m.com", password: "123456")
User.create(username:"admin", email: "admin@mail.com", password: "123456")
p "#{User.count} user(s) created"


dinner = Category.create(group: "dinner", subgroup: "dinner", image: "https://images-gmi-pmc.edge-generalmills.com/7d6f3a8e-2eca-4c61-8988-489b40546395.jpg")
dessert = Category.create(group: "dessert", subgroup: "dessert", image: "https://www.dairyfoods.com/ext/resources/DF/2019/September/desserts/dfx0919-Outlook-img-open.jpg")

p "#{Category.count} category created"


chicken = Recipe.create(
  name:"Sesame Ginger Salomon", 
  image:"./assets/images/dinner_img/sesame_ginger_salmon.png",
  prep_time: "1 hour", 
  ingredient: "1/4 cup olive oil
2 tablespoons soy sauce
2 tablespoons rice vinegar
2 tablespoons sesame oil
2 tablespoons brown sugar
2 cloves garlic, pressed
1 tablespoon grated fresh ginger
1 tablespoon sesame seeds
4 green onions, thinly sliced
4 (5-ounce) salmon filets", 
direction: "Preheat oven to 400 degrees F. Lightly coat a 9×13 baking dish with nonstick spray.
Place salmon filets along with the marinade onto prepared baking dish and bake until the fish flakes easily with a fork, about 20 minutes.
Serve salmon immediately with honey ginger glaze.sauce, rice vinegar, sesame oil, brown sugar, garlic, ginger, sesame seeds and green onions.
In a gallon size Ziploc bag or large bowl, combine ginger marinade and salmon filets; marinate for at least 30 minutes to overnight, turning the bag occasionally.
Preheat oven to 400 degrees F. Lightly coat a 9×13 baking dish with nonstick spray.
Place salmon filets along with the marinade onto prepared baking dish and bake until the fish flakes easily with a fork, about 20 minutes.
Serve salmon immediately with honey ginger glaze.", story: "I am Annie and I enjoy cooking", 
user_id: 1, category_id: 1)

p "#{Recipe.count} recipes created"


