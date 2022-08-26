import { View, Item, Text, Pressable, Image, StyleSheet } from "react-native"


function MealItem({ title, imageUrl, duration, complexity, affordability }) {
    return <View style={styles.mealItem}>
        <Pressable>
            <View>
                <Image source={{ uri: imageUrl }} style={styles.image} ></Image>
                <Text style={styles.title}> {title}</Text>
            </View>
            <View>
                <Text>
                    {duration}
                </Text>
                <Text>
                    {complexity.toUpperCase()}
                </Text>
                <Text>
                    {affordability.toUpperCase()}
                </Text>
            </View>

        </Pressable>

    </View>

}

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: "hidden",
        backgroundColor: "white"
    },
    image: {
        width: "100%",
        height: 200,
    },
    title: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18

    }
})

export default MealItem;