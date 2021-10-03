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
      <View style={styles.View_1_69} />
      <View style={styles.View_2_214}>
        <View style={styles.View_1_71}>
          <Text style={styles.Text_1_71}>We’d love your pet</Text>
        </View>
        <View style={styles.View_1_72}>
          <Text style={styles.Text_1_72}>Tell us something about your dog</Text>
        </View>
      </View>
      <View style={styles.View_2_215}>
        <View style={styles.View_1_77}>
          <Text style={styles.Text_1_77}>4/10</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b6de/a21c/52d2726f9a413fa3b1948ce4c9fd35ad"
          }}
          style={styles.ImageBackground_1_74}
        />
      </View>
      <View style={styles.View_1_78}>
        <Text style={styles.Text_1_78}>Bad habits</Text>
      </View>
      <View style={styles.View_1_79}>
        <View style={styles.View_1_80}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/635a/84ce/6a43efdda4b1bace5ca9808bb98b1934"
            }}
            style={styles.ImageBackground_I1_80_0_3972}
          />
        </View>
      </View>
      <View style={styles.View_2_228}>
        <View style={styles.View_2_225}>
          <View style={styles.View_2_224}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/326a/6cc8/29a544151b2fefdcec431c1daae1e547"
              }}
              style={styles.ImageBackground_2_212}
            />
            <View style={styles.View_1_117}>
              <Text style={styles.Text_1_117}>Chasing</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_2_227}>
          <View style={styles.View_2_226}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d32/1b9a/0aa7710fcb1bcc2b1a03853e0963a5fe"
              }}
              style={styles.ImageBackground_2_213}
            />
            <View style={styles.View_1_120}>
              <Text style={styles.Text_1_120}>Barking</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_2_217}>
          <View style={styles.View_2_216}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fc2/c259/92fb1d66d7dde1cde29297b2437ea1d1"
              }}
              style={styles.ImageBackground_2_208}
            />
            <View style={styles.View_1_102}>
              <Text style={styles.Text_1_102}>Barking</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_2_219}>
          <View style={styles.View_2_218}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/536d/1b26/5d0d6863a3183d27dfad58b38cb474f2"
              }}
              style={styles.ImageBackground_2_209}
            />
            <View style={styles.View_1_97}>
              <Text style={styles.Text_1_97}>Chewing</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_2_221}>
          <View style={styles.View_2_220}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/43d3/64f3/48ac36ed2943e41451a97e999a4ce227"
              }}
              style={styles.ImageBackground_2_210}
            />
            <View style={styles.View_1_106}>
              <Text style={styles.Text_1_106}>Digging</Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff68/3643/b35d0d167d79c0899d2959aaab9fc53c"
          }}
          style={styles.ImageBackground_1_82}
        />
        <View style={styles.View_2_223}>
          <View style={styles.View_2_222}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4f5/7f90/844b7bd05c0c2b048c7964b7b239e430"
              }}
              style={styles.ImageBackground_2_211}
            />
            <View style={styles.View_1_94}>
              <Text style={styles.Text_1_94}>Begging</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1_125}>
        <View style={styles.View_1_127}>
          <View style={styles.View_1_128} />
          <View style={styles.View_1_129} />
          <View style={styles.View_1_130}>
            <Text style={styles.Text_1_130}>Get started</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(252, 252, 252, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_1_69: {
    width: wp("35.733333333333334%"),
    height: hp("0.4098360655737705%"),
    minHeight: hp("0.4098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%"),
    top: hp("109.28961748633881%"),
    backgroundColor: "rgba(247, 248, 249, 1)"
  },
  View_2_214: {
    width: wp("87.73333333333333%"),
    minWidth: wp("87.73333333333333%"),
    height: hp("10.51912568306011%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("11.612021857923498%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_71: {
    width: wp("87.73333333333333%"),
    minWidth: wp("87.73333333333333%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_71: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.13939999878406525,
    textTransform: "none"
  },
  View_1_72: {
    width: wp("84.26666666666667%"),
    minWidth: wp("84.26666666666667%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.967213114754099%"),
    justifyContent: "flex-start"
  },
  Text_1_72: {
    color: "rgba(161, 161, 161, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_2_215: {
    width: wp("91.47288411458334%"),
    minWidth: wp("91.47288411458334%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("25.136612021857925%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_77: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_77: {
    color: "rgba(161, 161, 161, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05329999953508378,
    textTransform: "none"
  },
  ImageBackground_1_74: {
    width: wp("91.47288411458334%"),
    minWidth: wp("91.47288411458334%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.098360655737704%")
  },
  View_1_78: {
    width: wp("32.53333333333333%"),
    minWidth: wp("32.53333333333333%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("32.240437158469945%"),
    justifyContent: "flex-start"
  },
  Text_1_78: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.0901999992132187,
    textTransform: "none"
  },
  View_1_79: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("4.781420765027322%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_80: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_80_0_3972: {
    flexGrow: 1,
    width: wp("4.666731770833334%"),
    height: hp("1.9203728014002732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3221516927083332%"),
    top: hp("0.9960737384733607%")
  },
  View_2_228: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("71.58469945355192%"),
    minHeight: hp("71.58469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("38.114754098360656%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_225: {
    flexGrow: 1,
    width: wp("44%"),
    height: hp("22.131147540983605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("49.45355191256831%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_2_224: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.399999999999999%"),
    top: hp("5.8743169398907185%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_212: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666669%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1_117: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.83060109289616%"),
    justifyContent: "flex-start"
  },
  Text_1_117: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_2_227: {
    flexGrow: 1,
    width: wp("43.46666666666666%"),
    height: hp("22.131147540983605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.99999999999999%"),
    top: hp("49.45355191256831%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_2_226: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.06666666666667%"),
    top: hp("5.8743169398907185%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_213: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333333333333343%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1_120: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.83060109289616%"),
    justifyContent: "flex-start"
  },
  Text_1_120: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_2_217: {
    flexGrow: 1,
    width: wp("43.46666666666666%"),
    height: hp("22.131147540983605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_2_216: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.06666666666667%"),
    top: hp("5.874316939890711%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_208: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333333333333332%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1_102: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.830601092896174%"),
    justifyContent: "flex-start"
  },
  Text_1_102: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_2_219: {
    flexGrow: 1,
    width: wp("43.46666666666666%"),
    height: hp("22.131147540983605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.99999999999999%"),
    top: hp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_2_218: {
    width: wp("20.266666666666666%"),
    minWidth: wp("20.266666666666666%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.06666666666667%"),
    top: hp("5.874316939890711%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_209: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.800000000000011%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1_97: {
    width: wp("20.266666666666666%"),
    minWidth: wp("20.266666666666666%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.830601092896174%"),
    justifyContent: "flex-start"
  },
  Text_1_97: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_2_221: {
    flexGrow: 1,
    width: wp("44%"),
    height: hp("22.131147540983605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24.726775956284158%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_2_220: {
    width: wp("17.866666666666667%"),
    minWidth: wp("17.866666666666667%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.06666666666667%"),
    top: hp("5.874316939890711%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_210: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.599999999999998%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1_106: {
    width: wp("17.866666666666667%"),
    minWidth: wp("17.866666666666667%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.830601092896174%"),
    justifyContent: "flex-start"
  },
  Text_1_106: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  ImageBackground_1_82: {
    flexGrow: 1,
    width: wp("37.6%"),
    height: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.93333333333334%"),
    top: hp("39.34426229508197%")
  },
  View_2_223: {
    flexGrow: 1,
    width: wp("43.46666666666666%"),
    height: hp("22.131147540983605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.99999999999999%"),
    top: hp("24.726775956284158%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_2_222: {
    width: wp("18.933333333333334%"),
    minWidth: wp("18.933333333333334%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.06666666666667%"),
    top: hp("5.874316939890711%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_211: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.13333333333334%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1_94: {
    width: wp("18.933333333333334%"),
    minWidth: wp("18.933333333333334%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.830601092896174%"),
    justifyContent: "flex-start"
  },
  Text_1_94: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_1_125: {
    width: wp("81.33333333333333%"),
    minWidth: wp("81.33333333333333%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333334%"),
    top: hp("99.04371584699454%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_127: {
    width: wp("81.33333333333333%"),
    minWidth: wp("81.33333333333333%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_128: {
    width: wp("71.73333333333333%"),
    minWidth: wp("71.73333333333333%"),
    height: hp("4.508196721311475%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.800000000000001%"),
    top: hp("3.4153005464480657%")
  },
  View_1_129: {
    width: wp("81.33333333333333%"),
    minWidth: wp("81.33333333333333%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_130: {
    width: wp("26.13333333333333%"),
    minWidth: wp("26.13333333333333%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.46666666666666%"),
    top: hp("2.1857923497267677%"),
    justifyContent: "flex-start"
  },
  Text_1_130: {
    color: "rgba(231, 231, 233, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
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
