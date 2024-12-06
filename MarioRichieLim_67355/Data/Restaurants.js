import React from 'react';

var idCounter = 1;

const Restaurants = [
    {
        id: idCounter++,
        title: "Vegetarian Handi",
        address: "Jl. Pancoran 5, Gang Tian Liong No.15, RT.8/RW.2",
        location: {
            latitude: -6.1422567,
            longitude: 106.8129659
        },
        menu: [
            {
                id: 1,
                name: "Vegan Samosas",
                description: "Crispy, golden samosas filled with spiced potatoes and peas.",
                image: require("../Assets/restaurants/samosas.jpg"),
                price: 25000
            },
            {
                id: 2,
                name: "Vegetarian Biryani",
                description: "A fragrant rice dish made with mixed vegetables and spices.",
                image: require("../Assets/restaurants/biryani.jpg"),
                price: 35000
            },
            {
                id: 3,
                name: "Chana Masala",
                description: "A rich and hearty chickpea curry cooked in traditional spices.",
                image: require("../Assets/restaurants/chana_masala.jpeg"),
                price: 30000
            },
            {
                id: 4,
                name: "Aloo Gobi",
                description: "A comforting dish of potatoes and cauliflower cooked with aromatic spices.",
                image: require("../Assets/restaurants/aloo_gobi.jpg"),
                price: 20000
            }
        ]
    },
    {
        id: idCounter++,
        title: "Burgreens Flagship",
        address: "Jl. K.H. Wahid Hasyim No.47 1, RT.1/RW.4",
        location: {
            latitude: -6.187241,
            longitude: 106.829149
        },
        menu: [
            {
                id: 1,
                name: "Vegan Tacos",
                description: "Soft tortillas filled with roasted vegetables, black beans, and avocado.",
                image: require("../Assets/restaurants/tacos.jpg"),
                price: 15000
            },
            {
                id: 2,
                name: "Quinoa Salad",
                description: "A refreshing quinoa salad with mixed greens, cherry tomatoes, and a lemon vinaigrette.",
                image: require("../Assets/restaurants/quinoa_salad.jpg"),
                price: 40000
            },
            {
                id: 3,
                name: "Veggie Wrap",
                description: "Whole wheat wrap filled with grilled veggies, hummus, and fresh greens.",
                image: require("../Assets/restaurants/wrap.jpg"),
                price: 30000
            },
            {
                id: 4,
                name: "Vegan Burger",
                description: "A hearty plant-based burger with grilled mushrooms, lettuce, and tomato.",
                image: require("../Assets/restaurants/burger.jpg")
            }
        ]
    },
    {
        id: idCounter++,
        title: "Loving Hut UOB Plaza",
        address: "Jl. Baturaja No.8 14, RT.14/RW.20",
        location: {
            latitude: -6.1987313,
            longitude: 106.822706
        },
        menu: [
            {
                id: 1,
                name: "Vegan Pho",
                description: "A fragrant Vietnamese noodle soup made with tofu, herbs, and veggies.",
                image: require("../Assets/restaurants/pho.jpg")
            },
            {
                id: 2,
                name: "Tofu Stir-fry",
                description: "Stir-fried tofu with mixed vegetables and a soy-based sauce.",
                image: require("../Assets/restaurants/tofu_stir_fry.jpeg")
            },
            {
                id: 3,
                name: "Vegan Dumplings",
                description: "Delicious steamed dumplings filled with vegetables and spices.",
                image: require("../Assets/restaurants/dumplings.jpeg")
            },
            {
                id: 4,
                name: "Vegan Spring Rolls",
                description: "Crispy rolls filled with fresh veggies and served with a peanut dipping sauce.",
                image: require("../Assets/restaurants/spring_rolls.jpg")
            },
            {
                id: 5,
                name: "Vegan Sushi",
                description: "Vegan sushi rolls filled with avocado, cucumber, and pickled vegetables.",
                image: require("../Assets/restaurants/sushi.jpg")
            }
        ]
    },
    {
        id: idCounter++,
        title: "Currypuff Veggie Vegan Vegetarian",
        address: "Metro Pasar Baru Foodcourt lt2",
        location: {
            latitude: -6.1608601,
            longitude: 106.8323206
        },
        menu: [
            {
                id: 1,
                name: "Vegan Curry Puff",
                description: "Crispy pastry filled with flavorful vegan curry.",
                image: require("../Assets/restaurants/curry_puff.jpg")
            },
            {
                id: 2,
                name: "Veggie Spring Rolls",
                description: "Freshly rolled spring rolls with a mix of veggies.",
                image: require("../Assets/restaurants/spring_rolls.jpg")
            },
            {
                id: 3,
                name: "Chickpea Salad",
                description: "A refreshing chickpea salad with cucumber, tomato, and lemon dressing.",
                image: require("../Assets/restaurants/chickpea_salad.jpeg")
            }
        ]
    },
    {
        id: idCounter++,
        title: "Resto Indo Vegan",
        address: "Jalan Duri Selatan 1 No. 9, RT.06/ RW.02, RT.6/RW.2",
        location: {
            latitude: -6.1610862,
            longitude: 106.8062167
        },
        menu: [
            {
                id: 1,
                name: "Tempeh Manis",
                description: "Indonesian-style sweet tempeh served with steamed rice.",
                image: require("../Assets/restaurants/tempeh.jpg")
            },
            {
                id: 2,
                name: "Vegan Nasi Goreng",
                description: "Fried rice made with plant-based ingredients.",
                image: require("../Assets/restaurants/fried_rice.jpg")
            },
            {
                id: 3,
                name: "Tofu Sambal",
                description: "Stir-fried tofu in spicy sambal sauce with vegetables.",
                image: require("../Assets/restaurants/tofu_sambal.jpeg")
            },
            {
                id: 4,
                name: "Vegan Sate",
                description: "Grilled vegan skewers made with marinated tempeh served with peanut sauce.",
                image: require("../Assets/restaurants/sate.jpg")
            }
        ]
    },
    {
        id: idCounter++,
        title: "Healthy Veggie",
        address: "Jl. Kusuma No.27 Blok A7, Jelambar Baru",
        location: {
            latitude: -6.149472,
            longitude: 106.7810201
        },
        menu: [
            {
                id: 1,
                name: "Vegetable Stir Fry",
                description: "A healthy mix of stir-fried vegetables in light soy sauce.",
                image: require("../Assets/restaurants/stir_fry.jpeg")
            },
            {
                id: 2,
                name: "Vegan Smoothie Bowl",
                description: "A refreshing smoothie bowl topped with fresh fruits and seeds.",
                image: require("../Assets/restaurants/smoothie_bowl.jpg")
            },
            {
                id: 3,
                name: "Vegan Wrap",
                description: "Whole wheat wrap filled with roasted vegetables and hummus.",
                image: require("../Assets/restaurants/wrap.jpeg")
            }
        ]
    },
    {
        id: idCounter++,
        title: "Madametin Vegetarian",
        address: "Seasons City Mall, Jemb. Besi",
        location: {
            latitude: -6.1534123,
            longitude: 106.796084
        },
        menu: [
            {
                id: 1,
                name: "Vegan Laksa",
                description: "A spicy coconut-based noodle soup with tofu and vegetables.",
                image: require("../Assets/restaurants/laksa.jpeg")
            },
            {
                id: 2,
                name: "Grilled Tofu Skewers",
                description: "Tofu grilled to perfection and served with a tangy dipping sauce.",
                image: require("../Assets/restaurants/grilled_tofu_skewer.jpg")
            },
            {
                id: 3,
                name: "Vegan Fried Rice",
                description: "Fried rice with mixed vegetables and plant-based protein.",
                image: require("../Assets/restaurants/fried_rice_2.jpg")
            }
        ]
    },
    {
        id: idCounter++,
        title: "VEGGIE VEGGIE VEGETARIAN",
        address: "Pisa Grande 2, Blok G 28, Gading, Serpong",
        location: {
            latitude: -6.2603634,
            longitude: 106.6299779
        },
        menu: [
            {
                id: 1,
                name: "Veggie Burger",
                description: "A hearty veggie patty served in a whole wheat bun with fresh greens.",
                image: require("../Assets/restaurants/burger.jpg")
            },
            {
                id: 2,
                name: "Vegetable Biryani",
                description: "A fragrant rice dish with a medley of spiced vegetables.",
                image: require("../Assets/restaurants/biryani.jpg")
            },
            {
                id: 3,
                name: "Vegan Pizza",
                description: "A delicious pizza topped with fresh veggies and plant-based cheese.",
                image: require("../Assets/restaurants/pizza.jpg")
            },
            {
                id: 4,
                name: "Mango Salad",
                description: "A refreshing salad with mango, avocado, and a tangy dressing.",
                image: require("../Assets/restaurants/mango_salad.jpg")
            }
        ]
    },
    {
        id: idCounter++,
        title: "Veggietiam Vegetarian Vegan Alam Sutera",
        address: "Ps. Delapan, Jl. Alam Sutera Boulevard, Pakulonan",
        location: {
            latitude: -6.2394502,
            longitude: 106.6513235
        },
        menu: [
            {
                id: 1,
                name: "Vegan Satay",
                description: "Grilled plant-based skewers served with a peanut dipping sauce.",
                image: require("../Assets/restaurants/sate.jpg")
            },
            {
                id: 2,
                name: "Spicy Vegan Ramen",
                description: "A hearty bowl of ramen with spicy vegan broth and toppings.",
                image: require("../Assets/restaurants/spicy_ramen.jpg")
            },
            {
                id: 3,
                name: "Vegan Burger",
                description: "A flavorful vegan burger served with crispy fries.",
                image: require("../Assets/restaurants/burger_2.jpg")
            }
        ]
    },
    {
        id: idCounter++,
        title: "Selero Kito Vegetarian",
        address: "Ruko Newton Barat, Jl. Scientia Boulevard Jl. Boulevard Raya Gading Serpong No.25",
        location: {
            latitude: -6.2560331,
            longitude: 106.6143299
        },
        menu: [
            {
                id: 1,
                name: "Vegan Rendang",
                description: "Rich and flavorful rendang made with plant-based ingredients.",
                image: require("../Assets/restaurants/rendang.jpg")
            },
            {
                id: 2,
                name: "Gado-Gado",
                description: "Indonesian-style salad with peanut sauce and crispy tempeh.",
                image: require("../Assets/restaurants/gado_gado.jpg")
            },
            {
                id: 3,
                name: "Vegan Soto",
                description: "A traditional Indonesian soup made with tofu and vegetables.",
                image: require("../Assets/restaurants/soto.jpg")
            }
        ]
    },
    {
        id: idCounter++,
        title: "LiuJia Kitchen, Veggie Sushi & Haiso Coffee",
        address: "Ruko Paramount Center, Jl. Boulevard Raya Gading Serpong No.28 kav A",
        location: {
            latitude: -6.2430843,
            longitude: 106.6260021
        },
        menu: [
            {
                id: 1,
                name: "Vegan Sushi Rolls",
                description: "Delicious sushi rolls made with plant-based fillings and fresh veggies.",
                image: require("../Assets/restaurants/sushi.jpg")
            },
            {
                id: 2,
                name: "Haiso Coffee",
                description: "A special plant-based coffee brewed with organic beans.",
                image: require("../Assets/restaurants/coffee.jpg")
            },
            {
                id: 3,
                name: "Vegan Tofu Maki",
                description: "Maki rolls filled with tofu, avocado, and cucumber.",
                image: require("../Assets/restaurants/tofu_maki.jpg")
            },
            {
                id: 4,
                name: "Vegan Tempura",
                description: "Crispy tempura made with seasonal vegetables.",
                image: require("../Assets/restaurants/tempura.jpeg")
            }
        ]
    },
    {
        id: idCounter++,
        title: "Cavegie",
        address: "Gading Serpong, Jalan Gading Serpong Boulevard",
        location: {
            latitude: -6.2717354,
            longitude: 106.6222877
        },
        menu: [
            {
                id: 1,
                name: "Vegan Pizza",
                description: "A delicious pizza topped with fresh veggies and plant-based cheese.",
                image: require("../Assets/restaurants/pizza.jpg")
            },
            {
                id: 2,
                name: "Mushroom Risotto",
                description: "Creamy risotto made with mushrooms and vegan cream.",
                image: require("../Assets/restaurants/mushroom_risotto.jpeg")
            },
            {
                id: 3,
                name: "Vegan Pasta",
                description: "Pasta served with a rich tomato and basil sauce.",
                image: require("../Assets/restaurants/pasta.jpeg")
            }
        ]
    }
];

export default Restaurants;