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
      <View style={styles.View_11_338}>
        <View style={styles.View_11_263}>
          <View style={styles.View_11_336}>
            <View style={styles.View_I11_336_1_828}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8341/1e50/045023661706fb28bfba64ba19afa0c1"
                }}
                style={styles.ImageBackground_I11_336_1_829}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_11_264}>
          <View style={styles.View_11_337}>
            <View style={styles.View_I11_337_1_835}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c20/3e21/45a38b00cb04766b1b9514e23e250148"
                }}
                style={styles.ImageBackground_I11_337_1_836}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_11_271}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c1e/d9a5/f3efc751b9c37e73fe28c08894c9c39e"
          }}
          style={styles.ImageBackground_1_871}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f985/ff35/dd5de44b943ae7c199fa112930b6630a"
          }}
          style={styles.ImageBackground_1_872}
        />
      </View>
      <View style={styles.View_11_272}>
        <View style={styles.View_1_878}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee62/fe9f/c9ba5ea7b0392b0bf4bcbeb5d23df4ba"
            }}
            style={styles.ImageBackground_1_879}
          />
        </View>
        <View style={styles.View_1_877}>
          <Text style={styles.Text_1_877}>Moscow, Russia</Text>
        </View>
      </View>
      <View style={styles.View_11_273}>
        <View style={styles.View_1_883}>
          <Text style={styles.Text_1_883}>Cristian Downey</Text>
        </View>
        <View style={styles.View_1_884}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a43/df64/924ef498ac6f3489e5dd540b46233fee"
            }}
            style={styles.ImageBackground_1_885}
          />
        </View>
      </View>
      <View style={styles.View_11_301}>
        <View style={styles.View_11_299}>
          <View style={styles.View_1_902}>
            <Text style={styles.Text_1_902}>View all</Text>
          </View>
          <View style={styles.View_1_903}>
            <View style={styles.View_1_904}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/031b/4e2b/2a447fef32a294596c74a0d2434e7d8c"
                }}
                style={styles.ImageBackground_I1_904_0_3972}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_11_351}>
        <View style={styles.View_11_347}>
          <View style={styles.View_I11_347_11_276}>
            <View style={styles.View_I11_347_11_276_1_899} />
            <View style={styles.View_I11_347_11_276_1_900} />
          </View>
          <View style={styles.View_I11_347_11_275}>
            <View style={styles.View_I11_347_1_905}>
              <View style={styles.View_I11_347_1_906}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d21b/cead/09f06d80ae57037c219dfd4a57dc16e3"
                  }}
                  style={styles.ImageBackground_I11_347_1_907}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e3b4/1f96/b24743310cc2ff828b4d5d91d4bde28c"
                  }}
                  style={styles.ImageBackground_I11_347_1_909}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d3c/e568/61813698505c4ec9c7eddb0ed2957565"
                  }}
                  style={styles.ImageBackground_I11_347_1_910}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d701/efb0/c4d8c99c31f756e16683289fce284cf4"
                  }}
                  style={styles.ImageBackground_I11_347_1_912}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a071/effa/32203712623f61e6f1a1707f1285529a"
                  }}
                  style={styles.ImageBackground_I11_347_1_913}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df6d/4162/aa0ec3865a66a23488a03094822e64a7"
                  }}
                  style={styles.ImageBackground_I11_347_1_914}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3858/de8f/0d25fdf491e923fc5778621729316875"
                  }}
                  style={styles.ImageBackground_I11_347_1_915}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64c4/f389/dcbe82e49ad1fc86e91469141ef0b269"
                  }}
                  style={styles.ImageBackground_I11_347_1_916}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2414/b0b6/4341443dc7dca4b21f5a821d4fde0ac6"
                  }}
                  style={styles.ImageBackground_I11_347_1_917}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac19/d59b/65565f3f4fca73d028ab00bc4d915575"
                  }}
                  style={styles.ImageBackground_I11_347_1_918}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/476d/a12f/057e7ba6ae61fa728e66c6adfa8fb09b"
                  }}
                  style={styles.ImageBackground_I11_347_1_919}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/62ce/5abd/09565bf426e8784ca2c86d57781500aa"
                  }}
                  style={styles.ImageBackground_I11_347_1_920}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a1cf/b870/a653d18f1d5cd12e0690b1d55a84ae51"
                  }}
                  style={styles.ImageBackground_I11_347_1_921}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c83f/63c1/27f8dadaa9c3c0fde993b244862bb4ed"
                  }}
                  style={styles.ImageBackground_I11_347_1_922}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c78/c86d/2d62b2f60fb86db568eea9367e744c13"
                  }}
                  style={styles.ImageBackground_I11_347_1_923}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8df/02a9/b3fe38d8808b1a46a62fc59f16678aa1"
                  }}
                  style={styles.ImageBackground_I11_347_1_925}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ca3/8054/c398e3997c22f099a310e70512317a6a"
                  }}
                  style={styles.ImageBackground_I11_347_1_926}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aae3/7389/4cdcb5409872b3b839396e98ccebf38b"
                  }}
                  style={styles.ImageBackground_I11_347_1_927}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fef7/005b/78d31f18f0fadaa236d68447a19888c5"
                  }}
                  style={styles.ImageBackground_I11_347_1_928}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2624/cc2e/3deb777f67811cc5edbb866882037e4b"
                  }}
                  style={styles.ImageBackground_I11_347_1_929}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f8e/c989/132b6ad02190edd510c46e9137fc65d5"
                  }}
                  style={styles.ImageBackground_I11_347_1_930}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eada/f5bd/3cd421319be61a40c01d20c2179fe9e1"
                  }}
                  style={styles.ImageBackground_I11_347_1_931}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52e3/1b84/df3068adabb39aba259b6408c1412c4b"
                  }}
                  style={styles.ImageBackground_I11_347_1_932}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/664a/0fa5/fcf1c17f2f0a66f0c4eba23e0224d875"
                  }}
                  style={styles.ImageBackground_I11_347_1_933}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e665/74b2/3a5c7b3b55f16681b781d0c4a6a9485d"
                  }}
                  style={styles.ImageBackground_I11_347_1_934}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6c4/e06b/99b58d94df9ba6b24c204a44c0c85d3d"
                  }}
                  style={styles.ImageBackground_I11_347_1_935}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c1ed/c27f/77e505baf1ff5bc00f3ac727536d16d0"
                  }}
                  style={styles.ImageBackground_I11_347_1_936}
                />
              </View>
            </View>
            <View style={styles.View_I11_347_1_938}>
              <Text style={styles.Text_I11_347_1_938}>My pets</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_11_348}>
          <View style={styles.View_I11_348_11_282}>
            <View style={styles.View_I11_348_11_282_1_896} />
            <View style={styles.View_I11_348_11_282_1_897} />
          </View>
          <View style={styles.View_I11_348_11_281}>
            <View style={styles.View_I11_348_1_939}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7188/80e7/b191dcc83526146e45f5fd4e3e267a7f"
                }}
                style={styles.ImageBackground_I11_348_1_940}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c074/73d9/cf6ad4f2936bd378266e6367cd1efa35"
                }}
                style={styles.ImageBackground_I11_348_1_941}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/44cb/fc40/f238ccb8d13d51c89745c980a0187489"
                }}
                style={styles.ImageBackground_I11_348_1_944}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/edb1/5239/c4d5fdb0b927c73b05c5a3fabf81789b"
                }}
                style={styles.ImageBackground_I11_348_1_945}
              />
            </View>
            <View style={styles.View_I11_348_1_947}>
              <Text style={styles.Text_I11_348_1_947}>My favourites</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_11_349}>
          <View style={styles.View_I11_349_11_288}>
            <View style={styles.View_I11_349_11_288_1_893} />
            <View style={styles.View_I11_349_11_288_1_894} />
          </View>
          <View style={styles.View_I11_349_11_287}>
            <View style={styles.View_I11_349_1_948}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a224/e25a/783016c1bdfc659648230cda525e0ca6"
                }}
                style={styles.ImageBackground_I11_349_1_949}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/48d9/1e3f/67c36a36ab4f654e2709c91e3af89ecb"
                }}
                style={styles.ImageBackground_I11_349_1_950}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0dcb/32dd/a49a6eff386ad553a6ed19b35d030ca4"
                }}
                style={styles.ImageBackground_I11_349_1_953}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/66ae/6ece/1520f3f4b9395a9ccc3edb1c2a778c58"
                }}
                style={styles.ImageBackground_I11_349_1_954}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/95b1/c401/6cbe79d56ccbc411a68efe727881cbc6"
                }}
                style={styles.ImageBackground_I11_349_1_955}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b7c0/85a2/82ac8d76fb3dd8b0fb2d13e37672127f"
                }}
                style={styles.ImageBackground_I11_349_1_956}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3534/7f69/ef5b43bf0f823fa617401fc273b10fc6"
                }}
                style={styles.ImageBackground_I11_349_1_957}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f66c/5578/96f4bebbd458312fa4e6709353048d94"
                }}
                style={styles.ImageBackground_I11_349_1_958}
              />
            </View>
            <View style={styles.View_I11_349_1_961}>
              <Text style={styles.Text_I11_349_1_961}>My badges</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_11_350}>
          <View style={styles.View_I11_350_11_294}>
            <View style={styles.View_I11_350_11_294_1_890} />
            <View style={styles.View_I11_350_11_294_1_891} />
          </View>
          <View style={styles.View_I11_350_11_293}>
            <View style={styles.View_I11_350_1_962}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf16/bd06/f30841a4105888014d14fc887b27ee79"
                }}
                style={styles.ImageBackground_I11_350_1_963}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19c2/3e45/2bc0ff878132432526593e03bd1ae23a"
                }}
                style={styles.ImageBackground_I11_350_1_964}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8905/181c/3aa6eb33fad494bc03c6f7289156412f"
                }}
                style={styles.ImageBackground_I11_350_1_965}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/317f/e4cc/a43ddf3d9a16467319a5d8a83c111a59"
                }}
                style={styles.ImageBackground_I11_350_1_969}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc69/5cf7/83a0bea57af0d14f2e3aff995815d4cd"
                }}
                style={styles.ImageBackground_I11_350_1_970}
              />
            </View>
            <View style={styles.View_I11_350_1_972}>
              <View style={styles.View_I11_350_1_973}>
                <Text style={styles.Text_I11_350_1_973}>My wallet</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_11_303}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6679/1845/5bf05766e251ac0592f8055975c4e0c2"
          }}
          style={styles.ImageBackground_I11_303_1_503}
        />
        <View style={styles.View_I11_303_1_504}>
          <View style={styles.View_I11_303_1_505}>
            <View style={styles.View_I11_303_1_506}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/097c/5f28/3823d3e86857232217e4f239ebe77753"
                }}
                style={styles.ImageBackground_I11_303_1_507}
              />
            </View>
            <View style={styles.View_I11_303_1_509}>
              <Text style={styles.Text_I11_303_1_509}>Home</Text>
            </View>
          </View>
          <View style={styles.View_I11_303_1_510}>
            <View style={styles.View_I11_303_1_511}>
              <View style={styles.View_I11_303_1_512}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3cb/5c51/8c657c6f249dcb91ba9c226b67190d9d"
                  }}
                  style={styles.ImageBackground_I11_303_1_513}
                />
              </View>
            </View>
            <View style={styles.View_I11_303_1_520}>
              <Text style={styles.Text_I11_303_1_520}>Moments</Text>
            </View>
          </View>
          <View style={styles.View_I11_303_1_521}>
            <View style={styles.View_I11_303_1_522}>
              <View style={styles.View_I11_303_1_523}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/566f/cebd/8b97a0a1f7d6bd150e8c4899be84b37f"
                  }}
                  style={styles.ImageBackground_I11_303_1_524}
                />
              </View>
            </View>
            <View style={styles.View_I11_303_1_527}>
              <Text style={styles.Text_I11_303_1_527}>Chat</Text>
            </View>
          </View>
          <View style={styles.View_I11_303_1_528}>
            <View style={styles.View_I11_303_1_529}>
              <View style={styles.View_I11_303_1_530}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2775/db85/ad14c45e4b99fda76d973594b4de0890"
                  }}
                  style={styles.ImageBackground_I11_303_1_531}
                />
              </View>
            </View>
            <View style={styles.View_I11_303_1_534}>
              <Text style={styles.Text_I11_303_1_534}>Profile</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(252, 252, 252, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_11_338: {
    width: wp("91.2%"),
    minWidth: wp("91.2%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("2.185792349726776%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_11_263: {
    flexGrow: 1,
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 240, 240, 1)"
  },
  View_11_336: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000001%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I11_336_1_828: {
    flexGrow: 1,
    width: wp("4.222222137451172%"),
    height: hp("2.276861472207992%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5555280049641924%"),
    top: hp("0.22769782061133848%")
  },
  ImageBackground_I11_336_1_829: {
    width: wp("4.222222137451172%"),
    height: hp("2.276861472207992%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_264: {
    flexGrow: 1,
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.46666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 240, 240, 1)"
  },
  View_11_337: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999886%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I11_337_1_835: {
    flexGrow: 1,
    width: wp("3.7777750651041666%"),
    height: hp("2.276878148480191%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7777750651041799%"),
    top: hp("0.22768114433913889%")
  },
  ImageBackground_I11_337_1_836: {
    width: wp("3.7777750651041666%"),
    height: hp("2.276861472207992%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_271: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("22.540983606557376%"),
    minHeight: hp("22.540983606557376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.73333333333333%"),
    top: hp("9.562841530054644%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_871: {
    flexGrow: 1,
    width: wp("23.733333333333334%"),
    height: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.600000000000005%"),
    top: hp("10.655737704918035%")
  },
  ImageBackground_1_872: {
    flexGrow: 1,
    width: wp("44%"),
    height: hp("22.540983606557376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_11_272: {
    width: wp("40.8%"),
    minWidth: wp("40.8%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.599999999999998%"),
    top: hp("40.43715846994536%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_878: {
    width: wp("4.533333333333333%"),
    height: hp("2.3224043715846996%"),
    top: hp("0.34153005464479946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_879: {
    width: wp("2.833333333333333%"),
    height: hp("1.7418032786885245%"),
    top: hp("0.2903005464480941%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8500000000000014%")
  },
  View_1_877: {
    width: wp("35.733333333333334%"),
    minWidth: wp("35.733333333333334%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.0666666666666735%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_877: {
    color: "rgba(161, 161, 162, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_11_273: {
    width: wp("80.26666666666667%"),
    minWidth: wp("80.26666666666667%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.866666666666667%"),
    top: hp("33.46994535519126%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_883: {
    width: wp("75.2%"),
    minWidth: wp("75.2%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_883: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_1_884: {
    width: wp("4.533333333333333%"),
    height: hp("2.3224043715846996%"),
    top: hp("2.322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.73333333333332%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_885: {
    flexGrow: 1,
    width: wp("3.400065104166667%"),
    height: hp("1.7418699837773226%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5666666666666771%"),
    top: hp("0.2903005464480799%")
  },
  View_11_301: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("88.9344262295082%"),
    backgroundColor: "rgba(43, 43, 43, 1)"
  },
  View_11_299: {
    flexGrow: 1,
    width: wp("25.333333333333336%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.06666666666667%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_902: {
    width: wp("18.133333333333333%"),
    minWidth: wp("18.133333333333333%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_902: {
    color: "rgba(247, 247, 248, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.06969999939203263,
    textTransform: "none"
  },
  View_1_903: {
    width: wp("4.533333333333333%"),
    minWidth: wp("4.533333333333333%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.800000000000004%"),
    top: hp("0.614754098360649%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_904: {
    width: wp("4.533333333333333%"),
    height: hp("2.3224043715846996%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_904_0_3972: {
    flexGrow: 1,
    width: wp("2.8333699544270834%"),
    height: hp("1.1659382470969946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8972208658854157%"),
    top: hp("0.6047650113131908%")
  },
  View_11_351: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("39.48087431693989%"),
    minHeight: hp("39.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("46.44808743169399%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_11_347: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I11_347_11_276: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I11_347_11_276_1_899: {
    flexGrow: 1,
    width: wp("86.13333333333333%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%"),
    top: hp("3.551912568306008%"),
    backgroundColor: "rgba(179, 179, 179, 1)"
  },
  View_I11_347_11_276_1_900: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(250, 250, 250, 1)"
  },
  View_I11_347_11_275: {
    flexGrow: 1,
    width: wp("23.733333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.9333333333333345%"),
    top: hp("2.5956284153005456%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I11_347_1_905: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I11_347_1_906: {
    width: wp("5.012351989746094%"),
    height: hp("2.7323238185194674%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.16049346923827912%")
  },
  ImageBackground_I11_347_1_907: {
    width: wp("1.9263824462890624%"),
    height: hp("1.138789275956284%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9085657755533862%")
  },
  ImageBackground_I11_347_1_909: {
    width: wp("1.2324376424153647%"),
    height: hp("0.8309452911543715%"),
    top: hp("0.455845900572065%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1632064819335941%")
  },
  ImageBackground_I11_347_1_910: {
    width: wp("0.7733230590820312%"),
    height: hp("0.8788395449112021%"),
    top: hp("0.46129904158128454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I11_347_1_912: {
    width: wp("1.2270835876464845%"),
    height: hp("0.987335371840847%"),
    top: hp("1.7449384178620235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7737279256184912%")
  },
  ImageBackground_I11_347_1_913: {
    width: wp("1.0131055196126302%"),
    height: hp("0.987335371840847%"),
    top: hp("1.7449550941342196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7737401326497402%")
  },
  ImageBackground_I11_347_1_914: {
    width: wp("0.9818369547526042%"),
    height: hp("1.121162456241462%"),
    top: hp("1.6110613046448066%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.567309061686201%")
  },
  ImageBackground_I11_347_1_915: {
    width: wp("0.8154897054036458%"),
    height: hp("1.0496712773224044%"),
    top: hp("1.6825191310194683%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.567309061686201%")
  },
  ImageBackground_I11_347_1_916: {
    width: wp("1.6103068033854169%"),
    height: hp("0.7925231600068305%"),
    top: hp("0.33309186091188536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4020492553710966%")
  },
  ImageBackground_I11_347_1_917: {
    width: wp("0.5695734659830729%"),
    height: hp("0.5776160401724727%"),
    top: hp("0.43446691961236183%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1669153849283873%")
  },
  ImageBackground_I11_347_1_918: {
    width: wp("1.374280293782552%"),
    height: hp("0.41118684362192626%"),
    top: hp("1.065080152834696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7138483683268237%")
  },
  ImageBackground_I11_347_1_919: {
    width: wp("0.6408170064290364%"),
    height: hp("0.2886329192281421%"),
    top: hp("0.9905205398309462%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7212964375813815%")
  },
  ImageBackground_I11_347_1_920: {
    width: wp("2.031520207722982%"),
    height: hp("1.4728650369279372%"),
    top: hp("1.259425429047127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5740584055582687%")
  },
  ImageBackground_I11_347_1_921: {
    width: wp("2.146197001139323%"),
    height: hp("1.7270281015198088%"),
    top: hp("1.0052957169996546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.38317921956380196%")
  },
  ImageBackground_I11_347_1_922: {
    width: wp("1.4558212280273437%"),
    height: hp("1.2202695419228142%"),
    top: hp("1.5119208664190538%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7138483683268237%")
  },
  ImageBackground_I11_347_1_923: {
    width: wp("0.18990631103515623%"),
    height: hp("0.08221402194330601%"),
    top: hp("0.5361087986680317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.175343831380211%")
  },
  ImageBackground_I11_347_1_925: {
    width: wp("1.243731180826823%"),
    height: hp("0.37303153282957646%"),
    top: hp("0.8383162034665261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.97776082356771%")
  },
  ImageBackground_I11_347_1_926: {
    width: wp("1.300696818033854%"),
    height: hp("0.39292632556352464%"),
    top: hp("0.8825917061560773%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.913193766276043%")
  },
  ImageBackground_I11_347_1_927: {
    width: wp("0.19981536865234373%"),
    height: hp("0.267303967085041%"),
    top: hp("1.019503900913591%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5759501139322936%")
  },
  ImageBackground_I11_347_1_928: {
    width: wp("0.21733220418294272%"),
    height: hp("0.2672706145406421%"),
    top: hp("1.019503900913591%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4355590820312507%")
  },
  ImageBackground_I11_347_1_929: {
    width: wp("0.2943730672200521%"),
    height: hp("0.35340356045081966%"),
    top: hp("1.5608657253244473%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5862467447916675%")
  },
  ImageBackground_I11_347_1_930: {
    width: wp("0.320989990234375%"),
    height: hp("0.3541706689719945%"),
    top: hp("1.5617662440232252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.453562418619793%")
  },
  ImageBackground_I11_347_1_931: {
    width: wp("1.4170639038085937%"),
    height: hp("0.19342808124146177%"),
    top: hp("1.347909729337431%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7138483683268237%")
  },
  ImageBackground_I11_347_1_932: {
    width: wp("1.391790262858073%"),
    height: hp("0.19501232710040983%"),
    top: hp("1.4348764888575758%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7236679077148445%")
  },
  ImageBackground_I11_347_1_933: {
    width: wp("0.2075007120768229%"),
    height: hp("0.3003896911287568%"),
    top: hp("1.2755180317196064%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.569439697265624%")
  },
  ImageBackground_I11_347_1_934: {
    width: wp("0.18433990478515624%"),
    height: hp("0.3003896911287568%"),
    top: hp("1.2755180317196064%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.434263610839844%")
  },
  ImageBackground_I11_347_1_935: {
    width: wp("0.39259490966796873%"),
    height: hp("0.45181024269979503%"),
    top: hp("0.30265766414787976%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.599167887369793%")
  },
  ImageBackground_I11_347_1_936: {
    width: wp("0.5294108072916667%"),
    height: hp("0.5277373100239071%"),
    top: hp("0.30299118959187155%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3839177449544273%")
  },
  View_I11_347_1_938: {
    width: wp("15.733333333333333%"),
    minWidth: wp("15.733333333333333%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.999999999999998%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I11_347_1_938: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.061499999463558205,
    textTransform: "none"
  },
  View_11_348: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.51912568306011%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I11_348_11_282: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I11_348_11_282_1_896: {
    flexGrow: 1,
    width: wp("86.13333333333333%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%"),
    top: hp("4.644808743169392%"),
    backgroundColor: "rgba(161, 161, 162, 1)"
  },
  View_I11_348_11_282_1_897: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(250, 250, 250, 1)"
  },
  View_I11_348_11_281: {
    flexGrow: 1,
    width: wp("34.93333333333333%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.9333333333333345%"),
    top: hp("2.5956284153005384%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I11_348_1_939: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I11_348_1_940: {
    width: wp("5.333333333333334%"),
    height: hp("2.378753495346653%"),
    top: hp("0.1767518090420097%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I11_348_1_941: {
    width: wp("2.6258173624674477%"),
    height: hp("2.3772359545765025%"),
    top: hp("0.17673513276981367%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I11_348_1_944: {
    width: wp("0.6675832112630209%"),
    height: hp("0.34199699026639346%"),
    top: hp("0.6505080259562916%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.348839314778644%")
  },
  ImageBackground_I11_348_1_945: {
    width: wp("0.4172495524088542%"),
    height: hp("0.2137564570525956%"),
    top: hp("0.3885404659750762%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.045980834960936%")
  },
  View_I11_348_1_947: {
    width: wp("26.93333333333333%"),
    minWidth: wp("26.93333333333333%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.999999999999998%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I11_348_1_947: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.061499999463558205,
    textTransform: "none"
  },
  View_11_349: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21.038251366120207%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I11_349_11_288: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I11_349_11_288_1_893: {
    flexGrow: 1,
    width: wp("86.13333333333333%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%"),
    top: hp("4.918032786885263%"),
    backgroundColor: "rgba(161, 161, 162, 1)"
  },
  View_I11_349_11_288_1_894: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(250, 250, 250, 1)"
  },
  View_I11_349_11_287: {
    flexGrow: 1,
    width: wp("30.4%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.9333333333333345%"),
    top: hp("2.5956284153005527%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I11_349_1_948: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I11_349_1_949: {
    width: wp("2.7342814127604167%"),
    height: hp("1.5509266670935793%"),
    top: hp("1.181230388703895%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.412620544433592%")
  },
  ImageBackground_I11_349_1_950: {
    width: wp("3.545922342936198%"),
    height: hp("1.550960019637978%"),
    top: hp("1.181230388703895%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3748392740885418%")
  },
  ImageBackground_I11_349_1_953: {
    width: wp("1.77207768758138%"),
    height: hp("1.3684548966871584%"),
    top: hp("1.3638689218323066%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1866508483886715%")
  },
  ImageBackground_I11_349_1_954: {
    width: wp("3.8921574910481773%"),
    height: hp("1.993931838072063%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.720582199096679%")
  },
  ImageBackground_I11_349_1_955: {
    width: wp("2.41251220703125%"),
    height: hp("1.8440121509989755%"),
    top: hp("0.07479308081454406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7262513478596997%")
  },
  ImageBackground_I11_349_1_956: {
    width: wp("2.7783025105794272%"),
    height: hp("1.423219774590164%"),
    top: hp("0.2852643122438536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2775446573893205%")
  },
  ImageBackground_I11_349_1_957: {
    width: wp("1.6871164957682292%"),
    height: hp("1.4062266532189207%"),
    top: hp("0.2873821988131908%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.368660481770833%")
  },
  ImageBackground_I11_349_1_958: {
    width: wp("2.119249725341797%"),
    height: hp("1.037047339267418%"),
    top: hp("0.4783255154969339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6069719950358063%")
  },
  View_I11_349_1_961: {
    width: wp("22.400000000000002%"),
    minWidth: wp("22.400000000000002%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.999999999999998%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I11_349_1_961: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.061499999463558205,
    textTransform: "none"
  },
  View_11_350: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31.55737704918033%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I11_350_11_294: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I11_350_11_294_1_890: {
    flexGrow: 1,
    width: wp("86.13333333333333%"),
    height: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%"),
    top: hp("4.234972677595621%"),
    backgroundColor: "rgba(161, 161, 162, 1)"
  },
  View_I11_350_11_294_1_891: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(250, 250, 250, 1)"
  },
  View_I11_350_11_293: {
    flexGrow: 1,
    width: wp("26.93333333333333%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.9333333333333345%"),
    top: hp("2.5956284153005384%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I11_350_1_962: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I11_350_1_963: {
    width: wp("4.995833333333334%"),
    height: hp("1.3707061934340847%"),
    top: hp("0.680725431181699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.16871032714843714%")
  },
  ImageBackground_I11_350_1_964: {
    width: wp("4.354166666666667%"),
    height: hp("1.0405993852459017%"),
    top: hp("0.8484887295082046%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4791666666666661%")
  },
  ImageBackground_I11_350_1_965: {
    width: wp("3.6960957845052085%"),
    height: hp("1.0243733723958335%"),
    top: hp("0.8539752230618234%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8186767578124989%")
  },
  ImageBackground_I11_350_1_969: {
    width: wp("0.6384373982747396%"),
    height: hp("1.0405993852459017%"),
    top: hp("0.8484887295082046%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4791666666666661%")
  },
  ImageBackground_I11_350_1_970: {
    width: wp("0.49519195556640627%"),
    height: hp("0.5648920444842896%"),
    top: hp("1.0836575200648895%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4191121419270836%")
  },
  View_I11_350_1_972: {
    width: wp("18.933333333333334%"),
    minWidth: wp("18.933333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.999999999999998%"),
    top: hp("0%")
  },
  View_I11_350_1_973: {
    width: wp("18.933333333333334%"),
    minWidth: wp("18.933333333333334%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I11_350_1_973: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.061499999463558205,
    textTransform: "none"
  },
  View_11_303: {
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
  ImageBackground_I11_303_1_503: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I11_303_1_504: {
    flexGrow: 1,
    width: wp("90.66666666666666%"),
    height: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("3.2786885245901516%")
  },
  View_I11_303_1_505: {
    width: wp("8.266666666666666%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I11_303_1_506: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000007%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I11_303_1_507: {
    width: wp("5.066666666666666%"),
    height: hp("2.73224043715847%"),
    top: hp("0.2732240437158566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6666666666666661%")
  },
  View_I11_303_1_509: {
    width: wp("8.266666666666666%"),
    top: hp("3.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I11_303_1_509: {
    color: "rgba(174, 174, 178, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_I11_303_1_510: {
    width: wp("13.066666666666665%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.133333333333333%")
  },
  View_I11_303_1_511: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I11_303_1_512: {
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
  ImageBackground_I11_303_1_513: {
    width: wp("5.866666666666666%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I11_303_1_520: {
    width: wp("13.066666666666665%"),
    top: hp("3.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I11_303_1_520: {
    color: "rgba(174, 174, 178, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_I11_303_1_521: {
    width: wp("6.933333333333333%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.06666666666667%")
  },
  View_I11_303_1_522: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666657%")
  },
  View_I11_303_1_523: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I11_303_1_524: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0.2732240437158566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%")
  },
  View_I11_303_1_527: {
    width: wp("6.933333333333333%"),
    top: hp("3.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I11_303_1_527: {
    color: "rgba(174, 174, 178, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_I11_303_1_528: {
    width: wp("8.799999999999999%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.86666666666667%")
  },
  View_I11_303_1_529: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666629%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I11_303_1_530: {
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
  ImageBackground_I11_303_1_531: {
    width: wp("4.266666666666667%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I11_303_1_534: {
    width: wp("8.799999999999999%"),
    top: hp("3.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I11_303_1_534: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
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
