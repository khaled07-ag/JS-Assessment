const menu = [
    {
      id: 301,
      name: "Pasta",
      category: "Main Course",
      price: 12.99,
      ingredients: ["Penne", "Tomato Sauce", "Parmesan", "Basil"],
    },
    {
      id: 302,
      name: "Caesar Salad",
      category: "Salad",
      price: 8.99,
      ingredients: ["Lettuce", "Croutons", "Caesar Dressing", "Parmesan"],
    },
    {
      id: 303,
      name: "Burger",
      category: "Main Course",
      price: 10.99,
      ingredients: ["Beef Patty", "Lettuce", "Tomato", "Cheese", "Bun"],
    },
    {
      id: 304,
      name: "French Fries",
      category: "Side Dish",
      price: 4.99,
      ingredients: ["Potatoes", "Salt", "Oil"],
    },
    {
      id: 305,
      name: "Cheesecake",
      category: "Dessert",
      price: 6.99,
      ingredients: ["Cream Cheese", "Graham Cracker Crust", "Strawberries"],
    },
  ];
  function getMenuItemName(menuItem) {
    // Your code here
    return menuItem.name
  }
   console.log(getMenuItemName(menu[0]));
   function isMenuItemInCategory(menuItem, category) {
    // Your code here
    if(menuItem.category==category){
        return true
    }else{
        return false
    }
  }
  console.log(isMenuItemInCategory(menu[1], "Salad"));
  
  function addMenuItem(menu, menuItem) {
    // Your code here
    menu.push(menuItem)
    return menu
  }
  
  const newMenuItem = {
    id: 306,
    name: "Pizza",
    category: "Main Course",
    price: 14.99,
    ingredients: ["Dough", "Tomato Sauce", "Mozzarella", "Pepperoni"],
  };
  
  console.log(addMenuItem(menu, newMenuItem));
  
  
function countMainCourseItems(menu) {
    // Your code here
    let total=0
    for (let index = 0; index < menu.length; index++) {
        if(menu[index].category.includes('Main Course')){
            total=total+1
        }
        
    }
    return total
  }
   console.log(countMainCourseItems(menu));


   function listMenuItemNamesByCategory(menu, category) {
    // Your code here
     let names =[]
 menu.forEach((item)=>{
        if(item.category==category){
            names.push(item.name)
        }
    })
    return names

    
  }
  console.log(listMenuItemNamesByCategory(menu, "Main Course"));


   function getCheapestMenuItem(menu) {
    // Your code here
    let min = menu[0]
     menu.forEach((item)=>{
        if(item.price<min.price){
           min=item
        
        }
       
    })
    return min
   
  }
  console.log(getCheapestMenuItem(menu));

  function getMenuItemsByIngredient(menu, ingredient) {
    // Your code here
    return menu.filter((menu) => {
        if (menu.ingredients.includes(ingredient)) {
          return true;
        }
        })
    }
  
  console.log(getMenuItemsByIngredient(menu, "Parmesan"));

  function removeMenuItemById(menu, menuItemId) {
   
    let index = menu.findIndex((temp)=>temp.id===menuItemId)
     menu.splice(index,index)
     return menu
  }
    console.log(removeMenuItemById(menu, 302));
  