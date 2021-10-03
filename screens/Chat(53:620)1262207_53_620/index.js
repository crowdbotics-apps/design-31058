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
      <View style={styles.View_53_621}>
        <View style={styles.View_53_622}>
          <View style={styles.View_53_623}>
            <Text style={styles.Text_53_623}>Hey! How’s your dog? ∙ 1min</Text>
          </View>
          <View style={styles.View_53_624}>
            <Text style={styles.Text_53_624}>Will Knowles</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8717/de6a/9bb122cb8eeeae76ea2dda24ad2a54fa"
            }}
            style={styles.ImageBackground_53_625}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/471b/0d9b/64e53ceaa7de14ae0ec2dea496c37df2"
            }}
            style={styles.ImageBackground_53_626}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6c1/50cb/6f7904f0b4c11fa40bb71784a8020ffa"
            }}
            style={styles.ImageBackground_53_627}
          />
          <View style={styles.View_53_628}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f43d/3c1d/8dfd019dd3a30ec76b18f268fa1bd538"
              }}
              style={styles.ImageBackground_53_629}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/31a7/1822/c78df7bc3980580032ff351c0b4cf67f"
              }}
              style={styles.ImageBackground_53_630}
            />
          </View>
        </View>
        <View style={styles.View_53_631}>
          <View style={styles.View_53_632}>
            <Text style={styles.Text_53_632}>Let’s go out! ∙ 5h</Text>
          </View>
          <View style={styles.View_53_633}>
            <Text style={styles.Text_53_633}>Ryan Bond</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/471b/0d9b/64e53ceaa7de14ae0ec2dea496c37df2"
            }}
            style={styles.ImageBackground_53_634}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6c1/50cb/6f7904f0b4c11fa40bb71784a8020ffa"
            }}
            style={styles.ImageBackground_53_635}
          />
          <View style={styles.View_53_636}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f43d/3c1d/8dfd019dd3a30ec76b18f268fa1bd538"
              }}
              style={styles.ImageBackground_53_637}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9674/0254/86446f19ac0038fb496ebe3d38c2a092"
              }}
              style={styles.ImageBackground_53_638}
            />
          </View>
        </View>
        <View style={styles.View_53_639}>
          <View style={styles.View_53_640}>
            <Text style={styles.Text_53_640}>Hey! Long time no see ∙ 1min</Text>
          </View>
          <View style={styles.View_53_641}>
            <Text style={styles.Text_53_641}>Sirena Paul</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8717/de6a/9bb122cb8eeeae76ea2dda24ad2a54fa"
            }}
            style={styles.ImageBackground_53_642}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/471b/0d9b/64e53ceaa7de14ae0ec2dea496c37df2"
            }}
            style={styles.ImageBackground_53_643}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6c1/50cb/6f7904f0b4c11fa40bb71784a8020ffa"
            }}
            style={styles.ImageBackground_53_644}
          />
          <View style={styles.View_53_645}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f43d/3c1d/8dfd019dd3a30ec76b18f268fa1bd538"
              }}
              style={styles.ImageBackground_53_646}
            />
          </View>
        </View>
        <View style={styles.View_53_647}>
          <View style={styles.View_53_648}>
            <Text style={styles.Text_53_648}>You fed the dog? ∙ 6h</Text>
          </View>
          <View style={styles.View_53_649}>
            <Text style={styles.Text_53_649}>Matt Chapman</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/471b/0d9b/64e53ceaa7de14ae0ec2dea496c37df2"
            }}
            style={styles.ImageBackground_53_650}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6c1/50cb/6f7904f0b4c11fa40bb71784a8020ffa"
            }}
            style={styles.ImageBackground_53_651}
          />
          <View style={styles.View_53_652}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f43d/3c1d/8dfd019dd3a30ec76b18f268fa1bd538"
              }}
              style={styles.ImageBackground_53_653}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/020e/5ad0/af21d5488447fb296f5707134106a0f3"
              }}
              style={styles.ImageBackground_53_654}
            />
          </View>
        </View>
        <View style={styles.View_53_655}>
          <View style={styles.View_53_656}>
            <Text style={styles.Text_53_656}>How are you doing? ∙ 7h</Text>
          </View>
          <View style={styles.View_53_657}>
            <Text style={styles.Text_53_657}>Laura Pierce</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/471b/0d9b/64e53ceaa7de14ae0ec2dea496c37df2"
            }}
            style={styles.ImageBackground_53_658}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6c1/50cb/6f7904f0b4c11fa40bb71784a8020ffa"
            }}
            style={styles.ImageBackground_53_659}
          />
          <View style={styles.View_53_660}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f43d/3c1d/8dfd019dd3a30ec76b18f268fa1bd538"
              }}
              style={styles.ImageBackground_53_661}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae08/9d60/9683fd45128574e05d02f04f11f84f5d"
              }}
              style={styles.ImageBackground_53_662}
            />
          </View>
        </View>
        <View style={styles.View_53_663}>
          <View style={styles.View_53_664}>
            <Text style={styles.Text_53_664}>Hey! Long time no see ∙ 5h</Text>
          </View>
          <View style={styles.View_53_665}>
            <Text style={styles.Text_53_665}>Hazel Reed</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/471b/0d9b/64e53ceaa7de14ae0ec2dea496c37df2"
            }}
            style={styles.ImageBackground_53_666}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6c1/50cb/6f7904f0b4c11fa40bb71784a8020ffa"
            }}
            style={styles.ImageBackground_53_667}
          />
          <View style={styles.View_53_668}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f43d/3c1d/8dfd019dd3a30ec76b18f268fa1bd538"
              }}
              style={styles.ImageBackground_53_669}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_53_670}>
        <View style={styles.View_53_671}>
          <View style={styles.View_53_672}>
            <Text style={styles.Text_53_672}>Chat</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_53_673}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7bcb/495e/86cb87c1ccab1c68bfec0853f4e04984"
          }}
          style={styles.ImageBackground_I53_673_1_503}
        />
        <View style={styles.View_I53_673_1_504}>
          <View style={styles.View_I53_673_1_505}>
            <View style={styles.View_I53_673_1_506}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0951/de37/e283a8826a081ff0a27bc6927aff0cca"
                }}
                style={styles.ImageBackground_I53_673_1_507}
              />
            </View>
            <View style={styles.View_I53_673_1_509}>
              <Text style={styles.Text_I53_673_1_509}>Home</Text>
            </View>
          </View>
          <View style={styles.View_I53_673_1_510}>
            <View style={styles.View_I53_673_1_511}>
              <View style={styles.View_I53_673_1_512}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6968/ebc7/b2004acbe4e5d6ab2eb82d260f2310ae"
                  }}
                  style={styles.ImageBackground_I53_673_1_513}
                />
              </View>
            </View>
            <View style={styles.View_I53_673_1_520}>
              <Text style={styles.Text_I53_673_1_520}>Moments</Text>
            </View>
          </View>
          <View style={styles.View_I53_673_1_521}>
            <View style={styles.View_I53_673_1_522}>
              <View style={styles.View_I53_673_1_523}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3967/7f39/588868ce5305fd3c2715a66ab14d14b6"
                  }}
                  style={styles.ImageBackground_I53_673_1_524}
                />
              </View>
            </View>
            <View style={styles.View_I53_673_1_527}>
              <Text style={styles.Text_I53_673_1_527}>Chat</Text>
            </View>
          </View>
          <View style={styles.View_I53_673_1_528}>
            <View style={styles.View_I53_673_1_529}>
              <View style={styles.View_I53_673_1_530}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc92/2f8b/acb85641b5ea57e52a1978d2a72d91a8"
                  }}
                  style={styles.ImageBackground_I53_673_1_531}
                />
              </View>
            </View>
            <View style={styles.View_I53_673_1_534}>
              <Text style={styles.Text_I53_673_1_534}>Profile</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_53_674}>
        <View style={styles.View_I53_674_11_1501}>
          <View style={styles.View_I53_674_11_1501_1_351}>
            <View style={styles.View_I53_674_11_1501_1_352}>
              <Text style={styles.Text_I53_674_11_1501_1_352}>Search...</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8e0/de77/170e156089d8db1c5742bd5f348362ea"
            }}
            style={styles.ImageBackground_I53_674_11_1501_1_358}
          />
        </View>
        <View style={styles.View_I53_674_11_1518}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/205a/1d1d/3732f9d93c0c27ba11af5855e96df756"
            }}
            style={styles.ImageBackground_I53_674_11_1518_11_1515}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(22, 22, 22, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_53_621: {
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
  View_53_622: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("13.387978142076504%"),
    minHeight: hp("13.387978142076504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(22, 22, 22, 1)",
    overflow: "hidden"
  },
  View_53_623: {
    width: wp("62.4%"),
    top: hp("7.240437158469941%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    justifyContent: "flex-start"
  },
  Text_53_623: {
    color: "rgba(177, 177, 184, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_53_624: {
    width: wp("34.66666666666667%"),
    top: hp("3.4153005464480835%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    justifyContent: "flex-start"
  },
  Text_53_624: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_53_625: {
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
  ImageBackground_53_626: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0.000004169068049863388%"),
    minHeight: hp("0.000004169068049863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.000004169068052561897%")
  },
  ImageBackground_53_627: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0.000004169068049863388%"),
    minHeight: hp("0.000004169068049863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.251361951150528%")
  },
  View_53_628: {
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
  ImageBackground_53_629: {
    width: wp("15.466666666666667%"),
    height: hp("7.923497267759563%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_53_630: {
    width: wp("15.466666666666667%"),
    height: hp("7.923497267759563%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_53_631: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("13.387978142076504%"),
    minHeight: hp("13.387978142076504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.387978142076499%"),
    backgroundColor: "rgba(22, 22, 22, 1)",
    overflow: "hidden"
  },
  View_53_632: {
    width: wp("62.4%"),
    top: hp("7.240437158469952%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    justifyContent: "flex-start"
  },
  Text_53_632: {
    color: "rgba(177, 177, 184, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_53_633: {
    width: wp("29.333333333333332%"),
    top: hp("3.415300546448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    justifyContent: "flex-start"
  },
  Text_53_633: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_53_634: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0.000008338136099726777%"),
    minHeight: hp("0.000008338136099726777%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.000008338136098018367%")
  },
  ImageBackground_53_635: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0.000008338136099726777%"),
    minHeight: hp("0.000008338136099726777%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.25135778208248%")
  },
  View_53_636: {
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
  ImageBackground_53_637: {
    width: wp("15.466666666666667%"),
    height: hp("7.923497267759563%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_53_638: {
    width: wp("15.466666666666667%"),
    height: hp("7.923497267759563%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_53_639: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("13.387978142076504%"),
    minHeight: hp("13.387978142076504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26.775956284152997%"),
    backgroundColor: "rgba(22, 22, 22, 1)",
    overflow: "hidden"
  },
  View_53_640: {
    width: wp("62.4%"),
    top: hp("7.240437158469952%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    justifyContent: "flex-start"
  },
  Text_53_640: {
    color: "rgba(177, 177, 184, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_53_641: {
    width: wp("30.933333333333334%"),
    top: hp("3.415300546448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    justifyContent: "flex-start"
  },
  Text_53_641: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_53_642: {
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
  ImageBackground_53_643: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0.000008338136099726777%"),
    minHeight: hp("0.000008338136099726777%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.000008338136098018367%")
  },
  ImageBackground_53_644: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0.000008338136099726777%"),
    minHeight: hp("0.000008338136099726777%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.251357782082486%")
  },
  View_53_645: {
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
  ImageBackground_53_646: {
    width: wp("15.466666666666667%"),
    height: hp("7.923497267759563%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_53_647: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("13.387978142076504%"),
    minHeight: hp("13.387978142076504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("40.16393442622951%"),
    backgroundColor: "rgba(22, 22, 22, 1)",
    overflow: "hidden"
  },
  View_53_648: {
    width: wp("62.4%"),
    top: hp("7.240437158469952%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    justifyContent: "flex-start"
  },
  Text_53_648: {
    color: "rgba(177, 177, 184, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_53_649: {
    width: wp("41.86666666666667%"),
    top: hp("3.415300546448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    justifyContent: "flex-start"
  },
  Text_53_649: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_53_650: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0.000008338136099726777%"),
    minHeight: hp("0.000008338136099726777%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.000008338136105123795%")
  },
  ImageBackground_53_651: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0.000008338136099726777%"),
    minHeight: hp("0.000008338136099726777%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.251357782082472%")
  },
  View_53_652: {
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
  ImageBackground_53_653: {
    width: wp("15.466666666666667%"),
    height: hp("7.923497267759563%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_53_654: {
    width: wp("15.466666666666667%"),
    height: hp("7.923497267759563%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_53_655: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("13.387978142076504%"),
    minHeight: hp("13.387978142076504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("53.55191256830601%"),
    backgroundColor: "rgba(22, 22, 22, 1)",
    overflow: "hidden"
  },
  View_53_656: {
    width: wp("65.06666666666666%"),
    top: hp("7.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    justifyContent: "flex-start"
  },
  Text_53_656: {
    color: "rgba(177, 177, 184, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_53_657: {
    width: wp("33.86666666666667%"),
    top: hp("3.415300546448094%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    justifyContent: "flex-start"
  },
  Text_53_657: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_53_658: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0.000008338136099726777%"),
    minHeight: hp("0.000008338136099726777%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.000008338136098018367%")
  },
  ImageBackground_53_659: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0.000008338136099726777%"),
    minHeight: hp("0.000008338136099726777%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.25135778208248%")
  },
  View_53_660: {
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
  ImageBackground_53_661: {
    width: wp("15.466666666666667%"),
    height: hp("7.923497267759563%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_53_662: {
    width: wp("15.466666666666667%"),
    height: hp("7.923497267759563%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_53_663: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("13.387978142076504%"),
    minHeight: hp("13.387978142076504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("66.93989071038251%"),
    backgroundColor: "rgba(22, 22, 22, 1)",
    overflow: "hidden"
  },
  View_53_664: {
    width: wp("62.4%"),
    top: hp("7.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    justifyContent: "flex-start"
  },
  Text_53_664: {
    color: "rgba(177, 177, 184, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_53_665: {
    width: wp("29.86666666666667%"),
    top: hp("3.41530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    justifyContent: "flex-start"
  },
  Text_53_665: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_53_666: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0.000008338136099726777%"),
    minHeight: hp("0.000008338136099726777%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.000008338136098018367%")
  },
  ImageBackground_53_667: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0.000008338136099726777%"),
    minHeight: hp("0.000008338136099726777%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.251357782082465%")
  },
  View_53_668: {
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
  ImageBackground_53_669: {
    width: wp("15.466666666666667%"),
    height: hp("7.923497267759563%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_53_670: {
    width: wp("99.73333333333333%"),
    minWidth: wp("99.73333333333333%"),
    height: hp("10.10928961748634%"),
    minHeight: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.092896174863388%"),
    backgroundColor: "rgba(22, 22, 22, 1)"
  },
  View_53_671: {
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
  View_53_672: {
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
  Text_53_672: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_53_673: {
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
  ImageBackground_I53_673_1_503: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I53_673_1_504: {
    flexGrow: 1,
    width: wp("90.66666666666666%"),
    height: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("3.2786885245901516%")
  },
  View_I53_673_1_505: {
    width: wp("8.266666666666666%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I53_673_1_506: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000007%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I53_673_1_507: {
    width: wp("5.066666666666666%"),
    height: hp("2.73224043715847%"),
    top: hp("0.2732240437158566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6666666666666661%")
  },
  View_I53_673_1_509: {
    width: wp("8.266666666666666%"),
    top: hp("3.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I53_673_1_509: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_I53_673_1_510: {
    width: wp("13.066666666666665%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.133333333333333%")
  },
  View_I53_673_1_511: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I53_673_1_512: {
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
  ImageBackground_I53_673_1_513: {
    width: wp("5.866666666666666%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I53_673_1_520: {
    width: wp("13.066666666666665%"),
    top: hp("3.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I53_673_1_520: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_I53_673_1_521: {
    width: wp("6.933333333333333%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.06666666666667%")
  },
  View_I53_673_1_522: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666657%")
  },
  View_I53_673_1_523: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I53_673_1_524: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0.2732240437158566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%")
  },
  View_I53_673_1_527: {
    width: wp("6.933333333333333%"),
    top: hp("3.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I53_673_1_527: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_I53_673_1_528: {
    width: wp("8.799999999999999%"),
    height: hp("5.327868852459016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.86666666666667%")
  },
  View_I53_673_1_529: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666629%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I53_673_1_530: {
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
  ImageBackground_I53_673_1_531: {
    width: wp("4.266666666666667%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I53_673_1_534: {
    width: wp("8.799999999999999%"),
    top: hp("3.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I53_673_1_534: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_53_674: {
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
  View_I53_674_11_1501: {
    flexGrow: 1,
    width: wp("91.2%"),
    height: hp("5.669398907103825%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(65, 65, 67, 1)"
  },
  View_I53_674_11_1501_1_351: {
    flexGrow: 1,
    width: wp("38.93334147135417%"),
    height: hp("3.210382513661202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.022224934895833%"),
    top: hp("1.2295081967213122%")
  },
  View_I53_674_11_1501_1_352: {
    width: wp("32.53334147135416%"),
    minWidth: wp("32.53334147135416%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.400000000000002%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I53_674_11_1501_1_352: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_I53_674_11_1501_1_358: {
    flexGrow: 1,
    width: wp("3.555550130208333%"),
    height: hp("1.639348431363132%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.62223307291667%"),
    top: hp("2.0150273224043715%")
  },
  View_I53_674_11_1518: {
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
  ImageBackground_I53_674_11_1518_11_1515: {
    flexGrow: 1,
    width: wp("4.1698486328125%"),
    height: hp("2.1882937905566937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6173421223958337%"),
    top: hp("0.3162613331945874%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
