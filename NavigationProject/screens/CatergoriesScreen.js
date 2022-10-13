import react from "react";
import { FlatList, View, Button, Text } from "react-native"
import { CATEGORIES } from "../data/dummy-data"
import CategoryGridTile from "../components/CategoryGridTile"

function CategoriesScreen({ navigation }) {
    function renderCatergoryItem(itemData) {
        function pressHandler() {
            navigation.navigate("MealsOverview", {
                categoryId: itemData.item.id,
            });
        }
        return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler}  > </CategoryGridTile>;
    }
    return <View>
        <Button
            title="Logout"
            onPress={() => navigation.navigate("Login")}
        />

        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCatergoryItem}
            numColumns={2}
        >
        </FlatList>

    </View>
}
export default CategoriesScreen