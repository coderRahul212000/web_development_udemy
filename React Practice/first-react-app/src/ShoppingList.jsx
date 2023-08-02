import ShoppingListItem from "./ShoppingListItem";
function ShoppingList({items}){
   
    return(

        <ul>
            {
               items.map((i) => (
                 <ShoppingListItem 
                   key={i.id} 
                //    item={i.item} 
                //    quantity={i.quantity} 
                //    completed={i.completed}
                {...i} //spread operator - it will take  "i" items and pass them individually
                />
               ))
            }
        </ul>
    )

}

export default ShoppingList;