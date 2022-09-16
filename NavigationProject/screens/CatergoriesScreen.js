import { FlatList } from "react-native"
import { CATEGORIES } from "../data/dummy-data"
import CategoryGridTile from "../components/CategoryGridTile"

//hello world 


function CategoriesScreen({ navigation }) {

    function renderCatergoryItem(itemData) {
        function pressHandler() {
            navigation.navigate("MealsOverview", {
                categoryId: itemData.item.id,
            });

        }
        return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler}  > </CategoryGridTile>;
    }

    return <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}


        renderItem={renderCatergoryItem}
        numColumns={2}
    >

    </FlatList>
}

export default CategoriesScreen