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
      <View source={{ uri: "null" }} style={styles.View_1_2063} />
      <View style={styles.View_1_2108}>
        <View style={styles.View_1_2109}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e11/29a2/637f066bba36fc5b2cd1d4af212276c4"
            }}
            style={styles.ImageBackground_1_2110}
          />
          <View style={styles.View_1_2111}>
            <View style={styles.View_1_2112}>
              <View style={styles.View_1_2113} />
              <View style={styles.View_1_2114}>
                <Text style={styles.Text_1_2114}>Q</Text>
              </View>
            </View>
            <View style={styles.View_1_2115}>
              <View style={styles.View_1_2116} />
              <View style={styles.View_1_2117}>
                <Text style={styles.Text_1_2117}>Z</Text>
              </View>
            </View>
            <View style={styles.View_1_2118}>
              <View style={styles.View_1_2119} />
              <View style={styles.View_1_2120}>
                <Text style={styles.Text_1_2120}>X</Text>
              </View>
            </View>
            <View style={styles.View_1_2121}>
              <View style={styles.View_1_2122} />
              <View style={styles.View_1_2123}>
                <Text style={styles.Text_1_2123}>C</Text>
              </View>
            </View>
            <View style={styles.View_1_2124}>
              <View style={styles.View_1_2125} />
              <View style={styles.View_1_2126}>
                <Text style={styles.Text_1_2126}>V</Text>
              </View>
            </View>
            <View style={styles.View_1_2127}>
              <View style={styles.View_1_2128} />
              <View style={styles.View_1_2129}>
                <Text style={styles.Text_1_2129}>B</Text>
              </View>
            </View>
            <View style={styles.View_1_2130}>
              <View style={styles.View_1_2131} />
              <View style={styles.View_1_2132}>
                <Text style={styles.Text_1_2132}>N</Text>
              </View>
            </View>
            <View style={styles.View_1_2133}>
              <View style={styles.View_1_2134} />
              <View style={styles.View_1_2135}>
                <Text style={styles.Text_1_2135}>M</Text>
              </View>
            </View>
            <View style={styles.View_1_2136}>
              <View style={styles.View_1_2137} />
              <View style={styles.View_1_2138}>
                <Text style={styles.Text_1_2138}>a</Text>
              </View>
            </View>
            <View style={styles.View_1_2139}>
              <View style={styles.View_1_2140} />
              <View style={styles.View_1_2141}>
                <Text style={styles.Text_1_2141}>S</Text>
              </View>
            </View>
            <View style={styles.View_1_2142}>
              <View style={styles.View_1_2143} />
              <View style={styles.View_1_2144}>
                <Text style={styles.Text_1_2144}>D</Text>
              </View>
            </View>
            <View style={styles.View_1_2145}>
              <View style={styles.View_1_2146} />
              <View style={styles.View_1_2147}>
                <Text style={styles.Text_1_2147}>F</Text>
              </View>
            </View>
            <View style={styles.View_1_2148}>
              <View style={styles.View_1_2149} />
              <View style={styles.View_1_2150}>
                <Text style={styles.Text_1_2150}>G</Text>
              </View>
            </View>
            <View style={styles.View_1_2151}>
              <View style={styles.View_1_2152} />
              <View style={styles.View_1_2153}>
                <Text style={styles.Text_1_2153}>H</Text>
              </View>
            </View>
            <View style={styles.View_1_2154}>
              <View style={styles.View_1_2155} />
              <View style={styles.View_1_2156}>
                <Text style={styles.Text_1_2156}>J</Text>
              </View>
            </View>
            <View style={styles.View_1_2157}>
              <View style={styles.View_1_2158} />
              <View style={styles.View_1_2159}>
                <Text style={styles.Text_1_2159}>K</Text>
              </View>
            </View>
            <View style={styles.View_1_2160}>
              <View style={styles.View_1_2161} />
              <View style={styles.View_1_2162}>
                <Text style={styles.Text_1_2162}>L</Text>
              </View>
            </View>
            <View style={styles.View_1_2163}>
              <View style={styles.View_1_2164} />
              <View style={styles.View_1_2165}>
                <Text style={styles.Text_1_2165}>W</Text>
              </View>
            </View>
            <View style={styles.View_1_2166}>
              <View style={styles.View_1_2167} />
              <View style={styles.View_1_2168}>
                <Text style={styles.Text_1_2168}>E</Text>
              </View>
            </View>
            <View style={styles.View_1_2169}>
              <View style={styles.View_1_2170} />
              <View style={styles.View_1_2171}>
                <Text style={styles.Text_1_2171}>R</Text>
              </View>
            </View>
            <View style={styles.View_1_2172}>
              <View style={styles.View_1_2173} />
              <View style={styles.View_1_2174}>
                <Text style={styles.Text_1_2174}>T</Text>
              </View>
            </View>
            <View style={styles.View_1_2175}>
              <View style={styles.View_1_2176} />
              <View style={styles.View_1_2177}>
                <Text style={styles.Text_1_2177}>Y</Text>
              </View>
            </View>
            <View style={styles.View_1_2178}>
              <View style={styles.View_1_2179} />
              <View style={styles.View_1_2180}>
                <Text style={styles.Text_1_2180}>U</Text>
              </View>
            </View>
            <View style={styles.View_1_2181}>
              <View style={styles.View_1_2182} />
              <View style={styles.View_1_2183}>
                <Text style={styles.Text_1_2183}>I</Text>
              </View>
            </View>
            <View style={styles.View_1_2184}>
              <View style={styles.View_1_2185} />
              <View style={styles.View_1_2186}>
                <Text style={styles.Text_1_2186}>O</Text>
              </View>
            </View>
            <View style={styles.View_1_2187}>
              <View style={styles.View_1_2188} />
              <View style={styles.View_1_2189}>
                <Text style={styles.Text_1_2189}>P</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_1_2190}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8686/934e/c743ed0d6ef187f500935331778b0aeb"
              }}
              style={styles.ImageBackground_1_2192}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85f1/d170/2c83bc3cc4fc11642da5b4534d2752aa"
              }}
              style={styles.ImageBackground_1_2194}
            />
            <View style={styles.View_1_2196}>
              <View style={styles.View_1_2197} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3dd7/26ef/979ea6c0a3983b0a247f13a2693a2114"
                }}
                style={styles.ImageBackground_1_2198}
              />
            </View>
            <View style={styles.View_1_2200}>
              <View style={styles.View_1_2201} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d695/2d93/5194edc7185970b6ba3bf3a2431c9af5"
                }}
                style={styles.ImageBackground_1_2202}
              />
            </View>
            <View style={styles.View_1_2204}>
              <View style={styles.View_1_2205} />
              <View style={styles.View_1_2206}>
                <Text style={styles.Text_1_2206}>space</Text>
              </View>
            </View>
            <View style={styles.View_1_2207}>
              <View style={styles.View_1_2208} />
              <View style={styles.View_1_2209}>
                <Text style={styles.Text_1_2209}>return</Text>
              </View>
            </View>
            <View style={styles.View_1_2210}>
              <View style={styles.View_1_2211} />
              <View style={styles.View_1_2212}>
                <Text style={styles.Text_1_2212}>123</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_53_368}>
        <View style={styles.View_53_369} />
        <View style={styles.View_53_370} />
        <View style={styles.View_53_371}>
          <Text style={styles.Text_53_371}>Aa</Text>
        </View>
        <View style={styles.View_53_372}>
          <View style={styles.View_I53_372_1_1263}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0ac8/18d7/eccbac158eac7409175ef954622ea14d"
              }}
              style={styles.ImageBackground_I53_372_1_1264}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_53_373}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7738/4584/8f8795e619acbf3b22dbb31f89876964"
          }}
          style={styles.ImageBackground_53_374}
        />
      </View>
      <View style={styles.View_53_377}>
        <Text style={styles.Text_53_377}>1 April 12:00</Text>
      </View>
      <View style={styles.View_53_378}>
        <Text style={styles.Text_53_378}>12:30</Text>
      </View>
      <View style={styles.View_53_379}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e832/d981/c69c4ac787bd49d5541902584e25d0f4"
          }}
          style={styles.ImageBackground_I53_379_1_1284}
        />
        <View style={styles.View_I53_379_1_1285}>
          <Text style={styles.Text_I53_379_1_1285}>
            Hey, Alex! Nice to meet you! I’d like to hire a walker and you’re
            perfect one for me. Can you help me out?
          </Text>
        </View>
      </View>
      <View style={styles.View_53_380}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b895/1a12/2f2d5af360dfd79e8038adbb98e0bcd3"
          }}
          style={styles.ImageBackground_I53_380_1_1281}
        />
        <View style={styles.View_I53_380_1_1286}>
          <Text style={styles.Text_I53_380_1_1286}>
            Okay, I’m waiting for a call)
          </Text>
        </View>
      </View>
      <View style={styles.View_53_381}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc43/dcf7/ff585fbb8e7ae0e321ccc79cf2e8397f"
          }}
          style={styles.ImageBackground_I53_381_1_1288}
        />
        <View style={styles.View_I53_381_1_1289}>
          <Text style={styles.Text_I53_381_1_1289}>
            Hi! That’s great! Let me give you a call and we’ll discuss all the
            details
          </Text>
        </View>
      </View>
      <View style={styles.View_53_382}>
        <View style={styles.View_I53_382_1_1274}>
          <View style={styles.View_I53_382_1_1275}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3221/78fb/6eb16a014f204f36eb9b3f5262e8240e"
              }}
              style={styles.ImageBackground_I53_382_1_1275_0_3972}
            />
          </View>
        </View>
        <View style={styles.View_I53_382_11_1427}>
          <View style={styles.View_I53_382_1_1271}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aedc/6380/f416ed9d17ec42a0101187c71e28e72a"
              }}
              style={styles.ImageBackground_I53_382_1_1272}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abed/2f5d/cdfa090d721cfd9f71f904d329883a57"
              }}
              style={styles.ImageBackground_I53_382_1_1273}
            />
          </View>
          <View style={styles.View_I53_382_11_1426}>
            <View style={styles.View_I53_382_1_1277}>
              <Text style={styles.Text_I53_382_1_1277}>Alex Murray</Text>
            </View>
            <View style={styles.View_I53_382_11_1425}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83c6/b0ea/c7badbab4dafc69bcae4a2a48a60657b"
                }}
                style={styles.ImageBackground_I53_382_1_1282}
              />
              <View style={styles.View_I53_382_1_1278}>
                <Text style={styles.Text_I53_382_1_1278}>Online</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I53_382_11_1435}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b114/e3a7/7e9f33120bdcd654263a911eafe27bad"
            }}
            style={styles.ImageBackground_I53_382_11_1435_1_1291}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(22, 22, 22, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_1_2063: {
    width: wp("55.2%"),
    minWidth: wp("55.2%"),
    height: hp("10.655737704918032%"),
    minHeight: hp("10.655737704918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("56.879429217896174%")
  },
  View_1_2108: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("39.89071038251366%"),
    minHeight: hp("39.89071038251366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("71.03825136612022%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    overflow: "hidden"
  },
  View_1_2109: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("39.75409836065574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1_2110: {
    width: wp("100%"),
    height: hp("39.75409836065574%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_2111: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1_2112: {
    width: wp("8.533333333333333%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8%"),
    top: hp("1.0928961748633839%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2113: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(100, 100, 100, 1)",
    overflow: "hidden"
  },
  View_1_2114: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_1_2114: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_1_2115: {
    width: wp("8.266666666666666%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.8%"),
    top: hp("15.846994535519116%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2116: {
    flexGrow: 1,
    width: wp("8.266666666666666%"),
    height: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(100, 100, 100, 1)",
    overflow: "hidden"
  },
  View_1_2117: {
    flexGrow: 1,
    width: wp("8.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_1_2117: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_1_2118: {
    width: wp("8.266666666666666%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.8%"),
    top: hp("15.846994535519116%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2119: {
    flexGrow: 1,
    width: wp("8.266666666666666%"),
    height: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(100, 100, 100, 1)",
    overflow: "hidden"
  },
  View_1_2120: {
    flexGrow: 1,
    width: wp("8.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_1_2120: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_1_2121: {
    width: wp("8.266666666666666%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.8%"),
    top: hp("15.846994535519116%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2122: {
    flexGrow: 1,
    width: wp("8.266666666666666%"),
    height: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(100, 100, 100, 1)",
    overflow: "hidden"
  },
  View_1_2123: {
    flexGrow: 1,
    width: wp("8.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_1_2123: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_1_2124: {
    width: wp("8.533333333333333%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.800000000000004%"),
    top: hp("15.846994535519116%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2125: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(100, 100, 100, 1)",
    overflow: "hidden"
  },
  View_1_2126: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_1_2126: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_1_2127: {
    width: wp("8.533333333333333%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.800000000000004%"),
    top: hp("15.846994535519116%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2128: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(100, 100, 100, 1)",
    overflow: "hidden"
  },
  View_1_2129: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_1_2129: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_1_2130: {
    width: wp("8.533333333333333%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.8%"),
    top: hp("15.846994535519116%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2131: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(100, 100, 100, 1)",
    overflow: "hidden"
  },
  View_1_2132: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_1_2132: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_1_2133: {
    width: wp("8.533333333333333%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.8%"),
    top: hp("15.846994535519116%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2134: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(100, 100, 100, 1)",
    overflow: "hidden"
  },
  View_1_2135: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_1_2135: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_1_2136: {
    width: wp("8.266666666666666%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.800000000000001%"),
    top: hp("8.469945355191257%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2137: {
    flexGrow: 1,
    width: wp("8.266666666666666%"),
    height: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(100, 100, 100, 1)",
    overflow: "hidden"
  },
  View_1_2138: {
    flexGrow: 1,
    width: wp("8.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_1_2138: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_1_2139: {
    width: wp("8.266666666666666%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.8%"),
    top: hp("8.469945355191257%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2140: {
    flexGrow: 1,
    width: wp("8.266666666666666%"),
    height: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(100, 100, 100, 1)",
    overflow: "hidden"
  },
  View_1_2141: {
    flexGrow: 1,
    width: wp("8.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_1_2141: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_1_2142: {
    width: wp("8.266666666666666%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.8%"),
    top: hp("8.469945355191257%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2143: {
    flexGrow: 1,
    width: wp("8.266666666666666%"),
    height: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(100, 100, 100, 1)",
    overflow: "hidden"
  },
  View_1_2144: {
    flexGrow: 1,
    width: wp("8.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_1_2144: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_1_2145: {
    width: wp("8.533333333333333%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.8%"),
    top: hp("8.469945355191257%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2146: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(100, 100, 100, 1)",
    overflow: "hidden"
  },
  View_1_2147: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_1_2147: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_1_2148: {
    width: wp("8.533333333333333%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.800000000000004%"),
    top: hp("8.469945355191257%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2149: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(100, 100, 100, 1)",
    overflow: "hidden"
  },
  View_1_2150: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_1_2150: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_1_2151: {
    width: wp("8.533333333333333%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.800000000000004%"),
    top: hp("8.469945355191257%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2152: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(100, 100, 100, 1)",
    overflow: "hidden"
  },
  View_1_2153: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_1_2153: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_1_2154: {
    width: wp("8.533333333333333%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.8%"),
    top: hp("8.469945355191257%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2155: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(100, 100, 100, 1)",
    overflow: "hidden"
  },
  View_1_2156: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_1_2156: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_1_2157: {
    width: wp("8.533333333333333%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.8%"),
    top: hp("8.469945355191257%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2158: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(100, 100, 100, 1)",
    overflow: "hidden"
  },
  View_1_2159: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_1_2159: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_1_2160: {
    width: wp("8.533333333333333%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.8%"),
    top: hp("8.469945355191257%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2161: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(100, 100, 100, 1)",
    overflow: "hidden"
  },
  View_1_2162: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_1_2162: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_1_2163: {
    width: wp("8.533333333333333%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.8%"),
    top: hp("1.0928961748633839%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2164: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(100, 100, 100, 1)",
    overflow: "hidden"
  },
  View_1_2165: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_1_2165: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_1_2166: {
    width: wp("8.533333333333333%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.8%"),
    top: hp("1.0928961748633839%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2167: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(100, 100, 100, 1)",
    overflow: "hidden"
  },
  View_1_2168: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_1_2168: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_1_2169: {
    width: wp("8.533333333333333%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.754166666666666%"),
    top: hp("1.0928961748633839%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2170: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(100, 100, 100, 1)",
    overflow: "hidden"
  },
  View_1_2171: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_1_2171: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_1_2172: {
    width: wp("8.533333333333333%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.8%"),
    top: hp("1.0928961748633839%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2173: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(100, 100, 100, 1)",
    overflow: "hidden"
  },
  View_1_2174: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_1_2174: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_1_2175: {
    width: wp("8.533333333333333%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.8%"),
    top: hp("1.0928961748633839%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2176: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(100, 100, 100, 1)",
    overflow: "hidden"
  },
  View_1_2177: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_1_2177: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_1_2178: {
    width: wp("8.533333333333333%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.8%"),
    top: hp("1.0928961748633839%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2179: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(100, 100, 100, 1)",
    overflow: "hidden"
  },
  View_1_2180: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_1_2180: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_1_2181: {
    width: wp("8.266666666666666%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.8%"),
    top: hp("1.0928961748633839%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2182: {
    flexGrow: 1,
    width: wp("8.266666666666666%"),
    height: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(100, 100, 100, 1)",
    overflow: "hidden"
  },
  View_1_2183: {
    flexGrow: 1,
    width: wp("8.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_1_2183: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_1_2184: {
    width: wp("8.266666666666666%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.80000000000001%"),
    top: hp("1.0928961748633839%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2185: {
    flexGrow: 1,
    width: wp("8.266666666666666%"),
    height: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(100, 100, 100, 1)",
    overflow: "hidden"
  },
  View_1_2186: {
    flexGrow: 1,
    width: wp("8.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_1_2186: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_1_2187: {
    width: wp("8.533333333333333%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.66666666666666%"),
    top: hp("1.0928961748633839%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2188: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(100, 100, 100, 1)",
    overflow: "hidden"
  },
  View_1_2189: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_1_2189: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_1_2190: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("24.316939890710383%"),
    minHeight: hp("24.316939890710383%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15.573770491803273%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1_2192: {
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    top: hp("17.076502732240442%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  ImageBackground_1_2194: {
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    top: hp("17.076502732240442%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%")
  },
  View_1_2196: {
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("0.4098360655737707%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2197: {
    flexGrow: 1,
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(63, 63, 63, 1)",
    overflow: "hidden"
  },
  ImageBackground_1_2198: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333286%")
  },
  View_1_2200: {
    width: wp("11.200000000000001%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8%"),
    top: hp("0.4098360655737707%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2201: {
    flexGrow: 1,
    width: wp("11.200000000000001%"),
    height: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(63, 63, 63, 1)",
    overflow: "hidden"
  },
  ImageBackground_1_2202: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333333%")
  },
  View_1_2204: {
    width: wp("48.53333333333333%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.6%"),
    top: hp("7.786885245901644%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2205: {
    flexGrow: 1,
    width: wp("48.53333333333333%"),
    height: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(100, 100, 100, 1)",
    overflow: "hidden"
  },
  View_1_2206: {
    flexGrow: 1,
    width: wp("48.53333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_1_2206: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.32,
    textTransform: "none"
  },
  View_1_2207: {
    width: wp("23.200000000000003%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("7.786885245901644%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2208: {
    flexGrow: 1,
    width: wp("23.200000000000003%"),
    height: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(63, 63, 63, 1)",
    overflow: "hidden"
  },
  View_1_2209: {
    flexGrow: 1,
    width: wp("23.200000000000003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_1_2209: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.32,
    textTransform: "none"
  },
  View_1_2210: {
    width: wp("23.200000000000003%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8%"),
    top: hp("7.786885245901644%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2211: {
    flexGrow: 1,
    width: wp("23.200000000000003%"),
    height: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(63, 63, 63, 1)",
    overflow: "hidden"
  },
  View_1_2212: {
    flexGrow: 1,
    width: wp("23.200000000000003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_1_2212: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.32,
    textTransform: "none"
  },
  View_53_368: {
    width: wp("75.99999186197917%"),
    minWidth: wp("75.99999186197917%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.533333333333335%"),
    top: hp("64.34426229508196%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_53_369: {
    width: wp("75.99999186197917%"),
    height: hp("6.147540983606557%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(65, 65, 67, 1)"
  },
  View_53_370: {
    width: wp("0.5333333333333333%"),
    height: hp("3.7568306010928962%"),
    top: hp("1.1953551912568372%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999993%"),
    backgroundColor: "rgba(251, 114, 76, 1)"
  },
  View_53_371: {
    width: wp("6.133333333333333%"),
    minWidth: wp("6.133333333333333%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%"),
    top: hp("1.3661202185792405%"),
    justifyContent: "flex-start"
  },
  Text_53_371: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.6499999761581421,
    textTransform: "none"
  },
  View_53_372: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.3661202185792405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.66666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I53_372_1_1263: {
    flexGrow: 1,
    width: wp("4.533333333333333%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9333333333333229%"),
    top: hp("0.2732240437158424%")
  },
  ImageBackground_I53_372_1_1264: {
    width: wp("4.533333333333333%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_53_373: {
    width: wp("11.733333333333333%"),
    minWidth: wp("11.733333333333333%"),
    height: hp("6.010003428641564%"),
    minHeight: hp("6.010003428641564%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("64.34426229508196%"),
    backgroundColor: "rgba(65, 65, 67, 1)"
  },
  ImageBackground_53_374: {
    width: wp("2.666666666666667%"),
    height: hp("1.3651946854721653%"),
    top: hp("2.322404371584696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333079020182%")
  },
  View_53_377: {
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
  Text_53_377: {
    color: "rgba(174, 174, 178, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05329999953508378,
    textTransform: "none"
  },
  View_53_378: {
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
  Text_53_378: {
    color: "rgba(174, 174, 178, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05329999953508378,
    textTransform: "none"
  },
  View_53_379: {
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
  ImageBackground_I53_379_1_1284: {
    flexGrow: 1,
    width: wp("57.333333333333336%"),
    height: hp("12.431693989071038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I53_379_1_1285: {
    flexGrow: 1,
    width: wp("48.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.06666666666667%"),
    top: hp("1.2295081967213157%"),
    justifyContent: "flex-start"
  },
  Text_I53_379_1_1285: {
    color: "rgba(247, 247, 248, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_53_380: {
    width: wp("57.333333333333336%"),
    minWidth: wp("57.333333333333336%"),
    height: hp("6.059715396068135%"),
    minHeight: hp("6.059715396068135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.4%"),
    top: hp("48.36065573770492%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I53_380_1_1281: {
    flexGrow: 1,
    width: wp("57.333333333333336%"),
    height: hp("6.059715396068135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I53_380_1_1286: {
    flexGrow: 1,
    width: wp("48.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6000000000000014%"),
    top: hp("1.775956284153004%"),
    justifyContent: "flex-start"
  },
  Text_I53_380_1_1286: {
    color: "rgba(247, 247, 248, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_53_381: {
    width: wp("57.33332926432292%"),
    minWidth: wp("57.33332926432292%"),
    height: hp("9.426229508196721%"),
    minHeight: hp("9.426229508196721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("33.19672131147541%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I53_381_1_1288: {
    flexGrow: 1,
    width: wp("57.33332926432292%"),
    height: hp("9.426229508196721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5.086263019649095e-7%"),
    top: hp("0%")
  },
  View_I53_381_1_1289: {
    flexGrow: 1,
    width: wp("49.33332926432292%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333329963684082%"),
    top: hp("0.9562841530054627%"),
    justifyContent: "flex-start"
  },
  Text_I53_381_1_1289: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_53_382: {
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
  View_I53_382_1_1274: {
    flexGrow: 1,
    width: wp("5.333332824707031%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.9125683060109289%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I53_382_1_1275: {
    width: wp("5.333332824707031%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I53_382_1_1275_0_3972: {
    flexGrow: 1,
    width: wp("3.3333778381347656%"),
    height: hp("1.371698431629952%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9443995157877607%"),
    top: hp("0.7114848152535869%")
  },
  View_I53_382_11_1427: {
    flexGrow: 1,
    width: wp("43.46666259765625%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.666666158040364%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I53_382_1_1271: {
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
  ImageBackground_I53_382_1_1272: {
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
  ImageBackground_I53_382_1_1273: {
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
  View_I53_382_11_1426: {
    width: wp("28.000000000000004%"),
    minWidth: wp("28.000000000000004%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.466667175292967%"),
    top: hp("0.13661202185792387%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I53_382_1_1277: {
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
  Text_I53_382_1_1277: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_I53_382_11_1425: {
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
  ImageBackground_I53_382_1_1282: {
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
  View_I53_382_1_1278: {
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
  Text_I53_382_1_1278: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05329999953508378,
    textTransform: "none"
  },
  View_I53_382_11_1435: {
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
  ImageBackground_I53_382_11_1435_1_1291: {
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
