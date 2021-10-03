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
      <View style={styles.View_11_1088}>
        <View style={styles.View_11_1411}>
          <View style={styles.View_11_1412}>
            <Text style={styles.Text_11_1412}>Hey! How’s your dog? ∙ 1min</Text>
          </View>
          <View style={styles.View_11_1413}>
            <Text style={styles.Text_11_1413}>Will Knowles</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8717/de6a/9bb122cb8eeeae76ea2dda24ad2a54fa"
            }}
            style={styles.ImageBackground_11_1414}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef17/50a6/21243989ead71cc0340e27c666b2058e"
            }}
            style={styles.ImageBackground_11_1415}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef17/50a6/21243989ead71cc0340e27c666b2058e"
            }}
            style={styles.ImageBackground_11_1416}
          />
          <View style={styles.View_11_1420}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f43d/3c1d/8dfd019dd3a30ec76b18f268fa1bd538"
              }}
              style={styles.ImageBackground_11_1421}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/31a7/1822/c78df7bc3980580032ff351c0b4cf67f"
              }}
              style={styles.ImageBackground_11_1422}
            />
          </View>
        </View>
        <View style={styles.View_11_1398}>
          <View style={styles.View_11_1399}>
            <Text style={styles.Text_11_1399}>Let’s go out! ∙ 5h</Text>
          </View>
          <View style={styles.View_11_1400}>
            <Text style={styles.Text_11_1400}>Ryan Bond</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef17/50a6/21243989ead71cc0340e27c666b2058e"
            }}
            style={styles.ImageBackground_11_1401}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef17/50a6/21243989ead71cc0340e27c666b2058e"
            }}
            style={styles.ImageBackground_11_1402}
          />
          <View style={styles.View_11_1406}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f43d/3c1d/8dfd019dd3a30ec76b18f268fa1bd538"
              }}
              style={styles.ImageBackground_11_1407}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9674/0254/86446f19ac0038fb496ebe3d38c2a092"
              }}
              style={styles.ImageBackground_11_1408}
            />
          </View>
        </View>
        <View style={styles.View_11_1388}>
          <View style={styles.View_11_1389}>
            <Text style={styles.Text_11_1389}>
              Hey! Long time no see ∙ 1min
            </Text>
          </View>
          <View style={styles.View_11_1390}>
            <Text style={styles.Text_11_1390}>Sirena Paul</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8717/de6a/9bb122cb8eeeae76ea2dda24ad2a54fa"
            }}
            style={styles.ImageBackground_11_1391}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef17/50a6/21243989ead71cc0340e27c666b2058e"
            }}
            style={styles.ImageBackground_11_1392}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef17/50a6/21243989ead71cc0340e27c666b2058e"
            }}
            style={styles.ImageBackground_11_1393}
          />
          <View style={styles.View_11_1396}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f43d/3c1d/8dfd019dd3a30ec76b18f268fa1bd538"
              }}
              style={styles.ImageBackground_11_1397}
            />
          </View>
        </View>
        <View style={styles.View_11_1377}>
          <View style={styles.View_11_1378}>
            <Text style={styles.Text_11_1378}>You fed the dog? ∙ 6h</Text>
          </View>
          <View style={styles.View_11_1379}>
            <Text style={styles.Text_11_1379}>Matt Chapman</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef17/50a6/21243989ead71cc0340e27c666b2058e"
            }}
            style={styles.ImageBackground_11_1380}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef17/50a6/21243989ead71cc0340e27c666b2058e"
            }}
            style={styles.ImageBackground_11_1381}
          />
          <View style={styles.View_11_1385}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f43d/3c1d/8dfd019dd3a30ec76b18f268fa1bd538"
              }}
              style={styles.ImageBackground_11_1386}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/020e/5ad0/af21d5488447fb296f5707134106a0f3"
              }}
              style={styles.ImageBackground_11_1387}
            />
          </View>
        </View>
        <View style={styles.View_11_1366}>
          <View style={styles.View_11_1367}>
            <Text style={styles.Text_11_1367}>How are you doing? ∙ 7h</Text>
          </View>
          <View style={styles.View_11_1368}>
            <Text style={styles.Text_11_1368}>Laura Pierce</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef17/50a6/21243989ead71cc0340e27c666b2058e"
            }}
            style={styles.ImageBackground_11_1369}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef17/50a6/21243989ead71cc0340e27c666b2058e"
            }}
            style={styles.ImageBackground_11_1370}
          />
          <View style={styles.View_11_1374}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f43d/3c1d/8dfd019dd3a30ec76b18f268fa1bd538"
              }}
              style={styles.ImageBackground_11_1375}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae08/9d60/9683fd45128574e05d02f04f11f84f5d"
              }}
              style={styles.ImageBackground_11_1376}
            />
          </View>
        </View>
        <View style={styles.View_11_1357}>
          <View style={styles.View_11_1358}>
            <Text style={styles.Text_11_1358}>Hey! Long time no see ∙ 5h</Text>
          </View>
          <View style={styles.View_11_1359}>
            <Text style={styles.Text_11_1359}>Hazel Reed</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef17/50a6/21243989ead71cc0340e27c666b2058e"
            }}
            style={styles.ImageBackground_11_1360}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef17/50a6/21243989ead71cc0340e27c666b2058e"
            }}
            style={styles.ImageBackground_11_1361}
          />
          <View style={styles.View_11_1364}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f43d/3c1d/8dfd019dd3a30ec76b18f268fa1bd538"
              }}
              style={styles.ImageBackground_11_1365}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_11_1261}>
        <View style={styles.View_11_1262}>
          <View style={styles.View_11_1263}>
            <Text style={styles.Text_11_1263}>Chat</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_11_1468}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6679/1845/5bf05766e251ac0592f8055975c4e0c2"
          }}
          style={styles.ImageBackground_I11_1468_1_503}
        />
        <View style={styles.View_I11_1468_1_504}>
          <View style={styles.View_I11_1468_1_505}>
            <View style={styles.View_I11_1468_1_506}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/097c/5f28/3823d3e86857232217e4f239ebe77753"
                }}
                style={styles.ImageBackground_I11_1468_1_507}
              />
            </View>
            <View style={styles.View_I11_1468_1_509}>
              <Text style={styles.Text_I11_1468_1_509}>Home</Text>
            </View>
          </View>
          <View style={styles.View_I11_1468_1_510}>
            <View style={styles.View_I11_1468_1_511}>
              <View style={styles.View_I11_1468_1_512}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3cb/5c51/8c657c6f249dcb91ba9c226b67190d9d"
                  }}
                  style={styles.ImageBackground_I11_1468_1_513}
                />
              </View>
            </View>
            <View style={styles.View_I11_1468_1_520}>
              <Text style={styles.Text_I11_1468_1_520}>Moments</Text>
            </View>
          </View>
          <View style={styles.View_I11_1468_1_521}>
            <View style={styles.View_I11_1468_1_522}>
              <View style={styles.View_I11_1468_1_523}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc7e/6b9f/32730ead261f16f0e3990cdbe0f91ddb"
                  }}
                  style={styles.ImageBackground_I11_1468_1_524}
                />
              </View>
            </View>
            <View style={styles.View_I11_1468_1_527}>
              <Text style={styles.Text_I11_1468_1_527}>Chat</Text>
            </View>
          </View>
          <View style={styles.View_I11_1468_1_528}>
            <View style={styles.View_I11_1468_1_529}>
              <View style={styles.View_I11_1468_1_530}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c77/0593/8f6b6baaefdcdde616b690913658a335"
                  }}
                  style={styles.ImageBackground_I11_1468_1_531}
                />
              </View>
            </View>
            <View style={styles.View_I11_1468_1_534}>
              <Text style={styles.Text_I11_1468_1_534}>Profile</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_11_1519}>
        <View style={styles.View_11_1501}>
          <View style={styles.View_I11_1501_1_351}>
            <View style={styles.View_I11_1501_1_352}>
              <Text style={styles.Text_I11_1501_1_352}>Search...</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/029b/e308/bb0876f58dd002e3ce4770def59b2008"
            }}
            style={styles.ImageBackground_I11_1501_1_358}
          />
        </View>
        <View style={styles.View_11_1518}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c096/3ec7/e9c51862923b39fd833d5f10755cc519"
            }}
            style={styles.ImageBackground_I11_1518_11_1515}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(252, 252, 252, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_11_1088: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("80.32786885245902%"),
    minHeight: hp("80.32786885245902%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21.03825136612022%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_11_1411: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("13.387978142076504%"),
    minHeight: hp("13.387978142076504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_11_1412: {
    width: wp("62.4%"),
    top: hp("7.240437158469941%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    justifyContent: "flex-start"
  },
  Text_11_1412: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_11_1413: {
    width: wp("34.66666666666667%"),
    top: hp("3.4153005464480835%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    justifyContent: "flex-start"
  },
  Text_11_1413: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_11_1414: {
    width: wp("2.666666666666667%"),
    minWidth: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.46666666666667%"),
    top: hp("6.010928961748633%")
  },
  ImageBackground_11_1415: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_11_1416: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.251366120218577%")
  },
  View_11_1420: {
    width: wp("15.466666666666667%"),
    minWidth: wp("15.466666666666667%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("2.7322404371584668%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_11_1421: {
    width: wp("15.466666666666667%"),
    height: hp("7.923497267759563%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_11_1422: {
    width: wp("15.466666666666667%"),
    height: hp("7.923497267759563%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_11_1398: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("13.387978142076504%"),
    minHeight: hp("13.387978142076504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.387978142076499%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_11_1399: {
    width: wp("62.4%"),
    top: hp("7.240437158469952%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    justifyContent: "flex-start"
  },
  Text_11_1399: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_11_1400: {
    width: wp("29.333333333333332%"),
    top: hp("3.415300546448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    justifyContent: "flex-start"
  },
  Text_11_1400: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_11_1401: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_11_1402: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.251366120218577%")
  },
  View_11_1406: {
    width: wp("15.466666666666667%"),
    minWidth: wp("15.466666666666667%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("2.732240437158474%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_11_1407: {
    width: wp("15.466666666666667%"),
    height: hp("7.923497267759563%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_11_1408: {
    width: wp("15.466666666666667%"),
    height: hp("7.923497267759563%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_11_1388: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("13.387978142076504%"),
    minHeight: hp("13.387978142076504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26.775956284152997%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_11_1389: {
    width: wp("62.4%"),
    top: hp("7.240437158469952%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    justifyContent: "flex-start"
  },
  Text_11_1389: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_11_1390: {
    width: wp("30.933333333333334%"),
    top: hp("3.415300546448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    justifyContent: "flex-start"
  },
  Text_11_1390: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_11_1391: {
    width: wp("2.666666666666667%"),
    minWidth: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.46666666666667%"),
    top: hp("6.010928961748647%")
  },
  ImageBackground_11_1392: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_11_1393: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.251366120218577%")
  },
  View_11_1396: {
    width: wp("15.466666666666667%"),
    minWidth: wp("15.466666666666667%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("2.732240437158474%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_11_1397: {
    width: wp("15.466666666666667%"),
    height: hp("7.923497267759563%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_11_1377: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("13.387978142076504%"),
    minHeight: hp("13.387978142076504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("40.16393442622951%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_11_1378: {
    width: wp("62.4%"),
    top: hp("7.240437158469952%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    justifyContent: "flex-start"
  },
  Text_11_1378: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_11_1379: {
    width: wp("41.86666666666667%"),
    top: hp("3.415300546448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    justifyContent: "flex-start"
  },
  Text_11_1379: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_11_1380: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_11_1381: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.25136612021857%")
  },
  View_11_1385: {
    width: wp("15.466666666666667%"),
    minWidth: wp("15.466666666666667%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("2.732240437158474%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_11_1386: {
    width: wp("15.466666666666667%"),
    height: hp("7.923497267759563%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_11_1387: {
    width: wp("15.466666666666667%"),
    height: hp("7.923497267759563%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_11_1366: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("13.387978142076504%"),
    minHeight: hp("13.387978142076504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("53.55191256830601%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_11_1367: {
    width: wp("65.06666666666666%"),
    top: hp("7.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    justifyContent: "flex-start"
  },
  Text_11_1367: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_11_1368: {
    width: wp("33.86666666666667%"),
    top: hp("3.415300546448094%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    justifyContent: "flex-start"
  },
  Text_11_1368: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_11_1369: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_11_1370: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.251366120218577%")
  },
  View_11_1374: {
    width: wp("15.466666666666667%"),
    minWidth: wp("15.466666666666667%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("2.7322404371584668%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_11_1375: {
    width: wp("15.466666666666667%"),
    height: hp("7.923497267759563%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_11_1376: {
    width: wp("15.466666666666667%"),
    height: hp("7.923497267759563%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_11_1357: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("13.387978142076504%"),
    minHeight: hp("13.387978142076504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("66.93989071038251%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_11_1358: {
    width: wp("62.4%"),
    top: hp("7.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    justifyContent: "flex-start"
  },
  Text_11_1358: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_11_1359: {
    width: wp("29.86666666666667%"),
    top: hp("3.41530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    justifyContent: "flex-start"
  },
  Text_11_1359: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_11_1360: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_11_1361: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.251366120218577%")
  },
  View_11_1364: {
    width: wp("15.466666666666667%"),
    minWidth: wp("15.466666666666667%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("2.7322404371584668%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_11_1365: {
    width: wp("15.466666666666667%"),
    height: hp("7.923497267759563%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_11_1261: {
    width: wp("99.73333333333333%"),
    minWidth: wp("99.73333333333333%"),
    height: hp("10.10928961748634%"),
    minHeight: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.092896174863388%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_11_1262: {
    width: wp("22.933333333333334%"),
    minWidth: wp("22.933333333333334%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("3.278688524590164%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_11_1263: {
    width: wp("22.933333333333334%"),
    minWidth: wp("22.933333333333334%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_11_1263: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_1468: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.748633879781421%"),
    minHeight: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("99.18032786885246%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I11_1468_1_503: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I11_1468_1_504: {
    flexGrow: 1,
    width: wp("90.66666666666666%"),
    height: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("3.2786885245901516%")
  },
  View_I11_1468_1_505: {
    width: wp("8.266666666666666%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I11_1468_1_506: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000007%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I11_1468_1_507: {
    width: wp("5.066666666666666%"),
    height: hp("2.73224043715847%"),
    top: hp("0.2732240437158566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6666666666666661%")
  },
  View_I11_1468_1_509: {
    width: wp("8.266666666666666%"),
    top: hp("3.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I11_1468_1_509: {
    color: "rgba(174, 174, 178, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_I11_1468_1_510: {
    width: wp("13.066666666666665%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.133333333333333%")
  },
  View_I11_1468_1_511: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I11_1468_1_512: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666657%"),
    top: hp("0.546448087431699%")
  },
  ImageBackground_I11_1468_1_513: {
    width: wp("5.866666666666666%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I11_1468_1_520: {
    width: wp("13.066666666666665%"),
    top: hp("3.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I11_1468_1_520: {
    color: "rgba(174, 174, 178, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_I11_1468_1_521: {
    width: wp("6.933333333333333%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.06666666666667%")
  },
  View_I11_1468_1_522: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666657%")
  },
  View_I11_1468_1_523: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I11_1468_1_524: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0.2732240437158566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%")
  },
  View_I11_1468_1_527: {
    width: wp("6.933333333333333%"),
    top: hp("3.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I11_1468_1_527: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_I11_1468_1_528: {
    width: wp("8.799999999999999%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.86666666666667%")
  },
  View_I11_1468_1_529: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666629%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I11_1468_1_530: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666629%"),
    top: hp("0.2732240437158566%")
  },
  ImageBackground_I11_1468_1_531: {
    width: wp("4.266666666666667%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I11_1468_1_534: {
    width: wp("8.799999999999999%"),
    top: hp("3.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I11_1468_1_534: {
    color: "rgba(174, 174, 178, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_11_1519: {
    width: wp("91.2%"),
    minWidth: wp("91.2%"),
    height: hp("5.669398907103825%"),
    minHeight: hp("5.669398907103825%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("11.748633879781421%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_11_1501: {
    flexGrow: 1,
    width: wp("91.2%"),
    height: hp("5.669398907103825%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 240, 240, 1)"
  },
  View_I11_1501_1_351: {
    flexGrow: 1,
    width: wp("38.93331705729167%"),
    height: hp("3.210382513661202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.022216796875%"),
    top: hp("1.2295081967213122%")
  },
  View_I11_1501_1_352: {
    width: wp("32.53331705729167%"),
    minWidth: wp("32.53331705729167%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I11_1501_1_352: {
    color: "rgba(161, 161, 161, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_I11_1501_1_358: {
    flexGrow: 1,
    width: wp("3.55556640625%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.62223307291667%"),
    top: hp("2.0150273224043715%")
  },
  View_11_1518: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%"),
    top: hp("1.3661202185792352%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I11_1518_11_1515: {
    flexGrow: 1,
    width: wp("4.169840494791666%"),
    height: hp("2.1882937905566937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6173339843750005%"),
    top: hp("0.3162488259904368%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
