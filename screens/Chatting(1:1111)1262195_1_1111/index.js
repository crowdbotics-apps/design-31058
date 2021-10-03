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
      <View style={styles.View_1_1113}>
        <View style={styles.View_1_1114}>
          <View style={styles.View_1_1115}>
            <View style={styles.View_1_1116} />
          </View>
          <View style={styles.View_1_1117}>
            <View style={styles.View_1_1118}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/500c/8635/23c645fff4dbb9746420e7019da0cfda"
                }}
                style={styles.ImageBackground_1_1119}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e18/6776/367af020468e89fabf1040391329d48a"
                }}
                style={styles.ImageBackground_1_1125}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ebf2/ae37/5fa6fd4ff8d0a4c08a929adc1044ab21"
                }}
                style={styles.ImageBackground_1_1126}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b35/bf41/1f2d28e6130990d886465adc1e7930a0"
              }}
              style={styles.ImageBackground_1_1127}
            />
            <View style={styles.View_1_1134}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dad6/68dc/bcfdd4d59f5c094c025e8cc3c2f2eb54"
                }}
                style={styles.ImageBackground_1_1135}
              />
              <View style={styles.View_1_1136}>
                <Text style={styles.Text_1_1136}>Go</Text>
              </View>
            </View>
            <View style={styles.View_1_1137}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df60/6a99/66243ad8a8bb90f8f00a0d7b09342bea"
                }}
                style={styles.ImageBackground_1_1138}
              />
              <View style={styles.View_1_1139}>
                <Text style={styles.Text_1_1139}>space</Text>
              </View>
            </View>
            <View style={styles.View_1_1140}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cbd9/959c/0ece9ab5995e5c5712e559ef426bda62"
                }}
                style={styles.ImageBackground_1_1141}
              />
              <View style={styles.View_1_1142}>
                <Text style={styles.Text_1_1142}>123</Text>
              </View>
            </View>
            <View style={styles.View_1_1143}>
              <View style={styles.View_1_1144}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e324/402c/deeb4d76d9fb93884eba1199d267d577"
                  }}
                  style={styles.ImageBackground_1_1145}
                />
                <View style={styles.View_1_1146}>
                  <Text style={styles.Text_1_1146}> </Text>
                </View>
              </View>
              <View style={styles.View_1_1147}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c39/64fb/b73a8085ea4531d8f63951d655fd1d31"
                  }}
                  style={styles.ImageBackground_1_1148}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e5e/469c/ab3e38f9d7e0700ffd7f6a210831a60a"
                  }}
                  style={styles.ImageBackground_1_1151}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
                  }}
                  style={styles.ImageBackground_1_1152}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
                  }}
                  style={styles.ImageBackground_1_1153}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
                  }}
                  style={styles.ImageBackground_1_1154}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
                  }}
                  style={styles.ImageBackground_1_1155}
                />
              </View>
            </View>
            <View style={styles.View_1_1156}>
              <View style={styles.View_1_1157}>
                <View style={styles.View_1_1158} />
                <View style={styles.View_1_1159}>
                  <Text style={styles.Text_1_1159}> </Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f938/2ece/d5f539092a70965fe92b98d255f817a9"
                }}
                style={styles.ImageBackground_1_1160}
              />
            </View>
            <View style={styles.View_1_1161}>
              <View style={styles.View_1_1162} />
              <View style={styles.View_1_1163}>
                <Text style={styles.Text_1_1163}>M</Text>
              </View>
            </View>
            <View style={styles.View_1_1164}>
              <View style={styles.View_1_1165} />
              <View style={styles.View_1_1166}>
                <Text style={styles.Text_1_1166}>N</Text>
              </View>
            </View>
            <View style={styles.View_1_1167}>
              <View style={styles.View_1_1168} />
              <View style={styles.View_1_1169}>
                <Text style={styles.Text_1_1169}>B</Text>
              </View>
            </View>
            <View style={styles.View_1_1170}>
              <View style={styles.View_1_1171} />
              <View style={styles.View_1_1172}>
                <Text style={styles.Text_1_1172}>V</Text>
              </View>
            </View>
            <View style={styles.View_1_1173}>
              <View style={styles.View_1_1174} />
              <View style={styles.View_1_1175}>
                <Text style={styles.Text_1_1175}>C</Text>
              </View>
            </View>
            <View style={styles.View_1_1176}>
              <View style={styles.View_1_1177} />
              <View style={styles.View_1_1178}>
                <Text style={styles.Text_1_1178}>X</Text>
              </View>
            </View>
            <View style={styles.View_1_1179}>
              <View style={styles.View_1_1180} />
              <View style={styles.View_1_1181}>
                <Text style={styles.Text_1_1181}>Z</Text>
              </View>
            </View>
            <View style={styles.View_1_1182}>
              <View style={styles.View_1_1183} />
              <View style={styles.View_1_1184}>
                <Text style={styles.Text_1_1184}>L</Text>
              </View>
            </View>
            <View style={styles.View_1_1185}>
              <View style={styles.View_1_1186} />
              <View style={styles.View_1_1187}>
                <Text style={styles.Text_1_1187}>K</Text>
              </View>
            </View>
            <View style={styles.View_1_1188}>
              <View style={styles.View_1_1189} />
              <View style={styles.View_1_1190}>
                <Text style={styles.Text_1_1190}>J</Text>
              </View>
            </View>
            <View style={styles.View_1_1191}>
              <View style={styles.View_1_1192} />
              <View style={styles.View_1_1193}>
                <Text style={styles.Text_1_1193}>H</Text>
              </View>
            </View>
            <View style={styles.View_1_1194}>
              <View style={styles.View_1_1195} />
              <View style={styles.View_1_1196}>
                <Text style={styles.Text_1_1196}>G</Text>
              </View>
            </View>
            <View style={styles.View_1_1197}>
              <View style={styles.View_1_1198} />
              <View style={styles.View_1_1199}>
                <Text style={styles.Text_1_1199}>F</Text>
              </View>
            </View>
            <View style={styles.View_1_1200}>
              <View style={styles.View_1_1201} />
              <View style={styles.View_1_1202}>
                <Text style={styles.Text_1_1202}>D</Text>
              </View>
            </View>
            <View style={styles.View_1_1203}>
              <View style={styles.View_1_1204} />
              <View style={styles.View_1_1205}>
                <Text style={styles.Text_1_1205}>S</Text>
              </View>
            </View>
            <View style={styles.View_1_1206}>
              <View style={styles.View_1_1207} />
              <View style={styles.View_1_1208}>
                <Text style={styles.Text_1_1208}>A</Text>
              </View>
            </View>
            <View style={styles.View_1_1209}>
              <View style={styles.View_1_1210} />
              <View style={styles.View_1_1211}>
                <Text style={styles.Text_1_1211}>P</Text>
              </View>
            </View>
            <View style={styles.View_1_1212}>
              <View style={styles.View_1_1213} />
              <View style={styles.View_1_1214}>
                <Text style={styles.Text_1_1214}>O</Text>
              </View>
            </View>
            <View style={styles.View_1_1215}>
              <View style={styles.View_1_1216} />
              <View style={styles.View_1_1217}>
                <Text style={styles.Text_1_1217}>I</Text>
              </View>
            </View>
            <View style={styles.View_1_1218}>
              <View style={styles.View_1_1219} />
              <View style={styles.View_1_1220}>
                <Text style={styles.Text_1_1220}>U</Text>
              </View>
            </View>
            <View style={styles.View_1_1221}>
              <View style={styles.View_1_1222} />
              <View style={styles.View_1_1223}>
                <Text style={styles.Text_1_1223}>Y</Text>
              </View>
            </View>
            <View style={styles.View_1_1224}>
              <View style={styles.View_1_1225} />
              <View style={styles.View_1_1226}>
                <Text style={styles.Text_1_1226}>T</Text>
              </View>
            </View>
            <View style={styles.View_1_1227}>
              <View style={styles.View_1_1228} />
              <View style={styles.View_1_1229}>
                <Text style={styles.Text_1_1229}>R</Text>
              </View>
            </View>
            <View style={styles.View_1_1230}>
              <View style={styles.View_1_1231} />
              <View style={styles.View_1_1232}>
                <Text style={styles.Text_1_1232}>E</Text>
              </View>
            </View>
            <View style={styles.View_1_1233}>
              <View style={styles.View_1_1234} />
              <View style={styles.View_1_1235}>
                <Text style={styles.Text_1_1235}>W</Text>
              </View>
            </View>
            <View style={styles.View_1_1236}>
              <View style={styles.View_1_1237} />
              <View style={styles.View_1_1238}>
                <Text style={styles.Text_1_1238}>Q</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_1_1239}>
          <View style={styles.View_1_1240}>
            <View style={styles.View_1_1241} />
          </View>
          <View style={styles.View_1_1242} />
          <View style={styles.View_1_1243}>
            <View style={styles.View_1_1244} />
            <View style={styles.View_1_1245} />
            <View style={styles.View_1_1246}>
              <Text style={styles.Text_1_1246}>the</Text>
            </View>
          </View>
          <View style={styles.View_1_1247}>
            <View style={styles.View_1_1248} />
            <View style={styles.View_1_1249} />
            <View style={styles.View_1_1250}>
              <Text style={styles.Text_1_1250}>the</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/641f/9461/260f24982950f32f20222c34f1b8fc36"
            }}
            style={styles.ImageBackground_1_1251}
          />
          <View style={styles.View_1_1252}>
            <View style={styles.View_1_1253} />
            <View style={styles.View_1_1254} />
            <View style={styles.View_1_1255}>
              <Text style={styles.Text_1_1255}>the</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1_1256} />
      <View style={styles.View_1_1258}>
        <View style={styles.View_1_1259} />
        <View style={styles.View_1_1260} />
        <View style={styles.View_1_1261}>
          <Text style={styles.Text_1_1261}>Aa</Text>
        </View>
        <View style={styles.View_1_1262}>
          <View style={styles.View_1_1263}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64aa/0095/f90b9d0c3625d3156f60053f4699b78b"
              }}
              style={styles.ImageBackground_1_1264}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_11_1434}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/32f9/d586/4688c243b3c14f0cf01940681b8714b9"
          }}
          style={styles.ImageBackground_1_1268}
        />
      </View>
      <View style={styles.View_1_1279}>
        <Text style={styles.Text_1_1279}>1 April 12:00</Text>
      </View>
      <View style={styles.View_1_1280}>
        <Text style={styles.Text_1_1280}>12:30</Text>
      </View>
      <View style={styles.View_11_1428}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e832/d981/c69c4ac787bd49d5541902584e25d0f4"
          }}
          style={styles.ImageBackground_1_1284}
        />
        <View style={styles.View_1_1285}>
          <Text style={styles.Text_1_1285}>
            Hey, Alex! Nice to meet you! I’d like to hire a walker and you’re
            perfect one for me. Can you help me out?
          </Text>
        </View>
      </View>
      <View style={styles.View_11_1433}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b895/1a12/2f2d5af360dfd79e8038adbb98e0bcd3"
          }}
          style={styles.ImageBackground_1_1281}
        />
        <View style={styles.View_1_1286}>
          <Text style={styles.Text_1_1286}>Okay, I’m waiting for a call)</Text>
        </View>
      </View>
      <View style={styles.View_11_1429}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c86/34fe/3a778805cc8fdabc5c294790801f085d"
          }}
          style={styles.ImageBackground_1_1288}
        />
        <View style={styles.View_1_1289}>
          <Text style={styles.Text_1_1289}>
            Hi! That’s great! Let me give you a call and we’ll discuss all the
            details
          </Text>
        </View>
      </View>
      <View style={styles.View_11_1436}>
        <View style={styles.View_1_1274}>
          <View style={styles.View_1_1275}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4300/ef73/da96f4cfe9d594935337b34c72f3597d"
              }}
              style={styles.ImageBackground_I1_1275_0_3972}
            />
          </View>
        </View>
        <View style={styles.View_11_1427}>
          <View style={styles.View_1_1271}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aedc/6380/f416ed9d17ec42a0101187c71e28e72a"
              }}
              style={styles.ImageBackground_1_1272}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abed/2f5d/cdfa090d721cfd9f71f904d329883a57"
              }}
              style={styles.ImageBackground_1_1273}
            />
          </View>
          <View style={styles.View_11_1426}>
            <View style={styles.View_1_1277}>
              <Text style={styles.Text_1_1277}>Alex Murray</Text>
            </View>
            <View style={styles.View_11_1425}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83c6/b0ea/c7badbab4dafc69bcae4a2a48a60657b"
                }}
                style={styles.ImageBackground_1_1282}
              />
              <View style={styles.View_1_1278}>
                <Text style={styles.Text_1_1278}>Online</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_11_1435}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b73/8b21/a5fa572ee2d0751e19c60f3b7f3f6b4b"
            }}
            style={styles.ImageBackground_I11_1435_1_1291}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(252, 252, 252, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_1_1113: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("45.76502732240437%"),
    minHeight: hp("45.76502732240437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("65.1639344262295%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1_1114: {
    width: wp("100%"),
    height: hp("39.75409836065574%"),
    top: hp("6.010928961748633%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1_1115: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("39.75409836065574%"),
    minHeight: hp("39.75409836065574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1116: {
    width: wp("100%"),
    height: hp("39.75409836065574%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(218, 221, 226, 1)"
  },
  View_1_1117: {
    width: wp("98.4%"),
    minWidth: wp("98.4%"),
    height: hp("35.38251366120219%"),
    minHeight: hp("35.38251366120219%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8%"),
    top: hp("1.092896174863398%")
  },
  View_1_1118: {
    width: wp("4%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.2%"),
    top: hp("31.83060109289616%")
  },
  ImageBackground_1_1119: {
    width: wp("4%"),
    height: hp("2.0038542200307377%"),
    minHeight: hp("2.0038542200307377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.4114463264173764%")
  },
  ImageBackground_1_1125: {
    width: wp("2.4019694010416663%"),
    height: hp("2.4584494001878414%"),
    minHeight: hp("2.4584494001878414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999837239583343%"),
    top: hp("0%")
  },
  ImageBackground_1_1126: {
    width: wp("1.5129231770833333%"),
    height: hp("2.0038542200307377%"),
    minHeight: hp("2.0038542200307377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2443033854166714%"),
    top: hp("0.2278145545167547%")
  },
  ImageBackground_1_1127: {
    width: wp("7.199999999999999%"),
    height: hp("3.6885245901639343%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666667%"),
    top: hp("31.69398907103826%")
  },
  View_1_1134: {
    width: wp("23.466666666666665%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.93333333333334%"),
    top: hp("22.131147540983605%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1_1135: {
    flexGrow: 1,
    width: wp("23.466666666666665%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1136: {
    flexGrow: 1,
    width: wp("23.466666666666665%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1136: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_1_1137: {
    width: wp("48.53333333333333%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.8%"),
    top: hp("22.131147540983605%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1_1138: {
    flexGrow: 1,
    width: wp("48.53333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1139: {
    flexGrow: 1,
    width: wp("48.53333333333333%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1139: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_1_1140: {
    width: wp("23.200000000000003%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22.131147540983605%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1_1141: {
    flexGrow: 1,
    width: wp("23.200000000000003%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1142: {
    flexGrow: 1,
    width: wp("23.200000000000003%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1142: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_1_1143: {
    width: wp("11.200000000000001%"),
    minWidth: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.2%"),
    top: hp("14.754098360655732%")
  },
  View_1_1144: {
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1_1145: {
    flexGrow: 1,
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1146: {
    flexGrow: 1,
    width: wp("11.200000000000001%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1146: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_1_1147: {
    width: wp("6.042659505208333%"),
    height: hp("2.3216039105191255%"),
    minHeight: hp("2.3216039105191255%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5759928385416657%"),
    top: hp("1.7294961898053316%")
  },
  ImageBackground_1_1148: {
    width: wp("6.042659505208333%"),
    height: hp("2.3216039105191255%"),
    minHeight: hp("2.3216039105191255%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_1151: {
    width: wp("1.7841796875%"),
    height: hp("0.9131593130976776%"),
    minHeight: hp("0.9131593130976776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7613118489583286%"),
    top: hp("0.7033718088285497%")
  },
  ImageBackground_1_1152: {
    width: wp("0.3006998697916667%"),
    height: hp("0.15418881275614754%"),
    minHeight: hp("0.15418881275614754%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.287060546874997%"),
    top: hp("0.679791559938522%")
  },
  ImageBackground_1_1153: {
    width: wp("0.3021158854166667%"),
    height: hp("0.15478915855532788%"),
    minHeight: hp("0.15478915855532788%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.717301432291677%"),
    top: hp("1.4832543545082046%")
  },
  ImageBackground_1_1154: {
    width: wp("0.30096028645833334%"),
    height: hp("0.1540554025785519%"),
    minHeight: hp("0.1540554025785519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.289697265624994%"),
    top: hp("1.484121520662569%")
  },
  ImageBackground_1_1155: {
    width: wp("0.3021321614583333%"),
    height: hp("0.15478915855532788%"),
    minHeight: hp("0.15478915855532788%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.720198567708323%"),
    top: hp("0.679958322660525%")
  },
  View_1_1156: {
    width: wp("11.200000000000001%"),
    minWidth: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14.754098360655732%")
  },
  View_1_1157: {
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1_1158: {
    flexGrow: 1,
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_1_1159: {
    width: wp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.775%"),
    top: hp("1.092896174863398%"),
    justifyContent: "flex-start"
  },
  Text_1_1159: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  ImageBackground_1_1160: {
    width: wp("5.03466796875%"),
    height: hp("2.248128255208333%"),
    minHeight: hp("2.248128255208333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.109334309895833%"),
    top: hp("1.6666599961577901%")
  },
  View_1_1161: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.2%"),
    top: hp("14.754098360655732%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1_1162: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_1_1163: {
    width: wp("5.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7333333333333343%"),
    top: hp("1.092896174863398%"),
    justifyContent: "flex-start"
  },
  Text_1_1163: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_1_1164: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.06666666666666%"),
    top: hp("14.754098360655732%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1_1165: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_1_1166: {
    width: wp("4.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.13333333333334%"),
    top: hp("1.092896174863398%"),
    justifyContent: "flex-start"
  },
  Text_1_1166: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_1_1167: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.93333333333334%"),
    top: hp("14.754098360655732%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1_1168: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_1_1169: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000057%"),
    top: hp("1.092896174863398%"),
    justifyContent: "flex-start"
  },
  Text_1_1169: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_1_1170: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.06666666666667%"),
    top: hp("14.754098360655732%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1_1171: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_1_1172: {
    width: wp("4.266666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("1.092896174863398%"),
    justifyContent: "flex-start"
  },
  Text_1_1172: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_1_1173: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.93333333333334%"),
    top: hp("14.754098360655732%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1_1174: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_1_1175: {
    width: wp("4.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2666666666666657%"),
    top: hp("1.092896174863398%"),
    justifyContent: "flex-start"
  },
  Text_1_1175: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_1_1176: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.066666666666666%"),
    top: hp("14.754098360655732%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1_1177: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_1_1178: {
    width: wp("4.266666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333364%"),
    top: hp("1.092896174863398%"),
    justifyContent: "flex-start"
  },
  Text_1_1178: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_1_1179: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333332%"),
    top: hp("14.754098360655732%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1_1180: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_1_1181: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000004%"),
    top: hp("1.092896174863398%"),
    justifyContent: "flex-start"
  },
  Text_1_1181: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_1_1182: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666668%"),
    top: hp("7.377049180327873%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1_1183: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_1_1184: {
    width: wp("3.4666666666666663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666657%"),
    top: hp("1.0928961748633697%"),
    justifyContent: "flex-start"
  },
  Text_1_1184: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_1_1185: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.93333333333334%"),
    top: hp("7.377049180327873%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1_1186: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_1_1187: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999915%"),
    top: hp("1.0928961748633697%"),
    justifyContent: "flex-start"
  },
  Text_1_1187: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_1_1188: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.06666666666666%"),
    top: hp("7.377049180327873%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1_1189: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_1_1190: {
    width: wp("3.4666666666666663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8000000000000114%"),
    top: hp("1.0928961748633697%"),
    justifyContent: "flex-start"
  },
  Text_1_1190: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_1_1191: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.93333333333334%"),
    top: hp("7.377049180327873%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1_1192: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_1_1193: {
    width: wp("4.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("1.0928961748633697%"),
    justifyContent: "flex-start"
  },
  Text_1_1193: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_1_1194: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.06666666666667%"),
    top: hp("7.377049180327873%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1_1195: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_1_1196: {
    width: wp("4.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("1.0928961748633697%"),
    justifyContent: "flex-start"
  },
  Text_1_1196: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_1_1197: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.93333333333334%"),
    top: hp("7.377049180327873%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1_1198: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_1_1199: {
    width: wp("3.4666666666666663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%"),
    top: hp("1.0928961748633697%"),
    justifyContent: "flex-start"
  },
  Text_1_1199: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_1_1200: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.066666666666666%"),
    top: hp("7.377049180327873%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1_1201: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_1_1202: {
    width: wp("4.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2666666666666657%"),
    top: hp("1.0928961748633697%"),
    justifyContent: "flex-start"
  },
  Text_1_1202: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_1_1203: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333332%"),
    top: hp("7.377049180327873%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1_1204: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_1_1205: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.533333333333333%"),
    top: hp("1.0928961748633697%"),
    justifyContent: "flex-start"
  },
  Text_1_1205: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_1_1206: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666666%"),
    top: hp("7.377049180327873%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1_1207: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_1_1208: {
    width: wp("4.266666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333337%"),
    top: hp("1.0928961748633697%"),
    justifyContent: "flex-start"
  },
  Text_1_1208: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_1_1209: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.86666666666666%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1_1210: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_1_1211: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5333333333333456%"),
    top: hp("1.0928961748633839%"),
    justifyContent: "flex-start"
  },
  Text_1_1211: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_1_1212: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.00000000000001%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1_1213: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_1_1214: {
    width: wp("4.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.86666666666666%"),
    top: hp("1.0928961748633839%"),
    justifyContent: "flex-start"
  },
  Text_1_1214: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_1_1215: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.86666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1_1216: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_1_1217: {
    width: wp("1.866666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5999999999999943%"),
    top: hp("1.0928961748633839%"),
    justifyContent: "flex-start"
  },
  Text_1_1217: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_1_1218: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1_1219: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_1_1220: {
    width: wp("4.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("1.0928961748633839%"),
    justifyContent: "flex-start"
  },
  Text_1_1220: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_1_1221: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.866666666666674%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1_1222: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_1_1223: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999915%"),
    top: hp("1.0928961748633839%"),
    justifyContent: "flex-start"
  },
  Text_1_1223: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_1_1224: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1_1225: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_1_1226: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5333333333333385%"),
    top: hp("1.0928961748633839%"),
    justifyContent: "flex-start"
  },
  Text_1_1226: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_1_1227: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.866666666666664%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1_1228: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_1_1229: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999986%"),
    top: hp("1.0928961748633839%"),
    justifyContent: "flex-start"
  },
  Text_1_1229: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_1_1230: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1_1231: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_1_1232: {
    width: wp("3.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.400000000000002%"),
    top: hp("1.0928961748633839%"),
    justifyContent: "flex-start"
  },
  Text_1_1232: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_1_1233: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.866666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1_1234: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_1_1235: {
    width: wp("5.866666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.466666666666665%"),
    top: hp("1.0928961748633839%"),
    justifyContent: "flex-start"
  },
  Text_1_1235: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_1_1236: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1_1237: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_1_1238: {
    width: wp("4.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.866666666666667%"),
    top: hp("1.0928961748633839%"),
    justifyContent: "flex-start"
  },
  Text_1_1238: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_1_1239: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1_1240: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1241: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(218, 221, 226, 1)"
  },
  View_1_1242: {
    width: wp("32.266666666666666%"),
    minWidth: wp("32.266666666666666%"),
    height: hp("5.191256830601093%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666666666%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(243, 245, 246, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_1_1243: {
    width: wp("32.266666666666666%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.46666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1_1244: {
    width: wp("32.266666666666666%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_1_1245: {
    width: wp("32.266666666666666%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_1_1246: {
    flexGrow: 1,
    width: wp("32.266666666666666%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1246: {
    color: "rgba(65, 66, 68, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_1_1247: {
    width: wp("32.800000000000004%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.6%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1_1248: {
    width: wp("32.800000000000004%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_1_1249: {
    width: wp("32.800000000000004%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_1_1250: {
    flexGrow: 1,
    width: wp("32.800000000000004%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1250: {
    color: "rgba(65, 66, 68, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_1_1251: {
    width: wp("0.5319173177083333%"),
    height: hp("3.296999071465164%"),
    minHeight: hp("3.296999071465164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.53297526041668%"),
    top: hp("1.971602309597003%")
  },
  View_1_1252: {
    width: wp("32.266666666666666%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1_1253: {
    width: wp("32.266666666666666%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_1_1254: {
    width: wp("32.266666666666666%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_1_1255: {
    flexGrow: 1,
    width: wp("32.266666666666666%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1255: {
    color: "rgba(65, 66, 68, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_1_1256: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("55.73770491803278%"),
    backgroundColor: "rgba(251, 251, 251, 1)"
  },
  View_1_1258: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.533333333333335%"),
    top: hp("57.377049180327866%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1_1259: {
    width: wp("76%"),
    height: hp("6.147540983606557%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(245, 245, 245, 1)"
  },
  View_1_1260: {
    width: wp("0.5333333333333333%"),
    height: hp("3.7568306010928962%"),
    top: hp("1.19535519125683%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999993%"),
    backgroundColor: "rgba(251, 114, 76, 1)"
  },
  View_1_1261: {
    width: wp("6.133333333333333%"),
    minWidth: wp("6.133333333333333%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%"),
    top: hp("1.3661202185792334%"),
    justifyContent: "flex-start"
  },
  Text_1_1261: {
    color: "rgba(176, 176, 176, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.6499999761581421,
    textTransform: "none"
  },
  View_1_1262: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.3661202185792334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.66666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1263: {
    flexGrow: 1,
    width: wp("4.533333333333333%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9333333333333229%"),
    top: hp("0.2732240437158495%")
  },
  ImageBackground_1_1264: {
    width: wp("4.533333333333333%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_1434: {
    width: wp("11.733333333333333%"),
    minWidth: wp("11.733333333333333%"),
    height: hp("6.009995090505464%"),
    minHeight: hp("6.009995090505464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("57.377049180327866%"),
    backgroundColor: "rgba(245, 245, 245, 1)"
  },
  ImageBackground_1_1268: {
    width: wp("2.666666666666667%"),
    height: hp("1.3651863473360657%"),
    top: hp("2.3224043715847102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333332%")
  },
  View_1_1279: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.266666666666666%"),
    top: hp("15.027322404371585%"),
    justifyContent: "flex-start"
  },
  Text_1_1279: {
    color: "rgba(174, 174, 178, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05329999953508378,
    textTransform: "none"
  },
  View_1_1280: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.86666666666667%"),
    top: hp("43.98907103825137%"),
    justifyContent: "flex-start"
  },
  Text_1_1280: {
    color: "rgba(174, 174, 178, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05329999953508378,
    textTransform: "none"
  },
  View_11_1428: {
    width: wp("57.333333333333336%"),
    minWidth: wp("57.333333333333336%"),
    height: hp("12.431693989071038%"),
    minHeight: hp("12.431693989071038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.4%"),
    top: hp("19.398907103825135%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_1284: {
    flexGrow: 1,
    width: wp("57.333333333333336%"),
    height: hp("12.431693989071038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1285: {
    flexGrow: 1,
    width: wp("48.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.06666666666667%"),
    top: hp("1.2295081967213157%"),
    justifyContent: "flex-start"
  },
  Text_1_1285: {
    color: "rgba(247, 247, 248, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_11_1433: {
    width: wp("57.333333333333336%"),
    minWidth: wp("57.333333333333336%"),
    height: hp("6.059723734204235%"),
    minHeight: hp("6.059723734204235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.4%"),
    top: hp("48.36065573770492%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_1281: {
    flexGrow: 1,
    width: wp("57.333333333333336%"),
    height: hp("6.059723734204235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1286: {
    flexGrow: 1,
    width: wp("48.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6000000000000014%"),
    top: hp("1.775956284153004%"),
    justifyContent: "flex-start"
  },
  Text_1_1286: {
    color: "rgba(247, 247, 248, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_11_1429: {
    width: wp("57.333333333333336%"),
    minWidth: wp("57.333333333333336%"),
    height: hp("9.426229508196721%"),
    minHeight: hp("9.426229508196721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("33.19672131147541%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_1288: {
    flexGrow: 1,
    width: wp("57.333333333333336%"),
    height: hp("9.426229508196721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1289: {
    flexGrow: 1,
    width: wp("49.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333333%"),
    top: hp("0.9562841530054627%"),
    justifyContent: "flex-start"
  },
  Text_1_1289: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_11_1436: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("5.46448087431694%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1274: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.9125683060109289%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1275: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_1275_0_3972: {
    flexGrow: 1,
    width: wp("3.3333740234375%"),
    height: hp("1.3716900934938525%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9444010416666666%"),
    top: hp("0.7114764771174871%")
  },
  View_11_1427: {
    flexGrow: 1,
    width: wp("43.46666666666666%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.666666666666668%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1271: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_1272: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_1273: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_11_1426: {
    width: wp("28.000000000000004%"),
    minWidth: wp("28.000000000000004%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.466666666666663%"),
    top: hp("0.13661202185792387%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1277: {
    width: wp("28.000000000000004%"),
    minWidth: wp("28.000000000000004%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1277: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_11_1425: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.5519125683060118%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_1282: {
    width: wp("1.6%"),
    minWidth: wp("1.6%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054644%")
  },
  View_1_1278: {
    width: wp("11.200000000000001%"),
    minWidth: wp("11.200000000000001%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1278: {
    color: "rgba(174, 174, 178, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05329999953508378,
    textTransform: "none"
  },
  View_11_1435: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.4%"),
    top: hp("1.639344262295082%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I11_1435_1_1291: {
    flexGrow: 1,
    width: wp("5.066666666666666%"),
    height: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6666666666666572%"),
    top: hp("0.34153005464480835%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
