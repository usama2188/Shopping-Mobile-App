import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header: {
        height: 60,
        width:"100%",
        // backgroundColor: 'yellow',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        // position: "absolute",
        // borderBottomColor:"#ccc5b9",
        // borderBottomWidth:1,
        // left:150
    }, button: {
        backgroundColor: "blue",
        // height:20,
        width: 120,
        textAlign: 'center',
        color: 'white',
        padding: 7,
        borderRadius: 10,

    },

    cartItem: {

        height: 130,
        flexDirection: 'row',
        alignItems: "center",
        padding: 12,
        marginTop:3,
        // borderBottomWidth: 1,
        // borderBottomColor: '#ccc5b9'
    },
    headign: {
        fontSize: 16
    },
    img: {
        // height: 100,
        // width: 100,
        // backgroundColor: "red",
        borderRadius: 20
    },
    productTitle: {
        width: 230,
        height: 140,
        padding: 13,
        flexDirection: 'column',
        justifyContent: 'space-around',

    },
    quantity: {
        flexDirection: 'row'
    },

    btn: {
        // borderRadius: 10,
        width: 40,
        // borderColor: 'black',
        // borderWidth: 1,
        height: 30,
        fontSize:30,
        backgroundColor:'#fee440',
        borderRadius: 20,

    },
    btnFont: {
        fontSize: 18,
        color: "black",
        textAlign: 'center',
        padding: 1
    },
    cross: {
        position: "absolute",
        right:5,
        bottom:20
        // left: 320,
        // top: 10
    },text:{
        
    },



    inputLabel:{
        fontSize:16,
        padding:5,
        marginLeft:10
    }
})