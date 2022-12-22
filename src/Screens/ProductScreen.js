import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'



export default function ProdutcDetailsScreen({ navigation, route }) {
    const { item } = route.params
    // const { isAuthenticated } = useAuthContext()

    //MAKE CALL MODULE
    const makeCall = () => {
        // console.log(item.contactNo)
        const args = {
            number: item.contactNo, // String value with the number to call
            prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call 
            skipCanOpen: true // Skip the canOpenURL check
        }

        call(args).catch(console.error)
    }



    return (<>
        {
            !isAuthenticated ?
                <AuthScreenNavigator />


                : <ScrollView>

                    <View style={styles.flexContainer}>
                        <View style={{ alignItems: 'center' }}>
                            <Image sty
                                source={{
                                    uri: item.newPost.url
                                }}
                                style={{ flex: 1, width: "98%", borderRadius: 20, height: 270, marginTop: 2, resizeMode: 'contain' }}

                            />
                            <View style={styles.textBox}>
                                <Text style={styles.heading}>{item.title.toLowerCase()
                                    .split(' ')
                                    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                                    .join(' ')}</Text>
                                {/* <Text style={styles.text}>$200</Text> */}
                                <Text style={{
                                    paddingVertical: 14, fontSize: 16, fontWeight: 'bold',
                                    color: '#40916c'
                                }}>PKR  {item.price}</Text>



                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-around', width: 330, marginTop: 2,
                                    backgroundColor: '#cfe1b9', padding: 10
                                }}>

                                    <View style={{ alignItems: 'center' }}>
                                        <Icon name='bed' color='#40916c' size={28} />
                                        <Text style={styles.detaileScreenIcons}>Bed Rooms</Text>
                                        <Text>{item.rooms}</Text>

                                    </View>

                                    <View style={{ alignItems: 'center' }}>
                                        <Icon name='bathtub-outline' color='#40916c' size={28} />
                                        <Text style={styles.detaileScreenIcons} >Baths</Text>
                                        <Text >{item.bath}</Text>
                                    </View>

                                    <View style={{ alignItems: 'center' }}>
                                        <Icon name='crop-square' color='#40916c' size={28} />
                                        <Text style={styles.detaileScreenIcons} >Marlas</Text>
                                        <Text>{item.area}</Text>
                                    </View>


                                </View>


                                <Text style={{
                                    color: 'black', fontSize: 18, marginTop: 10, marginBottom: 10
                                }}>Details</Text>

                                <Text style={styles.text}>{item.discription}</Text>



                                <Text style={{
                                    color: 'black', fontSize: 18, marginTop: 20, marginBottom: 10
                                }}>Contact</Text>
                                <Text style={styles.text}>{item.contactNo}</Text>
                                <Text style={styles.text}>{item.email}</Text>



                                <View style={styles.buttonBox}>
                                    <TouchableOpacity style={styles.button}
                                    onPress={() => makeCall()}
                                    >
                                        <Text style={{ textAlign: "center", color: 'white' }}> Contact </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>


                        </View>




                    </View>

                </ScrollView>
        }</>)
}
