import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d8b1/c6b1/8935572ea2ba7226aed0ec2b6b7e5447"
        }}
        style={styles.ImageBackground_1_364}
      />
      <View style={styles.View_1_365}>
        <View style={styles.View_1_366}>
          <Text style={styles.Text_1_366}>woo dog</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7874/bf27/abc54d12306334101d40a75c6a2e9b2e"
          }}
          style={styles.ImageBackground_1_367}
        />
      </View>
      <View style={styles.View_1_368} />
      <View style={styles.View_2_1}>
        <View style={styles.View_1_369}>
          <View style={styles.View_1_370}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6183/06a7/02576d0c88631c521b4514f46f6a2e16"
              }}
              style={styles.ImageBackground_1_371}
            />
            <View style={styles.View_1_372}>
              <Text style={styles.Text_1_372}>1</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0577/d98d/d4cdc14bc531b40b15ee178b3e4f72c9"
            }}
            style={styles.ImageBackground_1_379}
          />
          <View style={styles.View_1_373}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed39/2fa2/2810c5e26c0a85ad15f8e0d5a41a2cb9"
              }}
              style={styles.ImageBackground_1_374}
            />
            <View style={styles.View_1_375}>
              <Text style={styles.Text_1_375}>2</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0577/d98d/d4cdc14bc531b40b15ee178b3e4f72c9"
            }}
            style={styles.ImageBackground_1_380}
          />
          <View style={styles.View_1_376}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed39/2fa2/2810c5e26c0a85ad15f8e0d5a41a2cb9"
              }}
              style={styles.ImageBackground_1_377}
            />
            <View style={styles.View_1_378}>
              <Text style={styles.Text_1_378}>3</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1_381}>
          <Text style={styles.Text_1_381}>
            Too tired to walk your dog? Let’s help you!
          </Text>
        </View>
        <View style={styles.View_1_383}>
          <View style={styles.View_1_384}>
            <Text style={styles.Text_1_384}>Join our community</Text>
          </View>
        </View>
        <View style={styles.View_1_382}>
          <Text style={styles.Text_1_382}>Already a member? Sign in</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(32, 32, 32, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  ImageBackground_1_364: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("83.87978142076503%"),
    minHeight: hp("83.87978142076503%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-4.644808743169399%")
  },
  View_1_365: {
    width: wp("26.93333333333333%"),
    minWidth: wp("26.93333333333333%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("6.147540983606557%")
  },
  View_1_366: {
    width: wp("15.733333333333333%"),
    minWidth: wp("15.733333333333333%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.2%"),
    top: hp("0.27322404371584685%"),
    justifyContent: "flex-start"
  },
  Text_1_366: {
    color: "rgba(231, 58, 64, 1)",
    fontSize: 18,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_1_367: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1_368: {
    width: wp("35.733333333333334%"),
    height: hp("0.4098360655737705%"),
    minHeight: hp("0.4098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%"),
    top: hp("109.28961748633881%"),
    backgroundColor: "rgba(252, 252, 252, 1)"
  },
  View_2_1: {
    width: wp("88.53333333333333%"),
    minWidth: wp("88.53333333333333%"),
    height: hp("32.78688524590164%"),
    minHeight: hp("32.78688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("70.3551912568306%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_369: {
    width: wp("88.53333333333333%"),
    minWidth: wp("88.53333333333333%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_370: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.93333333333333%"),
    top: hp("0%")
  },
  ImageBackground_1_371: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_372: {
    width: wp("1.3333333333333335%"),
    minWidth: wp("1.3333333333333335%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333357%"),
    top: hp("0.6830601092896273%"),
    justifyContent: "flex-start"
  },
  Text_1_372: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.05329999953508378,
    textTransform: "none"
  },
  ImageBackground_1_379: {
    width: wp("2.666666666666667%"),
    minWidth: wp("2.666666666666667%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.266666666666666%"),
    top: hp("2.049180327868868%")
  },
  View_1_373: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.266666666666666%"),
    top: hp("0%")
  },
  ImageBackground_1_374: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_375: {
    width: wp("2.1333333333333333%"),
    minWidth: wp("2.1333333333333333%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.93333333333333%"),
    top: hp("0.6830601092896273%"),
    justifyContent: "flex-start"
  },
  Text_1_375: {
    color: "rgba(247, 247, 248, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.05329999953508378,
    textTransform: "none"
  },
  ImageBackground_1_380: {
    width: wp("2.666666666666667%"),
    minWidth: wp("2.666666666666667%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.6%"),
    top: hp("2.049180327868868%")
  },
  View_1_376: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.599999999999994%"),
    top: hp("0%")
  },
  ImageBackground_1_377: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_378: {
    width: wp("2.1333333333333333%"),
    minWidth: wp("2.1333333333333333%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.93333333333333%"),
    top: hp("0.6830601092896273%"),
    justifyContent: "flex-start"
  },
  Text_1_378: {
    color: "rgba(247, 247, 248, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.05329999953508378,
    textTransform: "none"
  },
  View_1_381: {
    width: wp("88.53333333333333%"),
    minWidth: wp("88.53333333333333%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.103825136612031%"),
    justifyContent: "flex-start"
  },
  Text_1_381: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.0901999992132187,
    textTransform: "none"
  },
  View_1_383: {
    width: wp("86.4%"),
    minWidth: wp("86.4%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19.125683060109296%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_384: {
    width: wp("46.93333333333333%"),
    minWidth: wp("46.93333333333333%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.733333333333334%"),
    top: hp("2.1857923497267677%"),
    justifyContent: "flex-start"
  },
  Text_1_384: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_1_382: {
    width: wp("88.53333333333333%"),
    minWidth: wp("88.53333333333333%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30.054644808743177%"),
    justifyContent: "flex-start"
  },
  Text_1_382: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.05329999953508378,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
