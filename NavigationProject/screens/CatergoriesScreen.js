import { FlatList } from "react-native"
import { CATEGORIES } from "../data/dummy-data"
import CategoryGridTile from "../components/CategoryGridTile"


function renderCatergoryItem(itemData) {
    return <CategoryGridTile title={itemData.item.title} color={itemData.item.color}  > </CategoryGridTile>;
}



function CategoriesScreen() {
    return <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}

        renderItem={renderCatergoryItem}
        numColumns={2}
    >

    </FlatList>
}

export default CategoriesScreen