import { StyleSheet, Text, View, ScrollView, FlatList, Image } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

const threeimages = [
    {
        pic: require('../assets/HorizonImages/iron.png'), heading: 'Steam Iron',
    },
    {
        pic: require('../assets/HorizonImages/earbuds.jpg'), heading: 'True Wireless',
    },
    {
        pic: require('../assets/ExploreImages/handbg.jpg'), heading: 'Leather',
    },
    {
        pic: require('../assets/HorizonImages/iron.png'), heading: 'Steam Iron',
    },
    {
        pic: require('../assets/HorizonImages/earbuds.jpg'), heading: 'True Wireless',
    },
    {
        pic: require('../assets/ExploreImages/handbg.jpg'), heading: 'Leather',
    },
]

const Offerings = [
    { img: require('../assets/AccountImages/axis.jpg'), txt: 'ACE Credit Cart', subtxt: 'Apply Now' },
    { img: require('../assets/AccountImages/icici.jpg'), txt: 'Valid till 30th sep', subtxt: 'Apply Now' },
    { img: require('../assets/AccountImages/uni.jpg'), txt: 'NX Wave', subtxt: 'Apply Now' },
]

const HoriItem = ({ item }) => {
    return (
        <View style={styles.card}>
            <Image source={item.pic} style={styles.image} />
            <Text style={styles.heading}>{item.heading}</Text>
        </View>
    )
}

const Offitem = ({ item }) => {
    return (
        <View style={styles.card1}>
            <Image source={item.img} style={styles.image1} />
            <Text style={styles.heading1}>{item.txt}</Text>
            <Text style={styles.heading2}>{item.subtxt}</Text>
        </View>
    )
}

const NextPartAccount = () => {
    return (
        <ScrollView>
            <View style={{ marginVertical: 20, flexDirection: 'row', justifyContent: 'center' }}>
                <FlatList
                    data={threeimages}
                    renderItem={HoriItem}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.flatListContainer}
                    snapToAlignment="start"
                    decelerationRate="fast"
                    snapToInterval={160}
                />
            </View>
            <View style={styles.lineContainer}>
                <View style={styles.line} />
                <View style={styles.gap} />
                <View style={styles.line} />
            </View>
            <View>
                <Text style={{ marginTop: 20, fontSize: 20, fontWeight: '700' }}>Account Settings</Text>
            </View>


            <View style={styles.AccountContainer}>
                <View style={styles.row}>
                    <View style={styles.textContainer}>
                        <Image
                            source={require('../assets/AccountImages/fliplus.png')}
                            style={styles.AccountImg}
                        />
                        <Text style={styles.text}>Flipkart Plus</Text>
                    </View>
                    <Ionicons name="chevron-forward-outline" size={15} color="grey" />
                </View>
            </View>
            <View style={styles.AccountContainer}>
                <View style={styles.row}>
                    <View style={styles.textContainer}>
                        <Image
                            source={require('../assets/AccountImages/edit.png')}
                            style={styles.AccountImg}
                        />
                        <Text style={styles.text}>Edit Profile</Text>
                    </View>
                    <Ionicons name="chevron-forward-outline" size={15} color="grey" />
                </View>
            </View>
            <View style={styles.AccountContainer}>
                <View style={styles.row}>
                    <View style={styles.textContainer}>
                        <Image
                            source={require('../assets/AccountImages/credit.png')}
                            style={styles.AccountImg}
                        />
                        <Text style={styles.text}>Saved Credit / Debit & Gift Cards</Text>
                    </View>
                    <Ionicons name="chevron-forward-outline" size={15} color="grey" />
                </View>
            </View>
            <View style={styles.AccountContainer}>
                <View style={styles.row}>
                    <View style={styles.textContainer}>
                        <Image
                            source={require('../assets/AccountImages/address.png')}
                            style={styles.AccountImg}
                        />
                        <Text style={styles.text}>Saved Addresses</Text>
                    </View>
                    <Ionicons name="chevron-forward-outline" size={15} color="grey" />
                </View>
            </View>
            <View style={styles.AccountContainer}>
                <View style={styles.row}>
                    <View style={styles.textContainer}>
                        <Image
                            source={require('../assets/AccountImages/lang.png')}
                            style={styles.AccountImg}
                        />
                        <Text style={styles.text}>Select Language</Text>
                    </View>
                    <Ionicons name="chevron-forward-outline" size={15} color="grey" />
                </View>
            </View>
            <View style={styles.AccountContainer}>
                <View style={styles.row}>
                    <View style={styles.textContainer}>
                        <Image
                            source={require('../assets/AccountImages/notifi.png')}
                            style={styles.AccountImg}
                        />
                        <Text style={styles.text}>Notification Settings</Text>
                    </View>
                    <Ionicons name="chevron-forward-outline" size={15} color="grey" />
                </View>
            </View>
            <View style={styles.lineContainer}>
                <View style={styles.line} />
                <View style={styles.gap} />
                <View style={styles.line} />
            </View>



            <View>
                <Text style={{ marginTop: 20, fontSize: 20, fontWeight: '700' }}>My Activity</Text>
            </View>
            <View style={styles.AccountContainer}>
                <View style={styles.row}>
                    <View style={styles.textContainer}>
                        <Image
                            source={require('../assets/AccountImages/review.png')}
                            style={styles.AccountImg}
                        />
                        <Text style={styles.text}>Reviews</Text>
                    </View>
                    <Ionicons name="chevron-forward-outline" size={15} color="grey" />
                </View>
            </View>
            <View style={styles.AccountContainer}>
                <View style={styles.row}>
                    <View style={styles.textContainer}>
                        <Image
                            source={require('../assets/AccountImages/QA.png')}
                            style={styles.AccountImg}
                        />
                        <Text style={styles.text}>Questions & Answers</Text>
                    </View>
                    <Ionicons name="chevron-forward-outline" size={15} color="grey" />
                </View>
            </View>
            <View style={styles.lineContainer}>
                <View style={styles.line} />
                <View style={styles.gap} />
                <View style={styles.line} />
            </View>
            <View >
                <Text style={{ marginTop: 20, fontSize: 18, fontWeight: '500' }}>Featured Offerings</Text>
            </View >
            <View style={{ marginVertical: 20, flexDirection: 'row', justifyContent: 'center', }}>
                <FlatList
                    data={Offerings}
                    renderItem={Offitem}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.flatListContainer}
                    snapToAlignment="start"
                    decelerationRate="fast"
                    snapToInterval={160}
                />
            </View>
            <View style={styles.lineContainer}>
                <View style={styles.line} />
                <View style={styles.gap} />
                <View style={styles.line} />
            </View>
            <View >
                <Text style={{ marginTop: 20, fontSize: 20, fontWeight: '700' }}>Earn with Flipkart</Text>
            </View >
            <View style={styles.AccountContainer}>
                <View style={styles.row}>
                    <View style={styles.textContainer}>
                        <Image
                            source={require('../assets/AccountImages/sell.png')}
                            style={styles.AccountImg}
                        />
                        <Text style={styles.text}>Sell on Flipkart</Text>
                    </View>
                    <Ionicons name="chevron-forward-outline" size={15} color="grey" />
                </View>
            </View>
            <View style={styles.lineContainer}>
                <View style={styles.line} />
                <View style={styles.gap} />
                <View style={styles.line} />
            </View>
            <View >
                <Text style={{ marginTop: 20, fontSize: 20, fontWeight: '700' }}>Feedback & Information</Text>
            </View >
            <View style={styles.AccountContainer}>
                <View style={styles.row}>
                    <View style={styles.textContainer}>
                        <Image
                            source={require('../assets/AccountImages/licen.png')}
                            style={styles.AccountImg}
                        />
                        <Text style={styles.text}>Terms, Policies and Licenses</Text>
                    </View>
                    <Ionicons name="chevron-forward-outline" size={15} color="grey" />
                </View>
            </View>
            <View style={styles.AccountContainer}>
                <View style={styles.row}>
                    <View style={styles.textContainer}>
                        <Image
                            source={require('../assets/AccountImages/browse.png')}
                            style={styles.AccountImg}
                        />
                        <Text style={styles.text}>Browse FAQs</Text>
                    </View>
                    <Ionicons name="chevron-forward-outline" size={15} color="grey" />
                </View>
            </View>
            <View style={styles.lineContainer}>
                <View style={styles.line} />
                <View style={styles.outContainer}>
                    <Text style={styles.logout}>Log Out</Text>
                </View>
                <View style={styles.gap1} />
                <View style={styles.line} />
            </View>
        </ScrollView>
    )
}

export default NextPartAccount

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginHorizontal: 5,
        width: 140,
    },
    card1: {
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        marginHorizontal: 5,
        width: 140,
    },
    image: {
        height: 100,
        width: 110,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    image1: {
        height: 70,
        width: 120,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    heading: {
        fontSize: 18,
        fontFamily: 'Lato-Regular',
        marginTop: 10,
    },
    heading1: {
        fontSize: 15,
        marginTop: 10,
        fontWeight: '500',
        textAlign: 'center',
    },
    heading2: {
        fontSize: 17,
        fontFamily: 'Lato-Regular',
        marginTop: 5,
        fontWeight: '700',
        textAlign: 'center',
    },
    lineContainer: {
        justifyContent: 'center',
        backgroundColor: '#fcfcfc',
    },
    line: {
        width: '100%',
        height: 0.5,
        backgroundColor: '#d3d3d3',
    },
    gap: {
        height: 9,
    },
    gap1: {
        height: 30,
    },
    AccountContainer: {
        padding: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        gap: 10,
    },
    AccountImg: {
        height: 30,
        width: 30,
        marginRight: 10,
        tintColor: '#0000e6',
    },
    text: {
        fontSize: 16,
    },
    logout: {
        textAlign: 'center',
        color: '#0000e6',
        fontWeight: 'bold',
        fontSize: 18,
        letterSpacing: 1,
    },
    outContainer: {
        paddingTop: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        width: '90%',
        height: 50,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4,
        marginVertical: 20,
        alignSelf: 'center',
    },
})