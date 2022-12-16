import { MEALS } from "../data/dummy-data";
import { View, FlatList, StyleSheet } from "react-native";
import Meal from "../models/meal";

import MealItem from "../components/MealItem";

function MealsOverViewScreen({ route }) {
    const catId = route.params.categoryId;
    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;

    });

    function renderMealItem(itemData) {
        return <MealItem
            title={itemData.item.title}
            imageUrl={itemData.item.imageUrl}
            complexity={itemData.item.complexity}
            duration={itemData.item.duration}
            affordability={itemData.item.affordability}
        >
        </MealItem>
    }
    return (
        <View style={styles.container}>
            <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={renderMealItem}  > </FlatList>

        </View>
    )
}


const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            padding: 16,

        }
    }
);


export default MealsOverViewScreen;